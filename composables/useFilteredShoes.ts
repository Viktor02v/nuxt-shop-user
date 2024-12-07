import { computed } from 'vue';

export function useFilteredShoes(items, isLoading, isError, filterStore) {
const sortedShoes = computed(() => {
   if (isLoading.value || isError.value || !items?.value) return [];

   const searchTerm = filterStore.search.toLowerCase().trim();
   const selectedVendor = filterStore.vendorName;

    // Start with the full list of items
   let filtered = items.value;

    // Filter by search term
   if (searchTerm) {
      filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
      );
   }

    // Filter by vendor
   if (selectedVendor) {
      filtered = filtered.filter((item) => item.vendor === selectedVendor);
   }

    // Sort by price (after applying other filters)
   if (filterStore.sortMode === 'cheapest') {
      filtered.sort((a, b) => a.price - b.price);
   } else if (filterStore.sortMode === 'expensive') {
      filtered.sort((a, b) => b.price - a.price);
   }

   return filtered;
});

return { sortedShoes };
}
