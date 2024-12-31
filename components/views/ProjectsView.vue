<template>
  <div class="pb-20 bg-[#EDF2F4] pt-10">
    <!--    TODO maybe make this a component for all sections (a lot of it is copied in a bunch of places) -->
    <div class="flex justify-center p-2 items-center">
      <h1
        id="experience"
        class="flex w-fit bg-[#2B2D42] p-2 desktop:text-5xl tablet:text-4xl mobile:text-4xl font-bold text-white"
      >
        Projects
      </h1>
      <div class="pb-56"></div>
    </div>
    <div
      v-if="!isSmallScreen"
      class="flex justify-center desktop:space-x-60 tablet:space-x-20"
    >
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
