import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import Character from "../../../BASE/Character";
import Dun from "./Dun";

@ccclass('A323')
export default class A323P3 extends Dun {
    TheNumber: "A323";
    Wtype: number = 3;//
    level: number = 2;
    Pnumber: number = 3;//格挡值
    FJ() {
      this.node.getComponent(Character).changeE("A323P2")

    }
  
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Character from "../../../BASE/Character";
// import Dun from "./Dun";
// 
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class A323 extends Dun {
//     TheNumber: "A323";
//     Wtype: number = 3;//
//     level: number = 2;
//     Pnumber: number = 2;//格挡值
// 
//     FJ() {
//         this.Pnumber -= 1;
//         if (this.Pnumber <= 0) {
//             this.remove()
//         }
// 
//     }
//     remove() {
// this.node.getComponent(Character).changeE("weapon")
//     }
// }
