<template>
  <div class="bg-[#FAF8F5] min-h-screen">
    <!-- Menu Page Header Banner -->
    <section class="bg-[#10161D] text-white py-16 sm:py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img src="/assets/images/hero-salad.webp" alt="Metro Marché Fresh Menu" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#896A39]/20 text-amber-200 border border-[#896A39]/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>100% Seed Oil-Free Menu</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-serif font-bold text-white">
          Our Full Artisan Menu
        </h1>
        <p class="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Cooked exclusively with cold-pressed Extra Virgin Olive Oil and pure Avocado Oil. Prepared daily from scratch at 30 W 57th St, Midtown NYC.
        </p>

        <!-- Search Bar -->
        <div class="pt-4 max-w-xl mx-auto">
          <div class="relative">
            <Search class="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input v-model="searchQuery" type="text" placeholder="Search menu (e.g. steak, salmon, matcha, bowl, GF)..."
                   class="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-stone-900 text-sm border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#896A39] shadow-md" />
            <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold">
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters Bar (Sticky) -->
    <div class="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#F3ECE1] py-4 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <!-- Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button v-for="cat in categories" :key="cat.id"
                  @click="activeCategory = cat.id"
                  class="whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition shadow-sm"
                  :class="activeCategory === cat.id ? 'bg-[#1B222C] text-white shadow-md' : 'bg-[#FAF8F5] text-stone-700 hover:bg-stone-200'">
            {{ cat.name }} ({{ countCategory(cat.id) }})
          </button>
        </div>

        <!-- Dietary Pills Filter -->
        <div class="flex flex-wrap items-center gap-2 text-xs">
          <span class="text-stone-500 font-bold uppercase text-[11px]">Dietary:</span>
          <button v-for="filter in dietOptions" :key="filter.key"
                  @click="toggleDiet(filter.key)"
                  class="px-3 py-1 rounded-full border text-xs font-semibold transition"
                  :class="activeDiets.includes(filter.key) ? 'bg-[#896A39] text-white border-[#896A39]' : 'bg-white border-stone-300 text-stone-700 hover:border-[#896A39]'">
            {{ filter.label }}
          </button>
          <button v-if="activeDiets.length > 0 || searchQuery || activeCategory !== 'all'"
                  @click="resetFilters" class="text-xs text-[#896A39] hover:underline font-bold ml-auto">
            Reset All Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Items Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-serif font-bold text-[#1B222C]">
            {{ currentCategoryTitle }}
          </h2>
          <p class="text-xs text-stone-500 mt-1">Showing {{ filteredItems.length }} dishes</p>
        </div>
        <button @click="$emit('open-order')" class="px-5 py-2.5 rounded-full bg-[#896A39] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6D5329] transition shadow-md">
          Order Online Pickup
        </button>
      </div>

      <!-- Dish Cards -->
      <div v-if="filteredItems.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in filteredItems" :key="item.id"
             class="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
          <div>
            <div class="relative h-56 overflow-hidden">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                100% Seed Oil Free
              </span>
              <span class="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#1B222C] font-serif font-bold text-base px-3 py-1 rounded-full shadow-sm">
                {{ item.price }}
              </span>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-2">
                <span class="bg-[#F7F1E6] text-[#896A39] border border-[#896A39]/30 text-[11px] font-bold px-2 py-0.5 rounded">
                  {{ item.protein }} Protein
                </span>
                <span class="text-xs text-stone-400">{{ item.calories }} Cal</span>
                <span v-if="item.dietary" class="ml-auto text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                  {{ item.dietary }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-[#1B222C] font-serif group-hover:text-[#896A39] transition">
                {{ item.name }}
              </h3>
              <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <button @click="$emit('open-order')"
                    class="w-full py-2.5 rounded-xl bg-[#1B222C] hover:bg-[#896A39] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-sm">
              <Plus class="w-4 h-4" />
              <span>Add to Pickup Order</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 space-y-4 bg-white rounded-3xl border border-stone-200">
        <div class="w-16 h-16 mx-auto rounded-full bg-[#F7F1E6] flex items-center justify-center text-[#896A39]">
          <Salad class="w-8 h-8" />
        </div>
        <h3 class="text-2xl font-serif font-bold text-[#1B222C]">No matching items found</h3>
        <p class="text-stone-500 text-sm max-w-md mx-auto">
          We couldn't find any dishes matching your current filter. Try resetting your search or choosing another category.
        </p>
        <button @click="resetFilters" class="px-6 py-2.5 rounded-full bg-[#896A39] text-white font-bold text-xs uppercase tracking-wider">
          Reset All Filters
        </button>
      </div>
    </main>

    <!-- Bottom Express Order Bar -->
    <section class="bg-[#F7F1E6] border-t border-[#896A39]/20 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="font-serif font-bold text-lg text-[#1B222C]">Need lunch fast in Midtown?</h4>
          <p class="text-xs text-stone-600">Order online for grab-and-go counter pickup at 30 W 57th St (ready in 10-15 mins).</p>
        </div>
        <div class="flex items-center gap-3">
          <a href="tel:2126973334" class="px-5 py-2.5 rounded-full bg-white border border-stone-300 text-stone-700 font-bold text-xs hover:border-[#896A39] transition flex items-center gap-1.5">
            <Phone class="w-3.5 h-3.5 text-[#896A39]" />
            <span>(212) 697-3334</span>
          </a>
          <button @click="$emit('open-order')" class="px-6 py-2.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center gap-1.5">
            <ShoppingBag class="w-3.5 h-3.5" />
            <span>Start Pickup Order</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Sparkles, Search, Plus, Salad, Phone, ShoppingBag } from 'lucide-vue-next';

defineEmits(['open-order']);

const searchQuery = ref('');
const activeCategory = ref('all');
const activeDiets = ref([]);

const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'salads', name: 'Salads & Grain Bowls' },
  { id: 'market', name: 'Hot Market Plates' },
  { id: 'sandwiches', name: 'Sandwiches & Melts' },
  { id: 'breakfast', name: 'Breakfast & Bakery' },
  { id: 'drinks', name: 'Beverages & Coffee' }
];

const dietOptions = [
  { key: 'gf', label: 'Gluten-Free' },
  { key: 'vegan', label: 'Vegan' },
  { key: 'protein', label: 'High Protein (30g+)' },
  { key: 'df', label: 'Dairy-Free' }
];

const menuDatabase = [
  {
    id: 1,
    name: 'Tuscan Charred Steak Salad',
    category: 'salads',
    dietary: 'GF • High Protein',
    dietKeys: ['gf', 'protein', 'df'],
    price: '$17.95',
    calories: 580,
    protein: '42g',
    image: '/assets/images/steak-salad.jpg',
    desc: 'Grass-fed prime flank steak, wild baby arugula, shaved parmesan, heirloom cherry tomatoes, roasted pine nuts, 100% EVOO lemon balsamic glaze.'
  },
  {
    id: 2,
    name: 'Wild Salmon & Avocado Bowl',
    category: 'salads',
    dietary: 'GF • Omega-3',
    dietKeys: ['gf', 'protein', 'df'],
    price: '$18.50',
    calories: 620,
    protein: '38g',
    image: '/assets/images/salmon-avocado.jpg',
    desc: 'Pan-seared wild salmon cooked in avocado oil, organic tri-color quinoa, Hass avocado, massaged kale, Persian cucumber, lemon dill tahini.'
  },
  {
    id: 3,
    name: 'Roasted Harvest Grain Bowl',
    category: 'salads',
    dietary: 'Vegan • GF',
    dietKeys: ['gf', 'vegan', 'df'],
    price: '$14.95',
    calories: 520,
    protein: '18g',
    image: '/assets/images/grain-bowl.jpg',
    desc: 'Sweet potato cubes, charred Brussels sprouts, warm farro, organic baby spinach, roasted chickpeas, pumpkin seeds, maple EVOO dressing.'
  },
  {
    id: 4,
    name: 'Herb Grilled Chicken Market Plate',
    category: 'market',
    dietary: 'GF • High Protein',
    dietKeys: ['gf', 'protein', 'df'],
    price: '$16.95',
    calories: 590,
    protein: '46g',
    image: '/assets/images/market-hot-table.jpg',
    desc: 'Antibiotic-free lemon rosemary chicken breast, roasted garlic sweet potatoes, charred broccolini, steamed organic wild rice pilaf.'
  },
  {
    id: 5,
    name: 'Braised Angus Beef Market Plate',
    category: 'market',
    dietary: 'GF • High Protein',
    dietKeys: ['gf', 'protein'],
    price: '$18.95',
    calories: 660,
    protein: '44g',
    image: '/assets/images/hero-salad.webp',
    desc: 'Slow-braised beef brisket in rich beef bone broth, roasted baby carrots, smashed red skin potatoes with grass-fed butter and fresh herbs.'
  },
  {
    id: 6,
    name: 'Artisan Turkey & Bacon Avocado Club',
    category: 'sandwiches',
    dietary: 'High Protein',
    dietKeys: ['protein'],
    price: '$14.95',
    calories: 610,
    protein: '36g',
    image: '/assets/images/artisan-sandwich.jpg',
    desc: 'House-roasted turkey breast, nitrate-free applewood bacon, smashed avocado, vine tomatoes, bibb lettuce, seed-oil-free garlic aioli on sourdough.'
  },
  {
    id: 7,
    name: 'Pasture Egg & Truffle Breakfast Brioche',
    category: 'breakfast',
    dietary: 'Vegetarian',
    dietKeys: ['protein'],
    price: '$9.95',
    calories: 460,
    protein: '22g',
    image: '/assets/images/breakfast-sandwich.jpg',
    desc: 'Soft scrambled pasture-raised eggs, aged cheddar, caramelized shallots, wild truffle EVOO on warm artisanal French brioche.'
  },
  {
    id: 8,
    name: 'Fresh French Bakery Croissant',
    category: 'breakfast',
    dietary: 'Vegetarian',
    dietKeys: [],
    price: '$4.75',
    calories: 320,
    protein: '7g',
    image: '/assets/images/croissant-bakery.jpg',
    desc: 'Laminated with pure European grass-fed butter, crisp golden layers, delicate buttery crumb baked fresh every morning in Midtown.'
  },
  {
    id: 9,
    name: 'Artisanal Pistachio Iced Latte',
    category: 'drinks',
    dietary: 'Gluten-Free',
    dietKeys: ['gf'],
    price: '$6.50',
    calories: 180,
    protein: '6g',
    image: '/assets/images/specialty-coffee.jpg',
    desc: 'Double shot of single-origin espresso, house-ground Sicilian pistachio milk, raw organic honey, served over hand-cut ice.'
  },
  {
    id: 10,
    name: 'Green Vitality Cold-Pressed Juice',
    category: 'drinks',
    dietary: 'Vegan • GF • Raw',
    dietKeys: ['gf', 'vegan', 'df'],
    price: '$8.50',
    calories: 110,
    protein: '3g',
    image: '/assets/images/cold-pressed-juice.jpg',
    desc: 'Cold-pressed organic kale, crisp green apple, English cucumber, celery, fresh ginger root, and Persian lime. Zero added sugar.'
  }
];

function countCategory(catId) {
  if (catId === 'all') return menuDatabase.length;
  return menuDatabase.filter(item => item.category === catId).length;
}

function toggleDiet(key) {
  const index = activeDiets.value.indexOf(key);
  if (index >= 0) {
    activeDiets.value.splice(index, 1);
  } else {
    activeDiets.value.push(key);
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
  return menuDatabase.filter(item => {
    // Category match
    if (activeCategory.value !== 'all' && item.category !== activeCategory.value) {
      return false;
    }
    // Search query match
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.desc.toLowerCase().includes(q);
      const matchDiet = item.dietary?.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchDiet) return false;
    }
    // Diet filters match
    if (activeDiets.value.length > 0) {
      const hasAllDiets = activeDiets.value.every(d => item.dietKeys.includes(d));
      if (!hasAllDiets) return false;
    }
    return true;
  });
});
</script>
