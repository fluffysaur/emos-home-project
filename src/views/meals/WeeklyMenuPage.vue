<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="text-senior font-bold">Weekly Menu</ion-title>
        <template v-slot:end>
          <ion-buttons>
            <ion-button @click="submitOrders">
              <ion-icon :icon="saveOutline" class="mr-1"></ion-icon>
              Save Orders
            </ion-button>
          </ion-buttons>
        </template>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="flex items-center mb-4">
        <div>
          <h2 class="text-xl font-bold">Hello, {{ userName }}</h2>
          <p class="text-gray-600">{{ today }}</p>
        </div>
      </div>

      <!-- Week day selector -->
      <div class="mb-6">
        <week-day-selector v-model="selectedDate" :dates="availableDates" v-if="weeklyMenu" />
      </div>

      <!-- Loading state -->
      <div v-if="isLoading" class="flex justify-center items-center h-48">
        <ion-spinner name="circular"></ion-spinner>
        <span class="ml-2 text-senior">Loading menu...</span>
      </div>

      <!-- Error state -->
      <ion-card v-else-if="error" class="p-4">
        <ion-card-content class="text-center text-senior text-red-500">
          {{ error }}
          <ion-button expand="block" @click="loadMenu" class="mt-4"> Retry </ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Menu content -->
      <div v-else-if="selectedDayMenu" class="pb-24">
        <!-- Lunch section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <ion-icon :icon="sunny" class="text-yellow-500 mr-2 text-xl"></ion-icon>
            <h3 class="text-lg font-bold">Lunch</h3>
          </div>

          <div v-if="selectedDayMenu.lunch.length > 0" class="grid grid-cols-1 gap-4">
            <meal-card
              v-for="meal in selectedDayMenu.lunch"
              :key="`lunch-${meal.id}`"
              :meal="meal"
            />
          </div>
          <p v-else class="text-gray-500 text-center py-4 text-senior">
            No lunch options available for this day.
          </p>
        </div>

        <!-- Dinner section -->
        <div>
          <div class="flex items-center mb-4">
            <ion-icon :icon="moon" class="text-indigo-500 mr-2 text-xl"></ion-icon>
            <h3 class="text-lg font-bold">Dinner</h3>
          </div>

          <div v-if="selectedDayMenu.dinner.length > 0" class="grid grid-cols-1 gap-4">
            <meal-card
              v-for="meal in selectedDayMenu.dinner"
              :key="`dinner-${meal.id}`"
              :meal="meal"
            />
          </div>
          <p v-else class="text-gray-500 text-center py-4 text-senior">
            No dinner options available for this day.
          </p>
        </div>
      </div>

      <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        :duration="3000"
        :color="toastColor"
        @didDismiss="showToast = false"
      ></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonSpinner,
  IonCard,
  IonCardContent,
  IonToast,
} from '@ionic/vue'
import { saveOutline, sunny, moon } from 'ionicons/icons'
import { useAuthStore } from '@/stores/auth'
import { useMealsStore } from '@/stores/meals'
import WeekDaySelector from '@/components/meals/WeekDaySelector.vue'
import MealCard from '@/components/meals/MealCard.vue'

const authStore = useAuthStore()
const mealsStore = useMealsStore()

const userName = computed(() => authStore.user?.name.split(' ')[0] || 'Guest')
const today = computed(() =>
  new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)

const isLoading = computed(() => mealsStore.isLoading)
const error = computed(() => mealsStore.error)
const weeklyMenu = computed(() => mealsStore.weeklyMenu)

const availableDates = computed(() => {
  if (!weeklyMenu.value) return []
  return weeklyMenu.value.menus.map((menu) => menu.date)
})

const selectedDate = ref('')
const showToast = ref(false)
const toastMessage = ref('')
const toastColor = ref('success')

const selectedDayMenu = computed(() => {
  if (!weeklyMenu.value || !selectedDate.value) return null

  return weeklyMenu.value.menus.find((menu) => menu.date === selectedDate.value)
})

const loadMenu = async () => {
  await mealsStore.loadWeeklyMenu()
  if (weeklyMenu.value && weeklyMenu.value.menus.length > 0) {
    selectedDate.value = weeklyMenu.value.menus[0].date
    mealsStore.loadStoredSelections()
  }
}

const submitOrders = async () => {
  try {
    await mealsStore.submitMealOrders()
    toastMessage.value = 'Your meal selections have been saved!'
    toastColor.value = 'success'
    showToast.value = true
  } catch (err) {
    toastMessage.value = 'Failed to save your meal selections.'
    toastColor.value = 'danger'
    showToast.value = true
  }
}

onMounted(() => {
  loadMenu()
})
</script>
