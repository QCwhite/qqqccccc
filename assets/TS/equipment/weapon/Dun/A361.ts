// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import turn from "../../../game/time/turn";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import Dun from "./Dun";
import { AudioManager } from '../../../BASE/music';

@ccclass('A361')
export default class A361 extends Dun {
    level:number=6
    TheNumber:string = 'A361';
  Aface: number[]=[1,2,3];
      Pnumber: number=2;
  Pface: number[]=[1,2,3]
  Ytype: number=14;
  start(){
        turn.YuanGong.push(this);
        this.target=this.node.getComponent(Character)
        this.node.getComponent(Character).eqiupment.push(this);
//  GeZiManager.WindSon.push(this)
//  this.target.wd1.push(this)
AudioManager.instance.ZJP("hit",16)
  }
  
  
  
  
   WDT(){
        this.node.getComponent(Character).WD=false;
        switch (GeZiManager.face) {

        case 2:if(this.node.getComponent(Character).faceTo==8){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}

        break;
        case 4:if(this.node.getComponent(Character).faceTo==6){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}

        break;

        case 6:if(this.node.getComponent(Character).faceTo==4){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}

        break;

        case 8:if(this.node.getComponent(Character).faceTo==2){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}

        break;

        default:
        break;
        }
  }
  
  Walk3(ZB: number): void {

        let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
        for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")

//     this.node.parent.getComponent(JNUM).JNF("S冲锋",this.target.ZB)  
        }}



  }
  QD(an:number[]){

        console.log(this.node.getComponent(Character).Pturn)
        if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
        MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
        MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
AudioManager.instance.ZJP("hit",16)
AudioManager.instance.ZJP("attack",this.Ytype)
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
// import turn from "../../../game/time/turn";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import Dun from "./Dun";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A361 extends Dun {
//     level:number=6
//     TheNumber:string = 'A361';
//   Aface: number[]=[1,2,3];
//       Pnumber: number=2;
//   Pface: number[]=[1,2,3]
//   start(){
//     turn.YuanGong.push(this);   
//     this.target=this.node.getComponent(Character)
//    this.node.getComponent(Character).eqiupment.push(this);
//   GeZiManager.WindSon.push(this)
//   this.target.wd1.push(this)
//   }
//   
//   
//   
//   
//    WDT(){
//     this.node.getComponent(Character).WD=false;
//     switch (GeZiManager.face) {
//    
//     case 2:if(this.node.getComponent(Character).faceTo==8){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}
//         
//     break;
//     case 4:if(this.node.getComponent(Character).faceTo==6){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}
//         
//     break;
//    
//     case 6:if(this.node.getComponent(Character).faceTo==4){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}
//         
//     break;
//   
//     case 8:if(this.node.getComponent(Character).faceTo==2){this.node.getComponent(Character).WD=true;GeZiManager.WD.push(this.node.getComponent(Character).ZB);}
//         
//     break;
//   
//     default:
//         break;
//   }
//   }
//   
//   Walk3(ZB: number): void {
//   
//       let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
//     for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
//     
//      this.node.parent.getComponent(JNUM).JNF("S冲锋",this.target.ZB)  
//     }}
//   
//   
//   
//   }
// 
//   QD(an:number[]){
//   
//     console.log(this.node.getComponent(Character).Pturn)
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
//       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
//       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//   
//       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//   
//   
//   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//   GeZiManager.TNC[3]=4
//   GeZiManager.Bu.push(2);}
// 
// 
// 
// 
// 
// }
