// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Dao from "./Dao";
import MessageCenter from '../../../Message/MessageCenter';
import S01 from '../../../Scharacter/S01';

@ccclass('A141')
export default class A141 extends Dao {
    level: number = 4
    TheNumber: string = "A141";
    Aface: number[] = [1,2,3,4,6];
    SH: number=2;
    Ytype: number=4;




    start(): void {
        super.start()

  let g=1
   if (this.target.accessory.TheNumber=="DXX") {
       g++
   }
   if (this.target.shose.TheNumber=="CXX") {
       g++
   }
   if (this.target.body.TheNumber=="BXX") {
       g++
   }
    if (this.target.node.getComponent(S01)&&this.target.node.getComponent(S01).weapon2) {
       g++
   }
   MessageCenter.MakeSHMessage("AM",[this.target.ZB],g,this.target.Pturn,"TN+")



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
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A141 extends Dao {
//     level: number = 4
//     TheNumber: string = "A141";
//     Aface: number[] = [1,2,3,4,6];
//     SH: number=2;
// }
