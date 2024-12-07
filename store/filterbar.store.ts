export const useFilterStore = defineStore('filter',{
	state:() => ({
		isFilterOpen: false
	}),
	actions:{
		toggleMenu() {
			this.isFilterOpen = !this.isFilterOpen; 
		},
	}
})