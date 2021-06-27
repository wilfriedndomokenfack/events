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

export default {
  name: 'MainLayout',
  components: {
    Header
  },
  data () {
    return {
    }
  }
}

</script>
