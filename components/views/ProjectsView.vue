<template>
  <div class="pb-20 bg-[#EDF2F4] pt-10">
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
        v-for="(project, index) in projects"
        :key="'project-' + index"
        :project="project"
      >
      </project-card>
    </div>
    <div v-if="isSmallScreen" class="flex justify-center">
      <div class="space-y-20 flex-col">
        <project-card
          v-for="(project, index) in projects"
          :key="'project-' + index"
          :project="project"
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
  components: { ProjectCard },
  setup() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)')
    const projects = [
      {
        name: 'Cherry Blossom',
        description:
          "Portfolio site you're currently exploring ✨ Made with VueJS, Typescript, NuxtJS, some libraries and a lot of ❤️. Take a peek at the source if you're curious",
        githubLink: 'https://github.com/aaronsteed/cherryblossom',
        image: 'cherry-blossom.jpeg',
        imageAlt: 'Cherry Blossom image',
      },
      {
        name: 'Technitium DNS Kubernetes Controller',
        description:
          'Kubernetes controller to create DNS records in Technitium DNS using native Kubernetes Config maps',
        githubLink:
          'https://github.com/aaronsteed/technitium-dns-kube-controller',
        image: 'kubernetes.jpg',
        imageAlt: 'Kubernetes logo',
      },
    ]
    return {
      isSmallScreen,
      projects,
    }
  },
}
</script>
