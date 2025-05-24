// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import turn from "../../../game/time/turn";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import Dun from "./Dun";

@ccclass('A351')
export default class A351 extends Dun {
  level:number=5
  TheNumber:string = 'A351';
    Pnumber: number=2;
Pface: number[]=[2]
start(){
       turn.YuanGong.push(this);
       this.target=this.node.getComponent(Character)
       this.node.getComponent(Character).eqiupment.push(this);
       GeZiManager.WindSon.push(this)
       this.target.wd1.push(this)
            this.changeEP()
}
 WDT(){

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
QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       MessageCenter.MakeSHMessage("AM",an,[this.target.faceTo,0.3],this.node.getComponent(Character).Pturn,"move")
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.faceTo,0.3],this.node.getComponent(Character).Pturn,"move")
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
GeZiManager.Bu.push(2);}
}


