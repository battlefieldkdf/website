<script setup lang="ts">
import { LoremIpsum } from 'lorem-ipsum';

import AboutUsJpg from '@battlefieldkdf/images/about-us.jpg';
import MainContentCard from '@battlefieldkdf/components/MainContentCard.vue';

const lipsum = new LoremIpsum();
</script>

<template>
    <MainContentCard :image="AboutUsJpg" alt="About Us">
        <template #title> About Battlefield KdF </template>

        <p class="text-body-1 lead-letter">We like swords. {{ lipsum.generateSentences(10) }}</p>

        <VSheet class="ma-3">
            <VRow justify="space-between">
                <VCol v-for="it in ['a', 'b', 'c', 'd', 'e', 'f']" :key="it" cols="4">
                    <VSkeletonLoader block type="image,text" />
                </VCol>
            </VRow>
        </VSheet>
    </MainContentCard>
</template>
