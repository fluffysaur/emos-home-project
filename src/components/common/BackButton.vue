<template>
  <button
    @click="goBack"
    class="flex items-center bg-none border-none cursor-pointer text-base mt-4 ml-4"
  >
    <span class="text-base mr-1">←</span>
    <span class="font-semibold text-base">Back</span>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  route: {
    type: String,
    required: false,
    default: null,
  },
})

const router = useRouter()

function goBack() {
  if (props.route) {
    router.push(props.route)
  } else {
    router.go(-1)
  }
}
</script>

<style scoped>
/* No additional styles needed */
</style>
