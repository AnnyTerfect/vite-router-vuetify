<script setup>
import { ref } from 'vue'
import Drawer from './components/Drawer.vue'

const drawerOpen = ref(true)
</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <drawer
      v-model:drawerOpen="drawerOpen"
    ></drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

