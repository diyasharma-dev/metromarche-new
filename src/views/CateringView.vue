<template>
  <div class="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Catering Hero -->
      <section class="bg-[#10161D] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 lg:p-20 border border-white/10 shadow-2xl relative overflow-hidden">
        <div class="max-w-3xl space-y-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <Users class="w-3.5 h-3.5" />
            <span>Midtown Manhattan Corporate Catering</span>
          </div>
          <h1 class="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95] text-white">
            Fresh, thoughtful &amp; <br />
            <span class="font-serif italic font-normal text-[#C9A55C] lowercase">corporate catering</span>.
          </h1>
          <p class="text-base sm:text-lg text-white/80 leading-relaxed font-sans font-light">
            Chef-crafted salads, sandwiches, breakfast spreads, boxed lunches and hot entrées for office meetings, team lunches and client events. Fast delivery, consistent quality, menus for every taste.
          </p>
          <div class="pt-2 flex flex-wrap items-center gap-3">
            <a 
              href="https://order.metromarche.com/order/metro-marche-30-west-57-nomaw" 
              target="_blank" 
              rel="noopener"
              class="px-8 py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Order Catering Online</span>
              <ArrowRight class="w-4 h-4" />
            </a>
            <button 
              type="button"
              @click="cartActions.openCateringModal({ guests, package: selectedPackage.name })"
              class="px-7 py-4 bg-[#1E3A2B] hover:bg-[#13271C] text-[#C9A55C] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all border border-[#C9A55C]/30 flex items-center gap-2 cursor-pointer"
            >
              <FileText class="w-4 h-4" />
              <span>Request Custom Proposal</span>
            </button>
            <a 
              href="tel:+12126973334" 
              class="px-6 py-4 bg-transparent border border-white/20 hover:border-white text-white font-display text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone class="w-4 h-4 text-[#C9A55C]" />
              <span>(212) 697-3334</span>
            </a>
            <a 
              href="mailto:catering@metromarche.com" 
              class="px-6 py-4 bg-white/10 hover:bg-white/20 text-[#C9A55C] font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all flex items-center gap-2"
            >
              <Mail class="w-4 h-4" />
              <span>catering@metromarche.com</span>
            </a>
          </div>
        </div>

        <div class="hidden lg:block absolute -right-10 -bottom-10 w-96 h-96 opacity-25 pointer-events-none rounded-full overflow-hidden">
          <img src="/assets/images/catering-spread.jpg" alt="Catering tray" class="w-full h-full object-cover" />
        </div>
      </section>

      <!-- Why Metro Marché Catering (4 Pillars with Lucide Icons) -->
      <section class="space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="inline-block px-3.5 py-1 bg-white border border-[#10161D]/10 text-[#896A39] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
            The Executive Standard
          </span>
          <h2 class="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#10161D]">
            Why NYC Firms Choose <span class="font-serif italic font-normal text-[#896A39] lowercase">Marché</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-[#1E3A2B] text-[#3DDC84] flex items-center justify-center font-bold">
              <ShieldCheck class="w-5 h-5" />
            </div>
            <h3 class="font-display font-bold text-lg uppercase text-[#10161D]">100% Seed Oil Free</h3>
            <p class="text-xs text-[#1B1812]/75 leading-relaxed font-sans">
              Cooked exclusively with cold-pressed EVOO and avocado oil. Zero canola or soy so your executives stay sharp.
            </p>
          </div>
          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-[#896A39]/15 text-[#896A39] flex items-center justify-center font-bold">
              <Clock class="w-5 h-5" />
            </div>
            <h3 class="font-display font-bold text-lg uppercase text-[#10161D]">Punctual White Glove Setup</h3>
            <p class="text-xs text-[#1B1812]/75 leading-relaxed font-sans">
              Guaranteed on-time delivery with full boardroom setup, compostable display platters, and eco-friendly utensils.
            </p>
          </div>
          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-[#1E3A2B] text-[#C9A55C] flex items-center justify-center font-bold">
              <Tag class="w-5 h-5" />
            </div>
            <h3 class="font-display font-bold text-lg uppercase text-[#10161D]">Individually Labeled</h3>
            <p class="text-xs text-[#1B1812]/75 leading-relaxed font-sans">
              Every box and platter clearly lists guest names, ingredients, allergen warnings, GF, Vegan, and Dairy-Free markings.
            </p>
          </div>
          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-[#10161D] text-white flex items-center justify-center font-bold">
              <Phone class="w-5 h-5 text-[#C9A55C]" />
            </div>
            <h3 class="font-display font-bold text-lg uppercase text-[#10161D]">Dedicated Concierge</h3>
            <p class="text-xs text-[#1B1812]/75 leading-relaxed font-sans">
              Direct line to our executive catering manager for quick invoicing, corporate net-30 accounts, and custom tastings.
            </p>
          </div>
        </div>
      </section>

      <!-- How It Works (from metromarche.mirchmedia01.workers.dev/catering) -->
      <section class="space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="inline-block px-3.5 py-1 bg-white border border-[#10161D]/10 text-[#896A39] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
            Seamless Ordering
          </span>
          <h2 class="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#10161D]">
            How It <span class="font-serif italic font-normal text-[#896A39] lowercase">works</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <span class="font-serif italic text-4xl text-[#896A39]">1.</span>
            <h3 class="font-display font-bold text-xl uppercase text-[#10161D]">Order Or Call</h3>
            <p class="text-xs sm:text-sm text-[#1B1812]/75 font-sans leading-relaxed">
              Order catering online or call the team directly at <a href="tel:+12126973334" class="font-mono font-bold text-[#896A39] underline">(212) 697-3334</a>.
            </p>
          </div>

          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <span class="font-serif italic text-4xl text-[#896A39]">2.</span>
            <h3 class="font-display font-bold text-xl uppercase text-[#10161D]">We Prepare</h3>
            <p class="text-xs sm:text-sm text-[#1B1812]/75 font-sans leading-relaxed">
              Everything is made fresh from scratch daily, seed oil free wherever it's tagged.
            </p>
          </div>

          <div class="bg-white p-7 rounded-3xl border border-[#10161D]/10 shadow-sm space-y-3">
            <span class="font-serif italic text-4xl text-[#896A39]">3.</span>
            <h3 class="font-display font-bold text-xl uppercase text-[#10161D]">We Deliver</h3>
            <p class="text-xs sm:text-sm text-[#1B1812]/75 font-sans leading-relaxed">
              Fast, punctual delivery directly to your Manhattan office, set up and ready for the meeting.
            </p>
          </div>
        </div>
      </section>

      <!-- Packages Grid -->
      <section class="space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="inline-block px-3.5 py-1 bg-white border border-[#10161D]/10 text-[#896A39] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
            Curated Formats
          </span>
          <h2 class="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#10161D]">
            Catering <span class="font-serif italic font-normal text-[#896A39] lowercase">packages</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Package 1: Breakfast -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#10161D]/10 shadow-lg flex flex-col justify-between">
            <div class="space-y-4">
              <span class="px-3 py-1 bg-[#FAF8F5] text-[#896A39] font-mono text-xs font-bold uppercase rounded-full">
                Morning Meetings
              </span>
              <h3 class="font-display font-black text-3xl uppercase text-[#10161D]">
                Artisan Breakfast Spread
              </h3>
              <div class="font-mono text-2xl font-bold text-[#896A39]">
                $18 <span class="text-xs text-[#1B1812]/60 font-normal">/ guest</span>
              </div>
              <p class="text-xs text-[#1B1812]/75 font-sans leading-relaxed">
                Hand-rolled Parisian croissants, mini avocado toasts, fresh seasonal berry bowls, and organic Greek yogurt parfaits with homemade GF granola.
              </p>
              <ul class="text-xs font-mono space-y-2 text-[#1B1812]/80 pt-3 border-t border-[#10161D]/10">
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Fresh Baked Viennoiserie</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Smashed Avocado Toast Bites</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Sliced Seasonal Fruit Display</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Cold Brew &amp; Tea Service</li>
              </ul>
            </div>
            <button 
              type="button"
              @click="cartActions.openCateringModal({ guests: 20, package: 'Morning Breakfast & Pastry Spread ($18/guest)' })"
              class="mt-8 w-full py-3.5 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-xl transition-colors cursor-pointer"
            >
              Order Breakfast Spread
            </button>
          </div>

          <!-- Package 2: Executive Boxed Lunch (Most Popular) -->
          <div class="bg-[#10161D] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#896A39] shadow-2xl flex flex-col justify-between relative transform md:-translate-y-2">
            <div class="absolute -top-3.5 right-6 bg-[#896A39] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
              Most Popular
            </div>
            <div class="space-y-4">
              <span class="px-3 py-1 bg-white/10 text-[#C9A55C] font-mono text-xs font-bold uppercase rounded-full">
                Individual Boxes
              </span>
              <h3 class="font-display font-black text-3xl uppercase text-white">
                Executive Boxed Lunches
              </h3>
              <div class="font-mono text-2xl font-bold text-[#C9A55C]">
                $24 <span class="text-xs text-white/60 font-normal">/ guest</span>
              </div>
              <p class="text-xs text-white/80 font-sans leading-relaxed">
                Individually labeled boxes with guest names. Includes choice of signature sandwich or grain bowl, house side salad or taro chips, and fresh bakery cookie.
              </p>
              <ul class="text-xs font-mono space-y-2 text-white/80 pt-3 border-t border-white/10">
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Individually Labeled With Names</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Choice of 8 Signature Sandwiches &amp; Bowls</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Side Salad &amp; Root Chips Included</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Scratch-Baked Valrhona Cookie</li>
              </ul>
            </div>
            <button 
              type="button"
              @click="cartActions.openCateringModal({ guests: 30, package: 'Executive Boxed Lunches ($24/guest)' })"
              class="mt-8 w-full py-3.5 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-extrabold rounded-xl transition-colors shadow-lg cursor-pointer"
            >
              Order Boxed Lunches
            </button>
          </div>

          <!-- Package 3: Grand Hot Buffet -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#10161D]/10 shadow-lg flex flex-col justify-between">
            <div class="space-y-4">
              <span class="px-3 py-1 bg-[#FAF8F5] text-[#896A39] font-mono text-xs font-bold uppercase rounded-full">
                Hot Buffet
              </span>
              <h3 class="font-display font-black text-3xl uppercase text-[#10161D]">
                Haute Market Table Buffet
              </h3>
              <div class="font-mono text-2xl font-bold text-[#896A39]">
                $32 <span class="text-xs text-[#1B1812]/60 font-normal">/ guest</span>
              </div>
              <p class="text-xs text-[#1B1812]/75 font-sans leading-relaxed">
                Chafing dish setup with saffron vegetable rice, lemon garlic grilled shrimp or flank steak, charred broccoli, roasted sweet potatoes, and signature EVOO dressings.
              </p>
              <ul class="text-xs font-mono space-y-2 text-[#1B1812]/80 pt-3 border-t border-[#10161D]/10">
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> Hot Chafing Dishes &amp; Eco Setup</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> 2 Chef Warm Pasture Proteins</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> 3 Hot Market Sides &amp; Grain Bases</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4 text-[#3DDC84]" /> House Dressings &amp; Herb Sauces</li>
              </ul>
            </div>
            <button 
              type="button"
              @click="cartActions.openCateringModal({ guests: 50, package: 'Haute Market Table Buffet ($32/guest)' })"
              class="mt-8 w-full py-3.5 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-xl transition-colors cursor-pointer"
            >
              Order Market Buffet
            </button>
          </div>
        </div>
      </section>

      <!-- Live Event Calculator Box -->
      <section class="bg-white rounded-3xl p-6 sm:p-12 border border-[#10161D]/10 shadow-xl">
        <div class="max-w-3xl mx-auto space-y-8">
          <div class="text-center space-y-2">
            <span class="inline-block px-3.5 py-1 bg-[#FAF8F5] border border-[#10161D]/10 text-[#896A39] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
              Live Budget Calculator
            </span>
            <h3 class="font-display font-black text-3xl sm:text-4xl uppercase text-[#10161D]">
              Estimate Your Event Total
            </h3>
          </div>

          <!-- Slider -->
          <div class="space-y-2">
            <div class="flex justify-between items-center font-mono">
              <span class="text-xs font-bold uppercase text-[#10161D]">Attendees / Guests:</span>
              <span class="text-2xl font-display font-black text-[#896A39]">{{ guests }} People</span>
            </div>
            <input 
              v-model.number="guests" 
              type="range" 
              min="10" 
              max="350" 
              step="5"
              class="w-full accent-[#896A39] cursor-pointer h-2 bg-[#FAF8F5] rounded-lg"
            />
          </div>

          <!-- Package Selection -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button 
              v-for="pkg in packages" 
              :key="pkg.name"
              type="button"
              @click="selectedPackage = pkg"
              class="p-4 rounded-2xl border text-center transition-all cursor-pointer"
              :class="selectedPackage.name === pkg.name 
                ? 'bg-[#10161D] text-white border-[#10161D] font-bold shadow-md' 
                : 'bg-[#FAF8F5] text-[#10161D] border-[#10161D]/10 hover:border-[#10161D]/30'"
            >
              <div class="font-display text-sm uppercase">{{ pkg.short }}</div>
              <div class="font-mono text-xs mt-1 font-bold text-[#896A39]">${{ pkg.price }} / person</div>
            </button>
          </div>

          <!-- Breakdown Box -->
          <div class="bg-[#FAF8F5] p-5 rounded-2xl border border-[#10161D]/10 space-y-2 font-mono text-xs">
            <div class="flex justify-between text-[#1B1812]/75">
              <span>Food &amp; Beverage Subtotal ({{ guests }} × ${{ selectedPackage.price }}):</span>
              <span>${{ (guests * selectedPackage.price).toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-[#1B1812]/75">
              <span>Estimated NYC Sales Tax (8.875%):</span>
              <span>${{ (guests * selectedPackage.price * 0.08875).toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-base font-bold text-[#10161D] pt-2 border-t border-[#10161D]/15">
              <span>Estimated Total Budget:</span>
              <span class="text-[#896A39] text-xl font-display font-black">${{ (guests * selectedPackage.price * 1.08875).toFixed(2) }}</span>
            </div>
          </div>

          <button 
            type="button"
            @click="cartActions.openCateringModal({ guests, package: selectedPackage.name })"
            class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-2xl transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText class="w-4 h-4" />
            <span>Lock In Proposal for {{ guests }} Guests</span>
          </button>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { cartActions } from '../stores/cart.js';
import { 
  Users, 
  FileText, 
  Phone, 
  Mail,
  ArrowRight,
  ShieldCheck, 
  Clock, 
  Tag, 
  CheckCircle2 
} from 'lucide-vue-next';

const guests = ref(35);

const packages = [
  { name: 'Morning Breakfast & Pastry Spread ($18/guest)', short: 'Breakfast Spread', price: 18 },
  { name: 'Executive Boxed Lunches ($24/guest)', short: 'Boxed Lunches', price: 24 },
  { name: 'Haute Market Table Buffet ($32/guest)', short: 'Market Buffet', price: 32 },
];

const selectedPackage = ref(packages[1]);
</script>
