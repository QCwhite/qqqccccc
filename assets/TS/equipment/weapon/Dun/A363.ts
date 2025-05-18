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
import Dun from "./Dun";

@ccclass('A363')
export default class A363 extends Dun {
    level:number=6
    TheNumber:string = 'A363';
  
      Pnumber: number=0;
  Pface: number[]=[2]
  Ytype: number=17;
Attack25(at: any, csh: number): void {

       console.log(at.tt=="human"||at.tt=="animal")
       console.log(at.color!=this.target.color)
       if (at&&(at.tt=="human"||at.tt=="animal")&&at.color!=this.target.color) {
       this.SH++
       this.Pnumber++
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"MaxHP+")
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"HP+")
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+")
       }
}
  
start(){
       super.start()
       this.node.getComponent(Character).attack25.push(this)

}
remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).attack25,this)
}
  
 attack(): void {
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

       let j =GeZiManager.BanMove








       let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, 1, AF[0], j);

       this.QD(A2);


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
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import Dun from "./Dun";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A364 extends Dun {
// 
//     level:number=6
//     TheNumber:string = 'A364';
//   
//       Pnumber: number=0;
//   Pface: number[]=[2]
// Attack25(at: any, csh: number): void {
// 
//   console.log(at.tt=="human"||at.tt=="animal")
//   console.log(at.color!=this.target.color)
//     if (at&&(at.tt=="human"||at.tt=="animal")&&at.color!=this.target.color) {
//         this.SH++
//         this.Pnumber++
//         MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"MaxHP+")
//        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"HP+")
//      MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+")
//     }
// }
//   
// start(){
//   super.start()
//   this.node.getComponent(Character).attack25.push(this)
// 
// }
// 
// 
// 
// remove(): void {
// GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
// }
//   
//  attack(): void {
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
// let j =GeZiManager.BanMove
// 
// 
//   
// 
// 
// 
// 
// 
//     let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, 1, AF[0], j);
// 
//     this.QD(A2);
// 
// 
//   }
//  }
