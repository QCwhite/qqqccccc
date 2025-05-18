// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import A321 from "./A321";

@ccclass('A321P')
export default class A321P extends A321 {
    TheNumber:string= "A321P";
    Wtype: number = 3;//
    level: number = 2;
    Pnumber: number = 1;//格挡值
    SH: number=1;
    Ytype: number=3;
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
// import A321 from "./A321";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A321P extends A321 {
//     TheNumber:string= "A321P";
//     Wtype: number = 3;//
//     level: number = 2;
//     Pnumber: number = 1;//格挡值
//     SH: number=1;
// 
// }
