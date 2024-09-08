<template>
  <div>
    <landing-section roles="Software Engineer 💻"></landing-section>
    <div class='overflow-hidden bg-cover min-h-screen'>
      <v-timeline truncate-line='both' class='desktop:ml-60 desktop:mr-60 tablet:ml-20 tablet:mr-20 mobile:ml-2 mobile:mr-2 pt-20'>
        <v-timeline-item dot-color='red'><v-card>
          <v-card-item>
            <v-card-title>Dublin City University</v-card-title>
            <v-card-subtitle>Student of Computer Science (2013 - 2017)</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae dolorum labore nulla quia velit voluptatum!
          </v-card-text>
        </v-card></v-timeline-item>
        <v-timeline-item dot-color='red'><v-card>
          <v-card-item>
            <v-card-title>Cellusys</v-card-title>
            <v-card-subtitle>Software Engineer → Senior Software Engineer (2017 - 2021) </v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae dolorum labore nulla quia velit voluptatum!
          </v-card-text>
        </v-card></v-timeline-item>
        <v-timeline-item dot-color='red'><v-card>
          <v-card-item>
            <v-card-title>Riot Games</v-card-title>
            <v-card-subtitle>Software Engineer → Senior Software Engineer (2021 - Present)</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae dolorum labore nulla quia velit voluptatum!
          </v-card-text>
        </v-card></v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script setup lang="ts">
import LandingSection from '~/components/sections/LandingSection.vue'
import Timeline from '~/components/timeline.vue'
</script>
