// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../../TS/BASE/realThing";
import { gif1 } from "../../TS/BASE/spineANDgif/gif";
import GeZiManager from "../../TS/Manager/GeZiManager";
import { Message } from "../../TS/Message/Message";
import MessageCenter from "../../TS/Message/MessageCenter";
import { SHMessage } from "../../TS/Message/SHMessage";
import { FDUI } from "../../TS/UIS/else/FDUI";
import KHD2 from '../../TS/Message/KHD2';
import { Sprite } from 'cc';
import { Vec3 } from 'cc';
import { Vec4 } from 'cc';
import { Color } from 'cc';
import { log } from 'node:console';
import { AudioManager } from '../../TS/BASE/music';

@ccclass('Tree')
export default class tree extends realThing {
    app:boolean=false
  ZB: number=22;
HP: number=2;
MaxHP: number=2;
timeArray:number[]=[55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,]
delayRange:number[]=[4,8]
MK:boolean=false
  onLoad(): void {
       this.gif=this.node.getComponent(gif1)
       if(this.gif!=null){this.gif.timeArray=this.timeArray}
       this.tname=this.tt
      }
      
    deadgif(){

       this.playFrameAnimation1("dead",0,this.HP)
    }
    
    
    dead(k:realThing): void {
       if (this.app==true) {
              console.log(this.app)
       
              MessageCenter.MakeSHMessage("AM",[this.ZB],7.1,GeZiManager.PCP.Pturn,"FTP");}

       GeZiManager.shanchu(GeZiManager.trees,this.ZB)

       this.deadgif();
       GeZiManager.shanchu(GeZiManager.BanMove,this.ZB);
       GeZiManager.shanchu(GeZiManager.WD, this.ZB);

       if (k) {
       if ( this.getdis(k.ZB)<=1) {
       MessageCenter.MakeSHMessage("AM",[k.ZB],1,-1,"Qi+")
       }
       }
       this.ZB=0
      // if (k&&k.color=="Blue") {
      // GeZiManager.Bhun+=1

      // }
      // if (k&&k.color=="Red") {
      // GeZiManager.Rhun+=1

      // }
    //   GeZiManager.getHUN()

//  this.node.getComponent(FDUI).destroy()

console.log(this.app)





    }
    
    
    playFrameAnimation1(n:string,loop:number,p) {


       switch (n) {
       case "dead":this.gif.moveToNextFrame(0,7,0);
setTimeout(() => {
        AudioManager.instance.ZJP("hit",8,{volume:0.6})
}, 400);
       this.fadeOutAndDisappear(this.node,1600)
       break;
       case "hit":
              AudioManager.instance.ZJP("hit",2,{volume:0.6})
       this.node.children[0].getComponent(gif1).moveToNextFrame(20,29,0);
       this.gif.moveToNextFrame(8,15,0);
       switch (p) {
       case 1:this.node.children[2].getComponent(gif1).moveToNextFrame(1,9,0);  this.fadeOutAndDisappear(this.node.children[2],700)
       break;
       case 2:
       break;
       default: this.node.children[1].getComponent(gif1).moveToNextFrame(11,19,0); this.fadeOutAndDisappear(this.node.children[1],700);this.node.children[2].getComponent(gif1).moveToNextFrame(1,9,0);  this.fadeOutAndDisappear(this.node.children[2],700)



       break;
       }

       break;
//         case "idle":this.gif.moveToNextFrame(17,21,0);setTimeout(()=>{this.gif.moveToNextFrame(17,21,0)},200);
//         break;
       case "wind":  this.node.children[0].getComponent(gif1).moveToNextFrame(20,29,0);    this.gif.moveToNextFrame(8,15,0);
// // 获取渲染组件材质序列
       if(p){this.shakeNode(10,1500,5,2);}else{this.shakeNode(10,1500,2,5);}


       break;
       case "HP": switch (p) {
       case 2:
       this.fadeINAndA( this.node.children[2],200);  this.fadeINAndA( this.node.children[1],200);
       this.node.children[2].getComponent(gif1).changeF(1,1);this.node.children[1].getComponent(gif1).changeF(11,1);

       break;

       default:
       break;
       }
       break;
       default:
       break;
       }
     }
idle() {
//   执行您想要的操作

       this.playFrameAnimation1("idle",0,this.HP);


//   从指定范围中获取随机延迟时间（单位：毫秒）
       const minDelay = this.delayRange[0] * 1000; // 将秒转换为毫秒
       const maxDelay = this.delayRange[1] * 1000;
       const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

//   输出下一次执行的等待时间


//   利用setTimeout函数，在随机延迟时间后再次执行该方法
       let k=  setTimeout(() => {
       if(this.HP<=0){clearTimeout( k);}
       this.idle();
       }, randomDelay);
//// 传入一个长度为二的数组表示延迟范围（单位：秒），例如[1, 5]代表1秒到5秒之间的随机延迟

}
start(): void {
       super.start();
//this.idle();
}
ReceiveMessage(message: Message) {
       if (message instanceof SHMessage) {
       if (message.Command.includes(this.ZB) || message.Command[0] == 65) {

       switch (message.SHtype) {


       case "wuli":   if(this.getc(message.from)!=null)
       { for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
       let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
       this.HP-=k
       }

       if (this.HP <= 0) {this.HP = 0;this.dead(this.getc(message.from));}GeZiManager.dm=0;GeZiManager.ms=0
       }else{   let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
       this.HP-=k
       }


       }GeZiManager.dm=0; this.playFrameAnimation1("hit",0,this.HP)  ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ;}


       break;
       case "mofa": this.HP -= message.Content; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }
       break;
       case "mofaT": this.HP -= message.Content[0]; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }
       break;
       case "wind":if([6,4].includes(message.Content)){this.playFrameAnimation1("wind",0,1)}else{this.playFrameAnimation1("wind",0,0)}
       break;
       case "getQin":

       break;
       case "water": this.HP -= 1; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ;}
       break;
       case "HP+": this.HP+=message.Content; this.playFrameAnimation1("HP",0,this.HP) ;console.log(this.HP)
       break;
       case "getOne": GeZiManager.Tcharacter=this
       break;



       }


       }
       }
}






setMK(){

if (!this.MK) {
       this.MK=true
       this.node.getComponent(Sprite).color=new Color(125,0,122,180)
}



       if (KHD2.PT.includes(1)||MessageCenter.Text) {
         console.log(this.getFarINN(this.ZB,2))
console.log(this.randomSelect(this.getFarINN(this.ZB,2),GeZiManager.BanMove,1,true))
MessageCenter.MakeGMessage("AM",this.randomSelect(this.getFarINN(this.ZB,2),GeZiManager.BanMove,1,true),7,1,"FTP");

       }

}

randomSelect<T>(
       sourceArray: T[],
       excludeArray: T[] = [],
       count: number = 1,
       allowDuplicates: boolean = false
     ): T[] {
       // 过滤有效元素
       const excludeSet = new Set(excludeArray);
       const validElements = sourceArray.filter(item => !excludeSet.has(item));
     
       // 处理边界情况
       if (validElements.length === 0 || count <= 0) return [];
     
       // 允许重复的情况
       if (allowDuplicates) {
         return Array.from({ length: count }, () => {
           return validElements[Math.floor(Math.random() * validElements.length)];
         });
       }
     
       // 不允许重复的情况（洗牌算法）
       const shuffled = [...validElements];
       for (let i = shuffled.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
       }
       return shuffled.slice(0, Math.min(count, shuffled.length));
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
// import GeZiManager from "../../TS/Manager/GeZiManager";
// import { Message } from "../../TS/Message/Message";
// import MessageCenter from "../../TS/Message/MessageCenter";
// import { SHMessage } from "../../TS/Message/SHMessage";
// import { FDUI } from "../../TS/UIS/else/FDUI";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class tree extends realThing {
//     
//   ZB: number=22;
// HP: number=2;
// MaxHP: number=2;
// timeArray:number[]=[55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,]
// delayRange:number[]=[4,8]
//   onLoad(): void {
//         this.gif=this.node.getComponent(gif)
//       if(this.gif!=null){this.gif.timeArray=this.timeArray}
//       this.tname=this.tt
//       }
//       
//     deadgif(){
//       
//      this.playFrameAnimation1("dead",0,this.HP)
//     }
//     
//     
//     dead(k:realThing): void {
//      
//      
//       GeZiManager.shanchu(GeZiManager.trees,this.ZB)
//      
//      this.deadgif();
//      GeZiManager.shanchu(GeZiManager.BanMove,this.ZB); 
//      GeZiManager.shanchu(GeZiManager.WD, this.ZB); 
// 
//     if (k) {
//     if ( this.getdis(k.ZB)<=1) {
//       MessageCenter.MakeSHMessage("AM",[k.ZB],1,-1,"Qi+")
//     }  
//     }
//     this.ZB=0
//     if (k&&k.color=="Blue") {
//       GeZiManager.Bhun+=1
//           
//         }
//         if (k&&k.color=="Red") {
//           GeZiManager.Rhun+=1
//               
//             }
//             GeZiManager.getHUN()
// 
// 
//             this.node.removeComponent(FDUI)
//     }
//     
//     
//     playFrameAnimation1(n:string,loop:number,p) {
//        
//       
//       switch (n) {
//          case "dead":this.gif.moveToNextFrame(0,7,0);
//      
//          this.fadeOutAndDisappear(this.node,1600)
//            break;
//            case "hit":
//             this.node.children[0].getComponent(gif).moveToNextFrame(20,29,0);
//             this.gif.moveToNextFrame(8,15,0);
//             switch (p) {
//               case 1:this.node.children[2].getComponent(gif).moveToNextFrame(1,9,0);  this.fadeOutAndDisappear(this.node.children[2],700)
//                 break;
//                 case 2:
//                 break;
//                 default: this.node.children[1].getComponent(gif).moveToNextFrame(11,19,0); this.fadeOutAndDisappear(this.node.children[1],700);this.node.children[2].getComponent(gif).moveToNextFrame(1,9,0);  this.fadeOutAndDisappear(this.node.children[2],700)
//       
//             
//             
//                 break;
//             }
//            
//            break;
//          case "idle":this.gif.moveToNextFrame(17,21,0);setTimeout(()=>{this.gif.moveToNextFrame(17,21,0)},200);
//          break;
//            case "wind":  this.node.children[0].getComponent(gif).moveToNextFrame(20,29,0);    this.gif.moveToNextFrame(8,15,0);
// 获取渲染组件材质序列
//  if(p){this.shakeNode(10,1500,5,2);}else{this.shakeNode(10,1500,2,5);}
// 
// 
//            break;
//            case "HP": switch (p) {
//             case 2:
//              this.fadeINAndA( this.node.children[2],200);  this.fadeINAndA( this.node.children[1],200);
//             this.node.children[2].getComponent(gif).changeF(1,1);this.node.children[1].getComponent(gif).changeF(11,1);
//              
//               break;
//            
//             default:
//               break;
//            }
//            break;
//          default:
//            break;
//         }
//      }
// 
// 
// idle() {
//    执行您想要的操作
// 
// this.playFrameAnimation1("idle",0,this.HP);
// 
//     
//    从指定范围中获取随机延迟时间（单位：毫秒）
//     const minDelay = this.delayRange[0] * 1000; // 将秒转换为毫秒
//     const maxDelay = this.delayRange[1] * 1000;
//     const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
//     
//    输出下一次执行的等待时间
// 
//     
//    利用setTimeout函数，在随机延迟时间后再次执行该方法
//   let k=  setTimeout(() => {
//     if(this.HP<=0){clearTimeout( k);}
//     this.idle();
//     }, randomDelay);
// // 传入一个长度为二的数组表示延迟范围（单位：秒），例如[1, 5]代表1秒到5秒之间的随机延迟
// 
// }
// 
// start(): void {
//  super.start();
// this.idle();
// }
// 
// 
// ReceiveMessage(message: Message) {
//   if (message instanceof SHMessage) {
//     if (message.Command.includes(this.ZB) || message.Command[0] == 65) {
// 
//       switch (message.SHtype) {
// 
//    
//         case "wuli":   if(this.getc(message.from)!=null)
//           { for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
//         let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
//           this.HP-=k
//         }
//       
//          if (this.HP <= 0) {this.HP = 0;this.dead(this.getc(message.from));}GeZiManager.dm=0;GeZiManager.ms=0
//           }else{   let k=(message.Content+GeZiManager.dm+GeZiManager.ms);if (k>0) {
//             this.HP-=k
//           }
//             
//   
//            }GeZiManager.dm=0; this.playFrameAnimation1("hit",0,this.HP)  ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ;}
// 
//         
//           break;
//         case "mofa": this.HP -= message.Content; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }
//           break;
//           case "mofaT": this.HP -= message.Content[0]; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ; }
//           break;
//         case "wind":if([6,4].includes(message.Content)){this.playFrameAnimation1("wind",0,1)}else{this.playFrameAnimation1("wind",0,0)}
//           break;
//          case "getQin":
//          
//          break;
//           case "water": this.HP -= 1; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead(this.getc(message.from)) ;}
//           break;
//           case "HP+": this.HP+=message.Content; this.playFrameAnimation1("HP",0,this.HP) ;console.log(this.HP)
//           break;
//           case "getOne": GeZiManager.Tcharacter=this
//           break;
// 
//               
//          
//       }
// 
// 
//     }
//   }
// }
// 
// 
// 
// 
// 
//     }
