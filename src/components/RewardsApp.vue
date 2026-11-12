<template>
  <section class="py-20 bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Phone Preview Mockup -->
        <div class="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <div class="relative max-w-sm">
            <img src="/assets/images/app-phone.webp" alt="Metro Marché App on Phone" class="w-full h-auto drop-shadow-2xl" />
            <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center font-bold">
                <Gift class="w-5 h-5 text-[#896A39]" />
              </div>
              <div>
                <div class="text-xs font-bold text-stone-900">$5 Sign-Up Credit</div>
                <div class="text-[11px] text-stone-500">Instant credit on your first order</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Perks & CTAs -->
        <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">
            Loyalty Pays
          </span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">
            Download The Metro Marché App
          </h2>
          <p class="text-stone-600 text-base leading-relaxed">
            Turn every visit into rewards you’ll actually use. From your morning espresso and artisan breakfast wraps to quick grab-and-go lunch in Midtown, the Metro Marché Rewards App lets you order ahead, bypass queues, and collect 10 points for every dollar spent.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1.5">
              <div class="flex items-center gap-1.5 text-[#896A39] font-bold text-lg">
                <Coins class="w-5 h-5" />
                <span>10 Pts / $1</span>
              </div>
              <h4 class="font-bold text-stone-900 text-sm">Earn Points Fast</h4>
              <p class="text-xs text-stone-500">Redeem for market bowls, signature salads &amp; specialty lattes.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1.5">
              <div class="flex items-center gap-1.5 text-amber-700 font-bold text-lg">
                <Zap class="w-5 h-5" />
                <span>Skip the Line</span>
              </div>
              <h4 class="font-bold text-stone-900 text-sm">Express Pickup</h4>
              <p class="text-xs text-stone-500">Order ahead and grab directly from our dedicated express pickup shelf.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1.5">
              <div class="flex items-center gap-1.5 text-[#896A39] font-bold text-lg">
                <Gift class="w-5 h-5" />
                <span>Birthday Gift</span>
              </div>
              <h4 class="font-bold text-stone-900 text-sm">Free Meal On Us</h4>
              <p class="text-xs text-stone-500">Celebrate your birthday with a complimentary entree plate or salad bowl.</p>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a href="https://onelink.to/nebagp" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 rounded-full bg-[#1B222C] hover:bg-[#896A39] text-white font-bold text-sm shadow-lg transition flex items-center space-x-2">
              <Smartphone class="w-4 h-4 text-amber-200" />
              <span>Download on iOS &amp; Android</span>
            </a>
            <router-link to="/rewards" class="text-sm font-bold text-[#896A39] hover:underline flex items-center space-x-1">
              <span>View Rewards Details</span>
              <ArrowRight class="w-4 h-4 ml-1" />
            </router-link>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Gift, Coins, Zap, Smartphone, ArrowRight } from 'lucide-vue-next';
</script>
