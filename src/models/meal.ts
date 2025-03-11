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

export interface Provider {
  id: string
  name: string
  price: number
  mealOptions: Meal[]
  logoSrc: string
}

export interface SelectedDayMeals {
  date: Date
  lunch?: Meal | null
  dinner?: Meal | null
}