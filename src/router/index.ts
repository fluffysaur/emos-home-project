import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

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
    path: '/menu',
    name: 'WeeklyMenu',
    component: () => import('@/views/meals/WeeklyMenuPage.vue'),
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
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// // Navigation guard
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()

//   // Check if the route requires authentication
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

//   if (requiresAuth && !authStore.isAuthenticated) {
//     // User is not authenticated but route requires auth, redirect to login
//     next({ name: 'Login' })
//   } else if (
//     !requiresAuth &&
//     authStore.isAuthenticated &&
//     (to.name === 'Login' || to.name === 'Register')
//   ) {
//     // User is authenticated and trying to access login/register page, redirect to menu
//     next({ name: 'WeeklyMenu' })
//   } else {
//     // All other cases, proceed as normal
//     next()
//   }
// })

export default router
