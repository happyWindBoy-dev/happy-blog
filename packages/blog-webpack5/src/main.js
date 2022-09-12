import { createApp } from 'vue';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import { createRouter } from 'vue-router';
import App from './App.vue';
import 'windi.css';

const app = createApp(App);
// const router = createRouter({
//   // TODO...
// });

// Inspire by Sentry: https://docs.sentry.io/platforms/javascript/
Sentry.init({
  app,
  dsn: 'https://bd05332124b54823857f37e39dfe8eb2@o1228307.ingest.sentry.io/6374015',
  integrations: [
    new BrowserTracing({
      // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
  debug: true,
  logErrors: true,
});

app.mount('#app');
