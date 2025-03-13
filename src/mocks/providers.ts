import type { Provider } from '@/models/meal'

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
    prices: {
      meal: 5.99,
      weekly: 35.99,
      monthly: 150.99,
    },
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
    name: 'Changi General Hospital',
    prices: {
      meal: 8.99,
      weekly: 49.99,
      monthly: 199.99,
    },
    logo: 'https://www.cgh.com.sg/Style%20Library/Common/images/header/site-logo.png',
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
    prices: {
      meal: 7.49,
      weekly: 44.99,
      monthly: 179.99,
    },
    logo: 'https://www.mountelizabeth.com.sg/images/default-source/default-album/mount_elizabeth_horizontal_logo_gold_resize.png',
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
    prices: {
      meal: 6.99,
      weekly: 39.99,
      monthly: 159.99,
    },
    logo: 'https://www.gleneagles.com.sg/images/gehlibraries/default-album/logo-geh.png',
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
] as Provider[]

export default mockProviders
