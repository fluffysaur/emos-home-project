import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User, AuthState } from '@/models/user'
import { login, register, logout } from '@/services/authService'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function loginUser(email: string, password: string) {
    isLoading.value = true
    error.value = null

    try {
      const userData = await login(email, password)
      user.value = userData
      isAuthenticated.value = true
    } catch (err: any) {
      error.value = err.message || 'Login failed'
    } finally {
      isLoading.value = false
    }
  }

  async function registerUser(userData: Partial<User>, password: string) {
    isLoading.value = true
    error.value = null

    try {
      const newUser = await register(userData, password)
      user.value = newUser
      isAuthenticated.value = true
    } catch (err: any) {
      error.value = err.message || 'Registration failed'
    } finally {
      isLoading.value = false
    }
  }

  async function logoutUser() {
    isLoading.value = true

    try {
      await logout()
      user.value = null
      isAuthenticated.value = false
    } catch (err: any) {
      error.value = err.message || 'Logout failed'
    } finally {
      isLoading.value = false
    }
  }

  function checkAuthState() {
    // Implementation for checking stored auth tokens
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
      isAuthenticated.value = true
    }
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    loginUser,
    registerUser,
    logoutUser,
    checkAuthState,
  }
})
