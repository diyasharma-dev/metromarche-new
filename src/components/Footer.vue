<template>
  <footer class="bg-[#10161D] text-stone-400 pt-16 pb-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
        
        <div class="lg:col-span-2 space-y-4">
          <router-link to="/" class="inline-block">
            <img src="/assets/images/logo-white.webp" alt="Metro Marché" class="h-10 w-auto object-contain" />
          </router-link>
          <p class="text-xs text-stone-400 max-w-sm leading-relaxed">
            Metro Marché is Midtown Manhattan’s premier 100% seed-oil-free café and corporate catering company. Chef-crafted daily from scratch near Central Park and 57th Street.
          </p>
          <div class="text-xs text-stone-400 space-y-2">
            <p class="flex items-center gap-1.5">
              <MapPin class="w-3.5 h-3.5 text-[#896A39] shrink-0" />
              <span>30 W 57th St, New York, NY 10019</span>
            </p>
            <p class="flex items-center gap-1.5">
              <Phone class="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <a href="tel:2126973334" class="text-amber-300 hover:underline">(212) 697-3334</a>
            </p>
            <p class="flex items-center gap-1.5">
              <Mail class="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <a href="mailto:catering@metromarche.com" class="text-amber-300 hover:underline">catering@metromarche.com</a>
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-wider">Explore</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/menu" class="hover:text-white transition">Digital Menu</router-link></li>
            <li><a href="/#market-table" class="hover:text-white transition">Daily Market Table</a></li>
            <li><router-link to="/catering" class="hover:text-white transition">Corporate Catering</router-link></li>
            <li><router-link to="/about" class="hover:text-white transition">Our Story &amp; Values</router-link></li>
            <li><router-link to="/rewards" class="hover:text-white transition">Rewards App</router-link></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-wider">Catering</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/catering" class="hover:text-white transition">Breakfast Boards</router-link></li>
            <li><router-link to="/catering" class="hover:text-white transition">Executive Boxed Lunches</router-link></li>
            <li><router-link to="/catering" class="hover:text-white transition">Market Table Buffets</router-link></li>
            <li><router-link to="/catering" class="hover:text-white transition">Catering Inquiry</router-link></li>
            <li><a href="https://order.metromarche.com/order/metro-marche-30-west-57-nomaw" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">Online Pickup</a></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-wider">Follow Us</h4>
          <div class="flex space-x-3 pt-1">
            <a href="https://www.instagram.com/metromarchenyc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#896A39] text-white flex items-center justify-center transition">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/metromarchenyc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#896A39] text-white flex items-center justify-center transition">
              <Facebook class="w-4 h-4" />
            </a>
          </div>
          <div class="pt-2 text-xs text-stone-400 space-y-1">
            <span class="block flex items-center gap-1.5"><Clock class="w-3.5 h-3.5 text-[#896A39]" /> Mon - Fri: 7am - 7pm</span>
            <span class="block ml-5">Sat: 8am - 5pm</span>
            <span class="block ml-5 text-stone-500">Sun: Closed</span>
          </div>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <div>
          &copy; 2026 Metro Marché. All rights reserved. 30 W 57th St, Midtown New York.
        </div>
        <div class="flex space-x-6">
          <router-link to="/about" class="hover:text-stone-300 transition">Privacy &amp; Terms</router-link>
          <router-link to="/contact" class="hover:text-stone-300 transition">Feedback</router-link>
          <router-link to="/contact" class="hover:text-stone-300 transition">Careers</router-link>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-vue-next';
</script>
