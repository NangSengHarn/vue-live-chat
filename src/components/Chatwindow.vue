<template>
  <div class="chat-window">
      <div class="messages" ref="msgBox">
          <div class="single" v-for="message in formatedMessages" :key="message.id">
              <span class="created-at">{{message.created_at}}</span>
              <span class="name">{{message.name}}</span>
              <span class="message">{{message.message}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import {db} from '../firebase/config'
import {formatDistanceToNow} from 'date-fns'
import { onUpdated } from '@vue/runtime-core'
export default {
    setup(){
        //auto scrolling
        let msgBox=ref(null);
        onUpdated(()=>{
          msgBox.value.scrollTop=msgBox.value.scrollHeight
        })

        let messages=ref([]);
        //format date
        let formatedMessages=computed(()=>{
          return messages.value.map((msg)=>{
            let formatedTime=formatDistanceToNow(msg.created_at.toDate())
            return {...msg,created_at:formatedTime}
          })
        })
        //fetch messages
        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results=[];
            snap.docs.forEach((doc)=>{
                let document={id:doc.id,...doc.data()};
                doc.data().created_at && results.push(document);
                // if(doc.data().created_at){
                //       results.push(document);
                // }
            })
            messages.value=results;
        })
        return {formatedMessages,msgBox};
    }
}
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}
.messages {
    max-height: 400px;
    overflow: auto;
}
</style>