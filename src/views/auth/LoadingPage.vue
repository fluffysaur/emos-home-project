<template>
  <ion-page>
    <ion-content class="bg-purple-50">
      <div class="flex flex-col items-center justify-center h-full">
        <ion-spinner name="circular" class="scale-150"></ion-spinner>
        <p class="text-2xl font-semibold mt-5 text-medium">Preparing your meals...</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonSpinner } from '@ionic/vue'
import AuthService from '@/services/authService'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const store = useAuthStore();

onMounted(async () => {
  await AuthService.login();
  if (store.$state.user?.isNewUser) {
    router.push('/onboarding');
  } else {
    router.push('/home');
  }
})
</script>

<style scoped>
/* Add any necessary styles here */
</style>
