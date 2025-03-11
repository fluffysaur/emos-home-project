<template>
  <div class="flex gap-2 items-center text-lg font-semibold">
    <ion-icon
      :icon="checkmark"
      :alt="`${text} icon`"
    />
    <div>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue'
import { checkmark } from 'ionicons/icons'

interface Props {
  text: string
  iconUrl: string
}

defineProps<Props>()
</script>
