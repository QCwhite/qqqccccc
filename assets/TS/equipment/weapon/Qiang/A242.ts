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
import Qiang from "./Qiang";

@ccclass('A242')
export default class A242 extends Qiang {
  TheNumber:string = 'A242';
  SH: number=2;
  BT: boolean = false;//是否耗费子弹
Walk3(ZB: number): void {
    this.aaattack2()
}
  start(): void {
//    // 将当前组件添加到 attack2 数组中
   this.target=this.node.getComponent(Character);
super.start();
    this.node.getComponent(Character).walk3.push(this);
}
remove(): void {
//    // 获取当前组件在 attack2 数组中的索引
    GeZiManager.shanchu(this.target.walk3,this)
}
aaattack2() {
    let AF = [].concat(this.Aface);
    let i = 0;
    switch (this.node.getComponent(Character).faceTo) {
    case 6: i = 1;
    break;
    case 8: i = 2;
    break;
    case 4: i = 3;
    break;
    }


    for (let n = 1; n <= i; n++) {
    this.turn6(AF);

    }


    let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr, AF[0], GeZiManager.BanMove);

    if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(A2);}}
    MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
    if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(A2);}

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
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import Qiang from "./Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A242 extends Qiang {
//   TheNumber:string = 'A242';
//   SH: number=2;
//   BT: boolean = false;//是否耗费子弹
// Walk3(ZB: number): void {
//   this.aaattack2()
// }
//   start(): void {
// 将当前组件添加到 attack2 数组中
//     super.start()
//     this.node.getComponent(Character).walk3.push(this);
// }
// 
// remove(): void {
// 获取当前组件在 attack2 数组中的索引
//   GeZiManager.shanchu(this.target.walk3,this)
// }
// 
// 
// aaattack2() {
//     let AF = [].concat(this.Aface);
//     let i = 0;
//     switch (this.node.getComponent(Character).faceTo) {
//       case 6: i = 1;
//         break;
//       case 8: i = 2;
//         break;
//       case 4: i = 3;
//         break;
//     }
// 
// 
//     for (let n = 1; n <= i; n++) {
//       this.turn6(AF);
// 
//     }
// 
// 
//     let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr, AF[0], GeZiManager.BanMove);
// 
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(A2);}}
//     MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//     if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(A2);}
// 
//   }
// 
// 
// 
// }}
