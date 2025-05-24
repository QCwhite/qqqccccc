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
import DXX from "./DXX";

@ccclass('D05')
export default class D05 extends DXX {
    target:Character=null;
    TheNumber:string = 'D05';
    Cname:string="川普的领带"
    start () {
       this.target=this.node.getComponent(Character);
         MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.target.D05,this.target.Pturn,"MaxHP+")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.target.D05,this.target.Pturn,"HP+")
            this.changeEP()
    }
   
remove(){
//  //MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-") 
}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// 
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// 
// 
// import DXX from "./DXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D05 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D05';
//     Cname:string="川普的领带"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+") 
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+") 
//     }
//    
// 
// remove(){
//   //MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-") 
// }
// }
