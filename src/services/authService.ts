import { useAuthStore } from '@/stores/authStore'
import { useMealStore } from '@/stores/mealStore'
import { useDeliveryStore } from '@/stores/deliveryStore'
import mockUser from '@/mocks/user'

const authStore = useAuthStore()
const mealStore = useMealStore()
const deliveryStore = useDeliveryStore()

class AuthService {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  static async login() {
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
