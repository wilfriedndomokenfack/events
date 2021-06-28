<template>
<div>
  <q-header elevated>
      <div class="row items-center constrain">
        <div class="col q-pl-md text-h5 ">
          Events
        </div>
        <div class="col row items-center justify-end">
          <div class="col-5 text-right"  v-if="!$q.screen.lt.sm">{{ today_date }} </div>
          <div class="col-3" v-if="!currentUser">
            <q-btn
              to="/login"
              no-caps
              label="Login"
              color="white" flat
            />
          </div>
          <div v-else class="col-5 items-center justify-end row text-right">
            <div class="text-white text-bold">
              Ciao {{ currentUser.nome }}, {{ currentUser.cognome }}
            </div>
            <q-btn
                class="col-xs-2 col-sm-2 col-md-3"
                flat
                icon="fa fa-power-off"
                text-color="white"
                @click="logout()"
              >
                <q-tooltip
                  :offset="[10, 10]"
                  transition-show="rotate"
                  transition-hide="rotate"
                >
                  Log out
                </q-tooltip>
              </q-btn>
          </div>
        </div>
      </div>
    </q-header>
    </div>
</template>

<script>
import moment from "moment"
import { logout } from "@/models/auth/Auth";
import { mapGetters } from "vuex";
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    today_date(){
      moment.locale("it");
      return moment().format('dddd LL').toUpperCase()
    },
  },
  methods: {
    logout
  }
}
</script>
