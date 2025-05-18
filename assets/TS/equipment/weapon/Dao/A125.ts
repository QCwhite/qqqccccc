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

@ccclass('A125')
export default class A125 extends Dao {
        TheNumber:string = 'A125';
        SH:number=2;
        TNJ: number=-1;
           Ytype: number=12;
      start() {
        //this.node.getComponent(Character).behurt2.push(this)
    }
    
    Behurt2(m:SHMessage,BeHC:any,HC:any) {
    
      if (HC.weapon.Wtype==1) {
            GeZiManager.dm-=1;
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
