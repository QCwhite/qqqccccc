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
import GeZiManager from '../Manager/GeZiManager';



@ccclass('Endgame')
export default class endGame extends ComponentBase {
        static game:number=-1
        static blue:number=2;
        static red:number=2;
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
        







        static siw(n){
            let c=[GeZiManager.P1,GeZiManager.P3,GeZiManager.P5]
            let k=GeZiManager.Bhun
           // let g=endGame.red
            if (n%2==0) {
             c=[GeZiManager.P2,GeZiManager.P4,GeZiManager.P6]  
             k=GeZiManager.Rhun    
           //  g=endGame.blue
            }
let o=0
  for (let a of c) {
    
    if(a.LST==-1){
o++
    }
  }


if (o==3&&k<3) {
    if (n%2==0) {
            endGame.blue=4
             endGame.red=0
            }else{
           endGame.blue=0
             endGame.red=4


            }



  let node=find("Canvas/Main Camera/UIManager/endgame")
        node.active=true
        endGame.JS()
   let node1=find("Canvas/Main Camera/UIManager/SJ")
        
        for (let index = 0; index < endGame.blue; index++) {
            node1.children[2].children[index].active=true
            
        }
        for (let index = 0; index < endGame.red; index++) {
            node1.children[1].children[index].active=true
            
        }

        }
}


static endG(p:number){
console.log(p)
  switch (p) {
            case 0:endGame.blue+=1;
                endGame.red-=1;
                break;
     
         
             case 1:    endGame.red+=1;
            endGame.blue-=1
                break;
         
           
               
        }
        


console.log(endGame.blue)
console.log( endGame.red)
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
        