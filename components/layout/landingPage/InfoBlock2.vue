<script setup lang="ts">
defineProps({
	imgSrc: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="w-[calc(100%-40px)] md:w-full flex flex-wrap-reverse justify-center md:flex md:flex-nowrap gap-5 items-stretch">
		<!-- Content Section -->
		<div class="flex flex-col gap-5 w-1/1 md:w-1/2 lg:w-1/2">
			<!-- Slot for Custom Button -->
			<slot name="button" />

			<!-- Slot for Custom Text -->
			<slot name="content" />
		</div>

		<!-- Image Section -->
		<div class="border border-[#0F172A] w-1/1 md:w-1/2 lg:w-1/2">
			<NuxtImg :src="imgSrc" class="h-full object-cover" />
		</div>
	</div>
</template>

<style scoped></style>
