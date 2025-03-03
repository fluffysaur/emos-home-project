export interface Meal {
  id: string
  name: string
  description: string
  imageUrl: string
  mealType: 'lunch' | 'dinner'
  dietaryInfo: {
    calories: number
    isVegetarian: boolean
    isHalal: boolean
    isGlutenFree: boolean
    isLowSodium: boolean
  }
  date: string // ISO formatted date
  available: boolean
}

export interface DailyMenu {
  date: string
  lunch: Meal[]
  dinner: Meal[]
}

export interface WeeklyMenu {
  weekStartDate: string
  weekEndDate: string
  menus: DailyMenu[]
}

export interface MealsState {
  weeklyMenu: WeeklyMenu | null
  selectedMeals: Record<string, string> // date-mealType -> mealId
  isLoading: boolean
  error: string | null
}
