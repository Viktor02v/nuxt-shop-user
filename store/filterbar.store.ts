export const useFilterStore = defineStore('filter', {
	state: () => ({
	isFilterOpen: false,
	search: '',
	sortMode: null as 'cheapest' | 'expensive' | null,
	  vendorName: null as string | null, // Vendor filter state
	}),
	actions: {
	toggleMenu() {
		this.isFilterOpen = !this.isFilterOpen;
	},
	setVendor(vendorName: string | null) {
		this.vendorName = vendorName;
	},
	},
});
