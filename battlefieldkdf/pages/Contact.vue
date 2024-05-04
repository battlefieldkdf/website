<script setup lang="ts">
import { LoremIpsum } from 'lorem-ipsum';

import MainContentCard from '@battlefieldkdf/components/MainContentCard.vue';
import ContactJpg from '@battlefieldkdf/images/contact.jpg';

const lipsum = new LoremIpsum();
</script>

<template>
    <MainContentCard :image="ContactJpg" alt="Contact">
        <template #title> Contact Battlefield KdF </template>

        <p class="text-body-1">
            {{ lipsum.generateSentences(5) }}
        </p>

        <VSkeletonLoader type="table" />
    </MainContentCard>
</template>
