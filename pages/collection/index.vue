<script setup lang="ts">

</script>

<template>
	<div class="md:p-10 relative overflow-hidden w-full">
		<LayoutTitle class="flex transition-all mb-10 duration-300 items-center justify-end gap-2">
			Collection
		</LayoutTitle>

		<LayoutFilterBar />


		<section id="man-section" class="w-full mb-10">
			<h1 class="text-[1.8rem] font-bold border-b pb-3 text-center">For Man</h1>

			<LayoutCollectionManList />
		</section>

		<section id="women-section" class="w-full">
			<h1 class="text-[1.8rem] font-bold border-b pb-3 text-center">For Women</h1>

			<LayoutCollectionWomenList />
		</section>
	</div>
</template>

<style scoped></style>