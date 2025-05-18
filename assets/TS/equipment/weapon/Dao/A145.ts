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
import A131 from "./A131";
import A132 from "./A132";
import Dao from "./Dao";
import { AudioManager } from '../../../BASE/music';

@ccclass('A145')
export default class A145 extends A132 {
    SH=1;
 Aface: number[]=[2];
    level:number=1
      TheNumber:string = 'A145';
  Wtype: number=1;
TNJ: number=-2;
gj:number=1
      constructor(){

        super();
       console.log( this.TheNumber)
        }
        QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
AudioManager.instance.ZJP("attack",this.Ytype)
       if (this.gj==1) {
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
       } else { MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")}

       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")

       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
       GeZiManager.Bu.push(2);

       this.gj*=-1

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
// import A131 from "./A131";
// import A132 from "./A132";
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A145 extends A132 {
//     SH=2;
//  Aface: number[]=[2];
//     level:number=1
//       TheNumber:string = 'A145';
//   Wtype: number=1;
// TNJ: number=-2;
// gj:number=1
// 
//       constructor(){
//   
//         super();
//         console.log( this.TheNumber)
//         }
// 
// 
// 
// 
// 
// 
//         QD(an:number[]){
//   
//           console.log(this.node.getComponent(Character).Pturn)
//           if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//          
//          if (this.gj==1) {
//           MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//          } else { MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")}
//        
//             MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//         
//             if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//         
//         
//         GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//         GeZiManager.TNC[3]=4
//         GeZiManager.Bu.push(2);
//       
//       this.gj*=-1
//       
//       }
// 
// 
// 
// 
// 
// 
// 
// 
// }
