<template>
  <div class="bg-[#FAF8F5] text-[#1B222C] antialiased selection:bg-[#896A39] selection:text-white min-h-screen flex flex-col justify-between">
    <!-- Navigation Header -->
    <Navbar @open-order="isOrderModalOpen = true" />

    <!-- Router View for SPA pages: Home, Menu, Catering, About, Rewards, Contact -->
    <router-view
      @open-order="isOrderModalOpen = true"
      @open-catering="handleOpenCatering"
      @toast="addToast"
    />

    <!-- Global Footer -->
    <Footer />

    <!-- Global Order Pickup/Delivery Modal -->
    <OrderModal
      :isOpen="isOrderModalOpen"
      @close="isOrderModalOpen = false"
    />

    <!-- Global Corporate Catering Inquiry Modal -->
    <CateringModal
      :isOpen="isCateringModalOpen"
      :guests="cateringProps.guests"
      :packageName="cateringProps.packageName"
      :total="cateringProps.total"
      @close="isCateringModalOpen = false"
      @submitted="handleCateringSubmitted"
    />

    <!-- Reactive Toast Alerts -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none">
      <div v-for="toast in toasts" :key="toast.id"
           class="bg-[#10161D] text-stone-100 border border-[#896A39]/50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3 pointer-events-auto text-sm font-medium">
        <Sparkles class="w-4 h-4 text-amber-400 shrink-0" />
        <span>{{ toast.msg }}</span>
      </div>
    </div>

    <!-- Floating Back to Top Button -->
    <button v-show="showBackToTop" @click="scrollToTop" aria-label="Back to top"
            class="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#896A39] text-white shadow-xl hover:bg-[#6D5329] transition-all transform duration-300">
      <ArrowUp class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { Sparkles, ArrowUp } from 'lucide-vue-next';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import OrderModal from './components/OrderModal.vue';
import CateringModal from './components/CateringModal.vue';

const isOrderModalOpen = ref(false);
const isCateringModalOpen = ref(false);
const showBackToTop = ref(false);
const toasts = ref([]);

const cateringProps = reactive({
  guests: 25,
  packageName: 'Hot Market Table Buffet',
  total: 650
});

function handleOpenCatering(data) {
  if (data) {
    if (data.guests) cateringProps.guests = data.guests;
    if (data.pkg) cateringProps.packageName = data.pkg.name;
    if (data.total) cateringProps.total = data.total;
  }
  isCateringModalOpen.value = true;
}

function addToast(msg) {
  const id = Date.now();
  toasts.value.push({ id, msg });
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id);
  }, 4500);
}

function handleCateringSubmitted(formData) {
  isCateringModalOpen.value = false;
  addToast(`Thank you, ${formData.name}! Your catering inquiry was received.`);
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
