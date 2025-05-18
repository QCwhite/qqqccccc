// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import ComponentBase from "../../BASE/ComponentBase";
import AnimalManager from "../../Manager/AnimalManager";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import BXX from "./BXX";

@ccclass('B18')
export default class B18 extends BXX {
    target:Character=null;
    TheNumber:string = 'B18';
    Cname:string="黑洞甲"
a:AnimalManager=null
    start () {
       this.target=this.node.getComponent(Character);
       this.target.t3.push(this)
       this.a= this.target.node.parent.getComponent(AnimalManager)
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 1, this.node.getComponent(Character).Pturn, "MaxHP+");
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 1, this.node.getComponent(Character).Pturn, "HP+");
    }
    
    
T3(): void {
       for (let o of this.a.YuanGong) {
       if (o.HP<this.target.HP&&o.Mn<=1) {
       let k=this.target.turn8([o.faceIs(this.target.ZB)])[0]
       MessageCenter.MakeSHMessage("AM",[o.ZB],[k,0.6],this.target.Pturn,"move")
       }
       }
}
remove(){
       GeZiManager.shanchu(this.target.t3,this)
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 1, this.node.getComponent(Character).Pturn, "MaxHP-");
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
// import ComponentBase from "../../BASE/ComponentBase";
// import AnimalManager from "../../Manager/AnimalManager";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B18 extends BXX {
// 
//     target:Character=null;
//     TheNumber:string = 'B18';
//     Cname:string="黑洞甲"
// a:AnimalManager=null
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.t3.push(this)
//        this.a= this.target.node.parent.getComponent(AnimalManager)
//        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 1, this.node.getComponent(Character).Pturn, "MaxHP+");
// MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 1, this.node.getComponent(Character).Pturn, "HP+");
//     }
//     
//     
// T3(): void {
//     for (let o of this.a.YuanGong) {
//         if (o.HP<this.target.HP&&o.Mn<=1) {
//     let k=this.target.turn8([o.faceIs(this.target.ZB)])[0]       
//     MessageCenter.MakeSHMessage("AM",[o.ZB],[k,0.6],this.target.Pturn,"move")
//         }
//     }
// }
// remove(){
//     GeZiManager.shanchu(this.target.t3,this)
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 1, this.node.getComponent(Character).Pturn, "MaxHP-");
// }
// 
// 
// 
// 
// 
// 
// }
