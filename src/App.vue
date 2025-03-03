<template>
  <ion-app>
    <router-view />

    <!-- Bottom navigation menu - Only show for authenticated routes -->
    <ion-tabs v-if="authStore.isAuthenticated">
      <template v-slot:bottom>
        <ion-tab-bar class="pb-2">
          <ion-tab-button tab="menu">
            <ion-icon :icon="restaurantOutline"></ion-icon>
            <ion-label class="text-senior">Menu</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="orders">
            <ion-icon :icon="listOutline"></ion-icon>
            <ion-label class="text-senior">My Orders</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="profile">
            <ion-icon :icon="personOutline"></ion-icon>
            <ion-label class="text-senior">Profile</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="help">
            <ion-icon :icon="helpCircleOutline"></ion-icon>
            <ion-label class="text-senior">Help</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </template>
    </ion-tabs>
  </ion-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue'
import { restaurantOutline, listOutline, personOutline, helpCircleOutline } from 'ionicons/icons'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

onMounted(() => {
  // Check authentication status on app startup
  authStore.checkAuthState()
})
</script>

<style>
/* Global styles */
ion-content {
  --ion-background-color: #f9f9fb;
}

/* Increase text size for better accessibility for elderly users */
.text-senior {
  font-size: 1.125rem; /* 18px */
}

/* Increase tap targets for better accessibility */
ion-button {
  --padding-top: 12px;
  --padding-bottom: 12px;
}

ion-segment-button {
  --background-checked: #e5f2ff;
  --color-checked: #0055a5;
  --indicator-color: transparent;
}

ion-checkbox {
  --size: 24px;
}

/* Disable iOS rubber band effect for better UX */
html {
  overflow: hidden;
  height: 100%;
}

body {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
