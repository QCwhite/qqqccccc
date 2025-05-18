// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import realThing from "../../../BASE/realThing";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import { SHMessage } from "../../../Message/SHMessage";
import A151 from "./A151";
import Dao from "./Dao";

@ccclass('A164')
export default class A164 extends A151 {
    SH: number=2
    level: number = 6
    TheNumber: string ="A164";
 TNJ: number=-2;
Aface: number[]=[1,2,3];
  Attack1(): void {
        let a =this.node.getComponent(Character)
        if (!GeZiManager.BanMove.includes(a.findGe(a.faceTo,1))) {
        this.CJ=0
        a.To(a.findGe(a.faceTo,1),0.2)
        }else{ this.CJ=0}


  }
    start() {
//       this.node.getComponent(Character).attack25.push(this)

this.target.Fus(-2)
    }
//   /* 
    Behurt2(m:SHMessage,BeHC:any,HC:any) {

        if (HC.weapon.Wtype==1) {
        GeZiManager.dm-=2;
        }
        }
        remove(): void {
        GeZiManager.shanchu(this.node.getComponent(Character).attack25,this)

        this.target.BFUs(-2)
    }
    Attack25(at:realThing,csh: number): void {


        GeZiManager.dm+= Math.abs(this.node.getComponent(Character).qi-at.qi)



  }
    QD(an:number[]){

        console.log(this.node.getComponent(Character).Pturn)
        if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}

        if (this.target.qi%2==0) {
        MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
        }else{        MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")}


        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ-1,this.node.getComponent(Character).Pturn,"TN-")

        if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


        GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
        GeZiManager.TNC[3]=4
      GeZiManager.Bu.push(2);}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import Character from "../../../BASE/Character";
// import realThing from "../../../BASE/realThing";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import { SHMessage } from "../../../Message/SHMessage";
// import A151 from "./A151";
// import Dao from "./Dao";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A164 extends A151 {
//     SH: number=2
//     level: number = 6
//     TheNumber: string ="A164";
//  TNJ: number=-2;
// Aface: number[]=[1,2,3];
//   Attack1(): void {
//     let a =this.node.getComponent(Character)
//    if (!GeZiManager.BanMove.includes(a.findGe(a.faceTo,1))) {
//    this.CJ=0
//     a.To(a.findGe(a.faceTo,1),0.2)
//    }else{ this.CJ=0}
//    
//    
//   }
//     start() {
//        this.node.getComponent(Character).attack25.push(this)
//     }
//    /* 
//     Behurt2(m:SHMessage,BeHC:any,HC:any) {
//     
//       if (HC.weapon.Wtype==1) {
//             GeZiManager.dm-=2;
//         }
//     }*/
//     remove(): void {
//       GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
//     }
// 
//     Attack25(at:realThing,csh: number): void {
//         
//     
//           GeZiManager.dm+= Math.abs(this.node.getComponent(Character).qi-at.qi)
//           
//          
//     
//   }
//     QD(an:number[]){
//   
//         console.log(this.node.getComponent(Character).Pturn)
//         if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//        
//        if (this.target.qi%2==0) {
//         MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
//        }else{        MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")}
// 
//         
//             MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ-1,this.node.getComponent(Character).Pturn,"TN-")
//       
//           if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//         
// 
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[3]=4
//       GeZiManager.Bu.push(2);}
// }
