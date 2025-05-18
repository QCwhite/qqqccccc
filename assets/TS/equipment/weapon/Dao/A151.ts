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
import turn from "../../../game/time/turn";
import A131 from "./A131";

@ccclass('A151')
export default class A151 extends A131 {
    level:number=5
    TheNumber:string = 'A151';
    SH: number=3
   CJ: number=1;
 
  
   
   Attack1(): void {
      let a =this.node.getComponent(Character)
      if (!GeZiManager.BanMove.includes(a.findGe(a.faceTo,1))) {
      this.CJ=1
      a.To(a.findGe(a.faceTo,1),0.2)
      }else{ this.CJ=0}


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
// 
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import turn from "../../../game/time/turn";
// 
// import A131 from "./A131";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A151 extends A131 {
//     level:number=5
//     TheNumber:string = 'A151';
//     SH: number=3
//    CJ: number=1;
//  
//   
//    
//    Attack1(): void {
//     let a =this.node.getComponent(Character)
//    if (!GeZiManager.BanMove.includes(a.findGe(a.faceTo,1))) {
//    this.CJ=1
//     a.To(a.findGe(a.faceTo,1),0.2)
//    }else{ this.CJ=0}
//    
//    
//   }
//  
// }
