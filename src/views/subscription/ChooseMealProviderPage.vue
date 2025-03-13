<template>
  <ion-page>
    <ion-content>
      <back-button />
      <section class="pb-6 px-4">
        <div class="text-xl font-semibold mb-4">Choose a meal provider</div>
        <div class="text-lg font-light">
          Subscribe to a meal plan from one of the meal providers below.
        </div>

        <!-- Meal Provider Options -->
        <div v-if="mealStore.$state.isLoading">
          <ion-skeleton-text
            v-for="i in 2"
            :key="i"
            animated
            class="mt-4 rounded-xl"
            style="width: 100%; height: 6rem"
          />
        </div>
        <div v-else class="flex flex-col gap-6 mt-4">
          <meal-provider-option
            v-for="provider in mealStore.$state.providers"
            :key="provider.id"
            :id="provider.id"
            :name="provider.name"
            :logo="provider.logo"
            :price="provider.prices.meal"
            tappable
          />
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { IonPage, IonContent, IonSkeletonText } from '@ionic/vue'
import BackButton from '@/components/common/BackButton.vue'
import { useMealStore } from '@/stores/mealStore'
import { useSubscriptionStore } from '@/stores/subscriptionStore'
import MealService from '@/services/mealService'
import MealProviderOption from '@/components/subscription/MealProviderOption.vue'

const mealStore = useMealStore()
const subscriptionStore = useSubscriptionStore()

onMounted(async () => {
  if (!mealStore.$state.providers?.length) {
    subscriptionStore.setIsLoading(true)
    await MealService.retrieveProviders()
    subscriptionStore.setIsLoading(false)
  }
})
</script>
