<template>
  <ion-page>
    <ion-content class="bg-purple-50">
      <BackButton @click="cancelTimeout" />
      <div class="flex flex-col items-center justify-center h-full">
        <ion-spinner name="circular" class="scale-150"></ion-spinner>
        <p class="text-2xl font-semibold mt-5 text-medium">We are retrieving your data</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonSpinner } from '@ionic/vue'
import BackButton from '@/components/common/BackButton.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue'

const router = useRouter()
const timeoutId = ref<number | null>(null)

const cancelTimeout = () => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
  }
}

onMounted(() => {
  timeoutId.value = window.setTimeout(() => {
    router.replace('/onboarding')
  }, 3000)
})

onUnmounted(() => {
  cancelTimeout()
})
</script>

<style scoped>
/* Add any necessary styles here */
</style>
