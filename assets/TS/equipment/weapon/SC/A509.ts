// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S09 from "../../../Scharacter/S09";
import JNUM from "../../../UIS/else/JNUmanager";
import turn from "../../../game/time/turn";
import weapon from "../weapon";

@ccclass('A509')
export default class A509 extends weapon {
an:number[]=[];
TheNumber:string ='A509';
Wtype: number=4;
 MZ:number=0;  
Pface: number[]=[1,2,3,4,6,7,8,9]
AA:number=0
levelup(n:string){ 
      if(this.MZ<3){this.MZ+=1;
      console.log(this.MZ)
      if(this.MZ==2){this.Pnumber+=1}
      if(this.MZ==3){this.AA+=1}
    this.label.string=this.MZ+"级攻击环"}
  
  this.TheNumber='A509-'+this.MZ
  
  }
attack(){
      if(this.node.getComponent(S09).tu==4){this.node.getComponent(S09).tu=6}else{this.node.getComponent(S09).tu=4}
      console.log(this.node.getComponent(S09).tu)
      this.node.getChildByName("name").getComponent(Label).string="舞者"+this.node.getComponent(S09).tu;
      let AF = [].concat(this.Aface);
      let i = 0;
      switch (this.node.getComponent(Character).faceTo) {
      case 6: i = 1;
      break;
      case 8: i = 2;
      break;
      case 4: i = 3;
      break;
      }


      for (let n = 1; n <= i; n++) {
      this.turn6(AF);

      }
      let an: number[] = [];
      for (let mannger of AF) {



      an.push(this.node.getComponent(Character).findGe(mannger, 1));

      }


      this.QD(an)



}
 Turn1(){
      this.node.getComponent(S09).face1=this.node.getComponent(Character).faceTo;
    }
    
    
    Turn3(){

      this.node.getComponent(S09).face2=this.node.getComponent(Character).faceTo;
      switch (this.node.getComponent(S09).face1) {
      case 2:
      switch (this.node.getComponent(S09).face2) {

      case 4:this.an=[2,1,4]
      break;
      case 6:this.an=[2,3,6]
      break;
      case 8:if(this.node.getComponent(S09).tu==4){this.an=[2,1,4,7,8]}else{this.an=[2,3,6,9,8]}
      break;

      }

      break;
      case 4:
      switch (this.node.getComponent(S09).face2) {

      case 2:this.an=[2,1,4]
      break;
      case 8:this.an=[4,7,8]
      break;
      case 6:if(this.node.getComponent(S09).tu==4){this.an=[9,6,4,7,8]}else{this.an=[4,1,2,3,6]}
      break;

      }

      break;
      case 6:
      switch (this.node.getComponent(S09).face2) {

      case 2:this.an=[6,3,2]
      break;
      case 8:this.an=[6,9,8]
      break;
      case 4:if(this.node.getComponent(S09).tu==4){this.an=[4,1,2,3,6]}else{this.an=[9,6,4,7,8]}
      break;

      }

      break;
      case 8:
      switch (this.node.getComponent(S09).face2) {

      case 4:this.an=[8,7,4]
      break;
      case 6:this.an=[8,9,6]
      break;
      case 2:if(this.node.getComponent(S09).tu==4){this.an=[2,3,6,9,8]}else{this.an=[2,1,4,7,8]}
      break;

      }


      default:
      break;




      }
      if(this.MZ>0){
      let c:number[]=[];
      for(let a of this.an) {
      c.push(this.node.getComponent(Character).findGe(a,1))}
      if(this.node.getComponent(Character).getComponent(S09).BL[2]>0){      this.node.parent.getComponent(JNUM).JNF("S炫舞",this.target.ZB); MessageCenter.MakeSHMessage("AM",c,1+this.AA,this.node.getComponent(Character).Pturn, "HP-")}
      else{  MessageCenter.MakeSHMessage("AM",c,1+this.AA,this.node.getComponent(Character).Pturn,"wuli")}



      }
      this.an=[];
      MessageCenter.MakeMessage("AM",turn.turn,"ST");
    }
    remove(){
      GeZiManager.shanchu(this.node.getComponent(Character).turn1,this);
      GeZiManager.shanchu(this.node.getComponent(Character).turn3,this);
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
// 
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S09 from "../../../Scharacter/S09";
// import JNUM from "../../../UIS/else/JNUmanager";
// import turn from "../../../game/time/turn";
// import weapon from "../weapon";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A509 extends weapon {
// an:number[]=[];
// TheNumber:string ='A509';
// Wtype: number=4;
//  MZ:number=0;  
// Pface: number[]=[1,2,3,4,6,7,8,9]
// AA:number=0
// 
// levelup(n:string){ 
//   if(this.MZ<3){this.MZ+=1;
//       console.log(this.MZ)
//       if(this.MZ==2){this.Pnumber+=1}
//       if(this.MZ==3){this.AA+=1}
//     this.label.string=this.MZ+"级攻击环"}}
// 
// attack(){
//     if(this.node.getComponent(S09).tu==4){this.node.getComponent(S09).tu=6}else{this.node.getComponent(S09).tu=4}
//     console.log(this.node.getComponent(S09).tu)
//     this.node.getChildByName("name").getComponent(cc.Label).string="舞者"+this.node.getComponent(S09).tu;
//     let AF = [].concat(this.Aface);
//     let i = 0;
//     switch (this.node.getComponent(Character).faceTo) {
//       case 6: i = 1;
//         break;
//       case 8: i = 2;
//         break;
//       case 4: i = 3;
//         break;
//     }
// 
// 
//     for (let n = 1; n <= i; n++) {
//       this.turn6(AF);
// 
//     }
//     let an: number[] = [];
//     for (let mannger of AF) {
// 
// 
// 
//       an.push(this.node.getComponent(Character).findGe(mannger, 1));
// 
//     }
// 
// 
//    this.QD(an)
//  
//    
//     
// }
// 
//  Turn1(){
//         this.node.getComponent(S09).face1=this.node.getComponent(Character).faceTo;
//     }
//     
//     
//     Turn3(){
// 
//         this.node.getComponent(S09).face2=this.node.getComponent(Character).faceTo;
// switch (this.node.getComponent(S09).face1) {
//     case 2:
//         switch (this.node.getComponent(S09).face2) {
// 
// case 4:this.an=[2,1,4]
// break;
// case 6:this.an=[2,3,6]
// break;
// case 8:if(this.node.getComponent(S09).tu==4){this.an=[2,1,4,7,8]}else{this.an=[2,3,6,9,8]}
// break;
// 
//         }
//         
//         break;
//     case 4:
//             switch (this.node.getComponent(S09).face2) {
//     
//     case 2:this.an=[2,1,4]
//     break;
//     case 8:this.an=[4,7,8]
//     break;
//     case 6:if(this.node.getComponent(S09).tu==4){this.an=[9,6,4,7,8]}else{this.an=[4,1,2,3,6]}
//     break;
//     
//             }
//             
//             break;
//      case 6:
//                 switch (this.node.getComponent(S09).face2) {
//         
//         case 2:this.an=[6,3,2]
//         break;
//         case 8:this.an=[6,9,8]
//         break;
//         case 4:if(this.node.getComponent(S09).tu==4){this.an=[4,1,2,3,6]}else{this.an=[9,6,4,7,8]}
//         break;
//         
//                 }
//                 
//                 break;
//     case 8:
//                     switch (this.node.getComponent(S09).face2) {
//             
//             case 4:this.an=[8,7,4]
//             break;
//             case 6:this.an=[8,9,6]
//             break;
//             case 2:if(this.node.getComponent(S09).tu==4){this.an=[2,3,6,9,8]}else{this.an=[2,1,4,7,8]}
//             break;
//             
//                     }
// 
// 
//     default:
//         break;
// 
// 
// 
// 
// }
// if(this.MZ>0){
//     let c:number[]=[];
//    for(let a of this.an) {
//   c.push(this.node.getComponent(Character).findGe(a,1))}
//   if(this.node.getComponent(Character).getComponent(S09).BL[2]>0){      this.node.parent.getComponent(JNUM).JNF("S炫舞",this.target.ZB); MessageCenter.MakeSHMessage("AM",c,1+this.AA,this.node.getComponent(Character).Pturn, "HP-")}
//   else{  MessageCenter.MakeSHMessage("AM",c,1+this.AA,this.node.getComponent(Character).Pturn,"wuli")}
// 
//   
// 
// } 
// this.an=[];
// MessageCenter.MakeMessage("AM",turn.turn,"ST");
//     }
// 
// 
// 
// 
// 
//     remove(){
// GeZiManager.shanchu(this.node.getComponent(Character).turn1,this);
// GeZiManager.shanchu(this.node.getComponent(Character).turn3,this);
//     }
// }
