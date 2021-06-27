<template>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ComponentName',
  props: ["goTo"],
  data () {
    return {
      form: {
        nome: null,
        cognome: null,
        email: null,
        password: null,
      },
      passwordRepeat: null,

    }
  },
  computed: {
    ...mapGetters(["userCredentials", "currentRoute"]),
    isRegistration(){
      return this.currentRoute == "registrazione"
    }
  },
  methods: {
    onSubmit(){
      this.$emit("onSubmit", this.form)
    }
  }
}
</script>
