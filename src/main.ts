import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App'
import router from './router'
import ViewUiPlus from 'view-ui-plus'
import './styles/index.less'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
    .use(router)
    .use(ViewUiPlus)

router.isReady().then(() => app.mount('#app'))
// app.mount('#app')
