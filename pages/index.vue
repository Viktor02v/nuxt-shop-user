<script setup lang="ts">


useSeoMeta({
	title: 'Overview | Nuxt-Shop'
})
</script>
<template>
	<div class="md:p-10 md:pl-[200px] relative z-0 w-full h-[100vh]">
		<LayoutTitle class="flex transition-all mb-10 duration-300 items-center justify-end gap-2">
			Overview
		</LayoutTitle>

		<LayoutStepper />

		<section id="step-1" class="w-full">
			<h1 class="font-bold text-center mb-10 text-4xl">Go to Collections</h1>
			<div class="w-full flex gap-5 items-stretch">
				<div class="border w-1/2 border-[#0F172A] ">
					<NuxtImg src="/overview/to-collections.png" class="h-full object-cover" />
				</div>

				<div class="flex flex-col gap-5 w-1/2">
					<p
						class="self-start  text-lg md:text-xl text-white font-light leading-relaxed bg-gradient-to-r from-[#020817] to-[#0F172A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
						Discover the pathway to our exclusive collections, where style meets individuality. Whether you're
						looking for timeless classics or contemporary designs, this section offers an immersive experience to
						explore unique selections crafted to match your taste. Navigate seamlessly to uncover items curated
						with
						attention to detail, ensuring quality and distinction in every piece. Begin your journey into a world
						of
						inspiration, where each collection tells its own story, waiting for you to make it yours.
					</p>

					<UiButton
						class="h-full text-white text-xl bg-gradient-to-r from-[#020817] to-[#0F172A] hover:scale-105 transition-transform duration-300 ease-in-out">
						<NuxtLink to="/collections" class="flex items-center gap-2">
							<p>View Collections</p>
							<Icon name="line-md:arrow-right" size="25" />
						</NuxtLink>
					</UiButton>
				</div>
			</div>

		</section>
	</div>
</template>



<style scoped></style>