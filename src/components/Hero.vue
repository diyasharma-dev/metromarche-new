<template>
  <section class="relative bg-[#10161D] text-white overflow-hidden">
    <!-- Ambient Background -->
    <div class="absolute inset-0 z-0">
      <img src="/assets/images/hero-banner.jpg" alt="Metro Marché Culinary Spread" class="w-full h-full object-cover object-center opacity-30 scale-105" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#10161D] via-[#10161D]/95 to-[#10161D]/70"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#10161D] via-transparent to-[#10161D]/80"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Hero Copy -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#896A39]/20 border border-[#896A39]/40 text-amber-200 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <span class="w-2 h-2 rounded-full bg-[#896A39] animate-pulse"></span>
            <span>Midtown Manhattan • 30 W 57th St</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight">
            Fresh, Fast &amp; <br>
            <span class="text-gold-gradient">
              Made for Midtown.
            </span>
          </h1>

          <p class="text-base sm:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
            At Metro Marché, we believe food should energize you. We are Midtown’s premier <strong class="text-white font-semibold">100% seed oil-free café, market table &amp; corporate catering company</strong>. Every salad, warm grain bowl, hot entree, and morning pastry is prepared daily using pure Extra Virgin Olive Oil, Avocado Oil, and scratch-made chef recipes.
          </p>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-wrap gap-3 sm:gap-4">
            <button @click="$emit('open-order')" class="px-8 py-4 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-base shadow-xl hover:shadow-[#896A39]/30 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2">
              <ShoppingBag class="w-5 h-5 text-amber-200" />
              <span>Order Online</span>
            </button>
            <router-link to="/catering" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all flex items-center space-x-2">
              <UtensilsCrossed class="w-5 h-5 text-amber-200" />
              <span>Corporate Catering</span>
            </router-link>
            <a href="#market-table" class="px-5 py-4 rounded-full text-stone-300 hover:text-white font-medium text-sm transition flex items-center space-x-1.5">
              <span>Today's Market Table</span>
              <ArrowDown class="w-4 h-4 text-[#896A39]" />
            </a>
          </div>

          <!-- Trust Badges Row -->
          <div class="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-xs">
            <div class="flex items-center space-x-2 text-stone-200">
              <ShieldCheck class="w-4 h-4 text-[#896A39]" />
              <span>100% Seed Oil Free</span>
            </div>
            <div class="flex items-center space-x-2 text-stone-200">
              <Flame class="w-4 h-4 text-[#DF9F83]" />
              <span>Cooked Daily Fresh</span>
            </div>
            <div class="flex items-center space-x-2 text-stone-200">
              <Leaf class="w-4 h-4 text-emerald-400" />
              <span>Gluten-Free &amp; Vegan</span>
            </div>
            <div class="flex items-center space-x-2 text-stone-200">
              <Star class="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9 on Google (700+)</span>
            </div>
          </div>

        </div>

        <!-- Right Hero Visual Card Stack -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            
            <!-- Main Hero Image Frame -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img src="/assets/images/hero-salad.webp" alt="Metro Marché Signature Bowl" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div class="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span class="inline-block px-3 py-1 rounded-full bg-[#896A39] text-white text-[11px] font-bold uppercase tracking-wider">
                  Today's Chef Selection
                </span>
                <h3 class="text-2xl font-serif font-bold text-white">Harvest Avocado &amp; Salmon Bowl</h3>
                <p class="text-xs text-stone-300">Wild Alaskan salmon, organic tri-color quinoa, Hass avocado, EVOO lemon dill.</p>
              </div>
            </div>

            <!-- Floating Trust Badge 1 (Top Left) -->
            <div class="absolute -top-6 -left-4 sm:-left-6 bg-white text-[#1B222C] px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 border border-stone-100 hidden sm:flex">
              <div class="w-10 h-10 rounded-xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center font-bold">
                <ShieldCheck class="w-6 h-6 text-[#896A39]" />
              </div>
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-[#896A39]">100% Seed Oil Free</div>
                <div class="text-xs text-stone-500 font-medium">Extra Virgin Olive &amp; Avocado Oil</div>
              </div>
            </div>

            <!-- Floating Trust Badge 2 (Bottom Right) -->
            <div class="absolute -bottom-6 -right-4 sm:-right-6 bg-white text-[#1B222C] px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 border border-stone-100 hidden sm:flex">
              <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Award class="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div class="text-xs font-bold text-stone-900">Midtown's Top Rated</div>
                <div class="flex items-center text-amber-500 text-xs font-semibold">
                  <div class="flex space-x-0.5">
                    <Star v-for="i in 5" :key="i" class="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                  <span class="ml-1.5 text-stone-600 font-medium">4.9 on Google</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ShoppingBag, UtensilsCrossed, ArrowDown, ShieldCheck, Flame, Leaf, Star, Award } from 'lucide-vue-next';

defineEmits(['open-order']);
</script>
