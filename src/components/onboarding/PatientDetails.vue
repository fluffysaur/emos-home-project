<template>
  <section>
    <div class="flex flex-col gap-3">
      <DetailItem label="Name" :value="props.name" />
      <div class="flex gap-4">
        <DetailItem label="NRIC" :value="props.nric" :half-width="true" />
        <DetailItem label="Phone" :value="props.phone" :half-width="true" />
      </div>
      <DetailItem label="Department" :value="props.department" />
      <DetailItem label="Doctor" :value="props.doctor" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DetailItem from './DetailItem.vue'

export interface PatientDetailsProps {
  name?: string
  nric?: string
  phone?: string
  department?: string
  doctor?: string
}

const props = defineProps<PatientDetailsProps>()
</script>
