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
  </q-layout>
</template>

<script>
import AuthenticationForm from "../components/AuthenticationForm.vue"
import { mapGetters } from 'vuex'
export default {
  name: 'LoginPage',
  components: {
    AuthenticationForm
  },
  computed: {

  },
    data: () => ({

    }),

    async mounted () {

    },
    methods: {
      onSubmit(form){
        delete form.nome
        delete form.cognome
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
