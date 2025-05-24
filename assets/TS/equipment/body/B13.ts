// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../../Manager/GeZiManager";
import { SHMessage } from "../../Message/SHMessage";
import MessageCenter from "../../Message/MessageCenter";
import weapon from "../weapon/weapon";
import Character from "../../BASE/Character";
import BXX from "./BXX";

@ccclass('B13')
export default class B13 extends BXX {
    target:Character=null;
    TheNumber:string = 'B13';
    Cname:string="水晶甲"
    start () {
        this.target=this.node.getComponent(Character);
        this.target.behurt2.push(this)
           this.changeEP()
let g=0
if (this.target.shose.TheNumber=="C11") {
    g++
}
if (this.target.weapon.TheNumber=="A143") {
    g++
}
if (this.target.accessory.TheNumber=="D02") {
    g++
}

MessageCenter.MakeSHMessage("AM",[this.target.ZB],g,this.target.Pturn,"Qi+")
    }
    Behurt2(m:SHMessage){
        if(this.target.qi>=3){MessageCenter.MakeSHMessage("AM",[this.target.ZB],3,this.target.Pturn,"Qi-")
        GeZiManager.ms=-99
        }
    }
remove(){
        GeZiManager.shanchu(this.target.behurt2,this)
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
// import GeZiManager from "../../Manager/GeZiManager";
// import { SHMessage } from "../../Message/SHMessage";
// import MessageCenter from "../../Message/MessageCenter";
// 
// import weapon from "../weapon/weapon";
// 
// import Character from "../../BASE/Character";
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B13 extends BXX {
// 
//     target:Character=null;
//     TheNumber:string = 'B13';
//     Cname:string="水晶甲"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.behurt2.push(this)
//     }
//     Behurt2(m:SHMessage){
//         if(this.target.qi>=2){MessageCenter.MakeSHMessage("AM",[this.target.ZB],3,this.target.Pturn,"Qi-")
//         GeZiManager.ms=-99
//     }
//     }
// remove(){
//     GeZiManager.shanchu(this.target.behurt2,this)
// }
// 
// }
