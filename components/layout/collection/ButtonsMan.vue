<script setup lang="ts">
import { useFavoriteStore } from '@/store/favorite.store'
import { useCartStore } from '@/store/cart.store'

const favoriteStore = useFavoriteStore()
const cartStore = useCartStore()
</script>

<template>
	<div class="mt-2 flex gap-2 justify-end">
		<div class="">
			<UiButton v-if="!favoriteStore.isFavorite" @click.prevent="favoriteStore.toggleFavorite"
				class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
				<Icon name="mynaui:heart" size="25" class="hover:scale-110 transition-all duration-400" />
			</UiButton>
			<UiButton v-else @click.prevent="favoriteStore.toggleFavorite"
				class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
				<Icon name="majesticons:heart" size="25" class="hover:scale-110 transition-all text-red-600 duration-400" />
			</UiButton>
		</div>

		<div class="">
			<UiButton v-if="!cartStore.inCart" @click.prevent="cartStore.toggleCart"
				class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
				<Icon name="gg:add" size="26" class="hover:scale-110 transition-all duration-400" />
			</UiButton>
			<UiButton v-else @click.prevent="cartStore.toggleCart"
				class="p-2 text-white  transition-all duration-400 flex items-center rounded-full bg-[#0d193c]">
				<Icon name="icons8:checked" size="26" class="hover:scale-110 transition-all text-green-600 duration-400" />
			</UiButton>
		</div>
	</div>
</template>


<style scoped>

</style>