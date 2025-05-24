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
import Dao from "./Dao";

@ccclass('A146')
export default class A146 extends Dao {
    level: number = 4
    TheNumber: string ="A146";
    Aface: number[] = [1,2,3,4,6,7,8,9];
    SH: number=3;
    Ytype: number=4;
    start(){
       this.node.getComponent(Character).kill2.push(this)
       this.node.getComponent(Character).TNJJ[3]+=1
          this.target=this.node.getComponent(Character)
          this.target.KBL(1)
            this.changeEP()
    }
Attack3(): void {
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi-")
}
 remove(): void {
       this.node.getComponent(Character).TNJJ[3]-=1
       GeZiManager.shanchu(this.node.getComponent(Character).attack3,this)
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
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A146 extends Dao {
//     level: number = 4
//     TheNumber: string ="A146";
//     Aface: number[] = [1,2,3,4,6,7,8,9];
//     SH: number=3;
// 
//     start(){
//         this.node.getComponent(Character).kill2.push(this)
//         this.node.getComponent(Character).TNJJ[3]+=1
//     }
// 
// 
// Attack3(): void {
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi-")
// }
//  remove(): void {
//     this.node.getComponent(Character).TNJJ[3]-=1
//     GeZiManager.shanchu(this.node.getComponent(Character).attack3,this) 
//  }
// }
