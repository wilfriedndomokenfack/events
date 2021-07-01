<template>
  <q-page padding >
    <EventForm @form="saveForm"/>
  </q-page>
</template>

<script>

import EventForm from "@/components/EventForm.vue";
import { sendToEvents } from "@/models/event.js"
export default {
  name: 'NewEvent',
  components: {
    EventForm
  },
  methods: {
    async saveForm(form){
      let response = await sendToEvents(form)

     this.$store.dispatch("events/addEvent", { ...response });
      this.$router.push({ path: "/"})
    }
  }
}
</script>
