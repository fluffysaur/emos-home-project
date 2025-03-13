import { defineStore } from 'pinia'
import type { SubscriptionState } from '@/models/subscription'
import type { set } from 'date-fns'

export const useSubscriptionStore = defineStore('subscription', {
  state: (): SubscriptionState => ({
    selectedSubscription: null,
    isLoading: false,
  }),
  actions: {
    setSelectedSubscription(subscription: SubscriptionState['selectedSubscription']) {
      this.selectedSubscription = subscription
    },
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading
    },
    clearState() {
      this.selectedSubscription = null
      this.isLoading = false
    },
  },
})
