<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <div class="text-center mb-8">
            <img src="@/assets/logo.svg" alt="Hospital Logo" class="h-16 mx-auto mb-4" />
            <h1 class="text-2xl font-bold text-hospital-blue">Hospital Meal Service</h1>
            <p class="text-gray-600 text-senior mt-2">Login to pre-order your meals</p>
          </div>

          <login-form />

          <div class="mt-8 text-center text-senior">
            <p>
              Don't have an account?
              <router-link to="/register" class="text-accent-orange font-medium"
                >Sign Up</router-link
              >
            </p>
          </div>
        </div>

        <p class="text-xs text-gray-500 mt-8">Last Updated: 2025-03-03 12:51:11 UTC | fluffysaur</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import LoginForm from '@/components/auth/LoginForm.vue'
</script>
