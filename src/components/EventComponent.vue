<template>
  <div>
    <q-card class="my-card card1" :class="{good: !$q.platform.is.desktop}">
      <div class="bg-primary text-white">
        <div class="text-h7 q-pa-sm">
          {{ eventProp.title.toUpperCase() }}
        </div>
      </div>

      <q-card-actions class="row items-end justify-between">
        <div class="col-12" >
          <div v-html="eventProp.description">
          </div>
        </div>

      </q-card-actions>
      <q-separator color="primary" size="5px"/>
      <q-card-actions align="right" >
        <q-btn
          @click="redirect('editEvent', eventProp.id  )"
          outline
          color="primary"
          round dense
          icon="fa fa-pen"
          padding="sm"
        />

        <q-btn
          @click="deleteEvent()"
          outline
          color="primary"
          round dense
          icon="fa fa-trash"
          padding="sm"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { deleteEvent } from "@/models/event.js"
import axios from "axios";
export default {
  name: 'Event',
  props: ['eventProp'],
  data () {
    return {
      imKey: 0,
      color: null,
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  async mounted(){
  },
  methods: {

    deleteEvent(){
      this.$q.dialog({
        title: 'Confirmazione',
        message: `sicuro ?`,
        cancel: true,
        persistent: true,
        color: "red",
        ok: "delete"
      }).onOk(() => {

        deleteEvent(this.eventProp?.id)
        this.$store.dispatch("events/removeEvent", this.eventProp );
      })
    },
    redirect(link, id){
      this.$router.push({ name: link, params: { event_id: id }})
    },
  }
}
</script>

<style lang="scss" scoped>
.card1 {
  width: 500px;
}

.good{
  width: 100%;
}

</style>
