<template>
  <div class="row justify-end items-end">
    <q-btn
      @click="redirect()"
      outline round dense
      color="primary"
      icon="fa fa-plus"
      padding="sm"
    />
  </div>
</template>

<script>

export default {
  name: 'AddElementBtn',
  components: {

  },
  props: ['link'],
  data () {
    return {

    }
  },
  async mounted () {

  },
  methods: {
    redirect(){
      this.$router.push({ name: this.link })
    },

  }
}
</script>
