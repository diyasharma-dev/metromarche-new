import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import BuildView from '../views/BuildView.vue';
import CateringView from '../views/CateringView.vue';
import AboutView from '../views/AboutView.vue';
import RewardsView from '../views/RewardsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Metro Marché | 100% Seed Oil-Free Café & Corporate Catering | Midtown NYC' }
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
    meta: { title: 'Artisan Menu (112 Seed-Oil Free Items) | Metro Marché NYC' }
  },
  {
    path: '/build',
    name: 'build',
    component: BuildView,
    meta: { title: 'Build Your Custom Market Bowl | Metro Marché NYC' }
  },
  {
    path: '/catering',
    name: 'catering',
    component: CateringView,
    meta: { title: 'Midtown Corporate Catering | Metro Marché NYC' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'Why Zero Seed Oils? Our Heritage | Metro Marché' }
  },
  {
    path: '/rewards',
    name: 'rewards',
    component: RewardsView,
    meta: { title: 'Marché Rewards App & Loyalty Program | Metro Marché' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: '30 W 57th St Location & Subway Transit | Metro Marché' }
  },
  {
    path: '/order',
    redirect: '/menu'
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
