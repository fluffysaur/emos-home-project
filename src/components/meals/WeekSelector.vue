<template>
  <div class="week-selector">
    <ion-segment v-model="selectedDay" scrollable class="bg-gray-50 p-1 rounded-lg">
      <ion-segment-button
        v-for="day in weekDays"
        :key="day.date"
        :value="day.date"
        class="rounded-md"
      >
        <div class="flex flex-col items-center">
          <span class="text-xs">{{ day.dayName }}</span>
          <span class="text-sm font-bold">{{ day.dayNumber }}</span>
        </div>
      </ion-segment-button>
    </ion-segment>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { IonSegment, IonSegmentButton } from '@ionic/vue'

const props = defineProps<{
  dates: string[]
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', date: string): void
}>()

const selectedDay = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    selectedDay.value = newValue
  },
)

watch(selectedDay, (newValue) => {
  emit('update:modelValue', newValue)
})

const weekDays = computed(() => {
  return props.dates.map((dateStr) => {
    const date = new Date(dateStr)
    return {
      date: dateStr,
      dayName: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date),
      dayNumber: date.getDate(),
    }
  })
})
</script>

<style scoped>
.week-selector {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
