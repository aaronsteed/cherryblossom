<template>
  <v-footer class="d-flex !bg-slate-50 p-0 flex-col !h-3/3 text-center !pt-5">
    <div class="flex flex-row space-x-5">
      <a
        v-for="social in socials"
        :key="social.icon"
        :href="social.link"
        target="_blank"
      >
        <Icon
          class="bg-slate-500 hover:bg-slate-950"
          :name="social.icon"
          :size="social.size"
        >
        </Icon>
      </a>
    </div>

    <v-divider inset color="#00000"></v-divider>

    <div class="p-5 !font-extralight">Made with ❤️ by Aaron Steed</div>
  </v-footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      socials: [
        {
          icon: 'uil:github',
          link: 'https://github.com/aaronsteed',
          size: '20',
        },
        {
          icon: 'mdi:linkedin',
          link: 'https://ie.linkedin.com/in/aaron-steed',
          size: '20',
        },
        {
          icon: 'prime:twitter',
          link: 'https://x.com/aaron_steed',
          size: '16',
        },
        {
          icon: 'ph:goodreads-logo-bold',
          link: 'https://www.goodreads.com/review/list/142910954-aaron-steed?order=&shelf=currently-reading',
          size: '20',
        },
      ],
    }
  },
}
</script>
