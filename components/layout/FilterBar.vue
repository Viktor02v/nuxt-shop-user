<script setup lang="ts">

</script>

<template>
	<aside class="fixed left-0 bottom-0 w-[300px] bg-gradient-to-r from-[#020817] to-[#0F172A] h-[calc(100vh-80px)]">
		<div class="w-full relative">
			<div
				class="fixed top-[80px] flex text-2xl justify-center gap-2 items-center border-b left-0 w-[300px] h-[80px]">
				<div>
					Filters
				</div>
				<Icon name="line-md:filter" size="25" />
			</div>

			<div class="fixed top-[160px] h-full p-2 w-[300px] left-0">
				<div class="p-5 flex flex-col gap-5 border rounded">
					<LayoutFilterBarField>
						<template v-slot:label>
							By name:
						</template>
						<template v-slot:input>
							<UiInput placeholder="Search..." />
						</template>
					</LayoutFilterBarField>

					<div>
						<p class="text-center text-[1.2rem] pb-2">By Prices</p>
						<ul class="flex underline border-b pb-8 flex-col gap-1">
							<li>Search Cheapes</li>
							<li>Search More Expensive</li>
						</ul>
					</div>

					<div class="">
						<p class="text-center text-[1.2rem] pb-2">By Vendors</p>
						<ul class="flex underline flex-col gap-1">
							<li>Nike</li>
							<li>Adidas</li>
							<li>Puma</li>
							<li>Swoosh</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</aside>
</template>

<style scoped></style>