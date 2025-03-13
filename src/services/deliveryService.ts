import { useDeliveryStore } from '@/stores/deliveryStore'
import mockDeliveryInfo from '@/mocks/deliveryInfo'

const deliveryStore = useDeliveryStore()
const randomDuration = () => Math.random() * (1500 - 100) + 100

class DeliveryService {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  static async retrieveDeliveryInfo() {
    try {
      await new Promise((resolve) => setTimeout(resolve, randomDuration()))
      deliveryStore.setDelivery(mockDeliveryInfo)
    } catch (error) {
      throw new Error(`retrieveDeliveryInfo failed: ${error}`)
    }
  }
}

export default DeliveryService
