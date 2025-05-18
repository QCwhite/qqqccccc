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
import A127 from "./A127";
import A131 from "./A131";
import A132 from "./A132";

@ccclass('A128')
export default class A128 extends A132{
  
   
  
    level: number = 3
    TheNumber:string = 'A128';
    SH:number=1;
  
    Aface: number[] = [1,2,3];
  DT:boolean=true;
  Wtype: number=1;
    ac(k:number) {
       GeZiManager.AT=1






    }
    attack() {

       if(this.PPC()){state.ST = 3
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
//          面向对齐




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



       }


       else{super.attack()}



       }//像有多个目标的选择其一的武器插入UI转换，做这类武器时私聊我



       QD(an: number[]): void {
       this.ac(an[0])

       for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}
       MessageCenter.MakeSHMessage("AM", an,GeZiManager.AT,this.node.getComponent(Character).Pturn, "mofa")

       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")

       for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}

  if (this.target.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        }
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
       GeZiManager.Bu.push(3);

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
// import state from "../../../game/time/state";
// import GeZiManager from "../../../Manager/GeZiManager";
// import { Message } from "../../../Message/Message";
// import MessageCenter from "../../../Message/MessageCenter";
// import A127 from "./A127";
// import A131 from "./A131";
// import A132 from "./A132";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A128 extends A132{
//   
//    
//   
//     level: number = 3
//     TheNumber:string = 'A128';
//     SH:number=1;
//   
//     Aface: number[] = [1,2,3];
//   DT:boolean=true;
//   Wtype: number=1;
//     ac(k:number) {
//     GeZiManager.AT=1
//   
//   
//   
//   
//   
//   
//     }
//     attack() {
//      
//      if(this.PPC()){state.ST = 3
//       GeZiManager.DLLM="A321"
//       GeZiManager.qing();
//      let AF=[1,2,3]
//       let i = 0;
//       switch (GeZiManager.PCP.faceTo) {
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
//         GeZiManager.PCP.turn6(AF);
//   
//       }
//       let an: number[] = [];
//           面向对齐
//   
//   
//   
//   
//       for (let mannger of AF) {
//   
//   
//   
//         an.push(GeZiManager.PCP.findGe(mannger, 1));
//   
//       }
//   
//       GeZiManager.GeZis = [].concat(an);
//   
//       let g = new Message("", GeZiManager.GeZis, 1);
//       for (let m of GeZiManager.YuanGong) {
//   
//   
//         m.red()
//         m.ReceiveMessage(g)
//   
//       }
//       MessageCenter.MakeMessage("UIManager", "change", -1);
//   
//   
//   
//       }
//      
//      
//      else{super.attack()}
//       
//   
//   
//     }//像有多个目标的选择其一的武器插入UI转换，做这类武器时私聊我
//   
//   
//   
//   QD(an: number[]): void {
//     this.ac(an[0])
//   
//     for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}
//       MessageCenter.MakeSHMessage("AM", an,GeZiManager.AT,this.node.getComponent(Character).Pturn, "mofa")
//     
//         MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//    
//       for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}
//     
//   
//   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//   GeZiManager.TNC[3]=4
//   GeZiManager.Bu.push(3);
//   
//   }
//   
//   
// }
