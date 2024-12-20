<template>
  <div
    class="overflow-hidden bg-cover min-w-min min-h-screen cb-landing-page pt-20"
  >
    <div class="flex h-64 flex-row text-5xl justify-center items-center">
      <img
        class="desktop:w-56 desktop:h-56 mobile:h-44 mobile:w-44 tablet:h-48 tablet:w-48 rounded-full"
        src="~/assets/images/profile.png"
        alt="my profile picture"
      />
    </div>
    <div
      class="flex flex-col desktop:text-7xl tablet:text-6xl mobile:text-4xl font-bold text-center justify-center items-center text-white"
    >
      <h1>Hi! 👋</h1>
      <h1>I'm Aaron!</h1>
      <h1>{{ roles }}</h1>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LandingSection',
  props: {
    roles: {
      type: String,
      required: true,
      default: () => '',
    },
  },
}
</script>
