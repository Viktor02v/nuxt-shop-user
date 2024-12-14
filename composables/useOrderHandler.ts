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
	

	const setItemsToNotAddedMan = async (items) => {
		try {
			// Iterate through items and update their `isAdded` property
			const updatePromises = items.map((item) => 
				DB.updateDocument(DB_ID, COLLECTION_MAN, item.$id, { isAdded: false })
			);

			// Wait for all updates to complete
			await Promise.all(updatePromises);
			console.log('All items updated to isAdded: false');
		} catch (error) {
			console.error('Error updating items:', error);
			throw error;
		}
	};

	const setItemsToNotAddedWoman = async (items) => {
		try {
			// Iterate through items and update their `isAdded` property
			const updatePromises = items.map((item) => 
				DB.updateDocument(DB_ID, COLLECTION_WOMEN, item.$id, { isAdded: false })
			);

			// Wait for all updates to complete
			await Promise.all(updatePromises);
			console.log('All items updated to isAdded: false');
		} catch (error) {
			console.error('Error updating items:', error);
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
	
	const handleCreateOrder = async () => {
		try {
			const items = addedItems?.value ?? [];
			if (items.length === 0) {
				alert("Your cart is empty.");
				return;
			}

			const manItems = items.filter((item) => item.isMan);
			const womanItems = items.filter((item) => item.isWoman);

			const order = {
				userName:userStore.name,
				userCity:userStore.city,
				userNumber:userStore.number,
				deliveryMethod:orderDetailsStore.delivery,
				paymentMethod:orderDetailsStore.payment,
				userId: uuidv4(), 
				totalPrice: items.reduce((sum, item) => sum + item.price, 0),
				status: "pending",
				createdAt: new Date().toISOString(),
			};

			if (manItems.length > 0) await setItemsToNotAddedMan(manItems);
			if (womanItems.length > 0) await setItemsToNotAddedWoman(womanItems);
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
