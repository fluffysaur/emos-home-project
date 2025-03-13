import { defineStore } from 'pinia'
import type { User, AuthState } from '@/models/user'
import type { Subscription } from '@/models/subscription'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),
  actions: {
    setUser(user: User) {
      this.user = user
    },
    setSubscription(subscription: Subscription) {
      if (!this.user) {
        throw new Error('User is not set')
      }
      this.user.subscription = subscription
    },
    setToken(token: string) {
      this.token = token
    },
    clearAuth() {
      this.user = null
      this.token = null
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
})
