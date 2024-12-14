<script setup lang="ts">
import { useGetItemsCart } from "@/composables/useGetItemsCart"
import { useOrderDetailsStore } from "@/store/orderDetails.store"

const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
const orderStore = useOrderDetailsStore()

onMounted(() => {
	calcTotal()
})

const calcTotal = () => {
	const items = addedItems?.value ?? [];
	const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
	orderStore.total = totalPrice;
};

</script>

<template>
	<div class="">
		<div class="text-center">
			<h2 class="font-light mb-5 text-[1.5rem]">Your Order Includes:</h2>
		</div>

		<UiTable class="border rounded">
			<UiTableCaption></UiTableCaption>
			<UiTableHeader>
				<UiTableRow>
					<UiTableHead class="w-[100px]">
						Name
					</UiTableHead>
					<UiTableHead>Vendor</UiTableHead>
					<UiTableHead></UiTableHead>
					<UiTableHead class="text-right">
						Price
					</UiTableHead>
				</UiTableRow>
			</UiTableHeader>
			<UiTableBody v-for="item in addedItems" :key="item.$id" class="border-b">
				<UiTableRow>
					<UiTableCell class="font-medium border-r">
						{{ item.name }}
					</UiTableCell>
					<UiTableCell class="border-r">{{ item.vendor }}</UiTableCell>
					<UiTableCell class="flex">
						<div class="w-full flex items-cetner justify-end ">
							<NuxtImg :src="item.foto_url" width="40" />
						</div>
					</UiTableCell>
					<UiTableCell class="text-right">
						{{ item.price }} UAN
					</UiTableCell>
				</UiTableRow>
			</UiTableBody>

			<div class="flex py-5 px-3 text-[1.2rem] gap-2 items-end">
				<p class="font-bold ">Total:</p>
				<span class="font-light">{{ orderStore.total }}</span>
				<span class="font-light">UAN</span>
			</div>
		</UiTable>
	</div>


</template>

<style scoped></style>