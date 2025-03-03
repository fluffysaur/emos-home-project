import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginPage from '@/views/auth/LoginPage.vue'
import SignUpPage from '@/views/auth/SignUpPage.vue'
import WeeklyMenuPage from '@/views/meals/WeeklyMenuPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/menu',
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'Register',
    component: SignUpPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/menu',
    name: 'WeeklyMenu',
    component: WeeklyMenuPage,
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

// Navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Check if the route requires authentication
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !authStore.isAuthenticated) {
    // User is not authenticated but route requires auth, redirect to login
    next({ name: 'Login' })
  } else if (
    !requiresAuth &&
    authStore.isAuthenticated &&
    (to.name === 'Login' || to.name === 'Register')
  ) {
    // User is authenticated and trying to access login/register page, redirect to menu
    next({ name: 'WeeklyMenu' })
  } else {
    // All other cases, proceed as normal
    next()
  }
})

export default router
