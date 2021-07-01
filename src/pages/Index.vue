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
        this.renderComponent = true
        this.myKey++
      }
    },
    searchParams: {
      immediate: true,
      handler(newVal, oldVal) {
        if(this.currentUser) this.searchParamsChanged(newVal, oldVal)
      }
    },
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
      "currentUser",
      "token",

    ]),
    ...mapGetters("events",[
      "events",
      "searchParams"
    ])
  },

  async mounted() {
    if(!this.currentUser || !this.token) this.$router.push({ name: "login" });
    if (!this.events && this.token) {
      await this.getEvents();
    }
    this.localEvents = deepCopy(this.events)
    this.renderComponent = true;
  },
  methods: {
    searchParamsChanged(newVal, oldVal){
        this.renderComponent = false
        this.$store.dispatch("events/setEvents", null);
        this.getEvents()
    },
    async getEvents() {
      this.$q.loading.show();
      try {
        const response = await events();
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
