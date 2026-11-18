<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#10161D]/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Score & Headline Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
        <!-- Big Rating Badge (Left) -->
        <div class="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#10161D]/10 shadow-lg text-center space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#896A39] font-bold">Google Community Rating</span>
          <div class="font-display font-black text-6xl sm:text-7xl text-[#10161D] leading-none">
            4.9
          </div>
          <div class="flex items-center justify-center gap-1 text-[#C9A55C]">
            <Star v-for="i in 5" :key="i" class="w-5 h-5 fill-[#C9A55C] text-[#C9A55C]" />
          </div>
          <p class="font-mono text-xs uppercase tracking-wider text-[#10161D]/70 font-semibold">
            284 Google Reviews
          </p>
          <div class="pt-3 border-t border-[#10161D]/10 flex items-center justify-center gap-2 text-xs font-mono text-[#1E3A2B] font-bold">
            <CheckCircle2 class="w-4 h-4 text-[#3DDC84]" />
            <span>Summary for Metro Marché, 30 W 57th St</span>
          </div>
        </div>

        <!-- Right Headline & Tags -->
        <div class="lg:col-span-8 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <Star class="w-3.5 h-3.5 fill-[#C9A55C]" />
            <span>Midtown Approved</span>
          </div>
          <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
            Loved by Midtown <br />
            <span class="font-serif italic font-normal text-[#896A39] lowercase">professionals</span> &amp; foodies.
          </h2>
          <p class="text-base text-[#1B1812]/80 leading-relaxed max-w-2xl font-sans">
            Guests call out the fresh, healthy food, the great coffee, the customizable bowls, the generous portions for the price, and a friendly, attentive team.
          </p>

          <!-- Pill Tags -->
          <div class="flex flex-wrap gap-2 pt-2 text-xs font-mono">
            <span class="px-4 py-1.5 bg-white text-[#10161D] border border-[#10161D]/15 rounded-full font-semibold shadow-xs flex items-center gap-1.5">
              <ShieldCheck class="w-3.5 h-3.5 text-[#1E3A2B]" /> 100% Seed Oil-Free
            </span>
            <span class="px-4 py-1.5 bg-white text-[#10161D] border border-[#10161D]/15 rounded-full font-semibold shadow-xs flex items-center gap-1.5">
              <Sparkles class="w-3.5 h-3.5 text-[#896A39]" /> Executive Catering
            </span>
            <span class="px-4 py-1.5 bg-white text-[#10161D] border border-[#10161D]/15 rounded-full font-semibold shadow-xs flex items-center gap-1.5">
              <Clock class="w-3.5 h-3.5 text-[#1E3A2B]" /> 15 Min Express Pickup
            </span>
          </div>
        </div>
      </div>

      <!-- Real Diner Review Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(rev, idx) in reviews" 
          :key="idx"
          class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="flex items-center gap-1 text-[#C9A55C]">
              <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-[#C9A55C] text-[#C9A55C]" />
            </div>
            <p class="text-sm text-[#1B1812]/85 italic font-serif leading-relaxed">
              "{{ rev.quote }}"
            </p>
          </div>
          <div class="pt-4 border-t border-[#10161D]/10 flex items-center justify-between text-xs font-mono">
            <span class="font-bold text-[#10161D]">{{ rev.author }}</span>
            <span class="text-[#896A39] font-semibold">{{ rev.source }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Star, ShieldCheck, CheckCircle2, Sparkles, Clock } from 'lucide-vue-next';

const reviews = [
  {
    author: 'Michael S., Midtown Legal Partner',
    source: 'Verified Google Review',
    quote: 'The fact that they use 100% extra virgin olive oil and no cheap seed oils makes all the difference. The steak bowl is clean, deeply flavorful, and doesn’t leave you feeling sluggish during trial prep.',
  },
  {
    author: 'Sarah K., 57th St Executive Assistant',
    source: 'Verified Google Review',
    quote: 'Our team orders catering from Metro Marché twice a month. Boxed lunches arrive punctually, labeled clearly with dietary specs, and the hand-rolled croissants are absolute Parisian perfection.',
  },
  {
    author: 'David L., Central Park West Resident',
    source: 'Verified Google Review',
    quote: 'Best chicken parm melt and cold-pressed juices on Billionaires Row. Generous portions, scratch dressings, and the friendliest culinary team in Midtown Manhattan.',
  },
];
</script>
