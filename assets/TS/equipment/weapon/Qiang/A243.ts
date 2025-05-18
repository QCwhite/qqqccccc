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
import Dao from "../Dao/Dao";

@ccclass('A243')
export default class A243 extends Dao {
Wtype: number=2;
level: number=4;
    TheNumber:string = 'A243';
    SH: number=2;
    Ytype: number=3;
    Move3(): void {
       MessageCenter.MakeSHMessage("AM", [this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,1)], this.SH,this.node.getComponent(Character).Pturn, "wuli")
    }
remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).move3,this)
}
start(): void {
//   将当前组件添加到 attack2 数组中
       super.start()
       this.node.getComponent(Character).move3.push(this);
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
// import Dao from "../Dao/Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A243 extends Dao {
// Wtype: number=2;
// level: number=4;
//     TheNumber:string = 'A243';
//     SH: number=2;
//     Move3(): void {
//         MessageCenter.MakeSHMessage("AM", [this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,1)], this.SH,this.node.getComponent(Character).Pturn, "wuli")
//     }
// 
// remove(): void {
//    GeZiManager.shanchu(this.node.getComponent(Character).move3,this) 
// }
// start(): void {
//    将当前组件添加到 attack2 数组中
//     super.start()
//     this.node.getComponent(Character).move3.push(this);
// }
// }
