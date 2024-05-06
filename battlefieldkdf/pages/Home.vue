<script setup lang="ts">
import MainContentCard from '@battlefieldkdf/components/MainContentCard.vue';
import HomeSplashJpg from '@battlefieldkdf/images/home-splash.jpg';

import { LoremIpsum } from 'lorem-ipsum';

const lipsum = new LoremIpsum();
</script>

<template>
    <MainContentCard :image="HomeSplashJpg" alt="Home">
        <template #title> Battlefield Kunst des Fechtens </template>

        <p class="lead-letter">
            Battlefield KdF is a HEMA club in Manassas, Virginia. {{ lipsum.generateSentences(10) }}
        </p>
    </MainContentCard>
</template>

<style scoped></style>
