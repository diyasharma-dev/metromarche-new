<template>
  <footer class="bg-[#10161D] text-[#F4ECDD] pt-16 sm:pt-20 pb-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Grid: Brand & Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
        
        <!-- Brand Col (2 cols on lg) -->
        <div class="lg:col-span-2 space-y-5">
          <router-link to="/" class="inline-block" aria-label="Metro Marché home">
            <img 
              src="/site/logo-white.webp" 
              alt="Metro Marché" 
              class="h-12 w-auto object-contain"
            />
          </router-link>
          <p class="text-xs sm:text-sm text-[#F4ECDD]/75 max-w-sm leading-relaxed font-sans">
            Seed oil free. Made from scratch. Fresh, fast and made for Midtown. Chef-crafted salads, sandwiches and market-fresh plates cooked daily at 30 W 57th St.
          </p>
          <div class="flex items-center gap-2 text-xs font-mono text-[#3DDC84]">
            <span class="dot-pulse"></span>
            <span>NYC Flagship Open Daily • 7:00 AM</span>
          </div>
        </div>

        <!-- Col 1: Eat -->
        <div class="space-y-3 font-sans">
          <h4 class="font-display font-bold text-sm uppercase tracking-wider text-[#C9A55C]">
            Eat &amp; Order
          </h4>
          <ul class="space-y-2 text-xs text-[#F4ECDD]/80">
            <li><router-link to="/menu" class="hover:text-[#DF4A2A] transition-colors">Digital Menu (112 Items)</router-link></li>
            <li><button @click="cartActions.openCart()" class="hover:text-[#DF4A2A] transition-colors">Express Pickup (15 Min)</button></li>
            <li><router-link to="/build" class="hover:text-[#DF4A2A] transition-colors">Build Custom Bowl</router-link></li>
            <li><router-link to="/catering" class="hover:text-[#DF4A2A] transition-colors">Corporate Catering</router-link></li>
            <li><router-link to="/rewards" class="hover:text-[#DF4A2A] transition-colors">Loyalty Rewards ($5 Bonus)</router-link></li>
          </ul>
        </div>

        <!-- Col 2: Metro -->
        <div class="space-y-3 font-sans">
          <h4 class="font-display font-bold text-sm uppercase tracking-wider text-[#C9A55C]">
            Our Story
          </h4>
          <ul class="space-y-2 text-xs text-[#F4ECDD]/80">
            <li><router-link to="/about" class="hover:text-[#DF4A2A] transition-colors">About &amp; Philosophy</router-link></li>
            <li><router-link to="/about#seed-oils" class="hover:text-[#DF4A2A] transition-colors">Why Zero Seed Oils?</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#DF4A2A] transition-colors">Contact &amp; Directions</router-link></li>
            <li><router-link to="/contact#careers" class="hover:text-[#DF4A2A] transition-colors">Careers</router-link></li>
            <li><router-link to="/contact#feedback" class="hover:text-[#DF4A2A] transition-colors">Feedback &amp; Comments</router-link></li>
            <li><a href="https://www.instagram.com/metromarchenyc/" target="_blank" rel="noopener" class="hover:text-[#DF4A2A] transition-colors">Instagram @metromarchenyc</a></li>
            <li><a href="https://www.facebook.com/metromarchenyc/" target="_blank" rel="noopener" class="hover:text-[#DF4A2A] transition-colors">Facebook @metromarchenyc</a></li>
            <li><a href="https://onelink.to/nebagp" target="_blank" rel="noopener" class="hover:text-[#DF4A2A] transition-colors">Download Marché App</a></li>
          </ul>
        </div>

        <!-- Col 3: Visit -->
        <div class="space-y-3 font-sans">
          <h4 class="font-display font-bold text-sm uppercase tracking-wider text-[#C9A55C]">
            Visit Us
          </h4>
          <div class="text-xs text-[#F4ECDD]/80 space-y-1.5 font-mono">
            <p>30 W 57th St<br />New York, NY 10019</p>
            <p><a href="tel:+12126973334" class="text-[#DF4A2A] hover:underline font-bold">(212) 697-3334</a></p>
            <p><a href="mailto:info@metromarche.com" class="text-[#C9A55C] hover:underline">info@metromarche.com</a></p>
            <p><a href="mailto:catering@metromarche.com" class="text-[#C9A55C] hover:underline">catering@metromarche.com</a></p>
            <div class="pt-2 text-[11px] text-[#F4ECDD]/60">
              <p>Mon–Thu: 7am – 7pm</p>
              <p>Fri–Sun: 7am – 6pm</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Architectural Giant Watermark Logo -->
      <div class="py-8 text-center select-none overflow-hidden">
        <span class="font-display font-black text-6xl sm:text-9xl md:text-[11rem] lg:text-[14rem] uppercase tracking-tighter text-white/[0.04] leading-none block">
          Metro Marché
        </span>
      </div>

      <!-- Bottom Legal Row -->
      <div class="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#F4ECDD]/60 gap-3 text-center sm:text-left">
        <div>
          © 2026 Metro Marché · Woman-owned · NYC · Seed oil free kitchen
        </div>
        <div class="flex items-center gap-4">
          <span>Central Park West, Manhattan</span>
          <span class="text-[#C9A55C] font-semibold">Elevated Vue 3 Design</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { cartActions } from '../stores/cart.js';
</script>
