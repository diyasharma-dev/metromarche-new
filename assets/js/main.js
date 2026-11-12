/**
 * Metro Marché — Modern Experience JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveHours();
  initStickyHeader();
  initMobileMenu();
  initBackToTop();
  initModals();
  initCateringCalculator();
  initMenuTabs();
  initMarketTableTabs();
  initForms();
});

/* 1. Live Hours Status in NYC Eastern Time */
function initLiveHours() {
  const statusEl = document.getElementById('live-status-badge');
  const textEl = document.getElementById('live-status-text');
  const dotEl = document.getElementById('live-status-dot');

  if (!statusEl && !textEl) return;

  function updateStatus() {
    // Get NYC time
    const now = new Date();
    const nycString = now.toLocaleString("en-US", { timeZone: "America/New_York" });
    const nycDate = new Date(nycString);
    const day = nycDate.getDay(); // 0 is Sun, 1 is Mon, 6 is Sat
    const hour = nycDate.getHours();
    const minutes = nycDate.getMinutes();
    const currentMins = hour * 60 + minutes;

    let isOpen = false;
    let closingTime = "";
    let nextOpen = "";

    if (day >= 1 && day <= 5) {
      // Mon - Fri: 7:00 AM (420) to 7:00 PM (1140)
      if (currentMins >= 420 && currentMins < 1140) {
        isOpen = true;
        closingTime = "7:00 PM";
      } else if (currentMins < 420) {
        nextOpen = "Today at 7:00 AM";
      } else {
        nextOpen = day === 5 ? "Saturday at 8:00 AM" : "Tomorrow at 7:00 AM";
      }
    } else if (day === 6) {
      // Sat: 8:00 AM (480) to 5:00 PM (1020)
      if (currentMins >= 480 && currentMins < 1020) {
        isOpen = true;
        closingTime = "5:00 PM";
      } else if (currentMins < 480) {
        nextOpen = "Today at 8:00 AM";
      } else {
        nextOpen = "Monday at 7:00 AM";
      }
    } else {
      // Sunday: Closed
      nextOpen = "Monday at 7:00 AM";
    }

    if (textEl) {
      if (isOpen) {
        textEl.innerHTML = `<span class="font-semibold text-emerald-700">Open Now</span> • Closes ${closingTime}`;
        if (dotEl) {
          dotEl.className = "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse";
        }
      } else {
        textEl.innerHTML = `<span class="font-semibold text-amber-700">Closed Now</span> • Opens ${nextOpen}`;
        if (dotEl) {
          dotEl.className = "w-2.5 h-2.5 rounded-full bg-amber-500";
        }
      }
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);
}

/* 2. Sticky Header with Elevation */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      header.classList.remove('bg-white');
    } else {
      header.classList.remove('shadow-md');
      header.classList.add('bg-white');
    }
  }, { passive: true });
}

/* 3. Mobile Navigation Drawer */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');

  if (!openBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    backdrop.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.remove('opacity-100');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Close when clicking internal links
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* 4. Back to Top Button */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* 5. Modals (Order Modal, Catering Modal) */
function initModals() {
  // Order Modal triggers
  const orderModal = document.getElementById('order-modal');
  const orderTriggers = document.querySelectorAll('[data-open-order-modal]');
  const orderClose = document.getElementById('close-order-modal');

  if (orderModal && orderTriggers.length > 0) {
    function openOrderModal(e) {
      if (e) e.preventDefault();
      orderModal.classList.remove('hidden');
      setTimeout(() => {
        orderModal.classList.remove('opacity-0');
        orderModal.querySelector('.modal-content')?.classList.remove('scale-95');
      }, 10);
      document.body.style.overflow = 'hidden';
    }

    function closeOrderModal() {
      orderModal.classList.add('opacity-0');
      orderModal.querySelector('.modal-content')?.classList.add('scale-95');
      setTimeout(() => {
        orderModal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 200);
    }

    orderTriggers.forEach(btn => btn.addEventListener('click', openOrderModal));
    if (orderClose) orderClose.addEventListener('click', closeOrderModal);

    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal || e.target.classList.contains('modal-backdrop')) {
        closeOrderModal();
      }
    });
  }
}

/* 6. Interactive Catering Calculator */
function initCateringCalculator() {
  const guestInput = document.getElementById('catering-guests');
  const guestDisplay = document.getElementById('catering-guest-display');
  const packageSelect = document.getElementById('catering-package');
  const priceDisplay = document.getElementById('catering-estimated-total');
  const perPersonDisplay = document.getElementById('catering-per-person');

  if (!guestInput || !packageSelect || !priceDisplay) return;

  function calculate() {
    const guests = parseInt(guestInput.value, 10) || 15;
    const selectedOption = packageSelect.options[packageSelect.selectedIndex];
    const pricePerPerson = parseFloat(selectedOption.getAttribute('data-price') || '22');

    if (guestDisplay) guestDisplay.textContent = guests;
    if (perPersonDisplay) perPersonDisplay.textContent = `$${pricePerPerson.toFixed(2)}`;

    const total = guests * pricePerPerson;
    priceDisplay.textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  guestInput.addEventListener('input', calculate);
  packageSelect.addEventListener('change', calculate);
  calculate();
}

/* 7. Homepage Menu Highlights Tabs */
function initMenuTabs() {
  const tabButtons = document.querySelectorAll('[data-menu-tab]');
  const menuItems = document.querySelectorAll('[data-menu-category]');

  if (tabButtons.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-menu-tab');

      // Update button styles
      tabButtons.forEach(b => {
        b.classList.remove('bg-emerald-900', 'text-white', 'shadow-md');
        b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      });
      btn.classList.remove('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      btn.classList.add('bg-emerald-900', 'text-white', 'shadow-md');

      // Filter items
      menuItems.forEach(item => {
        const itemCategories = item.getAttribute('data-menu-category').split(' ');
        if (category === 'all' || itemCategories.includes(category)) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* 8. Daily Market Table Interactive Section */
function initMarketTableTabs() {
  const marketTabs = document.querySelectorAll('[data-market-step]');
  const marketPanels = document.querySelectorAll('[data-market-panel]');

  if (marketTabs.length === 0) return;

  marketTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = tab.getAttribute('data-market-step');

      marketTabs.forEach(t => {
        t.classList.remove('border-emerald-800', 'text-emerald-900', 'bg-emerald-50/50');
        t.classList.add('border-transparent', 'text-stone-500', 'hover:text-stone-800');
      });
      tab.classList.remove('border-transparent', 'text-stone-500', 'hover:text-stone-800');
      tab.classList.add('border-emerald-800', 'text-emerald-900', 'bg-emerald-50/50');

      marketPanels.forEach(panel => {
        if (panel.getAttribute('data-market-panel') === step) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

/* 9. Interactive Forms with Friendly Feedback */
function initForms() {
  // Newsletter Form
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('🎉 Thank you! Check your inbox for $5 off your first order.', 'success');
        input.value = '';
      }
    });
  });

  // Contact / Inquiry Form
  const contactForm = document.getElementById('catering-inquiry-form') || document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const origText = btn ? btn.innerHTML : 'Submit';
      if (btn) {
        btn.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg> Sending Request...`;
        btn.disabled = true;
      }

      setTimeout(() => {
        if (btn) {
          btn.innerHTML = `✓ Request Received!`;
          btn.classList.remove('bg-emerald-800');
          btn.classList.add('bg-emerald-600');
        }
        showToast('Thank you! Our Midtown catering manager will contact you within 30 minutes.', 'success');
        contactForm.reset();
        setTimeout(() => {
          if (btn) {
            btn.innerHTML = origText;
            btn.disabled = false;
            btn.classList.remove('bg-emerald-600');
            btn.classList.add('bg-emerald-800');
          }
        }, 4000);
      }, 1000);
    });
  }
}

/* Toast Notification Utility */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-950 text-emerald-100 border-emerald-700' : 'bg-stone-900 text-stone-100 border-stone-700';
  toast.className = `${bg} border px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3 pointer-events-auto transition-all duration-300 transform translate-y-8 opacity-0 text-sm font-medium`;
  toast.innerHTML = `
    <span class="text-emerald-400 font-bold text-lg">✦</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-8', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}
