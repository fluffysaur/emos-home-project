<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-screen p-6">
        <p class="text-3xl font-bold mb-11">Log In</p>

        <div class="px-10">
          <img
            src="@/assets/images/login-illustration.png"
            alt="Login Illustration"
            class="w-full mx-auto"
          />
        </div>

        <p class="text-lg font-semibold mt-6">Log in to link your hospital records</p>

        <ion-button expand="block" size="large" class="mt-6" color="singpass" @click="handleLogin">
          Log in with Singpass
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  router.push('/login/loading')
}
</script>
