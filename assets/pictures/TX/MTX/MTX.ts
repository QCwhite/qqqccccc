// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../../TS/BASE/ComponentBase";

import { Message } from "../../../TS/Message/Message";
import { gif1 } from 'db://assets/TS/BASE/spineANDgif/gif';

@ccclass('MTX')
export default class MTX extends ComponentBase {
@property(gif1)
    XUQI:gif1=null;
    @property(gif1)
    CURE:gif1=null;
    @property(gif1)
    ICE:gif1=null;
    @property(gif1)
    TP:gif1=null;
    @property(gif1)
    THUNDER:gif1=null;
    @property(gif1)
    water:gif1=null;
    @property(gif1)
    Dun:gif1=null;
    @property(gif1)
   turn:gif1=null;
    @property(gif1)
    BA:gif1=null;
    @property(gif1)
   TN:gif1=null;
   @property(gif1)
   FuG:gif1=null;
onLoad(): void {
       this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
       this.CURE.timeArray=[65,65,60,65,65,65,80,98,47,55,60,90,90,90,90]
       this.ICE.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]

// //this.THUNDER.timeArray=[60,40,35,35,70,40,65,98,47,55,60,90,90,90,90]
//  this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
}
playFrameAnimation1(n:string) {
       switch (n) {
       case "xuqi":this.XUQI.moveToNextFrame(0,15,1)

       break;
       case "cure":this.CURE.moveToNextFrame(0,7,1)

       break;
       case "ice":this.ICE.moveToNextFrame(0,6,0)

       break;
       case "iceN":this.ICE.moveTolastFrame(6,0,1);//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "thunder":this.THUNDER.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "Dun":this.Dun.moveToNextFrame(0,4,1)

       break;
       case "BA":this.BA.moveToNextFrame(0,7,1)

       break;
       case "turn4":this.node.setScale(-1,1,1);this.turn.moveToNextFrame(0,4,1);

       break;
       case "turn6":this.node.setScale(-1,1,1);this.turn.moveToNextFrame(0,3,1);

       break
       case "water":this.fadeINAndA(this.water.node.parent,500);this.water.kk=true;this.water.loopF(0,3,0);//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "waterE":this.fadeOutAndDisappear(this.water.node.parent,500);//this.water.loopF(0,4,0);//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "TN":this.TN.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       default:
       break;
       }
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
// import ComponentBase from "../../../TS/BASE/ComponentBase";
// import { gif1 } from "../../../TS/BASE/spineANDgif1/gif1";
// import { Message } from "../../../TS/Message/Message";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class MTX extends ComponentBase {
// @property(gif1)
//     XUQI:gif1=null;
//     @property(gif1)
//     CURE:gif1=null;
//     @property(gif1)
//     ICE:gif1=null;
//     @property(gif1)
//     TP:gif1=null;
//     @property(gif1)
//     THUNDER:gif1=null;
//     @property(gif1)
//     water:gif1=null;
//     @property(gif1)
//     Dun:gif1=null;
//     @property(gif1)
//    turn:gif1=null;
//     @property(gif1)
//     BA:gif1=null;
//     @property(gif1)
//    TN:gif1=null;
//    @property(gif1)
//    FuG:gif1=null;
// onLoad(): void {
//     this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
//     this.CURE.timeArray=[65,65,60,65,65,65,80,98,47,55,60,90,90,90,90]
//     this.ICE.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
//   
//this.THUNDER.timeArray=[60,40,35,35,70,40,65,98,47,55,60,90,90,90,90]
//   this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
// }
// 
// 
// playFrameAnimation1(n:string) {
//    switch (n) {
//     case "xuqi":this.XUQI.moveToNextFrame(0,15,1)
//         
//         break;
//         case "cure":this.CURE.moveToNextFrame(0,7,1)
//         
//         break;
//         case "ice":this.ICE.moveToNextFrame(0,6,0)
//         
//         break;
//         case "iceN":this.ICE.moveTolastFrame(6,0,1);//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "thunder":this.THUNDER.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "Dun":this.Dun.moveToNextFrame(0,4,1)
//         
//         break;
//         case "BA":this.BA.moveToNextFrame(0,7,1)
//         
//         break;
//         case "turn4":this.node.scaleX=-1;this.turn.moveToNextFrame(0,4,1);
//         
//         break;
//         case "turn6":this.node.scaleX=1;this.turn.moveToNextFrame(0,3,1);
//         
//         break
//         case "water":this.fadeINAndA(this.water.node.parent,500);this.water.kk=true;this.water.loopF(0,3,0);//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "waterE":this.fadeOutAndDisappear(this.water.node.parent,500);//this.water.loopF(0,4,0);//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//         case "TN":this.TN.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)
//         
//         break;
//     default:
//         break;
//    }
//  }
// 
// }
