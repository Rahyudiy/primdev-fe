<script setup></script>

<template>
  <section>
    <div
      class="container mx-auto mt-30 rounded-3xl h-150 bg-cover bg-center relative overflow-hidden"
      style="background-image: url('/src/assets/images/hero-2.jpg')"
    >
      <!-- OVERLAY CONTENT -->
      <div class="flex flex-col w-full h-full items-center justify-center text-center">
        <div class="text-white bg-black/20 w-full h-full flex flex-col items-center justify-center">
          <h1 class="text-4xl font-semibold tracking-tighter">Summer Arrival of Outfit</h1>
          <p class="my-4">Discover the latest trends in our summer collection.</p>
          <button class="bg-white text-black py-2 px-8 rounded-full">Explore Now</button>
        </div>
      </div>
    </div>
    <div class="mx-auto flex gap-5 items-left justify-center">
      <div class="container mx-auto mt-5 rounded-3xl h-62.5 relative overflow-hidden group">
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style="background-image: url('/src/assets/images/hero-1.jpg')"
        ></div>

        <div class="relative flex flex-row w-full h-full">
          <div
            class="text-white p-4 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex flex-row items-end justify-between w-full h-full"
          >
            <h2 class="text-2xl font-semibold tracking-tighter">New Arrivals</h2>

            <button class="bg-white text-black py-2 px-8 w-fit h-fit rounded-full">Shop Now</button>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-5 rounded-3xl h-62.5 relative overflow-hidden group">
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style="background-image: url('/src/assets/images/hero-3.jpg')"
        ></div>

        <div class="relative flex flex-row w-full h-full">
          <div
            class="text-white p-4 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex flex-row items-end justify-between w-full h-full"
          >
            <h2 class="text-2xl font-semibold tracking-tighter">New Arrivals</h2>

            <button class="bg-white text-black py-2 px-8 w-fit h-fit rounded-full">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
