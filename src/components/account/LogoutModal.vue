<template>
  <ion-alert
    trigger="logout-alert"
    header="Logout"
    :buttons="alertButtons"
    message="Are you sure you want to log out?"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonAlert } from '@ionic/vue'

const router = useRouter()

const alertButtons = [
  {
    text: 'Cancel',
    role: 'cancel',
    handler: () => {
      console.log('Logout canceled')
    },
  },
  {
    text: 'Logout',
    role: 'confirm',
    handler: () => {
      handleLogout()
    },
  },
]

function handleLogout() {
  console.log('Logging out...')
  router.push('/login')
}
</script>
