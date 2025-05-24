// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import Dao from "./Dao";
import GeZiManager from '../../../Manager/GeZiManager';
import MessageCenter from '../../../Message/MessageCenter';

@ccclass('A142')
export default class A142 extends Dao {
    level: number = 4
    TheNumber: string = "A142";
    Aface: number[] = [2];
    SH: number=3;
    CJ:number=1
    Ytype: number=11;



start(): void {
   super.start()
   
    let p=9999
    let g=null
    for (let c of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]) {
        if (c.color!=this.target.color&&c.HP<p) {
          p=c.HP,g=c
        }
      
    }
            MessageCenter.MakeSHMessage("AM", [g.ZB], 1,this.node.getComponent(Character).Pturn, "HP-");
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
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A142 extends Dao {
//     level: number = 4
//     TheNumber: string = "A142";
//     Aface: number[] = [2];
//     SH: number=3;
//     CJ:number=1
// 
// }
