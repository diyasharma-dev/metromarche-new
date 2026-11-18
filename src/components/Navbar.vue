<template>
  <header class="sticky top-0 z-50 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#10161D]/10 transition-all duration-300">
    <!-- Top NYC Status & Announcement Bar -->
    <div class="bg-[#10161D] text-[#FAF8F5] text-[11px] font-mono py-2 px-4 sm:px-8 flex items-center justify-between border-b border-white/10">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse"></span>
        <span class="font-bold text-[#3DDC84] tracking-wider uppercase">{{ liveStatus.isOpen ? 'Open Now' : 'Closed' }}</span>
        <span class="opacity-60 hidden sm:inline">•</span>
        <span class="opacity-80 hidden sm:inline">{{ liveStatus.text }}</span>
      </div>

      <div class="flex items-center gap-4 sm:gap-6 opacity-90 text-[11px]">
        <span class="hidden md:flex items-center gap-1.5">
          <MapPin class="w-3.5 h-3.5 text-[#896A39]" />
          30 W 57th St, Midtown Manhattan
        </span>
        <span class="hidden lg:flex items-center gap-1.5 text-[#C9A55C]">
          <ShieldCheck class="w-3.5 h-3.5" />
          100% Seed Oil-Free
        </span>
        <a 
          href="tel:+12126973334" 
          class="flex items-center gap-1.5 hover:text-[#C9A55C] transition-colors font-semibold"
        >
          <Phone class="w-3 h-3 text-[#C9A55C]" />
          <span>(212) 697-3334</span>
        </a>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Mobile Cart Button (Left on small screens) -->
      <button 
        type="button"
        @click="cartActions.openCart()"
        class="md:hidden relative w-10 h-10 rounded-full border border-[#10161D]/20 flex items-center justify-center text-[#10161D] hover:bg-[#10161D] hover:text-[#FAF8F5] transition-colors cursor-pointer"
        aria-label="Open cart"
      >
        <ShoppingBag class="w-4 h-4" />
        <span 
          v-if="cartGetters.itemCount.value > 0"
          class="absolute -top-1 -right-1 bg-[#896A39] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
        >
          {{ cartGetters.itemCount.value }}
        </span>
      </button>

      <!-- Left Primary Navigation Links (Desktop) -->
      <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-display uppercase tracking-widest font-bold text-[#10161D]">
        <router-link to="/menu" class="hover:text-[#896A39] transition-colors py-1">Menu</router-link>
        <router-link to="/build" class="hover:text-[#896A39] transition-colors py-1">Build Bowl</router-link>
        <router-link to="/catering" class="hover:text-[#896A39] transition-colors py-1">Corporate Catering</router-link>
        <router-link to="/rewards" class="hover:text-[#896A39] transition-colors py-1">Rewards</router-link>
      </nav>

      <!-- Center Logo -->
      <router-link to="/" class="flex items-center justify-center py-2" aria-label="Metro Marché Home">
        <img 
          src="/site/logo.webp" 
          alt="Metro Marché" 
          class="h-9 sm:h-11 w-auto object-contain hover:opacity-90 transition-opacity"
        />
      </router-link>

      <!-- Right Secondary Navigation Links & Actions (Desktop) -->
      <div class="hidden md:flex items-center space-x-5 lg:space-x-6">
        <nav class="flex items-center space-x-5 lg:space-x-6 text-xs font-display uppercase tracking-widest font-bold text-[#10161D]">
          <router-link to="/about" class="hover:text-[#896A39] transition-colors py-1">Our Standard</router-link>
          <router-link to="/contact" class="hover:text-[#896A39] transition-colors py-1">Contact</router-link>
        </nav>

        <!-- Cart Button -->
        <button 
          type="button"
          @click="cartActions.openCart()"
          class="relative w-10 h-10 rounded-full border border-[#10161D]/20 flex items-center justify-center text-[#10161D] hover:bg-[#10161D] hover:text-[#FAF8F5] transition-all cursor-pointer shadow-xs"
          aria-label="View order"
        >
          <ShoppingBag class="w-4 h-4" />
          <span 
            v-if="cartGetters.itemCount.value > 0"
            class="absolute -top-1.5 -right-1.5 bg-[#896A39] text-white text-[10px] font-mono font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center shadow-md"
          >
            {{ cartGetters.itemCount.value }}
          </span>
        </button>

        <!-- Order Now CTA -->
        <button 
          type="button"
          @click="cartActions.openCart()"
          class="px-5 py-2.5 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-widest font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
        >
          Order Online
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        type="button"
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden w-10 h-10 rounded-full border border-[#10161D]/20 flex items-center justify-center text-[#10161D] cursor-pointer"
        aria-label="Toggle navigation drawer"
      >
        <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
        <X v-else class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Slide-Down Drawer -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden bg-[#FAF8F5] border-b border-[#10161D]/15 px-6 py-6 space-y-5 shadow-xl transition-all duration-300"
    >
      <div class="flex flex-col space-y-3 text-base font-display uppercase tracking-wider font-bold text-[#10161D]">
        <router-link @click="mobileMenuOpen = false" to="/" class="hover:text-[#896A39] py-1 border-b border-[#10161D]/5">Home</router-link>
        <router-link @click="mobileMenuOpen = false" to="/menu" class="hover:text-[#896A39] py-1 border-b border-[#10161D]/5">Menu (112+ Items)</router-link>
        <router-link @click="mobileMenuOpen = false" to="/build" class="hover:text-[#896A39] py-1 border-b border-[#10161D]/5">Build Custom Bowl</router-link>
        <router-link @click="mobileMenuOpen = false" to="/catering" class="hover:text-[#896A39] py-1 border-b border-[#10161D]/5">Corporate Catering</router-link>
        <router-link @click="mobileMenuOpen = false" to="/rewards" class="hover:text-[#896A39] py-1 border-b border-[#10161D]/5">Rewards &amp; App</router-link>
        <router-link @click="mobileMenuOpen = false" to="/about" class="hover:text-[#896A39] py-1 border-b border-[#10161D]/5">The Seed-Oil Free Standard</router-link>
        <router-link @click="mobileMenuOpen = false" to="/contact" class="hover:text-[#896A39] py-1">Midtown Location &amp; Hours</router-link>
      </div>

      <div class="pt-4 border-t border-[#10161D]/15 flex flex-col gap-2.5">
        <button 
          @click="mobileMenuOpen = false; cartActions.openCart()"
          class="w-full py-3 bg-[#896A39] text-white text-xs font-display uppercase tracking-wider font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShoppingBag class="w-4 h-4" />
          <span>Order Online Now</span>
        </button>
        <a 
          href="tel:+12126973334" 
          class="w-full py-2.5 bg-white border border-[#10161D]/20 text-[#10161D] text-xs font-display uppercase tracking-wider font-bold rounded-xl text-center flex items-center justify-center gap-2"
        >
          <Phone class="w-3.5 h-3.5 text-[#896A39]" />
          <span>Call 30 W 57th: (212) 697-3334</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { cartGetters, cartActions } from '../stores/cart.js';
import { 
  ShoppingBag, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X 
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);

const liveStatus = ref({
  isOpen: true,
  text: 'Closes 7:00 PM',
});

function calculateStatus() {
  const now = new Date();
  const nycString = now.toLocaleString("en-US", { timeZone: "America/New_York" });
  const nycDate = new Date(nycString);
  const day = nycDate.getDay(); // 0 Sun, 1 Mon ... 6 Sat
  const hour = nycDate.getHours();
  const minutes = nycDate.getMinutes();
  const currentMins = hour * 60 + minutes;

  // Mon-Thu: 7am-7pm (420-1140)
  // Fri-Sun: 7am-6pm (420-1080)
  let closeMin = (day >= 1 && day <= 4) ? 1140 : 1080;
  let closeStr = (day >= 1 && day <= 4) ? "7:00 PM" : "6:00 PM";

  if (currentMins >= 420 && currentMins < closeMin) {
    liveStatus.value = {
      isOpen: true,
      text: `Closes ${closeStr}`,
    };
  } else {
    liveStatus.value = {
      isOpen: false,
      text: `Opens 7:00 AM`,
    };
  }
}

let timer;
onMounted(() => {
  calculateStatus();
  timer = setInterval(calculateStatus, 60000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
