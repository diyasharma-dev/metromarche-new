<template>
  <div class="marq" :class="variant" aria-hidden="true">
    <div class="marq-t">
      <template v-for="i in 3" :key="i">
        <span v-for="(item, idx) in items" :key="idx">{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: '', // '', 'gold', 'dark', 'green'
  },
  items: {
    type: Array,
    default: () => [
      '100% Seed Oil Free',
      'Breakfast from 7am',
      'Hot Market Table',
      'Cold-Pressed Juice',
      'Artisan Melts',
      'Corporate Catering',
      '30 W 57th St',
      'Steps from Central Park',
    ],
  },
});
</script>
