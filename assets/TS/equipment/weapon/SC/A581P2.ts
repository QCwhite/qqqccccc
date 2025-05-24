// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S08 from "../../../Scharacter/S08";
import A581 from "./A581";
import { AudioManager } from '../../../BASE/music';

@ccclass('A581P2')
export default class A581P2 extends A581 {
Aface: number[]=[1,2,3];
TheNumber: string="A581P2";
BTS: number=3;
DT:boolean=false

   Ytype: number=13;
    attack() {
        console.log(this.node.getComponent(Character))

        if(this.node.getComponent(Character).attack1.length!=null){for(let a of this.node.getComponent(Character).attack1){a.Attack1()}}
        setTimeout(() => {
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
        let an: number[] = [];
        for (let mannger of AF) {



        an.push(this.node.getComponent(Character).findGe(mannger, 1));

        }

        this.QD(an);
        }, this.node.getComponent(Character).delay);
        this.node.getComponent(Character).delay=0


       }
 
       
QD(an: number[]): void {
        let A1=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],GeZiManager.BanMove);
        let A2=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[1])])[0],GeZiManager.BanMove);
        let A3=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[2])])[0],GeZiManager.BanMove);

 //MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        AudioManager.instance.ZJP("attack",this.Ytype)
        if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
        MessageCenter.MakeSHMessage("AM", this.mArr1Arr2(A1,A2,A3), this.SH,this.node.getComponent(Character).Pturn, "wuli")
        if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
        if(this.node.getComponent(S08).king){this.yy()}
        this.BTS--;

        this.ZD()

}
start(): void {

                super.start()
                this.tishi.node.setScale(0.8,0.8)
                
        this.node.getComponent(Character).attack3.push(this)
}
ZD(){
        if (this.node&&this.node.getComponent(S08).king) {

        }
        switch (this.BTS) {
        case 1:this.tishi.changeF(5,1)

        break;
        case 2:this.tishi.changeF(6,1)

        break;
        case 3:this.tishi.changeF(7,1)

        break;

        default:if ( this.BTS==0) {
        this.node.getComponent(Character).changeE("A580")
        for(let a of this.node.getComponent(Character).CHF){
        a.changeE("A580")

        }
        }
        break;
        }
}
  changeEP(): void {
          
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
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import A581 from "./A581";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A581P1 extends A581 {
// Aface: number[]=[1,2,3];
// TheNumber: string="A581P1";
// BTS: number=3;
// DT:boolean=false
// TNJ:number=-1
// 
//     attack() {
//         console.log(this.node.getComponent(Character))
//       
//         if(this.node.getComponent(Character).attack1.length!=null){for(let a of this.node.getComponent(Character).attack1){a.Attack1()}}
//         setTimeout(() => {
//          let AF = [].concat(this.Aface);
//          let i = 0;
//          switch (this.node.getComponent(Character).faceTo) {
//            case 6: i = 1;
//              break;
//            case 8: i = 2;
//              break;
//            case 4: i = 3;
//              break;
//          }
//      
//      
//          for (let n = 1; n <= i; n++) {
//            this.turn6(AF);
//          }
//          let an: number[] = [];
//          for (let mannger of AF) {
//      
//      
//      
//            an.push(this.node.getComponent(Character).findGe(mannger, 1));
//      
//          }
//         
//          this.QD(an);
//         }, this.node.getComponent(Character).delay); 
//         this.node.getComponent(Character).delay=0
// 
//         
//        }
//  
//        
// QD(an: number[]): void {
//     let A1=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],GeZiManager.BanMove);
//     let A2=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[1])])[0],GeZiManager.BanMove);
//     let A3=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[2])])[0],GeZiManager.BanMove);
// 
// 
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//     MessageCenter.MakeSHMessage("AM", this.mArr1Arr2(A1,A2,A3), this.SH,this.node.getComponent(Character).Pturn, "wuli")
//     if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//       if(this.node.getComponent(S08).king){this.yy()} 
//       this.BTS--;
// 
//       this.ZD()
//     
// }
// 
// start(): void {
//   this.node.getComponent(Character).attack3.push(this)
// }
// 
// ZD(){
//   if (this.node&&this.node.getComponent(S08).king) {
//     
//   }
//   switch (this.BTS) {
//     case 1:this.tishi.changeF(5,1)
//       
//       break;
//       case 2:this.tishi.changeF(6,1)
//       
//       break;
//       case 3:this.tishi.changeF(7,1)
//       
//       break;
//   
//     default:if ( this.BTS==0) {
//       this.node.getComponent(Character).changeE("A580")
//       for(let a of this.node.getComponent(Character).CHF){
// a.changeE("A580")
// 
//       }
//     }
//       break;
//   }
// }
//   
// 
//        
//       }
