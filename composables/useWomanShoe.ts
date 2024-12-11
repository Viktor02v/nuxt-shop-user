import { useQuery } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { COLLECTION_WOMEN, DB_ID } from "~/app.constants";
import type {ItemWoman} from "@/types/shoes.types"

export function useWomanShoe(itemId:string) {
	const {data:womanShoe, isLoading, isError} =  useQuery<ItemWoman[]>({
		queryKey: ["get women shoe", itemId ],
		queryFn: () => DB.getDocument(DB_ID, COLLECTION_WOMEN, itemId),
	});
	
	return {
		womanShoe,
		isError,
		isLoading
	};
}