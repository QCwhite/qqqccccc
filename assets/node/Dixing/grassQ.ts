// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../../TS/BASE/realThing";

@ccclass('GrassQ')
export default class grassQ extends realThing {
    tt: string = ""// 类型 
  @property({ override: true })
  
    zyx:number=9
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
// import realThing from "../../TS/BASE/realThing";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class grassQ extends realThing {
//     tt: string = ""// 类型 
//     @property(Number)
//     zyx:number=0.9
// 
// 
// 
// }
