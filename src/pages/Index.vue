<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  mounted(){
    if(!this.currentUser) this.$router.push({ name: "login" });
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
}
</script>
