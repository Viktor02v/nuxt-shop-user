export const useFilterStore = defineStore('filter',{
	state:() => ({
		isFilterOpen: false,
		search: ''
	}),
	actions:{
		toggleMenu() {
			this.isFilterOpen = !this.isFilterOpen; 
		},
	}
})