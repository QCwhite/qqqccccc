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
import DXX from "./DXX";
  
@ccclass('D10')
export default class D10 extends DXX {
    target:Character=null;
    TheNumber:string = 'D10';
    Cname:string="樊圈"
FW:number[]=[]

    start () {
        this.target=this.node.getComponent(Character);
        this.target.move3.push(this)
        GeZiManager.AllObstacles.push(this)
            this.changeEP()
    }
/*  Move3(ZB: number, pturn: number): void {
   if (this.target.PPC()) {
    console.log(this.target.getNIGno5(this.target.ZB))
    MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),1,this.target.Pturn,"mofa") 
    if (this.target.qi>0) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
       } else{    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")}
   }
    
  }*/
   Move3(ZB: number, pturn: number): void {

    this.FW=this.target.getNIG(this.target.ZB)
   

   }

   LK(ZB:number){
    GeZiManager.Tcharacter=null
    MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"getOneC")

if (  GeZiManager.Tcharacter&&this.target.HP>0&&GeZiManager.Tcharacter.color!=this.target.color) {
    MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-") 
    MessageCenter.MakeSHMessage("AM",[ZB],2,this.target.Pturn,"Qi-") 
}
    


   }

   JR(ZB:number){
    GeZiManager.Tcharacter=null
    MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"getOneC")

if (  GeZiManager.Tcharacter&&this.target.HP>0&&GeZiManager.Tcharacter.color!=this.target.color) {
        MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-") 
        MessageCenter.MakeSHMessage("AM",[ZB],2,this.target.Pturn,"Qi-") 
    }
        
   }

remove(){
    this.FW=[]
    GeZiManager.shanchu(this.target.move3,this)
    GeZiManager.shanchu(GeZiManager.AllObstacles,this)
}
changeEP(){
  let a=this.node.getComponent(Cspine)
  let c=this.target.Pturn
    a.changeSlot(a.spine2,"KD3-F",this.node.parent.getComponent(Shops).find(2,"D10-F","KD3-F",c),0)
    a.changeSlot(a.spine2,"KD2-B",this.node.parent.getComponent(Shops).find(2,"D10-B","KD2-B",c),0)
      a.changeSlot(a.spine4,"KD3-F",this.node.parent.getComponent(Shops).find(4,"D10-F","KD3-F",c),0)
    a.changeSlot(a.spine4,"KD2-B",this.node.parent.getComponent(Shops).find(4,"D10-B","KD2-B",c),0)
       a.changeSlot(a.spine6,"KD3-F",this.node.parent.getComponent(Shops).find(6,"D10-F","KD3-F",c),0)
    a.changeSlot(a.spine6,"KD2-B",this.node.parent.getComponent(Shops).find(6,"D10-B","KD2-B",c),0)

   }
}
