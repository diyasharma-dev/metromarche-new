<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#10161D]/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header with Category Tabs -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Chef-Curated Midtown Highlights</span>
          </div>
          <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
            Signature <span class="font-serif italic font-normal text-[#896A39] lowercase">plates</span> &amp; melts.
          </h2>
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-display uppercase tracking-wider font-bold transition-all cursor-pointer"
            :class="activeCategory === cat.id 
              ? 'bg-[#10161D] text-[#FAF8F5] shadow-md' 
              : 'bg-white text-[#10161D] border border-[#10161D]/15 hover:border-[#10161D]'"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Dishes Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <article 
          v-for="dish in filteredDishes" 
          :key="dish.id"
          class="bg-white rounded-3xl p-5 border border-[#10161D]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Dish Image Header -->
            <button 
              type="button" 
              @click="cartActions.openDishModal(dish)"
              class="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF8F5] relative group cursor-pointer block"
              :aria-label="dish.name + ', view details'"
            >
              <img 
                :src="dish.image" 
                :alt="dish.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span class="absolute top-2.5 left-2.5 bg-[#10161D]/80 backdrop-blur-md text-[#C9A55C] px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold">
                {{ dish.dietary }}
              </span>
              <span class="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-md text-[#10161D] px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                ${{ dish.price.toFixed(2) }}
              </span>
            </button>

            <!-- Dish Title & Description -->
            <div class="mt-4 space-y-2">
              <h3 class="font-display font-bold text-lg uppercase tracking-tight text-[#10161D] group-hover:text-[#896A39] transition-colors">
                <button 
                  type="button" 
                  @click="cartActions.openDishModal(dish)"
                  class="text-left cursor-pointer"
                >
                  {{ dish.name }}
                </button>
              </h3>
              <p class="text-xs text-[#1B1812]/70 font-sans leading-relaxed line-clamp-2">
                {{ dish.description }}
              </p>
            </div>
          </div>

          <!-- Card Bottom Action -->
          <div class="mt-4 pt-3 border-t border-[#10161D]/10 flex items-center justify-between gap-2">
            <span class="text-xs font-mono font-bold text-[#10161D]">${{ dish.price.toFixed(2) }}</span>
            <button 
              type="button"
              @click="cartActions.addItem({
                id: dish.id,
                name: dish.name,
                price: dish.price,
                image: dish.image,
                category: dish.category
              })"
              class="px-3.5 py-2 bg-[#896A39] hover:bg-[#73572D] text-white text-[11px] font-display uppercase tracking-wider font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag class="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </article>
      </div>

      <!-- View Full Menu Link -->
      <div class="mt-12 text-center">
        <router-link 
          to="/menu"
          class="inline-flex items-center gap-2 px-8 py-4 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <span>Explore All 112+ Menu Items</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { cartActions } from '../stores/cart.js';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-vue-next';

const activeCategory = ref('all');

const categories = [
  { id: 'all', label: 'All Highlights' },
  { id: 'bowls', label: 'Market Bowls' },
  { id: 'melts', label: 'Artisan Melts' },
  { id: 'juices', label: 'Juices & Coffee' },
  { id: 'bakery', label: 'Viennoiserie' }
];

const dishes = [
  {
    id: 'dish-1',
    category: 'bowls',
    name: 'Hudson Valley Steak Bowl',
    price: 18.50,
    image: '/assets/images/steak-salad.jpg',
    dietary: '100% Seed Oil-Free',
    description: 'Charred grass-fed flank steak, warm Tuscan quinoa, roasted broccolini, sweet potato medallions, chimichurri EVOO.'
  },
  {
    id: 'dish-2',
    category: 'bowls',
    name: 'Crispy Salmon Farro Bowl',
    price: 19.25,
    image: '/assets/images/salmon-avocado.jpg',
    dietary: 'High Omega-3',
    description: 'Pan-seared wild salmon in pure avocado oil, herbed farro, roasted heirloom squash, Persian cucumber slaw, Meyer lemon drizzle.'
  },
  {
    id: 'dish-3',
    category: 'melts',
    name: 'Artisan Chicken Parm Melt',
    price: 14.50,
    image: '/assets/images/artisan-sandwich.jpg',
    dietary: 'Chef Favorite',
    description: 'Crispy pasture-raised chicken cutlet, fresh buffalo mozzarella, aged parmesan, San Marzano marinara on warm griddled ciabatta.'
  },
  {
    id: 'dish-4',
    category: 'bowls',
    name: 'Warm Tuscan Quinoa Grain Bowl',
    price: 15.95,
    image: '/assets/images/grain-bowl.jpg',
    dietary: 'Vegetarian • GF',
    description: 'Organic red quinoa, charred broccolini, roasted chickpeas, Hass avocado, heirloom tomatoes, green goddess emulsion.'
  },
  {
    id: 'dish-5',
    category: 'melts',
    name: 'Avocado & Pasture Egg Melt',
    price: 12.95,
    image: '/assets/images/breakfast-sandwich.jpg',
    dietary: 'Morning Specialty',
    description: 'Smashed Hass avocado, sunny pasture egg, microgreens, melted Gruyère cheese on griddled sourdough with Greek EVOO.'
  },
  {
    id: 'dish-6',
    category: 'juices',
    name: 'Cold-Pressed Green Elixir',
    price: 10.50,
    image: '/assets/images/cold-pressed-juice.jpg',
    dietary: 'Raw Cold-Pressed',
    description: 'Organic Tuscan kale, baby spinach, crisp Granny Smith apple, cucumber, lemon, and fresh crushed ginger root.'
  },
  {
    id: 'dish-7',
    category: 'bakery',
    name: 'French Almond Croissant',
    price: 5.95,
    image: '/assets/images/croissant-bakery.jpg',
    dietary: 'Parisian Bakery',
    description: 'Flaky artisan all-butter French croissant filled with velvety almond cream and topped with toasted sliced almonds.'
  },
  {
    id: 'dish-8',
    category: 'juices',
    name: 'Specialty Cold Brew Coffee',
    price: 6.25,
    image: '/assets/images/specialty-coffee.jpg',
    dietary: 'Direct Trade',
    description: 'Single-origin 18-hour cold brew over artisanal ice with choice of organic whole milk or house almond milk.'
  }
];

const filteredDishes = computed(() => {
  if (activeCategory.value === 'all') return dishes;
  return dishes.filter(d => d.category === activeCategory.value);
});
</script>
