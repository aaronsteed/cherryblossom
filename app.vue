<template>
  <div>
    <v-app>
      <hero-section roles="Software Engineer 💻"></hero-section>
      <timeline-view></timeline-view>
      <projects-view></projects-view>
      <footer-section></footer-section>
    </v-app>
  </div>
</template>
<script setup lang="ts">
import HeroSection from '~/components/views/HeroSection.vue'
import TimelineView from '~/components/views/TimelineView.vue'
import ProjectsView from '~/components/views/ProjectsView.vue'
import FooterSection from '~/components/views/FooterSection.vue'
</script>
