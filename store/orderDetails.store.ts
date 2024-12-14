export const useOrderDetailsStore = defineStore('order-details',{
	state:() => ({
		delivery: '',
		payment: '',
		total: 0,
	}),
	actions:{
	}
})