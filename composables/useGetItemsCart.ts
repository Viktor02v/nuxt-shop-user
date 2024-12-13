import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_MAN, COLLECTION_WOMEN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ItemAdded } from "@/types/shoes.types";

// Fetch items from two collections and merge them
export function useGetItemsCart() {
	return useQuery({
		queryKey: ['get-added'],
		queryFn: async () => {
			// Fetch documents from both collections
			const responseMan = await DB.listDocuments(DB_ID, COLLECTION_MAN);
			const responseWomen = await DB.listDocuments(DB_ID, COLLECTION_WOMEN);
			
			// Merge the documents from both collections
			const mergedItems = [
				...responseMan.documents,
				...responseWomen.documents
			];
			
			// Filter items where 'isAdded' is true
			const addedItems = mergedItems.filter(item => item.isAdded === true);
			return addedItems as unknown as ItemAdded[];
		},
		select(data) {
			// Optionally process the data if necessary
			return data as ItemAdded[];
		},
	});
}
