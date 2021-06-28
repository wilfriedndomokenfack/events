<template>
  <div>
    <div class="constrain q-pa-lg">
      <q-form
        v-if="form"
        @submit="onSubmit"
        class="q-gutter-md column justify-center"
      >
        <div class="q-pa-md q-gutter-sm col text-center">
          <q-btn
            type="submit"
            outline
            padding="sm"
            round
            dense
            color="primary"
            icon="fa fa-save"
          >
            <q-tooltip
              :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate">
                Save
            </q-tooltip>
          </q-btn>
          <q-btn
            @click="resetForm()"
            outline
            padding="sm"
            round
            dense
            color="primary"
            icon="fa fa-ban"
          >
            <q-tooltip :offset="[10, 10]" transition-show="rotate"
              transition-hide="rotate">
              Reset form
            </q-tooltip>
          </q-btn>
          <q-btn
            to="/"
            outline
            padding="sm"
            round
            dense
            color="primary"
            icon="fa fa-chevron-left"
          >
            <q-tooltip :offset="[10, 10]" transition-show="rotate"
              transition-hide="rotate">
              Back to Events
            </q-tooltip>
          </q-btn>
        </div>
      <q-input
        hint="Titolo"
        class="col"
        v-model="form.title"
        dense filled
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Il titolo è obbligatorio']"
      />
      <div class="col row justify-between">
        <div class="col-lg-4 col-md-7 col-sm-4 col-xs-12">
          <q-input
            dense
            v-model="form.start_date"
            filled
            type="date"
            hint="Data di inizio"
          />

        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <q-input
            dense
            v-model="form.start_time"
            filled
            type="time"
            hint="Orario di inizio"
          />

        </div>
      </div>
      <div class="col row justify-between">
        <div class="col-lg-4 col-md-7 col-sm-4 col-xs-12">
          <q-input
            dense
            v-model="form.end_date"
            filled
            type="date"
            hint="Data di fine"
          />

        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <q-input
            dense
            v-model="form.end_time"
            filled
            type="time"
            hint="Orario di fine"
          />

        </div>
      </div>

      <q-editor
        class=" col"
        v-model="form.description"
        min-height="20rem"
        placeholder="Description"
      />
    </q-form>
  </div>
  </div>
</template>

<script>
import  moment  from 'moment'
import { mapGetters } from 'vuex'
import { Constants } from '@/models/utils/common.js'
export default {
  name: 'EventForm',
  props: ['eventProp'],
  components: {
  },
  data () {
    return {
      form: null,
      statusOptions: [],
    }
  },
  computed: {
    ...mapGetters(
      [
        'currentRoute',
        'currentUser',
        'previousRoute',
      ]),
  },
  async mounted(){
    this.resetForm()
  },
  methods: {
    resetForm(){
      let form = {
        title: null,
        description: "",
        start_date: null,
        end_date: null,
        start_time: null,
        end_time: null,
        user_id: this.currentUser.id
      }
      this.form = this.eventProp ? {...this.eventProp} : form
    },
    onSubmit(){
      if( this.form.title?.length < 1
      ){
        this.$q.notify({
          message: 'Check errors in the form!',
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_done'
        })
      }else{
        this.$emit('form', this.form)
      }
    }
  }
}
</script>
