import { useMutation } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { DB_ID, COLLECTION_ORDERS} from "~/app.constants";
import { v4 as uuidv4 } from "uuid";

export function useCreateOrder() {
	return useMutation({
	mutationFn: async (order: any) => {
		try {
			const { orderId, ...orderData } = order;

			const response = await DB.createDocument(DB_ID, COLLECTION_ORDERS, uuidv4(), orderData);

			if (!response.$id) {
			throw new Error("Failed to create order: Missing order ID");
			}

			return response;
		} catch (error) {
			throw new Error("Failed to create order: " + error.message);
		}
	},
	onSuccess: (data) => {
		console.log("Order created successfully:", data);
	},
	onError: (error) => {
		console.error("Error creating order:", error);
	},
	});
}
