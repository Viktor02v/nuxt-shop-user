export const useAdaptiveStore = defineStore('adaptive', {
	state: () => ({
		isMobile: false,
		isRows:false,
	}),
	actions: {
		toggleView() {
			this.isRows = !this.isRows; 
		},

		checkDeviceSize() {
		this.isMobile = window.matchMedia('(max-width: 768px)').matches;
		},

		initializeListener() {
		this.checkDeviceSize();
		window.addEventListener('resize', this.checkDeviceSize);
		},
		
		removeListener() {
		window.removeEventListener('resize', this.checkDeviceSize);
		},
	},
})
