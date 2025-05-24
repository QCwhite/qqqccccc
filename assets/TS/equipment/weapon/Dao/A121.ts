// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import Character from "../../../BASE/Character";
import realThing from "../../../BASE/realThing";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import Dao from "./Dao";

@ccclass('A121')
export default class A121 extends Dao {
    SH:number= 1;
    level: number = 2;
    TheNumber:string = 'A121';
    Aface: number[]=[1,2,3];
    start(){
      this.node.getComponent(Character).attack25.push(this)
      this.target=this.node.getComponent(Character)
      this.changeEP()
    }
    Attack25(at:realThing,csh: number): void {

    //  console.log(at.tt)
      if (at.tt=="tree") {
GeZiManager.dm+=1
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
// import MessageCenter from "../../../Message/MessageCenter";
// import Dao from "./Dao";
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class A121 extends Dao {
//     SH:number= 2;
// 
//     level: number = 2;
//     TheNumber:string = 'A121';
// 
//     start(){
//         this.node.getComponent(Character).attack25.push(this)
//       this.target=this.node.getComponent(Character)
//     }
// 
//     Attack25(at:realThing,csh: number): void {
//         
//         console.log(at.tt)
//         if (at.tt=="tree") {
//             MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
//         }
//     }
// 
// remove(): void {
//    GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
// }
// 
// }
