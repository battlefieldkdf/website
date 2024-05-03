import * as Vue from 'vue';

import { createVuetify } from '@battlefieldkdf/styles/vuetify-loader';

import App from '@battlefieldkdf/App.vue';

async function main() {
    const app = Vue.createApp(App);
    const vuetify = await createVuetify();

    app.use(vuetify);
    // app.use(router);

    console.log('mounting app', app);

    app.mount('#app-wrapper');
    document.getElementById('prevue')?.remove();
}

await main();
