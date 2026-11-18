<template>
  <div 
    v-if="cartState.isDishModalOpen && cartState.selectedDish"
    class="fixed inset-0 bg-[#10161D]/80 backdrop-blur-md z-[115] flex items-center justify-center p-4 overflow-y-auto"
    @click.self="cartActions.closeDishModal()"
  >
    <div class="bg-white max-w-lg w-full rounded-3xl overflow-hidden border border-[#10161D]/15 shadow-2xl relative">
      <!-- Close Button -->
      <button 
        @click="cartActions.closeDishModal()"
        class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#10161D]/20 flex items-center justify-center text-[#10161D] hover:bg-[#10161D] hover:text-white transition-colors cursor-pointer"
        aria-label="Close modal"
      >
        <X class="w-4 h-4" />
      </button>

      <!-- Dish Image Banner -->
      <div class="h-64 sm:h-72 w-full bg-[#EFE4D0] relative overflow-hidden">
        <img 
          :src="cartState.selectedDish.image" 
          :alt="cartState.selectedDish.name"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-3 left-4 flex gap-2">
          <span class="px-3 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
            <ShieldCheck class="w-3 h-3" />
            <span>100% Seed Oil Free</span>
          </span>
          <span v-if="cartState.selectedDish.dietary" class="px-3 py-1 bg-[#10161D] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
            {{ cartState.selectedDish.dietary }}
          </span>
        </div>
      </div>

      <!-- Dish Details Body -->
      <div class="p-6 sm:p-7 space-y-4">
        <div class="flex justify-between items-start gap-4">
          <div>
            <h3 class="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#10161D]">
              {{ cartState.selectedDish.name }}
            </h3>
            <p class="text-xs font-mono text-[#896A39] font-bold mt-1">
              Cooked from scratch with Greek EVOO &amp; Avocado Oil
            </p>
          </div>
          <span class="text-2xl font-mono font-bold text-[#10161D] whitespace-nowrap">
            ${{ cartState.selectedDish.price.toFixed(2) }}
          </span>
        </div>

        <p class="text-sm text-[#1B1812]/80 leading-relaxed font-sans">
          {{ cartState.selectedDish.description }}
        </p>

        <!-- Nutrition & Integrity Badges -->
        <div class="grid grid-cols-3 gap-2 pt-2 border-t border-[#10161D]/10 text-center">
          <div class="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#10161D]/5">
            <span class="block text-[10px] font-mono uppercase text-[#1B1812]/60">Oil Standard</span>
            <span class="font-display font-bold text-xs uppercase text-[#1E3A2B]">100% EVOO</span>
          </div>
          <div class="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#10161D]/5">
            <span class="block text-[10px] font-mono uppercase text-[#1B1812]/60">Prep Style</span>
            <span class="font-display font-bold text-xs uppercase text-[#10161D]">Scratch Made</span>
          </div>
          <div class="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#10161D]/5">
            <span class="block text-[10px] font-mono uppercase text-[#1B1812]/60">Pickup Ready</span>
            <span class="font-display font-bold text-xs uppercase text-[#896A39]">~15 Minutes</span>
          </div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div class="pt-4 flex items-center gap-3">
          <div class="flex items-center gap-2 border border-[#10161D]/20 rounded-xl px-3 py-2 bg-[#FAF8F5]">
            <button 
              type="button"
              @click="qty = Math.max(1, qty - 1)"
              class="w-6 h-6 flex items-center justify-center font-bold text-[#10161D] hover:text-[#896A39] text-lg cursor-pointer"
            >
              -
            </button>
            <span class="w-6 text-center text-sm font-mono font-bold">{{ qty }}</span>
            <button 
              type="button"
              @click="qty++"
              class="w-6 h-6 flex items-center justify-center font-bold text-[#10161D] hover:text-[#896A39] text-lg cursor-pointer"
            >
              +
            </button>
          </div>

          <button 
            type="button"
            @click="addToCart"
            class="flex-1 py-4 bg-[#896A39] hover:bg-[#73572D] text-white text-xs sm:text-sm font-display uppercase tracking-widest font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag class="w-4 h-4 text-white" />
            <span>Add to Order • ${{ (cartState.selectedDish.price * qty).toFixed(2) }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { cartState, cartActions } from '../stores/cart.js';
import { X, ShieldCheck, ShoppingBag } from 'lucide-vue-next';

const qty = ref(1);

function addToCart() {
  for (let i = 0; i < qty.value; i++) {
    cartActions.addItem(cartState.selectedDish);
  }
  cartActions.closeDishModal();
  cartActions.openCart();
  qty.value = 1;
}
</script>
