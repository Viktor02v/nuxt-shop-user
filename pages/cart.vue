<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_MAN, COLLECTION_WOMEN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import { useGetItemsCart } from "@/composables/useGetItemsCart"
const { data: addedItems, isLoading } = useGetItemsCart();

const createOrder = async () => {
	try {
		// Create an order object
		const order = {
			userId: "1", // Replace with the actual user ID
			items: addedItems.value.map(item => ({
				id: item.$id,
				name: item.name,
				price: item.price,
				quantity: 1, // Add quantity handling if required
			})),
			totalPrice: addedItems.value.reduce((sum, item) => sum + item.price, 0),
			status: "pending",
			createdAt: new Date().toISOString(),
		};

		// Save the order to Appwrite
		await databases.createDocument(DB_ID, ORDERS_COLLECTION, "unique()", order);
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
						<UiButton class="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600">
							Order Now
						</UiButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped></style>