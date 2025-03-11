<template>
  <section class="flex flex-col items-start">
    <div class="font-light text-neutral-500">{{ title }}</div>
    <div class="flex flex-col gap-2 mt-2 w-full">
      <FoodItem v-for="(item, index) in items" :key="index" :text="item" :iconUrl="iconUrl" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FoodItem from './FoodItem.vue'

interface Props {
  title: string
  items: string[]
  iconUrl: string
}

defineProps<Props>()
</script>
