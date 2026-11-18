<template>
  <div class="bg-[#F4ECDD] min-h-screen py-8 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-block px-3.5 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
          100% Seed Oil Free Kitchen
        </span>
        <h1 class="font-display font-black text-5xl sm:text-7xl uppercase tracking-tight text-[#1B1812] leading-[0.9]">
          The artisan <span class="font-serif italic font-normal text-[#DF4A2A]">menu</span>
        </h1>
        <p class="text-sm sm:text-base text-[#1B1812]/80 leading-relaxed max-w-2xl mx-auto font-sans">
          Cooked exclusively with cold-pressed Extra Virgin Olive Oil and pure Avocado Oil. 112+ items prepared daily from scratch at 30 W 57th St, Midtown NYC.
        </p>

        <!-- Live Search Bar -->
        <div class="pt-2 max-w-xl mx-auto">
          <div class="relative">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search dishes (e.g. shrimp, steak, salmon, matcha, gluten-free)..."
              class="w-full pl-6 pr-24 py-3.5 rounded-full bg-white text-[#1B1812] text-xs font-mono border-2 border-[#1B1812] focus:outline-none focus:ring-2 focus:ring-[#DF4A2A] shadow-md"
            />
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''" 
              class="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-[#DF4A2A] hover:underline"
            >
              Clear ×
            </button>
          </div>
        </div>
      </div>

      <!-- Category Filter Pills Bar (Sticky) -->
      <div class="sticky top-20 z-30 bg-[#F4ECDD]/95 backdrop-blur-md py-3 border-y border-[#1B1812]/10 space-y-3">
        <!-- Categories -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="whitespace-nowrap px-4 py-2 rounded-full text-xs font-display uppercase tracking-wider font-bold transition shadow-xs"
            :class="activeCategory === cat.id ? 'bg-[#1B1812] text-[#F4ECDD] shadow-md' : 'bg-white text-[#1B1812] border border-[#1B1812]/15 hover:border-[#1B1812]'"
          >
            {{ cat.name }} ({{ countCategory(cat.id) }})
          </button>
        </div>

        <!-- Dietary Checkboxes -->
        <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span class="text-[#1B1812]/60 font-bold uppercase text-[11px]">Dietary:</span>
          <button 
            v-for="diet in dietOptions" 
            :key="diet.key"
            @click="toggleDiet(diet.key)"
            class="px-3 py-1 rounded-full border text-xs font-semibold transition"
            :class="activeDiets.includes(diet.key) ? 'bg-[#1E3A2B] text-[#C9A55C] border-[#1E3A2B]' : 'bg-white border-[#1B1812]/15 text-[#1B1812] hover:border-[#1B1812]'"
          >
            {{ diet.label }}
          </button>
          <button 
            v-if="activeDiets.length > 0 || searchQuery || activeCategory !== 'all'"
            @click="resetFilters" 
            class="text-xs text-[#DF4A2A] hover:underline font-bold ml-auto"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <!-- Menu Grid Content -->
      <div>
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#1B1812]">
              {{ currentCategoryTitle }}
            </h2>
            <p class="text-xs font-mono text-[#1B1812]/60 mt-0.5">Showing {{ filteredItems.length }} dishes</p>
          </div>
          <button 
            @click="cartActions.openCart()" 
            class="px-5 py-2.5 rounded-full bg-[#DF4A2A] text-white font-display text-xs uppercase tracking-wider font-bold hover:bg-[#C53C1F] transition shadow-md"
          >
            View Order ({{ cartGetters.itemCount.value }})
          </button>
        </div>

        <!-- No Results -->
        <div v-if="filteredItems.length === 0" class="text-center py-20 bg-white rounded-3xl border border-[#1B1812]/10 space-y-3">
          <span class="font-serif italic text-4xl text-[#DF4A2A]">No dishes found</span>
          <p class="text-xs text-[#1B1812]/70 font-mono">Try searching with a different ingredient or clearing filters.</p>
          <button @click="resetFilters" class="px-6 py-2 bg-[#1B1812] text-[#F4ECDD] text-xs font-display uppercase rounded-full">
            Show All Dishes
          </button>
        </div>

        <!-- Dish Cards Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article 
            v-for="dish in filteredItems" 
            :key="dish.id"
            class="ticket bg-white rounded-3xl p-5 border border-[#1B1812]/10 shadow-md flex flex-col justify-between"
          >
            <div>
              <!-- Dish Image Thumbnail -->
              <button 
                type="button" 
                @click="cartActions.openDishModal(dish)"
                class="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4ECDD] relative group cursor-pointer"
              >
                <img 
                  :src="dish.image" 
                  :alt="dish.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-2.5 right-2.5 bg-[#1B1812]/80 backdrop-blur-md text-[#F4ECDD] px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                  Quick View
                </span>
                <span v-if="dish.dietary" class="absolute bottom-2.5 left-2.5 bg-[#1E3A2B] text-[#C9A55C] px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold">
                  {{ dish.dietary }}
                </span>
              </button>

              <!-- Dish Info -->
              <div class="mt-4">
                <h3 class="font-display font-black text-2xl uppercase tracking-tight text-[#1E3A2B] leading-none">
                  <button 
                    type="button" 
                    @click="cartActions.openDishModal(dish)"
                    class="hover:text-[#DF4A2A] transition-colors text-left"
                  >
                    {{ dish.name }}
                  </button>
                </h3>
                <p class="text-xs text-[#1B1812]/75 font-sans leading-relaxed mt-2 line-clamp-3">
                  {{ dish.description }}
                </p>
              </div>
            </div>

            <div>
              <!-- Perforated Tear Line -->
              <div class="tear my-4"></div>

              <!-- Price & Add Action -->
              <div class="flex items-center justify-between pt-1">
                <span class="font-mono text-2xl font-bold text-[#1B1812]">
                  ${{ dish.price.toFixed(2) }}
                </span>
                <button 
                  type="button"
                  @click="cartActions.addItem(dish)"
                  class="px-5 py-2 bg-[#DF4A2A] text-white text-xs font-display uppercase tracking-wider font-bold rounded-full hover:bg-[#C53C1F] transition-all shadow-sm flex items-center gap-1.5 transform hover:scale-105 active:scale-95"
                >
                  <span>Add +</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { cartActions, cartGetters } from '../stores/cart.js';

const route = useRoute();

const searchQuery = ref('');
const activeCategory = ref('all');
const activeDiets = ref([]);

const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'bowls', name: 'Market Bowls' },
  { id: 'breakfast', name: 'Breakfast & Toasts' },
  { id: 'sandwiches', name: 'Melts & Sandwiches' },
  { id: 'juices', name: 'Juices & Smoothies' },
  { id: 'bakery', name: 'Artisan Bakery' },
  { id: 'soups', name: 'Scratch Soups' },
];

const dietOptions = [
  { key: 'gf', label: '🌾 Gluten-Free' },
  { key: 'vegan', label: '🌱 100% Plant-Based' },
  { key: 'protein', label: '💪 High Protein' },
  { key: 'dairy-free', label: '🥛 Dairy-Free' },
];

const menuItems = [
  {
    id: 1,
    name: 'Saffron Shrimp Bowl',
    category: 'bowls',
    price: 18.95,
    image: '/menu/074.webp',
    dietary: 'Gluten-Free',
    tags: ['gf', 'protein', 'dairy-free'],
    description: 'Saffron Vegetable Rice, Lemon Garlic Grilled Shrimp, Roasted Cauliflower, Lemon Zest Roasted Asparagus, Pickled Red Onions, Taro Root Chips, Chipotle Vinaigrette & Fresh Lemon.',
  },
  {
    id: 2,
    name: 'Classic Avocado Toast',
    category: 'breakfast',
    price: 9.50,
    image: '/menu/003.webp',
    dietary: 'Plant-Based',
    tags: ['vegan', 'dairy-free'],
    description: 'Smashed Hass Avocado, Herbed Cold-Pressed Extra Virgin Olive Oil, Organic Micro Greens & Watermelon Radish on artisanal bakery sourdough.',
  },
  {
    id: 3,
    name: 'Smoked Salmon Toast',
    category: 'breakfast',
    price: 14.95,
    image: '/menu/043.webp',
    dietary: 'High Protein',
    tags: ['protein', 'dairy-free'],
    description: 'Smashed Avocado, Wild Nova Smoked Salmon, Non-pareil Capers, Pickled Red Onions & Fresh Farm Dill on toasted sourdough.',
  },
  {
    id: 4,
    name: 'Chicken Parm Melt',
    category: 'sandwiches',
    price: 13.95,
    image: '/menu/095.webp',
    dietary: 'Chef Favorite',
    tags: ['protein'],
    description: 'Crispy All-Natural Chicken Cutlet, Buffalo Mozzarella, Aged Parmesan Cheese, Homemade San Marzano Marinara Sauce on warm Artisan Ciabatta.',
  },
  {
    id: 5,
    name: 'Metro Reuben',
    category: 'sandwiches',
    price: 15.95,
    image: '/menu/099.webp',
    dietary: 'NYC Classic',
    tags: ['protein'],
    description: 'House Corned Beef, Whole Grain Mustard, Russian Dressing, Tangy Sauerkraut, Melted Swiss Cheese on Griddled Sourdough.',
  },
  {
    id: 6,
    name: 'Sunfire Shrimp Salad',
    category: 'bowls',
    price: 18.95,
    image: '/menu/073.webp',
    dietary: 'Gluten-Free',
    tags: ['gf', 'protein', 'dairy-free'],
    description: 'Crisp Mixed Greens, Shaved Cabbage, Spicy Pineapple Pico de Gallo, Roasted Corn, Shredded Parsnips, Taro Root Chips, Grilled Lemon Garlic Shrimp, Chipotle Vinaigrette.',
  },
  {
    id: 7,
    name: 'Green Glow Cold-Pressed Juice',
    category: 'juices',
    price: 10.50,
    image: '/menu/147.webp',
    dietary: 'Cold-Pressed',
    tags: ['vegan', 'gf', 'dairy-free'],
    description: 'Cold-Pressed Organic Tuscan Kale, Baby Spinach, Crisp Green Apple, Pineapple, Valencia Oranges, and Fresh Crushed Ginger.',
  },
  {
    id: 8,
    name: 'Hand-Rolled Almond Croissant',
    category: 'bakery',
    price: 5.95,
    image: '/menu/020.webp',
    dietary: 'Bakery Fresh',
    tags: [],
    description: 'Hand-rolled Parisian flaky butter croissant layered with rich almond cream paste and topped with toasted sliced almonds.',
  },
  {
    id: 9,
    name: 'Chicken Fajita Melt',
    category: 'sandwiches',
    price: 14.25,
    image: '/menu/072.webp',
    dietary: 'High Protein',
    tags: ['protein'],
    description: 'Cajun Spiced Chicken, Spicy Pineapple Pico de Gallo, Fire-Grilled Peppers & Onions, Monterey Jack & Sharp Cheddar on Pita with fresh guacamole.',
  },
  {
    id: 10,
    name: 'Wild Berry Smoothie',
    category: 'juices',
    price: 10.95,
    image: '/menu/155.webp',
    dietary: 'No Added Sugar',
    tags: ['gf'],
    description: 'Fresh Strawberries, Blueberries, Blackberries, House-Made Gluten-Free Granola, and Organic Greek Yogurt blended to order.',
  },
  {
    id: 11,
    name: 'Simmering Bone Broth & Lentil Soup',
    category: 'soups',
    price: 8.95,
    image: '/menu/111.webp',
    dietary: 'Scratch Made',
    tags: ['gf', 'dairy-free'],
    description: 'Simmered all day with grass-fed bone broth, French green lentils, mirepoix vegetables, rosemary, and cold-pressed olive oil.',
  },
  {
    id: 12,
    name: 'Grass-Fed Steak Market Plate',
    category: 'bowls',
    price: 19.95,
    image: '/ig/03.webp',
    dietary: 'High Protein',
    tags: ['protein', 'gf', 'dairy-free'],
    description: 'Charred Flank Steak sliced thin over saffron rice, roasted sweet potato wedges, charred broccoli, and chimichurri olive oil sauce.',
  },
];

onMounted(() => {
  if (route.query.cat) {
    activeCategory.value = route.query.cat;
  }
});

function countCategory(catId) {
  if (catId === 'all') return menuItems.length;
  return menuItems.filter(item => item.category === catId).length;
}

function toggleDiet(dietKey) {
  const idx = activeDiets.value.indexOf(dietKey);
  if (idx > -1) {
    activeDiets.value.splice(idx, 1);
  } else {
    activeDiets.value.push(dietKey);
  }
}

function resetFilters() {
  searchQuery.value = '';
  activeCategory.value = 'all';
  activeDiets.value = [];
}

const currentCategoryTitle = computed(() => {
  const cat = categories.find(c => c.id === activeCategory.value);
  return cat ? cat.name : 'All Dishes';
});

const filteredItems = computed(() => {
  return menuItems.filter(dish => {
    // Category match
    if (activeCategory.value !== 'all' && dish.category !== activeCategory.value) {
      return false;
    }

    // Dietary match
    if (activeDiets.value.length > 0) {
      const hasAll = activeDiets.value.every(d => dish.tags && dish.tags.includes(d));
      if (!hasAll) return false;
    }

    // Search query match
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchDesc = dish.description.toLowerCase().includes(q);
      const matchDiet = dish.dietary ? dish.dietary.toLowerCase().includes(q) : false;
      if (!matchName && !matchDesc && !matchDiet) return false;
    }

    return true;
  });
});
</script>
