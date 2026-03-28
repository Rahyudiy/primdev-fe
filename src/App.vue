<script setup>
import MainFooter from './components/MainFooter.vue'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <main class="container mx-auto">
    <MainNavbar />
    <RouterView />
    <MainFooter />
  </main>
</template>
