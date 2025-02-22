<template>
  <div>
    <div id="blah" class="h-screen flex items-center w-full">
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
          class="desktop:text-5xl h-auto tablet:text-5xl mobile:text-2xl font-bold w-full flex flex-col space-y-5"
        >
          <h1
            v-if="!isLoading"
            id="tagline"
            ref="taglineEl"
            class="bg-[#2B2D42] p-4 text-[#EDF2F4] shadow-lg flex flex-row"
          >
            Hi!
            <NuxtImg
              src="/images/wave-emoji.png"
              class="h-12 w-12 mx-3 inline"
            ></NuxtImg>
            I'm Aaron Steed.
          </h1>
          <USkeleton v-show="isLoading" class="block p-4 h-20 w-full" />
          <div class="flex flex-row space-x-2">
            <h1
              v-show="!isLoading"
              id="role"
              class="bg-[#2B2D42] desktop:text-4xl tablet:text-3xl mobile:text-2xl p-4 text-[#EF233C] w-4/6 shadow-lg"
            >
              {{ heroData.role }}
            </h1>
            <USkeleton v-show="isLoading" class="block p-4 h-20 w-4/6" />
          </div>
          <div>
            <hero-blurb v-show="!isLoading" id="blurb"></hero-blurb>
            <USkeleton v-show="isLoading" class="block p-4 h-32 w-6/12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useMediaQuery, useElementVisibility } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import type { PropType } from 'vue'
import HeroBlurb from '~/components/sub-components/hero/HeroBlurb.vue'

interface HeroData {
  role: string
}

export default {
  components: { HeroBlurb },
  props: {
    heroData: {
      type: Object as PropType<HeroData>,
      required: true,
    },
  },
  setup(props) {
    const { $anime } = useNuxtApp()
    const taglineEl = ref(null)
    const animateOnlyOnce = ref(false)
    const isTagLineVisible = useElementVisibility(taglineEl)
    let isSmallScreen = useMediaQuery('(max-width: 800px)')
    onMounted(() => {
      isSmallScreen = useMediaQuery('(max-width: 800px)')
    })
    const isLoading = ref(true)

    function handleImageLoad() {
      isLoading.value = false
    }

    watch([isTagLineVisible, animateOnlyOnce], ([isVisible, animateOnce]) => {
      if (isVisible && !animateOnce) {
        const tl = $anime.timeline({
          duration: 500, // Can be inherited
          easing: 'easeInExpo', // Can be inherited
          direction: 'reverse', // Is not inherited
        })
        tl.add({
          targets: '#tagline',
          translateX: 150,
          direction: 'reverse',
        })
          .add({
            targets: '#role',
            translateX: 350,
            direction: 'reverse',
          })
          .add({
            targets: '#blurb',
            translateX: 250,
            direction: 'reverse',
          })

        animateOnlyOnce.value = true
      }
    })

    return {
      isSmallScreen,
      isLoading,
      isVisible: isTagLineVisible,
      props,
      taglineEl,
      handleImageLoad,
    }
  },
}
</script>
