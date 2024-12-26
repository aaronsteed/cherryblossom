<template>
  <div class="pb-20">
    <!--    TODO maybe make this a component for all sections (a lot of it is copied in a bunch of places) -->
    <h1
      class="flex flex-col desktop:text-5xl tablet:text-4xl mobile:text-4xl font-bold text-center justify-center items-center text-black pt-24 pb-20"
    >
      Projects
    </h1>
    <div v-if="!isSmallScreen" class="flex justify-center space-x-40">
      <project-card
        github-link="https://github.com/aaronsteed/cherryblossom"
        project-description="Portfolio site you're currently exploring ✨ Made with VueJS, Nuxt and a lot of ❤️"
        project-name="Cherry Blossom"
        icon="cherry-blossom.jpeg"
      >
      </project-card>
      <project-card
        github-link="https://github.com/aaronsteed/technitium-dns-kube-controller"
        project-description="Kubernetes controller to create DNS records in Technitium DNS using Custom Resource Definitions"
        project-name="Technitium DNS Kubernetes Controller"
        icon="kubernetes.jpg"
      >
      </project-card>
    </div>
    <div v-if="isSmallScreen" class="flex justify-center">
      <div class="space-y-20 flex-col">
        <project-card
          github-link="https://github.com/aaronsteed/cherryblossom"
          project-description="Portfolio site you're currently exploring ✨Take a peak at the code if you're interested"
          project-name="Cherry Blossom"
          icon="cherry-blossom.jpeg"
        >
        </project-card>
        <project-card
          github-link="https://github.com/aaronsteed/technitium-dns-kube-controller"
          project-description="Kubernetes controller to create DNS records in Technitium DNS using Custom Resource Definitions"
          project-name="Technitium DNS Kubernetes Controller"
          icon="kubernetes.jpg"
        >
        </project-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useMediaQuery } from '@vueuse/core'
import ProjectCard from '~/components/sub-components/ProjectCard.vue'
export default {
  name: 'ProjectsView',
  components: { ProjectCard },
  setup() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)')
    return {
      isSmallScreen,
    }
  },
}
</script>
