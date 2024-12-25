<template>
  <div
    class="flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
  >
    <div
      class="mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg"
      :style="{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }"
    ></div>
    <div class="p-6 h-3/6">
      <h5
        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
      >
        {{ projectName }}
      </h5>
      <p
        class="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
      >
        {{ projectDescription }}
      </p>
    </div>
    <div class="p-6 pt-0">
      <button
        data-ripple-light="true"
        type="button"
        class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        @click="clicked"
      >
        Github ↗
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCard',
  props: {
    projectName: {
      type: String,
      required: true,
      default: () => '',
    },
    projectDescription: {
      type: String,
      required: true,
      default: () => '',
    },
    githubLink: {
      type: String,
      required: true,
      default: () => '',
    },
    icon: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  setup(props) {
    function clicked(_: Event) {
      open(props.githubLink, '_blank')
    }
    return { clicked, image: `/images/${props.icon}` }
  },
}
</script>
