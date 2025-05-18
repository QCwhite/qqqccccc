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
import { SHMessage } from "../../Message/SHMessage";
import DXX from "./DXX";
import HP from '../../UIS/heart';

@ccclass('D09')
export default class D09 extends DXX {
    target:Character=null;
    TheNumber:string = 'D09';
    Cname:string="KGT挂饰";
    start () {
        this.target=this.node.getComponent(Character);
        this.target.HPm2.push(this)
        this.target.qi2.push(this)

    }
   
    Qi2(n: number, pn: number,m:SHMessage): void {
        if (m.from!=this.target.Pturn&&n>0) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
        }

//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+") 

    }
    HPM2(n: number,fo:number,wo:number): void {
      if (wo!=this.target.Pturn&&n>0) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
      }

    }
remove(){
        GeZiManager.shanchu(this.target.qi2,this)
        GeZiManager.shanchu( this.target.HPm2,this)

}

TNN(n: number): void {
   if (this.target.TN<10) {
    this.target.TN+=1
   }
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
// import { SHMessage } from "../../Message/SHMessage";
// 
// import DXX from "./DXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D09 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D09';
//     Cname:string="KGT挂饰";
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//    
//         this.target.qi2.push(this)
//       
//     }
//    
//     Qi2(n: number, pn: number,m:SHMessage): void {
//     if (m.from!=this.target.Pturn) {
//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+") 
//     }
//      
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+") 
//      
//     }
// 
//     HPM2(n: number): void {
//       if (this.target.HP<this.target.MaxHP) {
//          this.target.HP+=1
//       }
//      
//     }
// 
// 
// remove(){
//   GeZiManager.shanchu(this.target.qi2,this)
// 
// }
// 
// }
