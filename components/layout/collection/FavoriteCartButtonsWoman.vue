<script setup lang="ts">
import { useToggleFavoriteWoman } from '@/composables/useToggleFavoriteWoman';
import { useToggleCartWoman } from '@/composables/useToggleCartWoman';
import { defineProps } from 'vue';

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});

const toggleFavorite = useToggleFavoriteWoman();
const toggleCart = useToggleCartWoman();
</script>

<template>
	<div class="mt-2 flex gap-2 justify-end">
		<!-- Favorite Button -->
		<div>
			<UiButton v-if="!props.item?.isFavorite" @click.prevent="toggleFavorite.mutate(props.item)"
				class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
				<Icon name="mynaui:heart" size="25" class="hover:scale-110 transition-all duration-400" />
			</UiButton>
			<UiButton v-else @click.prevent="toggleFavorite.mutate(props.item)"
				class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
				<Icon name="majesticons:heart" size="25" class="hover:scale-110 transition-all text-red-600 duration-400" />
			</UiButton>
		</div>

		<!-- Cart Button -->
		<div>
			<UiButton v-if="!props.item?.isAdded" @click.prevent="toggleCart.mutate(props.item)"
				class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
				<Icon name="gg:add" size="26" class="hover:scale-110 transition-all duration-400" />
			</UiButton>
			<UiButton v-else @click.prevent="toggleCart.mutate(props.item)"
				class="p-2 text-white transition-all duration-400 flex items-center rounded-full bg-[#0d193c]">
				<Icon name="icons8:checked" size="26" class="hover:scale-110 transition-all text-green-600 duration-400" />
			</UiButton>
		</div>
	</div>
</template>

<style scoped></style>