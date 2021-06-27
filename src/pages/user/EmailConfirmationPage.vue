<template>
  <q-page >
    <q-dialog v-model="model" :key="muKey">

      <q-card style="width: 300px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ $t('emailConfirmation') }}</div>
        </q-card-section>

        <q-card-section class=" flex flex-center">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="OK" v-close-popup/>
        </q-card-actions>
      </q-card>

    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { redirect } from "@/models/utils/common.js"
import Api from "@/models/Api";
export default {
  name: 'EmailConfirmationPage',
  watch: {
    model: {
      immediate: true,
      handler() {
        if(!this.model) this.goHome();
      }
    }
  },
  data() {
    return {
      openPupop: true,
      muKey: 3,
      model: true,
      fullPath: this.$route.fullPath,
      message: this.$t('somethingWentWrong'),
    };
  },
   computed: {
    ...mapGetters(["previousRoute"])
  },
  async mounted(){
    if(this.previousRoute == "login"){
      this.openPupop = false
      this.muKey++
      redirect("home")
    }
    this.$q.loading.show({message: this.$t('confirmationEmailProgress')});
    const confirmation_token = this.fullPath.split("=")[1];
    try {
      if(confirmation_token){
         const response = await Api().post("users/confirmation", { params: { confirmation_token: confirmation_token } });
      if(response?.data.message ) this.message = response?.data.message
      this.muKey++
      }

    } catch (error) {
      this.message = error + " - " + this.message
    }finally{
      this.$q.loading.hide();
    }
  },
  methods: {
    goHome(){
      redirect("login")
    }
  }
}
</script>
