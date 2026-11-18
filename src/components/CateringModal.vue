<template>
  <div 
    v-if="cartState.isCateringModalOpen"
    class="fixed inset-0 bg-[#10161D]/80 backdrop-blur-md z-[115] flex items-center justify-center p-4 overflow-y-auto"
    @click.self="cartActions.closeCateringModal()"
  >
    <div class="bg-white max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-[#10161D]/15 shadow-2xl relative my-8">
      <!-- Close Button -->
      <button 
        @click="cartActions.closeCateringModal()"
        class="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#10161D]/20 flex items-center justify-center text-[#10161D] hover:bg-[#10161D] hover:text-white transition-colors cursor-pointer"
        aria-label="Close modal"
      >
        <X class="w-4 h-4" />
      </button>

      <div v-if="submitted" class="text-center py-10 space-y-4">
        <div class="w-16 h-16 bg-[#1E3A2B] text-[#3DDC84] rounded-full mx-auto flex items-center justify-center text-3xl shadow-lg">
          <CheckCircle2 class="w-8 h-8" />
        </div>
        <span class="inline-block px-3.5 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-xs font-bold uppercase tracking-widest rounded-full">
          Inquiry Received
        </span>
        <h3 class="text-3xl font-display font-bold uppercase tracking-tight text-[#10161D]">
          Proposal Sent to Chef
        </h3>
        <p class="text-sm text-[#1B1812]/80 max-w-md mx-auto font-sans leading-relaxed">
          Thank you, <strong>{{ form.name }}</strong>. Our Midtown catering director is preparing your custom proposal for <strong>{{ form.guests }} guests</strong>. You will receive it via email within 2 business hours.
        </p>
        <div class="pt-4">
          <button 
            @click="cartActions.closeCateringModal()"
            class="px-8 py-3.5 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-widest font-bold rounded-xl transition-colors shadow-md cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>

      <div v-else class="space-y-5">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#1E3A2B] text-[#C9A55C] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
            <Users class="w-3 h-3" />
            <span>Midtown Corporate Catering</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#10161D]">
            Request Catering Proposal
          </h3>
          <p class="text-xs text-[#1B1812]/70 font-mono mt-1">
            100% seed-oil free office breakfasts, boxed lunches, and hot market buffets.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4 text-xs font-sans">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Your Name *</label>
              <input 
                v-model="form.name" 
                required 
                type="text" 
                placeholder="Jane Doe"
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              />
            </div>
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Company / Organization *</label>
              <input 
                v-model="form.company" 
                required 
                type="text" 
                placeholder="e.g. Blackstone, Google, Midtown Law"
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Corporate Email *</label>
              <input 
                v-model="form.email" 
                required 
                type="email" 
                placeholder="jane@company.com"
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              />
            </div>
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Phone Number *</label>
              <input 
                v-model="form.phone" 
                required 
                type="tel" 
                placeholder="(212) 555-0199"
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Event Date *</label>
              <input 
                v-model="form.date" 
                required 
                type="date" 
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              />
            </div>
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Estimated Guests *</label>
              <input 
                v-model.number="form.guests" 
                required 
                type="number" 
                min="10" 
                max="500"
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              />
            </div>
            <div>
              <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Package Style</label>
              <select 
                v-model="form.package"
                class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
              >
                <option value="Executive Boxed Lunches ($24/guest)">Executive Boxed Lunches</option>
                <option value="Haute Market Table Buffet ($32/guest)">Haute Market Table Buffet</option>
                <option value="Morning Breakfast & Pastry Spread ($18/guest)">Morning Breakfast Spread</option>
                <option value="Custom Event Tasting">Custom Tasting</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold uppercase tracking-wider text-[#10161D] mb-1">Dietary Requirements &amp; Manhattan Address</label>
            <textarea 
              v-model="form.notes"
              rows="3" 
              placeholder="e.g. 5 Gluten-Free, 3 Vegan; Delivery to 30 Rockefeller Plaza, 24th Floor..."
              class="w-full bg-[#FAF8F5] border border-[#10161D]/15 rounded-xl px-3.5 py-2.5 text-[#10161D] focus:outline-none focus:border-[#896A39]"
            ></textarea>
          </div>

          <div class="pt-2">
            <button 
              type="submit"
              class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white text-xs font-display uppercase tracking-widest font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send class="w-4 h-4" />
              <span>Submit Proposal Request</span>
            </button>
            <p class="text-[11px] font-mono text-center text-[#1B1812]/60 mt-2">
              Or call <strong>(212) 697-3334</strong> • Email: <a href="mailto:catering@metromarche.com" class="text-[#896A39] underline font-bold">catering@metromarche.com</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { cartState, cartActions } from '../stores/cart.js';
import { X, CheckCircle2, Users, Send } from 'lucide-vue-next';

const submitted = ref(false);

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  date: '',
  guests: 25,
  package: 'Executive Boxed Lunches ($24/guest)',
  notes: '',
});

onMounted(() => {
  if (cartState.cateringPrefill) {
    if (cartState.cateringPrefill.guests) form.guests = cartState.cateringPrefill.guests;
    if (cartState.cateringPrefill.package) form.package = cartState.cateringPrefill.package;
  }
});

function handleSubmit() {
  submitted.value = true;
}
</script>
