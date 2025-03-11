<template>
  <ion-app>
    <router-view class="content-container" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue'
</script>

<style>
.content-container {
  padding-top: var(--ion-safe-area-top);
  padding-bottom: var(--ion-safe-area-bottom);
  padding-left: var(--ion-safe-area-start);
  padding-right: var(--ion-safe-area-end);
}
</style>
