<template>
  <div class="bg-[#FAF8F5] min-h-screen">
    <!-- Contact Hero -->
    <section class="bg-[#10161D] text-white py-16 sm:py-20 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#896A39]/20 text-amber-200 border border-[#896A39]/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Midtown Manhattan</span>
        </span>
        <h1 class="text-4xl sm:text-5xl font-serif font-bold text-white">
          Contact &amp; Find Us
        </h1>
        <p class="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
          We’re located on 57th Street between 5th &amp; 6th Avenues, just two blocks south of Central Park.
        </p>
      </div>
    </section>

    <!-- Main Grid: Info + Contact Form -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Left Column: Details, Hours & Transit -->
          <div class="lg:col-span-5 space-y-8">
            
            <!-- Address Card -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h3 class="font-serif font-bold text-xl text-[#1B222C]">Location &amp; Phone</h3>
              <div class="space-y-3 text-sm text-stone-700">
                <div class="flex items-start space-x-3">
                  <MapPin class="w-5 h-5 text-[#896A39] shrink-0 mt-0.5" />
                  <div>
                    <strong class="text-stone-900 block font-semibold">Metro Marché</strong>
                    <span>30 West 57th Street</span>
                    <span class="block text-stone-500 text-xs">Between 5th &amp; 6th Avenues, New York, NY 10019</span>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <Phone class="w-5 h-5 text-[#896A39] shrink-0" />
                  <a href="tel:2126973334" class="text-stone-900 font-semibold hover:text-[#896A39] transition">
                    (212) 697-3334
                  </a>
                </div>
                <div class="flex items-center space-x-3">
                  <Mail class="w-5 h-5 text-[#896A39] shrink-0" />
                  <a href="mailto:info@metromarche.com" class="text-stone-600 hover:text-[#896A39] transition">
                    info@metromarche.com
                  </a>
                </div>
              </div>

              <div class="pt-2">
                <a href="https://maps.google.com/?q=30+W+57th+St,+New+York,+NY+10019" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm">
                  <Navigation class="w-4 h-4 mr-1" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <!-- Operating Hours Card -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h3 class="font-serif font-bold text-xl text-[#1B222C] flex items-center justify-between">
                <span class="flex items-center gap-2">
                  <Clock class="w-5 h-5 text-[#896A39]" />
                  <span>Operating Hours</span>
                </span>
                <span class="text-xs font-sans px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  Open Weekdays &amp; Sat
                </span>
              </h3>
              <div class="space-y-2.5 text-sm">
                <div class="flex justify-between py-1.5 border-b border-stone-100">
                  <span class="text-stone-600 font-medium">Monday – Friday</span>
                  <span class="text-stone-900 font-bold">7:00 AM – 7:00 PM</span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-stone-100">
                  <span class="text-stone-600 font-medium">Saturday</span>
                  <span class="text-stone-900 font-bold">8:00 AM – 5:00 PM</span>
                </div>
                <div class="flex justify-between py-1.5">
                  <span class="text-stone-600 font-medium">Sunday</span>
                  <span class="text-stone-400 italic">Closed (Catering Upon Request)</span>
                </div>
              </div>
            </div>

            <!-- Subway Transit Card -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
              <h3 class="font-serif font-bold text-xl text-[#1B222C] flex items-center gap-2">
                <Train class="w-5 h-5 text-[#896A39]" />
                <span>Subway Directions</span>
              </h3>
              <p class="text-xs text-stone-500">Easily accessible from all major Midtown subway stations:</p>
              <div class="space-y-2 pt-1 text-xs">
                <div class="flex items-center space-x-2">
                  <div class="flex space-x-1">
                    <span class="w-6 h-6 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">N</span>
                    <span class="w-6 h-6 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">Q</span>
                    <span class="w-6 h-6 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">R</span>
                    <span class="w-6 h-6 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">W</span>
                  </div>
                  <span class="text-stone-700">to <strong>57th St – 7th Ave</strong> (1 min walk)</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex space-x-1">
                    <span class="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">F</span>
                    <span class="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">M</span>
                  </div>
                  <span class="text-stone-700">to <strong>57th St – 6th Ave</strong> (Steps away)</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="flex space-x-1">
                    <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">E</span>
                  </div>
                  <span class="text-stone-700">to <strong>7th Ave – 53rd St</strong> (4 min walk)</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Message Form -->
          <div class="lg:col-span-7">
            <div class="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm space-y-6">
              <div>
                <span class="text-xs uppercase font-bold tracking-wider text-[#896A39]">We're Here to Help</span>
                <h2 class="text-3xl font-serif font-bold text-[#1B222C] mt-1">Send Us a Message</h2>
                <p class="text-xs text-stone-500 mt-1">For general inquiries, feedback, corporate catering questions or special events.</p>
              </div>

              <div v-if="submitted" class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm space-y-2">
                <div class="font-bold text-base flex items-center gap-2">
                  <CheckCircle2 class="w-5 h-5 text-emerald-600" />
                  <span>Thank you for reaching out!</span>
                </div>
                <p class="text-xs text-emerald-700">
                  We have received your message. A member of the Metro Marché Midtown team will reply within a few hours.
                </p>
                <button @click="submitted = false" class="text-xs font-bold underline mt-2">Send another message</button>
              </div>

              <form v-else @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1">Your Name *</label>
                    <input v-model="form.name" required type="text" placeholder="Sarah Jenkins"
                           class="w-full p-3 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                    <input v-model="form.email" required type="email" placeholder="sarah@company.com"
                           class="w-full p-3 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1">Phone Number</label>
                    <input v-model="form.phone" type="tel" placeholder="(212) 555-0188"
                           class="w-full p-3 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-stone-700 mb-1">Subject *</label>
                    <select v-model="form.subject" class="w-full p-3 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39] bg-white">
                      <option value="catering">Corporate Catering Inquiry</option>
                      <option value="feedback">Dining Feedback</option>
                      <option value="rewards">Metro Rewards App Support</option>
                      <option value="careers">Careers &amp; Employment</option>
                      <option value="other">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-stone-700 mb-1">Message *</label>
                  <textarea v-model="form.message" required rows="5" placeholder="How can we assist you?"
                            class="w-full p-3 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#896A39]"></textarea>
                </div>

                <button type="submit"
                        class="w-full py-4 rounded-xl bg-[#896A39] hover:bg-[#6D5329] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center justify-center gap-2">
                  <Send class="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Sparkles, MapPin, Phone, Mail, Navigation, Clock, Train, Send, CheckCircle2 } from 'lucide-vue-next';

const submitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: 'catering',
  message: ''
});

function handleSubmit() {
  submitted.value = true;
  form.name = '';
  form.email = '';
  form.phone = '';
  form.message = '';
}
</script>
