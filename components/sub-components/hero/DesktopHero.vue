<template>
  <div class="h-screen flex items-center w-full">
    <div class="flex h-auto flex-row text-5xl w-full">
      <NuxtImg
        v-show="!isLoading"
        class="mobile:h-32 mobile:w-32 tablet:h-48 tablet:w-48 rounded-full desktop:mr-20 mobile:mr-10 h-screen border-4 border-[#2B2D42]"
        src="/images/profile.png"
        alt="my profile picture"
        @load="handleImageLoad"
      />
      <USkeleton
        v-show="isLoading"
        class="min-w-48 min-h-48 h-48 w-48 mr-20"
        :ui="{ rounded: 'rounded-full' }"
      />
      <div
        class="desktop:text-5xl h-auto tablet:text-4xl mobile:text-2xl font-bold w-full"
      >
        <h1 v-if="!isLoading" class="bg-[#2B2D42] p-4 text-[#EDF2F4] shadow-lg">
          {{ heroData.tagLine }}
        </h1>
        <USkeleton v-show="isLoading" class="block p-4 h-20 w-full" />
        <div class="p-2"></div>
        <h1
          v-show="!isLoading"
          class="bg-[#2B2D42] desktop:text-4xl tablet:text-3xl mobile:text-2xl p-4 text-[#EF233C] w-4/6 shadow-lg"
        >
          {{ heroData.role }}
        </h1>
        <USkeleton v-show="isLoading" class="block p-4 h-20 w-4/6" />
        <div class="p-2"></div>
        <div>
          <hero-blurb v-show="!isLoading"></hero-blurb>
          <USkeleton v-show="isLoading" class="block p-4 h-32 w-6/12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
