// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import state from "../../game/time/state";
import GeZiManager from "../../Manager/GeZiManager";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";

@ccclass('C03')
export default class C03 extends CXX {
  target:Character=null;
  TheNumber:string = 'C03';
fWwalkWay=1;
  Cname:string="青蛙腿"

  start () {

    this.target=this.node.getComponent(Character);
    //this.target.walk2.push(this);
    this.target.walk1.push(this);
    this.fWwalkWay=this.target.walkWay;
    this.target.walkWay=0;
    this.target.MwalkWay=0
}

Walk1(): void {
    if (this.target.PPC()) {
    GeZiManager.qing();
    MessageCenter.MakeMessage("UIManager", "change", -1);
   state.ST=1;
   let AF = [2]
let i = 0;
switch (this.node.getComponent(Character).faceTo) {
  case 6: i = 1;
    break;
  case 8: i = 2;
    break;
  case 4: i = 3;
    break;
}


for (let n = 1; n <= i; n++) {
  this.node.getComponent(Character).turn6(AF);

}
let an: number[] = [];
for (let mannger of AF) {
  an.push(this.node.getComponent(Character).findGe(mannger, 1))
  an.push(this.node.getComponent(Character).findGe(mannger, 2));

}

GeZiManager.GeZis = [].concat(an);

let c=new Message("",GeZiManager.GeZis,1);
for (let m of GeZiManager.YuanGong) {


 
        
        
            m.red();
        
           m.ReceiveMessage(c);
      
if(GeZiManager.BanMove.includes(m.ZB)){
m.out();}

}

    }}

remove(){
  this.target.MwalkWay=this.fWwalkWay;
  this.target.walkWay=this.fWwalkWay;
  GeZiManager.shanchu(this.target.walk1,this)
 // this.target.TNJJ[1]-=1
}




}
