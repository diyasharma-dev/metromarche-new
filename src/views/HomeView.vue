<template>
  <div class="space-y-0 pb-16 md:pb-0">
    <!-- Hero 3 Elevated -->
    <Hero />

    <!-- Ticker 1: Primary Tomato -->
    <MarqueeTicker />

    <!-- 100% Seed Oil Free Philosophy (Scalloped Dark Green) -->
    <SeedOilSection />

    <!-- Welcome Story & Midtown Fuel -->
    <WelcomeStory />

    <!-- Signature Plates (Perforated Deli Tickets) -->
    <SignaturePlates />

    <!-- Ticker 2: Antique Gold -->
    <MarqueeTicker 
      variant="gold"
      :items="[
        'Seed Oil Free',
        'Made From Scratch',
        'Woman-Owned NYC',
        'We Do Not Chop Salads',
        'Your Way, Everyday',
        'Fresh, Fast & Made for Midtown',
        '30 W 57th St',
        'Right Off Central Park West'
      ]"
    />

    <!-- Bento Grid Category Moments -->
    <BentoCategories />

    <!-- 3-Step Custom Build Bowl Section -->
    <BuildSection />

    <!-- Corporate Catering Showcase with Live Budget Estimator -->
    <CateringShowcase />

    <!-- Rewards Club Showcase -->
    <RewardsClub />

    <!-- Google Reviews & Verified Diner Proof -->
    <GoogleReviewsSection />

    <!-- Real Instagram Community Grid -->
    <InstagramGrid />

    <!-- Storefront, Hours & Midtown Subway Map -->
    <StorefrontSection />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import MarqueeTicker from '../components/MarqueeTicker.vue';
import SeedOilSection from '../components/SeedOilSection.vue';
import WelcomeStory from '../components/WelcomeStory.vue';
import SignaturePlates from '../components/SignaturePlates.vue';
import BentoCategories from '../components/BentoCategories.vue';
import BuildSection from '../components/BuildSection.vue';
import CateringShowcase from '../components/CateringShowcase.vue';
import RewardsClub from '../components/RewardsClub.vue';
import GoogleReviewsSection from '../components/GoogleReviewsSection.vue';
import InstagramGrid from '../components/InstagramGrid.vue';
import StorefrontSection from '../components/StorefrontSection.vue';
</script>
