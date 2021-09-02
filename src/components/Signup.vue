<template>
  <h2>SignUp</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>SignUp</button>
      <div v-if="error" class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'

import useSignup from '../composables/useSignup'
export default {
    setup(props,context){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let {error,createAccount}=useSignup();
        let signUp=async()=>{
          let res=await createAccount(email.value,password.value,displayName.value);
          if(res){
             context.emit("enterChatroom");
          }
        }
        
        return {displayName,email,password,signUp,error};
}
}
</script>

<style>

</style>