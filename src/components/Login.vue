<template>
  <h2>LogIn</h2>
  <form @submit.prevent="logIn">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>LogIn</button>
      <div v-if="error" class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '../firebase/config'
import useLogin from '../composables/useLogin'
export default {
    setup(props,context){
        let email=ref("");
        let password=ref("");
        let {error,signIn}=useLogin();
        let logIn=async()=>{
            
            let res=await signIn(email.value,password.value);
            
            if(res){
                context.emit("enterChatroom");
            }
        }

        return {email,password,logIn,error};
    }
}
</script>

<style>

</style>