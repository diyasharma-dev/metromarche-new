<template>
  <div class="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Rewards Hero -->
      <section class="bg-[#10161D] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 lg:p-20 border border-white/10 shadow-2xl relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
              <Award class="w-3.5 h-3.5" />
              <span>Metro Marché Loyalty Program</span>
            </div>
            <h1 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-white">
              It pays to be <br />
              <span class="font-serif italic font-normal text-[#C9A55C] lowercase">loyal</span>.
            </h1>
            <p class="text-base sm:text-lg text-white/80 leading-relaxed font-sans max-w-xl">
              Turn every visit into rewards you'll actually use. From your morning coffee to weekend splurges, your loyalty adds up fast. Skip the line, order ahead, and unlock rewards.
            </p>
            <div class="pt-2 flex flex-wrap gap-4">
              <a 
                href="https://onelink.to/nebagp" 
                target="_blank" 
                rel="noopener"
                class="px-8 py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Download class="w-4 h-4" />
                <span>Download App (iOS &amp; Android)</span>
              </a>
              <button 
                @click="cartActions.openCart()"
                class="px-7 py-4 bg-transparent border border-white/20 hover:border-white text-white font-display text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag class="w-4 h-4 text-[#C9A55C]" />
                <span>Order Online</span>
              </button>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-[280px]">
              <img 
                src="/site/app-phone.webp" 
                alt="Metro Marché mobile app" 
                class="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

        </div>
      </section>

      <!-- 3 Steps to Earn -->
      <section class="space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="inline-block px-3.5 py-1 bg-white border border-[#10161D]/10 text-[#896A39] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
            Instant Points
          </span>
          <h2 class="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#10161D]">
            How The Program <span class="font-serif italic font-normal text-[#896A39] lowercase">works</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <span class="font-serif italic text-4xl text-[#896A39]">1.</span>
            <h3 class="font-display font-bold text-xl uppercase text-[#10161D]">Download &amp; Join</h3>
            <p class="text-xs sm:text-sm text-[#1B1812]/75 font-sans leading-relaxed">
              Install the app in 30 seconds. Your account instantly receives a <strong>$5 welcome credit (125 points)</strong> to redeem on your first order.
            </p>
          </div>

          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <span class="font-serif italic text-4xl text-[#896A39]">2.</span>
            <h3 class="font-display font-bold text-xl uppercase text-[#10161D]">Earn 10 Pts / $1</h3>
            <p class="text-xs sm:text-sm text-[#1B1812]/75 font-sans leading-relaxed">
              Scan your in-app QR code at checkout, order ahead for 15-minute express pickup, or earn double points on weekend orders.
            </p>
          </div>

          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <span class="font-serif italic text-4xl text-[#896A39]">3.</span>
            <h3 class="font-display font-bold text-xl uppercase text-[#10161D]">Redeem Free Food</h3>
            <p class="text-xs sm:text-sm text-[#1B1812]/75 font-sans leading-relaxed">
              Redeem points directly for specialty coffees, flaky Parisian croissants, cold-pressed juices, melts, and custom hot market bowls.
            </p>
          </div>
        </div>
      </section>

      <!-- Reward Tiers Matrix -->
      <section class="bg-white rounded-3xl p-8 sm:p-12 border border-[#10161D]/10 shadow-xl space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h3 class="font-display font-black text-3xl sm:text-4xl uppercase text-[#10161D]">
            Redeemable Reward Tiers
          </h3>
          <p class="text-xs font-mono text-[#10161D]/60">Unlock free meals quickly as you dine</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-[#FAF8F5] p-6 rounded-2xl border border-[#10161D]/10 text-center space-y-2">
            <div class="font-mono text-xs font-bold uppercase text-[#896A39]">100 Points</div>
            <div class="font-display font-bold text-xl uppercase text-[#10161D]">Coffee / Tea</div>
            <p class="text-xs text-[#1B1812]/70 font-sans">Single-origin espresso, cold brew, or organic matcha</p>
          </div>
          <div class="bg-[#FAF8F5] p-6 rounded-2xl border border-[#10161D]/10 text-center space-y-2">
            <div class="font-mono text-xs font-bold uppercase text-[#896A39]">250 Points</div>
            <div class="font-display font-bold text-xl uppercase text-[#10161D]">French Bakery</div>
            <p class="text-xs text-[#1B1812]/70 font-sans">Almond croissant, pain au chocolat, or avocado toast bite</p>
          </div>
          <div class="bg-[#FAF8F5] p-6 rounded-2xl border border-[#10161D]/10 text-center space-y-2">
            <div class="font-mono text-xs font-bold uppercase text-[#896A39]">500 Points</div>
            <div class="font-display font-bold text-xl uppercase text-[#10161D]">Artisan Melt</div>
            <p class="text-xs text-[#1B1812]/70 font-sans">Chicken Parm, Reuben, or Pasture Egg Ciabatta melt</p>
          </div>
          <div class="bg-[#FAF8F5] p-6 rounded-2xl border border-[#10161D]/10 text-center space-y-2">
            <div class="font-mono text-xs font-bold uppercase text-[#896A39]">750 Points</div>
            <div class="font-display font-bold text-xl uppercase text-[#10161D]">Market Bowl</div>
            <p class="text-xs text-[#1B1812]/70 font-sans">Grass-fed steak or wild salmon custom hot market plate</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { cartActions } from '../stores/cart.js';
import { Award, Download, ShoppingBag } from 'lucide-vue-next';
</script>
