<template>
  <ion-content>
    <div class="flex flex-col h-full">
      <!-- Patient Details Card -->
      <div class="flex-grow overflow-y-auto">
        <ion-card class="rounded-b-3xl mb-6">
          <ion-card-content>
            <div class="flex flex-col gap-2">
              <detail-item label="Name" :value="authStore.$state.user?.name" />
              <detail-item label="NRIC" :value="authStore.$state.user?.id" />
              <detail-item
                label="Department"
                :value="authStore.$state.user?.medicalInfo.department"
              />
              <detail-item label="Doctor" :value="authStore.$state.user?.medicalInfo.doctor" />
            </div>
          </ion-card-content>
        </ion-card>

        <div class="mx-6">
          <!-- Subscription Details Section -->
          <div class="text-xl font-bold mb-3">Subscription Details</div>
          <ion-card class="mb-6 rounded-xl">
            <!-- Have subscription -->
            <ion-card-content v-if="authStore.$state.user?.subscription">
              <div class="mb-4">
                <div class="text-sm">You receive meals from.</div>
                <div class="text-black">{{ authStore.$state.user?.subscription.vendor }}</div>
              </div>

              <ion-button expand="block" class="text-lg">
                <span class="my-2">View subscription</span>
              </ion-button>
            </ion-card-content>
            <!-- No subscription -->
            <ion-card-content v-else>
              <div class="mb-4">You have no meal plan subscription at the moment.</div>
              <ion-button expand="block" class="text-lg">
                <span class="my-2" @click="routeToSubscription">Subscribe to a meal plan</span>
              </ion-button>
            </ion-card-content>
          </ion-card>

          <!-- Payment Methods Section -->
          <div class="text-xl font-bold mb-3">Payment Methods</div>
          <ion-button expand="block" color="white" class="mb-12 rounded-2xl shadow-md">
            <div class="flex justify-between items-center w-full my-2 text-black text-lg">
              <span>Add new card</span>
              <ion-icon size="large" :icon="addCircleOutline" />
            </div>
          </ion-button>

          <!-- Logout Button -->
          <ion-button id="logout-alert" expand="block" color="danger" class="mb-6">
            Log Out
          </ion-button>
          <logout-alert />
        </div>
      </div>

      <NavigationBar />
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonButton, IonCard, IonCardContent, IonIcon } from '@ionic/vue'
import { addCircleOutline } from 'ionicons/icons'
import DetailItem from '@/components/onboarding/DetailItem.vue'
import NavigationBar from '@/components/common/NavigationBar.vue'
import LogoutAlert from '@/components/account/LogoutAlert.vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

function routeToSubscription() {
  router.push('/subscription/choose-meal-provider')
}
</script>
