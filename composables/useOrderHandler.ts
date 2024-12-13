import { useGetItemsCart } from "@/composables/useGetItemsCart"
import { v4 as uuidv4 } from "uuid";
import { useUserStore } from "@/store/user.store"
import { useOrderDetailsStore } from "@/store/orderDetails.store"


export const useOrderHandler = () =>{
	const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
	const { mutate: createOrder, isError, error } = useCreateOrder();
	const userStore = useUserStore()
	const orderDetailsStore = useOrderDetailsStore()

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
	
			createOrder(order);
			alert("Order placed successfully!");
			setClean()
		} catch (error) {
			console.error("Error creating order:", error);
			alert("Failed to place order. Please try again.");
		}
	};

	return{
		handleCreateOrder,
		isLoading,
		isErrorCart,
		isError,
		error
	};
}
