<template>
  <section class="py-20 bg-[#10161D] text-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Address & Transit -->
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs uppercase font-bold tracking-wider text-amber-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            Visit Our Midtown Café
          </span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold">
            Central Park West &amp; 57th Street
          </h2>
          <p class="text-stone-300 text-base leading-relaxed">
            Conveniently nestled in the vibrant heart of Midtown Manhattan, steps from Central Park, MoMA, and Carnegie Hall. Stop in for express pickup, take a seat in our bright café, or enjoy our outdoor sidewalk tables.
          </p>

          <div class="space-y-3.5 pt-2 text-sm text-stone-200">
            <div class="flex items-start space-x-3">
              <MapPin class="w-5 h-5 text-[#896A39] shrink-0 mt-0.5" />
              <div>
                <strong class="text-white block text-base">30 West 57th Street</strong>
                <span>New York, NY 10019 (Between 5th &amp; 6th Avenues)</span>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <Phone class="w-5 h-5 text-amber-300 shrink-0" />
              <a href="tel:2126973334" class="text-amber-200 hover:text-white transition font-medium">(212) 697-3334</a>
            </div>
            <div class="flex items-center space-x-3">
              <Mail class="w-5 h-5 text-[#896A39] shrink-0" />
              <a href="mailto:info@metromarche.com" class="text-stone-300 hover:text-white transition">info@metromarche.com</a>
            </div>
          </div>

          <!-- Transit Badges -->
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span class="text-xs font-bold text-stone-400 uppercase tracking-wider">Subway Transit Lines:</span>
            <div class="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold">
              <span class="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">N</span>
              <span class="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">Q</span>
              <span class="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">R</span>
              <span class="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">W</span>
              <span class="text-stone-300 text-xs ml-1">@ 57th St-7th Ave</span>
              <span class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold ml-2">F</span>
              <span class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">M</span>
              <span class="text-stone-300 text-xs ml-1">@ 57th St</span>
            </div>
          </div>

          <div class="pt-2 flex flex-wrap gap-4">
            <a href="https://maps.google.com/?q=30+W+57th+St,+New+York,+NY+10019" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-sm shadow-md transition flex items-center space-x-2">
              <Navigation class="w-4 h-4" />
              <span>Get Directions</span>
            </a>
            <button @click="$emit('open-order')" class="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition">
              Order Pickup Ahead
            </button>
          </div>
        </div>

        <!-- Right: Operating Hours & Interior Photo -->
        <div class="lg:col-span-6 space-y-6">
          <div class="bg-[#1B222C] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
            
            <div class="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 class="text-xl font-bold font-serif text-white flex items-center gap-2">
                <Clock class="w-5 h-5 text-amber-300" />
                <span>Operating Hours</span>
              </h3>
              <span class="text-xs px-2.5 py-1 rounded-full font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Fresh Daily
              </span>
            </div>

            <div class="space-y-3 text-sm">
              <div class="flex justify-between py-1.5 border-b border-white/5">
                <span class="text-stone-300 font-medium">Monday – Friday</span>
                <span class="text-white font-bold">7:00 AM – 7:00 PM</span>
              </div>
              <div class="flex justify-between py-1.5 border-b border-white/5">
                <span class="text-stone-300 font-medium">Saturday</span>
                <span class="text-white font-bold">8:00 AM – 5:00 PM</span>
              </div>
              <div class="flex justify-between py-1.5">
                <span class="text-stone-300 font-medium">Sunday</span>
                <span class="text-stone-400 italic">Closed (Catering By Request)</span>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden h-48 border border-white/10">
              <img src="/assets/images/cafe-interior.jpg" alt="Metro Marché Midtown Seating" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span class="text-xs text-white font-medium">Spacious seating, high-speed WiFi &amp; express grab-and-go counter</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { MapPin, Phone, Mail, Navigation, Clock } from 'lucide-vue-next';

defineEmits(['open-order']);
</script>
