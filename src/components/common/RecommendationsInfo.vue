<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-full">
        <BackButton />
        <ion-grid class="mx-6 mb-4 flex flex-col justify-between">
          <div>
            <div class="text-lg font-semibold mb-4">Your doctor's recommendations</div>
            <ion-card class="bg-white rounded-lg mb-4">
              <ion-card-content>
                <ion-text color="dark">
                  <FoodList
                    title="Dietary Restrictions"
                    :items="authStore.$state.user?.dietaryInfo?.restrictions || []"
                    :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
                  />
                </ion-text>
              </ion-card-content>
            </ion-card>

            <ion-card class="bg-white rounded-lg mb-4">
              <ion-card-content>
                <ion-text color="dark">
                  <FoodList
                    title="Foods you should eat more"
                    :items="authStore.$state.user?.dietaryInfo?.recommendedFoods || []"
                    :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
                  />
                </ion-text>
              </ion-card-content>
            </ion-card>

            <ion-card class="bg-white rounded-lg">
              <ion-card-content>
                <ion-text color="dark">
                  <FoodList
                    title="Foods you should avoid"
                    :items="authStore.$state.user?.dietaryInfo?.foodsToAvoid || []"
                    :iconUrl="'https://cdn.builder.io/api/v1/image/assets/TEMP/dff5e70fe870e55133e0f5c543fa56963fa6f0edf7e923acb44eff602994bdfb?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d'"
                  />
                </ion-text>
              </ion-card-content>
            </ion-card>
          </div>
          <ion-button v-if="props.isOnboarding" expand="block" class="mt-6" @click="handleContinue"
            >Continue</ion-button
          >
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BackButton from '@/components/common/BackButton.vue'
import FoodList from '@/components/onboarding/FoodList.vue'
import { useAuthStore } from '@/stores/authStore'
import {
  IonPage,
  IonButton,
  IonContent,
  IonCard,
  IonCardContent,
  IonGrid,
  IonText,
} from '@ionic/vue'

const props = defineProps<{
  isOnboarding?: boolean
}>()

const authStore = useAuthStore()

const recommendedFoods = [
  'Fruits and vegetables',
  'Whole grains',
  'Lean protein',
  'Low-fat dairy',
  'Calcium-rich foods',
]

const foodsToAvoid = ['Saturated and trans fats', 'Foods high in salt and sugar', 'Alcohol']

const router = useRouter()

const handleContinue = () => {
  router.push('/home')
}
</script>
