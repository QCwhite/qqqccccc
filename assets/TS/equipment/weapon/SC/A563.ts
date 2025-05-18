// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Dao from "../Dao/Dao";

@ccclass('A563')
export default class A583 extends Dao {
   SH: number=2;
 
    level:number=1;
    TheNumber:string = 'A583';
    Aface: number[]=[1,2,3];
    
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
// import Dao from "../Dao/Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A583 extends Dao {
//    SH: number=2;
//  
//     level:number=1;
//     TheNumber:string = 'A583';
//     Aface: number[]=[1,2,3];
//     
// }
