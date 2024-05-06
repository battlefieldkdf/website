<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

import DesktopNavigation from '@battlefieldkdf/components/navigation/DesktopNavigation.vue';
import MobileNavigation from '@battlefieldkdf/components/navigation/MobileNavigation.vue';

const display = useDisplay();
</script>

<template>
    <VApp>
        <VLayout class="app">
            <MobileNavigation v-if="display.mobile.value" />
            <VNavigationDrawer floating>
                <DesktopNavigation v-if="!display.mobile.value" />
            </VNavigationDrawer>
            <VMain scrollable>
                <RouterView v-if="display.mobile.value" />
                <VContainer v-else>
                    <VRow>
                        <VSpacer />
                        <VCol md="10" xl="7">
                            <RouterView />
                        </VCol>
                        <VSpacer />
                    </VRow>
                </VContainer>
            </VMain>
        </VLayout>
    </VApp>
</template>

<style lang="scss">
@import 'vuetify';

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

html {
    font-family: 'Playfair Display', serif, auto;
    font-size: 14pt;
}

.lead-letter::first-letter {
    float: left;
    font-size: 3em;
    vertical-align: text-top;
    font-weight: bold;
}
</style>
