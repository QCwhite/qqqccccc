// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import A110 from "../Dao/A110";
import Dao from "../Dao/Dao";
import weapon from "../weapon";
import Character from '../../../BASE/Character';

@ccclass('A504')
export default class A504 extends Dao {
    TheNumber: string="A110";
      SH=2;
 
  level:number=1

Wtype: number=1;
    start(): void {
       
       this.target=this.node.getComponent(Character)
      
    }

 
    constructor(){

        super();
        // console.log( this.TheNumber)
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
// import A110 from "../Dao/A110";
// import Dao from "../Dao/Dao";
// import weapon from "../weapon";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A504 extends A110 {
// 
//     TheNumber: string="A110";
// 
// 
// 
// }
