// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import A110 from "./A110";

@ccclass('A143')
export default class A143 extends A110 {
    level: number = 4
    TheNumber: string = "A143";
    Aface: number[] = [1,2,3];
    SH: number=1;
    start(){
        this.node.getComponent(Character).attack2.push(this)
           this.target=this.node.getComponent(Character)
             this.changeEP()
               let g=0
   if (this.target.accessory.TheNumber=="D02") {
       g++
   }
   if (this.target.shose.TheNumber=="C11") {
       g++
   }
   if (this.target.body.TheNumber=="B13") {
       g++
   }
   
   MessageCenter.MakeSHMessage("AM",[this.target.ZB],g,this.target.Pturn,"Qi+")
    }
 Attack2(an: number[]): void {
        let a =Math.floor(this.node.getComponent(Character).qi/2)
        GeZiManager.dm+=a
        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],a*2,this.node.getComponent(Character).Pturn,"Qi-")
 }
 remove(): void {
        GeZiManager.shanchu(this.node.getComponent(Character).attack2,this)
 }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import A110 from "./A110";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A143 extends A110 {
//     level: number = 4
//     TheNumber: string = "A143";
//     Aface: number[] = [1,2,3];
//     SH: number=1;
// 
//     start(){
//         this.node.getComponent(Character).attack2.push(this)
//     }
// 
// 
//  Attack2(an: number[]): void {
//      let a =Math.floor(this.node.getComponent(Character).qi/2)
//      GeZiManager.dm+=a
//      MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],a*2,this.node.getComponent(Character).Pturn,"Qi-")
//  }
//  remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).attack2,this) 
//  }
// }
