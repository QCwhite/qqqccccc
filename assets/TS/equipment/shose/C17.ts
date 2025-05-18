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

@ccclass('C17')
export default class C17 extends CXX {
    target:Character=null;
    TheNumber:string ='C17';
           Cname:string="冲锋靴"
           J:number=0;
start () {
       this.target=this.node.getComponent(Character);
       this.target.walk3.push(this)
       this.target.t3.push(this)
       this.target.Fus(-3)

}
Walk3(ZB: number) {
       this.target.sh++
       this.J++

}
remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).walk3,this)
       GeZiManager.shanchu(this.node.getComponent(Character).t3,this)
       this.target.BFUs(-3)
}
T3(): void {
//// let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
////for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){

// // MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")

//// }


////}

       this.target.sh-=this.J
       if (this.J!=0) {
       this.J=0
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
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C17 extends CXX {
// 
//     target:Character=null;
//     TheNumber:string ='C17';
//            Cname:string="冲锋靴"
//            J:number=0;
// start () {
//     this.target=this.node.getComponent(Character);
//     this.target.walk3.push(this)
//     this.target.t3.push(this)
//     
// }
// Walk3(ZB: number) {
//   this.target.sh++
//   this.J++
// 
// }
// remove(): void {
//   GeZiManager.shanchu(this.node.getComponent(Character).walk3,this) 
// 
// }
// 
// 
// 
// 
// 
// T3(): void {
// // let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
// //for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
// 
// MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
// 
// // }
// 
// 
// //}
// 
// this.target.sh-=this.J
// if (this.J!=0) {
// this.J=0
// }
// }
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
// 
// }
