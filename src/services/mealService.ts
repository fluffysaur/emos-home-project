import { useMealStore } from '@/stores/mealStore'
import type { Meal } from '@/models/meal'

const store = useMealStore()

class MealService {
  private apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  static async retrieveProviders() {
    const mealNames = [
      'Grilled Chicken',
      'Salmon',
      'Beef Steak',
      'Vegetable Stir Fry',
      'Pasta Primavera',
      'Tofu Salad',
      'Shrimp Scampi',
    ]
    const mealImages = [
      'https://www.balancenutrition.in/images/receipe-img/1663857926_large.jpeg',
      'https://www.eatingwell.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
    ]

    const mockProviders = [
      {
        id: 'P1234567A',
        name: 'Tan Tock Seng Hospital',
        price: 5.99,
        logo: 'https://lienfoundation.org/wp-content/uploads/2024/01/ttsh-logo.png',
        mealOptions: mealNames.map((name, index) => ({
          id: `M1234567${String.fromCharCode(65 + index)}`,
          name,
          img: mealImages[index % mealImages.length],
          description: `${name} served with a medley of fresh, mixed vegetables.`,
          type: index % 2 === 0 ? 'lunch' : 'dinner',
          date: new Date(),
          dietaryPreferences: ['Low salt', 'Low sugar'],
          allergens: ['Soy', 'Gluten', 'Egg'],
        })),
      },
      {
        id: 'C14523B',
        name: 'Changi Hospital',
        price: 8.99,
        logo: 'https://lienfoundation.org/wp-content/uploads/2024/01/ttsh-logo.png',
        mealOptions: mealNames.map((name, index) => ({
          id: `M1234567${String.fromCharCode(65 + index)}`,
          name,
          img: mealImages[index % mealImages.length],
          description: `${name} served with a medley of fresh, mixed vegetables.`,
          type: index % 2 === 0 ? 'lunch' : 'dinner',
          date: new Date(),
          dietaryPreferences: ['Low salt', 'Low sugar'],
          allergens: ['Soy', 'Gluten', 'Egg'],
        })),
      },
      {
        id: 'P7890123C',
        name: 'Mount Elizabeth Hospital',
        price: 7.49,
        logo: 'https://lienfoundation.org/wp-content/uploads/2024/01/ttsh-logo.png',
        mealOptions: mealNames.map((name, index) => ({
          id: `M7890123${String.fromCharCode(65 + index)}`,
          name,
          img: mealImages[index % mealImages.length],
          description: `${name} served with a medley of fresh, mixed vegetables.`,
          type: index % 2 === 0 ? 'lunch' : 'dinner',
          date: new Date(),
          dietaryPreferences: ['Low salt', 'Low sugar'],
          allergens: ['Soy', 'Gluten', 'Egg'],
        })),
      },
      {
        id: 'C9876543D',
        name: 'Gleneagles Hospital',
        price: 6.99,
        logo: 'https://lienfoundation.org/wp-content/uploads/2024/01/ttsh-logo.png',
        mealOptions: mealNames.map((name, index) => ({
          id: `M9876543${String.fromCharCode(65 + index)}`,
          name,
          img: mealImages[index % mealImages.length],
          description: `${name} served with a medley of fresh, mixed vegetables.`,
          type: index % 2 === 0 ? 'lunch' : 'dinner',
          date: new Date(),
          dietaryPreferences: ['Low salt', 'Low sugar'],
          allergens: ['Soy', 'Gluten', 'Egg'],
        })),
      },
    ]

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      store.setProviders(mockProviders)
    } catch (error) {
      throw new Error(`retrieveProviders failed: ${error}`)
    }
  }

  static async retrieveSelectedMeals() {
    const mockSelectedMeals = [] as SelectedDayMeals[]
    const mealTypes = ['lunch', 'dinner']
    const mealNames = [
      'Grilled Chicken',
      'Salmon',
      'Beef Steak',
      'Vegetable Stir Fry',
      'Pasta Primavera',
      'Tofu Salad',
      'Shrimp Scampi',
    ]
    const mealImages = [
      'https://www.balancenutrition.in/images/receipe-img/1663857926_large.jpeg',
      'https://www.eatingwell.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
      'https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg',
    ]

    for (let i = 0; i < 7; i++) {
      const date = new Date(new Date().setDate(new Date().getDate() + i))
      const lunch = {
        id: `M${i}L`,
        name: mealNames[i % mealNames.length],
        img: mealImages[i % mealImages.length],
        description: `${mealNames[i % mealNames.length]} served with a medley of fresh, mixed vegetables.`,
        type: 'lunch',
        date: date,
        dietaryPreferences: ['Low salt', 'Low sugar'],
        allergens: ['Soy', 'Gluten', 'Egg'],
      }
      const dinner = {
        id: `M${i}D`,
        name: mealNames[(i + 1) % mealNames.length],
        img: mealImages[(i + 1) % mealImages.length],
        description: `${mealNames[(i + 1) % mealNames.length]} served with a medley of fresh, mixed vegetables.`,
        type: 'dinner',
        date: date,
        dietaryPreferences: ['Low salt', 'Low sugar'],
        allergens: ['Soy', 'Gluten', 'Egg'],
      }
      mockSelectedMeals.push({ date, lunch, dinner })
    }
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
