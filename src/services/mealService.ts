import { useMealStore } from '@/stores/mealStore'
import mockProviders from '@/mocks/providers'
import mockSelectedMeals from '@/mocks/selectedMeals'

const store = useMealStore()

class MealService {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  static async retrieveProviders() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      store.setProviders(mockProviders)
    } catch (error) {
      throw new Error(`retrieveProviders failed: ${error}`)
    }
  }

  static async retrieveSelectedMeals() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      store.setSelectedMeals(mockSelectedMeals)
      console.log('store meals', store.$state.selectedMeals)
    } catch (error) {
      throw new Error(`retrieveSelectedMeals failed: ${error}`)
    }
  }
}

export default MealService
