<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col min-h-screen p-6 py-8 justify-center">
        <p class="text-5xl font-bold mb-11 text-center">NutriCare</p>

        <div class="px-10">
          <img
            src="@/assets/images/login-illustration.png"
            alt="Login Illustration"
            class="w-full mx-auto"
          />
        </div>

        <p class="text-2xl font-bold my-12">Log in to link your hospital records.</p>

        <ion-button expand="block" size="large" color="singpass" @click="handleLogin">
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
