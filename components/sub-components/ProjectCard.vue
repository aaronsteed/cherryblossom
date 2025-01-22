<template>
  <div
    class="flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
  >
    <div
      class="mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg"
      :style="{
        backgroundImage: `url('/images/${project.image}')`,
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="p-6 h-3/6">
      <h5
        class="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
      >
        {{ project.name }}
      </h5>
      <p
        class="block text-sm font-light leading-relaxed text-inherit antialiased"
      >
        {{ project.description }}
      </p>
    </div>
    <div class="p-6 pt-0">
      <button
        data-ripple-light="true"
        type="button"
        class="flex flex-row select-none rounded-lg bg-[#EF233C] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        @click="clicked"
      >
        <p>Github</p>
        <Icon name="tdesign:jump" size="17" class="ml-2"></Icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

interface Project {
  name: string
  description: string
  githubLink: string
  image: string
  imageAlt: string
}

export default {
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup(props) {
    function clicked(_: Event) {
      open(props.project.githubLink, '_blank')
    }
    return {
      clicked,
      props,
    }
  },
}
</script>
