<template>
  <div class="bg-[#FAF8F5] min-h-screen">
    <!-- Header Banner -->
    <section class="bg-[#10161D] text-white py-16 sm:py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img src="/assets/images/cafe-interior.jpg" alt="Metro Marché Midtown Café" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#896A39]/20 text-amber-200 border border-[#896A39]/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Our Midtown Story</span>
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white max-w-3xl mx-auto">
          Honest Food for the Pace of New York
        </h1>
        <p class="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
          Born out of a simple conviction: fast, convenient Midtown dining should nourish your body, sustain your mental focus, and never compromise on wholesome ingredients.
        </p>
      </div>
    </section>

    <!-- The 100% Seed Oil-Free Philosophy -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">
              The Seed Oil-Free Standard
            </span>
            <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">
              Why We Ban Industrial Seed Oils
            </h2>
            <p class="text-stone-600 text-base leading-relaxed">
              When we opened our doors at 30 W 57th Street, we made an unconditional commitment to our community: <strong class="text-stone-900">zero canola oil, zero soybean oil, zero corn or cottonseed oils</strong> in any recipe.
            </p>
            <p class="text-stone-600 text-sm leading-relaxed">
              Industrial seed oils oxidize at high temperatures and trigger systemic inflammation, leaving busy professionals feeling fatigued and foggy-headed by 2:00 PM. Instead, we cook exclusively with cold-pressed Extra Virgin Olive Oil and pure, high-heat Avocado Oil. You taste the clean, vibrant flavors of the food—not grease.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                <ShieldCheck class="w-8 h-8 text-[#896A39]" />
                <h4 class="font-bold text-stone-900 text-sm">100% Pure EVOO</h4>
                <p class="text-xs text-stone-500">Rich in polyphenols, antioxidants, and authentic Mediterranean aroma.</p>
              </div>
              <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                <Leaf class="w-8 h-8 text-[#896A39]" />
                <h4 class="font-bold text-stone-900 text-sm">Pure Avocado Oil</h4>
                <p class="text-xs text-stone-500">Naturally pressed from ripe avocados with a smoke point over 500°F.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img src="/assets/images/olive-oil.jpg" alt="Pure Extra Virgin Olive Oil" class="w-full h-[450px] object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span class="text-amber-300 text-xs font-bold uppercase tracking-wider block">Kitchen Transparency</span>
                  <p class="text-white text-sm font-medium mt-1">Every vinaigrette, marinade, and hot grill plate is crafted in-house without synthetic additives or artificial gums.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kitchen Values Grid -->
    <section class="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">Core Principles</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">How We Source &amp; Prepare</h2>
          <p class="text-stone-600 text-sm">Every decision in our kitchen is guided by quality, health, and speed.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center font-bold">
              <Wheat class="w-6 h-6 text-[#896A39]" />
            </div>
            <h3 class="text-xl font-serif font-bold text-[#1B222C]">Scratch-Made Daily</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              We arrive before dawn at 30 W 57th St to roast vegetables, slow-braise grass-fed meats, and whip dressings. Nothing comes pre-packaged from an industrial commissary.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center font-bold">
              <Beef class="w-6 h-6 text-[#896A39]" />
            </div>
            <h3 class="text-xl font-serif font-bold text-[#1B222C]">Ethical Proteins</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              We source pasture-raised eggs, antibiotic-free chicken breasts, wild-caught salmon, and grass-fed Angus beef. No growth hormones or chemical tenders.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center font-bold">
              <Recycle class="w-6 h-6 text-[#896A39]" />
            </div>
            <h3 class="text-xl font-serif font-bold text-[#1B222C]">Eco-Conscious Packaging</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              Our take-away bowls, catering boxes, and cutlery are 100% compostable and biodegradable, reducing environmental impact in our beloved city.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visit Us Teaser -->
    <section class="py-16 bg-[#10161D] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 class="text-3xl font-serif font-bold">Come Experience Metro Marché</h2>
        <p class="text-stone-300 max-w-xl mx-auto text-sm">
          Located at 30 W 57th St between 5th &amp; 6th Avenues, just two blocks south of Central Park.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <button @click="$emit('open-order')" class="px-8 py-3.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-sm shadow-xl transition">
            Order Pickup Online
          </button>
          <router-link to="/contact" class="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition">
            Get Directions &amp; Transit
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Sparkles, ShieldCheck, Leaf, Wheat, Beef, Recycle } from 'lucide-vue-next';

defineEmits(['open-order']);
</script>
