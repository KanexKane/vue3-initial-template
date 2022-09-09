import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import generateRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import 'windi.css';
import './style.css';
import App from './App.vue';

const routes = setupLayouts(generateRoutes);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App).use(router);

Object.values(import.meta.globEager('./modules/*.js')).map((i) =>
  i.install?.({ app })
);

app.mount('#app');
