<template>
  <ion-card
    class="rounded-3xl shadow-none border-1 border-blue-300"
    :class="{ 'bg-blue-100': isSelected }"
  >
    <ion-card-content class="text-center">
      <ion-text color="dark" class="text-center">
        <div class="text-lg font-semibold">{{ props.label }}</div>
        <div v-if="props.price" class="my-2 font-light">${{ props.price.toFixed(2) }}</div>
      </ion-text>
      <ion-button
        @click="handleSelect"
        color="primary"
        :fill="props.isSelected ? 'solid' : 'outline'"
        class="flex mt-4 gap-2"
      >
        <ion-icon v-if="isSelected" :icon="checkmark" />
        {{ props.isSelected ? 'Chosen' : 'Choose' }}
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonText, IonButton, IonIcon } from '@ionic/vue'
import { checkmark } from 'ionicons/icons'
import { defineEmits } from 'vue'

const props = defineProps<{
  id: string
  label: string
  price?: number
  isSelected?: boolean
}>()

const emit = defineEmits(['select'])

function handleSelect() {
  emit('select', props.id)
}
</script>
