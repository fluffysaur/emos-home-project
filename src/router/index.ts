import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

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
  {
    path: '/subscription/choose-meal-provider',
    name: 'ChooseMealProvider',
    component: () => import('@/views/subscription/ChooseMealProviderPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/subscription/choose-meal-provider/provider-details',
    name: 'MealProviderDetails',
    component: () => import('@/views/subscription/MealProviderDetailsPage.vue'),
    meta: { requiresAuth: true },
    props: (route: { query: { providerId: string } }) => ({
      query: { providerId: route.query.providerId },
    }),
  },
  {
    path: '/subscription/subscribe-provider-details',
    name: 'SubscribeProviderDetails',
    component: () => import('@/views/subscription/SubscribeProviderDetailsPage.vue'),
    meta: { requiresAuth: true },
    props: (route: { query: { providerId: string } }) => ({
      query: { providerId: route.query.providerId },
    }),
  },
  {
    path: '/subscription/review',
    name: 'ReviewSubscription',
    component: () => import('@/views/subscription/ReviewSubscriptionPage.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.$state.token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
