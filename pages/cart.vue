<script setup lang="ts">
import { ref } from "vue"
import { v4 as uuidv4 } from "uuid";
import { useGetItemsCart } from "@/composables/useGetItemsCart"

const { data: addedItems, isLoading, isError: isErrorCart } = useGetItemsCart();

const { mutate: createOrder, isError, error } = useCreateOrder();

// Create the order and items
const handleCreateOrder = async () => {
	try {
		const items = addedItems?.value ?? [];
		if (items.length === 0) {
			alert("Your cart is empty.");
			return;
		}

		// Order creation without the manual orderId
		const order = {
			userId: uuidv4(), // Use the actual user ID
			totalPrice: items.reduce((sum, item) => sum + item.price, 0),
			status: "pending",
			createdAt: new Date().toISOString(),
		};

		createOrder(order);
		alert("Order placed successfully!");
	} catch (error) {
		console.error("Error creating order:", error);
		alert("Failed to place order. Please try again.");
	}
};

</script>

<template>
	<div class="md:p-10 w-full">
		<section id="favorites" class="w-full mb-10">
			<h1 class="text-[1.8rem] font-bold border-b pb-5 text-center">Cart</h1>

			<LayoutCartList />

			<div>
				<!-- Existing cart items rendering -->
				<div v-if="addedItems">
					<!-- Render cart items -->
					<div class="text-center mt-8">
						<UiButton @click="handleCreateOrder"
							class="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600" type="button">
							Order Now
						</UiButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped></style>