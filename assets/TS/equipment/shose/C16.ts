// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";

@ccclass('C16')
export default class C16 extends CXX {
    target:Character=null;
    TheNumber:string ='C16';
    Cname:string="震地靴"
start () {
        this.target=this.node.getComponent(Character);
        this.target.walk3.push(this)
   this.changeEP()
}
Walk3(ZB: number): void {

        let o=this.target.getNIGno5(ZB);
        for(let j of o){ if(!this.target.fly){GeZiManager.DLBZ(j,this.ZB,false)}}
        for(let j of o){ GeZiManager.getQin(j,this.target.ZB)}


        MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),[1,"DZ"],this.target.Pturn,"mofaT")




}
remove(): void {
        GeZiManager.shanchu(this.node.getComponent(Character).walk3,this)

}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C16 extends CXX {
//     target:Character=null;
//     TheNumber:string ='C16';
//     Cname:string="震地靴"
// start () {
//     this.target=this.node.getComponent(Character);
//     this.target.walk3.push(this)
//     
// }
// 
// 
// 
// Walk3(ZB: number): void {
// 
// let o=this.target.getNIGno5(ZB);
// for(let j of o){ GeZiManager.DLBZ(j,ZB)}
// for(let j of o){ GeZiManager.getQin(j,this.target.ZB)}
// 
// 
//    MessageCenter.MakeSHMessage("AM",[this.target.getNIGno5(this.target.ZB),"DZ"],1,this.target.Pturn,"mofaT") 
//  
//   
//    
//  
// }
// remove(): void {
//   GeZiManager.shanchu(this.node.getComponent(Character).walk3,this) 
// 
// }
// 
// }
