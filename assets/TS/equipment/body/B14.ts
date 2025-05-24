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
import Character from "../../BASE/Character";
import BXX from "./BXX";

@ccclass('B14')
export default class B14 extends BXX {
    target:Character=null;
    TheNumber:string = 'B14';
    Cname:string="泰坦重甲"
    start () {
        this.target=this.node.getComponent(Character);
        this.target.t3.push(this)
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
           this.changeEP()
    }
    
    
   T3(){
    
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
    }
remove(){
        GeZiManager.shanchu(this.target.t3,this)
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")
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
// import GeZiManager from "../../Manager/GeZiManager";
// import { SHMessage } from "../../Message/SHMessage";
// import MessageCenter from "../../Message/MessageCenter";
// 
// 
// import Character from "../../BASE/Character";
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B14 extends BXX {
// 
//     target:Character=null;
//     TheNumber:string = 'B14';
//     Cname:string="泰坦重甲"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.t3.push(this)
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+")
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
//     }
//     
//     
//    T3(){
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
//     }
// remove(){
//     GeZiManager.shanchu(this.target.t3,this)
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")
// }
// 
// 
// }
