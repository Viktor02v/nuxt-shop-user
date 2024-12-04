export const useStepperStore = defineStore('stepper', {
	state: () => ({
	currentStep: 1,
	isScrolling: false,
	}),
	actions: {
	setStep(step: number) {
		this.currentStep = step;
	},
	setScrolling(state: boolean) {
      this.isScrolling = state;
   },
	},
});