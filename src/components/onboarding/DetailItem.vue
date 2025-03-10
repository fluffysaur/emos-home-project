<template>
  <article :class="['flex flex-col gap-1', { 'flex-1': props.halfWidth }]">
    <label class="text-sm text-neutral-400">{{ props.label }}</label>
    <div class="text-base font-semibold tracking-wide leading-6 text-zinc-800">
      {{ props.value }}
    </div>
  </article>
</template>

<script setup lang="ts">
import type { DetailItemProps } from '@/models/onboarding'

const props = defineProps<DetailItemProps>()
</script>
