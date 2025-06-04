// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find } from 'cc';
const {ccclass, property} = _decorator;


import ComponentBase from "../BASE/ComponentBase";

import KHD2 from "../Message/KHD2";
import turn from "../game/time/turn";
import { AudioManager } from '../BASE/music';
import { WebSocketManager } from '../Message/websocket';
import MessageCenter from '../Message/MessageCenter';
import { director } from 'cc';
import { Label } from 'cc';



@ccclass('Endgame')
export default class endGame extends ComponentBase {
        static game:number=-1
        static blue:number=0;
        static red:number=0;
        static jsl:boolean=false
         qd(){


          if (MessageCenter.Text) {
                 director.loadScene("CS", function() {AudioManager.instance.stopAll(1);});}
         else{
             const data = {
                id:7,
                error:0
               
               };
             
             
             
             
               WebSocketManager.instance.ws.send(JSON.stringify(data))}}
          
         
           
        
            
        
         static start(): void {
            KHD2.Gammer.on("gameEnd",(data)=>{
        
        
        switch (KHD2.ingame) {
            case 0:endGame.window()
                
                break;
        
            default:if(KHD2.ingame==data[0]){endGame.window()}
                break;
        
        
            }
        
        
        //KHD2.ST()
            })
        }
        
        static window(){
        let node=find("")
        node.active=true
        for (let index = 0; index <endGame.blue; index++) {
           node.children[0].children[3].active=true
            
        }
        for (let index = 0; index <endGame.blue; index++) {
            node.children[1].children[3].active=true
            
        }
        }
        
        
        static endGame(p:number){
        switch (p) {
            case 0:endGame.blue+=1;
                
                break;
        case 9:
            break;
            default:endGame.red+=1;
                break;
        }
        




find("Canvas/DituManager/New Node/endGame").children[0].getComponent(Label).string=endGame.blue.toString()
find("Canvas/DituManager/New Node/endGame").children[1].getComponent(Label).string=endGame.red.toString()


        
        /*
        if ((endGame.blue==3||endGame.red==3)&&turn.turn==KHD.PT) {
            KHD.Gammer.emit("gameEnd",[endGame.blue,endGame.red])
        }*/
        
        if ((endGame.blue==4||endGame.red==4)){
        
              
                let node=find("Canvas/Main Camera/UIManager/endgame")
        node.active=true
        endGame.JS()
        }
        
        let node=find("Canvas/Main Camera/UIManager/SJ")
        
        for (let index = 0; index < endGame.blue; index++) {
            node.children[2].children[index].active=true
            
        }
        for (let index = 0; index < endGame.red; index++) {
            node.children[1].children[index].active=true
            
        }
        
        
        }
        
        static JS(){
        console.log(endGame.blue)
        console.log(endGame.red)
        for (let index = 0; index < endGame.blue; index++) {
           find("Canvas/Main Camera/UIManager/endgame/blue").children[index].active=true
            
        }
        
        for (let index = 0; index < endGame.red; index++) {
           find("Canvas/Main Camera/UIManager/endgame/red").children[index].active=true
            
        }
        
        switch (KHD2.PT[0]%2) {
            case 0:if(endGame.red==4){
               find("Canvas/Main Camera/UIManager/endgame/win").active=true
           endGame.jsl=true
        AudioManager.instance.ZJP("other",0)
   
            }else{find("Canvas/Main Camera/UIManager/endgame/lose").active=true
                AudioManager.instance.ZJP("other",1)
             
        
            }
                
                break;
        
            default:if(endGame.blue==4){
               find("Canvas/Main Camera/UIManager/endgame/win").active=true
                endGame.jsl=true
            }else{find("Canvas/Main Camera/UIManager/endgame/lose").active=true}
                break;
        }
         
        
        
        
        }
        
        
        
        
        
        
        }
        