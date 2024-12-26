<script setup lang="ts">
import { useAdaptiveStore } from '@/store/adaptive.store';
import { MENU_DATA } from '~/components/layout/sidebar/menu.data'

const adaptiveStore = useAdaptiveStore();
</script>
<template>
<div v-if="adaptiveStore.isMobile" class="fixed w-[390px] top-[80px] bg-gradient-to-b from-[#020817] to-[#0F172A] px-5  z-10">
	<div class="flex items-center justify-between py-3">
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name" @click="toggleMenu"
			class="text-[25px] flex items-center text-white hover:text-red-500 transition easy-in-out ">
			<Icon :name="item.icon" />
			<span v-if="!adaptiveStore.isMobile">{{ item.name }}</span>
		</NuxtLink>

		<a href="https://nuxt-shop-crm02v.netlify.app" target="_blank"
			class="text-[25px] flex items-center text-white hover:text-red-500 transition easy-in-out ">
			<Icon name="dashicons:admin-network" />
			<span v-if="!adaptiveStore.isMobile">Admin</span>
		</a>
	</div>
</div>
</template>



<style scoped>

</style>