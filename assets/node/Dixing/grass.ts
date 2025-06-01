// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, sp, UIOpacity } from 'cc';
const {ccclass, property} = _decorator;


import realThing from "../../TS/BASE/realThing";
import DES from "../../TS/Ditu/des/DES";
import turn from "../../TS/game/time/turn";
import GeZiManager from "../../TS/Manager/GeZiManager";

import { Message } from "../../TS/Message/Message";
import MessageCenter from "../../TS/Message/MessageCenter";
import { SHMessage } from "../../TS/Message/SHMessage";
import grassQ from "./grassQ";

import { tween } from 'cc';
import TNanager from '../../TS/Manager/TNanager';
import { TGManager } from '../../TS/Manager/TGManager';
import { AudioManager } from '../../TS/BASE/music';

@ccclass('Grass')
export default class grass extends DES {
FW: number[]=[];
  grassQ:grassQ=null
  tt:string="grass"
  HP:number=1
  TGO:number=255
   FZ(){

     for(let a of GeZiManager.AllObstacles){
     if (a.ZB==this.ZB&&a.tt[0]!="f") {
     a.fadeOutAndDisappear(a.node,200)
     }
     }


     for(let a of GeZiManager.qin){
          if (a.ZB==this.ZB) {
          a.node.getComponent(UIOpacity).opacity=166
          }
          }
     this.fadeINAndA(this.node.children[0],900)
     setTimeout(()=>{this.node.children[1].getComponent(sp.Skeleton).animation="idle"},600)
     turn.Roo.push(this)
AudioManager.instance.ZJP("hit",1)
 
   }
BZ(preZB: number): void {
    if (this.HP>0) {
     
  
     this.JR(preZB)
    


//if (TGManager.TG.includes("蛇")&&GeZiManager.TNJM[turn.round-1]==4) {
 //    MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
 //    GeZiManager.Tcharacter.DYL(3)
//}

}
}
JJ(){
    // console.log("k")


}
LK(ZB: number): void {

////  
//  //}
// // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
// // if (GeZiManager.Tcharacter){

//  //  GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,255)
//   // GeZiManager.Tcharacter.YS=false

// // }
if (this.HP>0) {
     

     if (turn.DorN=="day") {
        
     this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="www"
     this.node.children[1].getComponent(sp.Skeleton).animation="www"
this.grassQ.setXY(0)
     this.fadeOutAndDisappear(this.grassQ.node,130)

     setTimeout(() => {
     this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="idle"
     this.node.children[1].getComponent(sp.Skeleton).animation="idle"
     },400);}

     MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOneC")
     if (GeZiManager.Tcharacter){

     GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,255)
     GeZiManager.Tcharacter.YS=false}

}
 }
JR(ZB: number): void {
// // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
// // if (turn.DorN=="day"&&this.HP>0) {
//   // this.ZCL();
// // }


//  //if (turn.DorN=="nigth"&&this.HP>0) {

////if (GeZiManager.Tcharacter&&KHD.PT.includes(GeZiManager.Tcharacter.Pturn)) {
//// this.BKS()
////}else{this.yinxR()}


// // }

}
CX(){

//  //GeZiManager.Tcharacter=null
// // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
// // if(GeZiManager.Tcharacter) {
////this.BKS()

//  //}






}
XX(){
     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
     if(GeZiManager.Tcharacter) {


     }


}
rR(){


}
mr(){ 

}
dead(){ 
     setTimeout(()=>{ GeZiManager.shanchu(GeZiManager.grass,this.ZB)
     GeZiManager.shanchu(GeZiManager.GR,this)
     this.fadeOutAndDisappear(this.node,200)
     GeZiManager.Tcharacter=null
     for (let a of GeZiManager.AllObstacles) {
     if(a.ZB==this.ZB){a.node.getComponent(UIOpacity).opacity=255;a.node.active=true}

     }
     if (this.grassQ&&this.grassQ.node) {
          this.grassQ.node.destroy();
     }
     
     this.FW=[0]
     this.ZB=0
     this.HP=-1

     },200)
     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
     if(GeZiManager.Tcharacter) {
     GeZiManager.Tcharacter.setXY(0)
     this.deadgif();
     GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,255)
     GeZiManager.Tcharacter.YS=false


     }


////this.node.destroy()
}
roundPass(): void {
     if (turn.round%12==1||turn.round%12==7) {
     GeZiManager.KCLR()

     }




}
ReceiveMessage(message: Message) {
     if (message instanceof SHMessage&&this.HP>0) {
     if (message.Command.includes(this.ZB) || message.Command[0] == 65) {

     switch (message.SHtype) {


     case "wuli":
     if (message.Content>0) {
     this.dead()
     }





     break;
     case "mofa":     if (message.Content>0) {this.dead() }
     break;
     case "mofaT": if (message.Content[1]!="DZ") {
     this.dead()
     }
break;
 case "HP+":
   if (!GeZiManager.BanMove.includes(this.ZB)) {
     this.dead(); MessageCenter.MakeSHMessage("AM",[this.ZB],1,1,"FTP");
   }  
     break

     }


     }
     }
}
wind(){  
     
     if (this.HP>0) {
          this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="wind"
          this.node.children[1].getComponent(sp.Skeleton).animation="wind"
          setTimeout(() => {
          this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="idle"
          this.node.children[1].getComponent(sp.Skeleton).animation="idle"
          },2400);
     }
     
  
}
BKS(){MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")

//console.log("BKS"+this.ZB)
     if ( GeZiManager.Tcharacter) {
     GeZiManager.Tcharacter.YS=false


     }

     this.TGO=166
}
yinxR(){ this.grassQ.setXY(0)
     this.fadeOutAndDisappear(this.grassQ.node,130)

  //   console.log("yinxR"+this.ZB)

     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
     if(GeZiManager.Tcharacter) {

     GeZiManager.Tcharacter.YS=true
     }
     this.TGO=0
}
ZCL(){
     //this.grassQ.setXY(0)
 if (this.HP>0) {
     

 
   //  console.log("ZCL"+this.grassQ.node.getComponent(UIOpacity).opacity)
     if ( this.grassQ.node.getComponent(UIOpacity).opacity==0) {
     this.fadeINAndAK(this.grassQ.node,400,190)

   AudioManager.instance.ZJP("hit",1)
     setTimeout(() => { if (this.HP>0) {
     this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="www"
     this.node.children[1].getComponent(sp.Skeleton).animation="www"
     }
     }, 300);
     setTimeout(() => { if (this.HP>0) {
     this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="idle"
     this.node.children[1].getComponent(sp.Skeleton).animation="idle"}
     },700);
     }



     this.TGO=255 }
}
T(){

     MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
     if(GeZiManager.Tcharacter) {

     GeZiManager.Tcharacter.YS=false
     GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,this.TGO)}
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
// import YP from "../../sound/music";
// import realThing from "../../TS/BASE/realThing";
// import DES from "../../TS/Ditu/des/DES";
// import turn from "../../TS/game/time/turn";
// import GeZiManager from "../../TS/Manager/GeZiManager";
// import KHD from "../../TS/Message/KHD";
// import { Message } from "../../TS/Message/Message";
// import MessageCenter from "../../TS/Message/MessageCenter";
// import { SHMessage } from "../../TS/Message/SHMessage";
// import grassQ from "./grassQ";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class grass extends DES {
// FW: number[]=[];
//   grassQ:grassQ=null
//   tt:string="grass"
//   HP:number=1
//   TGO:number=255
//    FZ(){
//    
//     for(let a of GeZiManager.AllObstacles){
//       if (a.ZB==this.ZB&&a.tt[0]!="f") {
//         a.fadeOutAndDisappear(a.node,200)
//       }
//     }
// this.fadeINAndA(this.node.children[0],900)
// setTimeout(()=>{this.node.children[1].getComponent(sp.Skeleton).animation="idle"},600)
// turn.Roo.push(this)
// 
//      find("Canvas").getComponent(YP).PlayAudioclip("bhyp",false,1)
//    }
// 
// BZ(preZB: number): void {
// this.JR(preZB)
//  console.log(this. grassQ.node.active)
// }
// JJ(){
// console.log("k")
//  
// 
// }
// LK(ZB: number): void {
//  //
// //  this.yinxR()
//   //}
//  // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//  // if (GeZiManager.Tcharacter){
// 
//   //  GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,255)
// GeZiManager.Tcharacter.YS=false
// 
//  // }
// 
//  if (turn.DorN=="day") {
//    
//  this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="www"
//  this.node.children[1].getComponent(sp.Skeleton).animation="www"
//  
// 
// setTimeout(() => {
// this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="idle"
//   this.node.children[1].getComponent(sp.Skeleton).animation="idle"
// },400);}
// 
// MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOneC")
//  if (GeZiManager.Tcharacter){
// 
//   GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,255)
//    GeZiManager.Tcharacter.YS=false}
// 
// 
//  }
// 
// 
// 
// JR(ZB: number): void {
//  // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//  // if (turn.DorN=="day"&&this.HP>0) {
// this.ZCL();
//  // }
// 
// 
//   //if (turn.DorN=="nigth"&&this.HP>0) {
// 
// //if (GeZiManager.Tcharacter&&KHD.PT.includes(GeZiManager.Tcharacter.Pturn)) {
// // this.BKS()
// //}else{this.yinxR()}
// 
//    
//  // }
// 
// }
// 
// 
// 
// CX(){
// 
//   //GeZiManager.Tcharacter=null
//  // MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//  // if(GeZiManager.Tcharacter) {
// //this.BKS()
// 
//   //}
//    
// 
// 
// 
// 
// 
// }
// 
// 
// 
// 
// 
// 
// XX(){
//   MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//    if(GeZiManager.Tcharacter) {
//   
// 
//    }
//  
// 
// }
// rR(){
//  
// 
// }
// mr(){ 
//  
// }
// 
// dead(){ 
//   setTimeout(()=>{ GeZiManager.shanchuALL(GeZiManager.grass,this.ZB)
//     GeZiManager.shanchuALL(GeZiManager.GR,this)
//      this.fadeOutAndDisappear(this.node,200)
//      GeZiManager.Tcharacter=null
//    for (let a of GeZiManager.AllObstacles) {
//     if(a.ZB==this.ZB){a.node.opacity=255;a.node.active=true}
//      
//    }
//      this.grassQ.node.destroy();
//      this.FW=[0]
//      this.ZB=0
//      this.HP=-1
//   
//    },200)
//    MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//      if(GeZiManager.Tcharacter) {
//        GeZiManager.Tcharacter.setXY(0)
//      this.deadgif();
//      GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,255)
//      GeZiManager.Tcharacter.YS=false
//     
//     
//     }
// 
// 
// //this.node.destroy()
// }
// 
// 
// roundPass(): void {
//   if (turn.round%12==1||turn.round%12==7) {
//     GeZiManager.KCLR()
//    
//   }
// 
// 
//    
//    
// }
// 
// 
// 
// 
// 
// 
// ReceiveMessage(message: Message) {
//   if (message instanceof SHMessage) {
//     if (message.Command.includes(this.ZB) || message.Command[0] == 65) {
// 
//       switch (message.SHtype) {
// 
//    
//         case "wuli":  
//          if (message.Content>0) {
//           this.dead() 
//          }
//  
//          
//     
// 
//         
//           break;
//         case "mofa":     if (message.Content>0) {this.dead() }
//           break;
//           case "mofaT": if (message.Content[1]!="DZ") {
//             this.dead() 
//           }
//     
//       
//               
//          
//       }
// 
// 
//     }
//   }
// }
// wind(){  this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="wind"
//   this.node.children[1].getComponent(sp.Skeleton).animation="wind"
// setTimeout(() => {
// this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="idle"
//   this.node.children[1].getComponent(sp.Skeleton).animation="idle"
// },2400);
// }
// 
// 
// 
// 
// 
// 
// 
// 
// 
// BKS(){MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//  
// 
//  if ( GeZiManager.Tcharacter) {
//   GeZiManager.Tcharacter.YS=false
//      
// 
//   }
// 
//   this.TGO=166
// }
// 
// 
// 
// yinxR(){ this.grassQ.setXY(0)
//  this.fadeOutAndDisappear(this.grassQ.node,130)
//   
//   
// 
// 
// 
//   MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//  if(GeZiManager.Tcharacter) {
// 
//  GeZiManager.Tcharacter.YS=true
// }
// this.TGO=0
// }
// 
// 
// 
// ZCL(){
//  this.grassQ.setXY(0)
//   
//  if ( this.grassQ.node.opacity==0) {
//   this.fadeINAndAK(this.grassQ.node,400,190)
// find("Canvas").getComponent(YP).PlayAudioclip("bhyp",false,1)
// 
//   setTimeout(() => {
//  this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="www"
//  this.node.children[1].getComponent(sp.Skeleton).animation="www"
// 
// }, 300);
//  setTimeout(() => {
//     this.grassQ.node.children[0].getComponent(sp.Skeleton).animation="idle"
//     this.node.children[1].getComponent(sp.Skeleton).animation="idle"
// },700);
//  }
//  
// 
// 
// this.TGO=255
// }
// 
// T(){
// 
//   MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
//   if(GeZiManager.Tcharacter) {
//   
//   GeZiManager.Tcharacter.YS=false
//   GeZiManager.Tcharacter.fadeOut(GeZiManager.Tcharacter.node,0.3,this.TGO)}
//   }
// 
// 
// 
// }
