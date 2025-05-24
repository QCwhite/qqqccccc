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
import A110 from "./A110";
import MessageCenter from '../../../Message/MessageCenter';

@ccclass('A144')
export default class A144 extends A110 {
    level: number = 4
    TheNumber: string ="A144";
    Aface: number[] = [2];
    SH: number=2;
    start(){
      this.node.getComponent(Character).attack35.push(this)
         this.target=this.node.getComponent(Character)
              MessageCenter.MakeSHMessage("AM", [this.target.ZB], 1,this.node.getComponent(Character).Pturn, "HP+");
           this.changeEP()
    }
Attack35(an: any, kn: number): void {
      if(kn>0) {
      this.SH+=1;
      }
}
 remove(): void {
      GeZiManager.shanchu(this.node.getComponent(Character).attack35,this)
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
// 
// import A110 from "./A110";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A144 extends A110 {
// 
//     level: number = 4
//     TheNumber: string ="A144";
//     Aface: number[] = [2];
//     SH: number=2;
// 
//     start(){
//         this.node.getComponent(Character).attack35.push(this)
//     }
// 
// 
// Attack35(an: any, kn: number): void {
//     if(kn>0) {
//         this.SH+=1;
//     }
// }
//  remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).attack35,this) 
//  }
// }
