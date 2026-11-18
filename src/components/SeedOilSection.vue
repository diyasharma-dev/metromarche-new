<template>
  <section class="relative bg-[#10161D] text-[#FAF8F5] py-20 sm:py-28 overflow-hidden border-b border-white/10">
    <!-- Subtle Background Lighting -->
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#896A39] blur-[140px]"></div>
      <div class="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#1E3A2B] blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
          <ShieldCheck class="w-4 h-4" />
          <span>The Metro Marché Kitchen Standard</span>
        </div>
        <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.95]">
          100% Certified <br />
          <span class="font-serif italic font-normal text-[#C9A55C] lowercase">seed oil-free</span> purity.
        </h2>
        <p class="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
          Most NYC kitchens cut corners with cheap industrial seed oils. We cook exclusively with cold-pressed Greek Extra Virgin Olive Oil and pure Avocado Oil. Real energy without the afternoon crash.
        </p>
      </div>

      <!-- Main Interactive Comparison Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
        
        <!-- Left: What We Cook With (The Gold Standard) -->
        <div class="lg:col-span-6 bg-[#161F28] rounded-3xl p-6 sm:p-8 border-2 border-[#896A39]/60 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div class="space-y-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-[#C9A55C] font-bold">The Pure Standard</span>
                <h3 class="font-display font-bold text-2xl uppercase tracking-tight text-white mt-1">What We Cook With</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold border border-[#C9A55C]/30">
                100% Clean Fats
              </span>
            </div>

            <ul class="space-y-4 font-sans">
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#3DDC84] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Cold-Pressed Greek Extra Virgin Olive Oil</h4>
                  <p class="text-xs text-white/70 mt-0.5">High-polyphenol estate olive oil used for all scratch-made vinaigrettes, sautéed market vegetables, and hot pan roasts.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#3DDC84] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">100% Pure Non-GMO Avocado Oil</h4>
                  <p class="text-xs text-white/70 mt-0.5">High-heat searing for grass-fed sirloin, crispy skin salmon, and roasted pasture poultry with zero oxidation.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#3DDC84] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Grass-Fed Sirloin &amp; Antibiotic-Free Poultry</h4>
                  <p class="text-xs text-white/70 mt-0.5">Sourced ethically from regional pasture farms, hand-trimmed and seasoned with fresh herbs and sea salt.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#3DDC84] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Scratch Dressings &amp; Sauces Emulsified Daily</h4>
                  <p class="text-xs text-white/70 mt-0.5">Never bottled. No commercial gums, artificial emulsifiers, high-fructose syrups, or synthetic additives.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span class="text-[#3DDC84] font-semibold flex items-center gap-1.5">
              <Sparkles class="w-3.5 h-3.5" /> 112+ Items Certified
            </span>
            <span class="text-white/60">Zero Trans Fats</span>
          </div>
        </div>

        <!-- Right: What We Strictly Ban -->
        <div class="lg:col-span-6 bg-[#161F28]/60 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg relative flex flex-col justify-between">
          <div class="space-y-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Never in Our Kitchen</span>
                <h3 class="font-display font-bold text-2xl uppercase tracking-tight text-white mt-1">What We Strictly Ban</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-red-950/60 text-red-400 text-xs font-mono font-bold border border-red-500/30">
                0% Tolerance
              </span>
            </div>

            <ul class="space-y-4 font-sans">
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Canola &amp; Rapeseed Oil</h4>
                  <p class="text-xs text-white/60 mt-0.5">Heavily chemically refined with hexane solvent, high inflammatory linoleic content.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Soybean &amp; Corn Oil</h4>
                  <p class="text-xs text-white/60 mt-0.5">The primary culprit behind post-lunch fatigue, sluggish focus, and systemic cellular inflammation.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Cottonseed, Sunflower &amp; Safflower Oils</h4>
                  <p class="text-xs text-white/60 mt-0.5">High Omega-6 heavy industrial oils commonly used by commercial caterers and fast-casual chains.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-sm font-bold text-white">Hydrogenated Fats, Preservatives &amp; MSG</h4>
                  <p class="text-xs text-white/60 mt-0.5">No artificial shelf-life extenders, synthetic flavor enhancers, or hidden chemicals.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span class="text-red-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck class="w-3.5 h-3.5" /> 100% Guaranteed Ban
            </span>
            <span class="text-white/60">Midtown’s Cleanest Fuel</span>
          </div>
        </div>

      </div>

      <!-- 3 Key Benefits for Midtown Diners -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div class="bg-[#161F28] p-6 rounded-2xl border border-white/10 space-y-2">
          <div class="w-10 h-10 rounded-xl bg-[#896A39]/20 text-[#C9A55C] flex items-center justify-center font-bold">
            <Zap class="w-5 h-5" />
          </div>
          <h4 class="font-display font-bold text-lg uppercase tracking-tight text-white">Sustained Executive Focus</h4>
          <p class="text-xs text-white/70 leading-relaxed font-sans">
            Clean monounsaturated fats digest smoothly, providing steady cognitive energy for long afternoon meetings without blood sugar crashes.
          </p>
        </div>

        <div class="bg-[#161F28] p-6 rounded-2xl border border-white/10 space-y-2">
          <div class="w-10 h-10 rounded-xl bg-[#1E3A2B] text-[#3DDC84] flex items-center justify-center font-bold">
            <Heart class="w-5 h-5" />
          </div>
          <h4 class="font-display font-bold text-lg uppercase tracking-tight text-white">Cardiovascular &amp; Gut Health</h4>
          <p class="text-xs text-white/70 leading-relaxed font-sans">
            Polyphenol-rich extra virgin olive oil supports healthy arterial elasticity and maintains comfortable digestion all day.
          </p>
        </div>

        <div class="bg-[#161F28] p-6 rounded-2xl border border-white/10 space-y-2">
          <div class="w-10 h-10 rounded-xl bg-[#896A39]/20 text-[#C9A55C] flex items-center justify-center font-bold">
            <Sparkles class="w-5 h-5" />
          </div>
          <h4 class="font-display font-bold text-lg uppercase tracking-tight text-white">Pure Natural Flavor</h4>
          <p class="text-xs text-white/70 leading-relaxed font-sans">
            Real food seasoned with fresh herbs, garlic, citrus, and unrefined olive oil tastes incomparably brighter and fresher.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Heart, 
  Sparkles 
} from 'lucide-vue-next';
</script>
