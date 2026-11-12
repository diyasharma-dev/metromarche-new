<template>
  <div>
    <!-- Hero Section -->
    <Hero @open-order="$emit('open-order')" />

    <!-- Stats Counter Bar -->
    <section class="bg-white border-y border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-serif font-extrabold text-[#896A39]">100%</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500">Seed Oil Free Kitchen</div>
          </div>
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-serif font-extrabold text-[#1B222C]">500k+</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500">Midtown Meals Served</div>
          </div>
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-serif font-extrabold text-[#896A39]">15 Min</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500">Average Express Pickup</div>
          </div>
          <div class="space-y-1">
            <div class="text-3xl sm:text-4xl font-serif font-extrabold text-[#1B222C]">30 W 57th</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500">Steps From Central Park</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 100% Seed Oil Free Philosophy -->
    <SeedOilSection />

    <!-- Interactive Market Table Plate Builder -->
    <MarketTableBuilder @open-order="$emit('open-order')" />

    <!-- Chef Curated Menu Highlights -->
    <MenuHighlights @open-order="$emit('open-order')" />

    <!-- Corporate Catering & Live Budget Estimator -->
    <CateringEstimator @open-catering="$emit('open-catering')" />

    <!-- Metro Rewards App Showcase -->
    <RewardsApp />

    <!-- Google Reviews & Social Proof -->
    <GoogleReviews />

    <!-- Location, Transit & Store Hours -->
    <LocationTransit @open-order="$emit('open-order')" />

    <!-- Newsletter Bar -->
    <NewsletterBar @subscribed="$emit('toast', 'Welcome to Metro Marché! Check your email for $5 promo code.')" />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import SeedOilSection from '../components/SeedOilSection.vue';
import MarketTableBuilder from '../components/MarketTableBuilder.vue';
import MenuHighlights from '../components/MenuHighlights.vue';
import CateringEstimator from '../components/CateringEstimator.vue';
import RewardsApp from '../components/RewardsApp.vue';
import GoogleReviews from '../components/GoogleReviews.vue';
import LocationTransit from '../components/LocationTransit.vue';
import NewsletterBar from '../components/NewsletterBar.vue';

defineEmits(['open-order', 'open-catering', 'toast']);
</script>
