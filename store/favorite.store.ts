export const useFavoriteStore = defineStore('favorite',{
	state:() => ({
		isFavorite: false
	}),
	actions:{
		toggleFavorite() {
			this.isFavorite = !this.isFavorite; 
		},
	}
})