<template>
  <ion-button expand="block" @click="handleClick" :color="card.color" class="rounded-2xl shadow-lg">
    <div class="flex flex-col text-left w-full">
      <ion-icon :icon="card.icon" color="light" size="large" class="opacity-50" />
      <div class="mt-1 text-xl font-bold text-white">{{ card.title }}</div>
    </div>
  </ion-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonButton, IonIcon } from '@ionic/vue'

const router = useRouter()

interface ActionCard {
  icon: string
  title: string
  color: string
  route: string
}

const props = defineProps<{
  card: ActionCard
}>()

function handleClick() {
  console.log(`Clicked on ${props.card.title}`)
  router.push(props.card.route)
}
</script>
