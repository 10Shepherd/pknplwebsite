import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import { initLowDataMode } from './composables/useLowDataMode'
import { initTheme } from './composables/useTheme'

initLowDataMode()
initTheme()

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)

app.mount('#app')
