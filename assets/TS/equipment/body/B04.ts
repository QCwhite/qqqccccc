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
import Shops from "../../UIS/shop/shops";
import BXX from "./BXX";
import { find } from 'cc';
import { Sprite } from 'cc';

@ccclass('B04')
export default class B04 extends BXX {
    target:Character=null;
    TheNumber:string = 'B04';
    Cname:string="鬼王的新衣"
    N:number=0

    start () {
        this.target=this.node.getComponent(Character);

      
       // this.target.ghost=true
       turn.Roo.push(this)
       this.roundPass()
           this.changeEP()
    }

 roundPass(): void {
   if (turn.DorN=="day") {
  //this.remove()
       this.n()
   }else{this.d()}



 }

remove(){

GeZiManager.shanchu(turn.Roo,this)
let a=this.node.getComponent(Cspine)


if (turn.DorN=="day") {
    
}else{

this.d()

}


a.changeSlot(a.spine2,"KB-F",null,13)
a.changeSlot(a.spine2,"KB-B",null,13)
a.changeSlot(a.spine6,"KB-F",null,13)
a.changeSlot(a.spine6,"KB-B",null,13)
a.changeSlot(a.spine4,"KB-F",null,13)
a.changeSlot(a.spine4,"KB-B",null,13)





    }



n(){
    this.target.Mjia(-1)
    this.target.DZD=false;
    this.target.gui=true
    this.target.mk-=1;
    this.target.wk+=99;
    let a=this.node.getComponent(Cspine)
           let c=this.target.Pturn       
    a.changeSlot(a.spine2,"KB-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KB-F",c),0)
    a.changeSlot(a.spine2,"KB-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-B","KB-B",c),1)
    a.changeSlot(a.spine6,"KB-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KB-F",c),2)
    a.changeSlot(a.spine6,"KB-B",this.node.parent.getComponent(Shops).find(6,this.TheNumber+"-B","KB-B",c),3)
    a.changeSlot(a.spine4,"KB-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KB-F",c),4)
    a.changeSlot(a.spine4,"KB-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-B","KB-B",c),5)


}



d(){

    this.target.Mjia(+1)
if (   this.target.DZD) {
    this.target.DZD=true;
}
//this.target.ghost=false
        this.target.mk+=1;
        this.target.gui=false
        this.target.wk-=99;





}


 changeEP(){
          
            }

}
