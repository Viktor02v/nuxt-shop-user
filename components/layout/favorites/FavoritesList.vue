<script setup lang="ts">
const { data: favoriteItems, isLoading, isError } = useGetFavorites();
</script>

<template>
	<div class="">
		<div v-if="isLoading">
			Is Loading....
		</div>
		<div v-if="favoriteItems?.length === 0" class="flex justify-center items-center min-h-[calc(100vh-200px)]">
			<div class="p-[50px] bg-gradient-to-t from-[#020817] to-[#0F172A]  flex justify-center border rounded font-bold text-[1.8rem] items-cetner">
				<div>
					No Favorites Choosen
				</div>
			</div>
		</div>
		<div v-if="favoriteItems" class="p-5 bg-gradient-to-b from-[#020817] to-[#0F172A]  animation grid grid-cols-5 gap-4">
			<div v-for="item in favoriteItems" :key="item.$id" class="">
				<NuxtLink :to="`/collection/itemMan/${item.$id}`"
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

						<LayoutCollectionFavoriteCartButtonsMan :item="item" />
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
