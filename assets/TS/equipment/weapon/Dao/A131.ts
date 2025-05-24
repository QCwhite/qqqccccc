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
import Dao from "./Dao";

@ccclass('A131')
export default class A131 extends Dao {
    level:number=3
    TheNumber:string = 'A131';
   SH: number=2;
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
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A131 extends Dao {
//     level:number=3
//     TheNumber:string = 'A131';
//    SH: number=2;
//    start(): void {
//     this.node.getComponent(Character).attack1.push(this)
//    }
//   Attack1(): void {
//     let a =this.node.getComponent(Character)
//    if (!GeZiManager.BanMove.includes(a.findGe(a.faceTo,1))) {
//     a.To(a.findGe(a.faceTo,1),0.2)
//    }
//    
//    
//   }
// 
//   remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).attack1,this) 
//  }
// 
// 
//  
// }
