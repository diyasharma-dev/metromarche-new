<template>
  <section class="py-20 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F7F1E6] text-[#896A39] text-xs font-bold tracking-wider uppercase border border-[#896A39]/30">
          <Sparkles class="w-3.5 h-3.5" />
          <span>The Metro Marché Standard</span>
          <Sparkles class="w-3.5 h-3.5" />
        </div>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">
          Why 100% Seed Oil-Free Cooking Matters
        </h2>
        <p class="text-stone-600 text-base leading-relaxed">
          Most NYC eateries prepare their food using industrial seed oils (canola, soybean, corn) that oxidize under heat and cause midday brain fog and sluggish digestion. At Metro Marché, every single ingredient is cooked exclusively with wholesome, heart-healthy fats.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <!-- What We Cook With -->
        <div class="bg-white rounded-3xl p-8 shadow-soft border-2 border-[#896A39]/40 relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-[#896A39] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
            Our Kitchen Standard
          </div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center">
              <Check class="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <h3 class="text-xl font-bold font-serif text-[#1B222C]">What We Cook With</h3>
              <p class="text-xs text-stone-500">Uncompromised quality for peak vitality</p>
            </div>
          </div>
          
          <ul class="space-y-4 text-sm text-stone-700">
            <li class="flex items-start space-x-3">
              <CheckCircle2 class="w-5 h-5 text-[#896A39] shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-900">100% Cold-Pressed Extra Virgin Olive Oil:</strong>
                <span class="text-stone-600 block">Rich in polyphenols, oleic acid, and pure Mediterranean aroma.</span>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <CheckCircle2 class="w-5 h-5 text-[#896A39] shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-900">Pure High-Heat Avocado Oil:</strong>
                <span class="text-stone-600 block">Naturally pressed from ripe avocados for clean searing without trans fats.</span>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <CheckCircle2 class="w-5 h-5 text-[#896A39] shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-900">Grass-Fed Pasture Butter:</strong>
                <span class="text-stone-600 block">Nutrient-dense real butter for baked goods and artisanal breakfast toasts.</span>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <CheckCircle2 class="w-5 h-5 text-[#896A39] shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-900">Scratch-Made Dressings Daily:</strong>
                <span class="text-stone-600 block">Zero hidden fillers, preservatives, artificial colors or gums.</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- What We Strictly Ban -->
        <div class="bg-white rounded-3xl p-8 shadow-soft border border-stone-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-stone-400 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
            Strictly Forbidden
          </div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <X class="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <h3 class="text-xl font-bold font-serif text-stone-900">Zero Industrial Seed Oils</h3>
              <p class="text-xs text-stone-500">Banned 100% across all recipes</p>
            </div>
          </div>

          <ul class="space-y-4 text-sm text-stone-600">
            <li class="flex items-start space-x-3">
              <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-800">NO Canola Oil or Rapeseed Oil</strong>
                <span class="text-stone-500 block">Never used in any fryer, grill, or salad dressing.</span>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-800">NO Soybean or Corn Oil</strong>
                <span class="text-stone-500 block">Completely eliminated to prevent inflammatory afternoon crashes.</span>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-800">NO Sunflower, Safflower, or Cottonseed Oil</strong>
                <span class="text-stone-500 block">Industrial shortcuts that we strictly refuse to stock.</span>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong class="text-stone-800">NO Hydrogenated Fats or Palm Oil</strong>
                <span class="text-stone-500 block">Pure, wholesome food designed for health-conscious New Yorkers.</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles, Check, CheckCircle2, X, XCircle } from 'lucide-vue-next';
</script>
