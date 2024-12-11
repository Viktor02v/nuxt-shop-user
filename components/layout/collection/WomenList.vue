<script setup lang="ts">
import { useGetWomenShoes } from '~/composables/useGetWomenShoes'
import { useFilterStore } from '@/store/filterbar.store';
import { useFilteredShoes } from '@/composables/useFilteredShoes';
import { useToggleFavoriteWoman } from '@/composables/useToggleFavoriteWoman'
import { useToggleCartWoman } from '@/composables/useToggleCartWoman'

const { data: itemsWomen, isLoading: isLoadingWomen, isError: isErrorWomen } = useGetWomenShoes()
const filterStore = useFilterStore();

const { sortedShoes } = useFilteredShoes(itemsWomen, isLoadingWomen, isErrorWomen, filterStore);

const toggleFavorite = useToggleFavoriteWoman();
const toggleCart = useToggleCartWoman();
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

							<LayoutCollectionFavoriteCardButtons>
								<template #favorites>
									<UiButton v-if="!item?.isFavorite" @click.prevent="toggleFavorite.mutate(item)"
										class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
										<Icon name="mynaui:heart" size="25" class="hover:scale-110 transition-all duration-400" />
									</UiButton>
									<UiButton v-else @click.prevent="toggleFavorite.mutate(item)"
										class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
										<Icon name="majesticons:heart" size="25"
											class="hover:scale-110 transition-all text-red-600 duration-400" />
									</UiButton>
								</template>
								<template #cart>
									<UiButton v-if="!item?.isAdded" @click.prevent="toggleCart.mutate(item)"
										class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
										<Icon name="gg:add" size="26" class="hover:scale-110 transition-all duration-400" />
									</UiButton>
									<UiButton v-else @click.prevent="toggleCart.mutate(item)"
										class="p-2 text-white transition-all duration-400 flex items-center rounded-full bg-[#0d193c]">
										<Icon name="icons8:checked" size="26"
											class="hover:scale-110 transition-all text-green-600 duration-400" />
									</UiButton>
								</template>
							</LayoutCollectionFavoriteCardButtons>
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