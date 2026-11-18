<template>
  <div class="py-12 sm:py-20 bg-[#FAF8F5] min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
          <Utensils class="w-3.5 h-3.5" />
          <span>Interactive Custom Kitchen</span>
        </div>
        <h1 class="font-display font-black text-5xl sm:text-7xl uppercase tracking-tight text-[#10161D] leading-[0.9]">
          Build your <span class="font-serif italic font-normal text-[#896A39] lowercase">plate</span>.
        </h1>
        <p class="text-base text-[#1B1812]/80 font-sans mt-3 max-w-xl mx-auto">
          We do not chop salads. Dressings, soups and sauces are house made. Order online and skip the line. Custom salads (from $10.45) &amp; sandwiches (from $11.50) cooked 100% seed-oil free.
        </p>
      </div>

      <!-- Main Configurator Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Steps Selector (8 cols) -->
        <div class="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#10161D]/10 shadow-xl space-y-8">
          
          <!-- Step 1: Base -->
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#10161D]/10">
              <h3 class="font-display font-bold text-lg sm:text-xl uppercase text-[#10161D] flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-mono flex items-center justify-center">1</span>
                <span>Select Your Base</span>
              </h3>
              <span class="text-xs font-mono text-[#896A39] font-bold">Choose 1</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                v-for="b in bases" 
                :key="b.name"
                type="button"
                @click="selectedBase = b"
                class="p-4 rounded-2xl border text-left transition-all flex justify-between items-center cursor-pointer"
                :class="selectedBase.name === b.name 
                  ? 'bg-[#896A39] text-white border-[#896A39] shadow-md' 
                  : 'bg-[#FAF8F5] text-[#10161D] border-[#10161D]/10 hover:border-[#10161D]/30'"
              >
                <div>
                  <div class="font-display font-bold text-sm uppercase">{{ b.name }}</div>
                  <div class="text-[11px] opacity-80 mt-0.5">{{ b.desc }}</div>
                </div>
                <div class="text-right font-mono text-xs opacity-90">
                  <Check v-if="selectedBase.name === b.name" class="w-4 h-4 text-white inline-block mb-1" /><br v-if="selectedBase.name === b.name" />
                  <span>{{ b.cal }} kcal</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 2: Protein -->
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#10161D]/10">
              <h3 class="font-display font-bold text-lg sm:text-xl uppercase text-[#10161D] flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-mono flex items-center justify-center">2</span>
                <span>Choose Clean Protein (Cooked in EVOO)</span>
              </h3>
              <span class="text-xs font-mono text-[#896A39] font-bold">Choose 1</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                v-for="p in proteins" 
                :key="p.name"
                type="button"
                @click="selectedProtein = p"
                class="p-4 rounded-2xl border text-left transition-all flex justify-between items-center cursor-pointer"
                :class="selectedProtein.name === p.name 
                  ? 'bg-[#896A39] text-white border-[#896A39] shadow-md' 
                  : 'bg-[#FAF8F5] text-[#10161D] border-[#10161D]/10 hover:border-[#10161D]/30'"
              >
                <div>
                  <div class="font-display font-bold text-sm uppercase">{{ p.name }}</div>
                  <div class="text-[11px] opacity-80 mt-0.5">{{ p.protein }}g protein • 100% clean fat</div>
                </div>
                <div class="text-right font-mono text-xs opacity-90">
                  <Check v-if="selectedProtein.name === p.name" class="w-4 h-4 text-white inline-block mb-1" /><br v-if="selectedProtein.name === p.name" />
                  <span>${{ p.price.toFixed(2) }}</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 3: Hot Market Sides & Vegetables -->
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#10161D]/10">
              <h3 class="font-display font-bold text-lg sm:text-xl uppercase text-[#10161D] flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-mono flex items-center justify-center">3</span>
                <span>Select 2 Market Sides &amp; Veggies</span>
              </h3>
              <span class="text-xs font-mono font-bold" :class="selectedSides.length === 2 ? 'text-[#3DDC84]' : 'text-[#896A39]'">
                {{ selectedSides.length }}/2 Selected
              </span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button 
                v-for="s in sides" 
                :key="s.name"
                type="button"
                @click="toggleSide(s)"
                class="p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
                :class="selectedSides.some(item => item.name === s.name) 
                  ? 'bg-[#1E3A2B] text-[#C9A55C] border-[#1E3A2B] font-bold shadow-sm' 
                  : 'bg-[#FAF8F5] text-[#10161D] border-[#10161D]/10 hover:border-[#10161D]/30'"
              >
                <span class="font-display text-xs uppercase">{{ s.name }}</span>
                <span class="text-[10px] opacity-75 font-mono">{{ s.cal }} kcal</span>
              </button>
            </div>
          </div>

          <!-- Step 4: House EVOO Dressing -->
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#10161D]/10">
              <h3 class="font-display font-bold text-lg sm:text-xl uppercase text-[#10161D] flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-[#896A39] text-white text-xs font-mono flex items-center justify-center">4</span>
                <span>House Scratch Dressing</span>
              </h3>
              <span class="text-xs font-mono text-[#896A39] font-bold">Choose 1</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button 
                v-for="d in dressings" 
                :key="d.name"
                type="button"
                @click="selectedDressing = d"
                class="p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
                :class="selectedDressing.name === d.name 
                  ? 'bg-[#10161D] text-white border-[#10161D] font-bold shadow-sm' 
                  : 'bg-[#FAF8F5] text-[#10161D] border-[#10161D]/10 hover:border-[#10161D]/30'"
              >
                <span class="font-display text-xs uppercase">{{ d.name }}</span>
                <span class="text-[10px] opacity-75 font-mono">{{ d.cal }} kcal</span>
              </button>
            </div>
          </div>

        </div>

        <!-- Right: Live Macro & Pricing Sticky Sidebar (4 cols) -->
        <div class="lg:col-span-4 sticky top-28 space-y-6">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#10161D]/10 shadow-xl space-y-5">
            <div class="border-b border-[#10161D]/10 pb-4">
              <span class="text-xs font-mono uppercase tracking-widest text-[#896A39] font-bold">Order Summary</span>
              <h3 class="font-display font-bold text-2xl uppercase text-[#10161D] mt-1">
                Custom Market Plate
              </h3>
            </div>

            <!-- Selections List -->
            <div class="space-y-2 text-xs font-mono">
              <div class="flex justify-between py-1 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Base:</span>
                <span class="font-bold text-[#10161D] text-right">{{ selectedBase.name }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Protein:</span>
                <span class="font-bold text-[#1E3A2B] text-right">{{ selectedProtein.name }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Sides (2):</span>
                <span class="font-bold text-[#10161D] text-right">
                  {{ selectedSides.map(s => s.name).join(' & ') || 'None selected' }}
                </span>
              </div>
              <div class="flex justify-between py-1 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Dressing:</span>
                <span class="font-bold text-[#896A39] text-right">{{ selectedDressing.name }}</span>
              </div>
            </div>

            <!-- Real-Time Macros -->
            <div class="bg-[#FAF8F5] p-4 rounded-2xl border border-[#10161D]/5 space-y-2 font-mono text-xs">
              <div class="flex justify-between font-bold text-[#10161D]">
                <span>Total Estimated Calories:</span>
                <span>{{ calculatedCalories }} kcal</span>
              </div>
              <div class="flex justify-between font-bold text-[#1E3A2B]">
                <span>Total Clean Protein:</span>
                <span>{{ calculatedProtein }}g</span>
              </div>
              <div class="text-[11px] text-[#3DDC84] font-semibold pt-1">
                ✓ 100% Cooked in Cold-Pressed EVOO &amp; Avocado Oil
              </div>
            </div>

            <!-- Price & Add -->
            <div class="pt-2 space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs font-mono uppercase text-[#1B1812]/60">Plate Total:</span>
                <span class="font-display font-black text-3xl text-[#10161D]">${{ selectedProtein.price.toFixed(2) }}</span>
              </div>

              <button 
                type="button"
                @click="addToCart"
                class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag class="w-4 h-4 text-white" />
                <span>Add Plate To Cart</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { cartActions } from '../stores/cart.js';
import { Utensils, Check, ShoppingBag } from 'lucide-vue-next';

const bases = [
  { name: 'Warm Tuscan Quinoa', desc: 'Organic white and red quinoa steamed with garlic and sea salt', cal: 180, protein: 6 },
  { name: 'Organic Greens & Kale', desc: 'Baby spinach, wild arugula, Tuscan kale tossed in Meyer lemon EVOO', cal: 40, protein: 2 },
  { name: 'Saffron Herb Jasmine Rice', desc: 'Infused with Spanish saffron, fresh dill, parsley and EVOO', cal: 210, protein: 4 },
  { name: 'Wild Farro & Brown Rice', desc: 'Nutty ancient grains cooked tender with vegetable broth', cal: 195, protein: 5 },
];

const proteins = [
  { name: 'Hudson Valley Flank Steak', price: 18.50, protein: 38, cal: 270 },
  { name: 'Lemon Herb Pasture Chicken', price: 16.50, protein: 34, cal: 220 },
  { name: 'Crisp Seared Wild Salmon', price: 19.50, protein: 36, cal: 290 },
  { name: 'Saffron Grilled Shrimp', price: 18.95, protein: 30, cal: 180 },
  { name: 'Miso Organic Roasted Tofu', price: 15.50, protein: 22, cal: 190 },
];

const sides = [
  { name: 'Charred Broccolini', cal: 80, protein: 3 },
  { name: 'Roasted Heirloom Carrots', cal: 95, protein: 2 },
  { name: 'Sweet Potato Medallions', cal: 120, protein: 2 },
  { name: 'Persian Cucumber Slaw', cal: 45, protein: 1 },
  { name: 'French Green Beans', cal: 70, protein: 2 },
  { name: 'Spiced Chickpeas', cal: 110, protein: 5 },
];

const dressings = [
  { name: 'Chimichurri EVOO', cal: 110 },
  { name: 'Truffle Lemon Vinaigrette', cal: 95 },
  { name: 'Green Goddess Avocado', cal: 120 },
  { name: 'Smoked Romesco', cal: 105 },
];

const selectedBase = ref(bases[0]);
const selectedProtein = ref(proteins[0]);
const selectedSides = ref([sides[0], sides[2]]);
const selectedDressing = ref(dressings[0]);

function toggleSide(side) {
  const idx = selectedSides.value.findIndex(s => s.name === side.name);
  if (idx > -1) {
    if (selectedSides.value.length > 1) {
      selectedSides.value.splice(idx, 1);
    }
  } else {
    if (selectedSides.value.length >= 2) {
      selectedSides.value.shift();
    }
    selectedSides.value.push(side);
  }
}

const calculatedCalories = computed(() => {
  const sidesCal = selectedSides.value.reduce((acc, s) => acc + s.cal, 0);
  return selectedBase.value.cal + selectedProtein.value.cal + sidesCal + selectedDressing.value.cal;
});

const calculatedProtein = computed(() => {
  const sidesPro = selectedSides.value.reduce((acc, s) => acc + s.protein, 0);
  return selectedBase.value.protein + selectedProtein.value.protein + sidesPro;
});

function addToCart() {
  const notes = `${selectedBase.value.name} + ${selectedProtein.value.name} + ${selectedSides.value.map(s => s.name).join(', ')} + ${selectedDressing.value.name}`;
  cartActions.addItem({
    id: `custom-bowl-${Date.now()}`,
    name: `Custom Market Plate (${selectedProtein.value.name})`,
    price: selectedProtein.value.price,
    image: '/assets/images/grain-bowl.jpg',
    category: 'Market Bowls',
    customNotes: notes,
  });
  cartActions.openCart();
}
</script>
