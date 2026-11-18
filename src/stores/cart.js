import { reactive, computed, watch } from 'vue';

const STORAGE_KEY = 'metromarche_cart_v2';

function loadInitialState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        items: Array.isArray(parsed.items) ? parsed.items : [],
        orderType: parsed.orderType || 'pickup',
        tipPercent: parsed.tipPercent !== undefined ? parsed.tipPercent : 15,
        orderNotes: parsed.orderNotes || '',
      };
    }
  } catch (e) {
    console.error('Failed to parse cart storage', e);
  }
  return {
    items: [],
    orderType: 'pickup',
    tipPercent: 15,
    orderNotes: '',
  };
}

const initial = loadInitialState();

export const cartState = reactive({
  items: initial.items,
  isOpen: false,
  orderType: initial.orderType, // 'pickup' | 'delivery'
  tipPercent: initial.tipPercent, // 0, 15, 18, 20
  orderNotes: initial.orderNotes,
  isSuccessModalOpen: false,
  lastOrder: null,

  // Selected dish for quick-view modal
  selectedDish: null,
  isDishModalOpen: false,

  // Catering Quote Modal
  isCateringModalOpen: false,
  cateringPrefill: null,
});

// Watch and persist
watch(
  () => ({
    items: cartState.items,
    orderType: cartState.orderType,
    tipPercent: cartState.tipPercent,
    orderNotes: cartState.orderNotes,
  }),
  (val) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    } catch (e) {
      // ignore
    }
  },
  { deep: true }
);

export const cartGetters = {
  itemCount: computed(() => {
    return cartState.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }),

  subtotal: computed(() => {
    return cartState.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }),

  tax: computed(() => {
    return +(cartGetters.subtotal.value * 0.08875).toFixed(2);
  }),

  tipAmount: computed(() => {
    if (!cartState.tipPercent) return 0;
    return +((cartGetters.subtotal.value * cartState.tipPercent) / 100).toFixed(2);
  }),

  total: computed(() => {
    return +(cartGetters.subtotal.value + cartGetters.tax.value + cartGetters.tipAmount.value).toFixed(2);
  }),
};

export const cartActions = {
  openCart() {
    cartState.isOpen = true;
    document.body.style.overflow = 'hidden';
  },

  closeCart() {
    cartState.isOpen = false;
    document.body.style.overflow = '';
  },

  toggleCart() {
    if (cartState.isOpen) {
      this.closeCart();
    } else {
      this.openCart();
    }
  },

  addItem(dish, quantity = 1, options = {}) {
    const existingIndex = cartState.items.findIndex(
      (item) => item.id === dish.id && JSON.stringify(item.options || {}) === JSON.stringify(options || {})
    );

    if (existingIndex > -1) {
      cartState.items[existingIndex].quantity += quantity;
    } else {
      cartState.items.push({
        id: dish.id || Date.now(),
        name: dish.name,
        price: dish.price,
        image: dish.image || '/menu/074.webp',
        description: dish.description || '',
        quantity: quantity,
        options: options,
      });
    }

    // Trigger visual cart pop & auto-open drawer briefly or keep open
    this.openCart();
  },

  updateQuantity(index, delta) {
    if (index >= 0 && index < cartState.items.length) {
      const newQty = cartState.items[index].quantity + delta;
      if (newQty <= 0) {
        cartState.items.splice(index, 1);
      } else {
        cartState.items[index].quantity = newQty;
      }
    }
  },

  removeItem(index) {
    if (index >= 0 && index < cartState.items.length) {
      cartState.items.splice(index, 1);
    }
  },

  clearCart() {
    cartState.items = [];
  },

  setOrderType(type) {
    cartState.orderType = type;
  },

  setTipPercent(percent) {
    cartState.tipPercent = percent;
  },

  openDishModal(dish) {
    cartState.selectedDish = dish;
    cartState.isDishModalOpen = true;
    document.body.style.overflow = 'hidden';
  },

  closeDishModal() {
    cartState.isDishModalOpen = false;
    cartState.selectedDish = null;
    if (!cartState.isOpen && !cartState.isSuccessModalOpen && !cartState.isCateringModalOpen) {
      document.body.style.overflow = '';
    }
  },

  openCateringModal(prefill = null) {
    cartState.cateringPrefill = prefill;
    cartState.isCateringModalOpen = true;
    document.body.style.overflow = 'hidden';
  },

  closeCateringModal() {
    cartState.isCateringModalOpen = false;
    cartState.cateringPrefill = null;
    document.body.style.overflow = '';
  },

  submitOrder() {
    if (cartState.items.length === 0) return;

    const orderNumber = 'MM-' + Math.floor(100000 + Math.random() * 900000);
    cartState.lastOrder = {
      orderNumber,
      items: [...cartState.items],
      orderType: cartState.orderType,
      subtotal: cartGetters.subtotal.value,
      tax: cartGetters.tax.value,
      tip: cartGetters.tipAmount.value,
      total: cartGetters.total.value,
      notes: cartState.orderNotes,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    };

    cartState.items = [];
    cartState.isOpen = false;
    cartState.isSuccessModalOpen = true;
    document.body.style.overflow = 'hidden';
  },

  closeSuccessModal() {
    cartState.isSuccessModalOpen = false;
    document.body.style.overflow = '';
  },
};
