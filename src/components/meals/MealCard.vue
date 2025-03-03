<template>
  <ion-card class="meal-card rounded-xl overflow-hidden">
    <div class="relative">
      <img :src="meal.imageUrl" class="w-full h-32 object-cover" />
      <div
        v-if="meal.dietaryInfo.isLowSodium"
        class="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
      >
        Low Sodium
      </div>
      <div
        v-if="meal.dietaryInfo.isVegetarian"
        class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs"
      >
        Vegetarian
      </div>
    </div>

    <ion-card-header class="px-5 py-2">
      <ion-card-title class="text-senior font-bold">{{ meal.name }}</ion-card-title>
      <div class="flex items-center mt-1">
        <ion-icon :icon="restaurantOutline" class="text-gray-500 mr-1"></ion-icon>
        <ion-card-subtitle>{{ meal.dietaryInfo.calories }} calories</ion-card-subtitle>
      </div>
    </ion-card-header>

    <ion-card-content>
      <p class="text-senior text-gray-700">{{ meal.description }}</p>

      <div class="flex mt-4 gap-2">
        <div
          v-if="meal.dietaryInfo.isHalal"
          class="bg-hospital-light text-hospital-blue px-2 py-1 rounded text-xs"
        >
          Halal
        </div>
        <div
          v-if="meal.dietaryInfo.isGlutenFree"
          class="bg-hospital-light text-hospital-blue px-2 py-1 rounded text-xs"
        >
          Gluten Free
        </div>
      </div>

      <div class="mt-4">
        <ion-button
          expand="block"
          :color="isSelected ? 'success' : 'primary'"
          @click="toggleSelection"
          class="text-senior"
        >
          <template v-slot:start>
            <ion-icon :icon="isSelected ? checkmarkCircle : add"></ion-icon>
          </template>
          {{ isSelected ? 'Selected' : 'Select Meal' }}
        </ion-button>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/vue'
import { restaurantOutline, add, checkmarkCircle } from 'ionicons/icons'
import { useMealsStore } from '@/stores/meals'
import type { Meal } from '@/models/meal'

const props = defineProps<{
  meal: Meal
}>()

const mealsStore = useMealsStore()

const key = computed(() => `${props.meal.date}-${props.meal.mealType}`)
const isSelected = computed(() => mealsStore.selectedMeals[key.value] === props.meal.id)

const toggleSelection = () => {
  if (isSelected.value) {
    // If already selected, we could provide an option to deselect
    // or just leave it as is
  } else {
    mealsStore.selectMeal(props.meal.date, props.meal.mealType, props.meal.id)
  }
}
</script>
