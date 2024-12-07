<script setup lang="ts">
import { useGetWomenShoes } from '~/composables/useGetWomenShoes'
import { useFavoriteStore } from '@/store/favorite.store'
import { useCartStore } from '@/store/cart.store'
import { useFilterStore } from '@/store/filterbar.store';
import { useFilteredShoes } from '@/composables/useFilteredShoes';

const favoriteStore = useFavoriteStore()
const cartStore = useCartStore()

const { data: itemsWomen, isLoading: isLoadingWomen, isError: isErrorWomen } = useGetWomenShoes()
const filterStore = useFilterStore();

const { filteredShoes } = useFilteredShoes(itemsWomen, isLoadingWomen, isErrorWomen, filterStore);
</script>
<template>
	<div>
		<div v-if="isLoadingWomen">
			Is Loading....
		</div>
		<div v-if="itemsWomen" class="p-5 grid grid-cols-5 gap-4">
			<div v-for="item in filteredShoes" :key="item.$id" class="">
				<div
					class="border animation hover:scale-105 transition-all duration-500 rounded py-5 px-2 flex flex-col items-center">
					<div class="flex flex-col">
						<div class=" min-h-[220px] flex flex-col  justify-center">
							<NuxtImg :src="item.foto_url" width="200" class="mb-4   bg-[#060D1D] rounded" />
						</div>

						<div class="flex gap-1 mb-2 flex-col">
							<p class="text-[1.3rem] ">{{ item.name }}</p>
							<div class="w-[100px] overflow-auto text-nowrap">
								<p class="underline font-light">{{ item.description }}</p>
							</div>
							<p class="">{{ item.vendor }}</p>
							<p class="font-light">{{ item.price }}$</p>
							<span class="underline">Show more...</span>
						</div>

						<div class="mt-2 flex gap-2 justify-end">
							<div class="">
								<p v-if="!favoriteStore.isFavorite" @click="favoriteStore.toggleFavorite"
									class="p-2 flex items-center rounded-full bg-[#0d193c]">
									<Icon name="mynaui:heart" size="25" class="hover:scale-110 transition-all duration-400" />
								</p>
								<p v-else @click="favoriteStore.toggleFavorite"
									class="p-2 flex items-center rounded-full bg-[#0d193c]">
									<Icon name="majesticons:heart" size="25"
										class="hover:scale-110 transition-all text-red-600 duration-400" />
								</p>
							</div>

							<div class="">
								<p v-if="!cartStore.inCart" @click="cartStore.toggleCart"
									class="p-2 flex items-center rounded-full bg-[#0d193c]">
									<Icon name="gg:add" size="26" class="hover:scale-110 transition-all duration-400" />
								</p>
								<p v-else @click="cartStore.toggleCart" class="p-2 flex items-center rounded-full bg-[#0d193c]">
									<Icon name="icons8:checked" size="26"
										class="hover:scale-110 transition-all text-green-600 duration-400" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.6s ease-in-out;
}
</style>