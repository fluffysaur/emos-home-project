<template>
  <IonPage>
    <IonContent>
      <NotificationBanner />
      <div class="px-6">
        <p class="mt-4 text-2xl font-semibold">Hello, Andy!</p>
        <TodaysMealCard />
        <ActionCards />
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/vue'
import NotificationBanner from '@/components/home/NotificationBanner.vue'
import TodaysMealCard from '@/components/home/TodaysMealCard.vue'
import ActionCards from '@/components/home/ActionCards.vue'
</script>
