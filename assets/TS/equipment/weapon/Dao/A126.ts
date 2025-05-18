// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import A110 from "./A110";

@ccclass('A126')
export default class A126 extends A110 {
    level:number=2
    TheNumber:string = 'A126';
   SH: number=1;
   start(): void {
       this.node.getComponent(Character).attack1.push(this)
   }
Attack25(at: any, csh: number): void {
       if (at&&at.tt=="M") {
       MessageCenter.MakeSHMessage("AM", [at.ZB], 1,this.node.getComponent(Character).Pturn, "mofa")
       }
}
   
  
  QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
       MessageCenter.MakeSHMessage("AM", an, 1,this.node.getComponent(Character).Pturn, "Qi+")
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")

       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
  GeZiManager.Bu.push(2);}
  remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).attack1,this)
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
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import A110 from "./A110";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A126 extends A110 {
// 
//     level:number=2
//     TheNumber:string = 'A126';
//    SH: number=1;
//    start(): void {
//     this.node.getComponent(Character).attack1.push(this)
//    }
// Attack25(at: any, csh: number): void {
//     if (at&&at.tt=="M") {
//         MessageCenter.MakeSHMessage("AM", [at.ZB], 1,this.node.getComponent(Character).Pturn, "mofa")    
//     }
// }
//    
//   
//   QD(an:number[]){
//   
//     console.log(this.node.getComponent(Character).Pturn)
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//       MessageCenter.MakeSHMessage("AM", an, 1,this.node.getComponent(Character).Pturn, "Qi+")
//       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//   
//       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//   
//   
//   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//   GeZiManager.TNC[3]=4
//   GeZiManager.Bu.push(2);}
//   remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).attack1,this) 
//  }
// }
