// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import GeZiManager from "../../Manager/GeZiManager";

import KHD2 from "../../Message/KHD2";
import MessageCenter from "../../Message/MessageCenter";
import player from "../player";
import turn from "./turn";

@ccclass('State')
export default class state extends ComponentBase {
   
        static state:number=0;
        static ST:number=0;
        static JJW:boolean=false
        static Pchange(){
        console.log(state.JJW)
            if(state.state==0){
            if(KHD2.PT.includes(turn.turn)&&this.JJW){
                MessageCenter.MakeMessage("UIManager","change",-1)
                console.log(-1)
                GeZiManager.qing();
        
                if(turn.turn%2==0){GeZiManager.redBan();}else{GeZiManager.blueBan();}
               
               
               
               
            }else {  MessageCenter.MakeMessage("UIManager","change",0)
            console.log(0)
            }
        }else{  MessageCenter.MakeMessage("AM",turn.turn,"getC");   
            if(KHD2.PT.includes(turn.turn)){  MessageCenter.MakeMessage("UIManager","change",1)
        
        }else {  MessageCenter.MakeMessage("UIManager","change",0)
        console.log(0)
        }
        
            GeZiManager.KCLR()   
        
        
        
        
        
        
        }
        
        
        
        
        }
        
        static statechange(){
        state.state=1;
        
            MessageCenter.MakeMessage("UIManager","change",0)
            console.log(0)
        turn.turn=1;
        if(player.Pturn.includes(1)){
            MessageCenter.MakeMessage("UIManager","change",1)
        }
        
        
        }
        
        start(){
          //  state.Pchange();
            //GeZiManager.blueBan();   
        }
        
        
        
        
        }
        