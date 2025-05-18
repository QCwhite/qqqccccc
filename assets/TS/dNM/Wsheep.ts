// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import { Label } from 'cc';

@ccclass('Wsheep')
export default class Wsheep extends realThing {
    
 HP: number=3;
 T:number=0;
nn:string="Wsheep"
tt: string="animal";
 start(): void {
       super.start();
       turn.Roo.push(this);
       this.node.children[1].getComponent(Label).string=this.T+","+this.nn+","+this.faceTo
       this.h()
 }
 roundPass(): void {
       if (this.HP>0) {



       let a= this.findGe(this.faceTo,1)
       GeZiManager.Tcharacter=null
       MessageCenter.MakeSHMessage("AM",[a],1,-1,"getOneC")

       if((GeZiManager.BanMove.includes(a)&&GeZiManager.Tcharacter==null)||a==66){
// // MessageCenter.MakeSHMessage("AM",[ZB],1,this.Pturn,"HP-");
       if ((GeZiManager.Bhun+GeZiManager.Rhun)%2==0) {
       this.faceTo=this.turn4([this.faceTo])[0];
       }else{     this.faceTo= this.turn6([this.faceTo])[0];}
//// this.node.getComponent(Cspine).changeDirection(this.faceTo)
       this.h()
       }

       
 

       MessageCenter.MakeSHMessage("AM",[this.ZB],[this.turn8([this.faceIs(a)])[0],0.6],-1,"move")

       }
}
ReceiveMessage(message: Message): void {
       if (this.HP>0) {


       super.ReceiveMessage(message);
       if (message instanceof SHMessage&&message.SHtype=="water"&&message.Command.includes(this.ZB)) {
       if (this.T==4) {
       this.faceTo=this.turn4([this.faceTo])[0];
       }else{    this.faceTo= this.turn6([this.faceTo])[0];}
       }
       if (message instanceof SHMessage&&message.SHtype=="wuli"&&message.Command.includes(this.ZB)) {
       if (this.getc(message.from)) {
       let k= this.turn8([this.faceIs(this.getc(message.from))])[0]
       if ([7,1,9,3].includes(k)){

       switch (this.faceTo) {
       case 2:switch (k) {
       case 1:this.faceTo=4

       break;
       case 3:this.faceTo=6

       break;
       case 7:this.faceTo=4

       break;
       case 9:this.faceTo=6

       break;
       default:
       break;
       }

       break;
       case 4:switch (k) {
       case 1:this.faceTo=2

       break;
       case 3:this.faceTo=2

       break;
       case 7:this.faceTo=8

       break;
       case 9:this.faceTo=8

       break;
       default:
       break;
       }

       break;
       case 6:switch (k) {
       case 1:this.faceTo=2

       break;
       case 3:this.faceTo=2

       break;
       case 7:this.faceTo=8

       break;
       case 9:this.faceTo=8

       break;
       default:
       break;
       }

       break;
       case 8:switch (k) {
       case 1:this.faceTo=4

       break;
       case 3:this.faceTo=6

       break;
       case 7:this.faceTo=4

       break;
       case 9:this.faceTo=6

       break;
       default:
       break;
       }

       break;
       default:
       break;
       }
       }else{this.faceTo=this.turn8([k])[0]}
       }
//    if (this.T==4) {
//        this.faceTo=this.turn4([this.faceTo])[0];
//      }else{    this.faceTo= this.turn6([this.faceTo])[0];}
       this.h() }
       }
}
h(){

       this.node.children[2].getComponent(Label).string=this.HP.toString()
       this.node.children[1].getComponent(Label).string=this.T+","+this.nn+","+this.faceTo
////this.node.children[0].scaleY*=-1
       let j=180;
       switch (this.faceTo) {
       case 2:j=180;

       break;
       case 6:j=-90;

       break;
       case 4:j=90

       break;
       default:j=0
       break;
       }
       this.node.children[0].angle=j
}
dead(k:realThing): void {


       super.dead(k)

////  this.deadgif();
// //GeZiManager.shanchu()


       if (k) {
       if ( this.getdis(k.ZB)<=1) {
       MessageCenter.MakeSHMessage("AM",[k.ZB],1,-1,"TNS+")
       }
       }
       this.ZB=0
       this.node.active=false
       if (k&&k.color=="Blue") {
       GeZiManager.Bhun+=1

       }
       if (k&&k.color=="Red") {
       GeZiManager.Rhun+=1

       }
       GeZiManager.getHUN()
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
// import realThing from "../BASE/realThing";
// import Cspine from "../BASE/spineANDgif/Cspine";
// import turn from "../game/time/turn";
// import GeZiManager from "../Manager/GeZiManager";
// import { Message } from "../Message/Message";
// import MessageCenter from "../Message/MessageCenter";
// import { SHMessage } from "../Message/SHMessage";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class Wsheep extends realThing {
// 
//     
// 
//  HP: number=3;
//  T:number=0;
// nn:string="wpig"
// tt: string="animal";
//  start(): void {
//      super.start();
//      turn.Roo.push(this);
//      this.node.children[1].getComponent(cc.Label).string=this.T+","+this.nn+","+this.faceTo
//      this.h()
//  }
//  roundPass(): void {
// if (this.HP>0) {
//   
// 
// 
//   let a= this.findGe(this.faceTo,1)
//      GeZiManager.Tcharacter=null
//  MessageCenter.MakeSHMessage("AM",[a],1,-1,"getOneC")
// 
// if((GeZiManager.BanMove.includes(a)&&GeZiManager.Tcharacter==null)||a==66){
// MessageCenter.MakeSHMessage("AM",[ZB],1,this.Pturn,"HP-");
// if (this.T==4) {
//   this.faceTo=this.turn4([this.faceTo])[0];
// }else{     this.faceTo= this.turn6([this.faceTo])[0];}
// // this.node.getComponent(Cspine).changeDirection(this.faceTo)
// this.h()
// }
//  
// MessageCenter.MakeSHMessage("AM",[a],1,-1,"wuli")
//   MessageCenter.MakeSHMessage("AM",[a],[this.turn8([this.faceIs(a)])[0],0.5],-1,"move")
// 
//   MessageCenter.MakeSHMessage("AM",[this.ZB],[this.turn8([this.faceIs(a)])[0],0.6],-1,"move")
//  
// }
// }
// ReceiveMessage(message: Message): void {
//  if (this.HP>0) {
//   
// 
//   super.ReceiveMessage(message);
//   if (message instanceof SHMessage&&message.SHtype=="water"&&message.Command.includes(this.ZB)) {
//       if (this.T==4) {
//           this.faceTo=this.turn4([this.faceTo])[0];
//         }else{    this.faceTo= this.turn6([this.faceTo])[0];}
//   }
//   if (message instanceof SHMessage&&message.SHtype=="wuli"&&message.Command.includes(this.ZB)) {
//       if (this.getc(message.from)) {
//         let k= this.turn8([this.faceIs(this.getc(message.from))])[0] 
//         if ([7,1,9,3].includes(k)){
// 
//           switch (this.faceTo) {
//               case 2:switch (k) {
//                   case 1:this.faceTo=4
//                       
//                       break;
//                       case 3:this.faceTo=6
//                       
//                       break;
//                       case 7:this.faceTo=4
//                       
//                       break;
//                       case 9:this.faceTo=6
//                       
//                       break;
//                   default:
//                       break;
//               }
//                   
//                   break;
//                   case 4:switch (k) {
//                       case 1:this.faceTo=2
//                           
//                           break;
//                           case 3:this.faceTo=2
//                           
//                           break;
//                           case 7:this.faceTo=8
//                           
//                           break;
//                           case 9:this.faceTo=8
//                           
//                           break;
//                       default:
//                           break;
//                   }
//                       
//                       break;
//                       case 6:switch (k) {
//                           case 1:this.faceTo=2
//                               
//                               break;
//                               case 3:this.faceTo=2
//                               
//                               break;
//                               case 7:this.faceTo=8
//                               
//                               break;
//                               case 9:this.faceTo=8
//                               
//                               break;
//                           default:
//                               break;
//                       }
//                           
//                           break;
//                           case 8:switch (k) {
//                               case 1:this.faceTo=4
//                                   
//                                   break;
//                                   case 3:this.faceTo=6
//                                   
//                                   break;
//                                   case 7:this.faceTo=4
//                                   
//                                   break;
//                                   case 9:this.faceTo=6
//                                   
//                                   break;
//                               default:
//                                   break;
//                           }
//                               
//                               break;
//               default:
//                   break;
//           }
//         }else{this.faceTo=this.turn8([k])[0]}
//       }
//     if (this.T==4) {
//         this.faceTo=this.turn4([this.faceTo])[0];
//       }else{    this.faceTo= this.turn6([this.faceTo])[0];}
//         this.h() }
//     }
// }
// 
// h(){
// 
// this.node.children[2].getComponent(cc.Label).string=this.HP.toString()
// this.node.children[1].getComponent(cc.Label).string=this.T+","+this.nn+","+this.faceTo
// //this.node.children[0].scaleY*=-1
// let j=180;
// switch (this.faceTo) {
//   case 2:j=180;
//       
//       break;
//       case 6:j=-90;
//       
//       break;
//       case 4:j=90
//       
//       break;
//   default:j=0
//       break;
// }
// this.node.children[0].angle=j
// }
// 
// dead(k:realThing): void {
//    
//    
// super.dead(k)
//  
// //  this.deadgif();
//GeZiManager.shanchu()
// 
// 
// if (k) {
// if ( this.getdis(k.ZB)<=1) {
//   MessageCenter.MakeSHMessage("AM",[k.ZB],1,-1,"TNS+")
// }  
// }
// this.ZB=0
// this.node.active=false
// if (k&&k.color=="Blue") {
//     GeZiManager.Bhun+=3
//         
//       }
//       if (k&&k.color=="Red") {
//         GeZiManager.Rhun+=3
//             
//           }
//           GeZiManager.getHUN()
// }
// 
// }
