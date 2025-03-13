import type { SelectedDayMeals } from '@/models/meal'

const mockSelectedMeals = [] as SelectedDayMeals[]
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

export default mockSelectedMeals
