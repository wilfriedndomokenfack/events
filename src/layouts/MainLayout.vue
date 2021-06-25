<template>
  <q-layout view="hHh LpR lfr">
    <Header/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "../components/Header.vue"
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header
  },

  setup () {
    return {
    }
  }
})
</script>
