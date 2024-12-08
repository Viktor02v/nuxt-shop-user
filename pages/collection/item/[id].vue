<script setup lang="ts">
import { useManShoe } from "@/composables/useManShoe"
const route = useRoute()
const itemId = route.params.id as string;

const { manShoe, isLoading, isError } = useManShoe(itemId)
</script>

<template>
	<div>
		
	</div>
</template>

<style scoped>

</style>