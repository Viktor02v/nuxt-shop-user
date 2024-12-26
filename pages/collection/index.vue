<script setup lang="ts">


</script>

<template>
	<div class="md:p-10 relative overflow-hidden w-full">
		<LayoutTitle class="flex transition-all mb-10 duration-300 items-center justify-end gap-2">
			Collection
		</LayoutTitle>

		<LayoutFilterBar />


		<div id="man-section" class="w-full mb-10">
			<div class="relative">
				<h1 class="text-[1.8rem] py-5 md:py-0 font-bold border-b pb-3 text-center">For Man</h1>
				<LayoutCollectionViewButtons/>
			</div>
			<LayoutCollectionManList />
		</div>

		<div id="women-section" class="w-full">
			<h1 class="text-[1.8rem] py-5 md:py-0 font-bold border-b pb-3 text-center">For Woman</h1>

			<LayoutCollectionWomenList />
		</div>
	</div>
</template>

<style scoped></style>