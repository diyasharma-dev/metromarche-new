<template>
  <div class="bg-[#FAF8F5] min-h-screen">
    <!-- Catering Hero -->
    <section class="bg-[#10161D] text-white py-16 sm:py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-25">
        <img src="/assets/images/catering-spread.jpg" alt="Corporate Catering Midtown" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <span class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#896A39]/20 text-amber-200 border border-[#896A39]/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Midtown Manhattan Corporate Catering</span>
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight">
          Thoughtful, Energizing Catering for Teams &amp; Events
        </h1>
        <p class="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
          Say goodbye to sluggish afternoon meetings. Metro Marché serves 100% seed-oil-free corporate luncheons, executive boxed meals, and morning breakfast boards across Manhattan.
        </p>
        <div class="pt-4 flex flex-wrap justify-center gap-4">
          <a href="#calculator" class="px-8 py-3.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-sm shadow-xl transition">
            Calculate Event Budget
          </a>
          <button @click="$emit('open-catering')" class="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition">
            Request Proposal Quote
          </button>
        </div>
      </div>
    </section>

    <!-- Why Metro Marche Catering -->
    <section class="py-16 bg-white border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-serif font-bold text-[#1B222C]">Why NYC Companies Choose Metro Marché</h2>
          <p class="text-stone-500 text-sm mt-2">Delivering excellence to Goldman Sachs, Bloomberg, law firms, and tech hubs in Midtown.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 space-y-3">
            <ShieldCheck class="w-8 h-8 text-[#896A39]" />
            <h3 class="font-bold text-base text-[#1B222C]">100% Seed Oil Free</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Cooked exclusively with cold-pressed EVOO and avocado oil. Zero canola or soy so your team stays sharp.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 space-y-3">
            <Clock class="w-8 h-8 text-[#896A39]" />
            <h3 class="font-bold text-base text-[#1B222C]">On-Time Manhattan Setup</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Prompt delivery with full white-glove setup, compostable serving trays, and eco-friendly utensils.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 space-y-3">
            <Tag class="w-8 h-8 text-[#896A39]" />
            <h3 class="font-bold text-base text-[#1B222C]">Individually Labeled</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Every box and tray clearly lists ingredients, allergen warnings, GF, Vegan, and Dairy-Free markings.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200 space-y-3">
            <Users class="w-8 h-8 text-[#896A39]" />
            <h3 class="font-bold text-base text-[#1B222C]">Dedicated Catering Desk</h3>
            <p class="text-xs text-stone-600 leading-relaxed">Direct phone and email contact with our executive catering manager for quick invoicing and custom menus.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Catering Packages -->
    <section class="py-20 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="text-xs uppercase font-bold tracking-wider text-[#896A39] bg-[#F7F1E6] px-3.5 py-1 rounded-full border border-[#896A39]/20">Curated Menus</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#1B222C]">Signature Catering Packages</h2>
          <p class="text-stone-600 text-sm">Flexible options designed for groups of 10 to 200+ guests.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Package 1 -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img src="/assets/images/catering-boxes.jpg" alt="Executive Boxed Lunches" class="w-full h-full object-cover" />
                <span class="absolute top-3 right-3 bg-white/95 text-[#1B222C] font-bold text-sm px-3 py-1 rounded-full shadow-sm">$22 / Person</span>
              </div>
              <div class="p-6 space-y-3">
                <h3 class="text-xl font-serif font-bold text-[#1B222C]">Executive Boxed Lunches</h3>
                <p class="text-xs text-stone-600 leading-relaxed">Individual hot entrees or artisan bowls packaged with side salad, fresh fruit, and gluten-free scratch cookie.</p>
                <ul class="text-xs text-stone-500 space-y-1.5 pt-2 border-t border-stone-100">
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> 1 Entree (Steak, Salmon, Chicken, Vegan)</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> 1 Seasonal Garden Side</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Hand-crafted dessert &amp; sparkling water</li>
                </ul>
              </div>
            </div>
            <div class="p-6 pt-0">
              <button @click="$emit('open-catering')" class="w-full py-2.5 rounded-xl bg-[#896A39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6D5329] transition">
                Request This Package
              </button>
            </div>
          </div>

          <!-- Package 2 -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm border-2 border-[#896A39] flex flex-col justify-between hover:shadow-xl transition relative">
            <span class="absolute top-2 left-2 z-10 bg-[#896A39] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full">Most Popular</span>
            <div>
              <div class="h-48 overflow-hidden relative">
                <img src="/assets/images/market-hot-table.jpg" alt="Hot Market Table Buffet" class="w-full h-full object-cover" />
                <span class="absolute top-3 right-3 bg-white/95 text-[#1B222C] font-bold text-sm px-3 py-1 rounded-full shadow-sm">$26 / Person</span>
              </div>
              <div class="p-6 space-y-3">
                <h3 class="text-xl font-serif font-bold text-[#1B222C]">Hot Market Buffet Spread</h3>
                <p class="text-xs text-stone-600 leading-relaxed">Our famous Midtown market table brought to your conference room. Warm chaffing trays with full service setup.</p>
                <ul class="text-xs text-stone-500 space-y-1.5 pt-2 border-t border-stone-100">
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Choice of 2 Hot Proteins</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Choice of 3 Seasonal Roasted Sides</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Organic Quinoa / Brown Rice &amp; Rolls</li>
                </ul>
              </div>
            </div>
            <div class="p-6 pt-0">
              <button @click="$emit('open-catering')" class="w-full py-2.5 rounded-xl bg-[#896A39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6D5329] transition">
                Request This Package
              </button>
            </div>
          </div>

          <!-- Package 3 -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img src="/assets/images/croissant-bakery.jpg" alt="Breakfast Bakery Spread" class="w-full h-full object-cover" />
                <span class="absolute top-3 right-3 bg-white/95 text-[#1B222C] font-bold text-sm px-3 py-1 rounded-full shadow-sm">$16 / Person</span>
              </div>
              <div class="p-6 space-y-3">
                <h3 class="text-xl font-serif font-bold text-[#1B222C]">Morning Breakfast Board</h3>
                <p class="text-xs text-stone-600 leading-relaxed">Fresh Parisian butter croissants, pasture-raised egg breakfast wraps, Greek yogurt parfaits, and fresh berries.</p>
                <ul class="text-xs text-stone-500 space-y-1.5 pt-2 border-t border-stone-100">
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Freshly baked breakfast pastries</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Warm egg &amp; avocado brioche sliders</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Organic cold-pressed juice carafes</li>
                </ul>
              </div>
            </div>
            <div class="p-6 pt-0">
              <button @click="$emit('open-catering')" class="w-full py-2.5 rounded-xl bg-[#896A39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6D5329] transition">
                Request This Package
              </button>
            </div>
          </div>

          <!-- Package 4 -->
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <div class="h-48 overflow-hidden relative">
                <img src="/assets/images/artisan-sandwich.jpg" alt="Artisan Sandwich Platter" class="w-full h-full object-cover" />
                <span class="absolute top-3 right-3 bg-white/95 text-[#1B222C] font-bold text-sm px-3 py-1 rounded-full shadow-sm">$20 / Person</span>
              </div>
              <div class="p-6 space-y-3">
                <h3 class="text-xl font-serif font-bold text-[#1B222C]">Artisan Sandwich Platter</h3>
                <p class="text-xs text-stone-600 leading-relaxed">Assorted wraps and sourdough paninis made with turkey club, grilled chicken avocado, caprese, and vegan hummus.</p>
                <ul class="text-xs text-stone-500 space-y-1.5 pt-2 border-t border-stone-100">
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Assorted quartered sandwiches &amp; wraps</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Large harvest kale bowl with dressing</li>
                  <li class="flex items-center gap-1.5"><Check class="w-3.5 h-3.5 text-[#896A39]" /> Crisp root veggie chips</li>
                </ul>
              </div>
            </div>
            <div class="p-6 pt-0">
              <button @click="$emit('open-catering')" class="w-full py-2.5 rounded-xl bg-[#896A39] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6D5329] transition">
                Request This Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Budget Calculator Section -->
    <section id="calculator" class="py-20 bg-[#1B222C] text-white scroll-mt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white text-[#1B222C] rounded-3xl p-8 sm:p-10 shadow-2xl border border-stone-200 space-y-6">
          <div class="text-center space-y-2 border-b border-stone-200 pb-6">
            <span class="text-xs font-bold uppercase tracking-wider text-[#896A39]">Live Instant Quote</span>
            <h3 class="text-3xl font-serif font-bold text-[#1B222C]">Catering Budget Estimator</h3>
            <p class="text-xs text-stone-500">Slide to select your guest count and choose a menu style for an immediate estimate.</p>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <label class="text-sm font-bold text-stone-800">Number of Guests:</label>
              <span class="text-lg font-bold text-[#896A39] bg-[#F7F1E6] px-4 py-1 rounded-xl border border-[#896A39]/30">
                {{ guests }} People
              </span>
            </div>
            <input v-model.number="guests" type="range" min="10" max="200" step="5" class="w-full accent-[#896A39] cursor-pointer" />
            <div class="flex justify-between text-[11px] text-stone-400">
              <span>10 guests</span>
              <span>100 guests</span>
              <span>200+ guests</span>
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-bold text-stone-800">Package Style:</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="pkg in packages" :key="pkg.id"
                   @click="selectedPkg = pkg"
                   class="p-4 rounded-2xl border cursor-pointer transition text-xs flex justify-between items-center"
                   :class="selectedPkg.id === pkg.id ? 'bg-[#F7F1E6] border-[#896A39] ring-2 ring-[#896A39]/20' : 'bg-stone-50 border-stone-200 hover:bg-stone-100'">
                <div>
                  <strong class="text-stone-900 block font-serif text-sm">{{ pkg.name }}</strong>
                  <span class="text-stone-500">{{ pkg.desc }}</span>
                </div>
                <span class="font-bold text-[#896A39] text-sm shrink-0 ml-2">${{ pkg.price }}/p</span>
              </div>
            </div>
          </div>

          <!-- Total Calculation -->
          <div class="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
            <div class="flex justify-between text-xs text-stone-600">
              <span>Cost per guest:</span>
              <strong class="text-stone-900 font-bold">${{ selectedPkg.price }}.00</strong>
            </div>
            <div class="flex justify-between items-baseline pt-2 border-t border-stone-200">
              <span class="text-base font-bold text-stone-800">Estimated Total:</span>
              <span class="text-3xl font-serif font-bold text-[#896A39]">${{ (guests * selectedPkg.price).toLocaleString() }}.00</span>
            </div>
            <p class="text-[11px] text-stone-400">*Includes eco-friendly serving cutlery, biodegradable plates, napkins &amp; scratch dressings.</p>
          </div>

          <button @click="$emit('open-catering', { guests, pkg: selectedPkg, total: guests * selectedPkg.price })" class="w-full py-4 rounded-2xl bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition">
            Request Official Proposal for {{ guests }} Guests (${{ (guests * selectedPkg.price).toLocaleString() }})
          </button>
        </div>
      </div>
    </section>

    <!-- Direct Contact Banner -->
    <section class="py-12 bg-[#F7F1E6] border-t border-[#896A39]/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h3 class="text-xl font-serif font-bold text-[#1B222C]">Have a custom request or need same-day catering?</h3>
        <p class="text-xs sm:text-sm text-stone-600">Speak directly with our Midtown catering coordinator:</p>
        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <a href="tel:2126973334" class="px-6 py-2.5 rounded-full bg-[#1B222C] text-white text-xs font-bold hover:bg-[#896A39] transition flex items-center gap-1.5">
            <Phone class="w-3.5 h-3.5" />
            <span>Call (212) 697-3334</span>
          </a>
          <a href="mailto:catering@metromarche.com" class="px-6 py-2.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-bold hover:border-[#896A39] transition flex items-center gap-1.5">
            <Mail class="w-3.5 h-3.5" />
            <span>Email catering@metromarche.com</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Sparkles, ShieldCheck, Clock, Tag, Users, Check, Phone, Mail } from 'lucide-vue-next';

defineEmits(['open-catering']);

const guests = ref(25);

const packages = [
  { id: 'boxed', name: 'Executive Boxed Lunches', price: 22, desc: 'Hot entree, side & dessert' },
  { id: 'buffet', name: 'Hot Market Table Buffet', price: 26, desc: '2 proteins, 3 sides, grains' },
  { id: 'breakfast', name: 'Morning Breakfast Board', price: 16, desc: 'Pastries, eggs, fruit & juice' },
  { id: 'sandwich', name: 'Artisan Sandwich Platter', price: 20, desc: 'Assorted wraps, chips & bowl' }
];

const selectedPkg = ref(packages[1]);
</script>
