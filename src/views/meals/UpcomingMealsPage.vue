<template>
  <ion-page>
    <ion-content>
      <back-button />

      <section class="pb-6 px-4">
        <div class="text-xl font-semibold mb-4">View upcoming meals</div>

        <!-- Week Selector Component -->
        <div class="flex items-center mb-4">
          <ion-icon
            :icon="chevronBackCircle"
            color="primary"
            class="text-5xl cursor-pointer"
            @click="handleWeekBack"
          />
          <div class="flex-1 text-center font-bold">
            {{ currentWeek.start }} - {{ currentWeek.end }}
          </div>
          <ion-icon
            :icon="chevronForwardCircle"
            color="primary"
            class="text-5xl cursor-pointer"
            @click="handleWeekForward"
          />
        </div>

        <!-- Selected Meals for Week -->
        <section v-if="mealStore.$state.isLoading">
          <ion-skeleton-text
            v-for="i in 3"
            :key="i"
            animated
            class="mt-4 rounded-xl"
            style="width: 100%; height: 10rem"
          />
        </section>
        <section v-else>
          <div v-if="weekMeals?.length">
            <!-- Daily Meal Cards -->
            <ion-card v-for="day in weekMeals" :key="day.date" class="mb-4 rounded-xl">
              <ion-card-content>
                <div class="text-lg">
                  {{ format(day.date, 'EEEE, d MMMM yyyy') }}
                </div>
                <div v-if="day.lunch || day.dinner" class="flex flex-col my-4 gap-4">
                  <div v-if="day.lunch" class="flex gap-4 items-center">
                    <img :src="day.lunch.img" class="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <div class="font-semibold">Lunch</div>
                      <div class="mt-2">{{ day.lunch.name }}</div>
                    </div>
                  </div>
                  <div v-if="day.dinner" class="flex gap-4 items-center">
                    <img :src="day.dinner.img" class="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <div class="font-semibold">Dinner</div>
                      <div class="mt-2">{{ day.dinner.name }}</div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div>No meals selected for this day</div>
                </div>
                <ion-button fill="outline" expand="block"> Change meals </ion-button>
              </ion-card-content>
            </ion-card>
          </div>
          <div v-else>
            <div>No meals selected for this week</div>
          </div>
        </section>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  IonPage,
  IonContent,
  IonIcon,
  IonCard,
  IonCardContent,
  IonButton,
  IonSkeletonText,
} from '@ionic/vue'
import { chevronBackCircle, chevronForwardCircle } from 'ionicons/icons'
import { format, startOfWeek, endOfWeek } from 'date-fns'
import BackButton from '@/components/common/BackButton.vue'
import { useMealStore } from '@/stores/mealStore'

const mealStore = useMealStore()

const startOfWeekDate = ref(startOfWeek(new Date(), { weekStartsOn: 1 }))
const endOfWeekDate = ref(endOfWeek(new Date(), { weekStartsOn: 1 }))
const weekMeals = computed(() =>
  mealStore.mealsForDateRange(startOfWeekDate.value, endOfWeekDate.value),
)

const currentWeek = computed(() => ({
  start: format(startOfWeekDate.value, 'dd MMM'),
  end: format(endOfWeekDate.value, 'dd MMM yyyy'),
}))

function handleWeekBack() {
  const newStart = startOfWeek(
    new Date(startOfWeekDate.value.setDate(startOfWeekDate.value.getDate() - 7)),
    { weekStartsOn: 1 },
  )
  const newEnd = endOfWeek(
    new Date(endOfWeekDate.value.setDate(endOfWeekDate.value.getDate() - 7)),
    { weekStartsOn: 1 },
  )
  startOfWeekDate.value = newStart
  endOfWeekDate.value = newEnd
}

function handleWeekForward() {
  const newStart = startOfWeek(
    new Date(startOfWeekDate.value.setDate(startOfWeekDate.value.getDate() + 7)),
    { weekStartsOn: 1 },
  )
  const newEnd = endOfWeek(
    new Date(endOfWeekDate.value.setDate(endOfWeekDate.value.getDate() + 7)),
    { weekStartsOn: 1 },
  )
  startOfWeekDate.value = newStart
  endOfWeekDate.value = newEnd
}
</script>
