import { computed } from 'vue';

export function useFilteredShoes(items, isLoading, isError, filterStore) {
	const sortedShoes = computed(() => {
		if (isLoading.value || isError.value || !items?.value) return [];

		const searchTerm = filterStore.search.toLowerCase().trim();
		let filtered = items.value.filter(item =>
			item.name.toLowerCase().includes(searchTerm)
		);

		if (filterStore.sortMode === 'cheapest') {
			filtered.sort((a, b) => a.price - b.price);
		} else if (filterStore.sortMode === 'expensive') {
			filtered.sort((a, b) => b.price - a.price);
		}
		return filtered;
	});

	return { sortedShoes };
}
