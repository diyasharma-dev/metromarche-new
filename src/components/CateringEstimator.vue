<template>
  <section class="py-20 bg-[#1B222C] text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-15">
      <img src="/assets/images/catering-spread.jpg" alt="Corporate Catering Spread" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Catering Pitch -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#896A39]/20 text-amber-200 border border-[#896A39]/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Midtown Corporate Catering</span>
          </div>
          
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            Catering That Feels Fresh, Thoughtful &amp; Delicious.
          </h2>

          <p class="text-stone-300 text-base leading-relaxed">
            At Metro Marché, we believe corporate catering should never feel like an afterthought. Whether you need executive boxed meals for a board presentation, a full hot market buffet for 100 colleagues, or morning breakfast trays, our dedicated catering desk delivers across Manhattan on time.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck class="w-6 h-6 text-[#896A39] mb-2" />
              <h4 class="font-bold text-white text-sm">100% Seed Oil Free</h4>
              <p class="text-xs text-stone-400 mt-1">Keep your office energized without afternoon brain fog.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock class="w-6 h-6 text-amber-300 mb-2" />
              <h4 class="font-bold text-white text-sm">Guaranteed On-Time Delivery</h4>
              <p class="text-xs text-stone-400 mt-1">Prompt Manhattan delivery with white-glove setup.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Tag class="w-6 h-6 text-[#896A39] mb-2" />
              <h4 class="font-bold text-white text-sm">Individually Labeled</h4>
              <p class="text-xs text-stone-400 mt-1">All dietary requirements (GF, Vegan, Dairy-Free) clearly noted.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <UserCheck class="w-6 h-6 text-amber-300 mb-2" />
              <h4 class="font-bold text-white text-sm">Dedicated Catering Manager</h4>
              <p class="text-xs text-stone-400 mt-1">Direct single point of contact for proposals and invoices.</p>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap gap-4">
            <router-link to="/catering" class="px-8 py-3.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-sm shadow-xl transition">
              Explore Catering Menus
            </router-link>
            <a href="tel:2126973334" class="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition flex items-center space-x-2">
              <Phone class="w-4 h-4 text-[#896A39]" />
              <span>(212) 697-3334</span>
            </a>
          </div>
        </div>

        <!-- Right: Interactive Catering Budget Calculator -->
        <div class="lg:col-span-5">
          <div class="bg-white text-[#1B222C] rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6">
            
            <div class="border-b border-stone-100 pb-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#896A39]">Real-Time Estimator</span>
              <h3 class="text-2xl font-serif font-bold text-[#1B222C] mt-1">Catering Calculator</h3>
              <p class="text-xs text-stone-500">Calculate team meal budget in seconds.</p>
            </div>

            <!-- Guest Slider -->
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm font-semibold">
                <span>Guest Count</span>
                <span class="text-[#896A39] font-bold text-base px-3 py-0.5 rounded-lg bg-[#F7F1E6]">
                  {{ guests }} People
                </span>
              </div>
              <input v-model.number="guests" type="range" min="5" max="150" step="5" class="w-full accent-[#896A39] cursor-pointer" />
              <div class="flex justify-between text-[11px] text-stone-400">
                <span>5 guests</span>
                <span>75 guests</span>
                <span>150+ guests</span>
              </div>
            </div>

            <!-- Package Selection -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-stone-800">Select Package Style</label>
              <select v-model="selectedPackageId" class="w-full p-3 rounded-xl border border-stone-300 text-sm focus:border-[#896A39] focus:outline-none bg-stone-50 font-medium">
                <option v-for="pkg in packages" :key="pkg.id" :value="pkg.id">
                  {{ pkg.name }} (${{ pkg.price }} / person)
                </option>
              </select>
              <p class="text-[11px] text-stone-500 mt-1">{{ currentPkg.desc }}</p>
            </div>

            <!-- Summary Card -->
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
              <div class="flex justify-between text-xs text-stone-600">
                <span>Cost per Guest:</span>
                <span class="font-bold text-stone-900">${{ currentPkg.price }}.00</span>
              </div>
              <div class="flex justify-between items-baseline pt-2 border-t border-stone-200">
                <span class="text-sm font-bold text-stone-800">Estimated Total:</span>
                <span class="text-2xl font-serif font-bold text-[#896A39]">${{ totalCost.toLocaleString() }}.00</span>
              </div>
              <p class="text-[11px] text-stone-500 pt-1">*Includes serving tongs, biodegradable plates, cutlery &amp; dressings.</p>
            </div>

            <button @click="$emit('open-catering', { guests, pkg: currentPkg, total: totalCost })"
                    class="w-full py-3.5 rounded-xl bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-center block text-sm shadow-md transition">
              Request Official Proposal
            </button>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Sparkles, ShieldCheck, Clock, Tag, UserCheck, Phone } from 'lucide-vue-next';

defineEmits(['open-catering']);

const guests = ref(25);
const selectedPackageId = ref('market');

const packages = [
  { id: 'breakfast', name: 'Artisan Breakfast Board', price: 16, desc: 'Pastries, pasture-raised egg wraps, seasonal fruit' },
  { id: 'boxed', name: 'Executive Boxed Lunches', price: 22, desc: 'Hot entree or artisan bowl with side & dessert' },
  { id: 'market', name: 'Hot Market Table Buffet', price: 26, desc: '2 proteins, 3 roasted seasonal sides, grains' },
  { id: 'sandwich', name: 'Artisan Sandwich Platter', price: 20, desc: 'Assorted sourdough sandwiches, chips & salad bowl' }
];

const currentPkg = computed(() => {
  return packages.find(p => p.id === selectedPackageId.value) || packages[2];
});

const totalCost = computed(() => {
  return guests.value * currentPkg.value.price;
});
</script>
