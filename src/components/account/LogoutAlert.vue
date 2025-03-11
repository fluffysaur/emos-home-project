<template>
  <ion-alert
    trigger="logout-alert"
    header="Confirm Logout"
    :buttons="alertButtons"
    message="You will be returned to the login screen."
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonAlert } from '@ionic/vue'
import AuthService from '@/services/authService'

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
    text: 'Log out',
    role: 'confirm',
    handler: () => {
      handleLogout()
    },
  },
]

function handleLogout() {
  console.log('Logging out...')
  AuthService.logout();
  router.push('/login')
}
</script>
