// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;


import Character from "../../../BASE/Character";
import Cspine from "../../../BASE/spineANDgif/Cspine";
import { gif1 } from "../../../BASE/spineANDgif/gif";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import Shops from "../../../UIS/shop/shops";
import weapon from "../weapon";
import { AudioManager } from '../../../BASE/music';
import MTX from 'db://assets/pictures/TX/MTX/MTX';


@ccclass('Qiang')
export default class Qiang extends weapon {
  BT: boolean = true;//是否耗费子弹
  ptr: number = 1;//穿透数+1
  BTS: number = 1;//子弹数
Wtype: number=2;
tishi:gif1=null
  attack() {
        if (this.BT) {
        if (this.BTS == 0) {
        this.BTS++ ;
        this.ZD();
        setTimeout(() => {
        this.node.getComponent(Cspine).currentSpine.animation="Idle"
        },200);
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2,this.node.getComponent(Character).Pturn,"TN-")

        } else { this.attack2(); }





        } else { this.attack2(); }

        }//枪类武器攻击分步，attack是判断子弹选择是否装弹，attack2是正式攻击



        attack2() {
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
        let g=[]
        for(let c of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]){
                if (c.color==this.target.color) {
                      g.push(c.ZB)  
                }
        }
        let j =GeZiManager.BanMove.filter(item => ( !GeZiManager.BDZD.includes(item)))
           
j =j.filter(item => ( !g.includes(item)))
        AudioManager.instance.ZJP("ui",1)
   




        let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr, AF[0], j);
        this.BTS--
        this.QD(A2);
        this.ZD()

  }
start(): void {
super.start()
        let QUI=instantiate(this.node.parent.getComponent(Shops).tishi)
        QUI.setParent(this.node)
        this.tishi=QUI.getComponent(gif1)
        this.ZD()
      
}
ZD(){
        if(this.BT){if (this.BTS>=1) {
        this.tishi.changeF(1,1)
        if (this.BTS>1) {
        this.tishi.node.children[0].getComponent(Label).string=this.BTS.toString()
        }
        }else{  this.tishi.changeF(0,1)}}else{this.tishi.changeF(2,1)}







}
remove(): void {
        this.tishi.changeF(-1,1)


            let a=this.node.getComponent(Cspine)
            a.changeSlot(a.spine2,"A2",null,13)
               a.changeSlot(a.spine4,"A2",null,13)
               a.changeSlot(a.spine6,"A2",null,13)
        
}
changeEP(){
        let a=this.node.getComponent(Cspine)
       let c=this.target.Pturn
        a.changeSlot(a.spine2,"A2",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"A2",c),0)
        a.changeSlot(a.spine4,"A2",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"A2",c),2)
        a.changeSlot(a.spine6,"A2",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"A2",c),4)
     }


     QD(an:number[]){
     
     //console.log(this.node.getComponent(Character).Pturn)
     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
     
     
       AudioManager.instance.ZJP("attack",this.Ytype,{volume:0.8})
      setTimeout(()=>{ this.target.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("AT2k"+this.SH+"_"+this.target.faceTo);},130)   
              
     
     
     
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
     
     
     GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
     GeZiManager.TNC[3]=4
     GeZiManager.Bu.push(2);
     
     
     
     GeZiManager.PCP.ST()
     
     }
}//GeZiManager.line这个方法是判断直线上目标的

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
// import YP from "../../../../sound/music";
// import Character from "../../../BASE/Character";
// import Cspine from "../../../BASE/spineANDgif/Cspine";
// import { gif } from "../../../BASE/spineANDgif/gif";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import Shops from "../../../UIS/shop/shops";
// 
// import weapon from "../weapon";
// 
// 
// 
// const { ccclass, property } = _decorator;
// 
// @ccclass
// export default class Qiang extends weapon {
//   BT: boolean = true;//是否耗费子弹
//   ptr: number = 1;//穿透数+1
//   BTS: number = 1;//子弹数
// Wtype: number=2;
// tishi:gif=null
//   attack() {
//     if (this.BT) {
//       if (this.BTS == 0) {
//          this.BTS++ ;
//          this.ZD();
//       setTimeout(() => {
//         this.node.getComponent(Cspine).currentSpine.animation="Idle"
//       },200);
//          MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2,this.node.getComponent(Character).Pturn,"TN-")
// 
//       } else { this.attack2(); }
// 
// 
// 
// 
// 
//     } else { this.attack2(); }
// 
//   }//枪类武器攻击分步，attack是判断子弹选择是否装弹，attack2是正式攻击
// 
// 
// 
//   attack2() {
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
// 
// let j =GeZiManager.BanMove.filter(item => ( !GeZiManager.BDZD.includes(item)))
// 
// 
//   
// find("Canvas").getComponent(YP).PlayAudioclip("ayp",false,1)
// 
// 
// 
// 
//     let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr, AF[0], j);
//     this.BTS--
//     this.QD(A2);
// this.ZD()
// 
//   }
// start(): void {
//   
// let QUI=instantiate(this.node.parent.getComponent(Shops).tishi)
// QUI.setParent(this.node)
// this.tishi=QUI.getComponent(gif)
// this.ZD()
// }
// 
// ZD(){
//   if(this.BT){if (this.BTS>=1) {
//     this.tishi.changeF(1,1)
//     if (this.BTS>1) {
//       this.tishi.node.children[0].getComponent(Label).string=this.BTS.toString()
//     }
//   }else{  this.tishi.changeF(0,1)}}else{this.tishi.changeF(2,1)}
// 
// 
// 
// 
// 
// 
// 
// }
// remove(): void {
//   this.tishi.changeF(-1,1)
// }
// 
// changeEP(){
//     let a=this.node.getComponent(Cspine)
//     
//       a.changeSlot(a.spine2,"A2",this.node.parent.getComponent(Shops).find(2,this.TheNumber.toLowerCase()))
//       a.changeSlot(a.spine4,"A2",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//       a.changeSlot(a.spine6,"A2",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//      }
// }//GeZiManager.line这个方法是判断直线上目标的
