// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";

@ccclass('C05')
export default class C05 extends CXX {
    target:Character=null;
    TheNumber:string = 'C05';
           Cname:string=""
    
    
    start () {
        this.target=this.node.parent.getComponent(Character);
        this.target.t1.push(this);
        this.target.move3.push(this);
        this.target.tt="rock"
       // this.target.M=0;
    }
Move3(ZB: number): void {
for(let a of GeZiManager.DL){if(a[0]==ZB){
   
    GeZiManager.free-=2;
    this.remove();
    this.target.tt="rock"
 //  this.target.M=0;
    this.node.destroy();}}
}
    T1(){

        MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"turnBan")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],0,this.target.Pturn,"turn+")
    }

    remove(){
        GeZiManager.shanchu(this.target.turn1,this)
        GeZiManager.shanchu(this.target.move3,this)
        GeZiManager.shanchu(this.target.t1,this)
        GeZiManager.shanchu(this.target.t1,this)
        this.target.tt="rock"
     //   this.target.M=0;

     }
}
