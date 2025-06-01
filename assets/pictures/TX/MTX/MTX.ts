// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { v3 } from 'cc';
import { _decorator } from 'cc';
import ComponentBase from 'db://assets/TS/BASE/ComponentBase';
import { gif1 } from 'db://assets/TS/BASE/spineANDgif/gif';
const {ccclass, property} = _decorator;


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
 @property(gif1)
   FH:gif1=null;
 @property(gif1)
  KB:gif1=null;
 @property(gif1)
  Banan:gif1=null;
 @property(gif1)

  BZ1:gif1=null;

 @property(gif1)

  BZ2:gif1=null;
   @property(gif1)

 Tui:gif1=null;



AT0_28:gif1=null;
AT0_46:gif1=null;
AT1_28:gif1=null;
AT1_46:gif1=null;
AT2k2:gif1=null;
AT2k3:gif1=null;



onLoad(): void {
   
    
// //this.THUNDER.timeArray=[60,40,35,35,70,40,65,98,47,55,60,90,90,90,90]
//  this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]






}


 start(): void {
   setTimeout(()=>{   this.FH=this.node.getChildByName("FH").getComponent(gif1)
   
       this.KB=this.node.getChildByName("KB").getComponent(gif1)
       this.Banan=this.node.getChildByName("Banan").getComponent(gif1)
       this.BZ1=this.node.getChildByName("BZ").getComponent(gif1)
          this.TP=this.node.getChildByName("TP").getComponent(gif1)
        this.Tui=this.node.getChildByName("Tui").getComponent(gif1)
     this.TP=this.node.getChildByName("TP").getComponent(gif1)
       
     
     
     this.AT0_28=this.node.getChildByName("ATX").getChildByName("AT0_28").getComponent(gif1)
   this.AT0_46=this.node.getChildByName("ATX").getChildByName("AT0_46").getComponent(gif1)
    //  this.AT1_28=this.node.getChildByName("ATX").getChildByName("AT1_28").getComponent(gif1)
        // this.AT1_46=this.node.getChildByName("ATX").getChildByName("AT1_46").getComponent(gif1)
         this.AT2k2=this.node.getChildByName("ATX").getChildByName("AT2k2").getComponent(gif1)
             console.log(this.AT2k2)
             console.log(this.node.getChildByName("ATX").getChildByName("AT2k2"))
                console.log(this.node.getChildByName("ATX"))
         console.log(this.node.getChildByName("ATX").getChildByName("AT2k2").getComponent(gif1))
        this.AT2k3=this.node.getChildByName("ATX").getChildByName("AT2k3").getComponent(gif1)

       this.XUQI.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
       this.CURE.timeArray=[65,65,60,65,65,65,80,98,47,55,60,90,90,90,90]
       this.ICE.timeArray=[60,60,60,58,58,58,80,98,47,55,60,90,90,90,90]
 this.KB.timeArray=[35,35,35,35,35,35,50,50,70,65,50,40,40,40,40,40,40,40,60]
 this.TP.timeArray=[55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55]
 this.Banan.timeArray=[55,55,55,55,65,45,40,40,40,40,35,35,35,35,35,35,35,35,35]
  this.Tui.timeArray=[55,55,55,55,65,45,40,40,40,40,35,35,35,35,35,35,35,35,35]
       this.AT0_28.timeArray=[35,35,35,35,35,35,40,40,40,40,35,35,35,35,35,35,35,35,35]},1000)  
}




playFrameAnimation1(n:string) {
       this.KB=this.node.getChildByName("KB").getComponent(gif1)
       this.Banan=this.node.getChildByName("Banan").getComponent(gif1)
       this.BZ1=this.node.getChildByName("BZ").getComponent(gif1)
          this.TP=this.node.getChildByName("TP").getComponent(gif1)
        this.Tui=this.node.getChildByName("Tui").getComponent(gif1)
     this.TP=this.node.getChildByName("TP").getComponent(gif1)
       
     
     
     this.AT0_28=this.node.getChildByName("ATX").getChildByName("AT0_28").getComponent(gif1)
   this.AT0_46=this.node.getChildByName("ATX").getChildByName("AT0_46").getComponent(gif1)
    //  this.AT1_28=this.node.getChildByName("ATX").getChildByName("AT1_28").getComponent(gif1)
        // this.AT1_46=this.node.getChildByName("ATX").getChildByName("AT1_46").getComponent(gif1)
         this.AT2k2=this.node.getChildByName("ATX").getChildByName("AT2k2").getComponent(gif1)
             console.log(this.AT2k2)
             console.log(this.node.getChildByName("ATX").getChildByName("AT2k2"))
                console.log(this.node.getChildByName("ATX"))
         console.log(this.node.getChildByName("ATX").getChildByName("AT2k2").getComponent(gif1))
        this.AT2k3=this.node.getChildByName("ATX").getChildByName("AT2k3").getComponent(gif1)
  
  
  
  
  
  
  
  
  
  
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
       case "turn4":this.turn.node.setScale(-1,1,1);this.turn.moveToNextFrame(0,4,1);this.turn.node.position=v3(-45,-50,0);

       break;
       case "turn6":this.turn.node.setScale(1,1,1);this.turn.moveToNextFrame(0,3,1);this.turn.node.position=v3(45,-50,0);

       break
       case "water":this.fadeINAndA(this.water.node.parent,500);this.water.kk=true;this.water.loopF(0,3,0);//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "waterE":this.fadeOutAndDisappear(this.water.node.parent,500);//this.water.loopF(0,4,0);//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "TN":this.TN.moveToNextFrame(0,6,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "BZ":this.BZ1.moveToNextFrame(0,17,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "KB":this.KB.moveToNextFrame(0,18,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "Banan":this.Banan.moveToNextFrame(0,9,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "FH":this.FH.moveToNextFrame(0,10,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
         case "TP":this.TP.moveToNextFrame(0,15,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
          case "Tui":this.Tui.moveToNextFrame(0,11,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
   case "AT0_2":this.AT0_28.node.position=v3(0,0,0);this.AT0_28.node.scale=v3(1,1,1) ;this.AT0_28.moveToNextFrame(0,5,1); 
   
   //console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
  case "AT0_8":this.AT0_28.node.position=v3(0,170,0);this.AT0_28.node.scale=v3(-1,-1,1) ; this.AT0_28.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
 case "AT2k2_2":
  

 this.AT2k2.node.position=v3(0,-40,0);this.AT2k2.node.scale=v3(2,2,1) ; this.AT2k2.node.rotation=this.rotateB(-90);this.AT2k2.moveToNextFrame(0,5,1); 
   
   //console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
  case "AT2k2_4":this.AT2k2.node.scale=v3(-2,2,1) ; this.AT2k2.node.position=v3(-160,90,0);this.AT2k2.node.rotation=this.rotateB(0);this.AT2k2.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
case "AT2k2_6":this.AT2k2.node.scale=v3(2,2,1) ;this.AT2k2.node.position=v3(160,90,0);  this.AT2k2.node.rotation=this.rotateB(0);this.AT2k2.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "AT2k2_8":this.AT2k2.node.position=v3(0,170,0);this.AT2k2.node.scale=v3(2,-2,1) ;this.AT2k2.node.rotation=this.rotateB(-90); this.AT2k2.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "AT2k3_2":
  

 this.AT2k3.node.position=v3(0,-40,0);this.AT2k3.node.scale=v3(1,1,1) ; this.AT2k3.node.rotation=this.rotateB(-90);this.AT2k3.moveToNextFrame(0,5,1); 
   
   //console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
  case "AT2k3_4":this.AT2k3.node.scale=v3(-1,1,1) ; this.AT2k3.node.position=v3(-130,90,0);this.AT2k3.node.rotation=this.rotateB(0);this.AT2k3.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
case "AT2k3_6":this.AT2k3.node.scale=v3(1,1,1) ;this.AT2k3.node.position=v3(130,90,0);  this.AT2k3.node.rotation=this.rotateB(0);this.AT2k3.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       case "AT2k3_8":this.AT2k3.node.position=v3(0,170,0);this.AT2k3.node.scale=v3(1,-1,1) ;this.AT2k3.node.rotation=this.rotateB(-90); this.AT2k3.moveToNextFrame(0,5,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
       default:
       break;
       }
 }




 playFrameAnimation2(n:string) {
       switch (n) {
       case "AT0-2":this.XUQI.moveToNextFrame(0,15,1)

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
        case "BZ":this.BZ1.moveToNextFrame(0,17,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "KB":this.KB.moveToNextFrame(0,18,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "Banan":this.Banan.moveToNextFrame(0,9,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
        case "FH":this.FH.moveToNextFrame(0,10,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
         case "TP":this.TP.moveToNextFrame(0,15,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

       break;
          case "Tui":this.Tui.moveToNextFrame(0,11,1);//console.log(this.THUNDER)//this.fadeOutAndDisappear(this.ICE.node,1200)

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
