// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";

@ccclass('C09')
export default class C09 extends CXX {
    target:Character=null;
    TheNumber:string = 'C09';
fWwalkWay=1;
    Cname:string="黄金切尔西"
    start () {
       this.target=this.node.getComponent(Character);
       this.target.walk3.push(this)
       this.target.TNJJ[1]-=2
       this.target.TNJJ[2]+=1
    }
  remove(){
       this.target.TNJJ[1]+=2
       this.target.TNJJ[2]-=1
       GeZiManager.shanchu(this.target.walk3,this)
  }
Walk3(ZB: number): void {

       if (this.target.qi>0) {
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
       } else{    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")}

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
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import CXX from "./CXX";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C09 extends CXX {
//     target:Character=null;
//     TheNumber:string = 'C09';
// fWwalkWay=1;
//     Cname:string="黄金切尔西"
//     start () {
// this.target=this.node.getComponent(Character);
// this.target.walk3.push(this)
// this.target.TNJJ[1]-=2
// this.target.TNJJ[2]+=1
//     }
// 
//   remove(){
//     this.target.TNJJ[1]+=2
//     this.target.TNJJ[2]-=1
//     GeZiManager.shanchu(this.target.walk3,this)
//   }
// 
// 
// Walk3(ZB: number): void {
//     
//    if (this.target.qi>0) {
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
//    } else{    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")}
// 
// }
// 
// }
