import {auth} from '../firebase/config';
import { ref } from '@vue/reactivity';
let error=ref();
let Logout=async()=>{
    try{
        await auth.signOut();
    }catch(err){
        error.value=err.message;
        console.log(error.value);
    }
}
let useLogout=()=>{
    
    return {error,Logout};
}
export default useLogout;