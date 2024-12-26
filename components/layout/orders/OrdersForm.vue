<script setup lang="ts">
import { useGetItemsCart } from "@/composables/useGetItemsCart"
import { useUserStore } from "@/store/user.store"
import { useOrderDetailsStore } from "@/store/orderDetails.store"
import { useOrderHandler } from "@/composables/useOrderHandler"


const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
const { handleCreateOrder, isPending: isCreating, isError } = useOrderHandler();

const userStore = useUserStore()
const orderDetailsStore = useOrderDetailsStore()
</script>

<template>
	<section v-if="addedItems && addedItems?.length >= 1" id="order-form" class="w-full animation">
		<div class="text-center font-bold text-[1.8rem] mb-5">
			<h1>Your orders</h1>
		</div>

		<div class="border bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-5">
			<div class="flex justify-center">
				<div class="md:w-1/2 w-full">
					<div class="mb-10">
						<div class="mb-1 text-center">
							<h2 class="font-light text-[1.5rem]">Form Assignment:</h2>
						</div>
						<form class="flex flex-col gap-2">
							<UiInput v-model="userStore.name" placeholder="Name" />
							<UiInput v-model="userStore.country" placeholder="Country" />
							<UiInput v-model="userStore.city" placeholder="City" />
							<UiInput v-model="userStore.region" placeholder="Region" />
							<UiInput v-model="userStore.number" placeholder="Phone Number" />

							<UiSelect v-model="orderDetailsStore.delivery">
								<UiSelectTrigger>
									<UiSelectValue placeholder="Select Delivery Method" />
								</UiSelectTrigger>
								<UiSelectContent>
									<UiSelectGroup>
										<UiSelectLabel>Methods</UiSelectLabel>
										<UiSelectItem value="NovaPost">
											NovaPost
										</UiSelectItem>
										<UiSelectItem value="УкрPost">
											УкрPost
										</UiSelectItem>
									</UiSelectGroup>
								</UiSelectContent>
							</UiSelect>

							<UiSelect v-model="orderDetailsStore.payment">
								<UiSelectTrigger>
									<UiSelectValue placeholder="Select Payment Method" />
								</UiSelectTrigger>
								<UiSelectContent>
									<UiSelectGroup>
										<UiSelectLabel>Methods</UiSelectLabel>
										<UiSelectItem value="PayPal">
											PayPal
										</UiSelectItem>
										<UiSelectItem value="MasterCard">
											MasterCard
										</UiSelectItem>
										<UiSelectItem value="Visa">
											Visa
										</UiSelectItem>
									</UiSelectGroup>
								</UiSelectContent>
							</UiSelect>
						</form>
					</div>

					<LayoutOrdersOrderDetails />


					<div class="text-center mt-8">
						<UiButton @click="handleCreateOrder"
							class="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600" type="button">
							Create Order
						</UiButton>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.6s ease-in-out;
}
</style>