<template>
  <section id="market-table" class="py-20 bg-white scroll-mt-24 border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div class="space-y-3">
          <div class="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Chef's Interactive Bar</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">
            Build Your Daily Market Table Plate
          </h2>
          <p class="text-stone-600 max-w-2xl text-base">
            Choose your favorite hot protein, two roasted seasonal sides, and ancient grains or greens. Watch your plate macros update live!
          </p>
        </div>

        <!-- Live Plate Summary Badge -->
        <div class="p-4 rounded-2xl bg-[#F7F1E6] border border-[#896A39]/30 shrink-0 flex items-center space-x-4">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#896A39] block">Your Plate Nutrition</span>
            <div class="flex items-baseline space-x-2 mt-0.5">
              <span class="text-2xl font-bold font-serif text-[#1B222C]">{{ plateMacros.cal }}</span>
              <span class="text-xs text-stone-500">Calories</span>
              <span class="text-stone-300">•</span>
              <span class="text-2xl font-bold font-serif text-[#896A39]">{{ plateMacros.protein }}g</span>
              <span class="text-xs text-stone-500">Protein</span>
            </div>
          </div>
          <button @click="$emit('open-order')" class="px-5 py-2.5 rounded-xl bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-xs uppercase tracking-wider transition shadow-md">
            Order ($15.95)
          </button>
        </div>
      </div>

      <!-- 3-Step Selection Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Step 1: Proteins -->
        <div class="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 shadow-soft space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-stone-200">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h3 class="font-bold text-[#1B222C] text-base font-serif">Select 1 Hot Protein</h3>
            </div>
            <span class="text-xs text-[#896A39] font-bold">Included</span>
          </div>

          <div class="space-y-2.5">
            <div v-for="protein in proteins" :key="protein.id"
                 @click="selectedProtein = protein"
                 class="p-3.5 rounded-2xl cursor-pointer transition-all border text-xs"
                 :class="selectedProtein.id === protein.id ? 'bg-white border-[#896A39] shadow-md ring-2 ring-[#896A39]/20' : 'bg-white/60 border-stone-200 hover:bg-white'">
              <div class="flex justify-between items-start">
                <div class="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <component :is="protein.icon" class="w-4 h-4 text-[#896A39]" />
                  <span>{{ protein.name }}</span>
                </div>
                <span class="badge-protein text-[10px] font-bold px-2 py-0.5 rounded">{{ protein.tag }}</span>
              </div>
              <p class="text-stone-500 mt-1 text-[11px] leading-relaxed">{{ protein.desc }}</p>
              <div class="mt-2 text-[11px] text-stone-400 font-semibold">{{ protein.cal }} Cal • {{ protein.protein }}g Protein</div>
            </div>
          </div>
        </div>

        <!-- Step 2: Roasted Hot Sides -->
        <div class="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 shadow-soft space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-stone-200">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h3 class="font-bold text-[#1B222C] text-base font-serif">Select 2 Roasted Sides</h3>
            </div>
            <span class="text-xs text-[#896A39] font-bold">2 Included</span>
          </div>

          <div class="space-y-2.5">
            <div v-for="side in sides" :key="side.id"
                 @click="selectSide(side)"
                 class="p-3.5 rounded-2xl cursor-pointer transition-all border text-xs"
                 :class="(selectedSide1.id === side.id || selectedSide2.id === side.id) ? 'bg-white border-[#896A39] shadow-md ring-2 ring-[#896A39]/20' : 'bg-white/60 border-stone-200 hover:bg-white'">
              <div class="flex justify-between items-start">
                <div class="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <component :is="side.icon" class="w-4 h-4 text-[#896A39]" />
                  <span>{{ side.name }}</span>
                </div>
                <span class="badge-seedoil text-[10px] font-bold px-2 py-0.5 rounded">{{ side.tag }}</span>
              </div>
              <p class="text-stone-500 mt-1 text-[11px] leading-relaxed">{{ side.desc }}</p>
              <div class="mt-2 text-[11px] text-stone-400 font-semibold">{{ side.cal }} Cal</div>
            </div>
          </div>
        </div>

        <!-- Step 3: Grains & Greens -->
        <div class="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 shadow-soft space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-stone-200">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h3 class="font-bold text-[#1B222C] text-base font-serif">Select 1 Base</h3>
            </div>
            <span class="text-xs text-[#896A39] font-bold">Included</span>
          </div>

          <div class="space-y-2.5">
            <div v-for="base in bases" :key="base.id"
                 @click="selectedBase = base"
                 class="p-3.5 rounded-2xl cursor-pointer transition-all border text-xs"
                 :class="selectedBase.id === base.id ? 'bg-white border-[#896A39] shadow-md ring-2 ring-[#896A39]/20' : 'bg-white/60 border-stone-200 hover:bg-white'">
              <div class="flex justify-between items-start">
                <div class="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Wheat class="w-4 h-4 text-[#896A39]" />
                  <span>{{ base.name }}</span>
                </div>
                <span class="badge-gf text-[10px] font-bold px-2 py-0.5 rounded">{{ base.tag }}</span>
              </div>
              <p class="text-stone-500 mt-1 text-[11px] leading-relaxed">{{ base.desc }}</p>
              <div class="mt-2 text-[11px] text-stone-400 font-semibold">{{ base.cal }} Cal</div>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-stone-200">
            <div class="relative rounded-2xl overflow-hidden h-36">
              <img src="/assets/images/market-table.webp" alt="Market Table Warm Plate" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                <span class="text-xs text-white font-bold flex items-center gap-1.5">
                  <Clock class="w-3.5 h-3.5 text-[#896A39]" />
                  <span>Cooked fresh daily from 11:00 AM – 4:00 PM</span>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Sparkles, Drumstick, Flame, Fish, Leaf, Beef, Salad, Wheat, Clock } from 'lucide-vue-next';

defineEmits(['open-order']);

const proteins = [
  { id: 'p1', name: 'Lemon Herb Roast Chicken', desc: 'Greek EVOO, oregano, garlic & lemon zest', cal: 260, protein: 42, icon: Drumstick, tag: 'High Protein' },
  { id: 'p2', name: 'Moroccan Spiced Chicken', desc: 'Turmeric, warm spices, raw honey & olive oil', cal: 280, protein: 38, icon: Flame, tag: '0% Seed Oil' },
  { id: 'p3', name: 'Herb & Lime Seared Shrimp', desc: 'Gulf shrimp seared in avocado oil with cilantro & lime', cal: 180, protein: 34, icon: Fish, tag: 'Gluten-Free' },
  { id: 'p4', name: 'Sweet Baked Organic Tofu', desc: 'Non-GMO tofu in tamari, ginger & toasted sesame', cal: 190, protein: 22, icon: Leaf, tag: '100% Vegan' },
  { id: 'p5', name: 'Adobo Grilled Skirt Steak', desc: 'Prime flank steak with chimichurri drizzle (EVOO)', cal: 320, protein: 40, icon: Beef, tag: 'Chef Signature' }
];

const sides = [
  { id: 's1', name: 'Charred Balsamic Brussels', desc: 'Avocado oil & aged Modena balsamic glaze', cal: 95, icon: Leaf, tag: 'Vegan • GF' },
  { id: 's2', name: 'Roasted Garlic Broccoli', desc: 'Tender florets with garlic slivers & EVOO', cal: 75, icon: Salad, tag: '0% Seed Oil' },
  { id: 's3', name: 'Maple Glazed Sweet Potatoes', desc: 'Organic yams tossed in cinnamon & maple', cal: 130, icon: Flame, tag: 'Nutrient Rich' },
  { id: 's4', name: 'Sautéed Wild Mushrooms', desc: 'Cremini & shiitake with thyme & avocado oil', cal: 85, icon: Leaf, tag: 'Low Carb' }
];

const bases = [
  { id: 'b1', name: 'Organic Brown Rice & Quinoa', desc: 'Steamed with bay leaves and EVOO', cal: 180, protein: 6, tag: 'Gluten-Free' },
  { id: 'b2', name: 'Warm Ancient Farro & Herbs', desc: 'Nutty ancient grain with fresh parsley & lemon', cal: 190, protein: 7, tag: 'Fiber Rich' },
  { id: 'b3', name: 'Baby Spinach & Tuscan Kale', desc: 'Tossed with light lemon-dill vinaigrette', cal: 40, protein: 3, tag: 'Low Carb • Keto' }
];

const selectedProtein = ref(proteins[0]);
const selectedSide1 = ref(sides[0]);
const selectedSide2 = ref(sides[1]);
const selectedBase = ref(bases[0]);

function selectSide(side) {
  if (selectedSide1.value.id === side.id) return;
  if (selectedSide2.value.id === side.id) {
    selectedSide2.value = sides[0];
  } else {
    selectedSide1.value = side;
  }
}

const plateMacros = computed(() => {
  const cal = (selectedProtein.value?.cal || 0) + (selectedSide1.value?.cal || 0) + (selectedSide2.value?.cal || 0) + (selectedBase.value?.cal || 0);
  const protein = (selectedProtein.value?.protein || 0) + 4 + (selectedBase.value?.protein || 0);
  return { cal, protein };
});
</script>
