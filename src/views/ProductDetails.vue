<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Dummy data produk (seharusnya dari API/database)
const products = [
  {
    id: 1,
    name: 'Kaos Basic Ordinary Tee',
    category: 'T-Shirt',
    price: 129,
    image: '/src/assets/images/products/cloth-1.png',
    description: 'Kaos basic serbaguna dengan bahan lembut dan nyaman dipakai sepanjang hari.',
  },
  {
    id: 2,
    name: 'Kaos Daily Comfort Wear',
    category: 'T-Shirt',
    price: 139,
    image: '/src/assets/images/products/cloth-2.png',
    description: 'Dirancang untuk kenyamanan maksimal saat aktivitas harian.',
  },
  // (Tambahkan sisa data dummy produk lainnya di sini)
]

// Cari produk berdasarkan ID dari route params
const product = computed(() => {
  return products.find((p) => p.id === Number(route.params.id))
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-12 mt-10">
    <div class="text-sm text-gray-500 mb-6">
      <RouterLink to="/" class="hover:text-gray-800">Home</RouterLink>
      <span class="mx-2">›</span>
      <span class="text-gray-800 font-medium">{{ product?.name }}</span>
    </div>

    <div v-if="product" class="grid md:grid-cols-2 gap-10 items-start">
      <div class="bg-gray-100 rounded-xl overflow-hidden">
        <img :src="product.image" class="w-full h-full object-cover" />
      </div>

      <div class="space-y-4">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <p class="text-2xl font-semibold text-blue-600">IDR {{ product.price }}K</p>
        <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>

        <div class="space-y-2 text-sm text-gray-600 pt-2 border-t">
          <div>Material: Cotton Combed 24s</div>
          <div>Fit: Regular Fit</div>
          <div>Stok: Tersedia</div>
        </div>

        <div class="flex gap-4 pt-4">
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <button class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
            Wishlist
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-500 text-lg">Produk tidak ditemukan</p>
      <RouterLink to="/" class="text-blue-600 hover:underline mt-4 inline-block">
        ← Kembali ke Home
      </RouterLink>
    </div>
  </section>
</template>
