<template>
  <section class="flex gap-3 text-white">
    <ActionCard v-for="card in cards" :key="card.title" :card="card" class="flex-1" />
  </section>
</template>

<script setup lang="ts">
import { restaurantOutline, bulbOutline } from 'ionicons/icons'
import ActionCard from '@/components/common/ActionCard.vue'
import type { ActionCard as ActionCardType } from '@/models/home'

const cards: ActionCardType[] = [
  {
    icon: restaurantOutline,
    title: 'Upcoming Meals',
    color: 'secondary',
    route: '/upcoming-meals',
  },
  {
    icon: bulbOutline,
    title: 'Health Tips',
    color: 'tertiary',
    route: '/health-tips',
  },
]
</script>
