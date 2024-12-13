<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_ORDER_ITEMS, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
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

		const createdOrder = await createOrder(order);

		// Check if the order was created and has a valid $id
		if (!createdOrder || !createdOrder) {
			throw new Error("Failed to create order: Missing order ID");
		}

		// Now, create order items linked to the created order
		const orderItems = items.map(item => ({
			orderId: createdOrder.$id,  // Use the auto-generated orderId
			itemId: uuidv4(),  // Optional, generate UUID for each item
			name: item.name,
			price: item.price,
			quantity: 1,  // Adjust quantity if needed
		}));

		// Create the order items in parallel
		await Promise.all(
			orderItems.map(item => createOrderItem(item))  // Create each item document
		);

		alert("Order placed successfully!");
	} catch (error) {
		console.error("Error creating order:", error);
		alert("Failed to place order. Please try again.");
	}
};


// Function to create the order item document
const createOrderItem = async (item) => {
	return DB.createDocument(DB_ID, COLLECTION_ORDER_ITEMS, item.itemId, item);
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