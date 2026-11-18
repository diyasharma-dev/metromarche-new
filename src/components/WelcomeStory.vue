<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#10161D]/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left: High-Res Cafe Interior & Sourcing Photo Collage -->
        <div class="lg:col-span-6 relative">
          <div class="rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE4D0] border border-[#10161D]/10 shadow-2xl relative">
            <img 
              src="/assets/images/cafe-interior.jpg" 
              alt="Metro Marché Midtown Manhattan interior" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/70 via-transparent to-transparent"></div>
            
            <div class="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs font-mono">
              <span class="flex items-center gap-1.5 font-bold">
                <MapPin class="w-4 h-4 text-[#C9A55C]" />
                30 W 57th St • Central Park South
              </span>
              <span class="text-[#C9A55C]">Open Daily From 7 AM</span>
            </div>
          </div>

          <!-- Ambient Overlay Card -->
          <div class="hidden sm:flex absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#10161D]/10 shadow-xl items-center gap-3 max-w-xs">
            <div class="w-10 h-10 rounded-xl bg-[#1E3A2B] text-[#C9A55C] flex items-center justify-center font-bold flex-shrink-0">
              <Award class="w-5 h-5" />
            </div>
            <div>
              <div class="text-xs font-display font-bold uppercase text-[#10161D]">Midtown's Pure Standard</div>
              <p class="text-[10px] font-mono text-[#1B1812]/60 mt-0.5">Cooked with 100% Greek EVOO &amp; Avocado Oil only.</p>
            </div>
          </div>
        </div>

        <!-- Right: Brand Manifesto & Heritage -->
        <div class="lg:col-span-6 space-y-6">
          <div class="space-y-3">
            <span class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#896A39]">
              <ShieldCheck class="w-3.5 h-3.5" />
              The Metro Marché Philosophy
            </span>
            <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
              Real food for <br />
              <span class="font-serif italic font-normal text-[#896A39] lowercase">ambitious</span> NYC days.
            </h2>
          </div>

          <p class="text-base text-[#1B1812]/80 font-sans leading-relaxed">
            Fresh, flavorful meals for busy NYC days. Metro Marché is a fresh-focused café and catering company in Midtown West, crafted daily to fuel the city. Cooked from scratch, every day, in the heart of Midtown.
          </p>

          <p class="text-sm text-[#1B1812]/70 font-sans leading-relaxed">
            Great food should be fresh, flavorful, and easy to enjoy. Seed oil free. Made from scratch. Fresh, fast and made for Midtown — right off Central Park West on 57th St.
          </p>

          <!-- Sourcing Pillars -->
          <div class="grid grid-cols-2 gap-4 pt-2 text-xs font-mono">
            <div class="p-3 rounded-xl bg-white border border-[#10161D]/10">
              <div class="font-bold text-[#10161D]">Crete EVOO</div>
              <div class="text-[#1B1812]/60 mt-0.5">Single-estate cold pressed</div>
            </div>
            <div class="p-3 rounded-xl bg-white border border-[#10161D]/10">
              <div class="font-bold text-[#10161D]">Hudson Valley Beef</div>
              <div class="text-[#1B1812]/60 mt-0.5">100% Grass-fed sirloin</div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="pt-2 flex flex-wrap items-center gap-4">
            <router-link 
              to="/about"
              class="px-7 py-3.5 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <span>Our Full Heritage</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
            <router-link 
              to="/contact"
              class="px-7 py-3.5 bg-white border border-[#10161D]/20 hover:border-[#10161D] text-[#10161D] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-xs flex items-center gap-2"
            >
              <MapPin class="w-4 h-4 text-[#896A39]" />
              <span>Locate On 57th St</span>
            </router-link>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ShieldCheck, MapPin, Award, ArrowRight } from 'lucide-vue-next';
</script>
