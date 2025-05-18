// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;


import Character from "../../../BASE/Character";
import state from "../../../game/time/state";
import GeZiManager from "../../../Manager/GeZiManager";
import { Message } from "../../../Message/Message";
import MessageCenter from "../../../Message/MessageCenter";
import A581 from "../SC/A581";
import Qiang from "./Qiang";
import Cspine from "../../../BASE/spineANDgif/Cspine";

@ccclass('A225')
export default class A225 extends Qiang {


        TheNumber:string = 'A225';
        SH: number=2;
        DT: boolean=true;




        attack() {
                if (this.BTS>0) {
                 
               
                     state.ST = 3
                         GeZiManager.DLLM="A321"
                         GeZiManager.qing();
                        let AF=[1,2,3]
                         let i = 0;
                         switch (GeZiManager.PCP.faceTo) {
                           case 6: i = 1;
                             break;
                           case 8: i = 2;
                             break;
                           case 4: i = 3;
                             break;
                         }
                     
                     
                         for (let n = 1; n <= i; n++) {
                           GeZiManager.PCP.turn6(AF);
                     
                         }
                         let an: number[] = [];
                               //面向对齐
                     
                     
                     
                     
                         for (let mannger of AF) {
                     
                     
                     
                           an.push(GeZiManager.PCP.findGe(mannger, 1));
                     
                         }
                     
                         GeZiManager.GeZis = [].concat(an);
                     
                         let g = new Message("", GeZiManager.GeZis, 1);
                         for (let m of GeZiManager.YuanGong) {
                     
                     
                           m.red()
                           m.ReceiveMessage(g)
                     
                         }
                         MessageCenter.MakeMessage("UIManager", "change", -1);
                     
                     
                       }   else{
               
                  this.BTS++ ;
                        this.ZD();
                     setTimeout(() => {
                       this.node.getComponent(Cspine).currentSpine.animation="Idle"
                     },200);
                        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2,this.node.getComponent(Character).Pturn,"TN-")
               
               
               
                       }
                         }
                        
                      
                         
                     
                     
                       
                       
                     
                        
                    
                    
                      
               
               QD(an: number[]): void {
               
               
                 
                   let A2 = GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],GeZiManager.BanMove);
                  
                   if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
               MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
               if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}



               this.BTS--;
               this.ZD()
                   if (this.target.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
                         }
                 GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
                      GeZiManager.TNC[3]=4
                      GeZiManager.Bu.push(3);
               
               
        
                 
               
               
                
               
               }
               
               
               
               
               
               
               
               
               
               
               
               
                     
               
                
               }







