<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-full">
        <back-button />
        <ion-grid v-if="subscriptionDetails" class="mx-4 pb-6 flex flex-col justify-between">
          <div>
            <div class="text-xl font-semibold mb-4">Review subscription</div>
            <meal-provider-option
              :key="subscriptionDetails.provider.id"
              :id="subscriptionDetails.provider.id"
              :name="subscriptionDetails.provider.name"
              :logo="subscriptionDetails.provider.logo"
              :price="subscriptionDetails.provider.prices.meal"
              class="mb-8"
            />
            <div class="flex flex-col gap-4">
              <detail-item label="Meal plan type" :value="subscriptionDetails.mealPlanType.label" />
              <detail-item
                label="Duration and pricing"
                :value="subscriptionDetails.durationType.label"
              />
              <detail-item
                label="Subscription period"
                :value="`${formattedDates.startDate} to ${formattedDates.endDate}`"
              />
              <detail-item label="Payment method" :value="subscriptionDetails.paymentType.label" />
              <detail-item label="Delivery address" :value="subscriptionDetails.deliveryAddress" />
            </div>
          </div>

          <!-- Subscribe Button -->
          <ion-button expand="block" @click="handlePayment">
            <span class="my-2">Proceed to payment</span>
          </ion-button>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { IonPage, IonContent, IonGrid, IonButton } from '@ionic/vue'
import BackButton from '@/components/common/BackButton.vue'
import DetailItem from '@/components/onboarding/DetailItem.vue'
import MealProviderOption from '@/components/subscription/MealProviderOption.vue'
import { useSubscriptionStore } from '@/stores/subscriptionStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const subscriptionStore = useSubscriptionStore()

const subscriptionDetails = ref(subscriptionStore.$state.selectedSubscription)

const formattedDates = computed(() => {
  if (!subscriptionDetails.value) return {}
  const startDate = new Date(subscriptionDetails.value.startDate)
  const endDate = new Date(subscriptionDetails.value.endDate)
  return {
    startDate: startDate.toLocaleDateString('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    endDate: endDate.toLocaleDateString('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  }
})

function handlePayment() {
  console.log(`handle payment`)
}
</script>
