// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Qiang from "./Qiang";

@ccclass('A231')
export default class A231 extends Qiang {
    TheNumber:string = 'A231';
    SH: number=2;
    level: number = 3;
BT: boolean=false;

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
// import Qiang from "./Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A231 extends Qiang {
//     TheNumber:string = 'A231';
//     SH: number=2;
//     level: number = 3;
// BT: boolean=false;
// }
