<script setup>
import HeroSection from './components/HeroSection.vue'
import MainFooter from './components/MainFooter.vue'
import MainNavbar from './components/MainNavbar.vue'
import ProductsSection from './components/sections/ProductsSection.vue'
</script>

<template>
  <main class="container mx-auto">
    <MainNavbar />
    <HeroSection />
    <ProductsSection />
    <MainFooter />
  </main>
</template>
