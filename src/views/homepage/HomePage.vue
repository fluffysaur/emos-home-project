<template>
  <IonPage>
    <IonContent>
      <img
        class="absolute top-0 left-0 -z-1 w-full"
        src="@/assets/images/home-background.svg"
        alt="Home Background"
      />
      <div class="flex flex-col h-full">
        <div class="flex-grow overflow-y-auto pb-6">
          <NotificationBanner />
          <div class="px-6">
            <p class="my-4 text-2xl font-semibold">Hello, {{ authStore.$state.user?.name }} !</p>
            <TodaysMealCard />
            <ActionCards class="mt-3" />
          </div>
        </div>
        <NavigationBar />
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'
import NotificationBanner from '@/components/home/NotificationBanner.vue'
import TodaysMealCard from '@/components/home/TodaysMealCard.vue'
import ActionCards from '@/components/home/ActionCards.vue'
import NavigationBar from '@/components/common/NavigationBar.vue'
import { useAuthStore } from '@/stores/authStore'
import { useMealStore } from '@/stores/mealStore'
import mealService from '@/services/mealService'
import deliveryService from '@/services/deliveryService'

const authStore = useAuthStore()
const mealStore = useMealStore()

onMounted(async () => {
  mealStore.setIsLoading(true)
  await Promise.all([mealService.retrieveSelectedMeals(), deliveryService.retrieveDeliveryInfo()])
  mealStore.setIsLoading(false)
})
</script>
