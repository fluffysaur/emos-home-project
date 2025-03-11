import { useDeliveryStore } from '@/stores/deliveryStore';

const deliveryStore = useDeliveryStore();

class DeliveryService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  static async retrieveDeliveryInfo() {
    const mockDeliveryInfo = {
      deliveryTime: new Date(Date.now() + 20 * 60 * 1000),
      address: "Blk 123 Bukit Batok Central #13-142",
      status: "in progress"
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      deliveryStore.setDelivery(mockDeliveryInfo)
    } catch (error) {
      throw new Error(`retrieveDeliveryInfo failed: ${error}`);
    }
  }
}

export default DeliveryService;