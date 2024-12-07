export const useFilterStore = defineStore('filter', {
	state: () => ({
		isFilterOpen: false,
		search: '',
		sortMode: null as 'cheapest' | 'expensive' | null,
	}),
	actions: {
		toggleMenu() {
			this.isFilterOpen = !this.isFilterOpen;
		},
	},
});
