<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-full">
        <back-button />
        <ion-grid v-if="provider" class="mx-4 pb-6 flex flex-col justify-between">
          <div class="mb-4">
            <div class="text-xl font-semibold mb-4">Subscription Details</div>
            <meal-provider-option
              :key="provider.id"
              :id="provider.id"
              :name="provider.name"
              :logo="provider.logo"
              :price="provider.prices.meal"
            />

            <!-- Divider -->

            <!-- Subscription Preferences -->
            <!-- Meal Plan Type Component -->
            <div class="mt-6">
              <div class="text-lg">Meal plan type</div>
              <div class="flex flex-col mt-2 gap-4">
                <subscription-option
                  v-for="option in mealPlanOptions"
                  :key="option.id"
                  :id="option.id"
                  :label="option.label"
                  :is-selected="option.selected"
                  @select="handleSelectMealPlan"
                />
              </div>
            </div>

            <!-- Duration and Pricing Component -->
            <div class="mt-6">
              <div class="text-lg">Duration and pricing</div>
              <div class="font-light">Choose to subscribe for meals for a month or for a week.</div>
              <div class="flex flex-col mt-4 gap-4">
                <subscription-option
                  v-for="option in durationOptions"
                  :key="option.id"
                  :id="option.id"
                  :label="option.label"
                  :price="option.price"
                  :is-selected="option.selected"
                  @select="handleSelectDuration"
                />
              </div>
              <div class="flex flex-col gap-2 mt-4">
                <div class="flex text-lg font-bold justify-center items-center gap-2">
                  Start: <ion-datetime-button datetime="startDatetime" />
                </div>
                <div class="flex text-lg font-bold justify-center items-center gap-2">
                  End:
                  <ion-text color="secondary" class="font-light">{{
                    selectedEndDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  }}</ion-text>
                </div>
              </div>

              <ion-modal :keep-contents-mounted="true">
                <ion-datetime
                  id="startDatetime"
                  ref="startDatetime"
                  presentation="date"
                  :min="minDate"
                  :value="selectedStartDate.toISOString()"
                  :format-options="datetimeFormatOptions"
                  show-default-buttons
                  @blur="handleSelectStartDate"
                />
              </ion-modal>
            </div>

            <!-- Payment method component -->
            <div class="mt-6">
              <div class="text-lg">Payment method</div>
              <div class="flex flex-col mt-4 gap-4">
                <subscription-option
                  v-for="option in paymentOptions"
                  :key="option.id"
                  :id="option.id"
                  :label="option.label"
                  :is-selected="option.selected"
                  @select="handleSelectPayment"
                />
              </div>
            </div>

            <!-- Divider -->

            <!-- Delivery address input -->
            <div class="mt-4 text-lg">Delivery address</div>
            <div class="border-1 border-gray-400 rounded-lg mt-2 px-2">
              <ion-textarea
                label-placement="stacked"
                placeholder="Enter delivery address"
                rows="2"
                v-model="deliveryAddress"
              />
            </div>
          </div>

          <!-- Subscribe Button -->
          <ion-button
            expand="block"
            @click="handleSubscribe"
            :disabled="isSubscribeDisabled"
            class="mt-4"
          >
            <span class="my-2">Review subscription</span>
          </ion-button>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  IonPage,
  IonContent,
  IonGrid,
  IonButton,
  IonText,
  IonTextarea,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from '@ionic/vue'
import BackButton from '@/components/common/BackButton.vue'
import SubscriptionOption from '@/components/subscription/SubscriptionOption.vue'
import { useMealStore } from '@/stores/mealStore'
import { useSubscriptionStore } from '@/stores/subscriptionStore'
import MealProviderOption from '@/components/subscription/MealProviderOption.vue'
import { useRoute, useRouter } from 'vue-router'

import type { Ref } from 'vue'
import type { Subscription } from '@/models/subscription'

const mealStore = useMealStore()
const subscriptionStore = useSubscriptionStore()
const route = useRoute()
const router = useRouter()

const providerId = route.query.providerId as string
const provider = ref(mealStore.getSelectedProviderDetails(providerId))

// Options
const mealPlanOptions = ref([
  { id: 'lunchAndDinner', label: 'Lunch and Dinner', selected: false },
  { id: 'lunchOnly', label: 'Lunch only', selected: false },
  { id: 'dinnerOnly', label: 'Dinner only', selected: false },
])

const durationOptions = ref([
  {
    id: 'month',
    label: 'Month (30 days)',
    price: provider.value?.prices.monthly,
    selected: false,
  },
  {
    id: 'week',
    label: 'Week (7 days)',
    price: provider.value?.prices.weekly,
    selected: false,
  },
])

const selectedStartDate = ref(new Date(new Date().setDate(new Date().getDate() + 7)) as Date)
const minDate = computed(() => new Date(new Date().setDate(new Date().getDate() + 7)).toISOString())
const startDatetime = ref()
const datetimeFormatOptions = {
  date: {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  },
}

const selectedEndDate = computed(() => {
  const endDate = new Date(selectedStartDate.value)
  endDate.setDate(
    endDate.getDate() +
      (durationOptions.value.find((option) => option.selected)?.id === 'month' ? 30 : 7),
  )
  return endDate
})

const paymentOptions = ref([
  { id: 'payNow', label: 'PayNow', selected: false },
  { id: 'creditCard', label: 'Credit/Debit Card', selected: false },
  { id: 'cheque', label: 'Cheque on delivery', selected: false },
])

const deliveryAddress = ref('')

// Selected Details
const selectedDetails = computed(
  () =>
    ({
      id: Math.floor(100000 + Math.random() * 900000).toString(),
      provider: provider.value,
      startDate: selectedStartDate.value,
      endDate: selectedEndDate.value,
      totalPrice: durationOptions.value.find((option) => option.selected)?.price || 0,
      mealPlanType: mealPlanOptions.value.find((option) => option.selected) || null,
      durationType: durationOptions.value.find((option) => option.selected) || null,
      paymentType: paymentOptions.value.find((option) => option.selected) || null,
      deliveryAddress: deliveryAddress.value,
    }) as Subscription,
)

const isSubscribeDisabled = computed(() => {
  return (
    !selectedDetails.value.mealPlanType ||
    !selectedDetails.value.durationType ||
    !selectedDetails.value.paymentType ||
    !selectedDetails.value.deliveryAddress
  )
})

function handleSelectOption(optionsRef: Ref<{ id: string; selected: boolean }[]>, id: string) {
  optionsRef.value.forEach((option: { id: string; selected: boolean }) => {
    option.selected = option.id === id
  })
}

function handleSelectMealPlan(id: string) {
  console.log('Selected meal plan', id)
  handleSelectOption(mealPlanOptions, id)
}

function handleSelectDuration(id: string) {
  console.log('Selected duration', id)
  handleSelectOption(durationOptions, id)
}

function handleSelectPayment(id: string) {
  console.log('Selected payment method', id)
  handleSelectOption(paymentOptions, id)
}

function handleSelectStartDate() {
  const inputValue = startDatetime.value.$el.querySelector('input').value
  selectedStartDate.value = new Date(inputValue)
  // selectedStartDate.value = new Date(event.detail.value)
}

function handleSubscribe() {
  console.log(`Subscribed to ${provider.value?.name}`, selectedDetails.value)
  subscriptionStore.setSelectedSubscription(selectedDetails.value)
  router.push('/subscription/review')
}
</script>
