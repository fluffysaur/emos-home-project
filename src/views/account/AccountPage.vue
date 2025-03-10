<template>
  <ion-content>
    <div class="flex flex-col h-full">
      <!-- Patient Details Card -->
      <div class="flex-grow">
        <ion-card class="rounded-b-3xl">
          <ion-card-content>
            <div class="flex flex-col gap-2">
              <detail-item label="Name" value="Andy Tan Wee Ming" />
              <detail-item label="NRIC" value="S1234567A" />
              <detail-item label="Department" value="Medical Oncology" />
              <detail-item label="Doctor" value="Dr. Lim Lauren Uy" />
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <!-- Doctor's Recommendations Button -->

      <!-- Subscription Details Section -->

      <!-- Payment Methods Section -->

      <NavigationBar />
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonButton, IonCard, IonCardContent } from '@ionic/vue'
import DetailItem from '@/components/onboarding/DetailItem.vue'
import NavigationBar from '@/components/common/NavigationBar.vue'
</script>
