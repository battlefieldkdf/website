import * as Vue from 'vue';

import { createVuetify } from '@battlefieldkdf/styles/vuetify-loader';

import App from '@battlefieldkdf/App.vue';
import { createBkdfRouter } from './router';

async function main() {
    const app = Vue.createApp(App);

    app.use(await createVuetify());
    app.use(createBkdfRouter());

    app.mount('#app-wrapper');
    document.getElementById('prevue')?.remove();
}

main();
