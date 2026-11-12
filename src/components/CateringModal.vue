<template>
  <div v-show="isOpen" @click.self="$emit('close')" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm transition-opacity duration-300">
    <div class="bg-white rounded-3xl max-w-lg w-full mx-4 p-6 sm:p-8 shadow-2xl relative space-y-5">
      
      <button @click="$emit('close')" aria-label="Close modal" class="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition">
        <X class="w-5 h-5" />
      </button>

      <div class="space-y-1">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#896A39]">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Corporate Catering Proposal</span>
        </span>
        <h3 class="text-2xl font-serif font-bold text-[#1B222C]">Request Catering Quote</h3>
        <p class="text-xs text-stone-500">Package: {{ packageName }} for {{ guests }} Guests</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-3.5">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Your Name *</label>
            <input v-model="form.name" required type="text" placeholder="Full name" class="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Company *</label>
            <input v-model="form.company" required type="text" placeholder="Company name" class="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Work Email *</label>
            <input v-model="form.email" required type="email" placeholder="name@company.com" class="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">Phone *</label>
            <input v-model="form.phone" required type="tel" placeholder="(212) 555-0199" class="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Delivery Address &amp; Dietary Notes</label>
          <textarea v-model="form.notes" rows="2" placeholder="e.g. 5 Gluten-Free, Delivery to 767 5th Ave floor 22..." class="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]"></textarea>
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition">
          Submit Proposal Request (${{ total.toLocaleString() }} Est.)
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { X, Sparkles } from 'lucide-vue-next';

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  guests: { type: Number, default: 25 },
  packageName: { type: String, default: 'The Midtown Market Buffet' },
  total: { type: Number, default: 650 }
});

const emit = defineEmits(['close', 'submitted']);

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  notes: ''
});

function handleSubmit() {
  emit('submitted', { ...form, guests: props.guests, packageName: props.packageName, total: props.total });
  form.name = '';
  form.company = '';
  form.email = '';
  form.phone = '';
  form.notes = '';
}
</script>
