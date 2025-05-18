// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;


import Character from "../../BASE/Character";
import turn from "../../game/time/turn";
import GeZiManager from "../../Manager/GeZiManager";

import BXX from "./BXX";
import { SHMessage } from "../../Message/SHMessage";

@ccclass('B10')
export default class  B10 extends BXX {
     TheNumber: string="B10";
        target:Character=null
     Cname:string="鸡利服"
 
 
     start () {
            this.target=this.node.getComponent(Character);
         this.node.getComponent(Character).move3.push(this);
     }

/*  
Move3(ZB: number): void {

 if (GeZiManager.grass.includes(this.node.getComponent(Character).ZB)) {
    if (KHD.PT.includes(this.node.getComponent(Character).Pturn)) {
       this.node.opacity=155
    }else{  this.node.opacity=0}
 }else{this.node.opacity=255}
}
remove(): void {
 this.node.opacity=255
 GeZiManager.shanchu(this.node.getComponent(Character).move3,this);
}
 */  
Behurt2(m: SHMessage, BeHC: any, HC: any): void {
   //被攻击者的面向与攻击者在被攻击者的方位相对 例如：1对9 9对1
  //console.log(this.node.getComponent(Character).getdis(this.node.getComponent(Character).getc(m.from).ZB))
  let a=this.node.getComponent(Character)
 



if(a.getc(m.from)!=null&&GeZiManager.grass.includes(a.ZB)){
   GeZiManager.dm-=1;
 
   }

}

Move3(ZB: number){
   
   if(this.target.DZD&&GeZiManager.grass.includes(this.target.ZB)){
     this.target.DZD=false
    
      }

      if(!this.target.DZD&&!GeZiManager.grass.includes(this.target.ZB)){
         this.target.DZD=true
        
          }
}





remove(): void {
GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this)
}
 }