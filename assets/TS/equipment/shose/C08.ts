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

@ccclass('C08')
export default class C08 extends CXX {
    target:Character=null;
    TheNumber:string ='C08';
           Cname:string="高跟鞋"
start () {
       this.target=this.node.getComponent(Character);
       this.target.attack25.push(this);
       this.target.TNJJ[1]+=1
          this.changeEP()
}
Attack25(at: any, csh: number): void {
       if (at.sex=="man") {
       GeZiManager.dm+=1;
       }
}
remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).attack25,this)
       this.target.TNJJ[1]-=1
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
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C08 extends CXX {
//     target:Character=null;
//     TheNumber:string ='C08';
//            Cname:string="高跟鞋"
// start () {
//     this.target=this.node.getComponent(Character);
//     this.target.attack25.push(this);
//     this.target.TNJJ[1]+=1
// }
// Attack25(at: any, csh: number): void {
//     if (at.sex=="man") {
//         GeZiManager.dm+=1;
//     }
// }
// remove(): void {
//   GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
//   this.target.TNJJ[1]-=1
// }
// }
