<script setup lang="ts">

</script>

<template>
	<div class="flex animation justify-center items-center min-h-[calc(100vh-200px)]">
		<div
			class="p-[50px] bg-gradient-to-t from-[#020817] to-[#0F172A] flex justify-center border rounded font-bold text-[1.8rem] items-center">
			<div class="flex flex-col items-center">
				<slot name="content">No Content Provided</slot>
			</div>
		</div>
	</div>
</template>


<style scoped>
</style>