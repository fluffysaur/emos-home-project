<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-full">
        <back-button label="Back to Login" />
        <ion-grid class="mx-6 mb-4 flex flex-col justify-between">
          <div>
            <div class="text-lg font-semibold mb-4">
              We found your medical records at National University Hospital.
            </div>
            <ion-card class="bg-white rounded-lg">
              <ion-card-content>
                <PatientDetails
                  :name="store.$state.user?.name"
                  :nric="store.$state.user?.id"
                  :phone="store.$state.user?.phone"
                  :department="store.$state.user?.medicalInfo?.department"
                  :doctor="store.$state.user?.medicalInfo?.doctor"
                />
              </ion-card-content>
            </ion-card>
            <div class="mt-4 font-light">
              If this is not you, log in to Singpass again. If details are incorrect, email
              <strong>contactus@nuhs.edu.sg</strong> for help.
            </div>
          </div>
          <ion-button expand="block" @click="handleContinue">Continue</ion-button>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonCard, IonButton, IonContent, IonGrid, IonCardContent } from '@ionic/vue'
import { useRouter } from 'vue-router'
import BackButton from '@/components/common/BackButton.vue'
import PatientDetails from '@/components/onboarding/PatientDetails.vue'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const store = useAuthStore()

const handleContinue = () => {
  router.push('/onboarding/recommendations')
}
</script>
