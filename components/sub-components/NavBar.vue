<template>
  <div>
    <v-navigation-drawer :width="160">
      <v-list-item
        title="Aaron Steed"
        subtitle="Software Engineer"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Experience"></v-list-item>
      <v-list-item link title="Expertise"></v-list-item>
      <v-list-item link title="Projects"></v-list-item>
      <v-list-item link title="Contact Me"></v-list-item>
      <v-list-item link title="Socials"></v-list-item>
    </v-navigation-drawer>
    <!--    <v-app-bar-->
    <!--      scroll-behavior="elevate hide"-->
    <!--      density="compact"-->
    <!--      color="#033"-->
    <!--      scroll-threshold="300"-->
    <!--      slim-->
    <!--      flat-->
    <!--    >-->
    <!--      <template #append>-->
    <!--        <div>-->
    <!--          <a class='pr-32' href='http://example.com'>Something</a>-->
    <!--          <a class='pr-32' href='http://example.com'>differnt thing</a>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </v-app-bar>-->
  </div>
</template>
<script lang="ts">
export default {
  name: 'NavBar',
}
</script>
