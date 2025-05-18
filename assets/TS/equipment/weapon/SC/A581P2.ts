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
import A581 from "./A581";
import { AudioManager } from '../../../BASE/music';

@ccclass('A581P2')
export default class A581P2 extends  A581 {
CJ: number=1;
BTS: number=99;
TheNumber: string="A581P2";
   Ytype: number=13;
    QD(an: number[]): void {


      if (this.node.getComponent(S08).king) {

  if (this.target.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        }



      let A2 = GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],GeZiManager.BanMove);
AudioManager.instance.ZJP("attack",this.Ytype)
      if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
      MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
      if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
      if(this.node.getComponent(S08).king){this.yy()}
      for(let a of this.node.getComponent(S08).FSM){

      if ( a.node.getComponent(A581)!=null) {
      a.node.getComponent(A581).ac(this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0])}

      }
//     this.BTS--;

      this.ZD()
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
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import A581 from "./A581";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A581P2 extends  A581 {
// CJ: number=1;
// BTS: number=99;
// TheNumber: string="A581P2";
//     QD(an: number[]): void {
// 
// 
//         if (this.node.getComponent(S08).king) {
//           let A2 = GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],GeZiManager.BanMove);
//          
//           if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//       MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//         if(this.node.getComponent(S08).king){this.yy()} 
//        for(let a of this.node.getComponent(S08).FSM){
//         
//         if ( a.node.getComponent(A581)!=null) {
//           a.node.getComponent(A581).ac(this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0])} 
//         
//         }
//      this.BTS--;
//       
//           this.ZD()
//         } 
//       
//       
//        
//       
//       }   
// }
