<template>
  <div class="bg-[#F4ECDD] text-[#1B1812] antialiased selection:bg-[#DF4A2A] selection:text-white min-h-screen flex flex-col justify-between font-sans">
    <!-- Master Header Navigation -->
    <Navbar />

    <!-- Main Single Page View -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Master Architectural Footer -->
    <FooterSection />

    <!-- Sticky Mobile Bottom Bar -->
    <MobileBar />

    <!-- Global Cart Drawer -->
    <CartDrawer />

    <!-- Global Dish Quick-View & Customization Modal -->
    <DishDetailModal />

    <!-- Global Corporate Catering Inquiry Modal -->
    <CateringModal />

    <!-- Celebratory Order Success & Receipt Modal -->
    <OrderSuccessModal />

    <!-- Back to Top Button -->
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      aria-label="Back to top"
      class="hidden md:flex fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#1B1812] text-[#F4ECDD] shadow-xl hover:bg-[#2A241C] border border-white/20 items-center justify-center transition-all transform hover:-translate-y-1"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import FooterSection from './components/FooterSection.vue';
import MobileBar from './components/MobileBar.vue';
import CartDrawer from './components/CartDrawer.vue';
import DishDetailModal from './components/DishDetailModal.vue';
import CateringModal from './components/CateringModal.vue';
import OrderSuccessModal from './components/OrderSuccessModal.vue';

const showBackToTop = ref(false);

function handleScroll() {
  showBackToTop.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
