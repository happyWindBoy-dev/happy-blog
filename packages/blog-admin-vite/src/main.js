import { createApp } from 'vue';
import 'virtual:windi.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import { routes } from './router';
import './theme.scss';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App);

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

app.use(router);
app.use(VueMarkdownEditor);

app.mount('#app');
