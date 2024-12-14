import { useGetItemsCart } from "@/composables/useGetItemsCart"
import { v4 as uuidv4 } from "uuid";
import { useUserStore } from "@/store/user.store"
import { useOrderDetailsStore } from "@/store/orderDetails.store"
import { DB } from "~/lib/appwrite";
import { DB_ID, COLLECTION_MAN, COLLECTION_WOMEN} from "~/app.constants";


export const useOrderHandler = () =>{
	const { data: addedItems, isLoading:isLoadingCart, isError: isErrorCart } = useGetItemsCart();
	const { mutate: createOrder, isError, error } = useCreateOrder();
	const userStore = useUserStore()
	const orderDetailsStore = useOrderDetailsStore()
	

	const setItemsToNotAdded = async (items, collection) => {
		try {
			const updatePromises = items.map((item) =>
				DB.updateDocument(DB_ID, collection, item.$id, { isAdded: false })
			);

			await Promise.all(updatePromises);
			console.log(`All items in ${collection} updated to isAdded: false`);
		} catch (error) {
			console.error(`Error updating items in ${collection}:`, error);
			throw error;
		}
	};

	const setClean = () => {
		userStore.name = ''
		userStore.city = ''
		userStore.country = ''
		userStore.region = ''
		userStore.number = ''
		orderDetailsStore.delivery = ''
		orderDetailsStore.payment = ''
	}

// Function to validate required fields
	const validateOrderFields = () => {
		const { name, city, number } = userStore;
		const { delivery, payment } = orderDetailsStore;
	
	// Check if any required fields are empty
		if (!name || !city || !number || !delivery || !payment) {
			alert("Please complete all the required fields.");
			return false;
		}
		return true;
	};
	
	const handleCreateOrder = async () => {
		try {
			if (!validateOrderFields()) {
				return;
			}

			const items = addedItems?.value ?? [];
			if (items.length === 0) {
				alert("Your cart is empty.");
				return;
			}

			const manItems = items.filter((item) => item.isMan);
			const womanItems = items.filter((item) => item.isWoman);

			const order = {
				userName:userStore.name,
				userCountry:userStore.country,
				userRegion:userStore.region,
				userCity:userStore.city,
				userNumber:userStore.number,
				deliveryMethod:orderDetailsStore.delivery,
				paymentMethod:orderDetailsStore.payment,
				userId: uuidv4(), 
				totalPrice: items.reduce((sum, item) => sum + item.price, 0),
				status: "pending",
				createdAt: new Date().toISOString(),
			};

			if (manItems.length > 0) await setItemsToNotAdded(manItems,COLLECTION_MAN );
			if (womanItems.length > 0) await setItemsToNotAdded(womanItems, COLLECTION_WOMEN );

			createOrder(order);
			alert("Order placed successfully!");
			setClean();
		} catch (error) {
			console.error("Error creating order:", error);
			alert("Failed to place order. Please try again.");
		}
	};

	return{
		handleCreateOrder,
		isLoadingCart,
		isErrorCart,
		isError,
		error
	};
}
