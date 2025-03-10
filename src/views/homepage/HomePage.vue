<template>
  <IonPage>
    <IonContent>
      <img
        class="absolute top-0 left-0 -z-1 w-full"
        src="@/assets/images/home-background.svg"
        alt="Home Background"
      />
      <div class="flex flex-col h-full">
        <NotificationBanner />
        <div class="flex-grow px-6 overflow-y-auto">
          <p class="my-4 text-2xl font-semibold">Hello, Andy!</p>
          <TodaysMealCard />
          <ActionCards class="mt-3" />
        </div>
        <NavigationBar />
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import NotificationBanner from '@/components/home/NotificationBanner.vue'
import TodaysMealCard from '@/components/home/TodaysMealCard.vue'
import ActionCards from '@/components/home/ActionCards.vue'
import NavigationBar from '@/components/common/NavigationBar.vue'
</script>
