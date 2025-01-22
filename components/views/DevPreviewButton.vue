<template>
  <dev-only>
    <div
      class="hidden desktop:block fixed bottom-10 text-black right-0 m-2 text-sm cursor-pointer"
    >
      <div class="flex flex-row justify-center align-center">
        <ul v-show="active" class="w-52 flex flex-col text-xs">
          <li class="p-3 bg-slate-700 shadow-md text-white">
            <button
              class="hover:text-red-500"
              @click="
                () =>
                  window.open(
                    'https://github.com/aaronsteed/cherryblossomd',
                    '_blank'
                  )
              "
            >
              github.com/cherryblossom
            </button>
          </li>
          <li class="p-3 bg-slate-600 shadow-md text-white hover:text-red-500">
            <button @click="toggleDesignMode()">
              Design Mode: {{ designMode }}
            </button>
          </li>
        </ul>
        <button
          class="w-52 desktop:block fixed bottom-0 right-0 m-2 mt-4 bg-blue-500 text-white p-2 rounded shadow-md hover:shadow-lg"
          @click="
            (_) => {
              active = !active
            }
          "
        >
          <div class="flex items-center">
            <Icon
              class="bg-white mr-2"
              name="mdi:hamburger-menu"
              size="17"
            ></Icon>
            <p>Development Preview</p>
          </div>
        </button>
      </div>
    </div>
  </dev-only>
</template>

<script lang="ts">
export default {
  setup() {
    const active = ref(false)
    const designMode = ref(false)
    function toggleDesignMode() {
      if (designMode.value) {
        document.designMode = 'off'
      } else {
        document.designMode = 'on'
      }
      designMode.value = !designMode.value
    }
    return {
      active,
      window,
      designMode,
      toggleDesignMode,
    }
  },
}
</script>
