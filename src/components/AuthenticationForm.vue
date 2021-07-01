<template>
<div>
  <q-form
    style="min-width: 400px"
    @submit="onSubmit"
  >
    <q-input
      v-if="isRegistration"
      filled
      v-model="form.nome"
      label="Nome"
      lazy-rules
      :rules="[
        val => val && val.length > 0 || 'Digita il tuo nome']"
    />
    <q-input
      v-if="isRegistration"
      filled
      v-model="form.cognome"
      label="Cognome"
      lazy-rules
      :rules="[
        val => val && val.length > 0 || 'Digita il tuo cognome']"
    />

    <q-input
      filled
      v-model="form.email"
      label="Email"
      type="email"
      lazy-rules
      :rules="[
        val => val && val.length > 0 || 'Digita il tuo email']"
    />

    <q-input
      filled
      type="password"
      v-model="form.password"
      label="Password"
      lazy-rules
      :rules="[val => val && val.length > 0 || 'Digita la tua password']"
    />

    <q-input
      v-if="isRegistration"
      filled
      type="password"
      v-model="passwordRepeat"
      label="Ripetti la password"
      lazy-rules
      :rules="[val => val && val.length > 0 || 'Diditi di nuovo la password']"
    />

    <div class="row items-center justify-center">
      <div v-if="!isRegistration">
        <q-btn
          @click="changePorgotPassword()"
          no-caps
          label="Password dimenticata?"
          color="primary" flat
        />
      </div>
      <div>
        <q-btn
          class="q-pl-md q-pr-md"
          dense
          type="submit"
          :label="currentRoute"
          color="primary"
        />
      </div>
    </div>
    <div class="row  q-pt-md text-center items-center justify-center">
      <q-btn
        :to="`/${goTo}`"
        no-caps
        :label="goTo"
        color="primary"
        flat
      />
    </div>
  </q-form>
  <ForgotPasswordComponent v-if="forgotPassword" @close="changePorgotPassword"/>
  </div>
</template>

<script>
import ForgotPasswordComponent from "@/components/ForgotPasswordComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: 'ComponentName',
  components: {
    ForgotPasswordComponent
  },
  props: ["goTo"],
  data () {
    return {
      form: {
        nome: null,
        cognome: null,
        email: "wilfried.ndomo@gmail.com",
        password: "1234567",
      },
      passwordRepeat: null,
      forgotPassword: false,

    }
  },
  computed: {
    ...mapGetters(["userCredentials", "currentRoute"]),
    isRegistration(){
      return this.currentRoute == "registrazione"
    }
  },
  methods: {
    changePorgotPassword(){
      this.forgotPassword = !this.forgotPassword
    },
    onSubmit(){
      this.$emit("onSubmit", this.form)
    }
  }
}
</script>
