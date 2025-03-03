<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <template v-slot:start>
          <ion-buttons>
            <ion-back-button default-href="/login"></ion-back-button>
          </ion-buttons>
        </template>
        <ion-title class="text-senior">Create Account</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <div class="text-center mb-8">
            <img src="@/assets/logo.svg" alt="Hospital Logo" class="h-16 mx-auto mb-4" />
            <h1 class="text-xl font-bold text-hospital-blue">Register for Meal Service</h1>
            <p class="text-gray-600 text-senior mt-2">
              Create your account to start pre-ordering meals
            </p>
          </div>

          <sign-up-form />

          <div class="mt-8 text-center text-senior">
            <p>
              Already have an account?
              <router-link to="/login" class="text-accent-orange font-medium">Login</router-link>
            </p>
          </div>
        </div>

        <p class="text-xs text-gray-500 mt-8">Last Updated: 2025-</p>
      </div></ion-content
    ></ion-page
  >
</template>
