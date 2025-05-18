// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import realThing from "../../../BASE/realThing";
import GeZiManager from "../../../Manager/GeZiManager";
import weapon from "../weapon";
import Dun from "./Dun";

@ccclass('A342')
export default class A342 extends Dun {
Pnumber:number=2;
level:number=4;
TheNumber:string = 'A342';
@property(Number)
Pface:number[]=[];
start(): void {

     super.start()
     this.node.parent.getComponent(Character).DunDefenceSH=function(Dun1: weapon, MB: realThing, AT: weapon){
     if (MB != null) {
     let Pface: number[] = [].concat(Dun1.Pface);
     if (Pface.includes(MB.faceIs(this.ZB))) {
     let a= Dun1.Pnumber;
     Dun1.PD(AT.PJ);
     GeZiManager.BOL=true;
     return a;
     } else return 0;
     } else return 0;
     }
     this.node.parent.getComponent(Character).attack2.push(this);
}
remove(): void {
     this.node.parent.getComponent(Character).DunDefenceSH=function(Dun1: weapon, MB: realThing, AT: weapon) {
     if (MB != null) {
     let Pface: number[] = [].concat(Dun1.Pface);
     if (this.PfaceFinal(this.faceTo, Pface).includes(MB.faceIs(this.ZB))) {
     let a= Dun1.Pnumber;
     Dun1.PD(AT.PJ);GeZiManager.BOL=true;
     return a;
     } else return 0;
     } else return 0;
     }
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
// import realThing from "../../../BASE/realThing";
// import GeZiManager from "../../../Manager/GeZiManager";
// import weapon from "../weapon";
// import Dun from "./Dun";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A342 extends Dun {
// Pnumber:number=2;
// level:number=4;
// TheNumber:string = 'A342';
// 
// @property(Number)
// Pface:number[]=[];
// 
// start(): void {
// 
//     super.start()
//     this.node.parent.getComponent(Character).DunDefenceSH=function(Dun1: weapon, MB: realThing, AT: weapon){
//             if (MB != null) {
//                 let Pface: number[] = [].concat(Dun1.Pface);
//                 if (Pface.includes(MB.faceIs(this.ZB))) {
//                     let a= Dun1.Pnumber;
//                     Dun1.PD(AT.PJ);
//                     GeZiManager.BOL=true;
//                 return a;
//                 } else return 0;
//             } else return 0;
//     }
//     this.node.parent.getComponent(Character).attack2.push(this);
// }
// remove(): void {
//     this.node.parent.getComponent(Character).DunDefenceSH=function(Dun1: weapon, MB: realThing, AT: weapon) {
//         if (MB != null) {
//            let Pface: number[] = [].concat(Dun1.Pface);
//            if (this.PfaceFinal(this.faceTo, Pface).includes(MB.faceIs(this.ZB))) {
//               let a= Dun1.Pnumber;
//               Dun1.PD(AT.PJ);GeZiManager.BOL=true;
//               return a;
//            } else return 0;
//         } else return 0;
//      }
// }
// }
