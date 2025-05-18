// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import Character from "./Character";
import ComponentBase from "./ComponentBase";



@ccclass('YSgod')
export default class YSgod extends ComponentBase {
    target:Character=null;
    TheNumber:string = 'D10';
//   // Cname:string="樊圈"
FW:number[]=[0,0,0,0]


start () {
    this.target=this.node.getComponent(Character);
    this.target.move3.push(this)
    this.target.behurt222.push(this)
this.target.attack3.push(this)
}
Behurt222(k:number, arg1: this, arg2: any): void {
if (this.FW[1]&&k>1) {
GeZiManager.ms=Math.floor(k/2)
}


}

remove(){
GeZiManager.shanchu( this.target.behurt222,this) 
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
T1(turn1: number): void {
if (this.FW[2]>0&&turn.round%2==0) { 

    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"move")
}

if (this.FW[0]>0) { 

    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS+")
  
}


}

Attack3(an:number[]) {
//   console.log(an[0])
  // console.log(this.target.faceIs(an[0]))


 

if (this.FW[3]>0) { 
   GeZiManager.Tcharacter=null
      MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOneC")
   
  
      // MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
       MessageCenter.MakeSHMessage("AM",an,[this.target.turn8([this.target.faceIs(an[0])])[0],0.3],this.target.Pturn,"move")
    
      // MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
      
    
      }

}





}
