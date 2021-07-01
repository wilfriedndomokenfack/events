<template>
  <div class="row justify-end q-gutter-md">
    <div class=" col-md-2 col-sm-5 col-xs-11">
      <q-input clearable v-model="FromFilterDate" dense type="date" hint="Dal"></q-input>
    </div>
    <div class="col-md-2 col-sm-5 col-xs-11">
      <q-input clearable v-model="ToFilterDate" dense type="date" hint="Al" ></q-input>
    </div>
    <div class="col-md-1 col-cm-12 col-xs-12">
        <q-btn
          @click="searchData"
          color="primary"
          label="Cerca"
          no-caps
          rounded
        />
    </div>
    <div class="col-2 text-right">
      <q-btn
        @click="redirect()"
        outline round dense
        color="primary"
        icon="fa fa-plus"
        padding="sm"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AddElementBtn',
  components: {

  },
  props: ['link'],
  data () {
    return {
      FromFilterDate: null,
      ToFilterDate: null
    }
  },
  computed: {
    ...mapGetters("events",
      [
        'searchParams'
      ]),
  },
  created(){
    this.updateForm()
  },
  async mounted () {

  },
  methods: {
    redirect(){
      this.$router.push({ name: this.link })
    },
    searchData(){
      const model = {
        FromFilterDate: this.FromFilterDate,
        ToFilterDate: this.ToFilterDate,
      }
      this.$store.dispatch(`events/setSearchParams`, model);
    },
    updateForm(){
      this.FromFilterDate = this.searchParams?.FromFilterDate ?? null
      this.ToFilterDate = this.searchParams?.ToFilterDate ?? null
    },

  }
}
</script>
