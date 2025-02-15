import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_WOMEN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ItemWoman } from "@/types/shoes.types";


export function useGetWomenShoes() {
	return useQuery({
		queryKey: ['women-shoes'],
		queryFn: async () => {
			const response = await DB.listDocuments(DB_ID, COLLECTION_WOMEN);
			return response.documents as unknown as ItemWoman[];
		},
		select(data) {
			const itemsWomen = data as unknown as ItemWoman[];
			return itemsWomen;
		},
	});
}