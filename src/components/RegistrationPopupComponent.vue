<template>
  <div>
    <q-dialog v-model="model">
      <q-card style="width: 300px">
        <div class="text-white text-center q-pa-sm" :class="{'bg-green': flag == 1, 'bg-red': flag != 1}">
          <div class="text-h7">{{ title }}</div>
        </div>

        <q-card-section class="flex flex-center">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { redirect } from "@/models/utils/common.js"
export default {
  name: "RegistrationPopupComponent",
  props:{
    propTitle: String,
    propMessage: String,
    flag: Number
  },

  watch:{
    model: {
      immediate: true,
      handler(){
        this.modelChanged()
      }
    }
  },

  data() {
    return {
      title:this.propTitle,
      message:this.propMessage,
      model:true
    };
  },
  methods: {
    modelChanged(){
      if(!this.model){
        if(this.flag == 1){
          redirect("login")
          /* this.$router.push({
            path: "/login"
          }) */
        }
        this.$emit("closed")
      }
    }
  }
};
</script>
