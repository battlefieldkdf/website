<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

import DesktopNavigation from '@battlefieldkdf/components/navigation/DesktopNavigation.vue';
import MobileNavigation from '@battlefieldkdf/components/navigation/MobileNavigation.vue';

const display = useDisplay();
</script>

<template>
    <VApp>
        <VLayout>
            <MobileNavigation v-if="display.mobile.value" />
            <VNavigationDrawer floating>
                <DesktopNavigation v-if="!display.mobile.value" />
            </VNavigationDrawer>
            <VMain>
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
@import 'vuetify/styles';

.lead-letter::first-letter {
    float: left;
    font-size: 4em;
    vertical-align: text-top;
    font-weight: bold;
}
</style>
