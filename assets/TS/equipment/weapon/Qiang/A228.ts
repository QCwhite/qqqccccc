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

@ccclass('A228')
export default class A228 extends Qiang {
  TheNumber:string = 'A228';
  SH: number=2;
  BT: boolean = false;//是否耗费子弹
  BTS: number=99;
     Ytype: number=12;
Attack2(an: number[]): void {
       MessageCenter.MakeSHMessage('AM',an,1,this.node.getComponent(Character).Pturn,'qi-')

}
start(): void {
// 将当前组件添加到 attack2 数组中
       super.start()
       this.node.getComponent(Character).attack2.push(this);
}
remove(): void {
// 获取当前组件在 attack2 数组中的索引
       const index = this.node.getComponent(Character).attack2.indexOf(this);

// 判断索引是否有效，然后从数组中移除当前组件
       if (index !== -1) {
       this.node.getComponent(Character).attack2.splice(index, 1);
       }
}
  QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       if (this.node.getComponent(Character).qi<1) {
       MessageCenter.MakeSHMessage('AM',[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,'Qi+') }
       else{ MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli");MessageCenter.MakeSHMessage('AM',[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,'Qi-')}
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}

       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
  GeZiManager.Bu.push(2);}
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
// import Qiang from "./Qiang";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A228 extends Qiang {
//   TheNumber:string = 'A228';
//   SH: number=2;
//   BT: boolean = false;//是否耗费子弹
//   BTS: number=99;
// Attack2(an: number[]): void {
//     MessageCenter.MakeSHMessage('AM',an,1,this.node.getComponent(Character).Pturn,'qi-')
//    
// }
// start(): void {
//  将当前组件添加到 attack2 数组中
//   super.start()
//   this.node.getComponent(Character).attack2.push(this);
// }
// 
// remove(): void {
//  获取当前组件在 attack2 数组中的索引
//   const index = this.node.getComponent(Character).attack2.indexOf(this);
// 
//  判断索引是否有效，然后从数组中移除当前组件
//   if (index !== -1) {
//       this.node.getComponent(Character).attack2.splice(index, 1);
//   }
// }
// 
// 
// 
//   QD(an:number[]){
//   
//     console.log(this.node.getComponent(Character).Pturn)
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//     if (this.node.getComponent(Character).qi<1) {
//       MessageCenter.MakeSHMessage('AM',[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,'Qi+') }
//       else{ MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli");MessageCenter.MakeSHMessage('AM',[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,'Qi-')}
//       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//       
//     MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//   GeZiManager.TNC[3]=4
//   GeZiManager.Bu.push(2);}
// }
