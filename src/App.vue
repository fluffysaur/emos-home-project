<template>
  <ion-app>
    <router-view />
    <navigation-bar />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import NavigationBar from '@/components/common/NavigationBar.vue'

const authStore = useAuthStore()

onMounted(() => {
  // Check authentication status on app startup
  authStore.checkAuthState()
})
</script>
