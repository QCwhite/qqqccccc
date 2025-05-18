// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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

@ccclass('D03')
export default class D03 extends DXX {
    target:Character=null;
    TheNumber:string = 'D03';
    Cname:string="怯战蜥蜴"
  
    start () {
       this.target=this.node.getComponent(Character);
       this.target.HPm2.push(this)
      // this.target.Ehun+=1
      this.target.TNJJ[3]+=1
      this.target.TNJJ[2]-=1
    }
  
  
HPM2(n: number,fo:number,wo:number): void {
       if (this.target.HP==this.target.MaxHP) {
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+")
       }
      
}

Behurt222(k:number, arg1: this, arg2: any): void {
      if (k>2) {
       GeZiManager.ms=2-k
      }
       
      


}
remove(){
       GeZiManager.shanchu(this.target.HPm2,this)
       this.target.TNJJ[3]-=1
       this.target.TNJJ[2]+=1
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
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D03 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D03';
//     Cname:string="怯战蜥蜴"
//   
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.HPm2.push(this)
//  
//     }
// 
// 
// 
// 
//   
//   
// HPM2(n: number): void {
//   if (this.target.HP==this.target.MaxHP) {
// MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+") 
//   }
//   MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+") 
// }
// 
// 
// remove(){
//     GeZiManager.shanchu(this.target.HPm2,this)
// }
// }
