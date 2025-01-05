<template>
  <div class="h-auto desktop:pl-56 desktop:pr-56 bg-[#EDF2F4]">
    <div
      class="flex justify-center p-2 items-center">
      <h1
        id="experience"
        class="flex w-fit bg-[#2B2D42] p-2 desktop:text-5xl tablet:text-4xl mobile:text-4xl font-bold text-white"
      >
        Experience
      </h1>
    </div>
    <desktop-timeline
      v-if="!isSmallScreen"
      :experiences="pastExperiences"
    ></desktop-timeline>
    <mobile-timeline
      v-if="isSmallScreen"
      :experiences="pastExperiences"
    ></mobile-timeline>
  </div>
</template>
<script lang="ts">
import { useMediaQuery } from '@vueuse/core'
import MobileTimeline from '~/components/sub-components/timeline/MobileTimeline.vue'
import DesktopTimeline from '~/components/sub-components/timeline/DesktopTimeline.vue'

export default {
  components: { DesktopTimeline, MobileTimeline },
  setup() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)')
    const pastExperiences = [
      {
        company: 'Riot Games',
        role: 'Software Engineer → Senior Software Engineer',
        duration: '2021 - Present',
        description:
          "Initially joined Riot Games' Production Engineering team where I actively contributed to a multi year project to migrate the legacy observability platform to a solution more in line with industry standards as we moved vendors. The main motivation of the project being to work towards an ever maturing observability pipeline which is vendor-agnostic, cost-effective and sustainable.\n\nNow I currently work on the Content Access Platform (CAP), creating game agnostic content and monetization systems for all of Riot's titles; League of Legends, Teamfight Tactics, VALORANT, 2XKO & Legends of Runeterra.",
        imageUrl: '/images/Riot.png',
        imageAlt: 'Riot Games Logo',
      },
      {
        company: 'Cellusys',
        role: 'Software Engineer → Senior Software Engineer',
        duration: '2017 - 2021',
        description:
          'Developing features alongside my peers on their Signalling Firewall product, which enabled Mobile Networks to secure their subscribers from malicious attacks.\n\nNotable contributions including adding multitenancy to the product from the ground up, changing the underlying engine to a rule based engine which built a lot of flexibility into a system which required it for an ever evolving problem space and creating low level encoders for SIP (VoIP), 4G and 5G.',
        imageUrl: '/images/Cellusys.jpeg',
        imageAlt: 'Cellusys Logo',
      },
      {
        company: 'Dublin City University',
        role: 'BSc. Computer Science',
        duration: '2013 - 2017',
        description:
          'The university where I learned my craft. My final year project was a device and system I created to detect head trauma and concussions in sport.\n\nBuilt using an Arduino which had an accelerometer and GSM modem, with the algorithm taking a lot of inspiration from formal white papers describing similar devices built for fall detection of the elderly.',
        imageUrl: '/images/DCU.png',
        imageAlt: 'DCU Logo',
      },
    ]

    return {
      pastExperiences,
      isSmallScreen,
    }
  },
}
</script>
