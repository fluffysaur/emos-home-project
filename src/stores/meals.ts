import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { WeeklyMenu, MealsState } from '@/models/meal'
import { fetchWeeklyMenu, orderMeal } from '@/services/mealService'

export const useMealsStore = defineStore('meals', () => {
  const weeklyMenu = ref<WeeklyMenu | null>(null)
  const selectedMeals = ref<Record<string, string>>({})
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function loadWeeklyMenu() {
    isLoading.value = true
    error.value = null

    try {
      weeklyMenu.value = await fetchWeeklyMenu()
    } catch (err: any) {
      error.value = err.message || 'Failed to load menu'
    } finally {
      isLoading.value = false
    }
  }

  function selectMeal(date: string, mealType: 'lunch' | 'dinner', mealId: string) {
    const key = `${date}-${mealType}`
    selectedMeals.value[key] = mealId
    // Save selection to localStorage
    localStorage.setItem('selectedMeals', JSON.stringify(selectedMeals.value))
  }

  async function submitMealOrders() {
    isLoading.value = true
    error.value = null

    try {
      await orderMeal(selectedMeals.value)
      // Clear selections after successful order
      // selectedMeals.value = {};
    } catch (err: any) {
      error.value = err.message || 'Failed to submit orders'
    } finally {
      isLoading.value = false
    }
  }

  function loadStoredSelections() {
    const storedSelections = localStorage.getItem('selectedMeals')
    if (storedSelections) {
      selectedMeals.value = JSON.parse(storedSelections)
    }
  }

  return {
    weeklyMenu,
    selectedMeals,
    isLoading,
    error,
    loadWeeklyMenu,
    selectMeal,
    submitMealOrders,
    loadStoredSelections,
  }
})
