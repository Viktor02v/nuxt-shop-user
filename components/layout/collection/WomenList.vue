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

const { sortedShoes } = useFilteredShoes(itemsWomen, isLoadingWomen, isErrorWomen, filterStore);
</script>
<template>
	<div>
		<div v-if="isLoadingWomen">
			Is Loading....
		</div>
		<div v-if="itemsWomen" class="p-5 grid grid-cols-5 gap-4">

			<div v-for="item in sortedShoes" :key="item.$id" class="">
				<NuxtLink :to="`/collection/itemWoman/${item.$id}`">
					<div
						class="border animation hover:scale-105 transition-all duration-500 rounded py-5 px-2 flex flex-col items-center">
						<div class="flex flex-col">
							<div class=" min-h-[220px] flex flex-col  justify-center">
								<NuxtImg :src="item.foto_url" width="200" class="mb-4   bg-[#060D1D] rounded" />
							</div>

							<div class="flex h-[190px] overflow-y-auto gap-1 mb-2 flex-col">
								<p class="text-[1.3rem] ">{{ item.name }}</p>
								<div class="w-[100px] overflow-auto text-nowrap">
									<p class="underline font-light">{{ item.description }}</p>
								</div>
								<p class="">{{ item.vendor }}</p>
								<p class="font-light">{{ item.price }}$</p>
								<span class="underline">Show more...</span>
							</div>

							<LayoutCollectionFavoriteCartButtonsWoman :item="item" />
						</div>
					</div>
				</NuxtLink>
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