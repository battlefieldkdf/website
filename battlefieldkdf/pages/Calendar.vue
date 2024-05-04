<script setup lang="ts">
import { LoremIpsum } from 'lorem-ipsum';

import CalendarJpg from '@battlefieldkdf/images/calendar.jpg';
import MainContentCard from '@battlefieldkdf/components/MainContentCard.vue';

const lipsum = new LoremIpsum();
</script>

<template>
    <MainContentCard :image="CalendarJpg" alt="Calendar">
        <template #title> Battlefield KdF Calendar </template>

        <p class="text-body-1 lead-letter">We like swords. {{ lipsum.generateSentences(10) }}</p>

        <VSkeletonLoader type="table"></VSkeletonLoader>
    </MainContentCard>
</template>
