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
import MessageCenter from "../../../Message/MessageCenter";
import A141 from "./A141";
import { AudioManager } from '../../../BASE/music';

@ccclass('A161')
export default class A161 extends A141 {
    level: number = 6
    TheNumber: string = "A161";
    
    SH: number=4;
    CJ: number=1;
    start(){
//      this.node.getComponent(Character).attack25.push(this)
AudioManager.instance.ZJP("hit",16)
    }
    Attack25(at:realThing,csh: number): void {
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"TN+")
AudioManager.instance.ZJP("hit",16)
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
// import A141 from "./A141";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A161 extends A141 {
// 
//     level: number = 6
//     TheNumber: string = "A161";
//     
//     SH: number=4;
//     CJ: number=1;
// 
//     start(){
//       this.node.getComponent(Character).attack25.push(this)
//     }
// 
//     Attack25(at:realThing,csh: number): void {
//         MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"TN+")
//        
//     }
// 
// remove(): void {
//    GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
// }
// 
// }
