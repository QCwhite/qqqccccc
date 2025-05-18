// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import CHF from "../../../BASE/CHF";
import state from "../../../game/time/state";
import GeZiManager from "../../../Manager/GeZiManager";
import { Message } from "../../../Message/Message";
import MessageCenter from "../../../Message/MessageCenter";
import S08 from "../../../Scharacter/S08";
import SXX from "../../../Scharacter/SXX";
import Qiang from "../Qiang/Qiang";
import { AudioManager } from '../../../BASE/music';

@ccclass('A581')
export default class A581 extends Qiang {
  TheNumber: string="A581";
  SH:number=1;
BTS:number=3
DT:boolean=true
Wtype: number=81;

   Ytype: number=13;
    attack() {

        if(this.node.getComponent(S08).king){state.ST = 3
        GeZiManager.DLLM="A321"
        GeZiManager.qing();
        let AF=[1,2,3]
        let i = 0;
        switch (GeZiManager.PCP.faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        GeZiManager.PCP.turn6(AF);

        }
        let an: number[] = [];
//              面向对齐




        for (let mannger of AF) {



        an.push(GeZiManager.PCP.findGe(mannger, 1));

        }

        GeZiManager.GeZis = [].concat(an);

        let g = new Message("", GeZiManager.GeZis, 1);
        for (let m of GeZiManager.YuanGong) {


        m.red()
        m.ReceiveMessage(g)

        }
        MessageCenter.MakeMessage("UIManager", "change", -1);



        }





       }
QD(an: number[]): void {


        if (this.node.getComponent(S08).king) {
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
        this.BTS--;

 
        }

        this.ZD()


}
yy(){ 

        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
        GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
        GeZiManager.TNC[3]=4
GeZiManager.Bu.push(3);}
start(): void {

        super.start()
        this.tishi.node.setScale(0.8,0.8)
        
this.target=this.node.getComponent(Character)

}
ac(k: number): void {
        if (this.node!=null&&this.node.getComponent(Character).HP>0) {
        let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr,k,GeZiManager.BanMove);

        console.log(k)
        console.log(A2)

        MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
        console.log(this.node.getComponent(Character).ZB)
        console.log(this.node.getComponent(SXX).Fsn)
        this.ZD()
        }

}
  remove(): void {
        if (this.tishi&&this.node.getComponent(S08).king){this.tishi.changeF(-1,1)}
//   this.destroy();
//   this.node.removeComponent(this)
      }
ZD(){
        if (this.node&&this.node.getComponent(S08).king&&this.tishi) {

        }
        switch (this.BTS) {
        case 1:this.tishi.changeF(5,1)

        break;
        case 2:this.tishi.changeF(6,1)

        break;
        case 3:this.tishi.changeF(7,1)

        break;
        case 99:this.tishi.changeF(7,1)

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
// import CHF from "../../../BASE/CHF";
// import state from "../../../game/time/state";
// import GeZiManager from "../../../Manager/GeZiManager";
// import { Message } from "../../../Message/Message";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import SXX from "../../../Scharacter/SXX";
// import Qiang from "../Qiang/Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A581 extends Qiang {
//   TheNumber: string="A581";
//   SH:number=1;
// BTS:number=3
// DT:boolean=true
// Wtype: number=81;
// TNJ:number=-1
//     attack() {
//    
//         if(this.node.getComponent(S08).king){state.ST = 3
//          GeZiManager.DLLM="A321"
//          GeZiManager.qing();
//         let AF=[1,2,3]
//          let i = 0;
//          switch (GeZiManager.PCP.faceTo) {
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
//            GeZiManager.PCP.turn6(AF);
//      
//          }
//          let an: number[] = [];
//               面向对齐
//      
//      
//      
//      
//          for (let mannger of AF) {
//      
//      
//      
//            an.push(GeZiManager.PCP.findGe(mannger, 1));
//      
//          }
//      
//          GeZiManager.GeZis = [].concat(an);
//      
//          let g = new Message("", GeZiManager.GeZis, 1);
//          for (let m of GeZiManager.YuanGong) {
//      
//      
//            m.red()
//            m.ReceiveMessage(g)
//      
//          }
//          MessageCenter.MakeMessage("UIManager", "change", -1);
//      
//      
//      
//          }
//         
//       
//          
//      
//      
//        }
// 
// QD(an: number[]): void {
// 
// 
//   if (this.node.getComponent(S08).king) {
//     let A2 = GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],GeZiManager.BanMove);
//    
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
// MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
// if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//   if(this.node.getComponent(S08).king){this.yy()} 
//  for(let a of this.node.getComponent(S08).FSM){
//   
//   if ( a.node.getComponent(A581)!=null) {
//     a.node.getComponent(A581).ac(this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0])} 
//   
//   }
//   this.BTS--;
// 
//     this.ZD()
//   } 
// 
// 
//  
// 
// }
// yy(){ 
// 
// MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
// GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
// GeZiManager.TNC[3]=4
// GeZiManager.Bu.push(3);}
// 
// 
// start(): void {
//  if (this.node.getComponent(S08).king) {
//   super.start()
//   this.tishi.node.scale=0.8
//  }
//  
// 
// }
// 
// ac(k: number): void {
// if (this.node!=null&&this.node.getComponent(Character).HP>0) {
//   let A2 = GeZiManager.line(this.node.getComponent(Character).ZB, this.ptr,k,GeZiManager.BanMove);
//   
//   console.log(k)
//   console.log(A2)
// 
// MessageCenter.MakeSHMessage("AM", A2, this.SH,this.node.getComponent(Character).Pturn, "wuli")
// console.log(this.node.getComponent(Character).ZB)
// console.log(this.node.getComponent(SXX).Fsn)
// 
// }
//  
// }
// 
//   remove(): void {
//     if (this.tishi&&this.node.getComponent(S08).king){this.tishi.changeF(-1,1)}
//    this.destroy();
//    this.node.removeComponent(this)
//       }
// 
// 
// 
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
//       case 99:this.tishi.changeF(7,1)
//       
//       break;
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
// }
