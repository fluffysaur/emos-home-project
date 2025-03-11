<template>
  <section class="flex items-center gap-4 cursor-pointer" @click="handleSelectProvider">
    <ion-card class="shadow-md p-2">
      <img :src="props.logo" :alt="`${props.name} Logo`" class="h-24 w-24 object-fit" />
    </ion-card>
    <div class="flex-1 flex-col gap-2">
      <div class="text-xl font-semibold">{{ props.name }}</div>
      <div class="font-light">${{ props.price }}/meal</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IonCard } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  id: string
  name: string
  logo: string
  price: number
}>()

function handleSelectProvider() {
  console.log(`Selected ${props.name}`)
  router.push({
    path: '/subscription/choose-meal-provider/provider-details',
    query: { providerId: props.id },
  })
}
</script>
