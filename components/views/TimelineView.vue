<template>
  <div class="overflow-hidden bg-cover min-h-screen">
    <v-timeline
      v-if="!isSmallScreen"
      truncate-line="both"
      class="desktop:ml-60 desktop:mr-60 tablet:ml-20 tablet:mr-20 pt-20"
    >
      <v-timeline-item
        v-for="pastExperience in pastExperiences"
        :key="pastExperience.company"
        class="desktop:p-52"
      >
        <template #icon>
          <v-avatar>
            <img :src="pastExperience.imageUrl" alt="past experience logo" />
          </v-avatar>
        </template>
        <template #opposite>
          <span>{{ pastExperience.duration }}</span>
        </template>
        <v-card rounded="500" flat>
          <v-card-item>
            <v-card-title>{{ pastExperience.company }}</v-card-title>
            <v-card-subtitle>{{ pastExperience.role }}</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            beatae dolorum labore nulla quia velit voluptatum!
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline
      v-if="isSmallScreen"
      side="end"
      truncate-line="both"
      class="mobile:ml-2 mobile:mr-2 pt-10"
    >
      <v-timeline-item
        v-for="experience in pastExperiences"
        :key="experience.company"
        size="small"
      >
        <template #icon>
          <v-avatar>
            <img :src="experience.imageUrl" alt="past experience logo" />
          </v-avatar>
        </template>
        <v-card rounded="500" flat>
          <v-card-item>
            <v-card-title>{{ experience.company }}</v-card-title>
            <v-card-subtitle class="font-extrabold" opacity="100">{{
              experience.duration
            }}</v-card-subtitle>
            <v-card-subtitle>{{ experience.role }}</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            beatae dolorum labore nulla quia velit voluptatum!
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script lang="ts">
import { useMediaQuery } from '@vueuse/core'

export default {
  name: 'TimelineView',
  setup() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)')
    return {
      isSmallScreen,
    }
  },
  data() {
    return {
      pastExperiences: [
        {
          company: 'Dublin City University',
          role: 'BSc. Computer Science',
          duration: '2013 - 2017',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMb4zu_cn-CYfiB9PPepXTDr7Td7yd0Vxb1NQpuZD8OS_1hJ5AandLT9XaW815sls4cbU&usqp=CAU',
        },
        {
          company: 'Cellusys',
          role: 'Software Engineer → Senior Software Engineer',
          duration: '2017 - 2021',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4E0BAQH184tAMLoq7Q/company-logo_200_200/company-logo_200_200/0/1651133802227?e=2147483647&v=beta&t=FAkKK0VOKc2fdkzuRQiPlQ3Blvuu2D-_fzELN6ZsF6g',
        },
        {
          company: 'Riot Games',
          role: 'Software Engineer → Senior Software Engineer',
          duration: '2021 - Present',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGvRhdg1vaZyhkn5zzE7p35e70SUgv0TVCw&s',
        },
      ],
    }
  },
}
</script>
