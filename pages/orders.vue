<script setup lang="ts">
import { useOrderHandler } from "@/composables/useOrderHandler"
import { useGetItemsCart } from "@/composables/useGetItemsCart"
import { useUserStore } from "@/store/user.store"

const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();
const { handleCreateOrder, isLoading: isCreating, isError } = useOrderHandler();

const userStore = useUserStore()
</script>

<template>
	<div class="w-full p-5">
		<div class="text-center font-bold text-[1.8rem] border-b pb-5">
			<h1>Your orders</h1>
		</div>

		<section id="order-form" class="w-full mt-10">
			<div class="border bg-gradient-to-t from-[#020817] to-[#0F172A] rounded p-5">
				<div class="flex justify-center">
					<div class="w-1/2">
						<div class="mb-10">
							<div class="mb-1">
								<h2>Form Assignment:</h2>
							</div>
							<form class="flex flex-col gap-2">
								<UiInput v-model="userStore.name" placeholder="Name" />
								<UiInput v-model="userStore.country" placeholder="Country" />
								<UiInput v-model="userStore.city" placeholder="City" />
								<UiInput v-model="userStore.region" placeholder="Region" />
								<UiInput v-model="userStore.number" placeholder="Phone Number" />
								
							</form>
						</div>

						<div class="w-1/2">
							<div class="text-cetner">
								<h2>Your Order Includes</h2>
							</div>
							<div v-for="item in addedItems" :key="item.$id">
								<div>
									{{ item.name }}
								</div>
								<div>
									{{ item.price }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="text-center mt-8">
					<UiButton @click="handleCreateOrder" class="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600"
						type="button">
						Create Order
					</UiButton>
				</div>
			</div>
		</section>

		<section id="order-list">

		</section>
	</div>
</template>


<style scoped></style>