import { defineStore } from 'pinia'
import type { UpcomingDelivery } from '@/models/delivery'

export const useDeliveryStore = defineStore('delivery', {
  state: (): UpcomingDelivery => ({
    deliveryTime: null,
    address: null,
    status: null,
  }),
  actions: {
    setDelivery(delivery: UpcomingDelivery) {
      this.deliveryTime = delivery.deliveryTime
      this.address = delivery.address
      this.status = delivery.status
    },
    clearAll() {
      this.deliveryTime = null
      this.address = null
      this.status = null
    },
  },
})
