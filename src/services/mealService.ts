import { useMealStore } from '@/stores/mealStore';
import type { Meal } from '@/models/meal';

const store = useMealStore();

class MealService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  static async retrieveProviders() {
    const mockProviders = [
      {
        id: "P1234567A",
        name: "Tan Tock Seng Hospital",
        price: 5.99,
        logoSrc: "https://lienfoundation.org/wp-content/uploads/2024/01/ttsh-logo.png",
        mealOptions: [
          {
            id: "M1234567A",
            name: "Grilled Chicken",
            img: "https://www.balancenutrition.in/images/receipe-img/1663857926_large.jpeg",
            description: "Succulent grilled chicken served with a medley of fresh, mixed vegetables.",
            type: "lunch",
            date: new Date(),
            dietaryPreferences: ["Low salt", "Low sugar"],
            allergens: ["Soy, Gluten, Egg"]
          },
          {
            id: "M1234567B",
            name: "Salmon",
            img: "https://www.eatingwell.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
            description: "Delicious salmon fillet paired with a variety of mixed vegetables.",
            type: "dinner",
            date: new Date(),
            dietaryPreferences: ["Low salt"],
            allergens: null
          }
        ] as Meal[]
      }
    ]

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      store.setProviders(mockProviders);
    } catch (error) {
      throw new Error(`retrieveProviders failed: ${error}`);
    }
  }

  static async retrieveSelectedMeals() {
    const mockSelectedMeals = [] as SelectedDayMeals[];
    const mealTypes = ["lunch", "dinner"];
    const mealNames = ["Grilled Chicken", "Salmon", "Beef Steak", "Vegetable Stir Fry", "Pasta Primavera", "Tofu Salad", "Shrimp Scampi"];
    const mealImages = [
      "https://www.balancenutrition.in/images/receipe-img/1663857926_large.jpeg",
      "https://www.eatingwell.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
      "https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
      "https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
      "https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
      "https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
      "https://www.simplyrecipes.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg"
    ];

    for (let i = 0; i < 7; i++) {
      const date = new Date(new Date().setDate(new Date().getDate() + i));
      const lunch = {
        id: `M${i}L`,
        name: mealNames[i % mealNames.length],
        img: mealImages[i % mealImages.length],
        description: `${mealNames[i % mealNames.length]} served with a medley of fresh, mixed vegetables.`,
        type: "lunch",
        date: date,
        dietaryPreferences: ["Low salt", "Low sugar"],
        allergens: ["Soy", "Gluten", "Egg"]
      };
      const dinner = {
        id: `M${i}D`,
        name: mealNames[(i + 1) % mealNames.length],
        img: mealImages[(i + 1) % mealImages.length],
        description: `${mealNames[(i + 1) % mealNames.length]} served with a medley of fresh, mixed vegetables.`,
        type: "dinner",
        date: date,
        dietaryPreferences: ["Low salt", "Low sugar"],
        allergens: ["Soy", "Gluten", "Egg"]
      };
      mockSelectedMeals.push({ date, lunch, dinner });
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      store.setSelectedMeals(mockSelectedMeals);
      console.log('store meals', store.$state.selectedMeals);
    } catch (error) {
      throw new Error(`retrieveSelectedMeals failed: ${error}`);
    }
  }
}

export default MealService;