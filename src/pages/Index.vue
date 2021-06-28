<template>
  <q-page padding>

    <div class="constrain column">
      <div class="col row justify-center ">
        redirect redirect redirect redirect rect redirect redirect redi rect redirect redirect redi rect redirect redirect redi
        rect redirect redirect redirect redirect redirect redirect redirect redirect redirect redirect redirect redirect redirect redirect redi
        rect redirect redirect redirect redirect redirect redirect redirect redirect redi
        rect redirect redirect redirect redirect redirect redi
      </div>
      <div class="col">
        <AddElementBtn link="newEvent"/>
      </div>
      <div class="col" v-if="renderComponent">
        <EventsComponent :propEvents="events" :key="myKey" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { events } from "@/models/event.js";
import EventsComponent from "@/components/EventsComponent.vue";
import AddElementBtn from "@/components/AddElementBtn.vue";

export default {
  name: "EventsPage",
  components: {
    EventsComponent,
    AddElementBtn
  },
  watch: {
    events: {
      immediate: true,
      handler() {
        this.myKey++
      }
    }
  },
  data() {
    return {
      myKey: 3,
      filteredEvents: [],
      renderComponent: true,
    };
  },
  computed: {
    ...mapGetters([
      "currentUser"
    ]),
    ...mapGetters("events",[
      "events"
    ])
  },

  async mounted() {
    if(!this.currentUser) this.$router.push({ name: "login" });
    if (!this.events) {
      await this.getEvents();
    }
    this.renderComponent = true;
  },
  methods: {
    async getEvents() {
      this.$q.loading.show();
      try {
        const response = await events();
        // response.data = [];
        this.$store.dispatch("events/setEvents", response?.data);
        this.myKey = !this.myKey;
      } catch (e) {
        console.log(e)
      } finally {
        this.$q.loading.hide();
      }
    },
  }
};
</script>
