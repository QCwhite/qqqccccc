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
import A132 from "./A132";

@ccclass('A152')
export default class A152 extends A132 {
  level:number=5
    TheNumber:string = 'A152';
    ac(k:number){
      let a=[2,4,6,8]
      if(a.includes(this.node.getComponent(Character).faceIs(k))) {
      GeZiManager.AT=3
      }else{GeZiManager.AT=2}
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
// 
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// 
// import A132 from "./A132";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A152 extends A132 {
//   level:number=5
//     TheNumber:string = 'A152';
// 
//     ac(k:number){
//         let a=[2,4,6,8]
//           if(a.includes(this.node.getComponent(Character).faceIs(k))) {
//            GeZiManager.AT=3
//           }else{GeZiManager.AT=2}
// }}
