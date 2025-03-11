<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-full">
        <back-button label="Back to meal providers" />
        <ion-grid v-if="provider" class="mx-4 pb-6 flex flex-col justify-between">
          <div class="mb-4">
            <meal-provider-option
              :key="provider.id"
              :id="provider.id"
              :name="provider.name"
              :logo="provider.logo"
              :price="provider.price"
            />

            <!-- Menu Highlights -->
            <div class="text-xl font-semibold mt-6">Menu Highlights</div>
            <div class="font-light mt-2">
              Some of the meals you can look forward to from this provider.
            </div>
            <div class="flex flex-wrap -mx-2 mt-4">
              <div
                v-for="meal in provider.mealOptions.slice(0, 4)"
                :key="meal.id"
                class="w-1/2 p-2"
              >
                <img
                  :src="meal.img"
                  :alt="`${meal.name} Image`"
                  class="w-full rounded-3xl shadow-sm"
                />
                <div class="font-semibold mt-2 text-lg">{{ meal.name }}</div>
              </div>
            </div>
          </div>

          <!-- Subscribe Button -->
          <ion-button expand="block" @click="handleSubscribe">
            <span class="my-2">Order from this provider</span>
          </ion-button>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonContent, IonGrid, IonButton } from '@ionic/vue'
import BackButton from '@/components/common/BackButton.vue'
import { useMealStore } from '@/stores/mealStore'
import MealProviderOption from '@/components/subscription/MealProviderOption.vue'
import { useRoute } from 'vue-router'

const mealStore = useMealStore()
const route = useRoute()

const providerId = route.query.providerId as string
const provider = ref(mealStore.getSelectedProviderDetails(providerId))

function handleSubscribe() {
  console.log(`Subscribed to ${provider.value?.name}`)
}
</script>
