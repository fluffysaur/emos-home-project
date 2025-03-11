<template>
  <section
    v-if="store.$state.status === 'in progress' && store.$state.deliveryTime"
    class="px-4 py-4 bg-orange-50 shadow-sm rounded-b-2xl"
  >
    <div class="flex gap-2 items-center w-full">
      <ion-icon
        :icon="car"
        color="tertiary"
        alt="Delivery notification"
        class="text-2xl"
      />
      <p class="flex-1 shrink self-stretch my-auto basis-0">
        Good news! Your meal is on its way. Estimated delivery at
        <strong>{{ format(store.$state.deliveryTime, 'hh:mm a') }}</strong>.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue'
import { car } from 'ionicons/icons'
import { useDeliveryStore } from '@/stores/deliveryStore';
import { format } from 'date-fns'

const store = useDeliveryStore();
</script>
