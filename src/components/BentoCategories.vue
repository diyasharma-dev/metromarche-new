<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#10161D]/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-12 space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Daily Culinary Categories</span>
        </div>
        <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
          Curated for every <br />
          <span class="font-serif italic font-normal text-[#896A39] lowercase">Manhattan</span> hour.
        </h2>
        <p class="text-base text-[#1B1812]/75 font-sans max-w-2xl">
          From early morning espresso and warm viennoiserie to midday power bowls and evening executive catering.
        </p>
      </div>

      <!-- Bento Grid (12 Columns) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
        
        <!-- 1. Market Table (Span 7) -->
        <router-link 
          to="/build"
          class="lg:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-auto sm:h-[380px] relative group border border-[#10161D]/10 shadow-lg flex flex-col justify-end p-6 sm:p-8"
        >
          <img 
            src="/assets/images/market-hot-table.jpg" 
            alt="Hot Market Table buffet at Metro Marché" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/90 via-[#10161D]/30 to-transparent"></div>
          
          <div class="relative z-10 space-y-2">
            <span class="inline-block px-3 py-1 bg-[#896A39] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full">
              Chef-Crafted Custom Plates
            </span>
            <div class="flex items-end justify-between gap-4">
              <div>
                <h3 class="font-display font-bold text-3xl sm:text-4xl uppercase text-white leading-none">
                  Hot Market Table
                </h3>
                <p class="text-xs text-white/80 font-sans mt-2 max-w-md">
                  Choose your organic base, pasture protein, and 2 hot seasonal market sides cooked in 100% Greek EVOO.
                </p>
              </div>
              <span class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#896A39] transition-colors">
                <ArrowRight class="w-5 h-5" />
              </span>
            </div>
          </div>
        </router-link>

        <!-- 2. Artisan Melts & Sandwiches (Span 5) -->
        <router-link 
          to="/menu?cat=sandwiches"
          class="lg:col-span-5 rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-auto sm:h-[380px] relative group border border-[#10161D]/10 shadow-lg flex flex-col justify-end p-6 sm:p-8"
        >
          <img 
            src="/assets/images/artisan-sandwich.jpg" 
            alt="Artisan chicken melt on ciabatta" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/90 via-[#10161D]/30 to-transparent"></div>
          
          <div class="relative z-10 space-y-2">
            <span class="inline-block px-3 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-xs font-bold uppercase tracking-wider rounded-full">
              Warm Pressed Ciabatta
            </span>
            <div class="flex items-end justify-between gap-4">
              <div>
                <h3 class="font-display font-bold text-3xl uppercase text-white leading-none">
                  Artisan Melts
                </h3>
                <p class="text-xs text-white/80 font-sans mt-2">
                  Chicken Parm, Reuben, and Turkey Truffle melts griddled crisp with buffalo mozzarella.
                </p>
              </div>
              <span class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#896A39] transition-colors">
                <ArrowRight class="w-5 h-5" />
              </span>
            </div>
          </div>
        </router-link>

        <!-- 3. Cold-Pressed Juices (Span 4) -->
        <router-link 
          to="/menu?cat=juices"
          class="lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[300px] relative group border border-[#10161D]/10 shadow-lg flex flex-col justify-end p-6"
        >
          <img 
            src="/assets/images/cold-pressed-juice.jpg" 
            alt="Organic cold pressed juices" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/85 via-transparent to-transparent"></div>
          
          <div class="relative z-10 flex items-end justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase text-[#C9A55C] font-bold block mb-1">Raw &amp; Unpasteurized</span>
              <h3 class="font-display font-bold text-2xl uppercase text-white leading-none">
                Cold-Pressed Juices
              </h3>
            </div>
            <span class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#896A39] transition-colors">
              <ArrowRight class="w-4 h-4" />
            </span>
          </div>
        </router-link>

        <!-- 4. Specialty Coffee Bar (Span 4) -->
        <router-link 
          to="/menu?cat=coffee"
          class="lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[300px] relative group border border-[#10161D]/10 shadow-lg flex flex-col justify-end p-6"
        >
          <img 
            src="/assets/images/specialty-coffee.jpg" 
            alt="Specialty espresso and matcha" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/85 via-transparent to-transparent"></div>
          
          <div class="relative z-10 flex items-end justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase text-[#C9A55C] font-bold block mb-1">Direct Trade Beans</span>
              <h3 class="font-display font-bold text-2xl uppercase text-white leading-none">
                Espresso &amp; Matcha
              </h3>
            </div>
            <span class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#896A39] transition-colors">
              <ArrowRight class="w-4 h-4" />
            </span>
          </div>
        </router-link>

        <!-- 5. French Viennoiserie & Bakery (Span 4) -->
        <router-link 
          to="/menu?cat=bakery"
          class="lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[300px] relative group border border-[#10161D]/10 shadow-lg flex flex-col justify-end p-6"
        >
          <img 
            src="/assets/images/croissant-bakery.jpg" 
            alt="Parisian croissants and pastries" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/85 via-transparent to-transparent"></div>
          
          <div class="relative z-10 flex items-end justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase text-[#C9A55C] font-bold block mb-1">Baked Daily At 5 AM</span>
              <h3 class="font-display font-bold text-2xl uppercase text-white leading-none">
                French Viennoiserie
              </h3>
            </div>
            <span class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#896A39] transition-colors">
              <ArrowRight class="w-4 h-4" />
            </span>
          </div>
        </router-link>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles, ArrowRight } from 'lucide-vue-next';
</script>
