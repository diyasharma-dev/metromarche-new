<template>
  <div class="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Header Banner -->
      <section class="bg-[#10161D] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 lg:p-20 border border-white/10 shadow-2xl relative overflow-hidden">
        <div class="max-w-3xl space-y-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <Award class="w-3.5 h-3.5" />
            <span>The Metro Difference</span>
          </div>
          <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95] text-white">
            Great food should be fresh, <br />
            <span class="font-serif italic font-normal text-[#C9A55C] lowercase">flavorful &amp; easy</span> to enjoy.
          </h1>
          <p class="text-base sm:text-lg text-white/80 leading-relaxed font-sans font-light">
            Metro Marché is a fresh-focused café and catering company in the heart of Midtown West. We believe great food should be simple, vibrant, and made with ingredients you can feel good about.
          </p>
        </div>

        <div class="hidden lg:block absolute -right-12 -bottom-12 w-96 h-96 opacity-25 pointer-events-none rounded-full overflow-hidden">
          <img src="/assets/images/cafe-interior.jpg" alt="Metro Marché cafe interior" class="w-full h-full object-cover" />
        </div>
      </section>

      <!-- The 100% Seed Oil-Free Philosophy -->
      <section id="seed-oils" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck class="w-3.5 h-3.5" />
            <span>The Seed Oil-Free Standard</span>
          </div>
          <h2 class="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#10161D]">
            Why We Ban Industrial <span class="font-serif italic font-normal text-[#896A39] lowercase">seed oils</span>
          </h2>
          <p class="text-sm sm:text-base text-[#1B1812]/80 leading-relaxed font-sans">
            When we opened at 30 W 57th Street, we made an unconditional pledge to our Midtown community: <strong class="text-[#10161D]">zero canola, zero soybean, zero corn, and zero cottonseed oil</strong> in any recipe.
          </p>
          <p class="text-xs sm:text-sm text-[#1B1812]/75 leading-relaxed font-sans">
            Industrial seed oils oxidize rapidly under restaurant heat and cause systemic inflammation, leaving busy professionals feeling fatigued and sluggish by 2:00 PM. Instead, we cook exclusively with cold-pressed Extra Virgin Olive Oil and pure, high-heat Avocado Oil. You taste the clean, vibrant ingredients of the food—not grease.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-2">
            <div class="bg-white p-5 rounded-2xl border border-[#10161D]/10 space-y-2 shadow-sm">
              <div class="w-8 h-8 rounded-lg bg-[#1E3A2B] text-[#3DDC84] flex items-center justify-center font-bold">
                <Leaf class="w-4 h-4" />
              </div>
              <h4 class="font-display font-bold text-sm uppercase text-[#10161D]">100% Greek EVOO</h4>
              <p class="text-xs text-[#1B1812]/70 font-sans leading-relaxed">Rich in polyphenols, antioxidants, and authentic Mediterranean aroma.</p>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-[#10161D]/10 space-y-2 shadow-sm">
              <div class="w-8 h-8 rounded-lg bg-[#896A39]/20 text-[#896A39] flex items-center justify-center font-bold">
                <ShieldCheck class="w-4 h-4" />
              </div>
              <h4 class="font-display font-bold text-sm uppercase text-[#10161D]">Pure Avocado Oil</h4>
              <p class="text-xs text-[#1B1812]/70 font-sans leading-relaxed">Naturally expeller pressed with a clean 500°F smoke point for crisp roasting.</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#10161D]/10 shadow-xl space-y-6">
            <h3 class="font-display font-bold text-2xl uppercase text-[#10161D] border-b border-[#10161D]/10 pb-3">
              Kitchen Standard Comparison
            </h3>

            <!-- What we cook with -->
            <div class="space-y-3">
              <div class="text-xs font-mono font-bold uppercase text-[#1E3A2B] flex items-center gap-1.5">
                <CheckCircle2 class="w-4 h-4 text-[#3DDC84]" />
                <span>What We Exclusively Cook With:</span>
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs font-mono font-semibold">
                <span class="p-3 bg-[#FAF8F5] text-[#10161D] rounded-xl border border-[#10161D]/10 flex items-center gap-1.5">
                  <CheckCircle2 class="w-3.5 h-3.5 text-[#3DDC84]" /> Cold-Pressed EVOO
                </span>
                <span class="p-3 bg-[#FAF8F5] text-[#10161D] rounded-xl border border-[#10161D]/10 flex items-center gap-1.5">
                  <CheckCircle2 class="w-3.5 h-3.5 text-[#3DDC84]" /> Pure Avocado Oil
                </span>
                <span class="p-3 bg-[#FAF8F5] text-[#10161D] rounded-xl border border-[#10161D]/10 flex items-center gap-1.5">
                  <CheckCircle2 class="w-3.5 h-3.5 text-[#3DDC84]" /> Grass-Fed Sirloin
                </span>
                <span class="p-3 bg-[#FAF8F5] text-[#10161D] rounded-xl border border-[#10161D]/10 flex items-center gap-1.5">
                  <CheckCircle2 class="w-3.5 h-3.5 text-[#3DDC84]" /> Scratch Dressings
                </span>
              </div>
            </div>

            <!-- What we strictly ban -->
            <div class="space-y-3 pt-3 border-t border-[#10161D]/10">
              <div class="text-xs font-mono font-bold uppercase text-red-500 flex items-center gap-1.5">
                <XCircle class="w-4 h-4 text-red-500" />
                <span>What We Strictly Ban:</span>
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs font-mono line-through opacity-70">
                <span class="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-1.5">
                  <XCircle class="w-3.5 h-3.5" /> Canola Oil
                </span>
                <span class="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-1.5">
                  <XCircle class="w-3.5 h-3.5" /> Soybean Oil
                </span>
                <span class="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-1.5">
                  <XCircle class="w-3.5 h-3.5" /> Corn Oil
                </span>
                <span class="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-1.5">
                  <XCircle class="w-3.5 h-3.5" /> Cottonseed Oil
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Midtown Location Heritage -->
      <section class="bg-white rounded-3xl p-8 sm:p-12 border border-[#10161D]/10 shadow-xl text-center max-w-4xl mx-auto space-y-6">
        <span class="inline-block px-3.5 py-1 bg-[#FAF8F5] text-[#896A39] font-mono text-xs font-bold uppercase rounded-full border border-[#10161D]/10">
          30 W 57th St • Central Park West, Midtown NYC
        </span>
        <h3 class="font-display font-black text-3xl sm:text-5xl uppercase text-[#10161D]">
          What We Stand For
        </h3>
        <p class="text-base sm:text-lg font-display font-bold text-[#896A39] uppercase tracking-wider">
          Seed oil free · Made from scratch · Fresh, fast and made for Midtown.
        </p>
        <p class="text-sm sm:text-base text-[#1B1812]/80 leading-relaxed font-sans max-w-2xl mx-auto">
          From chef-designed salads and grain bowls to artisan sandwiches, breakfast favorites and market-fresh plates, our menu is crafted daily to fuel New York City's fast-paced lifestyle. Quick lunch, delivery or a catered event: quality, convenience and warm hospitality under one roof. Proudly Woman-owned &amp; NYC rooted.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <router-link 
            to="/menu"
            class="px-8 py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-md flex items-center gap-2"
          >
            <span>Explore The Menu</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
          <a 
            href="mailto:info@metromarche.com"
            class="px-7 py-4 bg-white border border-[#10161D]/20 text-[#10161D] font-display text-xs uppercase tracking-widest font-bold rounded-full hover:border-[#10161D] transition-all flex items-center gap-2"
          >
            <Mail class="w-4 h-4 text-[#896A39]" />
            <span>info@metromarche.com</span>
          </a>
          <router-link 
            to="/contact"
            class="px-7 py-4 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all flex items-center gap-2"
          >
            <MapPin class="w-4 h-4 text-[#C9A55C]" />
            <span>Visit 30 W 57th St</span>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { 
  Award, 
  ShieldCheck, 
  Leaf, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  MapPin,
  Mail
} from 'lucide-vue-next';
</script>
