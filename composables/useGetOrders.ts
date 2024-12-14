import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_ORDERS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ItemOrder } from "@/types/shoes.types";

export function useGetOrders() {
	return useQuery({
		queryKey: ['get-orders'],
		queryFn: async () => {
			const response = await DB.listDocuments(DB_ID, COLLECTION_ORDERS);
			return response.documents as unknown as ItemOrder[];
		},
		select(data) {
			const orders = data as unknown as ItemOrder[];
			return orders;
		},
	});
}

