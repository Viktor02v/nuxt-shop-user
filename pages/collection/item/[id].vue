<script setup lang="ts">
import { useManShoe } from "@/composables/useManShoe"
const route = useRoute()
const itemId = route.params.id as string;

const { manShoe, isLoading, isError } = useManShoe(itemId)
</script>

<template>
	<section class="w-full p-5">
		<div class="border h-screen p-5">
			<h1 class="text-center font-bold mb-10 border-b pb-5 text-[1.8rem]">{{ manShoe?.name }}</h1>
			<div class="w-full flex gap-5 item-center h-[400px]">
				<div
					class="border rounded flex items-center justify-center hover:scale-105 transition-all duration-500 bg-gradient-to-t from-[#020817] to-[#0F172A] w-1/2 h-[400px]">
					<NuxtImg :src="manShoe?.foto_url" class="" alt="" />
				</div>

				<div
					class="w-1/2 overflow-y-auto bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-3 transition-all duration-500 hover:scale-105 hover:border">
					<!-- Description -->
					<h2 class="text-center font-bold text-[1.5rem] border-b pb-3">Characteristics</h2>
					<ul class="mt-3 flex flex-col break-words gap-2">
						<li class="text-[1.3rem] font-light border-b flex items-center gap-2">Model: <span
								class='font-thin text-[1.1rem]'>{{ manShoe?.name }}</span></li>
						<li class="text-[1.3rem] font-light border-b flex items-center gap-2">Vendor: <span
								class='font-thin text-[1.1rem]'>{{ manShoe?.vendor }}</span></li>
						<li class="text-[1.3rem] font-light border-b flex items-center gap-2">Price: <span
								class='font-thin text-[1.1rem]'>{{ manShoe?.price }}</span> <span>UAN</span></li>
						<li class="text-[1.3rem] font-light border-b flex flex-col items-start gap-2">Description:
							<span class='font-thin text-[1.1rem] break-words'>
								{{ manShoe?.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut
								architecto veniam. Eligendi ratione doloremque id labore, architecto incidunt, eius quisquam,
								hic laborum consequatur excepturi officia amet temporibus quam tenetur.
							</span>
						</li>
					</ul>
				</div>

			</div>
		</div>
	</section>
</template>

<style scoped>

</style>