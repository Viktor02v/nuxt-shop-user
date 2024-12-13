import { useGetItemsCart } from "@/composables/useGetItemsCart"
import { v4 as uuidv4 } from "uuid";
import { useUserStore } from "@/store/user.store"


export const useOrderHandler = () =>{
	const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
	const userStore = useUserStore()
   const { mutate: createOrder, isError, error } = useCreateOrder();
	
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
				userId: uuidv4(), 
				totalPrice: items.reduce((sum, item) => sum + item.price, 0),
				status: "pending",
				createdAt: new Date().toISOString(),
			};
	
			createOrder(order);
			alert("Order placed successfully!");
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
