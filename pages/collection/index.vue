<script setup lang="ts">
import { useFilterStore } from '@/store/filterbar.store'
const filterStore = useFilterStore();
</script>

<template>
	<div class="md:p-10 relative overflow-hidden w-full h-[100vh]">
		<LayoutTitle class="flex transition-all mb-10 duration-300 items-center justify-end gap-2">
			Collection
		</LayoutTitle>

		<LayoutFilterBar />

		<section id="">
			<div>
				
			</div>
		</section>
	</div>
</template>

<style scoped>
.shrink-section {
	transition: width 0.3s ease-in-out;
}
</style>