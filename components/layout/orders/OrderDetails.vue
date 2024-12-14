<script setup lang="ts">
import { useGetItemsCart } from "@/composables/useGetItemsCart"

const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
</script>

<template>
	<div class="">
		<div class="text-center">
			<h2 class="font-light text-[1.5rem]">Your Order Includes:</h2>
		</div>
		<div v-for="item in addedItems" :key="item.$id">
			<div>
				{{ item.name }}
			</div>
			<div>
				{{ item.price }}
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>