<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#10161D]/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <Instagram class="w-3.5 h-3.5" />
            <span>Social Proof &amp; NYC Community</span>
          </div>
          <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
            @metromarche<span class="font-serif italic font-normal text-[#896A39] lowercase">nyc</span>
          </h2>
        </div>

        <a 
          href="https://www.instagram.com/metromarchenyc/" 
          target="_blank" 
          rel="noopener"
          class="self-start sm:self-auto px-7 py-3.5 bg-white border border-[#10161D]/20 text-[#10161D] hover:border-[#10161D] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all flex items-center gap-2 shadow-xs"
        >
          <Instagram class="w-4 h-4 text-[#896A39]" />
          <span>Follow On Instagram</span>
          <ExternalLink class="w-3.5 h-3.5" />
        </a>
      </div>

      <!-- Masonry / Responsive Photo Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <a 
          v-for="(post, idx) in igPosts" 
          :key="idx"
          :href="post.link" 
          target="_blank" 
          rel="noopener"
          class="group relative rounded-2xl overflow-hidden aspect-square bg-[#EFE4D0] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <img 
            :src="post.image" 
            :alt="post.caption" 
            class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-[#10161D]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-end text-white text-[11px] font-sans">
            <p class="line-clamp-3 leading-snug">{{ post.caption }}</p>
            <span class="font-mono text-[10px] uppercase tracking-wider text-[#C9A55C] mt-2 font-bold flex items-center gap-1">
              <span>View On Instagram</span>
              <ExternalLink class="w-3 h-3" />
            </span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Instagram, ExternalLink } from 'lucide-vue-next';

const igPosts = [
  { image: '/ig/01.webp', caption: 'Organic fruit smoothies blended fresh to order with zero artificial syrups.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/03.webp', caption: 'Fuel up with our custom hot market table plates and clean protein bowls.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/05.webp', caption: 'Executive breakfast catering delivered across Midtown Manhattan.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/06.webp', caption: 'Specialty espresso and fresh baked Parisian croissants on 57th St.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/07.webp', caption: 'Artisan melts, scratch-made soups, and salads prepared fresh daily.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/08.webp', caption: 'Market table bowls made your way with 100% Greek EVOO & avocado oil.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/09.webp', caption: 'Midtown lunch favorites steps from Central Park South and Carnegie Hall.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/10.webp', caption: 'Artisan chicken parm melt on warm griddled ciabatta with San Marzano marinara.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/11.webp', caption: 'Custom salads and grain bowls tailored to your exact wellness and macro goals.', link: 'https://www.instagram.com/metromarchenyc/' },
  { image: '/ig/12.webp', caption: 'The premier 100% seed oil-free destination on Billionaires Row. 30 W 57th St.', link: 'https://www.instagram.com/metromarchenyc/' },
];
</script>
