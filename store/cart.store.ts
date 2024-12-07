export const useCartStore = defineStore('cart',{
	state:() => ({
		inCart: false
	}),
	actions:{
		toggleCart() {
			this.inCart = !this.inCart; 
		},
	}
})