<template>
  <h2>LogIn</h2>
  <form @submit.prevent="logIn">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>LogIn</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let email=ref("");
        let password=ref("");
        let logIn=()=>{
            console.log(email.value,password.value);
        }

        return {email,password,logIn};
    }
}
</script>

<style>

</style>