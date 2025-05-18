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
import Qiang from "./Qiang";

@ccclass('A252')
export default class A252 extends Qiang{
   TheNumber:string = 'A252';
   SH: number=3;
   level: number=5;
      Ytype: number=6;
   attack2() {
      let AF = [].concat(this.Aface);
      let i = 0;
      switch (this.node.getComponent(Character).faceTo) {
      case 6: i = 1;
      break;
      case 8: i = 2;
      break;
      case 4: i = 3;
      break;
      }


      for (let n = 1; n <= i; n++) {
      this.turn6(AF);

      }




      let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr, AF[0], GeZiManager.BanMove);
      this.BTS--
      this.QD(A2);
      this.ZD()

    }
    QD(an:number[]){

      console.log(this.node.getComponent(Character).Pturn)
      if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
      MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
      MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
      MessageCenter.MakeSHMessage("AM",an,[this.node.getComponent(Character).faceTo,0.3],this.node.getComponent(Character).Pturn,"move")
      if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


      GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
      GeZiManager.TNC[3]=4
    GeZiManager.Bu.push(2);}
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
// 
// import Qiang from "./Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A252 extends Qiang{
//    TheNumber:string = 'A252';
//    SH: number=3;
//    level: number=5;
//    attack2() {
//       let AF = [].concat(this.Aface);
//       let i = 0;
//       switch (this.node.getComponent(Character).faceTo) {
//         case 6: i = 1;
//           break;
//         case 8: i = 2;
//           break;
//         case 4: i = 3;
//           break;
//       }
//   
//   
//       for (let n = 1; n <= i; n++) {
//         this.turn6(AF);
//   
//       }
//   
//  
//       
// 
//       let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr, AF[0], GeZiManager.BanMove);
//       this.BTS--
//       this.QD(A2);
//   this.ZD()
//   
//     }
//     QD(an:number[]){
//   
//       console.log(this.node.getComponent(Character).Pturn)
//       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//         MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//         MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//         MessageCenter.MakeSHMessage("AM",an,[this.node.getComponent(Character).faceTo,0.3],this.node.getComponent(Character).Pturn,"move")
//         if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//        
//     
//     GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//     GeZiManager.TNC[3]=4
//     GeZiManager.Bu.push(2);}
// 
// 
// }
