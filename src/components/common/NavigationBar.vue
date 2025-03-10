<template>
  <nav
    class="flex flex-col justify-center items-center px-10 py-4 w-full text-base text-center bg-white rounded-t-3xl shadow-lg"
  >
    <div class="flex gap-10 items-center">
      <button
        v-for="item in activeNavItems"
        :key="item.label"
        class="flex flex-col justify-center items-center self-stretch my-auto w-[100px]"
        :class="item.isActive ? 'font-bold tracking-wide text-purple-400' : 'text-neutral-500'"
        @click="handleClick(item)"
      >
        <ion-icon :icon="item.icon" size="large" :alt="item.label" />
        <span class="mt-1">{{ item.label }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IonIcon } from '@ionic/vue'
import { homeOutline, personCircleOutline } from 'ionicons/icons'
import type { NavItem } from './types'

const route = useRoute()
const router = useRouter()

const navItems: NavItem[] = [
  {
    icon: homeOutline,
    label: 'Homepage',
    path: '/home',
  },
  {
    icon: personCircleOutline,
    label: 'Account',
    path: '/account',
  },
]

const activeNavItems = computed(() =>
  navItems.map((item) => ({
    ...item,
    isActive: route.path === item.path,
  })),
)

function handleClick(item: NavItem) {
  console.log(`Clicked on ${item.label}`)
  if (route.path !== item.path) router.push(item.path)
}
</script>
