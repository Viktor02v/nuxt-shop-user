<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore();
import { useAdaptiveStore } from '@/store/adaptive.store';

const adaptiveStore = useAdaptiveStore();
</script>

<template>
	<h1 v-if="!adaptiveStore.isMobile" :class="{
		'md:text-[20px]': menuStore.isMenuOpen,
		'md:text-[30px]': !menuStore.isMenuOpen
	}" class="text-right text-[20px] md:text-4xl">
			<slot />
			<span class="">|</span>
	</h1>
</template>


<style scoped>

</style>