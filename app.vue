<template>
  <div class="!font-default">
    <v-app>
      <hero-section></hero-section>
      <experience-view></experience-view>
      <projects-view></projects-view>
      <footer-section></footer-section>
      <dev-only>
        <a
          class="hidden desktop:block fixed bottom-0 right-0 m-2 z-10 bg-blue-500 text-white p-2 rounded shadow-lg cursor-pointer"
          href="https://github.com/aaronsteed/cherryblossom"
        >
          Development Preview
        </a>
      </dev-only>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import HeroSection from '~/components/views/HeroSection.vue'
import ExperienceView from '~/components/views/ExperienceView.vue'
import ProjectsView from '~/components/views/ProjectsView.vue'
import FooterSection from '~/components/views/FooterSection.vue'
useSeoMeta({
  title: 'Aaron Steed',
  ogTitle: 'Aaron Steed',
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
