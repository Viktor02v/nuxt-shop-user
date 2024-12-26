<script setup lang="ts">
import { useAdaptiveStore } from '@/store/adaptive.store';

const adaptiveStore = useAdaptiveStore();
</script>

<template>
	<div v-if="adaptiveStore.isMobile" class="absolute top-[10%] left-0 p-3 flex items-center gap-3 text-[25px]">
		<div :class="[!adaptiveStore.isRows ? 'bg-gradient-to-b from-[#020817] to-[#0F172A] scale-110': '', 'border transition-all duration-500 rounded-full px-2 pt-1']">
			<Icon @click="adaptiveStore.isRows = false" :class="[!adaptiveStore.isRows ? 'text-indigo-300' : '']"
				name="material-symbols:view-carousel-outline" />
		</div>
		<div :class="[adaptiveStore.isRows ? 'bg-gradient-to-t from-[#020817] to-[#0F172A] scale-110': '', 'border rounded-full transition-all duration-500 px-2 pt-1']">
			<Icon @click="adaptiveStore.isRows = true" :class="[adaptiveStore.isRows ? 'text-indigo-300' : '']"
				name="material-symbols:view-column-2-outline" />
		</div>
	</div>

</template>



<style scoped></style>