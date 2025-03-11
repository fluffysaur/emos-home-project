import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/login/loading',
    name: 'LoadingPage',
    component: () => import('@/views/auth/LoadingPage.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    name: 'Homepage',
    component: () => import('@/views/homepage/HomePage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/upcoming-meals',
    name: 'UpcomingMeals',
    component: () => import('@/views/meals/UpcomingMealsPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/onboarding',
    name: 'OnboardingRecords',
    component: () => import('@/views/onboarding/OnboardingRecords.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/onboarding/recommendations',
    name: 'OnboardingRecommendations',
    component: () => import('@/views/onboarding/OnboardingRecommendations.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/account/AccountPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/recommendations',
    name: 'DoctorRecommendations',
    component: () => import('@/views/account/RecommendationsPage.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
