import { useStepperStore } from '@/store/stepper.store';

export function useStepNavigation() {
const stepperStore = useStepperStore();
const activeStep = ref(0);

const handleStepChange = (step: number) => {
   stepperStore.setStep(step);
   document.getElementById(`step-${step}`)?.scrollIntoView({ behavior: 'smooth' });
};

 // Intersection observer to track visibility of steps
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
	entries.forEach(entry => {
	if (entry.isIntersecting) {
		const step = Number(entry.target.id.replace('step-', ''));
		if (step !== activeStep.value) {
			activeStep.value = step;
			stepperStore.setStep(step);
		}
	}
	});
};

 // Set up Intersection Observer
const observer = ref<IntersectionObserver | null>(null);
onMounted(() => {
	observer.value = new IntersectionObserver(handleIntersection, {
	root: null,
	rootMargin: '0px',
	  threshold: 0.5, // Adjust threshold based on how much of the section should be visible
	});

	const sections = document.querySelectorAll('section[id^="step-"]');
	sections.forEach(section => observer.value?.observe(section));
});

onBeforeUnmount(() => {
	observer.value?.disconnect();
});


return { handleStepChange, activeStep };
}