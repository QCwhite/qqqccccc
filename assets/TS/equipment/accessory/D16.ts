// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import Cspine from "../../BASE/spineANDgif/Cspine";
import turn from "../../game/time/turn";
import GeZiManager from "../../Manager/GeZiManager";
import GMessage from "../../Message/GMessage";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";

@ccclass('D16')
export default class D16 extends DXX {
    target:Character=null;
    TheNumber:string = 'D16';
    Cname:string="命运之轮"
k:number=-1
j:number=0
    start () {
      this.target=this.node.getComponent(Character);
      this.target.t1.push(this)
      this.target.shop2.push(this)
    this.changeEP()
        }
 
T1(turn1: number): void {
      if (this.k!=-1) {
      this.target.TNJJ[this.k]-=1

      } if (this.j!=-1) {
      this.target.TNJJ[this.j]+=2
      }

      switch (GeZiManager.TNJM[turn.round%12-1]) {
      case 2:this.k=1//移动

      break;
      case 1:this.k=2//蓄气

      break;
      case 0:this.k=3//攻击

      break;
      case 7:this.k=4//法术

      break;
      case 3:this.k=5//商店
      break;

      case 5:this.k=0//转身
      break;
      default:this.k=-1//转身
      break

      }


      if (this.k!=-1) {this.target.TNJJ[this.k]+=2}



      this.target.TNJJ[this.target.qi%6]-=2
      this.j=this.target.qi%6










}
XD1(m:GMessage){
      if (this.j!=-1) {
      switch (m.SHtype) {
      case "Walk": this.target.TNJJ[1]+=2;this.j=-1

      break;
      case "turn4": this.target.TNJJ[0]+=2;this.j=-1

      break;
      case "turn6": this.target.TNJJ[0]+=2;this.j=-1

      break;
      case "WalkL": this.target.TNJJ[1]+=2;this.j=-1

      break;
      case "attack": this.target.TNJJ[3]+=2;this.j=-1

      break;

      case "qi": this.target.TNJJ[2]+=2;this.j=-1

      break;


      default:if (m.Type=="MUI") {
      this.target.TNJJ[4]+=2;this.j=-1
      }
      break;
      }
      }


}
Shop2(A: string, s: boolean): void {
      if (this.j!=-1) {      this.target.TNJJ[5]+=2;this.j=-1}
}
remove(): void {
//  //  GeZiManager.shanchu(this.target.T1,this)
      if (this.k!=-1) { this.target.TNJJ[this.k]+=1}
      let a=this.node.getComponent(Cspine)
      a.changeSlot(a.spine2,"KD2-B",null,13)
      a.changeSlot(a.spine4,"KD2-B",null,13)
      a.changeSlot(a.spine6,"KD2-B",null,13)


  }
   changeEP(){
      let a=this.node.getComponent(Cspine)
 let c=this.target.Pturn
      a.changeSlot(a.spine2,"KD2-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KD2-B",c),0)
      a.changeSlot(a.spine4,"KD2-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KD2-B",c),2)
      a.changeSlot(a.spine6,"KD2-B",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KD2-B",c),4)

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
// import Character from "../../BASE/Character";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import turn from "../../game/time/turn";
// import GeZiManager from "../../Manager/GeZiManager";
// import GMessage from "../../Message/GMessage";
// import MessageCenter from "../../Message/MessageCenter";
// import Shops from "../../UIS/shop/shops";
// import DXX from "./DXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D16 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D16';
//     Cname:string="命运之轮"
// k:number=-1
// j:number=0
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.t1.push(this)
//       this.target.shop2.push(this)
//       
//         }
//  
// T1(turn1: number): void {
//   if (this.k!=-1) {
//     this.target.TNJJ[this.k]-=1
// 
//   } if (this.j!=-1) {
//     this.target.TNJJ[this.j]+=2
//   }
// 
//   switch (GeZiManager.TNJM[turn.round%12-1]) {
//     case 2:this.k=1//移动
//             
//     break;
//     case 1:this.k=2//蓄气
//     
//     break;
//     case 0:this.k=3//攻击
//     
//     break;
//     case 7:this.k=4//法术
//     
//     break;
//     case 3:this.k=5//商店        
//     break;
// 
// case 5:this.k=0//转身
// break;
// default:this.k=-1//转身
// break
// 
//    }
//     
// 
//    if (this.k!=-1) {this.target.TNJJ[this.k]+=2}
// 
// 
// 
//    this.target.TNJJ[this.target.qi%6]-=2
// this.j=this.target.qi%6
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// }
// XD1(m:GMessage){
// if (this.j!=-1) {
//   switch (m.SHtype) {
//     case "Walk": this.target.TNJJ[1]+=2;this.j=-1
//       
//       break;
//       case "turn4": this.target.TNJJ[0]+=2;this.j=-1
//       
//       break;
//       case "turn6": this.target.TNJJ[0]+=2;this.j=-1
//       
//       break;
//       case "WalkL": this.target.TNJJ[1]+=2;this.j=-1
//       
//       break;
//       case "attack": this.target.TNJJ[3]+=2;this.j=-1
//       
//       break;
//   
//       case "qi": this.target.TNJJ[2]+=2;this.j=-1
//       
//       break;
//   
//   
//     default:if (m.Type=="MUI") {
//       this.target.TNJJ[4]+=2;this.j=-1
//     }
//       break;
//   }
// }
// 
// 
// }
// 
// 
// Shop2(A: string, s: boolean): void {
//   if (this.j!=-1) {      this.target.TNJJ[5]+=2;this.j=-1}
// }
// 
// 
// 
// 
// 
// 
// 
// 
// remove(): void {
//  GeZiManager.shanchu(this.target.T1,this)
//   if (this.k!=-1) { this.target.TNJJ[this.k]+=1}
//   }
// 
//    changeEP(){
// let a=this.node.getComponent(Cspine)
// 
//   a.changeSlot(a.spine2,"KD2-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-b"))
//   a.changeSlot(a.spine4,"KD2-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//  a.changeSlot(a.spine6,"KD2-B",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//   
//  }
//   
// }
