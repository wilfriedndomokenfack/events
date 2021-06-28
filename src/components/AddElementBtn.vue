<template>
  <div>
    <div >
      <div class="row justify-end items-end">
        <div class="q-pa-md q-gutter-sm col-md-3 col-sm-12 col-xs-12" dense>
          <q-btn
            @click="redirect()"
            outline round dense
            color="primary"
            icon="fa fa-plus"
            padding="sm"
          />
        </div>
      </div>
    </div>
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
