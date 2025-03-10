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
        <img
          :src="item.icon"
          class="object-contain overflow-hidden w-8 aspect-square"
          :alt="item.label"
        />
        <span class="mt-1">{{ item.label }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { NavItem } from './types'

const route = useRoute()
const router = useRouter()

const navItems: NavItem[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fdf4e9fcaf8a23a773dfaa31c147d3b67452d6de61aeb2ae7de5ec98a8be4c7f?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d',
    label: 'Homepage',
    path: '/home',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a499e5bed522097dd9d11f4bf0ada0974ea21586a68a14253cd8994f61fce95?placeholderIfAbsent=true&apiKey=abeb1f4ba85b45269a6aeb4e1c98d24d',
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
