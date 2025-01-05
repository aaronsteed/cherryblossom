<template>
  <v-timeline
    truncate-line="both"
    line-color="#2B2D42"
    class="!desktop:ml-60 !desktop:mr-60 !tablet:ml-20 !tablet:mr-20 !mobile:px-40 pt-10 pb-10 px-20"
  >
    <v-timeline-item
      v-for="(experience, index) in experiences"
      :key="'exp-' + index"
    >
      <template #icon>
        <v-avatar>
          <img :src="experience.imageUrl" :alt="experience.imageAlt" />
        </v-avatar>
      </template>
      <template #opposite>
        <div class="bg-[#2B2D42] w-fit text-[#EDF2F4] p-1">
          <b>{{ experience.duration }}</b>
        </div>
      </template>
      <v-card
        rounded="500"
        flat
        class="desktop:w-96 tablet:w-auto pl-52 !shadow-md !rounded-xl"
      >
        <v-card-item>
          <v-card-title>{{ experience.company }}</v-card-title>
          <v-card-subtitle class="!text-xs">{{
            experience.role
          }}</v-card-subtitle>
        </v-card-item>
        <v-card-text class="whitespace-pre-line">
          {{ experience.description }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Experience {
  description: string
  duration: string
  company: string
  imageUrl: string
  imageAlt: string
  role: string
}
defineProps({
  experiences: {
    type: Array<Experience>,
    required: true,
  },
})
</script>
