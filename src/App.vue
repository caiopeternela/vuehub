<template>
  <v-app>
    <v-app-bar
      app
      color="#282a36"
      dark
    >
      <v-toolbar-title>Vuehub</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon href="https://github.com/caiopeternela/vuehub" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <VueHub/>
    </v-main>
  </v-app>
</template>

<script>
import VueHub from '@/components/VueHub.vue'

export default {
  name: 'App',

  components: {
    VueHub,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
  
  * {
    font-family: 'DynaPuff', cursive;
  }

</style>