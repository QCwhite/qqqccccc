// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S08 from "../../../Scharacter/S08";
import Qiang from "../Qiang/Qiang";
import A582 from "./A582";
import { AudioManager } from '../../../BASE/music';

@ccclass('A582P1')
export default class A582P1 extends A582 {
BTS: number=99;
TheNumber: string="A582P1";
   Wtype: number=81;

   CJ=1
   Ytype: number=13;
  QD(an: number[]): void {
AudioManager.instance.ZJP("attack",this.Ytype)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "HP-")
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
       if(this.node.getComponent(S08).king){this.yy()}

       let a=this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,this.node.getComponent(Character).getdis(an[0])-1)




       if (this.node.getComponent(S08).king) {
       console.log(an)

  if (this.target.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        }


       if(an.length==0||this.node.getComponent(Character).getdis(an[0])>1){
       this.tishi.changeF(-1,1)

       console.log(this.node.getComponent(Character).weapon)
       for(let a of this.node.getComponent(Character).CHF){
       a.changeE("A582")
       }
       this.node.getComponent(Character).changeE("A582")
       console.log(this.node.getComponent(Character).weapon)
       }

       }
       if (a&&a>0&&a<=64) {
       this.node.getComponent(Character).To(a,0.2)
       }
}
yy(){ 

       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
  GeZiManager.Bu.push(3);}
  ZD(){
       if(this.node.getComponent(S08).king){if (this.BTS>=1) {
       this.tishi.changeF(4,1)

       }else{  this.tishi.changeF(-1,1)}}







  }
  changeEP(): void {
         
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
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import Qiang from "../Qiang/Qiang";
// import A582 from "./A582";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A582P1 extends Qiang {
// BTS: number=99;
// TheNumber: string="A582P1";
//    Wtype: number=81;
//    TNJ:number=-1
//    CJ=1
//   QD(an: number[]): void {
// 
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//     MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "HP-")
//     if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//       if(this.node.getComponent(S08).king){this.yy()} 
// 
// let a=this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,this.node.getComponent(Character).getdis(an[0])-1)
// 
// 
// 
// 
// if (this.node.getComponent(S08).king) {
//   console.log(an)
// if(an.length==0||this.node.getComponent(Character).getdis(an[0])>1){
//    this.tishi.changeF(-1,1)
//    
//    console.log(this.node.getComponent(Character).weapon)
//     for(let a of this.node.getComponent(Character).CHF){
// a.changeE("A582")
//   }
//   this.node.getComponent(Character).changeE("A582")
//   console.log(this.node.getComponent(Character).weapon)
// }
// 
// }
// if (a&&a>0&&a<=64) {
//   this.node.getComponent(Character).To(a,0.2)
// } 
// }
// 
// yy(){ 
// 
//   MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//   GeZiManager.TNC[3]=4
//   GeZiManager.Bu.push(3);}
// 
// 
//   ZD(){
//     if(this.node.getComponent(S08).king){if (this.BTS>=1) {
//       this.tishi.changeF(4,1)
//      
//     }else{  this.tishi.changeF(-1,1)}}
//   
//   
//   
//   
//   
//   
//   
//   }
// 
// }
