<template>
  <section class="py-20 bg-white border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">
            Midtown's Favorite
          </span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C] mt-2">
            Loved by Midtown Diners &amp; Offices
          </h2>
          <p class="text-stone-500 text-sm mt-1">Real feedback from daily regulars at 30 W 57th Street.</p>
        </div>

        <div class="shrink-0 flex items-center space-x-4">
          <img src="/assets/images/google-review.webp" alt="Google 5 Star Reviews" class="h-12 w-auto object-contain" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 shadow-sm space-y-4">
          <div class="flex space-x-1">
            <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <p class="text-stone-700 text-sm italic leading-relaxed">
            "Finally, a place in Midtown that doesn't soak their food in canola oil! The lemon herb chicken market plate is incredible, and I leave feeling energetic rather than needing a nap at my desk."
          </p>
          <div class="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">Sarah M.</span>
            <span class="text-stone-500">Corporate Finance, 57th St</span>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 shadow-sm space-y-4">
          <div class="flex space-x-1">
            <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <p class="text-stone-700 text-sm italic leading-relaxed">
            "We ordered catering for a 45-person client luncheon. Every single box was hot, fresh, beautifully presented, and clearly labeled for dietary needs. Metro Marché is now our official office caterer."
          </p>
          <div class="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">David K.</span>
            <span class="text-stone-500">Operations Director, Midtown West</span>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 shadow-sm space-y-4">
          <div class="flex space-x-1">
            <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <p class="text-stone-700 text-sm italic leading-relaxed">
            "Best morning stop before walking into Central Park. The breakfast sandwich on brioche with pasture eggs and their iced pistachio latte are unmatched. Fast, friendly service every single time."
          </p>
          <div class="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
            <span class="font-bold text-stone-900">Elena R.</span>
            <span class="text-stone-500">Local Midtown Resident</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next';
</script>
