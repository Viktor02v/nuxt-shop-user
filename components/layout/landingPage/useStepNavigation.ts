import { useStepperStore } from '@/store/stepper.store';

export function useStepNavigation() {
const stepperStore = useStepperStore();

const handleStepChange = (step: number) => {
   stepperStore.setStep(step);
   document.getElementById(`step-${step}`)?.scrollIntoView({ behavior: 'smooth' });
};

return { handleStepChange };
}