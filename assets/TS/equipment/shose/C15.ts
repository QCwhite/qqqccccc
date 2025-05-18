// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import CXX from "./CXX";

@ccclass('C15')
export default class C15 extends CXX {
    target:Character=null;
    TheNumber:string ='C15';
           Cname:string="玉卒"
start () {
       this.target=this.node.getComponent(Character);
       this.target.turn3.push(this)
console.log(this.target.turn3)
}
Turn3(N?: number): void {
       this.target.Walk(false)
}
remove(): void {
       GeZiManager.shanchuALL(this.node.getComponent(Character).turn3,this)

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
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C15 extends CXX {
//     target:Character=null;
//     TheNumber:string ='C15';
//            Cname:string="玉卒"
// start () {
//     this.target=this.node.getComponent(Character);
//     this.target.turn3.push(this)
//     
// }
// Turn3(N?: number): void {
//     this.target.Walk(false)
// }
// remove(): void {
//   GeZiManager.shanchu(this.node.getComponent(Character).turn3,this) 
// 
// }
// }
