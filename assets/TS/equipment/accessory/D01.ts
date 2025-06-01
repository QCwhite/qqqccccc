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
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import DXX from "./DXX";

@ccclass('D01')
export default class D01 extends DXX {

target:Character=null;
TheNumber:string = 'D01';
Cname:string="十字架";
in:Boolean=false

start () {
    this.target=this.node.getComponent(Character);
  this.color=this.target.color
    this.target.walk2.push(this)
   // this.target.qi3.push(this)
    this.target.HPm2.push(this)
   // this.Qi3()
   this.target.behurt2.push(this)
       this.changeEP()
}

HPM2(n: number,fo:number,wo:number): void {
let o=[]
if (n>0) {
  o= GeZiManager.onY(this.target.y)
}
for(let j of o){
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"getOne")  
if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter!=this.target&&GeZiManager.Tcharacter.accessory&&GeZiManager.Tcharacter.accessory.TheNumber!="D01"&&GeZiManager.Tcharacter.color==this.target.color&&(GeZiManager.Tcharacter.HP==this.target.HP||GeZiManager.Tcharacter.qi==this.target.qi)&&GeZiManager.Tcharacter.HP!=GeZiManager.Tcharacter.MaxHP) {
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"HP+")  
//console.log(GeZiManager.Tcharacter) 
}


}
if (n>0) {
o= GeZiManager.onX(this.target.x)
}
for(let j of o){
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"getOne")  
if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter!=this.target&&GeZiManager.Tcharacter.accessory.TheNumber!="D01"&&GeZiManager.Tcharacter.color==this.target.color&&(GeZiManager.Tcharacter.HP==this.target.HP||GeZiManager.Tcharacter.qi==this.target.qi)&&GeZiManager.Tcharacter.HP!=GeZiManager.Tcharacter.MaxHP) {
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"HP+") 
//console.log(GeZiManager.Tcharacter)  
}


}

}



Walk2(ZB: number): void {
// if (this.target.PPC()) {


let o=[]

  o= GeZiManager.onY(this.target.y)
//console.log(o) 
for(let j of o){

MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"getOne")  
//console.log(GeZiManager.Tcharacter) 
if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter!=this.target&&GeZiManager.Tcharacter.color==this.target.color&&(GeZiManager.Tcharacter.HP==this.target.HP||GeZiManager.Tcharacter.qi==this.target.qi)) {
//console.log(j)
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"walk")  
}


}

o= GeZiManager.onX(this.target.x)

for(let j of o){
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"getOne")  
if (GeZiManager.Tcharacter&&GeZiManager.Tcharacter!=this.target&&GeZiManager.Tcharacter.color==this.target.color&&(GeZiManager.Tcharacter.HP==this.target.HP||GeZiManager.Tcharacter.qi==this.target.qi)) {
//console.log(j)
MessageCenter.MakeSHMessage("AM",[j],1,this.target.Pturn,"walk")  
}


} 
//}
}

remove(){

GeZiManager.shanchu(this.target.walk2,this)
// GeZiManager.shanchu(this.target.qi3,this)
GeZiManager.shanchu(this.target.HPm2,this) 
}


Behurt2(message: SHMessage, arg1: Character, arg2: realThing): void {
  
}







}
