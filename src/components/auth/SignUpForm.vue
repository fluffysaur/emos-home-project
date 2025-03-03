<template>
  <form @submit.prevent="handleSignup" class="flex flex-col space-y-4 w-full">
    <ion-item class="rounded-lg">
      <ion-label position="floating" class="text-senior font-medium">Full Name</ion-label>
      <ion-input
        v-model="name"
        type="text"
        required
        class="text-senior"
        placeholder="Enter your full name"
      ></ion-input>
    </ion-item>

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

    <div class="flex flex-row space-x-3">
      <ion-item class="flex-1 rounded-lg">
        <ion-label position="floating" class="text-senior font-medium">Ward No.</ion-label>
        <ion-input
          v-model="wardNumber"
          type="text"
          class="text-senior"
          placeholder="W12"
        ></ion-input>
      </ion-item>

      <ion-item class="flex-1 rounded-lg">
        <ion-label position="floating" class="text-senior font-medium">Bed No.</ion-label>
        <ion-input
          v-model="bedNumber"
          type="text"
          class="text-senior"
          placeholder="B01"
        ></ion-input>
      </ion-item>
    </div>

    <div class="px-2">
      <h3 class="text-senior font-medium mb-2">Dietary Restrictions</h3>
      <div class="flex flex-wrap gap-2">
        <ion-chip
          v-for="(restriction, index) in availableRestrictions"
          :key="index"
          :color="dietaryRestrictions.includes(restriction) ? 'primary' : 'medium'"
          @click="toggleRestriction(restriction)"
        >
          {{ restriction }}
        </ion-chip>
      </div>
    </div>

    <ion-button
      type="submit"
      expand="block"
      class="mt-6 text-senior font-medium"
      :disabled="isLoading"
    >
      <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
      <span v-else>Create Account</span>
    </ion-button>

    <div v-if="error" class="text-red-500 text-center text-senior">
      {{ error }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonChip } from '@ionic/vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const wardNumber = ref('')
const bedNumber = ref('')
const dietaryRestrictions = ref<string[]>([])
const availableRestrictions = [
  'vegetarian',
  'halal',
  'gluten-free',
  'dairy-free',
  'low-sodium',
  'low-sugar',
]

const isLoading = ref(false)
const error = ref('')

const toggleRestriction = (restriction: string) => {
  const index = dietaryRestrictions.value.indexOf(restriction)
  if (index === -1) {
    dietaryRestrictions.value.push(restriction)
  } else {
    dietaryRestrictions.value.splice(index, 1)
  }
}

const handleSignup = async () => {
  error.value = ''
  isLoading.value = true

  try {
    await authStore.registerUser(
      {
        name: name.value,
        email: email.value,
        wardNumber: wardNumber.value,
        bedNumber: bedNumber.value,
        dietaryRestrictions: dietaryRestrictions.value,
      },
      password.value,
    )
  } catch (err: any) {
    error.value = err.message || 'Registration failed'
  } finally {
    isLoading.value = false
  }
}
</script>
