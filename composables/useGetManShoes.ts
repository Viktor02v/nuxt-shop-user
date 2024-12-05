import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_MAN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { Item } from "@/types/shoes.types";


export function useGetManShoes() {
	return useQuery({
		queryKey: ['man-shoes'],
		queryFn: async () => {
			const response = await DB.listDocuments(DB_ID, COLLECTION_MAN);
			return response.documents as unknown as Item[];
		},
		select(data) {
			const itemsMan = data as unknown as Item[];
			return itemsMan;
		},
	});
}