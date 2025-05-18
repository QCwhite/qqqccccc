// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import realThing from "../../BASE/realThing";
import Cspine from "../../BASE/spineANDgif/Cspine";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import BXX from "./BXX";

@ccclass('B09')
export default class B09 extends BXX {
    target:Character=null;
    TheNumber:string = 'B09';
    Cname:string="亡灵铠"
HD:number=3
    start () {
       this.target=this.node.getComponent(Character);
       this.target.dead2.push(this)
       this.target.behurt3.push(this)

       this.target.wk+=99
       this.target.mk+=99
    }
  Behurt3(n: number,killp:realThing){
       this.HD--
       if (this.HD==0) {
       this.remove()
       }
  }
    
    
    
    Dead2(Pturn:number){
       this.target.LST=-0.5


////  GeZiManager.shanchu(this.node.parent.getComponent(AnimalManager).YuanGong,this)
       this.target.ghost=false;
       GeZiManager.BanMove.push(this.target.ZB)

///变鬼了





    }
T1(turn: number): void {
       this.target.turnBan[2]+=1
       this.target.turnBan[3]+=1
       this.target.turnBan[4]+=1
       this.target.turnBan[5]+=1
}
FH1(n: number): void {
       GeZiManager.shanchu(GeZiManager.BanMove,this.target.ZB)
       this.remove()
}
remove(){
       this.target.changeE("DXX")
       GeZiManager.shanchu(this.target.behurt3,this);
       GeZiManager.shanchu(this.target.dead2,this)
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
// import realThing from "../../BASE/realThing";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B09 extends BXX {
//     target:Character=null;
//     TheNumber:string = 'B09';
//     Cname:string="亡灵铠"
// HD:number=3
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.dead2.push(this)
//         this.target.behurt3.push(this)
// 
//         this.target.wk+=99
//         this.target.mk+=99
//     }
//   Behurt3(n: number,killp:realThing){
//     this.HD--
//     if (this.HD==0) {
//         this.remove()
//     }
//   }
//     
//     
//     
//     Dead2(Pturn:number){
// this.target.LST=-0.5
// 
// 
// //  GeZiManager.shanchu(this.node.parent.getComponent(AnimalManager).YuanGong,this)
// this.target.ghost=false;
// GeZiManager.BanMove.push(this.target.ZB)
// 
// /变鬼了
// 
//  
// 
// 
// 
//     }
// 
// T1(turn: number): void {
//     this.target.turnBan[2]+=1
//     this.target.turnBan[3]+=1
//     this.target.turnBan[4]+=1
//     this.target.turnBan[5]+=1
// }
// 
// FH1(n: number): void {
//     GeZiManager.shanchu(GeZiManager.BanMove,this.target.ZB)
//     this.remove()
// }
// 
// 
// remove(){
//     this.target.changeE("DXX")
//     GeZiManager.shanchu(this.target.behurt3,this);
//     GeZiManager.shanchu(this.target.dead2,this)
// }
// 
// }
