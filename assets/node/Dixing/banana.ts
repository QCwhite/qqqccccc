// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import { gif1 } from "../../TS/BASE/spineANDgif/gif";
import DES from "../../TS/Ditu/des/DES";
import GeZiManager from "../../TS/Manager/GeZiManager";
import MessageCenter from "../../TS/Message/MessageCenter";
import { FDUI } from "../../TS/UIS/else/FDUI";
import turn from "../../TS/game/time/turn";
import { AudioManager } from '../../TS/BASE/music';
import { Message } from '../../TS/Message/Message';
import { SHMessage } from '../../TS/Message/SHMessage';

@ccclass('Banana')
export default class banana extends DES {
    ZB:number//坐标
    ObstaclesName:string//障碍物名
  FW:number[]=[]//作用范围
  gif:gif1=null
  timeArray: number[]=[40,40,40,40,40,40,100,100,100,100,40,40,40,40,40,40,40,40,40,40,40,40,60,60,60,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40];
  
  onLoad(): void {
       this.gif=this.node.getComponent(gif1)
       if(this.gif!=null){this.gif.timeArray=this.timeArray}

  }
  
  
  start(): void {
          AudioManager.instance.ZJP("hit",24);
  }
  
  
  
  ReceiveMessage(message: Message) {
       if (message instanceof SHMessage) {
  
       if (message.Command.includes(this.ZB) || message.Command[0] == 65) {
  
       switch (message.SHtype) {
      
  
       case "getOne":GeZiManager.Tcharacter=this;
       break;
      
       

  
  }}}
  
  
  
  
    
  }
  
  
  
  
  ObstacleClear()//清除当前坐标障碍物
  {
    for (let i = GeZiManager.AllObstacles.length - 1; i >= 0; i--) {
       if (GeZiManager.AllObstacles[i].ZB === this.ZB) {
       GeZiManager.AllObstacles.splice(i, 1);
           GeZiManager.shanchu(GeZiManager.aos,this.ZB)
       }
  }

  }
  BZ(preZB:number,zi:boolean)
  {if (this.ZB!=0) {
      
 
     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
    let o= this.DfaceIs(preZB,this.ZB)
   //  console.log(preZB)
   //  console.log(o)
   //  console.log(this.ZB)
     let c=0.6/this.getdis(preZB)
if (preZB!=this.ZB) {
    MessageCenter.MakeSHMessage("AM",[this.ZB],[this.DfaceIs(preZB,this.ZB),0.4],turn.turn,"move")
  //  console.log(this.ZB)
}

 let p=0
 if (zi) {
      p=200
 } 
setTimeout(()=>{this.playFrameAnimation1("BZ",c,this.DfaceIs(preZB,this.ZB))},p)
    this.ObstacleClear()
}
  }
  
  
  
  
  playFrameAnimation1(n: string, loop: number, p: number): void {
       switch (n) {
        case "BZ"://
        let k=this.findGe(p,1)
        if (GeZiManager.BanMove.includes(k)==false) {
          this.moveto(loop,k);
        }
   
        this.fadeOutAndDisappear(this.node,loop*500);
      break;

     default:
    break;
     }
  }
  
  LK(){}
  
  JR(){}
  DfaceIs(ZB: number,preZB:number) {

       let y;
       let x;

       if (ZB % 8 == 0) { x = 8 } else { x = ZB % 8; }
       y = Math.ceil(ZB / 8);

       let y2;
       let x2;

       if (preZB % 8 == 0) { x2 = 8 } else { x2 = preZB % 8; }
       y2 = Math.ceil(preZB / 8);






       if (preZB==ZB) {
       return 5; // 表示位置在原点
       } else if (x2 == x) {
       return y2 > y ? 8 : 2; // 表示位置在Y轴上
       } else if (y2 == y) {
       return x2 > x ? 6 : 4; // 表示位置在X轴上
       } else {
       if (x2 > x) {
       return y2 > y ? 9 : 3; // 表示位置在第一或第四象限
       } else {
       return y2 > y ? 7 : 1; // 表示位置在第二或第三象限
       }
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
// import { gif } from "../../TS/BASE/spineANDgif/gif";
// import DES from "../../TS/Ditu/des/DES";
// import GeZiManager from "../../TS/Manager/GeZiManager";
// import MessageCenter from "../../TS/Message/MessageCenter";
// import { FDUI } from "../../TS/UIS/else/FDUI";
// import turn from "../../TS/game/time/turn";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class banana extends DES {
//     ZB:number//坐标
//     ObstaclesName:string//障碍物名
//   FW:number[]=[]//作用范围
//   gif:gif=null
//   timeArray: number[]=[40,40,40,40,40,40,100,100,100,100,40,40,40,40,40,40,40,40,40,40,40,40,60,60,60,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40];
//   
//   onLoad(): void {
//     this.gif=this.node.getComponent(gif)
//   if(this.gif!=null){this.gif.timeArray=this.timeArray}
//  
//   }
//   
//   
//   
//   
//   
//   
//   
//   
//   
//   
//   ObstacleClear()//清除当前坐标障碍物
//   {
//     for (let i = GeZiManager.AllObstacles.length - 1; i >= 0; i--) {
//       if (GeZiManager.AllObstacles[i].ZB === this.ZB) {
//           GeZiManager.AllObstacles.splice(i, 1);
//       }
//   }
//   }
//   BZ(preZB:number)
//   {
//      MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
// 
// 
//      console.log(GeZiManager.Tcharacter.turn8([GeZiManager.Tcharacter.faceIs(preZB)])[0])
//      console.log(preZB)
//      console.log(this.ZB)
// if (preZB!=this.ZB) {
//   MessageCenter.MakeSHMessage("AM",[this.ZB],[this.DfaceIs(preZB,this.ZB),0.4],turn.turn,"move")
// }
//   this.playFrameAnimation1("BZ",0,GeZiManager.Tcharacter.turn8([GeZiManager.Tcharacter.faceIs(preZB)])[0])
//    
//     this.ObstacleClear()
//     this.node.removeComponent(FDUI)
// 
//   }
//   
//   
//   
//   
//   playFrameAnimation1(n: string, loop: number, p: number): void {
//       switch (n) {
//         case "BZ"://this.moveto(0.8,this.findGe(p,1));  
//         this.fadeOutAndDisappear(this.node,1000);
//             break;
//    
//         default:
//             break;
//       }
//   }
//   
//   LK(){}
//   
//   JR(){}
// 
// 
// 
//   DfaceIs(ZB: number,preZB:number) {
// 
//     let y;
//     let x;
// 
//     if (ZB % 8 == 0) { x = 8 } else { x = ZB % 8; }
//     y = Math.ceil(ZB / 8);
// 
//     let y2;
//     let x2;
// 
//     if (preZB % 8 == 0) { x2 = 8 } else { x2 = preZB % 8; }
//     y2 = Math.ceil(preZB / 8);
// 
// 
// 
// 
// 
// 
//     if (preZB==ZB) {
//       return 5; // 表示位置在原点
//     } else if (x2 == x) {
//       return y2 > y ? 8 : 2; // 表示位置在Y轴上
//     } else if (y2 == y) {
//       return x2 > x ? 6 : 4; // 表示位置在X轴上
//     } else {
//       if (x2 > x) {
//         return y2 > y ? 9 : 3; // 表示位置在第一或第四象限
//       } else {
//         return y2 > y ? 7 : 1; // 表示位置在第二或第三象限
//       }
//     }
//   }
// }
