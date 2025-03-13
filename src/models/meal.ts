export interface Meal {
  id: string
  name: string
  img?: string
  description?: string
  type: 'lunch' | 'dinner'
  date: Date
  dietaryPreferences: string[] | null
  allergens: string[] | null
}

export interface Prices {
  meal: number
  weekly: number
  monthly: number
}

export interface Provider {
  id: string
  name: string
  prices: Prices
  mealOptions: Meal[]
  logo: string
}

export interface SelectedDayMeals {
  date: Date
  lunch?: Meal | null
  dinner?: Meal | null
}
