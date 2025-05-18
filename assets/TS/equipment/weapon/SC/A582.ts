// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import CHF from "../../../BASE/CHF";
import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S08 from "../../../Scharacter/S08";
import Qiang from "../Qiang/Qiang";
import { AudioManager } from '../../../BASE/music';

@ccclass('A582')
export default class A582 extends Qiang {
TheNumber: string="A582";
   SH=2;
BTS:number=99;
Wtype:number=82;

   Ytype: number=13;
    QD(an: number[]): void {
AudioManager.instance.ZJP("attack",this.Ytype)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
       if(this.node.getComponent(S08).king){this.yy()}
       
       if(this.node.getComponent(Character).getdis(an[0])<=1){
       this.BTS++;

       }else{ this.re()}

       

    }
start(): void {
       if (this.node.getComponent(S08).king) {
       super.start()
       this.tishi.node.setScale(0.8,0.8)
       }
       this.target=this.node.getComponent(Character)
}
    yy(){ 

       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
      GeZiManager.Bu.push(3);}
      remove(): void {
       if (this.tishi&&this.node.getComponent(S08).king){this.tishi.changeF(-1,1)}
//      this.destroy();
//    this.node.removeComponent(this)
      }
re(){  if (this.node) {


       this.node.getComponent(Character).changeE("A580")
if (this.node.getComponent(S08).king) {
      for(let a of this.node.getComponent(Character).CHF){
       a.changeE("A580")
       }  
}
      
}}
      ZD(){  if (this.node&&this.node.getComponent(S08).king) {this.tishi.changeF(4,1)

       if(this.BTS==0){
       this.node.getComponent(Character).changeE("A580")

       for(let a of this.node.getComponent(Character).CHF){
       a.changeE("A580")
       }

       }
       }

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
// import CHF from "../../../BASE/CHF";
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import Qiang from "../Qiang/Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A582 extends Qiang {
// TheNumber: string="A582";
//    SH=2;
// BTS:number=99;
// Wtype:number=82;
// TNJ:number=-1
//     QD(an: number[]): void {
// 
//       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//         if(this.node.getComponent(S08).king){this.yy()} 
//   if (this.node.getComponent(S08).king) {
//   if(this.node.getComponent(Character).getdis(an[0])<=1){
//   this.BTS++;
//   
// }else{ this.re()}
// 
// }
// 
//     }
// start(): void {
//   if (this.node.getComponent(S08).king) {
//     super.start()
//     this.tishi.node.scale=0.8
//    }
// }
//     yy(){ 
// 
//       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[3]=4
//       GeZiManager.Bu.push(3);}
// 
// 
// 
// 
//       remove(): void {
//         if (this.tishi&&this.node.getComponent(S08).king){this.tishi.changeF(-1,1)}
//       this.destroy();
//     this.node.removeComponent(this)
//       }
// re(){  if (this.node&&this.node.getComponent(S08).king) {
// 
// 
//   this.node.getComponent(Character).changeE("A580")
//        
//   for(let a of this.node.getComponent(Character).CHF){
// a.changeE("A580")
// }
// }}
// 
//       ZD(){  if (this.node&&this.node.getComponent(S08).king) {this.tishi.changeF(4,1)
//       
//       if(this.BTS==0){
//         this.node.getComponent(Character).changeE("A580")
//        
//         for(let a of this.node.getComponent(Character).CHF){
//   a.changeE("A580")
//       }
//         
//       }
//     }
// 
// }
// }
