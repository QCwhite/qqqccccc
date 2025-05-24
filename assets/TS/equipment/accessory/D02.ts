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
import { SHMessage } from "../../Message/SHMessage";
import DXX from "./DXX";

@ccclass('D02')
export default class D02 extends DXX {
    target:Character=null;
    TheNumber:string = 'D02';
    Cname:string="水晶之嘴";
in:Boolean=false
    start () {
       this.target=this.node.getComponent(Character);
       this.target.qi2.push(this)
      
    this.changeEP()
let g=0
if (this.target.shose.TheNumber=="C11") {
    g++
}
if (this.target.weapon.TheNumber=="A143") {
    g++
}
if (this.target.body.TheNumber=="B13") {
    g++
}

MessageCenter.MakeSHMessage("AM",[this.target.ZB],g,this.target.Pturn,"Qi+")
    }
  
    Qi2(n: number, pn: number,m:SHMessage): void {
       if (this.target.qi==0) {
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")

       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
       }
    }
remove(){
       GeZiManager.shanchu(this.target.qi2,this)

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
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import { SHMessage } from "../../Message/SHMessage";
// import DXX from "./DXX";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D02 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D02';
//     Cname:string="水晶之嘴";
// in:Boolean=false
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.qi2.push(this)
// 
//        
//     }
//   
//     Qi2(n: number, pn: number,m:SHMessage): void {
//       if (this.target.qi==0) {
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+") 
//         
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+") 
//       }
//     }
// 
// remove(){
//     GeZiManager.shanchu(this.target.qi2,this)
// 
// }
// 
// }
