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
import BXX from "./BXX";
// //刑天铠甲

@ccclass('B11')
export default class B11 extends BXX {
//    // LIFE-CYCLE CALLBACKS:
target:Character=null;
TheNumber:string = 'B11';
Cname:string="刑天铠甲"
// onLoad () {}

start () {
    //生命上限+1
     this.target=this.node.getComponent(Character);
    MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 2, this.node.getComponent(Character).Pturn, "MaxHP+");
    MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 2, this.node.getComponent(Character).Pturn, "HP+");
    this.node.getComponent(Character).dead1.push(this);
       this.changeEP()
}
Dead1(): void {
//LST改成12
this.node.getComponent(Character).LST=12;
this.node.getComponent(Character).bs=false;
setTimeout(()=>{   this.node.getComponent(Cspine).FH()},100)
}
remove(): void {
    MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB] , 2, this.node.getComponent(Character).Pturn, "MaxHP-");
GeZiManager.shanchu( this.node.getComponent(Character).dead1,this)
}
}
