<template>
  <ion-card class="p-4 w-full bg-purple-50 rounded-3xl shadow-sm text-zinc-500">
    <div class="flex items-center">
      <ion-img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/718dfca8c71f9990c74903a7cd0d6dae51d527bd369040ac09038e9d29fd4b2f?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d"
        class="object-contain overflow-hidden shrink-0 w-6 aspect-square mr-2"
        alt="Meal icon"
      />
      <div class="text-xl font-bold">Today's Meal</div>
    </div>
    <div class="mt-4 text-3xl font-semibold">Chicken Rice</div>
    <div class="mt-8">
      <div>Deliver at <strong>2.30pm</strong></div>
      <div>to <strong>Blk 123 Bukit Batok Central #2312-3412</strong></div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonImg,
} from '@ionic/vue'
import type { MealDelivery } from '@/models/home'

defineProps<{
  meal?: MealDelivery
}>()
</script>
