<template>
  <section class="relative bg-[#10161D] text-[#FAF8F5] py-20 sm:py-28 overflow-hidden border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column: Copy & Executive Pillars -->
        <div class="lg:col-span-6 space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Users class="w-3.5 h-3.5" />
              <span>Executive Corporate Catering</span>
            </div>
            <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.95]">
              Catering that fuels <br />
              <span class="font-serif italic font-normal text-[#C9A55C] lowercase">executive</span> focus.
            </h2>
            <p class="text-base text-white/80 font-sans mt-4 leading-relaxed">
              Midtown's trusted corporate catering: chef-crafted salads, sandwiches, breakfast spreads, boxed lunches and hot entrées for office meetings, team lunches and client events. Fast delivery, consistent quality, menus for every taste.
            </p>
          </div>

          <!-- Feature List -->
          <ul class="space-y-3 font-sans text-xs sm:text-sm pt-2">
            <li class="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
              <div>
                <span class="font-bold text-white block">Breakfast Spreads</span>
                <span class="text-white/60 text-xs">Bagels, pastries, seasonal fruit, parfaits &amp; coffee</span>
              </div>
              <span class="font-mono text-xs text-[#C9A55C] font-semibold">$18 / guest</span>
            </li>
            <li class="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
              <div>
                <span class="font-bold text-white block">Boxed Lunches &amp; Platters</span>
                <span class="text-white/60 text-xs">Individually labeled sandwiches, chef salads &amp; sides</span>
              </div>
              <span class="font-mono text-xs text-[#C9A55C] font-semibold">$24 / guest</span>
            </li>
            <li class="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
              <div>
                <span class="font-bold text-white block">Hot Entrées &amp; Market Buffets</span>
                <span class="text-white/60 text-xs">Grass-fed sirloin, seared salmon, saffron rice &amp; roasted sides</span>
              </div>
              <span class="font-mono text-xs text-[#C9A55C] font-semibold">$32 / guest</span>
            </li>
          </ul>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="https://order.metromarche.com/order/metro-marche-30-west-57-nomaw" 
              target="_blank" 
              rel="noopener"
              class="px-7 py-3.5 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Order Catering Online</span>
              <ArrowRight class="w-4 h-4" />
            </a>
            <a 
              href="tel:+12126973334" 
              class="px-6 py-3.5 bg-transparent border border-white/20 hover:border-white text-white font-display text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone class="w-4 h-4 text-[#C9A55C]" />
              <span>(212) 697-3334</span>
            </a>
            <a 
              href="mailto:catering@metromarche.com" 
              class="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#C9A55C] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all flex items-center gap-2"
            >
              <Mail class="w-4 h-4" />
              <span>catering@metromarche.com</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Budget Estimator & High-Res Photography -->
        <div class="lg:col-span-6 space-y-6">
          
          <!-- Interactive Quick Estimator Card -->
          <div class="bg-[#161F28] text-white p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-5">
            <div class="flex justify-between items-center pb-3 border-b border-white/10">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-[#C9A55C] font-bold">Instant Planning</span>
                <h4 class="font-display font-bold text-2xl uppercase tracking-tight text-white mt-0.5">
                  Live Budget Estimator
                </h4>
              </div>
              <span class="px-3 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-[10px] font-bold uppercase rounded-full border border-[#C9A55C]/30">
                100% Seed Oil Free
              </span>
            </div>

            <!-- Guest Count Slider -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-mono uppercase text-white/70">Estimated Headcount:</span>
                <span class="text-2xl font-display font-black text-[#C9A55C]">{{ guests }} Guests</span>
              </div>
              <input 
                v-model.number="guests" 
                type="range" 
                min="10" 
                max="300" 
                step="5"
                class="w-full accent-[#896A39] cursor-pointer h-2 bg-white/20 rounded-lg"
              />
              <div class="flex justify-between text-[11px] font-mono text-white/50 mt-1.5">
                <span>10 (Executive Team)</span>
                <span>100 (Department)</span>
                <span>300+ (Full Headquarters)</span>
              </div>
            </div>

            <!-- Package Selector -->
            <div>
              <label class="block text-xs font-mono uppercase text-white/70 mb-2">Select Catering Package:</label>
              <div class="grid grid-cols-3 gap-2 text-center text-xs">
                <button 
                  v-for="pkg in packages" 
                  :key="pkg.name"
                  type="button"
                  @click="selectedPackage = pkg"
                  class="p-3 rounded-2xl border text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer"
                  :class="selectedPackage.name === pkg.name 
                    ? 'bg-[#896A39] text-white border-[#896A39] font-bold shadow-md' 
                    : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'"
                >
                  <span class="font-display font-bold text-[11px] uppercase">{{ pkg.short }}</span>
                  <span class="text-[10px] opacity-80">${{ pkg.price }}/person</span>
                </button>
              </div>
            </div>

            <!-- Calculated Breakdown -->
            <div class="bg-black/30 p-4 rounded-2xl border border-white/10 space-y-2 text-xs font-mono">
              <div class="flex justify-between text-white/70">
                <span>Food &amp; Presentation Total:</span>
                <span class="text-white">${{ (guests * selectedPackage.price).toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-white/70">
                <span>Estimated NYC Tax (8.875%):</span>
                <span class="text-white">${{ (guests * selectedPackage.price * 0.08875).toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-white font-bold pt-2 border-t border-white/10 text-sm">
                <span>Estimated Budget Total:</span>
                <span class="text-[#C9A55C] text-lg">${{ (guests * selectedPackage.price * 1.08875).toFixed(2) }}</span>
              </div>
            </div>

            <!-- Launch Modal with Prefill -->
            <button 
              type="button"
              @click="cartActions.openCateringModal({ guests, package: selectedPackage.name })"
              class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText class="w-4 h-4" />
              <span>Lock In Proposal For {{ guests }} Guests</span>
            </button>
          </div>

          <!-- High-Res Catering Photography -->
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 shadow-lg">
              <img 
                src="/assets/images/catering-spread.jpg" 
                alt="Executive corporate catering buffet spread" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 shadow-lg">
              <img 
                src="/assets/images/catering-boxes.jpg" 
                alt="Individually labeled executive boxed meals" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { cartActions } from '../stores/cart.js';
import { Users, ArrowRight, Phone, Mail, FileText } from 'lucide-vue-next';

const guests = ref(30);

const packages = [
  { name: 'Boardroom Breakfast Spread ($18/guest)', short: 'Breakfast', price: 18 },
  { name: 'Executive Boxed Lunches ($24/guest)', short: 'Boxed Lunch', price: 24 },
  { name: 'Haute Market Table Buffet ($32/guest)', short: 'Market Buffet', price: 32 },
];

const selectedPackage = ref(packages[1]);
</script>
