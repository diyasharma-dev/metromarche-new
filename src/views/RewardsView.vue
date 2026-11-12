<template>
  <div class="bg-[#FAF8F5] min-h-screen">
    <!-- Rewards Hero -->
    <section class="bg-[#10161D] text-white py-16 sm:py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <span class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#896A39]/20 text-amber-200 border border-[#896A39]/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles class="w-3.5 h-3.5" />
              <span>Metro Marché Rewards</span>
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Eat Wholesome. <br>
              <span class="text-gold-gradient">Earn Delicious Rewards.</span>
            </h1>
            <p class="text-stone-300 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              Download the official Metro Marché App to earn 10 points for every dollar spent, skip long Midtown lunch lines with express counter pickup, and unlock a $5 welcome bonus immediately.
            </p>
            <div class="pt-4 flex flex-wrap gap-4">
              <a href="https://onelink.to/nebagp" target="_blank" rel="noopener noreferrer"
                 class="px-8 py-3.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-sm shadow-xl transition flex items-center space-x-2">
                <Smartphone class="w-4 h-4 text-amber-200" />
                <span>Download the App (iOS &amp; Android)</span>
              </a>
              <button @click="$emit('open-order')"
                      class="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition">
                Order Online Now
              </button>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center">
            <div class="relative max-w-xs sm:max-w-sm">
              <img src="/assets/images/app-phone.webp" alt="Metro Marché Rewards App" class="w-full h-auto drop-shadow-2xl" />
              <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 flex items-center space-x-3 text-stone-900">
                <div class="w-10 h-10 rounded-xl bg-[#F7F1E6] text-[#896A39] flex items-center justify-center font-bold">
                  <Gift class="w-5 h-5 text-[#896A39]" />
                </div>
                <div>
                  <div class="text-xs font-bold">$5 First-Order Credit</div>
                  <div class="text-[11px] text-stone-500">Credited automatically upon sign-up</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- How It Works (3 Steps) -->
    <section class="py-16 bg-white border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-serif font-bold text-[#1B222C]">How The Program Works</h2>
          <p class="text-stone-500 text-sm mt-1">Earning rewards is seamless and instantaneous.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 text-center space-y-3">
            <span class="w-12 h-12 mx-auto rounded-full bg-[#896A39] text-white font-bold text-lg flex items-center justify-center">1</span>
            <h3 class="font-bold text-lg text-[#1B222C]">Download &amp; Join</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Install the app and create your account. Receive an instant $5 credit toward your first order.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 text-center space-y-3">
            <span class="w-12 h-12 mx-auto rounded-full bg-[#896A39] text-white font-bold text-lg flex items-center justify-center">2</span>
            <h3 class="font-bold text-lg text-[#1B222C]">Order Ahead &amp; Earn</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Earn 10 points for every $1 spent in-store or online. Pick up your orders directly from the express shelf.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 text-center space-y-3">
            <span class="w-12 h-12 mx-auto rounded-full bg-[#896A39] text-white font-bold text-lg flex items-center justify-center">3</span>
            <h3 class="font-bold text-lg text-[#1B222C]">Redeem Free Food</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Cash in points for artisanal coffees, buttery pastries, signature grain bowls, and hot market plates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Point Redemption Tiers -->
    <section class="py-20 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">Points Menu</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">Redeemable Tiers</h2>
          <p class="text-stone-600 text-sm">Every point gets you closer to delicious meals cooked 100% seed-oil free.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3 hover:border-[#896A39] transition">
            <div class="flex items-center justify-between">
              <span class="text-2xl font-serif font-bold text-[#896A39]">100 Pts</span>
              <Coffee class="w-6 h-6 text-[#896A39]" />
            </div>
            <h4 class="font-bold text-base text-[#1B222C]">Artisan Coffee / Pastry</h4>
            <p class="text-xs text-stone-500 leading-relaxed">Freshly brewed drip coffee, espresso, or Parisian butter croissant.</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3 hover:border-[#896A39] transition">
            <div class="flex items-center justify-between">
              <span class="text-2xl font-serif font-bold text-[#896A39]">250 Pts</span>
              <CupSoda class="w-6 h-6 text-[#896A39]" />
            </div>
            <h4 class="font-bold text-base text-[#1B222C]">Specialty Sip / Juice</h4>
            <p class="text-xs text-stone-500 leading-relaxed">Pistachio iced latte, matcha latte, or organic cold-pressed wellness juice.</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3 hover:border-[#896A39] transition">
            <div class="flex items-center justify-between">
              <span class="text-2xl font-serif font-bold text-[#896A39]">500 Pts</span>
              <Salad class="w-6 h-6 text-[#896A39]" />
            </div>
            <h4 class="font-bold text-base text-[#1B222C]">Salad or Melt Bowl</h4>
            <p class="text-xs text-stone-500 leading-relaxed">Any signature salad, warm grain bowl, or artisan sourdough club sandwich.</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3 hover:border-[#896A39] transition">
            <div class="flex items-center justify-between">
              <span class="text-2xl font-serif font-bold text-[#896A39]">750 Pts</span>
              <UtensilsCrossed class="w-6 h-6 text-[#896A39]" />
            </div>
            <h4 class="font-bold text-base text-[#1B222C]">Hot Market Plate</h4>
            <p class="text-xs text-stone-500 leading-relaxed">Full market plate: 1 prime hot protein, 2 roasted seasonal sides, and grain base.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Download Direct Link -->
    <section class="py-16 bg-[#896A39] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 class="text-3xl font-serif font-bold">Ready to Start Earning?</h2>
        <p class="text-amber-100 max-w-xl mx-auto text-sm">
          Available for both iPhone and Android. Download today and claim your first $5 sign-up credit.
        </p>
        <div class="pt-2 flex justify-center">
          <a href="https://onelink.to/nebagp" target="_blank" rel="noopener noreferrer"
             class="px-8 py-3.5 rounded-full bg-[#1B222C] hover:bg-[#10161D] text-white font-bold text-sm shadow-lg transition flex items-center gap-2">
            <Smartphone class="w-4 h-4 text-amber-200" />
            <span>Get the Metro Marché App Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Sparkles, Smartphone, Gift, Coffee, CupSoda, Salad, UtensilsCrossed } from 'lucide-vue-next';

defineEmits(['open-order']);
</script>
