<template>
  <section class="flex gap-3 text-white">
    <ActionCard v-for="card in cards" :key="card.title" :card="card" class="flex-1" />
  </section>
</template>

<script setup lang="ts">
import { restaurantOutline, clipboardOutline } from 'ionicons/icons'
import ActionCard from '@/components/common/ActionCard.vue'

const cards = [
  {
    icon: restaurantOutline,
    title: 'Upcoming Meals',
    color: 'secondary',
    route: '/upcoming-meals',
  },
  {
    icon: clipboardOutline,
    title: 'Dietary Information',
    color: 'tertiary',
    route: '/recommendations',
  },
]
</script>
