<template>
  <button @click="goBack" class="flex items-center bg-none border-none cursor-pointer my-6 mx-4">
    <ion-icon :icon="arrowBackOutline" class="mr-1" color="medium" />
    <span class="font-semibold" style="color: var(--ion-color-medium)">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonIcon } from '@ionic/vue'
import { arrowBackOutline } from 'ionicons/icons'

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
