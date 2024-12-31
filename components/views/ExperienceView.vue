<template>
  <div class="h-auto desktop:pl-56 desktop:pr-56 bg-[#EDF2F4]">
    <div class="flex justify-center p-2 items-center">
      <h1
        id="experience"
        class="flex w-fit bg-[#2B2D42] p-2 desktop:text-5xl tablet:text-4xl mobile:text-4xl font-bold text-white"
      >
        Experience
      </h1>
    </div>
    <v-timeline
      v-if="!isSmallScreen"
      truncate-line="both"
      line-color="#2B2D42"
      class="!desktop:ml-60 !desktop:mr-60 !tablet:ml-20 !tablet:mr-20 !mobile:px-40 pb-10 px-20"
    >
      <v-timeline-item
        v-for="pastExperience in pastExperiences"
        :key="pastExperience.company"
      >
        <template #icon>
          <v-avatar>
            <img :src="pastExperience.imageUrl" alt="past experience logo" />
          </v-avatar>
        </template>
        <template #opposite>
          <div class="bg-[#2B2D42] w-fit text-[#EDF2F4] p-1">
            <b>{{ pastExperience.duration }}</b>
          </div>
        </template>
        <v-card
          rounded="500"
          flat
          class="desktop:w-96 tablet:w-auto pl-52 !shadow-md !rounded-xl"
        >
          <v-card-item>
            <v-card-title>{{ pastExperience.company }}</v-card-title>
            <v-card-subtitle>{{ pastExperience.role }}</v-card-subtitle>
          </v-card-item>
          <v-card-text class="whitespace-pre-line">
            {{ pastExperience.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline
      v-if="isSmallScreen"
      side="end"
      line-color="#2B2D42"
      truncate-line="both"
      class="mobile:ml-2 mobile:mr-2 pt-10 pr-10"
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
        <v-card rounded="500" flat class="!shadow-md !rounded-xl">
          <v-card-item>
            <v-card-title>{{ experience.company }}</v-card-title>
            <v-card-subtitle opacity="100"
              >{{ experience.duration }}
            </v-card-subtitle>
            <v-card-subtitle class="!font-bold !opacity-100">{{
              experience.role
            }}</v-card-subtitle>
          </v-card-item>
          <v-card-text class="whitespace-pre-line">
            {{ experience.description }}
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
          description:
            'The university where I learned my craft. My final year project was a device and system I created to detect head trauma and concussions in sport.\n\nBuilt using an Arduino which had an accelerometer and GSM modem, with the algorithm taking a lot of inspiration from formal white papers describing similar devices built for fall detection of the elderly.',
          imageUrl: '/images/DCU.png',
        },
        {
          company: 'Cellusys',
          role: 'Software Engineer → Senior Software Engineer',
          duration: '2017 - 2021',
          description:
            'Developing features alongside my peers on their Signalling Firewall product, which enabled Mobile Networks to secure their subscribers from malicious attacks.\n\nNotable contributions including adding multitenancy to the product from the ground up, changing the underlying engine to a rule based engine which built a lot of flexibility into a system which required it for an ever evolving problem space and creating low level encoders for SIP (VoIP), 4G and 5G.',
          imageUrl: '/images/Cellusys.jpeg',
        },
        {
          company: 'Riot Games',
          role: 'Software Engineer → Senior Software Engineer',
          duration: '2021 - Present',
          description:
            "Initially joined Riot Games' Production Engineering team where I actively contributed to a multi year project to migrate the legacy observability platform to a solution more in line with industry standards as we moved vendors. The main motivation of the project being to work towards an ever maturing observability pipeline which is vendor-agnostic, cost-effective and sustainable.\n\nNow I currently work on the Content Access Platform (CAP), creating game agnostic content and monetization systems for all of Riot's titles.",
          imageUrl: '/images/Riot.png',
        },
      ],
    }
  },
}
</script>
