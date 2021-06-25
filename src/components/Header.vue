<template>
<div>
  <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          my-lime Events
        </q-toolbar-title>
        <div class="row items-center justify-between">
          <div class="col-9"  v-if="!$q.screen.lt.sm">{{ today_date }} </div>
          <div class="col-3" v-if="!currentUser">
            <q-btn
              to="/login"
              no-caps
              label="Login"
              color="white" flat
            />
          </div>
          <div v-else class="col-2 text-right">
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
      </q-toolbar>
    </q-header>
    </div>
</template>

<script>
import moment from "moment"
export default {
  name: 'Header',
  setup () {
    return {
      currentUser: false
    }
  },
  computed: {
    today_date(){
      moment.locale("it");
      return moment().format('dddd LL').toUpperCase()
    },
  },
  methods: {
    logout(){

    }
  }
}
</script>
