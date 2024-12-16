<script setup lang="ts">
import { useToggleFavoriteMan } from '@/composables/useToggleFavoriteMan'
import { useToggleCartMan } from '@/composables/useToggleCartMan'
import { useToggleFavoriteWoman } from '@/composables/useToggleFavoriteWoman'
import { useToggleCartWoman } from '@/composables/useToggleCartWoman'
const { data: favoriteItems, isLoading, isError } = useGetFavorites();

const toggleFavoriteMan = useToggleFavoriteMan();
const toggleCartMan = useToggleCartMan();
const toggleFavoriteWoman = useToggleFavoriteWoman();
const toggleCartWoman = useToggleCartWoman();

const toggleFavorite = (item: any) => {
	item.isMan ? toggleFavoriteMan.mutate(item) : toggleFavoriteWoman.mutate(item);
};

const toggleCart = (item: any) => {
	item.isMan ? toggleCartMan.mutate(item) : toggleCartWoman.mutate(item);
};
</script>

<template>
	<div class="">
		<div v-if="isLoading">
			Is Loading....
		</div>

		<LayoutMessageBlock v-if="favoriteItems?.length === 0">
			<template #content>
				<div class="">
					No Favorites Choosen
				</div>
				<NuxtLink to="/collection" class="font-light hover:underline cursor-pointer">
					Go to Collection
				</NuxtLink>
			</template>
		</LayoutMessageBlock>

		<div v-if="favoriteItems" class="p-5 bg-gradient-to-b from-[#020817] to-[#0F172A] grid grid-cols-5 gap-4">
			<div v-for="item in favoriteItems" :key="item.$id" class="animation">
				<NuxtLink :to="item.isMan ? `/collection/itemMan/${item.$id}` : `/collection/itemWoman/${item.$id}`"
					class="border animation hover:scale-105 transition-all duration-500 rounded py-5 px-2 flex flex-col items-center">
					<div class="flex flex-col">
						<div class=" min-h-[220px] flex flex-col  justify-center">
							<img :src="item.foto_url" width="200" class="mb-4 bg-[#060D1D] rounded" />
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
								<UiButton v-if="!item?.isFavorite" @click.prevent="toggleFavorite(item)"
									class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
									<Icon name="mynaui:heart" size="25" class="hover:scale-110 transition-all duration-400" />
								</UiButton>
								<UiButton v-else @click.prevent="toggleFavorite(item)"
									class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
									<Icon name="majesticons:heart" size="25"
										class="hover:scale-110 transition-all text-red-600 duration-400" />
								</UiButton>
							</template>
							<template #cart>
								<UiButton v-if="!item?.isAdded" @click.prevent="toggleCart(item)"
									class="p-2 flex items-center text-white rounded-full bg-[#0d193c]">
									<Icon name="gg:add" size="26" class="hover:scale-110 transition-all duration-400" />
								</UiButton>
								<UiButton v-else @click.prevent="toggleCart(item)"
									class="p-2 text-white transition-all duration-400 flex items-center rounded-full bg-[#0d193c]">
									<Icon name="icons8:checked" size="26"
										class="hover:scale-110 transition-all text-green-600 duration-400" />
								</UiButton>
							</template>
						</LayoutCollectionFavoriteCardButtons>
					</div>
				</NuxtLink>
			</div>
		</div>

		<div v-if="isError">`There has been some error:{{ isError }}`</div>
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
