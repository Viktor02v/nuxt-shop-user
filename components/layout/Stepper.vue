<script setup lang="ts">

</script>

<template>
	<section id="" class="fixed left-3 top-60 flex items-center justify-center">
		<UiStepper class="flex flex-col gap-10">
			<UiStepperItem :step="1">
				<UiStepperTrigger>
					<UiStepperIndicator>1</UiStepperIndicator>
					<UiStepperTitle>Step 1</UiStepperTitle>
					<UiStepperDescription>This is the first step</UiStepperDescription>
				</UiStepperTrigger>
				<UiStepperSeparator />
			</UiStepperItem>
			<UiStepperItem :step="2">
				<UiStepperTrigger>
					<UiStepperIndicator>2</UiStepperIndicator>
					<UiStepperTitle>Step 2</UiStepperTitle>
					<UiStepperDescription>This is the second step</UiStepperDescription>
				</UiStepperTrigger>
			</UiStepperItem>
			<UiStepperItem :step="3">
				<UiStepperTrigger>
					<UiStepperIndicator>3</UiStepperIndicator>
					<UiStepperTitle>Step 3</UiStepperTitle>
					<UiStepperDescription>This is the first step</UiStepperDescription>
				</UiStepperTrigger>
				<UiStepperSeparator />
			</UiStepperItem>
		</UiStepper>
	</section>
</template>

<style scoped></style>