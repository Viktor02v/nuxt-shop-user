<script setup lang="ts">
import { useToggleFavoriteWoman } from '@/composables/useToggleFavoriteWoman';
import { useToggleCartWoman } from '@/composables/useToggleCartWoman';
import { defineProps } from 'vue';

const toggleFavorite = useToggleFavoriteWoman();
const toggleCart = useToggleCartWoman();
</script>

<template>
	<div class="mt-2 flex gap-2 justify-end">
		<!-- Favorite Button -->
		<div>
			<slot name="favorites" />
		</div>

		<!-- Cart Button -->
		<div>
			<slot name="cart" />
		</div>
	</div>
</template>

<style scoped>

</style>
