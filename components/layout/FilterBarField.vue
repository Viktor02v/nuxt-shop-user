<script setup lang="ts">
defineProps({
  inputId: {
    type: String,
    required: true
  }
})
</script>

<template>
	<div class="w-full flex flex-col gap-1 border p-2 rounded">
		<label class="text-[1.2rem]" :for="inputId">
			<slot name="label"></slot>
		</label>
		<slot name="input"></slot>
	</div>
</template>

<style scoped></style>