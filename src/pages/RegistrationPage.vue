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
              goTo="login"
            />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
    <RegistrationPopupComponent
      v-if="emailConfirmMessage"
      propTitle="Confirmazione"
      :propMessage="emailConfirmMessage"
      :key="myKey"
      @close="pupopChanged"
      :flag="flag"
    />
  </q-layout>
</template>

<script>
import AuthenticationForm from "../components/AuthenticationForm.vue"
import RegistrationPopupComponent from "@/components/RegistrationPopupComponent.vue"
import { signup } from "@/models/auth/Auth";
 import { mapGetters } from 'vuex'
export default {
  name: 'RegistrationPage',
  components: {
    AuthenticationForm,
    RegistrationPopupComponent
  },
  computed: {

  },
  data: () => ({
    emailConfirmMessage: null,
    myKey: 50,
    flag: null,
  }),

  async mounted () {
  },
  methods: {
      pupopChanged(){
        this.emailConfirmMessage = null
      },
      async onSubmit(form){
        const response = await signup(form);
        this.emailConfirmMessage = response.message
        this.flag = response.flag

        this.myKey++;
      }
    },
  }
</script>
<style lang="scss" scoped>
  img{
    max-width: 80px;
  }

  .subtitle{
    font-size: 120%;
    font-weight: 200;
    text-transform: uppercase;
  }
</style>
