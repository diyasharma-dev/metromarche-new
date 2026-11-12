<template>
  <section class="py-20 bg-[#FAF8F5] border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">Artisan Kitchen</span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">
          Chef-Crafted Menu Highlights
        </h2>
        <p class="text-stone-600 text-base">
          From crisp salads and hot melts to morning espresso and flaky pastries, every item is handcrafted daily with whole ingredients.
        </p>

        <!-- Category Tabs -->
        <div class="flex flex-wrap justify-center gap-2 pt-2">
          <button v-for="cat in categories" :key="cat.id"
                  @click="activeCat = cat.id"
                  class="px-5 py-2 rounded-full font-bold text-xs transition shadow-sm"
                  :class="activeCat === cat.id ? 'bg-[#1B222C] text-white' : 'bg-white text-stone-700 hover:bg-stone-100'">
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- Dishes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in filteredItems" :key="item.id"
             class="bg-white rounded-3xl overflow-hidden shadow-soft border border-stone-200 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <div class="relative h-56 overflow-hidden">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-4 left-4 badge-seedoil text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">{{ item.badge }}</span>
              <span class="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#1B222C] font-serif font-bold text-base px-3 py-1 rounded-full shadow-sm">{{ item.price }}</span>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-protein text-[11px] font-bold px-2 py-0.5 rounded">{{ item.protein }} Protein</span>
                <span class="text-xs text-stone-400">{{ item.calories }} Cal</span>
              </div>
              <h3 class="text-xl font-bold text-[#1B222C] font-serif">{{ item.name }}</h3>
              <p class="text-xs text-stone-600 mt-2 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <button @click="$emit('open-order')" class="w-full py-2.5 rounded-xl bg-[#1B222C] hover:bg-[#896A39] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5">
              <Plus class="w-4 h-4" />
              <span>Add To Order</span>
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/menu" class="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#896A39] text-white font-bold text-sm hover:bg-[#6D5329] shadow-md transition">
          <span>Explore Complete Digital Menu</span>
          <ArrowRight class="w-4 h-4 ml-1" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Plus, ArrowRight } from 'lucide-vue-next';

defineEmits(['open-order']);

const activeCat = ref('all');

const categories = [
  { id: 'all', name: 'All Favorites' },
  { id: 'salads', name: 'Salads & Bowls' },
  { id: 'sandwiches', name: 'Melts & Sandwiches' },
  { id: 'breakfast', name: 'Breakfast & Bakery' },
  { id: 'drinks', name: 'Specialty Sips' }
];

const dishes = [
  {
    id: 'd1',
    name: 'Adobo Grilled Steak Salad',
    cat: 'salads',
    price: '$17.50',
    calories: 540,
    protein: '38g',
    image: '/assets/images/steak-salad.jpg',
    badge: '0% Seed Oil',
    desc: 'Marinated skirt steak, Hass avocado, roasted corn, cherry tomatoes, pickled onions, cotija cheese, and cilantro chimichurri (EVOO).'
  },
  {
    id: 'd2',
    name: 'Herb Salmon & Avocado Bowl',
    cat: 'salads',
    price: '$18.95',
    calories: 610,
    protein: '42g',
    image: '/assets/images/salmon-avocado.jpg',
    badge: 'Omega-3 Rich',
    desc: 'Wild-caught salmon roasted with fresh dill & avocado oil, red quinoa, organic baby spinach, roasted sweet potatoes, and lemon tahini.'
  },
  {
    id: 'd3',
    name: 'Roasted Harvest Grain Bowl',
    cat: 'salads',
    price: '$14.95',
    calories: 490,
    protein: '18g',
    image: '/assets/images/grain-bowl.jpg',
    badge: '100% Vegan',
    desc: 'Ancient farro, roasted sweet potatoes, charred Brussels sprouts, organic greens, toasted pumpkin seeds, and maple EVOO vinaigrette.'
  },
  {
    id: 'd4',
    name: 'Artisan Turkey Avocado Club',
    cat: 'sandwiches',
    price: '$14.95',
    calories: 580,
    protein: '36g',
    image: '/assets/images/artisan-sandwich.jpg',
    badge: 'House Roasted',
    desc: 'All-natural herb turkey breast, applewood uncured bacon, Hass avocado, heirloom tomato, seed-oil-free herb aioli on sourdough.'
  },
  {
    id: 'd5',
    name: 'Pasture Egg & Brioche Melt',
    cat: 'breakfast',
    price: '$9.95',
    calories: 460,
    protein: '24g',
    image: '/assets/images/breakfast-sandwich.jpg',
    badge: 'Breakfast Favorite',
    desc: 'Vital Farms pasture-raised eggs, aged Vermont cheddar, caramelized onions, organic baby spinach, on toasted French brioche.'
  },
  {
    id: 'd6',
    name: 'Parisian Butter Croissant',
    cat: 'breakfast',
    price: '$4.75',
    calories: 320,
    protein: '6g',
    image: '/assets/images/croissant-bakery.jpg',
    badge: 'Baked Fresh',
    desc: 'Laminated with pure European grass-fed butter, crisp golden exterior with honeycomb interior. Baked fresh every morning.'
  },
  {
    id: 'd7',
    name: 'Artisanal Pistachio Iced Latte',
    cat: 'drinks',
    price: '$6.50',
    calories: 180,
    protein: '6g',
    image: '/assets/images/specialty-coffee.jpg',
    badge: 'House Recipe',
    desc: 'Single-origin espresso, house-made Sicilian pistachio milk, organic raw honey, served over hand-cut ice.'
  },
  {
    id: 'd8',
    name: 'Cold-Pressed Green Vitality',
    cat: 'drinks',
    price: '$8.50',
    calories: 110,
    protein: '3g',
    image: '/assets/images/cold-pressed-juice.jpg',
    badge: 'Raw & Unpasteurized',
    desc: 'Organic kale, crisp green apple, English cucumber, celery, fresh ginger, and lime. 100% juice, zero added sugars.'
  }
];

const filteredItems = computed(() => {
  if (activeCat.value === 'all') return dishes;
  return dishes.filter(item => item.cat === activeCat.value);
});
</script>
