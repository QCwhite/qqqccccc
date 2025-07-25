// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import realThing from "../../../BASE/realThing";
import GeZiManager from "../../../Manager/GeZiManager";
import { SHMessage } from "../../../Message/SHMessage";
import Dao from "./Dao";
import MTX from '../../../BASE/MTX';
import { AudioManager } from '../../../BASE/music';
import MessageCenter from '../../../Message/MessageCenter';

@ccclass('A125')
export default class A125 extends Dao {
        TheNumber:string = 'A125';
        SH:number=2;
       
           Ytype: number=12;
      start(): void {
           this.node.getComponent(Character).attack1.push(this)
           this.target=this.node.getComponent(Character)
                this.changeEP()
       }
      Attack1(): void {
           let a =this.node.getComponent(Character)
           if (!GeZiManager.BanMove.includes(a.findGe(a.faceTo,1))) {
           a.To(a.findGe(a.faceTo,1),0.2)
           }
    
    
      }
    
    Behurt2(m:SHMessage,BeHC:any,HC:any) {
    
      if (HC.weapon.Wtype==1) {
            GeZiManager.dm-=1;
        }
    }



QD(an:number[]){
if (this.target.qi>=this.getTNC(3)-2) {
  

//console.log(this.node.getComponent(Character).Pturn)
if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
  MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi-")


  AudioManager.instance.ZJP("attack",this.Ytype,{volume:0.8})
     this.target.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("AT0_"+this.target.faceTo);
         



  if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
GeZiManager.TNC[3]=4
GeZiManager.Bu.push(2);



GeZiManager.PCP.ST()
}
}

    
    remove(): void {
      GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this) 
    }
    }
/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import Character from "../../../BASE/Character";
// import realThing from "../../../BASE/realThing";
// import GeZiManager from "../../../Manager/GeZiManager";
// import { SHMessage } from "../../../Message/SHMessage";
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A125 extends Dao {
// 
//     TheNumber:string = 'A125';
//     SH:number=2;
//     TNJ: number=-1;
//   start() {
//     //this.node.getComponent(Character).behurt2.push(this)
// }
// 
// Behurt2(m:SHMessage,BeHC:any,HC:any) {
// 
//   if (HC.weapon.Wtype==1) {
//         GeZiManager.dm-=1;
//     }
// }
// remove(): void {
//   GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this) 
// }
// }
