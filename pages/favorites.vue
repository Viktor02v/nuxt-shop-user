<script setup lang="ts">

</script>

<template>
	<div class="md:p-10 w-full">
		<section id="favorites" class="w-full mb-10">
			<div class="relative">
				<h1 class="text-[1.8rem] py-5 md:py-0 font-bold border-b pb-5 text-center">Favorites</h1>
				<LayoutCollectionViewButtons />
			</div>
			<LayoutFavoritesList />
		</section>
	</div>
</template>

<style scoped></style>