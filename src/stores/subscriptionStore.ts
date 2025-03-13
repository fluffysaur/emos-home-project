import { defineStore } from 'pinia'
import type { SubscriptionState } from '@/models/subscription'

export const useSubscriptionStore = defineStore('subscription', {
  state: (): SubscriptionState => ({
    selectedSubscription: null,
  }),
  actions: {
    setSelectedSubscription(subscription: SubscriptionState['selectedSubscription']) {
      this.selectedSubscription = subscription
    },
    clearSelectedSubscription() {
      this.selectedSubscription = null
    },
  },
})
