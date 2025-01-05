<template>
  <div class="min-w-screen min-h-screen h-screen w-screen bg-[#EDF2F4]">
    <div class="desktop:px-40 px-5">
      <client-only>
        <desktop-hero
          v-if="!isSmallScreen"
          :hero-data="heroData"
        ></desktop-hero>
        <mobile-hero v-if="isSmallScreen" :hero-data="heroData"></mobile-hero>
      </client-only>
    </div>
  </div>
</template>
<script lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref, onMounted } from 'vue'
import DesktopHero from '~/components/sub-components/hero/DesktopHero.vue'
import MobileHero from '~/components/sub-components/hero/MobileHero.vue'

export default {
  name: 'HeroSection',
  components: { MobileHero, DesktopHero },
  setup() {
    let isSmallScreen = useMediaQuery('(max-width: 800px)')
    const heroData = {
      tagLine: "Hi!👋 I'm Aaron Steed.",
      role: 'Software Engineer',
    }
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
