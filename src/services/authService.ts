import { useAuthStore } from '@/stores/authStore'
import { useMealStore } from '@/stores/mealStore'
import { useDeliveryStore } from '@/stores/deliveryStore'

const authStore = useAuthStore()
const mealStore = useMealStore()
const deliveryStore = useDeliveryStore()

class AuthService {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  static async login() {
    const mockUser = {
      id: 'S1234567A',
      name: 'ANDY TAN WEE MING',
      phone: '91234567',
      address: 'Blk 123 Bukit Batok Central #13-142',
      isNewUser: true,
      dietaryRestrictions: ['Low salt', 'Low sugar', 'Blended food'],
      subscription: null,
      medicalInfo: {
        department: 'MEDICAL ONCOLOGY',
        doctor: 'DR. LIM LAUREN UY',
      },
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      authStore.setUser(mockUser)
      authStore.setToken('mock-token')
    } catch (error) {
      throw new Error(`Login failed: ${error}`)
    }
  }

  static async logout() {
    authStore.clearAuth()
    mealStore.clearAll()
    deliveryStore.clearAll()
    console.log('Logged out, stores cleared')
  }
}

export default AuthService
