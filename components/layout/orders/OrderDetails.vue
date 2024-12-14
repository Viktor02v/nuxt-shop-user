<script setup lang="ts">
import { useGetItemsCart } from "@/composables/useGetItemsCart"

const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
</script>

<template>
	<div class="w-1/2">
		<div class="text-cetner">
		<h2>Your Order Includes</h2>
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