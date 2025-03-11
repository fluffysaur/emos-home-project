import { defineStore } from 'pinia'
import type { Meal, Provider, SelectedDayMeals } from '@/models/meal'

export const useMealStore = defineStore('meals', {
  state: () => ({
    providers: null as Provider[] | null,
    selectedMeals: null as SelectedDayMeals[] | null,
    isLoading: true,
  }),
  getters: {
    todaysMeals: (state) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      console.log('today', today)
      console.log('selectedMeals', state.selectedMeals)
      const meals =
        state.selectedMeals?.find((sm) => {
          const mealDate = new Date(sm.date)
          mealDate.setHours(0, 0, 0, 0)
          return mealDate.getTime() === today.getTime()
        }) || null
      console.log('meals', meals)
      return meals
    },
    mealsForDateRange: (state) => (startDate: Date, endDate: Date) => {
      startDate.setHours(0, 0, 0, 0)
      endDate.setHours(0, 0, 0, 0)
      return (
        state.selectedMeals?.filter(
          (sm) =>
            sm.date.getTime() >= startDate.getTime() && sm.date.getTime() <= endDate.getTime(),
        ) || []
      )
    },
  },
  actions: {
    setProviders(providers: Provider[]) {
      this.providers = providers
    },
    setSelectedMeals(selectedMeals: SelectedDayMeals[]) {
      this.selectedMeals = selectedMeals
    },
    setMeal(date: Date, meal: Meal | null, type: 'lunch' | 'dinner') {
      const selectedMeal = this.selectedMeals?.find((sm) => sm.date.getTime() === date.getTime())
      if (!selectedMeal) {
        this.selectedMeals?.push({ date, [type]: meal })
      } else {
        selectedMeal[type] = meal
      }
    },
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading
    },
    clearSelectedMeals() {
      this.selectedMeals = null
    },
    clearProviders() {
      this.providers = null
    },
    clearAll() {
      this.clearSelectedMeals()
      this.clearProviders()
      this.setIsLoading(true)
    },
  },
})
