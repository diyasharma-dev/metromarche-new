/**
 * Metro Marché — Modern Vue 3 Application
 * Branding colors derived directly from Metro Marché Logo:
 * Bronze Ochre: #896A39 | Midnight Noir: #1B222C | Parisian Slate: #69707B
 */

const { createApp, ref, reactive, computed, onMounted, onUnmounted } = Vue;

const app = createApp({
  setup() {
    // 1. Navigation & State
    const activeSection = ref('home');
    const isMobileMenuOpen = ref(false);
    const isOrderModalOpen = ref(false);
    const isCateringModalOpen = ref(false);
    const showBackToTop = ref(false);
    const isHeaderScrolled = ref(false);

    // 2. Live NYC Store Hours Reactive Logic
    const storeStatus = reactive({
      isOpen: false,
      statusText: 'Checking hours...',
      closingText: ''
    });

    function checkLiveHours() {
      const now = new Date();
      const nycTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const day = nycTime.getDay(); // 0 is Sun, 1 is Mon, 6 is Sat
      const currentMinutes = nycTime.getHours() * 60 + nycTime.getMinutes();

      if (day >= 1 && day <= 5) {
        // Mon-Fri: 7am (420) to 7pm (1140)
        if (currentMinutes >= 420 && currentMinutes < 1140) {
          storeStatus.isOpen = true;
          storeStatus.statusText = 'Open Now';
          storeStatus.closingText = 'Closes at 7:00 PM';
        } else if (currentMinutes < 420) {
          storeStatus.isOpen = false;
          storeStatus.statusText = 'Closed Now';
          storeStatus.closingText = 'Opens Today at 7:00 AM';
        } else {
          storeStatus.isOpen = false;
          storeStatus.statusText = 'Closed Now';
          storeStatus.closingText = day === 5 ? 'Opens Saturday at 8:00 AM' : 'Opens Tomorrow at 7:00 AM';
        }
      } else if (day === 6) {
        // Saturday: 8am (480) to 5pm (1020)
        if (currentMinutes >= 480 && currentMinutes < 1020) {
          storeStatus.isOpen = true;
          storeStatus.statusText = 'Open Now';
          storeStatus.closingText = 'Closes at 5:00 PM';
        } else if (currentMinutes < 480) {
          storeStatus.isOpen = false;
          storeStatus.statusText = 'Closed Now';
          storeStatus.closingText = 'Opens Today at 8:00 AM';
        } else {
          storeStatus.isOpen = false;
          storeStatus.statusText = 'Closed Now';
          storeStatus.closingText = 'Opens Monday at 7:00 AM';
        }
      } else {
        // Sunday: Closed
        storeStatus.isOpen = false;
        storeStatus.statusText = 'Closed Now';
        storeStatus.closingText = 'Opens Monday at 7:00 AM';
      }
    }

    // 3. Daily Market Table Interactive Builder State
    const marketProteins = [
      { id: 'p1', name: 'Lemon Herb Roast Chicken Breast', desc: 'Marinated in cold-pressed Greek EVOO, oregano, garlic & lemon zest', cal: 260, protein: 42, icon: '🍗', tag: 'High Protein' },
      { id: 'p2', name: 'Moroccan Spiced Roast Chicken', desc: 'Cumin, turmeric, warm spices, raw honey & olive oil glaze', cal: 280, protein: 38, icon: '✨', tag: '0% Seed Oil' },
      { id: 'p3', name: 'Herb & Lime Seared Gulf Shrimp', desc: 'Wild shrimp flash-seared in avocado oil with fresh cilantro and lime', cal: 180, protein: 34, icon: '🍤', tag: 'Gluten-Free' },
      { id: 'p4', name: 'Sweet Baked Organic Tofu', desc: 'Non-GMO organic tofu glazed in tamari, fresh ginger & toasted sesame', cal: 190, protein: 22, icon: '🌱', tag: '100% Vegan' },
      { id: 'p5', name: 'Adobo Marinated Skirt Steak', desc: 'Prime flank steak grilled medium with chimichurri drizzle (EVOO)', cal: 320, protein: 40, icon: '🥩', tag: 'Chef Signature' }
    ];

    const marketSides = [
      { id: 's1', name: 'Charred Balsamic Brussels Sprouts', desc: 'Caramelized in avocado oil with Modena balsamic glaze', cal: 95, icon: '🥬', tag: 'Vegan • GF' },
      { id: 's2', name: 'Roasted Garlic Broccoli Florets', desc: 'Tender-crisp florets with roasted garlic slivers and sea salt', cal: 75, icon: '🥦', tag: '0% Seed Oil' },
      { id: 's3', name: 'Maple Glazed Sweet Potatoes', desc: 'Organic yams tossed in cinnamon and pure maple glaze', cal: 130, icon: '🍠', tag: 'Nutrient Rich' },
      { id: 's4', name: 'Sautéed Wild Mushrooms & Herbs', desc: 'Cremini and shiitake sautéed with thyme and avocado oil', cal: 85, icon: '🍄', tag: 'Low Carb' }
    ];

    const marketBases = [
      { id: 'b1', name: 'Organic Brown Rice & Red Quinoa', desc: 'Steamed with bay leaves and cold-pressed olive oil', cal: 180, protein: 6, tag: 'Gluten-Free' },
      { id: 'b2', name: 'Warm Ancient Farro & Herbs', desc: 'Nutty ancient grain tossed with fresh parsley and lemon', cal: 190, protein: 7, tag: 'Fiber Rich' },
      { id: 'b3', name: 'Baby Spinach & Shaved Tuscan Kale', desc: 'Farm-fresh greens tossed with light lemon-dill vinaigrette', cal: 40, protein: 3, tag: 'Low Carb • Keto' }
    ];

    const selectedProtein = ref(marketProteins[0]);
    const selectedSide1 = ref(marketSides[0]);
    const selectedSide2 = ref(marketSides[1]);
    const selectedBase = ref(marketBases[0]);

    const plateMacros = computed(() => {
      const cal = (selectedProtein.value?.cal || 0) + (selectedSide1.value?.cal || 0) + (selectedSide2.value?.cal || 0) + (selectedBase.value?.cal || 0);
      const protein = (selectedProtein.value?.protein || 0) + 4 + (selectedBase.value?.protein || 0);
      return { cal, protein };
    });

    // 4. Menu Explorer Data & Reactive Filtering
    const menuSearch = ref('');
    const selectedMenuCat = ref('all');
    const selectedDietFilters = ref(new Set());

    const menuItems = [
      {
        id: 'm1',
        name: 'Adobo Grilled Steak Salad',
        category: 'salads',
        price: '$17.50',
        calories: 540,
        protein: '38g',
        image: 'assets/images/steak-salad.jpg',
        tags: ['seedoil', 'gf', 'protein'],
        badge: '0% Seed Oil',
        desc: 'Grilled skirt steak, Hass avocado, roasted corn, cherry tomatoes, pickled onions, cotija cheese, and cilantro chimichurri made with 100% EVOO.'
      },
      {
        id: 'm2',
        name: 'Herb Salmon & Avocado Bowl',
        category: 'salads',
        price: '$18.95',
        calories: 610,
        protein: '42g',
        image: 'assets/images/salmon-avocado.jpg',
        tags: ['seedoil', 'gf', 'protein'],
        badge: 'Omega-3 Rich',
        desc: 'Wild-caught salmon roasted with fresh dill & avocado oil, red quinoa, organic baby spinach, roasted sweet potatoes, and lemon tahini dressing.'
      },
      {
        id: 'm3',
        name: 'Classic Midtown Greek Salad',
        category: 'salads',
        price: '$14.95',
        calories: 420,
        protein: '18g',
        image: 'assets/images/hero-salad.webp',
        tags: ['seedoil', 'gf'],
        badge: 'Greek EVOO',
        desc: 'Crisp romaine, Persian cucumbers, Kalamata olives, grape leaves, aged feta, and red onions in oregano-infused EVOO vinaigrette.'
      },
      {
        id: 'm4',
        name: 'Smoked Turkey Cheddar Melt',
        category: 'sandwiches',
        price: '$14.50',
        calories: 580,
        protein: '34g',
        image: 'assets/images/artisan-sandwich.jpg',
        tags: ['seedoil', 'protein'],
        badge: 'Warm Panini',
        desc: 'House-roasted turkey breast, sharp Vermont white cheddar, crisp arugula, caramelized sweet onions, and grain mustard on country sourdough.'
      },
      {
        id: 'm5',
        name: 'The Metro Reuben',
        category: 'sandwiches',
        price: '$15.50',
        calories: 640,
        protein: '36g',
        image: 'assets/images/market-place.webp',
        tags: ['seedoil', 'protein'],
        badge: 'NYC Classic',
        desc: 'First-cut lean pastrami, melted Swiss cheese, artisanal barrel sauerkraut, and scratch-made Russian dressing (zero seed oil) on marble rye.'
      },
      {
        id: 'm6',
        name: 'Metro Bacon, Egg & Cheese',
        category: 'breakfast',
        price: '$8.95',
        calories: 460,
        protein: '24g',
        image: 'assets/images/breakfast-sandwich.jpg',
        tags: ['seedoil', 'protein'],
        badge: 'Pasture Eggs',
        desc: 'Two pasture-raised eggs cooked in real butter, applewood smoked bacon, and aged cheddar on a toasted brioche bun or fresh New York bagel.'
      },
      {
        id: 'm7',
        name: 'Artisan French Croissant',
        category: 'breakfast',
        price: '$4.75',
        calories: 320,
        protein: '6g',
        image: 'assets/images/croissant-bakery.jpg',
        tags: ['seedoil'],
        badge: 'Baked 5am Daily',
        desc: 'Flaky, golden layered all-butter croissant baked fresh every morning in Midtown. Also available as Ham & Swiss or Turkey & Provolone.'
      },
      {
        id: 'm8',
        name: 'Iced Pistachio Rose Latte',
        category: 'drinks',
        price: '$6.50',
        calories: 190,
        protein: '4g',
        image: 'assets/images/specialty-coffee.jpg',
        tags: ['seedoil', 'vegan'],
        badge: 'Espresso Bar',
        desc: 'Double shot specialty espresso, handcrafted pure pistachio cream, organic oat milk, and a delicate touch of organic rose water.'
      },
      {
        id: 'm9',
        name: 'Green Glow Cold-Pressed Juice',
        category: 'drinks',
        price: '$8.95',
        calories: 120,
        protein: '3g',
        image: 'assets/images/cold-pressed-juice.jpg',
        tags: ['seedoil', 'vegan', 'gf'],
        badge: '100% Organic',
        desc: 'Raw organic kale, cucumber, green apple, celery, lemon, and fresh ginger. Cold-pressed daily, zero added water or sugar.'
      }
    ];

    function toggleDietFilter(filter) {
      if (selectedDietFilters.value.has(filter)) {
        selectedDietFilters.value.delete(filter);
      } else {
        selectedDietFilters.value.add(filter);
      }
    }

    function isDietActive(filter) {
      return selectedDietFilters.value.has(filter);
    }

    const filteredMenuItems = computed(() => {
      const q = menuSearch.value.toLowerCase().trim();
      return menuItems.filter(item => {
        const matchesCategory = selectedMenuCat.value === 'all' || item.category === selectedMenuCat.value;
        const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
        let matchesDiets = true;
        selectedDietFilters.value.forEach(diet => {
          if (!item.tags.includes(diet)) matchesDiets = false;
        });
        return matchesCategory && matchesSearch && matchesDiets;
      });
    });

    // 5. Interactive Corporate Catering Calculator State
    const cateringGuests = ref(25);
    const cateringPackage = ref('buffet');
    const cateringPackages = [
      { id: 'buffet', name: 'The Midtown Market Hot Buffet', price: 26, desc: 'Choice of 2 hot proteins + 2 grains/greens + 2 roasted hot sides + scratch sauces' },
      { id: 'boxed', name: 'Executive Individually Labeled Boxed Lunches', price: 22, desc: 'Choice of signature bowl/melt + side roasted potato/salad + house cookie' },
      { id: 'breakfast', name: 'Boardroom Breakfast & Pastry Platter', price: 16, desc: 'Assorted brioche egg sandwiches + flaky croissants + fresh melon/berries + coffee box' }
    ];

    const currentPackageObj = computed(() => {
      return cateringPackages.find(p => p.id === cateringPackage.value) || cateringPackages[0];
    });

    const cateringTotal = computed(() => {
      return cateringGuests.value * currentPackageObj.value.price;
    });

    // 6. Reactive Toast System
    const toasts = ref([]);
    function addToast(msg, type = 'success') {
      const id = Date.now();
      toasts.value.push({ id, msg, type });
      setTimeout(() => {
        toasts.value = toasts.value.filter(t => t.id !== id);
      }, 4000);
    }

    // 7. Form Handlers
    const newsletterEmail = ref('');
    function handleNewsletter() {
      if (newsletterEmail.value) {
        addToast('🎉 Welcome to the Metro Club! Check your inbox for $5 off your next order.', 'success');
        newsletterEmail.value = '';
      }
    }

    const inquiryForm = reactive({
      name: '',
      company: '',
      email: '',
      phone: '',
      date: '',
      guests: 25,
      notes: ''
    });

    function submitCateringInquiry() {
      addToast('✓ Proposal Request Received! Our Midtown catering manager will call you within 30 minutes.', 'success');
      isCateringModalOpen.value = false;
      inquiryForm.name = '';
      inquiryForm.company = '';
      inquiryForm.email = '';
      inquiryForm.phone = '';
      inquiryForm.notes = '';
    }

    // 8. Scroll & Lifecycle Listeners
    function handleScroll() {
      isHeaderScrolled.value = window.scrollY > 40;
      showBackToTop.value = window.scrollY > 400;
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openOrderModal() {
      isOrderModalOpen.value = true;
    }

    function closeOrderModal() {
      isOrderModalOpen.value = false;
    }

    function openCateringModal() {
      inquiryForm.guests = cateringGuests.value;
      isCateringModalOpen.value = true;
    }

    onMounted(() => {
      checkLiveHours();
      const hoursInterval = setInterval(checkLiveHours, 60000);
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Refresh Lucide Icons after render
      if (window.lucide) {
        window.lucide.createIcons();
      }

      onUnmounted(() => {
        clearInterval(hoursInterval);
        window.removeEventListener('scroll', handleScroll);
      });
    });

    return {
      activeSection,
      isMobileMenuOpen,
      isOrderModalOpen,
      isCateringModalOpen,
      showBackToTop,
      isHeaderScrolled,
      storeStatus,

      // Market Table
      marketProteins,
      marketSides,
      marketBases,
      selectedProtein,
      selectedSide1,
      selectedSide2,
      selectedBase,
      plateMacros,

      // Menu
      menuSearch,
      selectedMenuCat,
      selectedDietFilters,
      filteredMenuItems,
      toggleDietFilter,
      isDietActive,

      // Catering
      cateringGuests,
      cateringPackage,
      cateringPackages,
      currentPackageObj,
      cateringTotal,
      inquiryForm,
      submitCateringInquiry,

      // Utilities
      toasts,
      addToast,
      newsletterEmail,
      handleNewsletter,
      scrollToTop,
      openOrderModal,
      closeOrderModal,
      openCateringModal
    };
  }
});

app.mount('#app');
