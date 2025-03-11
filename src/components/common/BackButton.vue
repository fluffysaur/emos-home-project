<template>
  <ion-buttons @click="goBack" class="flex items-center bg-none border-none my-6 mx-4">
    <ion-back-button default-href="#" />
  </ion-buttons>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonButtons, IonBackButton } from '@ionic/vue'

const props = defineProps({
  route: {
    type: String,
    required: false,
    default: null,
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
