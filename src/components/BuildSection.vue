<template>
  <section class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#10161D]/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
          <Utensils class="w-3.5 h-3.5" />
          <span>Interactive Market Table Builder</span>
        </div>
        <h2 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#10161D] leading-[0.95]">
          Build your custom <br />
          <span class="font-serif italic font-normal text-[#896A39] lowercase">market</span> plate.
        </h2>
        <p class="text-base sm:text-lg text-[#1B1812]/75 font-sans leading-relaxed">
          We do not chop salads. Dressings, soups and sauces are house made. Order online and skip the line. Custom salads from $10.45, artisan sandwiches from $11.50, and market plates with zero seed oils.
        </p>
      </div>

      <!-- Configurator Main Layout: Step Selector + Live Dashboard -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Step Selection Panels (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Step 1: Base -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#10161D]/10 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-full bg-[#896A39] text-white flex items-center justify-center font-mono font-bold text-xs">1</span>
                <h3 class="font-display font-bold text-lg uppercase tracking-tight text-[#10161D]">Choose Your Base</h3>
              </div>
              <span class="text-xs font-mono text-[#896A39] font-semibold">1 Selection</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                v-for="b in baseOptions" 
                :key="b.id"
                @click="selectedBase = b"
                class="p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer"
                :class="selectedBase.id === b.id 
                  ? 'border-[#896A39] bg-[#896A39]/5 ring-1 ring-[#896A39]' 
                  : 'border-[#10161D]/10 hover:border-[#10161D]/30 bg-[#FAF8F5]/50'"
              >
                <div class="flex items-start justify-between">
                  <span class="font-display font-bold text-sm text-[#10161D]">{{ b.name }}</span>
                  <Check v-if="selectedBase.id === b.id" class="w-4 h-4 text-[#896A39]" />
                </div>
                <div class="flex items-center justify-between text-xs font-mono text-[#1B1812]/60">
                  <span>{{ b.tag }}</span>
                  <span>{{ b.cals }} kcal • {{ b.protein }}g pro</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 2: Protein -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#10161D]/10 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-full bg-[#896A39] text-white flex items-center justify-center font-mono font-bold text-xs">2</span>
                <h3 class="font-display font-bold text-lg uppercase tracking-tight text-[#10161D]">Select Clean Protein</h3>
              </div>
              <span class="text-xs font-mono text-[#896A39] font-semibold">1 Selection</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                v-for="p in proteinOptions" 
                :key="p.id"
                @click="selectedProtein = p"
                class="p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer"
                :class="selectedProtein.id === p.id 
                  ? 'border-[#896A39] bg-[#896A39]/5 ring-1 ring-[#896A39]' 
                  : 'border-[#10161D]/10 hover:border-[#10161D]/30 bg-[#FAF8F5]/50'"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <span class="font-display font-bold text-sm text-[#10161D] block">{{ p.name }}</span>
                    <span class="text-[11px] font-mono text-[#896A39] font-semibold">{{ p.tierPrice }}</span>
                  </div>
                  <Check v-if="selectedProtein.id === p.id" class="w-4 h-4 text-[#896A39]" />
                </div>
                <div class="flex items-center justify-between text-xs font-mono text-[#1B1812]/60">
                  <span>{{ p.tag }}</span>
                  <span>{{ p.cals }} kcal • <strong>{{ p.protein }}g protein</strong></span>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 3: Two Market Sides -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#10161D]/10 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-full bg-[#896A39] text-white flex items-center justify-center font-mono font-bold text-xs">3</span>
                <h3 class="font-display font-bold text-lg uppercase tracking-tight text-[#10161D]">Pick Two Market Sides</h3>
              </div>
              <span class="text-xs font-mono text-[#896A39] font-semibold">{{ selectedSides.length }}/2 Selected</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                v-for="s in sideOptions" 
                :key="s.id"
                @click="toggleSide(s)"
                class="p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer"
                :class="isSideSelected(s.id) 
                  ? 'border-[#896A39] bg-[#896A39]/5 ring-1 ring-[#896A39]' 
                  : 'border-[#10161D]/10 hover:border-[#10161D]/30 bg-[#FAF8F5]/50'"
              >
                <div class="flex items-start justify-between">
                  <span class="font-display font-bold text-sm text-[#10161D]">{{ s.name }}</span>
                  <Check v-if="isSideSelected(s.id)" class="w-4 h-4 text-[#896A39]" />
                </div>
                <div class="flex items-center justify-between text-xs font-mono text-[#1B1812]/60">
                  <span>{{ s.cooking }}</span>
                  <span>{{ s.cals }} kcal</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 4: Scratch EVOO Dressing -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#10161D]/10 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-full bg-[#896A39] text-white flex items-center justify-center font-mono font-bold text-xs">4</span>
                <h3 class="font-display font-bold text-lg uppercase tracking-tight text-[#10161D]">House Scratch Dressing</h3>
              </div>
              <span class="text-xs font-mono text-[#896A39] font-semibold">1 Selection</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                v-for="d in dressingOptions" 
                :key="d.id"
                @click="selectedDressing = d"
                class="p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer"
                :class="selectedDressing.id === d.id 
                  ? 'border-[#896A39] bg-[#896A39]/5 ring-1 ring-[#896A39]' 
                  : 'border-[#10161D]/10 hover:border-[#10161D]/30 bg-[#FAF8F5]/50'"
              >
                <div class="flex items-start justify-between">
                  <span class="font-display font-bold text-sm text-[#10161D]">{{ d.name }}</span>
                  <Check v-if="selectedDressing.id === d.id" class="w-4 h-4 text-[#896A39]" />
                </div>
                <div class="flex items-center justify-between text-xs font-mono text-[#1B1812]/60">
                  <span>{{ d.base }}</span>
                  <span>{{ d.cals }} kcal</span>
                </div>
              </button>
            </div>
          </div>

        </div>

        <!-- Right: Real-Time Nutrition & Order Summary Card (Sticky 4 cols) -->
        <div class="lg:col-span-4 sticky top-28 space-y-6">
          
          <div class="bg-white rounded-3xl p-6 border border-[#10161D]/10 shadow-xl space-y-5">
            <div class="border-b border-[#10161D]/10 pb-4">
              <span class="text-xs font-mono uppercase tracking-widest text-[#896A39] font-bold">Your Custom Creation</span>
              <h3 class="font-display font-black text-2xl uppercase tracking-tight text-[#10161D] mt-1">Market Table Plate</h3>
            </div>

            <!-- Plate Composition Summary -->
            <div class="space-y-3 text-xs font-mono">
              <div class="flex justify-between py-1.5 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Base:</span>
                <span class="font-bold text-[#10161D] text-right">{{ selectedBase.name }}</span>
              </div>
              <div class="flex justify-between py-1.5 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Protein:</span>
                <span class="font-bold text-[#1E3A2B] text-right">{{ selectedProtein.name }}</span>
              </div>
              <div class="flex justify-between py-1.5 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Sides (2):</span>
                <span class="font-bold text-[#10161D] text-right">
                  {{ selectedSides.map(s => s.name).join(' & ') || 'None selected' }}
                </span>
              </div>
              <div class="flex justify-between py-1.5 border-b border-[#10161D]/5">
                <span class="text-[#1B1812]/60">Dressing:</span>
                <span class="font-bold text-[#896A39] text-right">{{ selectedDressing.name }}</span>
              </div>
            </div>

            <!-- Real-Time Macros Dashboard -->
            <div class="bg-[#FAF8F5] p-4 rounded-2xl border border-[#10161D]/5 space-y-3">
              <div class="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#10161D]">
                <span>Nutritional Intelligence</span>
                <span class="text-[#3DDC84] font-semibold">100% Seed Oil-Free</span>
              </div>

              <div class="grid grid-cols-4 gap-2 text-center">
                <div class="bg-white p-2 rounded-xl border border-[#10161D]/5">
                  <div class="font-display font-black text-base text-[#10161D]">{{ totalCals }}</div>
                  <div class="text-[10px] font-mono text-[#1B1812]/60">Calories</div>
                </div>
                <div class="bg-white p-2 rounded-xl border border-[#10161D]/5">
                  <div class="font-display font-black text-base text-[#1E3A2B]">{{ totalProtein }}g</div>
                  <div class="text-[10px] font-mono text-[#1B1812]/60">Protein</div>
                </div>
                <div class="bg-white p-2 rounded-xl border border-[#10161D]/5">
                  <div class="font-display font-black text-base text-[#896A39]">{{ totalCarbs }}g</div>
                  <div class="text-[10px] font-mono text-[#1B1812]/60">Carbs</div>
                </div>
                <div class="bg-white p-2 rounded-xl border border-[#10161D]/5">
                  <div class="font-display font-black text-base text-[#10161D]">{{ totalFats }}g</div>
                  <div class="text-[10px] font-mono text-[#1B1812]/60">Clean Fats</div>
                </div>
              </div>
            </div>

            <!-- Price & Add Button -->
            <div class="pt-2 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-[#1B1812]/60 uppercase">Total Price</span>
                <span class="font-display font-black text-3xl text-[#10161D]">${{ totalPrice.toFixed(2) }}</span>
              </div>

              <button 
                type="button"
                @click="addPlateToCart"
                class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag class="w-4 h-4 text-white" />
                <span>Add Custom Plate To Order</span>
              </button>
            </div>

          </div>

          <!-- Trust Callout -->
          <div class="bg-[#10161D] text-[#FAF8F5] p-5 rounded-3xl border border-white/10 flex items-center gap-3">
            <ShieldCheck class="w-6 h-6 text-[#C9A55C] flex-shrink-0" />
            <p class="text-xs font-mono text-white/80 leading-relaxed">
              Every component is cooked in pure avocado oil or cold-pressed EVOO. Zero seed oils guaranteed.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { cartActions } from '../stores/cart.js';
import { Utensils, Check, ShoppingBag, ShieldCheck } from 'lucide-vue-next';

const baseOptions = [
  { id: 'b1', name: 'Warm Tuscan Quinoa', tag: 'Organic & GF', cals: 180, protein: 6, carbs: 32, fats: 3 },
  { id: 'b2', name: 'Wild Farro & Brown Rice', tag: 'Ancient Grains', cals: 210, protein: 7, carbs: 42, fats: 2 },
  { id: 'b3', name: 'Organic Baby Greens & Arugula', tag: 'Keto • Low Carb', cals: 30, protein: 2, carbs: 4, fats: 0 },
  { id: 'b4', name: 'Saffron Herb Jasmine Rice', tag: 'House Signature', cals: 200, protein: 4, carbs: 44, fats: 2 },
];

const proteinOptions = [
  { id: 'p1', name: 'Hudson Valley Flank Steak', tierPrice: '$18.50', basePrice: 18.50, tag: 'Grass-Fed Sirloin', cals: 260, protein: 36, carbs: 0, fats: 12 },
  { id: 'p2', name: 'Lemon Herb Pasture Chicken', tierPrice: '$16.50', basePrice: 16.50, tag: 'Antibiotic-Free', cals: 210, protein: 32, carbs: 1, fats: 8 },
  { id: 'p3', name: 'Crisp Seared Wild Salmon', tierPrice: '$19.50', basePrice: 19.50, tag: 'High Omega-3', cals: 280, protein: 34, carbs: 0, fats: 15 },
  { id: 'p4', name: 'Saffron Garlic Grilled Shrimp', tierPrice: '$18.95', basePrice: 18.95, tag: 'Wild Caught', cals: 170, protein: 28, carbs: 2, fats: 4 },
  { id: 'p5', name: 'Miso Roasted Organic Tofu', tierPrice: '$15.50', basePrice: 15.50, tag: '100% Vegan', cals: 190, protein: 20, carbs: 6, fats: 10 },
];

const sideOptions = [
  { id: 's1', name: 'Charred Broccolini w/ Garlic EVOO', cooking: 'Sautéed in EVOO', cals: 80, protein: 4, carbs: 8, fats: 5 },
  { id: 's2', name: 'Roasted Heirloom Carrots w/ Tahini', cooking: 'Slow Roasted', cals: 95, protein: 2, carbs: 14, fats: 4 },
  { id: 's3', name: 'Sweet Potato Medallions', cooking: 'Herb Seared', cals: 120, protein: 2, carbs: 26, fats: 2 },
  { id: 's4', name: 'Persian Cucumber & Mint Slaw', cooking: 'Cold-Pressed', cals: 45, protein: 1, carbs: 6, fats: 2 },
  { id: 's5', name: 'French Green Beans w/ Shallots', cooking: 'Pan Seared', cals: 70, protein: 3, carbs: 7, fats: 4 },
];

const dressingOptions = [
  { id: 'd1', name: 'Chimichurri Herb EVOO', base: 'Cold-Pressed EVOO', cals: 110, protein: 0, carbs: 1, fats: 12 },
  { id: 'd2', name: 'Truffle Meyer Lemon Vinaigrette', base: 'Greek EVOO', cals: 95, protein: 0, carbs: 2, fats: 10 },
  { id: 'd3', name: 'Green Goddess Avocado Emulsion', base: 'Hass Avocado', cals: 120, protein: 1, carbs: 3, fats: 11 },
  { id: 'd4', name: 'Smoked Romesco Sauce', base: 'Almond & Pepper', cals: 105, protein: 2, carbs: 4, fats: 9 },
];

const selectedBase = ref(baseOptions[0]);
const selectedProtein = ref(proteinOptions[0]);
const selectedSides = ref([sideOptions[0], sideOptions[2]]);
const selectedDressing = ref(dressingOptions[0]);

function isSideSelected(id) {
  return selectedSides.value.some(s => s.id === id);
}

function toggleSide(side) {
  const idx = selectedSides.value.findIndex(s => s.id === side.id);
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

const totalPrice = computed(() => {
  return selectedProtein.value.basePrice;
});

const totalCals = computed(() => {
  const sidesCals = selectedSides.value.reduce((acc, s) => acc + s.cals, 0);
  return selectedBase.value.cals + selectedProtein.value.cals + sidesCals + selectedDressing.value.cals;
});

const totalProtein = computed(() => {
  const sidesPro = selectedSides.value.reduce((acc, s) => acc + s.protein, 0);
  return selectedBase.value.protein + selectedProtein.value.protein + sidesPro + selectedDressing.value.protein;
});

const totalCarbs = computed(() => {
  const sidesCarbs = selectedSides.value.reduce((acc, s) => acc + s.carbs, 0);
  return selectedBase.value.carbs + selectedProtein.value.carbs + sidesCarbs + selectedDressing.value.carbs;
});

const totalFats = computed(() => {
  const sidesFats = selectedSides.value.reduce((acc, s) => acc + s.fats, 0);
  return selectedBase.value.fats + selectedProtein.value.fats + sidesFats + selectedDressing.value.fats;
});

function addPlateToCart() {
  const desc = `${selectedBase.value.name} + ${selectedProtein.value.name} + ${selectedSides.value.map(s => s.name).join(', ')} + ${selectedDressing.value.name}`;
  cartActions.addItem({
    id: `custom-plate-${Date.now()}`,
    name: `Custom Market Plate (${selectedProtein.value.name})`,
    price: totalPrice.value,
    image: '/assets/images/grain-bowl.jpg',
    category: 'Market Bowls',
    customNotes: desc
  });
  cartActions.openCart();
}
</script>
