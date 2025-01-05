<template>
  <v-timeline
    side="end"
    line-color="#2B2D42"
    truncate-line="both"
    class="mobile:ml-2 mobile:mr-2 pt-10 pr-10"
  >
    <v-timeline-item
      v-for="(experience, index) in props.experiences"
      :key="'exp' + index"
      size="small"
    >
      <template #icon>
        <v-avatar>
          <img :src="experience.imageUrl" :alt="experience.imageAlt" />
        </v-avatar>
      </template>
      <v-card rounded="500" flat class="!shadow-md !rounded-xl">
        <v-card-item>
          <v-card-title>{{ experience.company }}</v-card-title>
          <v-card-subtitle opacity="100"
            >{{ experience.duration }}
          </v-card-subtitle>
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
const props = defineProps({
  experiences: {
    type: Array<Experience>,
    required: true,
  },
})
</script>
