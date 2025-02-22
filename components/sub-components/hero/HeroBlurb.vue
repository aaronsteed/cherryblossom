<template>
  <div class="flex flex-row space-x-2">
    <div
      class="bg-[#2B2D42] p-4 text-[#8D99AE] desktop:text-base tablet:text-sm mobile:text-sm font-weight-light desktop:w-6/12 mobile:w-8/12"
    >
      <div v-if="!isSmallScreen" class="flex flex-row align-middle">
        Currently working in Dublin, Ireland.
        <NuxtImg
          src="/images/ireland-emoji.png"
          class="h-5 w-5 mx-1 inline"
        ></NuxtImg>
      </div>
      <div v-if="isSmallScreen" class="align-middle">
        Currently working in
        <div class="flex flex-row">
          Dublin, Ireland.
          <NuxtImg
            src="/images/ireland-emoji.png"
            class="h-5 w-5 mx-1"
          ></NuxtImg>
        </div>
      </div>

      <br class="pb-0.5" />
      Love to collect hobbies, but some of my main stays are
      <span class="text-[#D90429]">playing games</span>,
      <span class="text-[#EDF2F4]">reading</span>,
      <span class="text-[#EF233C]">baking bread</span> &
      <span class="text-[#EDF2F4]">running</span>.
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width: 800px)')
</script>
