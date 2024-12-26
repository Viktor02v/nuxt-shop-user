<script setup lang="ts">
import { useGetItemsCart } from "@/composables/useGetItemsCart"
const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
</script>

<template>
	<div class="md:p-10 w-full">
		<section id="favorites" class="w-full mb-10">
			<h1 class="text-[1.8rem] py-5 md:py-0 font-bold border-b pb-5 text-center">Cart</h1>

			<LayoutCartList />

			<div v-if="addedItems && addedItems?.length >= 1">
				<div class="text-center mt-8 pb-10">
					<NuxtLink to="/orders">
						<UiButton class="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600" type="button">
							Order Now
						</UiButton>
					</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>