<template>
  <h2>SignUp</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>SignUp</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '../firebase/config'
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let error=ref("");

        let signUp=async()=>{
          try{ 
              let res=await auth.createUserWithEmailAndPassword(email.value, password.value)
              
                if(!res) {
                    throw new Error("could not create user");
                }

            res.user.updateProfile({displayName: displayName.value})
            console.log(res.user);
            }catch(err){
              error.value=err.message;
          }
         }
          return {displayName,email,password,signUp,error};
}
}
</script>

<style>

</style>