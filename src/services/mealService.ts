import type { WeeklyMenu, Meal } from '@/models/meal'

// Generate dates for the current week
function generateWeekDates(): string[] {
  const dates: string[] = []
  const today = new Date()
  const currentDay = today.getDay()

  // Start from Monday (or the next Monday if today is after Wednesday)
  const startDay = currentDay > 3 ? 8 - currentDay : 1 - currentDay

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + startDay + i)
    dates.push(date.toISOString().split('T')[0])
  }

  return dates
}

// Mock meal data
const mockMeals: Meal[] = [
  {
    id: 'm1',
    name: 'Steamed Fish with Vegetables',
    description: 'Fresh steamed fish with seasonal vegetables and brown rice',
    imageUrl: 'https://source.unsplash.com/random/300x200?fish',
    mealType: 'lunch',
    dietaryInfo: {
      calories: 450,
      isVegetarian: false,
      isHalal: true,
      isGlutenFree: true,
      isLowSodium: true,
    },
    date: '',
    available: true,
  },
  {
    id: 'm2',
    name: 'Chicken Rice',
    description: 'Traditional Singaporean chicken rice with cucumber',
    imageUrl: 'https://source.unsplash.com/random/300x200?chicken-rice',
    mealType: 'lunch',
    dietaryInfo: {
      calories: 550,
      isVegetarian: false,
      isHalal: true,
      isGlutenFree: false,
      isLowSodium: false,
    },
    date: '',
    available: true,
  },
  {
    id: 'm3',
    name: 'Vegetable Curry with Rice',
    description: 'Mixed vegetable curry served with white rice',
    imageUrl: 'https://source.unsplash.com/random/300x200?vegetable-curry',
    mealType: 'dinner',
    dietaryInfo: {
      calories: 480,
      isVegetarian: true,
      isHalal: true,
      isGlutenFree: true,
      isLowSodium: false,
    },
    date: '',
    available: true,
  },
  {
    id: 'm4',
    name: 'Pork Noodle Soup',
    description: 'Noodles in a savory pork broth with greens',
    imageUrl: 'https://source.unsplash.com/random/300x200?noodle-soup',
    mealType: 'dinner',
    dietaryInfo: {
      calories: 520,
      isVegetarian: false,
      isHalal: false,
      isGlutenFree: false,
      isLowSodium: false,
    },
    date: '',
    available: true,
  },
]

export async function fetchWeeklyMenu(): Promise<WeeklyMenu> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const dates = generateWeekDates()
      const menus = dates.map((date) => {
        // Generate lunch and dinner options for each day
        return {
          date,
          lunch: mockMeals
            .filter((meal) => meal.mealType === 'lunch')
            .map((meal) => ({ ...meal, date })),
          dinner: mockMeals
            .filter((meal) => meal.mealType === 'dinner')
            .map((meal) => ({ ...meal, date })),
        }
      })

      resolve({
        weekStartDate: dates[0],
        weekEndDate: dates[6],
        menus,
      })
    }, 1000)
  })
}

export async function orderMeal(selections: Record<string, string>): Promise<void> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Orders submitted:', selections)
      resolve()
    }, 800)
  })
}
