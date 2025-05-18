// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import realThing from "../../../BASE/realThing";
import Cspine from "../../../BASE/spineANDgif/Cspine";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S05 from "../../../Scharacter/S05";
import SXX from "../../../Scharacter/SXX";
import A210 from "../Qiang/A210";

@ccclass('A2505')
export default class A2505 extends A210 {
TheNumber: string="A2505";
BTS: number=0;

    start(){
       // this.node.getComponent(Character).attack25.push(this)
        this.node.getComponent(Character).behurt3.push(this)
        super.start();
    }

    Behurt3(n: number, killp: any, k: number): void {
      if(killp!=null&&killp.getComponent(SXX).Sex=="man"){
          //直接调用attack
       if( this.node.getComponent(Character).weapon.BTS>0){ this.node.getComponent(Character).weapon.attack()}  
          this.node.getComponent(Cspine).currentSpine.animation="A2H"
      }
  }

    attack() {
        if (this.BT) {
          if (this.BTS == 0) {
             this.BTS+=1
             this.ZD();
          setTimeout(() => {
            this.node.getComponent(Cspine).currentSpine.animation="Idle"
          },200);
             MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2,this.node.getComponent(Character).Pturn,"TN-")
    
          } else { this.attack2(); }
    
    
    
    
    
        } else { this.attack2(); }
    
      }//枪类武器攻击分步，attack是判断子弹选择是否装弹，attack2是正式攻击
    
/*
    Attack25(at:realThing,csh: number): void {
        
  
        if (at!=null&&at instanceof Character&&at.weapon.Wtype==2) {
            GeZiManager.dm+=1;
        }
        this.node.getComponent(S05).xjj--;
        if (this.node.getComponent(S05).xjj==0) {
            this.node.getChildByName("L").getComponent(cc.Label).string="ok"
        }else{     this.node.getChildByName("L").getComponent(cc.Label).string= this.node.getComponent(S05).xjj.toString()}
   
    }*/
    

      


        Magic1(): void {
         
         
         
         
          GeZiManager.free-=this.target.FU[2]
        }

}
