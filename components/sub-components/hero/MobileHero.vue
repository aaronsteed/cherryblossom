<template>
  <div>
    <div class="flex h-auto flex-col text-5xl pt-32 w-full">
      <div class="flex pb-10 w-full">
        <NuxtImg
          v-show="!isLoading"
          class="mobile:h-32 mobile:w-32 rounded-full mobile:mr-10 border-4 border-[#2B2D42]"
          src="/images/profile.png"
          alt="my profile picture"
          @load="handleImageLoad"
        />
        <USkeleton
          v-show="isLoading"
          class="min-w-32 min-h-32 h-32 w-32 mr-10"
          :ui="{ rounded: 'rounded-full' }"
        />
      </div>
      <div class="mobile:text-2xl font-bold">
        <h1
          v-show="!isLoading"
          class="bg-[#2B2D42] p-4 text-[#EDF2F4] mobile:w-11/12"
        >
          {{ heroData.tagLine }}
        </h1>
        <USkeleton v-show="isLoading" class="block p-4 h-16 w-11/12" />
        <div class="p-2"></div>
        <h1
          v-show="!isLoading"
          class="bg-[#2B2D42] mobile:text-2xl p-4 text-[#EF233C] w-9/12"
        >
          {{ heroData.role }}
        </h1>
        <USkeleton v-show="isLoading" class="block p-4 h-16 w-9/12" />
        <div class="p-2"></div>
        <div class="flex flex-row">
          <hero-blurb v-show="!isLoading"></hero-blurb>
          <USkeleton v-show="isLoading" class="block p-4 h-40 w-8/12" />
        </div>
      </div>
      <div id="hero-button-row"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import HeroBlurb from '~/components/sub-components/hero/HeroBlurb.vue'

export default {
  components: { HeroBlurb },
  setup() {
    const heroData = {
      tagLine: "Hi!👋 I'm Aaron Steed.",
      role: 'Software Engineer.',
    }

    let isSmallScreen = useMediaQuery('(max-width: 800px)')
    onMounted(() => {
      isSmallScreen = useMediaQuery('(max-width: 800px)')
    })
    const isLoading = ref(true)

    function handleImageLoad() {
      isLoading.value = false
    }

    return {
      isSmallScreen,
      isLoading,
      heroData,
      handleImageLoad,
    }
  },
}
</script>
