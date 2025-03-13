<template>
  <ion-content>
    <back-button />

    <section class="mx-6">
      <p class="text-lg font-semibold mb-4">Your doctor's recommendations</p>
      <ion-card class="bg-white rounded-lg mb-4">
        <ion-card-content>
          <ion-text color="dark">
            <FoodList
              title="Dietary Restrictions"
              :items="authStore.$state.user?.dietaryRestrictions || []"
              :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
            />
          </ion-text>
        </ion-card-content>
      </ion-card>

      <ion-card class="bg-white rounded-lg">
        <ion-card-content>
          <ion-text color="dark">
            <FoodList
              title="Foods you should eat more"
              :items="recommendedFoods"
              :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
            />
          </ion-text>
        </ion-card-content>
      </ion-card>

      <ion-card class="bg-white rounded-lg">
        <ion-card-content>
          <ion-text color="dark">
            <FoodList
              class="mt-5"
              title="Foods you should avoid"
              :items="foodsToAvoid"
              :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
            />
          </ion-text>
        </ion-card-content>
      </ion-card>
    </section>
  </ion-content>
</template>

<script setup lang="ts">
import BackButton from '@/components/common/BackButton.vue'
import FoodList from '@/components/onboarding/FoodList.vue'
import { IonContent, IonCard, IonCardContent, IonText } from '@ionic/vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const recommendedFoods = [
  'Fruits and vegetables',
  'Whole grains',
  'Lean protein',
  'Low-fat dairy',
  'Calcium-rich foods',
]

const foodsToAvoid = ['Saturated and trans fats', 'Foods high in salt and sugar', 'Alcohol']
</script>
