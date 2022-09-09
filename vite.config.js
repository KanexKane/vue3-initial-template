import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import WindiCss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
      },
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    VueI18n({
      compositionOnly: false,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    WindiCss(),
  ],
});
