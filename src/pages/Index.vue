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
      <div class="col" v-if="renderComponent && localEvents">
        <EventsComponent :propEvents="localEvents" :key="myKey" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { events, prepareEvent } from "@/models/event.js";
import EventsComponent from "@/components/EventsComponent.vue";
import AddElementBtn from "@/components/AddElementBtn.vue";
import { deepCopy } from "@/models/utils/common.js"
import moment from "moment"
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
      localEvents: null
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
    this.localEvents = deepCopy(this.events)
    this.renderComponent = true;
  },
  methods: {

    async getEvents() {
      this.$q.loading.show();
      try {
        const response = await events();
        // response.data = [];
        this.localEvents = await deepCopy(response?.data)

        this.localEvents.map(v => {
          prepareEvent(v)
        })

        this.$store.dispatch("events/setEvents", this.localEvents);

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
