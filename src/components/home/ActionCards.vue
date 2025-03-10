<template>
  <section class="flex gap-3 mt-3 text-white">
    <ActionCard v-for="card in cards" :key="card.title" :card="card" />
  </section>
</template>

<script setup lang="ts">
import ActionCard from '@/components/common/ActionCard.vue'
import type { ActionCard as ActionCardType } from '@/models/home'

const cards: ActionCardType[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/174f7a96c963e61e2ed32c96ade127ad666b5964031f6cf300f1cbd9cf61d705?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d',
    title: 'Upcoming Meals',
    backgroundColor: 'bg-indigo-200',
    route: '/meals',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cacb31da2de81d7ed7076300a00cdb4409d8d5c361ed54dea2b81eb82ef51326?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d',
    title: 'Health Tips',
    backgroundColor: 'bg-lime-600',
    route: '/health-tips',
  },
]
</script>
