<template>
  <ion-buttons class="flex items-center bg-none border-none my-6 mx-2">
    <ion-button @click="goBack" fill="clear">
      <ion-icon :icon="chevronBackOutline" />
      {{ props.label }}
    </ion-button>
  </ion-buttons>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonButtons, IonButton, IonIcon } from '@ionic/vue'
import { chevronBackOutline } from 'ionicons/icons'

const props = defineProps({
  route: {
    type: String,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: 'Back',
  },
})

const router = useRouter()

function goBack() {
  if (props.route) {
    router.push(props.route)
  } else {
    router.go(-1)
  }
}
</script>

<style scoped>
/* No additional styles needed */
</style>
