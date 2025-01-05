<template>
  <div class="min-w-screen min-h-screen h-screen w-screen bg-[#EDF2F4]">
    <div class="desktop:px-40 px-5">
      <client-only>
        <div v-if="!isSmallScreen" class="h-screen flex items-center w-full">
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
              <h1
                v-if="!isLoading"
                class="bg-[#2B2D42] p-4 text-[#EDF2F4] shadow-lg"
              >
                Hi!👋 I'm Aaron Steed.
              </h1>
              <USkeleton v-show="isLoading" class="block p-4 h-20 w-full" />
              <div class="p-2"></div>
              <h1
                v-show="!isLoading"
                class="bg-[#2B2D42] desktop:text-4xl tablet:text-3xl mobile:text-2xl p-4 text-[#EF233C] w-4/6 shadow-lg"
              >
                {{ roles }}
              </h1>
              <USkeleton v-show="isLoading" class="block p-4 h-20 w-4/6" />
              <div class="p-2"></div>
              <div>
                <div
                  v-show="!isLoading"
                  class="bg-[#2B2D42] p-4 text-[#8D99AE] desktop:text-base tablet:text-sm mobile:text-sm font-weight-light w-6/12 shadow-sm"
                >
                  Currently working in Dublin, Ireland. 🇮🇪
                  <br class="p-1" />
                  Love to collect hobbies, but some of my main stays are
                  <span class="text-[#D90429]">playing games</span>,
                  <span class="text-[#EDF2F4]">reading</span>,
                  <span class="text-[#EF233C]">baking bread</span> &
                  <span class="text-[#EDF2F4]">running</span>.
                </div>
                <USkeleton v-show="isLoading" class="block p-4 h-32 w-6/12" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="isSmallScreen">
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
                Hi! 👋 I'm Aaron Steed.
              </h1>
              <USkeleton v-show="isLoading" class="block p-4 h-16 w-11/12" />
              <div class="p-2"></div>
              <h1
                v-show="!isLoading"
                class="bg-[#2B2D42] mobile:text-2xl p-4 text-[#EF233C] w-9/12"
              >
                {{ roles }}
              </h1>
              <USkeleton v-show="isLoading" class="block p-4 h-16 w-9/12" />
              <div class="p-2"></div>
              <div class="flex flex-row">
                <div
                  v-show="!isLoading"
                  class="bg-[#2B2D42] p-4 text-[#8D99AE] desktop:text-lg tablet:text-sm mobile:text-sm font-weight-light w-8/12"
                >
                  Currently working in Dublin, Ireland. 🇮🇪
                  <br class="p-1" />
                  Love to collect hobbies, but some of my main stays are
                  <span class="text-[#D90429]">playing games</span>,
                  <span class="text-[#EDF2F4]">reading</span>,
                  <span class="text-[#EF233C]">baking bread</span> &
                  <span class="text-[#EDF2F4]">running</span>.
                </div>
                <USkeleton v-show="isLoading" class="block p-4 h-40 w-8/12" />
              </div>
            </div>
            <div id="hero-button-row"></div>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>
<script lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref, onMounted } from 'vue'

export default {
  name: 'HeroSection',
  props: {
    roles: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  setup() {
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
      handleImageLoad,
    }
  },
}
</script>
