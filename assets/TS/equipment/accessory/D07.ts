// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import realThing from "../../BASE/realThing";
import Cspine from "../../BASE/spineANDgif/Cspine";
import turn from "../../game/time/turn";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";
//     */


@ccclass('D07')
export default class D07 extends DXX {
  target:Character=null;
    TheNumber:string = 'D07';
    Cname:string="小丑鼻子"
k:number=0
c:number=3
    start () {
        this.target=this.node.getComponent(Character);
       turn.Roo.push(this)
       if (this.target.tt=="wangling") {
        this.c=2
       }
    }
 /* Behurt3(n: number,killp:realThing){
    
    if (n>this.target.getdis(killp.ZB)) {
       GeZiManager.dm-=1
     }
  }
    */
roundPass(): void {
  this.k++
  if (this.k==this.c) {
    this.k=0;
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+") 
  }
}
remove(){
    GeZiManager.shanchu( turn.Roo,this)
    let a=this.node.getComponent(Cspine)
    a.changeSlot(a.spine2,"KD1-F",null,13)
  a.changeSlot(a.spine4,"KD1-F",null,13)
 a.changeSlot(a.spine6,"KD1-F",null,13)
}


changeEP(){
let a=this.node.getComponent(Cspine)

  a.changeSlot(a.spine2,"KD1-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
  a.changeSlot(a.spine4,"KD1-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,2),2)
 a.changeSlot(a.spine6,"KD1-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,4),4)
  
 }
  
}