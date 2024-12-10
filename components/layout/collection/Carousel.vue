<script setup>
/* No specific logic required here unless dynamic features are added later. */
</script>
<template>
	<UiCarousel class="w-full flex justify-center items-center relative">
		<!-- Carousel Content -->
		<UiCarouselContent class="flex items-center gap-4">
			<slot name="items" />
		</UiCarouselContent>
		<!-- Navigation Buttons -->
		<UiCarouselPrevious class="absolute left-5 bg-gray-900 p-2 rounded-full cursor-pointer" />
		<UiCarouselNext class="absolute right-5 bg-gray-900 p-2 rounded-full cursor-pointer" />
	</UiCarousel>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>