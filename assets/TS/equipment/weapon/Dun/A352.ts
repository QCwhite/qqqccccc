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
import MessageCenter from "../../../Message/MessageCenter";
import turn from "../../../game/time/turn";
import Dun from "./Dun";
import { AudioManager } from '../../../BASE/music';

@ccclass('A352')
export default class A352 extends Dun {
    level:number=5;
    TheNumber:string = 'A352';
    Pnumber: number=1;
Pface: number[]=[1,2,3]
Aface: number[]=[1,2,3];
FJ(){
       let a=this.node.getComponent(Character)
       let c=a.PfaceFinal(a.faceTo,[1,2,3])
       let d=[a.findGe(c[0],1),a.findGe(c[1],1),a.findGe(c[2],1)]
       console.log(d)
       AudioManager.instance.ZJP("hit",26);
       MessageCenter.MakeSHMessage("AM",d,1,this.node.getComponent(Character).Pturn,"mofa")
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
// import MessageCenter from "../../../Message/MessageCenter";
// import turn from "../../../game/time/turn";
// 
// import Dun from "./Dun";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A352 extends Dun {
//     level:number=5;
//     TheNumber:string = 'A352';
// 
//     Pnumber: number=1;
// Pface: number[]=[1,2,3]
// Aface: number[]=[1,2,3];
// 
// 
// 
// 
// 
// 
// 
// FJ(){
//     let a=this.node.getComponent(Character)
//     let c=a.PfaceFinal(a.faceTo,[1,2,3])
//     let d=[a.findGe(c[0],1),a.findGe(c[1],1),a.findGe(c[2],1)]
//     console.log(d)
//     MessageCenter.MakeSHMessage("AM",d,1,this.node.getComponent(Character).Pturn,"mofa")
//   }
// }
