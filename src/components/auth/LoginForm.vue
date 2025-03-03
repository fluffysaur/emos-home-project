<template>
  <form @submit.prevent="handleLogin" class="flex flex-col space-y-4 w-full">
    <ion-item class="rounded-lg">
      <ion-label position="floating" class="text-senior font-medium">Email</ion-label>
      <ion-input
        v-model="email"
        type="email"
        required
        class="text-senior"
        placeholder="Enter your email"
      ></ion-input>
    </ion-item>

    <ion-item class="rounded-lg">
      <ion-label position="floating" class="text-senior font-medium">Password</ion-label>
      <ion-input
        v-model="password"
        type="password"
        required
        class="text-senior"
        placeholder="Enter your password"
      ></ion-input>
    </ion-item>

    <div class="flex justify-between items-center px-2 mt-2">
      <ion-checkbox labelPlacement="end">
        <span class="text-senior">Remember me</span>
      </ion-checkbox>
      <a href="#" class="text-hospital-blue text-senior">Forgot Password?</a>
    </div>

    <ion-button
      type="submit"
      expand="block"
      class="mt-6 text-senior font-medium"
      :disabled="isLoading"
    >
      <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
      <span v-else>Login</span>
    </ion-button>

    <div v-if="error" class="text-red-500 text-center text-senior">
      {{ error }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonCheckbox } from '@ionic/vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true

  try {
    await authStore.loginUser(email.value, password.value)
  } catch (err: any) {
    error.value = err.message || 'Login failed'
  } finally {
    isLoading.value = false
  }
}
</script>
