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
import DXX from "./DXX";

@ccclass('D11')
export default class D11 extends DXX {
    target:Character=null;
    TheNumber:string = 'D11';
    Cname:string="亡灵骷髅"
j:number=0


start () {
    this.target=this.node.getComponent(Character);
    GeZiManager.P1.dead2.push(this);
    GeZiManager.P2.dead2.push(this);
    GeZiManager.P3.dead2.push(this);
    GeZiManager.P4.dead2.push(this);
    GeZiManager.P5.dead2.push(this);
    GeZiManager.P6.dead2.push(this);
    this.changeEP()
    
}




Dead2(dead: number): void {
if (dead!=this.target.Pturn) {
this.j++
let o=1
if (this.color=="Red") {
  o=1+GeZiManager.Rhun
}else{  o=1+GeZiManager.Bhun}

MessageCenter.MakeSHMessage("AM",[this.target.ZB],o,this.target.Pturn,"Qi+")
MessageCenter.MakeSHMessage("AM",[this.target.ZB],o,this.target.Pturn,"HP+")
MessageCenter.MakeSHMessage("AM",[this.target.ZB],o,this.target.Pturn,"TN+")
}

}
remove(){
GeZiManager.shanchu(GeZiManager.P1.dead2,this)
GeZiManager.shanchu(GeZiManager.P2.dead2,this)
GeZiManager.shanchu(GeZiManager.P3.dead2,this)
GeZiManager.shanchu(GeZiManager.P5.dead2,this)
GeZiManager.shanchu(GeZiManager.P4.dead2,this)
GeZiManager.shanchu(GeZiManager.P6.dead2,this)
// //   MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.j,this.target.Pturn,"Qi-")
//  //  MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.j,this.target.Pturn,"HP-")
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
// import DXX from "./DXX";
// 
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D11 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D11';
//     Cname:string="亡灵骷髅"
// j:number=0
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         GeZiManager.P1.dead2.push(this);
//         GeZiManager.P2.dead2.push(this);
//         GeZiManager.P3.dead2.push(this);
//         GeZiManager.P4.dead2.push(this);
//         GeZiManager.P5.dead2.push(this);
//         GeZiManager.P6.dead2.push(this);
// 
//         
//     }
//  
// 
// 
// 
//   Dead2(dead: number): void {
// if (dead!=this.target.Pturn) {
//     this.j++
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
// }
//     
//   }
// remove(){
//     GeZiManager.shanchu(GeZiManager.P1.dead2,this)
//     GeZiManager.shanchu(GeZiManager.P2.dead2,this)
//     GeZiManager.shanchu(GeZiManager.P3.dead2,this)
//     GeZiManager.shanchu(GeZiManager.P5.dead2,this)
//     GeZiManager.shanchu(GeZiManager.P4.dead2,this)
//     GeZiManager.shanchu(GeZiManager.P6.dead2,this)
//  //   MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.j,this.target.Pturn,"Qi-")
//   //  MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.j,this.target.Pturn,"HP-")
// }
// }
