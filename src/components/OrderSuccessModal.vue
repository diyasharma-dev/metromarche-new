<template>
  <div 
    v-if="cartState.isSuccessModalOpen"
    class="fixed inset-0 bg-[#10161D]/80 backdrop-blur-md z-[120] flex items-center justify-center p-4 overflow-y-auto"
  >
    <div 
      class="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 border border-[#10161D]/15 shadow-2xl relative"
    >
      <!-- Close Button -->
      <button 
        @click="cartActions.closeSuccessModal()"
        class="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#10161D]/20 flex items-center justify-center text-[#10161D] hover:bg-[#10161D] hover:text-white transition-colors cursor-pointer"
        aria-label="Close modal"
      >
        <X class="w-4 h-4" />
      </button>

      <!-- Badge Icon -->
      <div class="text-center space-y-2 mb-6">
        <div class="w-16 h-16 bg-[#1E3A2B] text-[#3DDC84] rounded-full mx-auto flex items-center justify-center text-3xl shadow-lg border-4 border-white ring-2 ring-[#1E3A2B]/20">
          <CheckCircle2 class="w-8 h-8" />
        </div>
        <span class="inline-block px-3.5 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-[11px] font-bold uppercase tracking-widest rounded-full">
          Order Confirmed
        </span>
        <h3 class="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#10161D]">
          Kitchen Is Prepping
        </h3>
        <p class="text-xs font-mono text-[#10161D]/60">
          Order #{{ cartState.lastOrder?.orderNumber }} • {{ cartState.lastOrder?.timestamp }}
        </p>
      </div>

      <!-- Receipt Ticket Box -->
      <div class="bg-[#FAF8F5] rounded-2xl p-4 border border-[#10161D]/10 space-y-3 font-mono text-xs">
        <div class="flex justify-between items-center pb-2 border-b border-dashed border-[#10161D]/20">
          <span class="font-bold text-[#10161D]">METRO MARCHÉ NYC</span>
          <span class="text-[11px] text-[#10161D]/60">30 W 57th St, Midtown</span>
        </div>

        <div class="space-y-1.5 py-1">
          <div 
            v-for="(item, idx) in cartState.lastOrder?.items" 
            :key="idx"
            class="flex justify-between text-[#10161D]"
          >
            <span>{{ item.quantity }}x {{ item.name }}</span>
            <span class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</span>
          </div>
        </div>

        <div class="pt-2 border-t border-dashed border-[#10161D]/20 space-y-1 text-[#10161D]/80">
          <div class="flex justify-between">
            <span>Subtotal:</span>
            <span>${{ cartState.lastOrder?.subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Tax (8.875%):</span>
            <span>${{ cartState.lastOrder?.tax.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between" v-if="cartState.lastOrder?.tip > 0">
            <span>Kitchen Gratuity:</span>
            <span>${{ cartState.lastOrder?.tip.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between font-bold text-sm text-[#10161D] pt-1 border-t border-[#10161D]/10">
            <span>TOTAL:</span>
            <span class="text-[#896A39]">${{ cartState.lastOrder?.total.toFixed(2) }}</span>
          </div>
        </div>

        <!-- Pickup Info -->
        <div class="bg-white p-3 rounded-xl border border-[#10161D]/10 text-center space-y-1">
          <div class="font-display font-bold text-xs uppercase text-[#10161D] flex items-center justify-center gap-1.5">
            <MapPin v-if="cartState.lastOrder?.orderType === 'pickup'" class="w-3.5 h-3.5 text-[#896A39]" />
            <Truck v-else class="w-3.5 h-3.5 text-[#896A39]" />
            <span>{{ cartState.lastOrder?.orderType === 'pickup' ? 'Express Store Pickup' : 'Midtown Manhattan Delivery' }}</span>
          </div>
          <p class="text-[11px] text-[#1B1812]/75">
            {{ cartState.lastOrder?.orderType === 'pickup' ? 'Ready in ~15 minutes at 30 W 57th St (between 5th & 6th Ave).' : 'Estimated courier delivery window: 30–45 mins.' }}
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Metro+Marche+30+W+57th+St+New+York"
          target="_blank"
          rel="noopener"
          class="flex-1 py-3.5 bg-white border border-[#10161D]/20 text-[#10161D] hover:border-[#10161D] text-xs font-display uppercase tracking-widest font-bold rounded-xl text-center flex items-center justify-center gap-1.5"
        >
          <span>Get Directions</span>
          <ExternalLink class="w-3.5 h-3.5" />
        </a>
        <button 
          @click="cartActions.closeSuccessModal()"
          class="flex-1 py-3.5 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-widest font-bold rounded-xl transition-colors shadow-md cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cartState, cartActions } from '../stores/cart.js';
import { X, CheckCircle2, MapPin, Truck, ExternalLink } from 'lucide-vue-next';
</script>
