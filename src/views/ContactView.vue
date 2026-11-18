<template>
  <div class="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Contact Hero -->
      <section class="bg-[#10161D] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
        <div class="max-w-2xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C9A55C] text-xs font-mono font-bold uppercase tracking-widest">
            <MapPin class="w-3.5 h-3.5" />
            <span>30 W 57th Street • Midtown Manhattan</span>
          </div>
          <h1 class="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-white">
            Contact &amp; <span class="font-serif italic font-normal text-[#C9A55C] lowercase">find us</span>.
          </h1>
          <p class="text-base sm:text-lg text-white/80 leading-relaxed font-sans font-light">
            Footsteps from Central Park South, between 5th &amp; 6th Avenues. Stop in for 15-minute express counter pickup or reach out for executive corporate catering.
          </p>
        </div>
      </section>

      <!-- Main Layout: Info + Message Form -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left: Location Details & Hours (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#10161D]/10 shadow-lg space-y-5">
            <!-- Storefront Image -->
            <div class="rounded-2xl overflow-hidden aspect-[16/9] bg-[#EFE4D0]">
              <img 
                src="/site/storefront-gmb.webp" 
                alt="Metro Marché Storefront"
                class="w-full h-full object-cover" 
              />
            </div>

            <div>
              <h3 class="font-display font-bold text-2xl uppercase text-[#10161D]">Metro Marché Flagship</h3>
              <p class="font-mono text-xs text-[#1B1812]/75 mt-1">
                30 West 57th Street, New York, NY 10019<br />
                Between 5th &amp; 6th Avenues
              </p>
              <div class="mt-2 space-y-1.5 font-mono text-xs">
                <div>
                  <a 
                    href="tel:+12126973334" 
                    class="inline-flex items-center gap-2 font-bold text-sm text-[#896A39] hover:underline"
                  >
                    <Phone class="w-4 h-4" />
                    <span>(212) 697-3334</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="mailto:info@metromarche.com" 
                    class="inline-flex items-center gap-2 font-bold text-xs text-[#896A39] hover:underline"
                  >
                    <Mail class="w-3.5 h-3.5" />
                    <span>info@metromarche.com</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="mailto:catering@metromarche.com" 
                    class="inline-flex items-center gap-2 font-bold text-xs text-[#896A39] hover:underline"
                  >
                    <Mail class="w-3.5 h-3.5" />
                    <span>catering@metromarche.com</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Hours Table -->
            <div class="bg-[#FAF8F5] p-4 rounded-2xl border border-[#10161D]/5 space-y-1.5 text-xs font-mono">
              <div class="flex justify-between py-1 border-b border-[#10161D]/5">
                <span>Monday – Thursday:</span>
                <span class="font-bold text-[#10161D]">7:00 AM – 7:00 PM</span>
              </div>
              <div class="flex justify-between py-1">
                <span>Friday – Sunday:</span>
                <span class="font-bold text-[#10161D]">7:00 AM – 6:00 PM</span>
              </div>
            </div>

            <!-- Subway Transit -->
            <div>
              <span class="block text-[11px] font-mono uppercase text-[#10161D]/60 font-semibold mb-2">
                Subway Stations Nearby:
              </span>
              <div class="flex flex-wrap gap-2 text-xs font-mono font-bold">
                <span class="px-2.5 py-1 bg-[#FCCC0A] text-[#10161D] rounded-md shadow-xs">N Q R W</span>
                <span class="px-2.5 py-1 bg-[#FF6319] text-white rounded-md shadow-xs">F</span>
                <span class="px-2.5 py-1 bg-[#0039A6] text-white rounded-md shadow-xs">E M</span>
                <span class="px-2.5 py-1 bg-[#EE352E] text-white rounded-md shadow-xs">1</span>
              </div>
            </div>

            <!-- Social Links & Directions -->
            <div class="pt-2 space-y-2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Metro+Marche+30+W+57th+St+New+York"
                target="_blank"
                rel="noopener"
                class="w-full py-3 bg-[#10161D] hover:bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-xl text-center block transition-colors shadow-sm"
              >
                Get Directions In Google Maps
              </a>
              <div class="flex gap-2">
                <a 
                  href="https://www.instagram.com/metromarchenyc/" 
                  target="_blank" 
                  rel="noopener" 
                  class="flex-1 py-2.5 bg-[#FAF8F5] hover:bg-[#10161D] hover:text-white text-[#10161D] border border-[#10161D]/15 font-mono text-xs font-bold rounded-xl text-center transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/metromarchenyc/" 
                  target="_blank" 
                  rel="noopener" 
                  class="flex-1 py-2.5 bg-[#FAF8F5] hover:bg-[#10161D] hover:text-white text-[#10161D] border border-[#10161D]/15 font-mono text-xs font-bold rounded-xl text-center transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

            <!-- Careers Banner Callout (from metromarche.mirchmedia01.workers.dev/contact) -->
            <div id="careers" class="p-4 bg-[#FAF8F5] rounded-2xl border border-[#10161D]/10 space-y-1">
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#896A39] font-bold">Join The Team</span>
              <p class="text-xs font-sans text-[#1B1812]/80 leading-relaxed">
                Hospitality is at the heart of what we do. Call <a href="tel:+12126973334" class="font-mono font-bold text-[#10161D] underline">(212) 697-3334</a> to ask about openings.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Message Form (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#10161D]/10 shadow-xl space-y-6">
          <div v-if="submitted" class="text-center py-16 space-y-4">
            <div class="w-16 h-16 bg-[#1E3A2B] text-[#3DDC84] rounded-full mx-auto flex items-center justify-center text-3xl shadow-lg">
              <CheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="font-display font-bold text-3xl uppercase text-[#10161D]">
              Message Received
            </h3>
            <p class="text-sm text-[#1B1812]/75 font-sans max-w-md mx-auto">
              Thank you, <strong>{{ form.name }}</strong>. Our Midtown team has received your message and will respond to <strong>{{ form.email }}</strong> promptly.
            </p>
            <button 
              @click="submitted = false" 
              class="px-8 py-3.5 bg-[#896A39] text-white font-display text-xs uppercase tracking-widest font-bold rounded-xl"
            >
              Send Another Note
            </button>
          </div>

          <form v-else id="feedback" @submit.prevent="handleSubmit" class="space-y-4 font-sans">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-[#896A39] font-bold">Feedback &amp; Inquiries</span>
              <h3 class="font-display font-bold text-2xl uppercase tracking-tight text-[#10161D] mt-1">
                Tell Us How We Did
              </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono uppercase text-[#10161D] font-bold mb-1">Your Name</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required 
                  placeholder="e.g. Diya Sharma" 
                  class="w-full px-4 py-3 rounded-xl border border-[#10161D]/15 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#896A39]"
                />
              </div>
              <div>
                <label class="block text-xs font-mono uppercase text-[#10161D] font-bold mb-1">Email Address</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required 
                  placeholder="you@company.com" 
                  class="w-full px-4 py-3 rounded-xl border border-[#10161D]/15 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#896A39]"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono uppercase text-[#10161D] font-bold mb-1">Phone Number</label>
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  placeholder="(212) 000-0000" 
                  class="w-full px-4 py-3 rounded-xl border border-[#10161D]/15 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#896A39]"
                />
              </div>
              <div>
                <label class="block text-xs font-mono uppercase text-[#10161D] font-bold mb-1">Topic</label>
                <select 
                  v-model="form.topic" 
                  class="w-full px-4 py-3 rounded-xl border border-[#10161D]/15 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#896A39]"
                >
                  <option value="corporate-catering">Corporate Catering &amp; Events</option>
                  <option value="order-inquiry">Order Status / In-Store Pickup</option>
                  <option value="seed-oil-free">Ingredients &amp; Dietary Sourcing</option>
                  <option value="other">General Inquiries / Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono uppercase text-[#10161D] font-bold mb-1">Message</label>
              <textarea 
                v-model="form.message" 
                rows="4" 
                required 
                placeholder="How can our Midtown culinary team assist you?"
                class="w-full px-4 py-3 rounded-xl border border-[#10161D]/15 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#896A39]"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full py-4 bg-[#896A39] hover:bg-[#73572D] text-white font-display text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send class="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </section>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-vue-next';

const submitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  phone: '',
  topic: 'corporate-catering',
  message: '',
});

function handleSubmit() {
  submitted.value = true;
}
</script>
