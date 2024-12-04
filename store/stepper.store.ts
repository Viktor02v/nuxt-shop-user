export const useStepperStore = defineStore('stepper', {
	state: () => ({
	currentStep: 1,
	}),
	actions: {
	setStep(step: number) {
		this.currentStep = step;
	},
	},
});