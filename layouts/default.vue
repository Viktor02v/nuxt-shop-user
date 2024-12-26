<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
import { useFilterStore } from '@/store/filterbar.store'
const filterStore = useFilterStore();
const menuStore = useMenuStore();
</script>

<template>
	<div>
		<!-- <LayoutLoader v-if="loadingStore.isLoading" /> -->
		<section class=" relative w-[390px] md:w-[380px] h-[100vh]">
			<LayoutTopNav />
			<LayoutSidebar />
			<LayoutSidebarMobileBar/>
			<div :class="{
				'md:w-[1080px]': filterStore.isFilterOpen && !menuStore.isMenuOpen, // Only filter is open
				'md:w-[1140px]': menuStore.isMenuOpen && !filterStore.isFilterOpen, // Only menu is open
				'md:w-[830px]': menuStore.isMenuOpen && filterStore.isFilterOpen,  // Both are open
				'md:w-[1390px]': !menuStore.isMenuOpen && !filterStore.isFilterOpen // Neither is open
			}" :style="{
				marginLeft: filterStore.isFilterOpen ? '310px' : ''
			}" class="transition-all w-full h-full duration-500 mt-[120px] md:mt-[80px]">
				<slot />
			</div>
		</section>
	</div>
</template>


<style scoped></style>