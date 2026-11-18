<template>
  <section class="py-20 sm:py-28 bg-[#10161D] text-[#FAF8F5] border-b border-white/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-gradient-to-br from-[#161F28] to-[#10161D] rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden">
        
        <!-- Ambient Glow -->
        <div class="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#896A39]/20 blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <!-- Left Content -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest mb-3">
                <Award class="w-3.5 h-3.5" />
                <span>Metro Marché VIP Club</span>
              </div>
              <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.95]">
                It pays to be <br />
                <span class="font-serif italic font-normal text-[#C9A55C] lowercase">loyal</span>.
              </h2>
              <p class="text-base text-white/80 font-sans mt-4 max-w-xl leading-relaxed">
                Turn every visit into rewards with the Marché Loyalty App. From daily favorites to weekend splurges, it adds up fast. Skip the line and order ahead.
              </p>
            </div>

            <!-- Perks Badges -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div class="font-display font-black text-3xl text-[#C9A55C]">$5 Bonus</div>
                <div class="text-[11px] font-mono text-white/70 uppercase">Instant Welcome Gift</div>
              </div>
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div class="font-display font-black text-3xl text-white">10 Pts</div>
                <div class="text-[11px] font-mono text-white/70 uppercase">Per $1 Spent</div>
              </div>
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div class="font-display font-black text-3xl text-[#3DDC84]">15 Min</div>
                <div class="text-[11px] font-mono text-white/70 uppercase">Express Order Ahead</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="https://onelink.to/nebagp" 
                target="_blank" 
                rel="noopener"
                class="px-8 py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Download class="w-4 h-4" />
                <span>Download iOS / Android App</span>
              </a>
              <router-link 
                to="/rewards"
                class="px-7 py-4 bg-transparent border border-white/20 hover:border-white text-white font-display text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>Explore Loyalty Tiers</span>
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>

          <!-- Right Phone Image Showcase -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-[300px]">
              <img 
                src="/site/app-phone.webp" 
                alt="Metro Marché mobile app rewards interface"
                class="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
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
import { Award, Download, ArrowRight } from 'lucide-vue-next';
</script>
