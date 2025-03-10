<template>
  <section class="flex gap-3 mt-3 text-white">
    <article
      v-for="card in cards"
      :key="card.title"
      class="flex-1 shrink p-4 whitespace-nowrap rounded-3xl shadow-sm"
      :class="card.backgroundColor"
    >
      <img
        :src="card.icon"
        class="object-contain overflow-hidden w-7 aspect-square"
        :alt="card.title"
      />
      <div class="mt-1 whitespace-pre-line text-2xl font-bold">{{ card.title }}</div>
    </article>
  </section>
</template>

<script setup lang="ts">
import type { ActionCard } from '@/models/home'

const cards: ActionCard[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/174f7a96c963e61e2ed32c96ade127ad666b5964031f6cf300f1cbd9cf61d705?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d',
    title: 'Upcoming\nMeals',
    backgroundColor: 'bg-indigo-200',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cacb31da2de81d7ed7076300a00cdb4409d8d5c361ed54dea2b81eb82ef51326?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d',
    title: 'Health Tips',
    backgroundColor: 'bg-lime-600',
  },
]
</script>
