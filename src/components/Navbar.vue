<template>
  <div>
    <!-- Top Announcement Bar (Logo Color Theme) -->
    <div class="bg-[#10161D] text-stone-300 text-xs py-2 px-4 border-b border-white/10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        <!-- Live NYC Store Hours Pill -->
        <div class="flex items-center space-x-2.5">
          <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold"
                :class="storeStatus.isOpen ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'">
            <span class="w-2 h-2 rounded-full" :class="storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'"></span>
            <span>{{ storeStatus.statusText }} • {{ storeStatus.closingText }}</span>
          </span>
          <span class="hidden md:inline text-stone-600">|</span>
          <span class="hidden md:inline-flex items-center gap-1.5 text-stone-300 text-xs">
            <ShieldCheck class="w-3.5 h-3.5 text-[#896A39]" />
            <span>Seed Oil Free Cafe &amp; Catering • Midtown NYC</span>
          </span>
        </div>

        <!-- Location & Hotline -->
        <div class="flex items-center space-x-4 text-xs">
          <span class="hidden lg:inline-flex items-center gap-1 text-stone-400">
            <MapPin class="w-3.5 h-3.5 text-[#896A39]" /> 30 W 57th St, Midtown NYC
          </span>
          <a href="tel:2126973334" class="text-amber-200 hover:text-white transition font-medium flex items-center gap-1.5">
            <Phone class="w-3.5 h-3.5 text-[#896A39]" /> (212) 697-3334
          </a>
        </div>

      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-40 transition-all duration-300 border-b border-[#F3ECE1] bg-white/95 backdrop-blur-md"
            :class="isScrolled ? 'shadow-md py-1' : 'py-2'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          
          <!-- Brand Logo -->
          <router-link to="/" class="flex items-center py-2 shrink-0 focus:outline-none">
            <img src="/assets/images/logo.webp" alt="Metro Marché" class="h-10 sm:h-12 w-auto object-contain" />
          </router-link>

          <!-- Desktop Navigation Links (Spacious, No-Wrap, Never Collides) -->
          <nav class="hidden lg:flex items-center space-x-4 xl:space-x-7 shrink-0">
            <router-link to="/" active-class="text-[#896A39] border-b-2 border-[#896A39] pb-1 font-bold"
                         class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition">
              Home
            </router-link>
            <a href="/#market-table" class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition inline-flex items-center gap-1.5">
              <span>Market Table</span>
              <span class="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F7F1E6] text-[#896A39] border border-[#896A39]/20">Fresh</span>
            </a>
            <router-link to="/menu" active-class="text-[#896A39] border-b-2 border-[#896A39] pb-1 font-bold"
                         class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition">
              Menu
            </router-link>
            <router-link to="/catering" active-class="text-[#896A39] border-b-2 border-[#896A39] pb-1 font-bold"
                         class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition">
              Catering
            </router-link>
            <router-link to="/about" active-class="text-[#896A39] border-b-2 border-[#896A39] pb-1 font-bold"
                         class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition">
              Our Story
            </router-link>
            <router-link to="/rewards" active-class="text-[#896A39] border-b-2 border-[#896A39] pb-1 font-bold"
                         class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition">
              Rewards
            </router-link>
            <router-link to="/contact" active-class="text-[#896A39] border-b-2 border-[#896A39] pb-1 font-bold"
                         class="whitespace-nowrap text-xs xl:text-sm font-semibold text-stone-700 hover:text-[#896A39] transition">
              Contact
            </router-link>
          </nav>

          <!-- Right Action: Order Online CTA -->
          <div class="hidden sm:flex items-center space-x-3 shrink-0">
            <button @click="$emit('open-order')"
                    class="whitespace-nowrap inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-xs xl:text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 space-x-2 shrink-0">
              <ShoppingBag class="w-4 h-4 text-amber-200" />
              <span>Order Online</span>
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex items-center space-x-2 lg:hidden shrink-0">
            <button @click="$emit('open-order')" class="sm:hidden px-3.5 py-1.5 rounded-full bg-[#896A39] text-white text-xs font-bold flex items-center gap-1 shadow-sm">
              <ShoppingBag class="w-3.5 h-3.5" />
              <span>Order</span>
            </button>
            <button @click="isMobileDrawerOpen = true" aria-label="Open Navigation Menu" class="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none">
              <Menu class="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </header>

    <!-- Mobile Slide-out Drawer -->
    <div v-show="isMobileDrawerOpen" @click="isMobileDrawerOpen = false" class="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm transition-opacity duration-300"></div>
    <div class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col justify-between p-6"
         :class="isMobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'">
      <div>
        <div class="flex items-center justify-between pb-5 border-b border-stone-100">
          <img src="/assets/images/logo.webp" alt="Metro Marché" class="h-9 w-auto" />
          <button @click="isMobileDrawerOpen = false" class="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="mt-4 py-2 px-3 bg-[#F7F1E6] rounded-xl border border-[#896A39]/20 text-xs flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full" :class="storeStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'"></span>
          <span class="text-[#1B222C] font-medium">30 W 57th St • {{ storeStatus.statusText }} ({{ storeStatus.closingText }})</span>
        </div>

        <nav class="mt-6 flex flex-col space-y-2">
          <router-link to="/" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span>Home</span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </router-link>
          <a href="/#market-table" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span class="flex items-center gap-2">Market Table <span class="bg-[#F7F1E6] text-[#896A39] text-[10px] px-1.5 py-0.5 rounded font-bold">FRESH</span></span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </a>
          <router-link to="/menu" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span>Full Digital Menu</span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </router-link>
          <router-link to="/catering" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span>Corporate Catering</span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </router-link>
          <router-link to="/about" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span>Our Story &amp; Philosophy</span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </router-link>
          <router-link to="/rewards" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span>Metro Rewards App</span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </router-link>
          <router-link to="/contact" @click="isMobileDrawerOpen = false" class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-stone-50 font-medium text-stone-700">
            <span>Location &amp; Hours</span>
            <ChevronRight class="w-4 h-4 text-stone-400" />
          </router-link>
        </nav>
      </div>

      <div class="pt-6 border-t border-stone-100 space-y-3">
        <button @click="$emit('open-order'); isMobileDrawerOpen = false" class="w-full py-3 rounded-xl bg-[#896A39] text-white font-bold text-center flex items-center justify-center space-x-2 shadow-lg">
          <ShoppingBag class="w-4 h-4 mr-1.5" />
          <span>Order Online Now</span>
        </button>
        <a href="tel:2126973334" class="w-full py-2.5 rounded-xl border border-stone-200 text-stone-700 font-medium text-center flex items-center justify-center space-x-2 text-sm hover:bg-stone-50">
          <Phone class="w-4 h-4 mr-1.5 text-[#896A39]" />
          <span>Call (212) 697-3334</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { ShieldCheck, MapPin, Phone, ShoppingBag, Menu, X, ChevronRight } from 'lucide-vue-next';

defineEmits(['open-order']);

const isMobileDrawerOpen = ref(false);
const isScrolled = ref(false);

const storeStatus = reactive({
  isOpen: false,
  statusText: 'Checking hours...',
  closingText: ''
});

function checkLiveHours() {
  const now = new Date();
  const nycTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const day = nycTime.getDay();
  const currentMinutes = nycTime.getHours() * 60 + nycTime.getMinutes();

  if (day >= 1 && day <= 5) {
    if (currentMinutes >= 420 && currentMinutes < 1140) {
      storeStatus.isOpen = true;
      storeStatus.statusText = 'Open Now';
      storeStatus.closingText = 'Closes at 7:00 PM';
    } else if (currentMinutes < 420) {
      storeStatus.isOpen = false;
      storeStatus.statusText = 'Closed Now';
      storeStatus.closingText = 'Opens Today at 7:00 AM';
    } else {
      storeStatus.isOpen = false;
      storeStatus.statusText = 'Closed Now';
      storeStatus.closingText = day === 5 ? 'Opens Saturday at 8:00 AM' : 'Opens Tomorrow at 7:00 AM';
    }
  } else if (day === 6) {
    if (currentMinutes >= 480 && currentMinutes < 1020) {
      storeStatus.isOpen = true;
      storeStatus.statusText = 'Open Now';
      storeStatus.closingText = 'Closes at 5:00 PM';
    } else if (currentMinutes < 480) {
      storeStatus.isOpen = false;
      storeStatus.statusText = 'Closed Now';
      storeStatus.closingText = 'Opens Today at 8:00 AM';
    } else {
      storeStatus.isOpen = false;
      storeStatus.statusText = 'Closed Now';
      storeStatus.closingText = 'Opens Monday at 7:00 AM';
    }
  } else {
    storeStatus.isOpen = false;
    storeStatus.statusText = 'Closed Now';
    storeStatus.closingText = 'Opens Monday at 7:00 AM';
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40;
}

onMounted(() => {
  checkLiveHours();
  const timer = setInterval(checkLiveHours, 60000);
  window.addEventListener('scroll', handleScroll, { passive: true });

  onUnmounted(() => {
    clearInterval(timer);
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
