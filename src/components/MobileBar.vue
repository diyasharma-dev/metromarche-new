<template>
  <div class="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#10161D]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
    <a 
      href="tel:+12126973334" 
      class="flex-1 py-2 px-3 bg-white/10 text-white text-center text-xs font-mono font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-1.5"
    >
      <Phone class="w-3.5 h-3.5 text-[#C9A55C]" />
      <span>Call</span>
    </a>

    <router-link 
      to="/catering"
      class="flex-1 py-2 px-3 bg-[#1E3A2B] text-[#C9A55C] text-center text-xs font-mono font-bold rounded-xl hover:bg-[#13271C] transition-colors border border-[#C9A55C]/30 flex items-center justify-center gap-1.5"
    >
      <Users class="w-3.5 h-3.5" />
      <span>Catering</span>
    </router-link>

    <button 
      type="button"
      @click="cartActions.openCart()"
      class="flex-[1.4] py-2 px-3 bg-[#896A39] hover:bg-[#73572D] text-white text-center text-xs font-display uppercase tracking-wider font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 relative cursor-pointer"
    >
      <ShoppingBag class="w-3.5 h-3.5" />
      <span>Order</span>
      <span 
        v-if="cartGetters.itemCount.value > 0"
        class="bg-[#10161D] text-[#C9A55C] text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold"
      >
        {{ cartGetters.itemCount.value }}
      </span>
      <ArrowRight class="w-3 h-3" />
    </button>
  </div>
</template>

<script setup>
import { cartGetters, cartActions } from '../stores/cart.js';
import { Phone, Users, ShoppingBag, ArrowRight } from 'lucide-vue-next';
</script>
