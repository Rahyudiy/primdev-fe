import { computed, reactive } from 'vue'

// State keranjang
const state = reactive({
  items: [],
})

// Tambah produk ke keranjang
function add(product) {
  const existing = state.items.find((item) => item.id === product.id)

  if (existing) {
    existing.qty++ // Produk sudah ada? Tambah qty saja
  } else {
    state.items.push({ ...product, qty: 1 }) // Belum ada? Push baru
  }
}

// Hapus produk dari keranjang
function remove(id) {
  state.items = state.items.filter((item) => item.id !== id)
}

// Hitung total qty semua item
const totalItems = computed(() => state.items.reduce((sum, item) => sum + item.qty, 0))

// Hitung total harga
const totalPrice = computed(() => state.items.reduce((sum, item) => sum + item.price * item.qty, 0))

// Export jadi satu object
export const cart = {
  state,
  add,
  remove,
  totalItems,
  totalPrice,
}
