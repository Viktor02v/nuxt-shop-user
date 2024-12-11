import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_MAN, COLLECTION_WOMEN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ItemFavorite } from "@/types/shoes.types";

// Fetch items from two collections and merge them
export function useGetFavorites() {
	return useQuery({
		queryKey: ['get-favorites'],
		queryFn: async () => {
			// Fetch documents from both collections
			const responseMan = await DB.listDocuments(DB_ID, COLLECTION_MAN);
			const responseWomen = await DB.listDocuments(DB_ID, COLLECTION_WOMEN);
			
			// Merge the documents from both collections
			const mergedItems = [
				...responseMan.documents,
				...responseWomen.documents
			];
			
			// Filter items where 'isFavorite' is true
			const favoriteItems = mergedItems.filter(item => item.isFavorite === true);
			return favoriteItems as unknown as ItemFavorite[];
		},
		select(data) {
			// Optionally process the data if necessary
			return data as ItemFavorite[];
		},
	});
}
