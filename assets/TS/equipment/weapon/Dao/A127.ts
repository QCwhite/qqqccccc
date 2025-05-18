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
import { Message } from "../../../Message/Message";
import MessageCenter from "../../../Message/MessageCenter";
import state from "../../../game/time/state";
import Dao from "./Dao";

@ccclass('A127')
export default class A127 extends Dao {
    TheNumber:string = 'A127';
    SH:number=2;
DT: boolean=true;
    attack() {
       state.ST = 3
       GeZiManager.DLLM="A3X1"
       GeZiManager.qing();
       let AF=[1,3]
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
//            面向对齐




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
    QD(an: number[]): void {


       for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}
       MessageCenter.MakeSHMessage("AM", an,this.SH,this.node.getComponent(Character).Pturn, "wuli")


       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")

       for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}
  if (this.target.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        }
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[2]=3
       GeZiManager.Bu.push(2);

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
// import { Message } from "../../../Message/Message";
// import MessageCenter from "../../../Message/MessageCenter";
// import state from "../../../game/time/state";
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A127 extends Dao {
// 
//     TheNumber:string = 'A127';
//     SH:number=2;
// DT: boolean=true;
//     attack() {
//         state.ST = 3
//         GeZiManager.DLLM="A3X1"
//         GeZiManager.qing();
//        let AF=[1,3]
//         let i = 0;
//         switch (GeZiManager.PCP.faceTo) {
//           case 6: i = 1;
//             break;
//           case 8: i = 2;
//             break;
//           case 4: i = 3;
//             break;
//         }
//     
//     
//         for (let n = 1; n <= i; n++) {
//           GeZiManager.PCP.turn6(AF);
//     
//         }
//         let an: number[] = [];
//             面向对齐
//     
//     
//     
//     
//         for (let mannger of AF) {
//     
//     
//     
//           an.push(GeZiManager.PCP.findGe(mannger, 1));
//     
//         }
//     
//         GeZiManager.GeZis = [].concat(an);
//     
//         let g = new Message("", GeZiManager.GeZis, 1);
//         for (let m of GeZiManager.YuanGong) {
//     
//     
//           m.red()
//           m.ReceiveMessage(g)
//     
//         }
//         MessageCenter.MakeMessage("UIManager", "change", -1);
//     
//     
//     
//         
//     
//     
//       }
// 
//     QD(an: number[]): void {
//         
//       
//         for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}
//           MessageCenter.MakeSHMessage("AM", an,this.SH,this.node.getComponent(Character).Pturn, "wuli")
//                 
//      
//             MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//      
//           for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}
//  
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[2]=3
//       GeZiManager.Bu.push(2);
//       
//       }
// }
