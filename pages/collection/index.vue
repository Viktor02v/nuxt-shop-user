<script setup lang="ts">
import { useGetManShoes } from '~/composables/useGetManShoes'
import { useGetWomenShoes } from '~/composables/useGetWomenShoes'

const { data: itemsMan, isLoading, isError } = useGetManShoes()

const { data: itemsWomen, isLoading: isLoadingWoman, isError: isErrorWoman } = useGetWomenShoes()
</script>

<template>
	<div class="md:p-10 relative overflow-hidden w-full h-[100vh]">
		<LayoutTitle class="flex transition-all mb-10 duration-300 items-center justify-end gap-2">
			Collection
		</LayoutTitle>

		<LayoutFilterBar />

		<section id="">
			<div v-for="item in itemsMan" :key="item.id">
				<div class="text-2xl flex flex-col gap-3 text-white">
					<div>
						{{ item.name }}
					</div>
					<div>
						{{ item.vendor }}
					</div>
					<div>
						{{ item.description }}
					</div>
					<div>
						<NuxtImg :src="item.foto_url"/>
					</div>
				</div>
			</div>

			<div v-for="item in itemsWomen" class="mt-20" :key="item.id">
				<div class="text-2xl flex flex-col gap-3 text-white">
					<div>
						{{ item.name }}
					</div>
					<div>
						{{ item.description }}
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.shrink-section {
	transition: width 0.3s ease-in-out;
}
</style>