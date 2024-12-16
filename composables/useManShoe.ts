import { useQuery } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { COLLECTION_MAN, DB_ID } from "~/app.constants";
import type {ItemMan} from "@/types/shoes.types"

export function useManShoe(itemId:string) {
	const {data:manShoe, isLoading, isError} =  useQuery<ItemMan[]>({
		queryKey: ["get man shoe", itemId ],
		queryFn: () => DB.getDocument(DB_ID, COLLECTION_MAN, itemId),
	});
	
	return {
		manShoe,
		isError,
		isLoading
	};
}