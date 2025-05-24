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
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import CXX from "./CXX";

@ccclass('C10')
export default class C10 extends CXX {
    target:Character=null;
    TheNumber:string = 'C10';
    Cname:string="滑轮"
    start () {
       this.target=this.node.getComponent(Character);
       this.target.t1.push(this);
       this.target.t3.push(this)
       
   this.changeEP()
    }
  remove(){

       GeZiManager.shanchu(this.target.t1,this)
       GeZiManager.shanchu(this.target.t3,this)
  }
T1(turn: number): void {
      // this.target.turnBan[1]+=1
}
T3(): void {
       console.log(this.target.DiXing)

       if (this.target.LST!=-1&&this.target.DiXing!="water"&&this.target.qi==0) {
       this.target.move(this.target.faceTo,1)
       this.target.moveto(0.8,this.target.ZB)
       }
}
    changeEP(){
       let a=this.node.getComponent(Cspine)

       let c=this.target.Pturn
       a.changeSlot(a.spine2,"KC-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KC-F",c),0)
       a.changeSlot(a.spine6,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KC-F",c),4)
       a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KC-F",c),6)
     //  a.changeSlot(a.spine8,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
       a.changeSlot(a.spine2,"KC-B",this.node.parent.getComponent(Shops).find(2,"C10-B","KC-B",c),2)
       a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,"C10-B","KC-B",c),2)
       a.changeSlot(a.spine6,"KC-B",this.node.parent.getComponent(Shops).find(6,"C10-B","KC-B",c),2)
       //a.changeSlot(a.spine8,"KC-F",this.node.parent.getComponent(Shops).find(2,"C10-B",0),2)
//               a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//               a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//                a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
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
// import Character from "../../BASE/Character";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import Shops from "../../UIS/shop/shops";
// import CXX from "./CXX";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C10 extends CXX {
//     target:Character=null;
//     TheNumber:string = 'C10';
// 
//     Cname:string="滑轮"
//     start () {
// this.target=this.node.getComponent(Character);
// this.target.t1.push(this);
// this.target.t3.push(this)
// 
//     }
// 
//   remove(){
//   
//     GeZiManager.shanchu(this.target.t1,this)
//     GeZiManager.shanchu(this.target.t3,this)
//   }
// 
// 
// T1(turn: number): void {
//     this.target.turnBan[1]+=1
// }
// 
// 
// 
// T3(): void {
//    console.log(this.target.DiXing)
// 
//     if (this.target.LST!=-1&&this.target.DiXing!="water") {
//         this.target.Walk(false);
//     }
// }
// 
// 
// 
//     changeEP(){
//                 let a=this.node.getComponent(Cspine)
//                 
//                   a.changeSlot(a.spine2,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine6,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine8,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine2,"KC-F",this.node.parent.getComponent(Shops).find(2,"C10-B"))
//                   a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(2,"C10-B"))
//                   a.changeSlot(a.spine6,"KC-F",this.node.parent.getComponent(Shops).find(2,"C10-B"))
//                   a.changeSlot(a.spine8,"KC-F",this.node.parent.getComponent(Shops).find(2,"C10-B"))
//                a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//                a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//                 a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                 a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                 a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                 a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                 }
// }
