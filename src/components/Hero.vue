<template>
  <section class="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5] border-b border-[#1B1812]/10">
    <!-- Ambient Background Accents -->
    <div class="absolute inset-0 pointer-events-none opacity-40">
      <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#EFE4D0] blur-3xl"></div>
      <div class="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#E5D8C0] blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Trust Ribbon -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#1B1812]/10 shadow-xs text-xs font-mono font-medium text-[#1B1812]">
          <ShieldCheck class="w-4 h-4 text-[#1E3A2B]" />
          <span>100% Certified Seed Oil-Free</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#1B1812]/10 shadow-xs text-xs font-mono font-medium text-[#1B1812]">
          <Star class="w-4 h-4 text-[#C9A55C] fill-[#C9A55C]" />
          <span>4.9★ Google (520+ Midtown Diners)</span>
        </div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#1B1812]/10 shadow-xs text-xs font-mono font-medium text-[#1B1812]">
          <MapPin class="w-4 h-4 text-[#896A39]" />
          <span>30 W 57th St • Billionaires' Row NYC</span>
        </div>
      </div>

      <!-- Main Grid: Editorial Typography Left + Interactive Showcase Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Column: Prestigious Editorial Copy & CTAs -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div class="space-y-3">
            <span class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#896A39]">
              <Sparkles class="w-3.5 h-3.5" />
              Seed Oil Free Café &amp; Catering on 57th St
            </span>
            <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
              Midtown’s purest <br />
              <span class="font-serif italic font-normal text-[#896A39] lowercase">culinary</span> market.
            </h1>
          </div>

          <p class="text-base sm:text-lg text-[#1B1812]/80 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Chef-crafted salads, sandwiches and market-fresh plates for life on the go, right off Central Park West. Cooked from scratch, every day, in the heart of Midtown. 100% Seed oil free.
          </p>

          <!-- Interactive Time-of-Day Quick Switcher Bar -->
          <div class="bg-white p-2 rounded-2xl border border-[#1B1812]/10 shadow-sm max-w-xl mx-auto lg:mx-0">
            <div class="text-[11px] font-mono text-[#1B1812]/60 px-3 py-1 flex items-center justify-between border-b border-[#1B1812]/5 mb-1">
              <span class="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#896A39]">
                <Clock class="w-3.5 h-3.5" />
                Live Kitchen Highlights
              </span>
              <span>Select Time of Day</span>
            </div>
            <div class="grid grid-cols-3 gap-1">
              <button 
                v-for="period in mealPeriods" 
                :key="period.id"
                @click="activePeriod = period.id"
                class="px-2.5 py-2 rounded-xl text-xs font-display uppercase tracking-wider font-bold transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer"
                :class="activePeriod === period.id 
                  ? 'bg-[#1E3A2B] text-[#F4ECDD] shadow-sm' 
                  : 'bg-transparent text-[#1B1812]/75 hover:bg-[#FAF8F5] hover:text-[#1B1812]'"
              >
                <span>{{ period.title }}</span>
                <span class="text-[10px] font-mono opacity-70 lowercase font-normal">{{ period.hours }}</span>
              </button>
            </div>
          </div>

          <!-- CTAs -->
          <div class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button 
              type="button"
              @click="cartActions.openCart()"
              class="px-8 py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Order Online Now</span>
              <ArrowRight class="w-4 h-4" />
            </button>

            <router-link 
              to="/menu"
              class="px-7 py-4 bg-white border border-[#1B1812]/20 hover:border-[#10161D] text-[#10161D] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
            >
              View Full Menu
            </router-link>

            <router-link 
              to="/catering"
              class="px-7 py-4 bg-[#1E3A2B] hover:bg-[#13271C] text-[#C9A55C] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-md transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Users class="w-4 h-4" />
              <span>Corporate Catering</span>
            </router-link>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="pt-4 grid grid-cols-3 gap-4 border-t border-[#1B1812]/10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <div class="font-display font-black text-2xl sm:text-3xl text-[#10161D]">100%</div>
              <p class="text-[11px] font-mono text-[#1B1812]/60 uppercase tracking-wider mt-0.5">Seed Oil-Free</p>
            </div>
            <div>
              <div class="font-display font-black text-2xl sm:text-3xl text-[#896A39]">15 Min</div>
              <p class="text-[11px] font-mono text-[#1B1812]/60 uppercase tracking-wider mt-0.5">Express Pickup</p>
            </div>
            <div>
              <div class="font-display font-black text-2xl sm:text-3xl text-[#1E3A2B]">Daily</div>
              <p class="text-[11px] font-mono text-[#1B1812]/60 uppercase tracking-wider mt-0.5">Fresh From Scratch</p>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Featured Card with Dynamic Meal Period Image -->
        <div class="lg:col-span-5 relative">
          
          <div class="bg-white rounded-3xl p-5 sm:p-6 border border-[#1B1812]/10 shadow-2xl relative overflow-hidden group">
            
            <!-- Featured Dish Image -->
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFE4D0]">
              <img 
                :src="currentMealData.image" 
                :alt="currentMealData.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#10161D]/80 via-transparent to-transparent"></div>
              
              <!-- Floating Pill Badges -->
              <div class="absolute top-3 left-3 flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-full bg-[#10161D]/85 backdrop-blur-md text-[#C9A55C] text-[11px] font-mono font-bold uppercase tracking-wider">
                  {{ currentMealData.tag }}
                </span>
                <span class="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#10161D] text-[11px] font-mono font-semibold">
                  {{ currentMealData.diet }}
                </span>
              </div>

              <!-- Bottom Content Overlay on Image -->
              <div class="absolute bottom-3 left-3 right-3 text-white">
                <div class="flex items-center justify-between text-xs font-mono opacity-85">
                  <span>{{ currentMealData.periodLabel }}</span>
                  <span class="font-bold text-[#C9A55C]">{{ currentMealData.price }}</span>
                </div>
              </div>
            </div>

            <!-- Card Bottom Details -->
            <div class="mt-5 space-y-3">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h3 class="font-display font-bold text-xl uppercase tracking-tight text-[#10161D]">
                    {{ currentMealData.title }}
                  </h3>
                  <p class="text-xs text-[#1B1812]/70 font-sans mt-1 line-clamp-2 leading-relaxed">
                    {{ currentMealData.description }}
                  </p>
                </div>
              </div>

              <!-- Macros Pill Strip -->
              <div class="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-[#FAF8F5] border border-[#1B1812]/5 text-xs font-mono">
                <span class="text-[#10161D]/80"><strong>{{ currentMealData.calories }}</strong> kcal</span>
                <span class="text-[#1E3A2B] font-bold"><strong>{{ currentMealData.protein }}</strong> Protein</span>
                <span class="text-[#896A39]">Pure EVOO</span>
              </div>

              <!-- Quick Order Trigger -->
              <div class="flex items-center gap-3 pt-1">
                <button 
                  type="button"
                  @click="cartActions.addItem({
                    id: currentMealData.id,
                    name: currentMealData.title,
                    price: currentMealData.numericPrice,
                    image: currentMealData.image,
                    category: currentMealData.category
                  })"
                  class="flex-1 py-3 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-wider font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag class="w-4 h-4 text-[#C9A55C]" />
                  <span>Add To Order — {{ currentMealData.price }}</span>
                </button>
                <router-link 
                  to="/build"
                  class="px-4 py-3 bg-[#FAF8F5] hover:bg-[#EFE4D0] border border-[#1B1812]/15 rounded-xl text-xs font-display uppercase tracking-wider font-bold text-[#10161D] transition-colors"
                  title="Customize your bowl"
                >
                  Customize
                </router-link>
              </div>

            </div>

          </div>

          <!-- Ambient Floating Accent -->
          <div class="hidden sm:flex absolute -bottom-5 -left-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#1B1812]/10 shadow-xl items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[#1E3A2B] text-[#C9A55C] flex items-center justify-center font-bold">
              <Leaf class="w-4 h-4" />
            </div>
            <div>
              <div class="text-xs font-display font-bold uppercase text-[#10161D]">Greek EVOO &amp; Avocado</div>
              <div class="text-[10px] font-mono text-[#1B1812]/60">Zero canola or soybean oil</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { cartActions } from '../stores/cart.js';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Users, 
  ShoppingBag, 
  Leaf 
} from 'lucide-vue-next';

const activePeriod = ref('lunch');

const mealPeriods = [
  { id: 'breakfast', title: 'Breakfast', hours: '7 AM – 11 AM' },
  { id: 'lunch', title: 'Power Lunch', hours: '11 AM – 3 PM' },
  { id: 'market', title: 'Market Table', hours: '3 PM – 7 PM' },
];

const periodData = {
  breakfast: {
    id: 'hero-bf-1',
    periodLabel: 'Morning Fuel • 7 AM – 11 AM',
    title: 'Avocado Tartine & Pasture Egg',
    category: 'Breakfast',
    price: '$12.95',
    numericPrice: 12.95,
    tag: 'Breakfast Special',
    diet: 'Vegetarian • GF Avail',
    image: '/assets/images/breakfast-sandwich.jpg',
    description: 'Artisan sourdough with smashed Hass avocado, sunny pasture egg, microgreens, and cold-pressed EVOO drizzle.',
    calories: '420',
    protein: '18g'
  },
  lunch: {
    id: 'hero-lunch-1',
    periodLabel: 'Executive Lunch • 11 AM – 3 PM',
    title: 'Hudson Valley Steak Bowl',
    category: 'Market Bowls',
    price: '$18.50',
    numericPrice: 18.50,
    tag: 'Chef Signature',
    diet: '100% Seed Oil-Free • GF',
    image: '/assets/images/steak-salad.jpg',
    description: 'Grass-fed charred flank steak over warm Tuscan quinoa, roasted broccolini, sweet potato medallions, and chimichurri EVOO.',
    calories: '610',
    protein: '48g'
  },
  market: {
    id: 'hero-market-1',
    periodLabel: 'Market Dinner & Buffets • 3 PM – 7 PM',
    title: 'Crispy Salmon & Farro Plate',
    category: 'Market Plates',
    price: '$19.25',
    numericPrice: 19.25,
    tag: 'Evening Favorite',
    diet: 'High Omega-3 • Dairy-Free',
    image: '/assets/images/salmon-avocado.jpg',
    description: 'Wild-caught Pacific salmon seared in avocado oil, roasted heirloom squash, herbed farro, and Meyer lemon glaze.',
    calories: '580',
    protein: '42g'
  }
};

const currentMealData = computed(() => periodData[activePeriod.value]);
</script>
