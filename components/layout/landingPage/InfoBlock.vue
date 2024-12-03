<script setup lang="ts">
defineProps({
	imgSrc: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="w-full flex gap-5 items-stretch">
		<!-- Image Section -->
		<div class="border w-1/2 border-[#0F172A]">
			<NuxtImg :src="imgSrc" class="h-full object-cover" />
		</div>

		<!-- Content Section -->
		<div class="flex flex-col gap-5 w-1/2">
			<!-- Slot for Custom Text -->
			<slot name="content" />

			<!-- Slot for Custom Button -->
			<slot name="button" />
		</div>
	</div>
</template>

<style scoped>

</style>
