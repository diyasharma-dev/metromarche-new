import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import CateringView from '../views/CateringView.vue';
import AboutView from '../views/AboutView.vue';
import RewardsView from '../views/RewardsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Metro Marché | 100% Seed Oil-Free Café & Corporate Catering' }
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
    meta: { title: 'Full Artisan Menu | Metro Marché Midtown NYC' }
  },
  {
    path: '/catering',
    name: 'catering',
    component: CateringView,
    meta: { title: 'Corporate Catering | Metro Marché Midtown NYC' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'Our Story & Seed Oil-Free Standard | Metro Marché' }
  },
  {
    path: '/rewards',
    name: 'rewards',
    component: RewardsView,
    meta: { title: 'Metro Rewards App | Earn Points & Free Meals' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Location & Transit | 30 W 57th St, Midtown NYC' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
