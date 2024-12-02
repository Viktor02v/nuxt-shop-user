<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()
</script>

<template>
	<section class=" relative w-[380px] h-screen">
		<LayoutTopNav />
		<LayoutSidebar />
		<div :class="{
			'md:w-[1140px]': menuStore.isMenuOpen,
			'md:w-[1390px]': !menuStore.isMenuOpen
		}" class="transition-all w-full duration-500 mt-[80px]">
			<slot />
		</div>
	</section>
</template>


<style scoped></style>