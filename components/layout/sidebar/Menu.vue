<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/sidebar/menu.data'
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()

const toggleMenu = () => {
	if (menuStore.isMenuOpen) {

		menuStore.toggleMenu()
	}
}
</script>

<template>
	<div>
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name" @click="toggleMenu"
			class="text-[20px] flex  pl-3 p-3 items-center text-white hover:text-red-500 transition easy-in-out gap-[30px] md:gap-[60px] md:text-3xl">
			<Icon :name="item.icon" />
			<span>{{ item.name }}</span>
		</NuxtLink>

		<a href="https://nuxt-shop-crm02v.netlify.app" target="_blank"
			class="text-[20px] flex my-5 pl-3 items-center text-white hover:text-red-500 transition easy-in-out gap-[30px] md:gap-[60px] md:text-3xl">
			<Icon name="dashicons:admin-network" />
			<span>Admin</span>
		</a>
	</div>
</template>

<style scoped></style>