<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()

const toggleMenu = () => {
	menuStore.toggleMenu()
}
</script>

<template>
	<aside :class="{
		'translate-x-0': menuStore.isMenuOpen,
		'translate-x-[150px] md:translate-x-[250px]': !menuStore.isMenuOpen
	}"
		class="fixed top-[80px] z-10 right-0 w-[200px] md:w-[300px] h-[calc(100vh-80px)] transition-all duration-500 border border-top-white bg-gradient-to-l from-[#020817] to-[#0F172A]">
		<div class="pl-3 py-5 bodrer border-b ">
			<div class="transition-all duration-500">
				<Icon v-if="menuStore.isMenuOpen" name="line-md:close" @click="toggleMenu" class="cursor-pointer"
					size="30" />
				<Icon v-else name="line-md:menu" @click="toggleMenu" class="cursor-pointer" size="30" />
			</div>

		</div>
		<LayoutSidebarMenu />
	</aside>
</template>

<style scoped>

</style>