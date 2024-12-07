<script setup lang="ts">
import { useFilterStore } from '@/store/filterbar.store'
const filterStore = useFilterStore();

const toggleFilter = () => filterStore.toggleMenu();

const setSortMode = (mode: 'cheapest' | 'expensive') => {
	filterStore.sortMode = mode;
};

</script>

<template>
	<aside :class="{
		'translate-x-0': filterStore.isFilterOpen,
		'translate-x-[0px] md:translate-x-[-300px]': !filterStore.isFilterOpen
	}"
		class="fixed left-0 bottom-0 transition-all duration-500  bg-gradient-to-l from-[#020817] to-[#0F172A] h-[calc(100vh-80px)]">
		<div class="w-[315px] relative">
			<div class="fixed top-[80px] flex text-2xl justify-center gap-2 items-center left-0 w-[300px] h-[80px]">
				<div>
					Filters
				</div>
				<Icon name="line-md:filter" size="25" />
			</div>

			<div class="fixed top-[160px] h-full p-2 w-[300px] left-0">
				<div class="p-5 flex flex-col gap-5 border rounded">
					<LayoutFilterBarField>
						<template v-slot:label>
							By name:
						</template>
						<template v-slot:input>
							<UiInput v-model="filterStore.search" placeholder="Search..." />
						</template>
					</LayoutFilterBarField>

					<div>
						<p class="text-center text-[1.2rem] pb-2">By Prices</p>
						<ul class="flex cursor-pointer underline border-b pb-8 flex-col gap-1">
							<li @click="setSortMode('cheapest')">Search Cheapes</li>
							<li @click="setSortMode('expensive')">Search More Expensive</li>
						</ul>
					</div>

					<div class="">
						<p class="text-center text-[1.2rem] pb-2">By Vendors</p>
						<ul class="flex cursor-pointer underline flex-col gap-1">
							<li>Nike</li>
							<li>Adidas</li>
							<li>Puma</li>
							<li>Swoosh</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="fixed transition-all duration-500 hover:scale-125 top-[450px] left-[300px]">
				<Icon v-if="!filterStore.isFilterOpen" @click="toggleFilter" name="mynaui:panel-right-close" size="40"
					class="cursor-pointer" />
				<Icon v-else @click="toggleFilter" name="mynaui:panel-left-close" size="40" class="cursor-pointer" />
			</div>
		</div>
	</aside>
</template>

<style scoped></style>