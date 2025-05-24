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
import { SHMessage } from "../../Message/SHMessage";
import Shops from "../../UIS/shop/shops";
import BXX from "./BXX";

@ccclass('B01')
export default class B01 extends BXX {
    target:Character=null;
    TheNumber:string ='B01';
    Cname:string="盔甲"
    start () {
        this.target=this.node.getComponent(Character);
        this.target.behurt222.push(this)
    this.changeEP()
    }
Behurt222(k:number, arg1: this, arg2: any): void {
      
        GeZiManager.ms-=2
      
this.remove()

}
remove(){
        GeZiManager.shanchu( this.target.behurt222,this)
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
// 
// import Character from "../../BASE/Character";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import GeZiManager from "../../Manager/GeZiManager";
// import { SHMessage } from "../../Message/SHMessage";
// import Shops from "../../UIS/shop/shops";
// 
// 
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B01 extends BXX {
// 
//     target:Character=null;
//     TheNumber:string = 'B01';
//     Cname:string="盔甲"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//      this.target.behurt222.push(this)
//    
//     }
// Behurt222(k:number, arg1: this, arg2: any): void {
// if (k>2) {
//     GeZiManager.ms=2-k
// }
// 
// 
// }
// 
// remove(){
//    GeZiManager.shanchu( this.target.behurt222,this)
// }
//   changeEP(){
//         let a=this.node.getComponent(Cspine)
//         
//           a.changeSlot(a.spine2,"KB-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//          
//           a.changeSlot(a.spine6,"KB-F",this.node.parent.getComponent(Shops).find(6,"B01-46"))
// 
//           a.changeSlot(a.spine4,"KB-F",this.node.parent.getComponent(Shops).find(4,"B01-46"))
//          }
// 
// 
// }
