import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import { Message } from "../Message/Message";

@ccclass('ManagerBase')
export default class ManagerBase extends  ComponentBase {
        YuanGong:ComponentBase[]=[];
        messageType:String;
        messageLevel:number=0;
         
          
        
        
        
        addReceive(xin:ComponentBase){
        if ( this.YuanGong.includes(xin)==false) {
            this.YuanGong.push(xin); 
        }
        
            
        }
        
        
        
        
        ReceiveMessage(message: Message){
        
            if(message.Type===this.messageType) {this.DO(message)}
           } 
        
        DO(message: Message){}
        
        }
        
        
        
        
        
