<script setup lang="ts">
import { useGetOrders } from "@/composables/useGetOrders"

const { data: orders, isLoading, isError } = useGetOrders()
</script>

<template>
	<section v-if="orders && orders?.length >= 1" id="order-list"
		class="border bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-5">
		<div>
			<div class="relative flex items-center justify-center">
				<h2 class="font-bold text-[1.8rem] mb-5">Order List</h2>
				<div class="absolute md:right-2 right-0 top-0 text-end flex rounded border hover:ring-2 hover:ring-indigo-700 p-2  transition-all duration-300 gap-2">Items:<span>{{ orders?.length }}</span></div>
			</div>

			<UiTable class="border rounded">
				<UiTableCaption></UiTableCaption>
				<UiTableHeader>
					<UiTableRow>
						<UiTableHead class="w-[100px]">
							UserId
						</UiTableHead>
						<UiTableHead>UserName</UiTableHead>
						<UiTableHead>UserNumber</UiTableHead>
						<UiTableHead>City</UiTableHead>
						<UiTableHead>Status</UiTableHead>
						<UiTableHead>DeliveryMethod</UiTableHead>
						<UiTableHead>PaymentMethod</UiTableHead>
						<UiTableHead>Created</UiTableHead>
						<UiTableHead class="text-right">
							TotalPrice
						</UiTableHead>
					</UiTableRow>
				</UiTableHeader>
				<UiTableBody v-for="order in orders" :key="order.$id" class="border-b hover:ring-2 hover:ring-indigo-500 hover:scale-95   transition-all duration-500">
					<UiTableRow>
						<UiTableCell class="font-medium">
							{{ order.userId }}
						</UiTableCell>
						<UiTableCell class="">{{ order.userName }}</UiTableCell>
						<UiTableCell class="">{{ order.userNumber }}</UiTableCell>
						<UiTableCell class="">{{ order.userCity }}</UiTableCell>
						<UiTableCell class="">{{ order.status }}</UiTableCell>
						<UiTableCell class="">{{ order.deliveryMethod }}</UiTableCell>
						<UiTableCell class="">{{ order.paymentMethod }}</UiTableCell>
						<UiTableCell class="">{{ order.createdAt }}</UiTableCell>
						<UiTableCell class="text-right">
							{{ order.totalPrice }} UAN
						</UiTableCell>
					</UiTableRow>
				</UiTableBody>
			</UiTable>
		</div>
	</section>

	<LayoutMessageBlock v-else>
		<template #content>
			<div class="">
				No Orders Placed
			</div>
			<NuxtLink to="/cart" class="font-light hover:underline cursor-pointer">
				Go to Cart
			</NuxtLink>
		</template>
	</LayoutMessageBlock>
</template>



<style scoped></style>