<template>
  <ion-card class="p-4 w-full bg-purple-50 rounded-3xl shadow-sm text-zinc-500">
    <div class="flex items-center">
      <ion-icon :icon="restaurantOutline" alt="Meal icon" class="text-2xl mr-2" />
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
import { IonCard, IonIcon } from '@ionic/vue'
import { restaurantOutline } from 'ionicons/icons'
import type { MealDelivery } from '@/models/home'

defineProps<{
  meal?: MealDelivery
}>()
</script>
