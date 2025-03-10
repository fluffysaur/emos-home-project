<template>
  <article
    class="flex-1 shrink p-4 whitespace-nowrap rounded-3xl shadow-sm"
    :class="card.backgroundColor"
    @click="handleClick"
  >
    <img
      :src="card.icon"
      class="object-contain overflow-hidden w-7 aspect-square"
      :alt="card.title"
    />
    <div class="mt-1 whitespace-pre-line text-2xl font-bold">{{ card.title }}</div>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import type { ActionCard } from '@/models/home'

const router = useRouter()

const props = defineProps<{
  card: ActionCard
}>()

function handleClick() {
  console.log(`Clicked on ${props.card.title}`)
  router.push(props.card.route)
}
</script>
