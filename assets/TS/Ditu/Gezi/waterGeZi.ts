

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import { Message } from "../../Message/Message";
import state from "../../game/time/state";
import GeZi from "./GeZi";

@ccclass('WaterGeZi')
export default class  waterGZ extends GeZi {
    
   
 
    
 
 
 
 

start(){
         console.log("afa")
}
     
  
  
 
 
 
        
 
 
 
 
 
    
    ReceiveMessage(message:Message){

         if(state.state==0||state.ST==2){this.node.active=false}else{
         this.node.active=true;




         if(message.Command[0]==65&&message.Command.length==1){
         switch(message.Content){
         case -1:this.red();
         break ;
         case 0:this.null();
         break ;
         case 1:this.green();
         break ;
         case 2:this.blue();
         break ;

         }
         }
         if(message.Command.includes(this.ZB)){
         switch(message.Content){
         case -1:this.red();
         break ;
         case 0:this.null();
         break ;
         case 1:this.green();
         break ;
         case 2:this.blue();
         break ;
         case 5: this.black;
         break;
         }








}
}

    }}