import { useMutation } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { DB_ID, COLLECTION_ORDERS } from "~/app.constants";

export function useCreateOrder() {
  return useMutation({
    mutationFn: async (order: any) => {
      try {
        const response = await DB.createDocument(DB_ID, COLLECTION_ORDERS, "unique()", order);
        return response;
      } catch (error) {
        throw new Error("Failed to create order: " + error.message);
      }
    },
    onSuccess: (data) => {
      // You can add further logic for successful order creation, e.g., redirecting to an order confirmation page
      console.log("Order created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating order:", error);
    },
  });
}
