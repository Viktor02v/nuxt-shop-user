<script setup lang="ts">
import { useStepNavigation } from "@/components/layout/landingPage/useStepNavigation";
import { useAdaptiveStore } from '@/store/adaptive.store';

const adaptiveStore = useAdaptiveStore();

const { handleStepChange } = useStepNavigation();


onMounted(() => {
	adaptiveStore.initializeListener();
});

onUnmounted(() => {
	adaptiveStore.removeListener();
});
</script>

<template>
	<section v-if="!adaptiveStore.isMobile" id="" class="fixed left-5 top-60 flex items-center justify-center">
		<UiStepper class="flex flex-col items-center gap-10">
			<UiStepperItem :step="1">
				<UiStepperTrigger @click="handleStepChange(1)">
					<UiStepperIndicator>1</UiStepperIndicator>
					<UiStepperTitle>Step 1</UiStepperTitle>
					<UiStepperDescription>Collections</UiStepperDescription>
				</UiStepperTrigger>
				<UiStepperSeparator />
			</UiStepperItem>
			<UiStepperItem :step="2">
				<UiStepperTrigger @click="handleStepChange(2)">
					<UiStepperIndicator>2</UiStepperIndicator>
					<UiStepperTitle>Step 2</UiStepperTitle>
					<UiStepperDescription>Cart</UiStepperDescription>
				</UiStepperTrigger>
			</UiStepperItem>
			<UiStepperItem :step="3">
				<UiStepperTrigger @click="handleStepChange(3)">
					<UiStepperIndicator>3</UiStepperIndicator>
					<UiStepperTitle>Step 3</UiStepperTitle>
					<UiStepperDescription>Order</UiStepperDescription>
				</UiStepperTrigger>
				<UiStepperSeparator />
			</UiStepperItem>
		</UiStepper>
	</section>
</template>

<style scoped></style>