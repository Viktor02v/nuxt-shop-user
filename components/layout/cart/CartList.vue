<script setup lang="ts">
import { useToggleCartMan } from '@/composables/useToggleCartMan'
import { useToggleCartWoman } from '@/composables/useToggleCartWoman'
import { useGetItemsCart } from "@/composables/useGetItemsCart"
const { data: addedItems, isLoading, isError } = useGetItemsCart();

const toggleCartMan = useToggleCartMan();
const toggleCartWoman = useToggleCartWoman();

const toggleCart = (item: any) => {
	item.isMan ? toggleCartMan.mutate(item) : toggleCartWoman.mutate(item);
};


</script>

<template>
	<div class="">
		<div v-if="isLoading">
			Is Loading....
		</div>

		<LayoutMessageBlock v-if="addedItems?.length === 0">
			<template #content>
				<div class="">
					No Items Added
				</div>
				<NuxtLink to="/collection" class="font-light hover:underline cursor-pointer">
					Go to Collection
				</NuxtLink>
			</template>
		</LayoutMessageBlock>

		<div v-if="addedItems"
			class="p-5 pr-[50px] sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			<div v-for="item in addedItems" :key="item.$id" class="animation">
				<NuxtLink :to="item.isMan ? `/collection/itemMan/${item.$id}` : `/collection/itemWoman/${item.$id}`"
					class="border animation hover:md:scale-105 transition-all duration-500 rounded py-5 px-2 flex flex-col items-center bg-gradient-to-t from-[#020817] to-[#0F172A]">
					<div class="flex flex-col">
						<div
							class="min-h-[220px] max-h-[220px] overflow-hidden p-5 md:p-0 lg:p-0 xl:p-0 flex flex-col justify-center">
							
							<NuxtImg v-if="item.foto_url" :src="item.foto_url" width="400" class="mb-4 rounded"
								:alt="item.name" />

							
							<div v-else class="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
								No Image Available
							</div>
						</div>

						<div class="flex h-[190px] overflow-y-auto gap-1 mb-2 flex-col">
							<p class="text-[1.3rem] ">{{ item.name }}</p>
							<div class="w-[100px] overflow-auto text-nowrap">
								<p class="underline font-light">{{ item.description }}</p>
							</div>
							<p class="">{{ item.vendor }}</p>
							<p class="font-light">{{ item.price }}UAN</p>
							<span class="underline">Show more...</span>
						</div>

						<LayoutCollectionFavoriteCardButtons>
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
