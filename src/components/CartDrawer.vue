<template>
  <div>
    <!-- Backdrop Scrim -->
    <div 
      v-if="cartState.isOpen"
      class="fixed inset-0 bg-[#10161D]/70 backdrop-blur-sm z-[90] transition-opacity duration-300"
      @click="cartActions.closeCart()"
    ></div>

    <!-- Slide-out Order Drawer -->
    <aside 
      class="fixed top-0 bottom-0 right-0 w-full max-w-[440px] bg-[#FAF8F5] z-[100] flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
      :class="cartState.isOpen ? 'translate-x-0' : 'translate-x-full'"
      role="dialog"
      aria-modal="true"
      aria-label="Your order"
    >
      <!-- Drawer Header -->
      <div class="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#10161D]/10 bg-white">
        <div>
          <h2 class="text-2xl font-display uppercase tracking-tight text-[#10161D]">Your Order</h2>
          <p class="text-xs font-mono uppercase tracking-wider text-[#10161D]/60 mt-0.5">
            {{ cartGetters.itemCount.value }} {{ cartGetters.itemCount.value === 1 ? 'item' : 'items' }} selected
          </p>
        </div>
        <button 
          @click="cartActions.closeCart()"
          class="w-9 h-9 rounded-full border border-[#10161D]/20 flex items-center justify-center text-[#10161D] hover:bg-[#10161D] hover:text-white transition-colors cursor-pointer"
          aria-label="Close order drawer"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Segmented Order Type Toggle -->
      <div class="px-6 py-3 bg-[#FAF8F5] border-b border-[#10161D]/10">
        <div class="grid grid-cols-2 p-1 bg-white rounded-full text-xs font-bold tracking-wide border border-[#10161D]/10">
          <button 
            type="button"
            @click="cartActions.setOrderType('pickup')"
            class="py-2 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            :class="cartState.orderType === 'pickup' ? 'bg-[#10161D] text-white shadow-sm' : 'text-[#10161D]/70 hover:text-[#10161D]'"
          >
            <MapPin class="w-3.5 h-3.5" />
            <span>Pickup (15 Min)</span>
          </button>
          <button 
            type="button"
            @click="cartActions.setOrderType('delivery')"
            class="py-2 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            :class="cartState.orderType === 'delivery' ? 'bg-[#10161D] text-white shadow-sm' : 'text-[#10161D]/70 hover:text-[#10161D]'"
          >
            <Truck class="w-3.5 h-3.5" />
            <span>Midtown Delivery</span>
          </button>
        </div>
        <p class="text-[11px] font-mono text-[#10161D]/65 text-center mt-2 flex items-center justify-center gap-1">
          <MapPin v-if="cartState.orderType === 'pickup'" class="w-3 h-3 text-[#896A39]" />
          <Truck v-else class="w-3 h-3 text-[#896A39]" />
          <span v-if="cartState.orderType === 'pickup'">Express Pickup at 30 W 57th St (near Central Park West)</span>
          <span v-else>Direct Delivery across Midtown Manhattan (10019, 10022, 10036)</span>
        </p>
      </div>

      <!-- Drawer Content -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- Empty State -->
        <div v-if="cartState.items.length === 0" class="h-full flex flex-col items-center justify-center text-center py-16 space-y-3">
          <div class="w-16 h-16 rounded-full bg-white border border-[#10161D]/10 flex items-center justify-center text-[#896A39] mb-2 shadow-sm">
            <ShoppingBag class="w-7 h-7" />
          </div>
          <span class="font-serif italic text-3xl text-[#10161D]">Your cart is empty.</span>
          <p class="text-xs text-[#10161D]/70 max-w-[240px] font-sans">
            Explore our signature plates, build a custom bowl, or choose cold-pressed juices.
          </p>
          <button 
            @click="cartActions.closeCart()"
            class="mt-4 px-6 py-2.5 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-wider font-bold rounded-full transition-all shadow-md cursor-pointer"
          >
            Explore The Menu →
          </button>
        </div>

        <!-- Populated Cart Items -->
        <div v-else class="space-y-3">
          <div 
            v-for="(item, idx) in cartState.items" 
            :key="idx"
            class="bg-white p-3.5 rounded-2xl border border-[#10161D]/10 shadow-sm flex items-center gap-3 relative group"
          >
            <!-- Dish Thumbnail -->
            <img 
              :src="item.image" 
              :alt="item.name" 
              class="w-16 h-16 rounded-xl object-cover bg-[#FAF8F5] flex-shrink-0"
            />

            <!-- Item Details -->
            <div class="flex-1 min-w-0">
              <h4 class="font-display font-bold text-sm uppercase text-[#10161D] truncate">{{ item.name }}</h4>
              <p class="text-xs font-mono text-[#896A39] font-bold mt-0.5">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </p>
              <div v-if="item.customNotes" class="text-[11px] text-[#10161D]/60 truncate mt-0.5">
                {{ item.customNotes }}
              </div>
            </div>

            <!-- Quantity Controls -->
            <div class="flex items-center gap-1.5 border border-[#10161D]/20 rounded-full px-2 py-1 bg-[#FAF8F5]">
              <button 
                type="button" 
                @click="cartActions.updateQuantity(idx, -1)"
                class="w-5 h-5 flex items-center justify-center font-bold text-[#10161D] hover:text-[#896A39] transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span class="w-4 text-center text-xs font-mono font-bold text-[#10161D]">{{ item.quantity }}</span>
              <button 
                type="button" 
                @click="cartActions.updateQuantity(idx, 1)"
                class="w-5 h-5 flex items-center justify-center font-bold text-[#10161D] hover:text-[#896A39] transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <!-- Special Kitchen Instructions -->
          <div class="pt-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[#10161D]/70 mb-1.5 font-mono">
              Special Kitchen Notes
            </label>
            <input 
              v-model="cartState.orderNotes"
              type="text" 
              placeholder="e.g. dressing on the side, utensils requested..."
              class="w-full text-xs bg-white border border-[#10161D]/15 rounded-xl px-3 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
            />
          </div>

          <!-- Tip Selector -->
          <div class="pt-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[#10161D]/70 mb-1.5 font-mono">
              Support the Kitchen Team
            </label>
            <div class="grid grid-cols-4 gap-2">
              <button 
                v-for="tip in [15, 18, 20, 0]" 
                :key="tip"
                type="button"
                @click="cartActions.setTipPercent(tip)"
                class="py-2 rounded-xl border text-xs font-mono font-bold transition-all text-center cursor-pointer"
                :class="cartState.tipPercent === tip 
                  ? 'bg-[#10161D] text-white border-[#10161D]' 
                  : 'bg-white text-[#10161D] border-[#10161D]/15 hover:border-[#10161D]'"
              >
                {{ tip === 0 ? 'No Tip' : tip + '%' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Drawer Footer with Subtotal & Checkout -->
      <div v-if="cartState.items.length > 0" class="border-t border-[#10161D]/10 bg-white p-5 space-y-3">
        <div class="space-y-1.5 text-xs font-mono text-[#10161D]/80">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span class="font-semibold">${{ cartGetters.subtotal.value.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span>NYC Sales Tax (8.875%)</span>
            <span>${{ cartGetters.tax.value.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between" v-if="cartState.tipPercent > 0">
            <span>Kitchen Gratuity ({{ cartState.tipPercent }}%)</span>
            <span>${{ cartGetters.tipAmount.value.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-base font-bold text-[#10161D] pt-2 border-t border-[#10161D]/10">
            <span class="font-display uppercase">Total</span>
            <span class="font-mono text-[#896A39]">${{ cartGetters.total.value.toFixed(2) }}</span>
          </div>
        </div>

        <button 
          type="button"
          @click="cartActions.submitOrder()"
          class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-widest font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Checkout • ${{ cartGetters.total.value.toFixed(2) }}</span>
          <ArrowRight class="w-4 h-4" />
        </button>

        <p class="text-[11px] font-mono text-center text-[#1E3A2B] font-semibold flex items-center justify-center gap-1">
          <ShieldCheck class="w-3.5 h-3.5 text-[#3DDC84]" />
          <span>100% Seed Oil Free • Cooked in Pure EVOO &amp; Avocado Oil</span>
        </p>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { cartState, cartGetters, cartActions } from '../stores/cart.js';
import { X, MapPin, Truck, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-vue-next';
</script>
