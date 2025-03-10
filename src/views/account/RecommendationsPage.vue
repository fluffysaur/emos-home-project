<template>
  <ion-content>
    <BackButton />

    <section class="mt-9 mx-6">
      <p class="text-lg mb-4">Your doctor's recommendations</p>
      <ion-card class="bg-white rounded-lg">
        <ion-card-content>
          <div class="text-zinc-800">
            <FoodList
              title="Foods you should eat more"
              :items="recommendedFoods"
              :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
            />

            <FoodList
              class="mt-5"
              title="Foods you should avoid"
              :items="foodsToAvoid"
              :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
            />
          </div>
        </ion-card-content>
      </ion-card>
    </section>
  </ion-content>
</template>

<script setup lang="ts">
import BackButton from '@/components/common/BackButton.vue'
import FoodList from '@/components/onboarding/FoodList.vue'
import { IonContent, IonCard, IonCardContent } from '@ionic/vue'

const recommendedFoods = [
  'fruits and vegetables',
  'whole grains',
  'lean protein',
  'low-fat dairy',
  'calcium-rich foods',
]

const foodsToAvoid = ['saturated and trans fats', 'foods high in salt and sugar', 'alcohol']
</script>
