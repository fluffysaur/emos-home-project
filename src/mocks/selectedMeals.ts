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
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCBLMiNLCaunzTYj0M8ZIM39cSR8nSquSig&s',
  'https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg',
  'https://images.themodernproper.com/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=aa3b1ccfd1f3aaf4abf2986a325b522c',
  'https://www.myplantifulcooking.com/wp-content/uploads/2022/04/japanese-tofu-salad-featured.jpg',
  'https://static01.nyt.com/images/2022/06/02/dining/ShrimpScampi_thumb/ShrimpScampi_thumb-mediumSquareAt3X.jpg',
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
