<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-12 space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
          <MapPin class="w-3.5 h-3.5" />
          <span>Flagship Destination</span>
        </div>
        <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
          Visit us on <span class="font-serif italic font-normal text-[#896A39] lowercase">57th</span> street.
        </h2>
        <p class="text-base text-[#1B1812]/75 font-sans max-w-2xl">
          Footsteps from Carnegie Hall, Bergdorf Goodman, and Central Park South. Dine in, take out, or order ahead for 15-minute express pickup.
        </p>
      </div>

      <!-- Storefront Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Left Info & Hours Card -->
        <div class="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#10161D]/10 shadow-xl flex flex-col justify-between">
          <div class="space-y-6">
            <!-- Storefront Photo -->
            <div class="rounded-2xl overflow-hidden aspect-[16/9] bg-[#EFE4D0] relative border border-[#10161D]/5">
              <img 
                src="/site/storefront-gmb.webp" 
                alt="Metro Marché storefront at 30 W 57th St, NYC" 
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute bottom-3 left-3 bg-[#10161D]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-mono flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse"></span>
                <span>Open Daily • 30 W 57th St</span>
              </div>
            </div>

            <!-- Address & Phone -->
            <div class="space-y-2">
              <h3 class="font-display font-bold text-2xl uppercase text-[#10161D] leading-tight">
                30 W 57th St, New York, NY 10019
              </h3>
              <p class="font-mono text-xs text-[#1B1812]/70">
                Between 5th &amp; 6th Avenues • Footsteps from Central Park South
              </p>
              <div class="space-y-1 pt-1 font-mono text-xs">
                <div>
                  <a 
                    href="tel:+12126973334" 
                    class="inline-flex items-center gap-2 font-mono font-bold text-sm text-[#896A39] hover:underline"
                  >
                    <Phone class="w-4 h-4" />
                    <span>(212) 697-3334</span>
                  </a>
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1">
                  <a 
                    href="mailto:info@metromarche.com" 
                    class="inline-flex items-center gap-1.5 font-bold text-xs text-[#896A39] hover:underline"
                  >
                    <Mail class="w-3.5 h-3.5" />
                    <span>info@metromarche.com</span>
                  </a>
                  <a 
                    href="mailto:catering@metromarche.com" 
                    class="inline-flex items-center gap-1.5 font-bold text-xs text-[#896A39] hover:underline"
                  >
                    <Mail class="w-3.5 h-3.5" />
                    <span>catering@metromarche.com</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Weekly Operating Hours Table -->
            <div class="bg-[#FAF8F5] p-4 rounded-2xl border border-[#10161D]/5 space-y-1.5 text-xs font-mono">
              <div 
                v-for="schedule in hours" 
                :key="schedule.day"
                class="flex justify-between py-1 border-b border-[#10161D]/5 last:border-0"
                :class="schedule.isToday ? 'font-bold text-[#10161D] bg-white px-2 rounded-lg' : 'text-[#1B1812]/70'"
              >
                <span>{{ schedule.day }} <span v-if="schedule.isToday" class="text-[#3DDC84]">• Today</span></span>
                <span>{{ schedule.time }}</span>
              </div>
            </div>

            <!-- Subway Transit Lines -->
            <div>
              <span class="block text-[11px] font-mono uppercase text-[#10161D]/60 font-semibold mb-2">
                Midtown Subway Connections:
              </span>
              <div class="flex flex-wrap items-center gap-2 text-xs font-mono font-bold">
                <span class="px-2.5 py-1 bg-[#FCCC0A] text-[#10161D] rounded-md shadow-xs">N Q R W</span>
                <span class="px-2.5 py-1 bg-[#FF6319] text-white rounded-md shadow-xs">F</span>
                <span class="px-2.5 py-1 bg-[#0039A6] text-white rounded-md shadow-xs">E M</span>
                <span class="px-2.5 py-1 bg-[#EE352E] text-white rounded-md shadow-xs">1</span>
                <span class="text-xs text-[#1B1812]/70 font-normal ml-1">57th St / 5th Ave / 7th Ave Stations</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-8 pt-4 border-t border-[#10161D]/10 flex flex-wrap gap-3">
            <button 
              type="button"
              @click="cartActions.openCart()"
              class="flex-1 py-3.5 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-widest font-bold rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag class="w-4 h-4" />
              <span>Order For Pickup</span>
            </button>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Metro+Marche+30+W+57th+St+New+York"
              target="_blank"
              rel="noopener"
              class="flex-1 py-3.5 bg-white border border-[#10161D]/20 text-[#10161D] hover:border-[#10161D] text-xs font-display uppercase tracking-widest font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Get Directions</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Right Embedded Google Map -->
        <div class="lg:col-span-6 rounded-3xl overflow-hidden border border-[#10161D]/10 shadow-xl min-h-[400px] bg-[#EFE4D0]">
          <iframe 
            class="w-full h-full min-h-[460px] border-0" 
            title="Metro Marché Location Map"
            loading="lazy" 
            src="https://www.google.com/maps?q=Metro+Marche,+30+W+57th+St,+New+York,+NY+10019&output=embed"
          ></iframe>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { cartActions } from '../stores/cart.js';
import { MapPin, Phone, Mail, ShoppingBag, ExternalLink } from 'lucide-vue-next';

const currentDayIdx = new Date().getDay(); // 0 Sun, 1 Mon ... 6 Sat

const hours = computed(() => [
  { day: 'Monday', time: '7:00 AM – 7:00 PM', isToday: currentDayIdx === 1 },
  { day: 'Tuesday', time: '7:00 AM – 7:00 PM', isToday: currentDayIdx === 2 },
  { day: 'Wednesday', time: '7:00 AM – 7:00 PM', isToday: currentDayIdx === 3 },
  { day: 'Thursday', time: '7:00 AM – 7:00 PM', isToday: currentDayIdx === 4 },
  { day: 'Friday', time: '7:00 AM – 6:00 PM', isToday: currentDayIdx === 5 },
  { day: 'Saturday', time: '7:00 AM – 6:00 PM', isToday: currentDayIdx === 6 },
  { day: 'Sunday', time: '7:00 AM – 6:00 PM', isToday: currentDayIdx === 0 },
]);
</script>
