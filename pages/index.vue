<template>
  <div>
    <div class="overflow-hidden bg-cover min-w-min min-h-screen cb-landing-page p-20">
      <div class="flex h-64 flex-row text-5xl justify-center items-center">
        <img
          class="desktop:w-56 desktop:h-56 mobile:h-44 mobile:w-44 tablet:h-48 tablet:w-48 rounded-full"
          src="../assets/images/profile.png" alt="my profile picture">
      </div>
      <div class="flex flex-col desktop:text-7xl tablet:text-6xl mobile:text-4xl font-bold text-center justify-center items-center text-white">
        <h1>Hi! 👋</h1>
        <h1>I'm Aaron!</h1>
        <h1><vue-typer class="text-white" :text="roles" erase-style="backspace" :repeat='Infinity'></vue-typer></h1>
      </div>
    </div>
    <div class="overflow-hidden min-h-screen cb-circuit-board"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VueTyper } from 'vue-typer'

export default Vue.extend({
  name: 'Index',
  components: {
    VueTyper
  },
  data() {
    return {
      roles: [
        "Software Engineer",
        "Baker 🍞",
        "Gamer 🎮",
        "Mythology Enthusiast",
        "Reader",
        "Explorer"
      ]
    }
  }
})

</script>
