import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/tailwind.scss";
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/assets/libs/@iconscout/unicons/css/line.css";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LoadingPlugin, {
    color: '#0891b2',
    loader: 'dots',
    width: 64,
    height: 64,
    backgroundColor: '#ffffff',
    opacity: 0.5,
    zIndex: 999,
    isFullPage: true,
    canCancel: false,
  });
  

app.mount('#app')
