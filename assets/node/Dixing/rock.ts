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
import { SHMessage } from "../../TS/Message/SHMessage";
import { FDUI } from "../../TS/UIS/else/FDUI";
import { find } from 'cc';
import tree from './tree';
import KHD2 from '../../TS/Message/KHD2';
import { AudioManager } from '../../TS/BASE/music';

@ccclass('Rock')
export default class rock extends realThing {
tt:string="rock"
ZB: number=22;
HP: number=5;
timeArray:number[]=[30,30,27,10,14,14,14,14,14,0,0,0,0,0,60,60,60,60,60]
ReceiveMessage(message: Message) {
     if (message instanceof SHMessage&&this.HP>0) {
     if (message.Command.includes(this.ZB) || message.Command[0] == 65) {

     switch (message.SHtype) {
     case "move": if(this.tt=="tree"){}else{this.move(message.Content, 1); this.moveto(0.6, this.ZB);  this.CMget();}
     break;


     case "wuli":  AudioManager.instance.ZJP("hit",3); if (this.getc(message.from)) {
     for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
     let k=message.Content+GeZiManager.dm+GeZiManager.ms
     if (k<0) {
     k=0
     }
     this.HP-=k; if (this.HP <= 0) {this.dead() ;}GeZiManager.dm=0;GeZiManager.ms=0; this.playFrameAnimation1("hit",0,this.HP)  ;if (this.HP <= 0) {this.dead() ;}

     }
     break;
     case "mofa": this.HP -= message.Content; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead() ; }
     break;
     case "mofaT": this.HP -= message.Content[0]; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead() ; }
     break;
     case "wind":
     break;
     case "getQin":

     break;
     case "water": this.HP -= 1; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead() ;}
     break;
     case "HP+": this.HP += message.Content; this.playFrameAnimation1("HP",0,this.HP) ;if (this.HP <= 0) {this.dead() ;}
break;
case "getOne":GeZiManager.Tcharacter=this
           
           break;



     }


     }
     }
  }
   
  onLoad(): void {
     this.gif=this.node.getComponent(gif1)
     if(this.gif!=null){this.gif.timeArray=this.timeArray}
     this.tname=this.tt
  }
  
deadgif(){

     this.playFrameAnimation1("dead",0,this.HP)
}
dead(): void {
     GeZiManager.shanchu(GeZiManager.rock,this.ZB)


     GeZiManager.shanchu(GeZiManager.BanMove, this.ZB);
     GeZiManager.shanchu(GeZiManager.WD, this.ZB);
     this.deadgif();
    

}
playFrameAnimation1(n:string,loop:number,p:number) {
     switch (n) {
     case "dead":this.gif.moveToNextFrame(0,8,0);this.node.children[1].active=false;console.log(this.gif.spriteFrame.name)

     break;
     case "hit":this.node.children[0].getComponent(gif1).moveToNextFrame(14,18,1);this.node.children[1].getComponent(gif1).changeF(p+8,1)
     break;
     case "HP":this.node.children[1].getComponent(gif1).changeF(p+8,1)


     break;

     default:
     break;
     }
 }


MK(){



let o=65//
let b
for(let a of find("Canvas/DituManager/New Node/AnimalManager").getComponentsInChildren(tree)){

  if (o>this.getdis(a.ZB)) {
     o=this.getdis(a.ZB)
     b=a
  } 
}




     b.setMK()
     this.dead()

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
// import { SHMessage } from "../../TS/Message/SHMessage";
// import { FDUI } from "../../TS/UIS/else/FDUI";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class rock extends realThing {
// tt:string="rock"
// ZB: number=22;
// HP: number=5;
// timeArray:number[]=[30,30,27,10,14,14,14,14,14,0,0,0,0,0,60,60,60,60,60]
// ReceiveMessage(message: Message) {
//     if (message instanceof SHMessage&&this.HP>0) {
//       if (message.Command.includes(this.ZB) || message.Command[0] == 65) {
// 
//         switch (message.SHtype) {
//           case "move": if(this.tt=="tree"){}else{this.move(message.Content, 1); this.moveto(0.6, this.ZB);  this.CMget();}
//             break;
// 
// 
//             case "wuli":  if (this.getc(message.from)) {
//               for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}
//               let k=message.Content+GeZiManager.dm+GeZiManager.ms
//               if (k<0) {
//                 k=0
//               }
//              this.HP-=k; if (this.HP <= 0) {this.dead() ;}GeZiManager.dm=0;GeZiManager.ms=0; this.playFrameAnimation1("hit",0,this.HP)  ;if (this.HP <= 0) {this.dead() ;}
// 
//             }  
//             break;
//           case "mofa": this.HP -= message.Content; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead() ; }
//             break;
//             case "mofaT": this.HP -= message.Content[0]; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead() ; }
//             break;
//           case "wind":
//             break;
//            case "getQin":
//            
//            break;
//             case "water": this.HP -= 1; this.playFrameAnimation1("hit",0,this.HP) ;if (this.HP <= 0) {this.dead() ;}
//             break;
//             case "HP+": this.HP += message.Content; this.playFrameAnimation1("HP",0,this.HP) ;if (this.HP <= 0) {this.dead() ;}
//             
// 
// 
//                 
//            
//         }
// 
// 
//       }
//     }
//   }
// 
//    
//   onLoad(): void {
//     this.gif=this.node.getComponent(gif)
//   if(this.gif!=null){this.gif.timeArray=this.timeArray}
//   this.tname=this.tt
//   }
//   
// deadgif(){
//  
//  this.playFrameAnimation1("dead",0,this.HP)
// }
// 
// 
// dead(): void {
//  GeZiManager.shanchu(GeZiManager.rock,this.ZB)
// 
// this.deadgif();
// GeZiManager.shanchu(GeZiManager.BanMove, this.ZB); 
// GeZiManager.shanchu(GeZiManager.WD, this.ZB); 
// this.node.removeComponent(FDUI)
// 
// }
// 
// 
// playFrameAnimation1(n:string,loop:number,p:number) {
//     switch (n) {
//      case "dead":this.gif.moveToNextFrame(0,8,0);this.node.children[1].active=false;console.log(this.gif.spriteFrame.name)
//        
//        break;
//        case "hit":this.node.children[0].getComponent(gif).moveToNextFrame(14,18,1);this.node.children[1].getComponent(gif).changeF(p+8,1)
//        break;
//        case "HP":this.node.children[1].getComponent(gif).changeF(p+8,1)
//              
//        
//        break;
//     
//      default:
//        break;
//     }
//  }
// 
// 
// }
