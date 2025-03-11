<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-full">
        <BackButton />
        <ion-grid class="mx-6 mb-4 flex flex-col justify-between">
          <div>
            <div class="text-lg font-semibold mb-4">Your doctor's recommendations</div>
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
          </div>
          <ion-button expand="block" class="mt-6" @click="handleContinue">Continue</ion-button>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BackButton from '@/components/common/BackButton.vue'
import FoodList from '@/components/onboarding/FoodList.vue'
import { IonPage, IonButton, IonContent, IonCard, IonCardContent, IonGrid } from '@ionic/vue'

const recommendedFoods = [
  'fruits and vegetables',
  'whole grains',
  'lean protein',
  'low-fat dairy',
  'calcium-rich foods',
]

const foodsToAvoid = ['saturated and trans fats', 'foods high in salt and sugar', 'alcohol']

const router = useRouter()

const handleContinue = () => {
  router.push('/home')
}
</script>
