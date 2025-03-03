import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from './router'

// Import Ionic styles
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

// Import Tailwind CSS
import './assets/tailwind.css'

// Import global styles
import './assets/main.css'

// Import Capacitor plugins
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'

// Set up the app
const pinia = createPinia()
const app = createApp(App)
  .use(IonicVue, {
    mode: 'ios', // Use iOS mode for a more consistent UI across platforms
  })
  .use(pinia)
  .use(router)

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Initialize Capacitor plugins if running on a device
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone ||
      document.referrer.includes('android-app://')
    ) {
      await StatusBar.setStyle({ style: Style.Light })
      await SplashScreen.hide()
    }
  } catch (error) {
    console.warn('Unable to initialize Capacitor plugins', error)
  }

  // Mount the app
  app.mount('#app')
})
