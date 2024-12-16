<script setup lang="ts">
import { useStepperStore } from "@/store/stepper.store"
import { useStepNavigation } from "@/components/layout/landingPage/useStepNavigation";
useSeoMeta({
	title: 'Overview | Nuxt-Shop'
})
const { activeStep, handleStepChange } = useStepNavigation();
</script>

<template>
	<div class="md:p-10 md:pl-[150px] relative z-0 w-full">
		<LayoutTitle class="flex transition-all mb-10 duration-300 items-center justify-end gap-2">
			Overview
		</LayoutTitle>

		<LayoutStepper />

		<section id="step-1" :class="{ 'active': activeStep === 1, 'scale-100': activeStep !== 1 }"
			class="w-full mb-[80px] transition-all duration-500 ease-in-out scroll-mt-[100px]">
			<h1 class="font-bold text-center mb-10 text-4xl">Go to Collections</h1>
			<LayoutLandingPageInfoBlock imgSrc="/overview/to-collection.jpeg">
				<template #content>
					<p
						class="self-start text-lg md:text-xl text-white font-light leading-relaxed bg-gradient-to-r from-[#020817] to-[#0F172A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
						Discover the pathway to our exclusive collections, where style meets individuality. Whether you're
						looking for timeless classics or contemporary designs, this section offers an immersive experience to
						explore unique selections crafted to match your taste. Navigate seamlessly to uncover items curated
						with attention to detail, ensuring quality and distinction in every piece. Begin your journey into a
						world of inspiration, where each collection tells its own story, waiting for you to make it yours.
					</p>
				</template>
				<template #button>
					<UiButton
						class="h-full text-white text-2xl bg-gradient-to-r from-[#020817] to-[#0F172A] hover:scale-105 transition-transform duration-300 ease-in-out">
						<NuxtLink to="/collection" class="flex items-center gap-2">
							<p>View Collections</p>
							<Icon name="line-md:arrow-right" size="25" />
						</NuxtLink>
					</UiButton>
				</template>
			</LayoutLandingPageInfoBlock>
		</section>

		<section id="step-2"
			:class="{ 'active': activeStep === 2, 'scale-100': activeStep !== 2 }"
			class="w-full mb-[80px] transition-all duration-500  scroll-mt-[150px]">
			<h1 class="font-bold text-center mb-10 text-4xl">Check Your Cart</h1>
			<LayoutLandingPageInfoBlock2 imgSrc="/overview/to-cart.png">
				<template #content>
					<p
						class="self-start text-lg md:text-xl text-white font-light leading-relaxed bg-gradient-to-r from-[#020817] to-[#0F172A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
						You've discovered the perfect pair of shoes to complement your unique style, and now it's time to make
						them yours.
						Transition seamlessly to your cart, where convenience meets clarity. Review your carefully selected
						items in one place,
						ensuring every choice aligns with your vision. Take advantage of a streamlined checkout process
						designed for simplicity
						and security, allowing you to focus on the excitement of your upcoming addition. Each step brings you
						closer to owning a
						piece of the collection that reflects your taste and personality. Let your journey to the perfect fit
						continue with ease
						and confidence.
					</p>
				</template>
				<template #button>
					<UiButton
						class="text-white text-2xl bg-gradient-to-r from-[#020817] to-[#0F172A] hover:scale-105 transition-transform duration-300 ease-in-out">
						<NuxtLink to="/cart" class="flex items-center gap-2">
							<p>View Cart</p>
							<Icon name="line-md:arrow-right" size="25" />
						</NuxtLink>
					</UiButton>
				</template>
			</LayoutLandingPageInfoBlock2>
		</section>

		<section id="step-3"
			:class="{ 'active': activeStep === 3, 'scale-100': activeStep !== 3 }"
			class="w-full transition-all duration-500">
			<h1 class="font-bold text-center mb-10 text-4xl">Make Order</h1>
			<LayoutLandingPageInfoBlock3 imgSrc="/overview/to-orders.jpeg">
				<template #content>
					<p
						class="self-start text-lg md:text-xl text-white font-light leading-relaxed bg-gradient-to-r from-[#020817] to-[#0F172A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
						Your selections are ready to take the next step toward becoming a part of your life. Transition
						seamlessly to the orders section, where every detail of your purchase is carefully tracked for your
						peace of mind. From processing to shipment, stay informed about the status of your items with
						real-time updates and intuitive navigation. This is your hub for reviewing order details, tracking
						shipments, and managing any adjustments with ease. Experience the confidence of knowing that every
						purchase is handled with precision and care. Your journey continues here, bringing you closer to
						making your selections truly yours.
					</p>
				</template>
				<template #button>
					<UiButton
						class="h-full text-white text-2xl bg-gradient-to-r from-[#020817] to-[#0F172A] hover:scale-105 transition-transform duration-300 ease-in-out">
						<NuxtLink to="/orders" class="flex items-center gap-2">
							<p>Make Order</p>
							<Icon name="line-md:arrow-right" size="25" />
						</NuxtLink>
					</UiButton>
				</template>
			</LayoutLandingPageInfoBlock3>
		</section>

	</div>
</template>



<style scoped>
.active {
	@apply transform scale-105 bg-gradient-to-r from-[#131e36] rounded to-[#020817] p-10;
}
</style>