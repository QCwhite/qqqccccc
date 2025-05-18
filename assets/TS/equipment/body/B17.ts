// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import BXX from "./BXX";

@ccclass('B17')
export default class B17 extends BXX {
    target:Character=null;
    TheNumber:string = 'B17';
    Cname:string="诡异之甲"
    start () {
        this.target=this.node.getComponent(Character);
        this.target.t1.push(this)
        this.target.wk+=2;
        this.target.mk+=2;
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
    }
    
    
   T1(){if (this.target.qi>=2) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-")
        }else{   MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")}

    }
remove(){
        GeZiManager.shanchu(this.target.t1,this)
        this.target.wk-=2;
        this.target.mk-=2;
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
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B17 extends BXX {
//     target:Character=null;
//     TheNumber:string = 'B17';
//     Cname:string="诡异之甲"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.t1.push(this)
//         this.target.wk+=2;
//         this.target.mk+=2;
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+")
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
//     }
//     
//     
//    T1(){if (this.target.qi>=2) {
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-")
//    }else{   MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")}
//      
//     }
// remove(){
//     GeZiManager.shanchu(this.target.t1,this)
//     this.target.wk+=2;
//     this.target.mk+=2;
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")
// }
// }
