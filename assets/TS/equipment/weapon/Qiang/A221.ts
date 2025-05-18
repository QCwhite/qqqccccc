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
import Qiang from "./Qiang";

@ccclass('A221')
export default class A221 extends Qiang {
    SH:number= 2;
    level: number = 2;
    TheNumber:string = 'A221';
    start(){
     super.start()
     this.node.getComponent(Character).attack25.push(this)
    }
    Attack25(at:realThing,csh: number): void {

     console.log(at.tt)
     if (at.tt=="animal") {
//        GeZiManager.dm+=1;
     }

     if (at.HP>this.node.getComponent(Character).HP) {
     GeZiManager.dm+=1;
      this.ZD();
     }
    }
remove(): void {
     GeZiManager.shanchu(this.node.getComponent(Character).attack25,this)
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
// import Qiang from "./Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A221 extends Qiang {
//     SH:number= 2;
// 
//     level: number = 2;
//     TheNumber:string = 'A221';
// 
//     start(){
//         this.node.getComponent(Character).attack25.push(this)
//     }
// 
//     Attack25(at:realThing,csh: number): void {
//         
//         console.log(at.tt)
//         if (at.tt=="animal") {
//         GeZiManager.dm+=1;
//         }
// 
//         if (at.HP<this.node.getComponent(Character).HP) {
//             GeZiManager.dm+=1;
//         this.ZD();
//         }
//     }
// 
// remove(): void {
//    GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
// }
// }
