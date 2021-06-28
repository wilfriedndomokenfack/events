<template>
  <div v-if="renderContent">
    <div v-if="localEvents && localEvents.length > 0" class="q-pa-md row items-start q-gutter-md justify-between">
      <div v-for="(event, index) in localEvents" :key="index">
        <EventComponent :eventProp="event" />
      </div>
    </div>
    <div v-else>
      nulla
    </div>
  </div>
</template>

<script>
import EventComponent from "@/components/EventComponent.vue";
export default {
  name: 'EventsComponent',
  props: ['propEvents'],
  components: {
    EventComponent,
  },

  data () {
    return {
      localEvents: [],
      renderContent: false
    }
  },
  created(){
    this.filterEvents()
  },

  methods: {
    async filterEvents(){
      this.localEvents = this.propEvents
      this.renderContent = true
    }
  }
}
</script>

