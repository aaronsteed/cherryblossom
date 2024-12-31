<template>
  <div
    class="min-w-screen min-h-screen h-screen w-screen bg-[#EDF2F4] desktop:px-40 pt-32 px-5"
  >
    <div v-if="!isSmallScreen" class="flex h-64 flex-row text-5xl">
      <img
        class="mobile:h-32 mobile:w-32 tablet:h-48 tablet:w-48 rounded-full desktop:mr-20 mobile:mr-10 h-screen border-4 border-[#2B2D42]"
        src="/images/profile.png"
        alt="my profile picture"
      />
      <div class="desktop:text-7xl tablet:text-4xl mobile:text-2xl font-bold">
        <h1 class="bg-[#2B2D42] p-4 text-[#EDF2F4] shadow-sm">
          Hi! 👋 I'm Aaron Steed.
        </h1>
        <div class="p-2"></div>
        <h1
          class="bg-[#2B2D42] desktop:text-4xl tablet:text-3xl mobile:text-2xl p-4 text-[#EF233C] w-4/6 shadow-lg"
        >
          {{ roles }}
        </h1>
        <div class="p-2"></div>
        <div class="flex flex-row">
          <div
            class="bg-[#2B2D42] p-4 text-white desktop:text-lg tablet:text-sm mobile:text-sm font-weight-light w-3/6 shadow-sm"
          >
            Currently working in Dublin, Ireland. 🇮🇪
            <br class="p-1" />
            Love to collect hobbies, but some of my main stays are
            <span class="text-[#D90429]">playing games</span>,
            <span class="text-[#8D99AE]">reading</span>,
            <span class="text-[#EF233C]">baking bread</span> &
            <span class="text-[#EDF2F4]">running</span>.
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSmallScreen" class="flex h-64 flex-col text-5xl pt-20">
      <div class="flex pb-10">
        <img
          class="mobile:h-32 mobile:w-32 rounded-full mobile:mr-10 h-screen border-4 border-[#2B2D42]"
          src="/images/profile.png"
          alt="my profile picture"
        />
      </div>
      <div class="mobile:text-2xl font-bold">
        <h1 class="bg-[#2B2D42] p-4 text-[#EDF2F4] mobile:w-11/12">
          Hi! 👋 I'm Aaron Steed.
        </h1>
        <div class="p-2"></div>
        <h1
          class="bg-[#2B2D42] mobile:text-2xl p-4 text-[#EF233C] w-9/12"
        >
          {{ roles }}
        </h1>
        <div class="p-2"></div>
        <div class="flex flex-row">
          <div
            class="bg-[#2B2D42] p-4 text-white desktop:text-lg tablet:text-sm mobile:text-sm font-weight-light w-8/12"
          >
            Currently working in Dublin, Ireland. 🇮🇪
            <br class="p-1" />
            Love to collect hobbies, but some of my main stays are
            <span class="text-[#D90429]">playing games</span>,
            <span class="text-[#8D99AE]">reading</span>,
            <span class="text-[#EF233C]">baking bread</span> &
            <span class="text-[#EDF2F4]">running</span>.
          </div>
        </div>
      </div>
      <div id="hero-button-row"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { useMediaQuery } from '@vueuse/core'

export default {
  name: 'LandingSection',
  props: {
    roles: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  setup() {
    const isSmallScreen = useMediaQuery('(max-width: 800px)')
    return {
      isSmallScreen,
    }
  },
}
</script>

<style scoped>
.hero-landing {
  background: linear-gradient(-45deg, #12238d, #ff0433, #12238d, #ff002d);
  background-size: 400% 400%;
  animation: gradient 40s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
