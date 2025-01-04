<template>
  <div>
    <v-app>
      <hero-section roles="Software Engineer."></hero-section>
      <experience-view></experience-view>
      <projects-view></projects-view>
      <footer-section></footer-section>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import HeroSection from '~/components/views/HeroSection.vue'
import ExperienceView from '~/components/views/ExperienceView.vue'
import ProjectsView from '~/components/views/ProjectsView.vue'
import FooterSection from '~/components/views/FooterSection.vue'
useSeoMeta({
  title: 'Aaron Steed (aaronsteed.io)',
  ogTitle: 'Aaron Steed (aaronsteed.io)',
  ogUrl: 'https://aaronsteed.io',
  description: "Aaron Steed's Portfolio Site",
  ogDescription: "Aaron Steed's Portfolio Site",
  ogImage: '/images/profile.png',
  twitterDescription: "Aaron Steed's Portfolio Site",
  twitterImage: '/images/profile.png',
  twitterCard: 'player',
  twitterTitle: 'Aaron Steed (aaronsteed.io)',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
</script>
