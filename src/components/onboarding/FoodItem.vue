<template>
  <div class="flex gap-2 items-center tracking-wide">
    <img
      :src="iconUrl"
      class="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      :alt="`${text} icon`"
    />
    <div class="text-lg font-semibold">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string
  iconUrl: string
}

defineProps<Props>()
</script>
