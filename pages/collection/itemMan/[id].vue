<script setup lang="ts">
import { useManShoe } from "@/composables/useManShoe"
import { useFavoriteStore } from '@/store/favorite.store'
import { useCartStore } from '@/store/cart.store'
import { useGetManShoes } from '~/composables/useGetManShoes'

const favoriteStore = useFavoriteStore()
const cartStore = useCartStore()

const route = useRoute()
const itemId = route.params.id as string;

const { manShoe, isLoading: isLoadingShoe, isError: isErrorShoe } = useManShoe(itemId)

const { data: itemsMan, isLoading, isError } = useGetManShoes()
</script>

<template>
	<div class="p-5">
		<div v-if="isLoadingShoe"></div>
		<div v-if="manShoe" class="animation">
			<section class="w-full">
				<div class="border h-full p-5">
					<h1 class="text-center font-bold mb-10 border-b pb-5 text-[1.8rem]">{{ manShoe?.name }}</h1>
					<div class="w-full flex gap-5 item-center">
						<div
							class="border rounded flex items-center justify-center hover:scale-105 transition-all duration-500 bg-gradient-to-t from-[#020817] to-[#0F172A] w-1/2 h-[400px]">
							<NuxtImg :src="manShoe?.foto_url" class="" alt="" />
						</div>

						<div
							class="w-1/2 overflow-y-auto bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-3 transition-all h-[400px] duration-500 hover:scale-105 hover:border">
							<!-- Description -->
							<h2 class="text-center font-bold text-[1.5rem] border-b pb-3">Characteristics</h2>
							<ul class="mt-3 flex flex-col break-words gap-2">
								<li class="text-[1.3rem] font-light border-b flex items-center gap-2">Model: <span
										class='font-thin text-[1.1rem]'>{{ manShoe?.name }}</span></li>
								<li class="text-[1.3rem] font-light border-b flex items-center gap-2">Vendor: <span
										class='font-thin text-[1.1rem]'>{{ manShoe?.vendor }}</span></li>
								<li class="text-[1.3rem] font-light border-b flex items-center gap-2">Price: <span
										class='font-thin text-[1.1rem]'>{{ manShoe?.price }}</span> <span>UAN</span></li>
								<li class="text-[1.3rem] font-light border-b flex flex-col items-start gap-2">Description:
									<span class='font-thin text-[1.1rem] break-words'>
										{{ manShoe?.description }}
									</span>
								</li>
							</ul>

							<div class="mt-20 flex justify-end w-full ">
								<div class="flex items-center">
									<LayoutCollectionButtonsMan />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div v-if="isLoading">
				Carousel is Loading...
			</div>

			<section v-if="itemsMan" class="p-5 mt-10 border">
				<div class="w-full">
					<h2 class="text-center font-bold mb-5 text-[1.8rem]">Recomendations</h2>
					<LayoutCollectionCarousel>
						<template #items>
							<UiCarouselItem v-for="item in itemsMan" :key="item.$id"
								class="basis-1/3 border relative rounded bg-gradient-to-b from-[#020817] to-[#0F172A] flex items-center h-[200px] justify-center flex-shrink-0">
								<NuxtLink :to="`/collection/itemMan/${item.$id}`" class="flex items-center">
									<NuxtImg :src="item.foto_url" class="" width="200px" />
								</NuxtLink>
								<p class="absolute bottom-2 text-white text-sm">{{ item.name }}</p>
								<p class="absolute right-3 top-2 text-white text-xs">{{ item.vendor }}</p>
							</UiCarouselItem>
						</template>
					</LayoutCollectionCarousel>
				</div>
			</section>

			<div v-if="isError">
				There has been some error while loading carousel
			</div>
		</div>
		<div v-if="isErrorShoe">Something has went wrong</div>
	</div>
</template>

<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateX(-1200px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateX(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.4s ease-in-out;
}
</style>