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
import A132 from "./A132";
import { AudioManager } from '../../../BASE/music';

@ccclass('A147')
export default class A147 extends A132 {
    level: number = 4
    TheNumber: string ="A147";
    QD(an:number[]){
      GeZiManager.AT=2

      if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
      MessageCenter.MakeSHMessage("AM", an,GeZiManager.AT,this.node.getComponent(Character).Pturn, "HP-")

    
      MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//AudioManager.instance.ZJP("attack",0)
AudioManager.instance.ZJP("attack",18)
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
// import A132 from "./A132";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A147 extends A132 {
// 
//     level: number = 4
//     TheNumber: string ="A147";
//     QD(an:number[]){
//       GeZiManager.AT=2
// 
//         if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//           MessageCenter.MakeSHMessage("AM", an,GeZiManager.AT,this.node.getComponent(Character).Pturn, "HP-")
//      
//             MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//         
//           if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//         
// 
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[3]=4
//       GeZiManager.Bu.push(2);}
// }
