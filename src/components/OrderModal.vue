<template>
  <div v-show="isOpen" @click.self="$emit('close')" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm transition-opacity duration-300">
    <div class="bg-white rounded-3xl max-w-md w-full mx-4 p-6 sm:p-8 shadow-2xl relative space-y-6">
      
      <button @click="$emit('close')" aria-label="Close modal" class="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition">
        <X class="w-5 h-5" />
      </button>

      <div class="text-center space-y-2">
        <img src="/assets/images/logo.webp" alt="Metro Marché" class="h-9 w-auto mx-auto mb-2" />
        <h3 class="text-2xl font-serif font-bold text-[#1B222C]">How would you like your order?</h3>
        <p class="text-xs text-stone-500">Pick up at 30 W 57th St or order Manhattan delivery.</p>
      </div>

      <div class="space-y-3 pt-2">
        <a href="https://order.metromarche.com/order/metro-marche-30-west-57-nomaw" target="_blank" rel="noopener noreferrer"
           class="p-4 rounded-2xl border-2 border-[#896A39]/40 hover:border-[#896A39] bg-[#F7F1E6]/50 hover:bg-[#F7F1E6] transition flex items-center justify-between group">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-[#896A39] text-white flex items-center justify-center font-bold">
              <Store class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-stone-900 text-sm">Express Store Pickup</h4>
              <p class="text-xs text-stone-500">Ready in 10-15 mins • Skip the line</p>
            </div>
          </div>
          <ArrowRight class="w-4 h-4 text-[#896A39] group-hover:translate-x-1 transition-transform" />
        </a>

        <a href="https://order.metromarche.com/order/metro-marche-30-west-57-nomaw" target="_blank" rel="noopener noreferrer"
           class="p-4 rounded-2xl border border-stone-200 hover:border-[#1B222C] bg-white hover:bg-stone-50 transition flex items-center justify-between group">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B222C] text-white flex items-center justify-center font-bold">
              <Bike class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-stone-900 text-sm">Manhattan Delivery</h4>
              <p class="text-xs text-stone-500">Delivered directly to your office or home</p>
            </div>
          </div>
          <ArrowRight class="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
        </a>

        <router-link to="/catering" @click="$emit('close')"
                     class="p-4 rounded-2xl border border-stone-200 hover:border-[#896A39] bg-white hover:bg-[#F7F1E6]/40 transition flex items-center justify-between group">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-[#896A39] text-white flex items-center justify-center font-bold">
              <UtensilsCrossed class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-stone-900 text-sm">Office &amp; Event Catering</h4>
              <p class="text-xs text-stone-500">For 10 to 200+ guests • Trays &amp; buffets</p>
            </div>
          </div>
          <ArrowRight class="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>

      <div class="text-center pt-2">
        <a href="tel:2126973334" class="text-xs text-stone-500 hover:text-[#896A39] flex items-center justify-center gap-1.5 transition">
          <Phone class="w-3.5 h-3.5 text-[#896A39]" />
          <span>Prefer to call? (212) 697-3334</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { X, Store, Bike, UtensilsCrossed, ArrowRight, Phone } from 'lucide-vue-next';

defineProps({
  isOpen: { type: Boolean, default: false }
});

defineEmits(['close']);
</script>
