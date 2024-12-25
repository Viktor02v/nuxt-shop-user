<script setup lang="ts">
</script>

<template>
	<div class="flex animation justify-center items-center min-h-[calc(100vh-200px)] p-4">
		<div
			class="p-4 sm:p-6 md:p-10 bg-gradient-to-t from-[#020817] to-[#0F172A] flex justify-center border rounded font-bold text-base sm:text-lg md:text-2xl items-center">
			<div class="flex flex-col items-center text-center">
				<slot name="content">No Content Provided</slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
