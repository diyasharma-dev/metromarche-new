<template>
  <section class="py-12 bg-[#896A39] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-left">
          <h3 class="text-2xl font-serif font-bold">Get $5 Off Your First Order</h3>
          <p class="text-amber-100 text-xs sm:text-sm">Sign up for exclusive daily market table specials, seasonal dishes &amp; chef updates.</p>
        </div>
        <form @submit.prevent="handleSubmit" class="flex w-full max-w-md gap-2">
          <input v-model="email" type="email" required placeholder="Enter your work email..."
                 class="flex-1 px-4 py-3 rounded-full text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
          <button type="submit" class="px-6 py-3 rounded-full bg-[#1B222C] hover:bg-[#10161D] text-white font-bold text-xs uppercase tracking-wider transition shrink-0">
            {{ isSubmitted ? 'Subscribed!' : 'Claim $5' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['subscribed']);
const email = ref('');
const isSubmitted = ref(false);

function handleSubmit() {
  if (email.value) {
    isSubmitted.value = true;
    emit('subscribed', email.value);
    setTimeout(() => {
      email.value = '';
      isSubmitted.value = false;
    }, 4000);
  }
}
</script>
