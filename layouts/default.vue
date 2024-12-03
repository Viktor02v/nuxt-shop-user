<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
import { useIsLoadingStore } from '@/store/loader.store';

const menuStore = useMenuStore();
const loadingStore = useIsLoadingStore();
</script>

<template>
	<div>
		<!-- <LayoutLoader v-if="loadingStore.isLoading" /> -->
		<section class=" relative w-[380px] h-[100vh]">
			<LayoutTopNav />
			<LayoutSidebar />
			<div :class="{
				'md:w-[1140px]': menuStore.isMenuOpen,
				'md:w-[1390px]': !menuStore.isMenuOpen
			}" class="transition-all w-full duration-500 mt-[80px]">
				<slot />
			</div>
		</section>
	</div>
</template>


<style scoped>

</style>