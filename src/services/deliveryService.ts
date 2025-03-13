import { useDeliveryStore } from '@/stores/deliveryStore'
import mockDeliveryInfo from '@/mocks/deliveryInfo'

const deliveryStore = useDeliveryStore()

class DeliveryService {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  static async retrieveDeliveryInfo() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      deliveryStore.setDelivery(mockDeliveryInfo)
    } catch (error) {
      throw new Error(`retrieveDeliveryInfo failed: ${error}`)
    }
  }
}

export default DeliveryService
