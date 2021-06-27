<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="my-card">
          <q-card-section class="q-ma-md">

            <div class="title text-center q-mb-md">
              <div class="subtitle">
                 my-lime
              </div>
            </div>
            <AuthenticationForm
              @onSubmit="onSubmit"
              goTo="registrazione"
            />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
    <RegistrationPopupComponent
      v-if="message"
      propTitle="Errore di login"
      :propMessage="message"
      @closed="pupopChanged"
      :flag="flag"
    />
  </q-layout>
</template>

<script>
import AuthenticationForm from "../components/AuthenticationForm.vue"
import RegistrationPopupComponent from "@/components/RegistrationPopupComponent.vue"
import { login } from "@/models/auth/Auth";
import { mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  components: {
    AuthenticationForm,
    RegistrationPopupComponent
  },

  data(){
    return {
      message: null,
      flag: null
    };
  },
  mounted(){
    if(this.currentUser) this.$router.push({ name: "home" });
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    pupopChanged(){
      this.message = null
    },
    async onSubmit(form){
        delete form.nome
        delete form.cognome

        const response = await login(form);
        this.flag = response.flag
        if(this.flag == 3 || this.flag == 2){
          this.message = response.message
        }else if(this.flag == 1){
          this.$store.dispatch("setCurrentUser", response.message );
        }else{
          this.message = "Internal server error: Contact The administrator"
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .subtitle{
    font-size: 120%;
    font-weight: 200;
    text-transform: uppercase;
  }
</style>
