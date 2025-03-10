<template>
  <ion-content>
    <BackButton />

    <ion-grid class="mt-9 mx-6">
      <div class="text-lg font-semibold mb-4">
        We found your medical records at National University Hospital.
      </div>
      <ion-card class="bg-white rounded-lg">
        <ion-card-content>
          <PatientDetails
            name="Andy Tan Wee Ming"
            nric="S1234567A"
            phone="9123 4567"
            department="Medical Oncology"
            doctor="Dr. Lim Lauren Uy"
          />
        </ion-card-content>
      </ion-card>
      <div class="mt-4 mb-6 font-light">
        If this is not you, log in to Singpass again. If details are incorrect, email
        <strong>contactus@nuhs.edu.sg</strong> for help.
      </div>
      <ion-button expand="block" @click="handleContinue">Continue</ion-button>
    </ion-grid>
  </ion-content>
</template>

<script setup lang="ts">
import { IonCard, IonButton, IonContent, IonGrid, IonCardContent } from '@ionic/vue'
import { useRouter } from 'vue-router'
import BackButton from '@/components/common/BackButton.vue'
import PatientDetails from '@/components/onboarding/PatientDetails.vue'

const router = useRouter()

const handleContinue = () => {
  router.push('/onboarding/recommendations')
}
</script>
