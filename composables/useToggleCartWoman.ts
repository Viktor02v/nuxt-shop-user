import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { COLLECTION_WOMEN, DB_ID } from "~/app.constants";
import type { Item } from "@/types/shoes.types";

export function useToggleCartWoman() {
const queryClient = useQueryClient();

  // Directly use queryKey as an array (no ref needed)
const queryKey = [COLLECTION_WOMEN];

const toggleCartMutation = useMutation({
   mutationFn: async (item: Item) => {
      // Update the isFavorite property in the database
      return DB.updateDocument(DB_ID, COLLECTION_WOMEN, item.$id, {
      isAdded: !item.isAdded,
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
            shoe.$id === item.$id ? { ...shoe, isAdded: !shoe.isAdded } : shoe
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

return toggleCartMutation;
}
