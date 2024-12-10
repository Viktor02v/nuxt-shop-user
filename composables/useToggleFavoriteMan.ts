import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { COLLECTION_MAN, DB_ID } from "~/app.constants";
import type { Item } from "@/types/shoes.types";

export function useToggleFavoriteMan() {
const queryClient = useQueryClient();

  // Directly use queryKey as an array (no ref needed)
const queryKey = [COLLECTION_MAN];

const toggleFavoriteMutation = useMutation({
   mutationFn: async (item: Item) => {
      // Update the isFavorite property in the database
      return DB.updateDocument(DB_ID, COLLECTION_MAN, item.$id, {
      isFavorite: !item.isFavorite,
      });
   },
   onMutate: async (item) => {
      // Cancel ongoing queries using the properly typed query key
      await queryClient.cancelQueries(queryKey);

      // Snapshot of current state
      const previousData = queryClient.getQueryData<Item[]>(queryKey);

      // Optimistic update
      queryClient.setQueryData<Item[]>(queryKey, (old) =>
      old
         ? old.map((shoe) =>
            shoe.$id === item.$id ? { ...shoe, isFavorite: !shoe.isFavorite } : shoe
            )
         : []
      );

      // Return context with previousData for onError
      return { previousData };
   },
   onError: (err, item, context) => {
      // Check if context is undefined
      if (context?.previousData) {
        // Rollback if context and previousData are available
      queryClient.setQueryData(queryKey, context.previousData);
      }
   },
   onSettled: () => {
      // Re-fetch data to ensure synchronization
      queryClient.invalidateQueries(queryKey);
   },
});

return toggleFavoriteMutation;
}
