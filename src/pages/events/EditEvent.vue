<template>
  <q-page padding >
    <EventForm :key="myKey" v-if="renderForm && event" @form="saveForm" :eventProp="event"/>
  </q-page>
</template>

<script>
import EventForm from "@/components/EventForm.vue";
import { sendToEvents, prepareEvent } from "@/models/event.js"
import { mapGetters } from "vuex";

import { deepCopy, notify } from '@/models/utils/common.js'
export default {
  name: 'EditEventPage',
  components: {
    EventForm
  },
  data() {
    return {
      event: null,
      event_id: null,
      myKey: 0,
      renderForm: false
    };
  },
  computed: {
    ...mapGetters("events",["events"])
  },
  mounted(){
    this.event_id = this.$route.params.event_id
    if(!this.events || !this.event_id){
        this.$router.push({ path: '/' })
    }
    this.setupEventg()
  },
  methods: {
    setupEventg(){
      this.$q.loading.show({ message: "Please Wait ..." })
      let tempEvent = this.events?.find(v => v.id === this.event_id)
      this.event = deepCopy(tempEvent)
      this.myKey = !this.myKey
      this.renderForm = true
      this.$q.loading.hide()
    },
     async saveForm(form){
      let response = await sendToEvents(form)
  

      this.$store.dispatch("events/updateEvent", { ...response });
      this.$router.push({ path: "/"})
    }
  }
}
</script>
