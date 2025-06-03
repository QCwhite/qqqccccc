// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, SpriteFrame } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../../TS/BASE/realThing";
import  gif1  from "../../TS/BASE/spineANDgif/gif";
import DL from "../../TS/Ditu/des/DL";
import Fireball from "../../TS/Ditu/des/fireball";
import turn from "../../TS/game/time/turn";
import GeZiManager from "../../TS/Manager/GeZiManager";
import { Message } from "../../TS/Message/Message";
import MessageCenter from "../../TS/Message/MessageCenter";

@ccclass('TG')
export default class TG extends realThing {
   N:string=null
    
   @property(SpriteFrame)
   EQ:SpriteFrame | null=null;
   @property(SpriteFrame)
   TP:SpriteFrame | null=null;
   @property(SpriteFrame)
   sWater:SpriteFrame | null=null
   @property(SpriteFrame)
  Hun:SpriteFrame | null=null
    start() {
     turn.Roo.push(this);

    }
k(){ switch (this.N) {
     case "EQ":this.node.getComponent(gif1).spriteFrame=this.EQ

     break;
     case "sWater":this.node.getComponent(gif1).spriteFrame=this.sWater

     break;
     case "Hun":this.node.getComponent(gif1).spriteFrame=this.Hun

     break;

   
     default:this.node.getComponent(gif1).spriteFrame=this.TP
     break;
  }}
  
    BZ() {
     MessageCenter.MakeSHMessage("AM",[this.ZB],this.N,-1,"TG")
     setTimeout(()=>{GeZiManager.shanchu(turn.Roo,this)


          this.destroy()
          this.node.destroy()
     },300)

   
   
    }
roundPass(): void {
     this.BZ()
}
ReceiveMessage(message: Message): void {

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
// import realThing from "../../TS/BASE/realThing";
// import { gif } from "../../TS/BASE/spineANDgif/gif";
// import DL from "../../TS/Ditu/des/DL";
// import Fireball from "../../TS/Ditu/des/fireball";
// import turn from "../../TS/game/time/turn";
// import GeZiManager from "../../TS/Manager/GeZiManager";
// import { Message } from "../../TS/Message/Message";
// import MessageCenter from "../../TS/Message/MessageCenter";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class TG extends realThing {
// 
//    N:string=null
//     
//    @property(cc.SpriteFrame)
//    EQ:cc.SpriteFrame=null;
//    @property(cc.SpriteFrame)
//    sWater:cc.SpriteFrame=null
//    @property(cc.SpriteFrame)
//   Hun:cc.SpriteFrame=null
// 
//     start() {
//         turn.Roo.push(this);
//      
//     }
// 
// k(){ switch (this.N) {
//     case "EQ":this.node.getComponent(gif).spriteFrame=this.EQ
//         
//         break;
//         case "sWater":this.node.getComponent(gif).spriteFrame=this.sWater
//         
//         break;
//         case "Hun":this.node.getComponent(gif).spriteFrame=this.Hun
//         
//         break;
//     default:this.node.getComponent(gif).spriteFrame=null
//         break;
//   }}
// 
//   
//     BZ() {
//         MessageCenter.MakeSHMessage("AM",[this.ZB],this.N,-1,"TG")
// setTimeout(()=>{GeZiManager.shanchu(turn.Roo,this)},300)
// 
// 
// this.node.destroy()
//     }
// 
// 
// roundPass(): void {
//     this.BZ()
// }
// 
// 
// 
// 
// ReceiveMessage(message: Message): void {
//     
// }
// 
// 
// }
