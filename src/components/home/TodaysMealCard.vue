<template>
  <ion-card class="p-4 w-full rounded-3xl shadow-sm">
    <div class="flex items-center">
      <ion-icon :icon="restaurantOutline" alt="Meal icon" class="text-2xl mr-2" />
      <div class="text-xl font-bold">Today's Meals</div>
    </div>

    <!-- If loading -->
    <div v-if="mealStore.$state.isLoading">
      <ion-skeleton-text animated class="mt-4" style="width: 100%; height: 4rem" />
      <ion-skeleton-text animated class="mt-4" style="width: 100%; height: 2rem" />
    </div>

    <!-- If meal has been selected for today -->
    <div v-else-if="mealStore.todaysMeals?.lunch || mealStore.todaysMeals?.dinner" class="mt-4">
      <!-- Meals -->
      <div class="flex flex-col gap-4">
        <div v-if="mealStore.todaysMeals?.lunch" class="flex gap-4 items-center">
          <img :src="mealStore.todaysMeals.lunch.img" class="w-16 h-16 object-cover rounded-lg" />
          <div>
            <div class="text-lg">Lunch</div>
            <div class="text-xl font-semibold">{{ mealStore.todaysMeals.lunch.name }}</div>
          </div>
        </div>
        <div v-if="mealStore.todaysMeals?.dinner" class="flex gap-4 items-center">
          <img :src="mealStore.todaysMeals.dinner.img" class="w-16 h-16 object-cover rounded-lg" />
          <div>
            <div class="text-lg">Dinner</div>
            <div class="text-xl font-semibold">{{ mealStore.todaysMeals.dinner.name }}</div>
          </div>
        </div>
      </div>

      <!-- Delivery Info -->
      <div v-if="deliveryStore.$state.deliveryTime" class="mt-4">
        <div>
          Next delivery at
          <strong>{{ format(deliveryStore.$state.deliveryTime, 'hh:mm a') }}</strong>
        </div>
        <div>
          to <strong>{{ authStore.$state.user?.address }}</strong>
        </div>
      </div>
    </div>

    <!-- If no meal selected for today -->
    <div v-else>
      <div class="mt-4 text-3xl font-semibold">No meals selected</div>
      <div class="mt-4 text-lg">You have not ordered any meals for today.</div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { useMealStore } from '@/stores/mealStore'
import { useDeliveryStore } from '@/stores/deliveryStore'
import { IonCard, IonIcon, IonSkeletonText } from '@ionic/vue'
import { restaurantOutline } from 'ionicons/icons'
import { format } from 'date-fns'

const authStore = useAuthStore()
const mealStore = useMealStore()
const deliveryStore = useDeliveryStore()
</script>
