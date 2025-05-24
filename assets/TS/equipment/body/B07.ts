// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
//刺猬壳
//效果改为：对装备者身后一格的攻击方造成1点反伤

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZi from "../../Ditu/Gezi/GeZi";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import SXX from "../../Scharacter/SXX";
import BXX from "./BXX";
import Cspine from '../../BASE/spineANDgif/Cspine';
import sideUI from '../../UIS/sideUI';

@ccclass('B07')
export default class B07 extends BXX {
TheNumber: string="B07";
    
    Cname:string="苦力怕套装"
    target:Character=null;
HP:number=3
    start () {
        this.target=this.node.getComponent(Character)
        this.node.getComponent(Character).behurt3.push(this);
//       this.node.getComponent(Character).dead2.push(this);
    this.changeEP()
    }

  Behurt3(n: number, killp: any, k: number): void {

        this.HP-=n
        if (this.HP<=0) {
        MessageCenter.MakeSHMessage("AM",[this.target.findGe(2,1),this.target.findGe(4,1),this.target.findGe(6,1),this.target.findGe(8,1)],2,this.node.getComponent(Character).Pturn,"wuli")
        }
        this.remove()
  }      
 // Dead2(dead: number): void {
   //     MessageCenter.MakeSHMessage("AM",this.getNIG(this.target.ZB),2,this.node.getComponent(Character).Pturn,"wuli")
//  }
    

remove(){

         GeZiManager.shanchu(this.target.behurt3,this);

        let a=this.node.getComponent(Cspine)
        a.changeSlot(a.spine2,"KB-F",null,13)
        a.changeSlot(a.spine4,"KB-F",null,13)
       a.changeSlot(a.spine6,"KB-F",null,13)
       this.TheNumber="BXX"

       for (let m of this.target.UI){
          if(m instanceof sideUI) {
         
             
            m.setEQ("BXX")
       
            break;
       
          }}
}
  
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
// import Character from "../../BASE/Character";
// import GeZi from "../../Ditu/Gezi/GeZi";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import { SHMessage } from "../../Message/SHMessage";
// import SXX from "../../Scharacter/SXX";
// 
// import BXX from "./BXX";
// 
// 
//刺猬壳
//效果改为：对装备者身后一格的攻击方造成1点反伤
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B07 extends BXX {
// 
// TheNumber: string="B07";
//     
//     Cname:string="苦力怕套装"
//     target:Character=null;
// HP:number=3
//     start () {
//        this.target=this.node.getComponent(Character)
//         this.node.getComponent(Character).behurt3.push(this);
//        this.node.getComponent(Character).dead2.push(this);
//     }
// Behurt2(m: SHMessage, BeHC: any, HC: any): void {
//   
//  }
//   Behurt3(n: number, killp: any, k: number): void {
// 
// this.HP-=n
// if (this.HP<=0) {
//   MessageCenter.MakeSHMessage("AM",[this.target.findGe(2,1),this.target.findGe(4,1),this.target.findGe(6,1),this.target.findGe(8,1)],2,this.node.getComponent(Character).Pturn,"wuli")
// }
//  this.remove()
//   }      
//   Dead2(dead: number): void {
//     MessageCenter.MakeSHMessage("AM",this.getNIG(this.target.ZB),2,this.node.getComponent(Character).Pturn,"mofa")
//   }
//     
//    remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).behurt3 ,this);
//    GeZiManager.shanchu(this.node.getComponent(Character).dead2 ,this);
// }
//   
// }
