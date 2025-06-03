// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, instantiate } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import  gif1  from "../../../BASE/spineANDgif/gif";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S08 from "../../../Scharacter/S08";
import Shops from "../../../UIS/shop/shops";
import Dao from "../Dao/Dao";
import { AudioManager } from '../../../BASE/music';

@ccclass('A582P2')
export default class A582P2 extends Dao {
SH: number=1;
Aface: number[]=[1,2,3];
tishi:gif1=null

TheNumber: string="A582P2"
CJ: number=1;
QD(an: number[]): void {
AudioManager.instance.ZJP("attack",this.Ytype)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
       if(this.node.getComponent(S08).king){this.yy()}


  }
start(): void {
       if (this.node.getComponent(S08).king) {
       let QUI=instantiate(this.node.parent.getComponent(Shops).tishi)
       QUI.setParent(this.node)
       this.tishi=QUI.getComponent(gif1)
       this.tishi.node.setScale(0.8,0.8)
       }
       
}
  yy(){ 
  MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        
       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
    GeZiManager.Bu.push(3);}
    remove(): void {
       if (this.node&&this.node.getComponent(S08).king){this.tishi.node.destroy()}
//    this.destroy();
//   this.node.removeComponent(this)
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
// import { gif } from "../../../BASE/spineANDgif/gif";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import Shops from "../../../UIS/shop/shops";
// import Dao from "../Dao/Dao";
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class A582P2 extends Dao {
// SH: number=1;
// Aface: number[]=[1,2,3];
// tishi:gif=null
// TNJ:number=-1
// TheNumber: string="A582P2"
// CJ: number=1;
// QD(an: number[]): void {
// 
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//     MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//     if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//       if(this.node.getComponent(S08).king){this.yy()} 
// 
// 
//   }
// start(): void {
// if (this.node.getComponent(S08).king) {
//     let QUI=instantiate(this.node.parent.getComponent(Shops).tishi)
//     QUI.setParent(this.node)
//     this.tishi=QUI.getComponent(gif)
//   this.tishi.node.scale=0.8
//  }
// }
//   yy(){ 
// 
//     MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//     GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//     GeZiManager.TNC[3]=4
//     GeZiManager.Bu.push(3);}
// 
// 
// 
// 
//     remove(): void {
//       if (this.node&&this.node.getComponent(S08).king){this.tishi.node.destroy()}
//     this.destroy();
//    this.node.removeComponent(this)
//     }
// 
// 
//    
// 
// 
// 
// }
