import { computed } from 'vue';

export function useFilteredShoes(items, isLoading, isError, filterStore) {
const filteredShoes = computed(() => {
    if (isLoading.value) return []; // Handle loading state
    if (isError.value) return [];  // Handle error state

   const searchTerm = filterStore.search.toLowerCase().trim();
   if (!items || !Array.isArray(items.value)) return [];
   if (!searchTerm) return items.value;

   return items.value.filter((item) =>
      item.name.toLowerCase().startsWith(searchTerm)
   );
});

return { filteredShoes };
}