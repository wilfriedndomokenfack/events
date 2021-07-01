<template>
  <div>
    <q-dialog v-model="model" persistent >
      <q-card class="">
        <q-bar class="bg-primary text-bold text-white">
          <div class="text-center">{{ $t("forgotPass") }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>{{ $t('close') }}</q-tooltip>
          </q-btn>
        </q-bar>
        <div class="diagPassword">
          <q-card-section >
            <!-- LISTA ERRORI-->
            <div class="col column bg-grey-3 q-mb-md " v-if="endCheck && errors.length > 0">
              <div class="col row justify-end items-center">
                <q-btn
                  @click="errors = []"
                  color="red"
                  dense
                  flat
                  icon="highlight_off"
                  class="q-pr-xs"
                />
              </div>
              <ul class="col">
                <li class="text-red text-bold text-left" v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <div>
              <p class=" text-center">
                {{ $t('passwordReserdescription') }}
              </p>
            </div>
        </q-card-section>
        <q-card-section class="flex flex-center ">
          <q-form
            @submit="onSubmit"
            class=" q-gutter-md q-pb-xl"
            style="width: 100%"
          >
            <q-input
              dense
              rounded
              outlined
              bg-color="white"
              v-model="email"
              type="email"
              :label="$t('email')"
            >
              <template v-slot:prepend>
                <q-icon class="color_sysait_cerulean" name="email" />
              </template>
            </q-input>
            <div class="col flex flex-center">
              <q-btn :label="$t('submit')" type="submit" color="primary" size="md" rounded/>
            </div>
          </q-form>
        </q-card-section>
        </div>
      </q-card>
    </q-dialog>
    <RegistrationPopupComponent
      v-if="message"
      propTitle="Confirmation"
      :propMessage="message"
      @closed="pupopChanged"
      :flag="flag"
    />
  </div>
</template>

<script>
import RegistrationPopupComponent from "@/components/RegistrationPopupComponent.vue"
import Api from "@/models/Api";
import { redirect } from "@/models/utils/common.js"
export default {
  name: 'ForgotPasswordComponent',
  components: {
    RegistrationPopupComponent
  },
  watch:{
    model: {
      immediate: true,
      handler(){
        if(!this.model){
            this.$emit("close")
        }
      }
    }
  },
  data () {
    return {
      flag: null,
      errors: [],
      endCheck: false,
      email: null,
      message: null,
      model: true
    }
  },
  methods: {
    pupopChanged(){
      this.message = null
      if(this.flag == 1) this.model = false
    },
    async onSubmit() {
      this.errors = [];
      this.endCheck = false

      if (!this.email) {
        this.errors.push("Inserisci il tuo Email");
      }

      this.endCheck = true
      if(this.errors.length > 0){
        return
      }else{
        this.$q.loading.show();
        try {
          const response = await Api().post("password_reset", { email: this.email });
          if(response?.data.message ) this.message = response?.data.message
          this.flag = response.data.flag
        } catch (error) {
          this.message = error + " - " + this.message
        }finally{
          this.$q.loading.hide();
        }
      }
    },
  }
}
</script>
<style lang="scss" >
.diagPassword {
  border: 4px solid $primary;
  width: 100%;
  min-width: 400px;
}
q-dialog {
  min-width: 300px;
}
</style>
