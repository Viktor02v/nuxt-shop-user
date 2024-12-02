<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/sidebar/menu.data'
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()
</script>

<template>
	<div>

		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name"
			class="text-[20px] flex my-5 pl-3 items-center text-white hover:text-red-500 transition easy-in-out gap-[30px] md:gap-[60px] md:text-3xl">
			<Icon :name="item.icon" />
			<span>{{ item.name }}</span>
		</NuxtLink>
	</div>
</template>

<style scoped></style>