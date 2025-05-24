// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import Cspine from "../../BASE/spineANDgif/Cspine";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";

@ccclass('D04')
export default class D04 extends DXX {
    target:Character=null;
    TheNumber:string = 'D04';
    Cname:string="头戴式丝袜"
    start () {
        this.target=this.node.getComponent(Character);
        this.target.attack3.push(this)
            this.changeEP()
    }
    Attack3(an: number[]): void {
        MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"Qi-")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
    }
remove(){
        GeZiManager.shanchu(this.target.attack3,this)
}
changeEP(){
        let a=this.node.getComponent(Cspine)

            a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KD1",this.target.Pturn),0)
    
            a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KD1",this.target.Pturn),0)
            a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KD1",this.target.Pturn),0)

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
// 
// import Character from "../../BASE/Character";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import Shops from "../../UIS/shop/shops";
// 
// 
// import DXX from "./DXX";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D04 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D04';
//     Cname:string="头戴式丝袜"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.attack3.push(this)
//     }
//     Attack3(an: number[]): void {
//        MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"Qi-") 
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+") 
//     }
// 
// remove(){
//     GeZiManager.shanchu(this.target.attack3,this)
// }
// changeEP(){
// let a=this.node.getComponent(Cspine)
// 
//   a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//   a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//  a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//   
//  }
// 
// 
// 
// }
