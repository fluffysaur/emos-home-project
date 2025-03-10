<template>
  <ion-content>
    <BackButton />

    <ion-grid class="mt-9 mx-6">
      <h1 class="text-base font-semibold leading-6 text-zinc-800">
        We found your medical records at National University Hospital.
      </h1>
      <ion-card class="px-6 pt-4 pb-6 bg-white rounded-lg">
        <PatientDetails
          name="Andy Tan Wee Ming"
          nric="S1234567A"
          phone="9123 4567"
          department="Medical Oncology"
          doctor="Dr. Lim Lauren Uy"
        />
        <ion-button expand="block" @click="handleContinue">Continue</ion-button>
      </ion-card>
      <p class="mt-4">
        If this is not you, log in to Singpass again. If details are incorrect, email
        <strong>contactus@nuhs.edu.sg</strong> for help.
      </p>
    </ion-grid>
  </ion-content>
</template>

<script setup lang="ts">
import { IonCard, IonButton, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue'
import { useRouter } from 'vue-router'
import BackButton from '@/components/common/BackButton.vue'
import PatientDetails from '@/components/onboarding/PatientDetails.vue'

const router = useRouter()

const handleContinue = () => {
  router.push('/onboarding/recommendations')
}
</script>
