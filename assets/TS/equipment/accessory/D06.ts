// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import realThing from "../../BASE/realThing";
import Cspine from "../../BASE/spineANDgif/Cspine";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";
import sideUI from '../../UIS/sideUI';

@ccclass('D06')
export default class D06 extends DXX {
    target:Character=null;
    TheNumber:string = 'D06';
    Cname:string="保命狗头"
GHP:number=0;
    start () {
         this.target=this.node.getComponent(Character);
        this.target.dead1.push(this)
        this.target.behurt3.push(this)
    }
  Behurt3(n: number,killp:realThing){
        this.GHP=n;
        if (this.target.HP<0) {
            this.GHP=  this.target.HP+n
        }

        console.log(this.target.HP)
  }
    
    
    
    Dead1(){
        this.target.bs=true
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.GHP,this.target.Pturn,"HP+")

        setTimeout(()=>{this.target.node.getComponent(Cspine).FH()},400)
        this.remove();
    }
remove(){

         GeZiManager.shanchu(this.target.behurt3,this);
        GeZiManager.shanchu(this.target.dead1,this)
        let a=this.node.getComponent(Cspine)
        a.changeSlot(a.spine2,"KD1",null,13)
        a.changeSlot(a.spine4,"KD1",null,13)
       a.changeSlot(a.spine6,"KD1",null,13)
       this.TheNumber="DXX"

       for (let m of this.target.UI){
          if(m instanceof sideUI) {
         
             
            m.setEQ("DXX")
       
            break;
       
          }}
}
changeEP(){
         let a=this.node.getComponent(Cspine)

         a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
        a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber,2),2)
       a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber,4),4)

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
// 
// import Character from "../../BASE/Character";
// import realThing from "../../BASE/realThing";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import Shops from "../../UIS/shop/shops";
// import DXX from "./DXX";
// 
// 
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D06 extends DXX {
//     target:Character=null;
//     TheNumber:string = 'D06';
//     Cname:string="保命狗头"
// GHP:number=0;
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.dead1.push(this)
//         this.target.behurt3.push(this)
//     }
//   Behurt3(n: number,killp:realThing){
//       this.GHP=n;
//   }
//     
//     
//     
//     Dead1(){
// this.target.bs=true
// MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.GHP,this.target.Pturn,"HP+")
// 
// setTimeout(()=>{this.target.node.getComponent(Cspine).FH()},400)
// this.remove();
//     }
// 
// 
// 
// 
// 
// 
// remove(){
// 
//     GeZiManager.shanchu(this.target.behurt3,this);
//     GeZiManager.shanchu(this.target.dead1,this)
//     this.target.changeE("DXX")
// }
// 
// changeEP(){
// let a=this.node.getComponent(Cspine)
// 
//   a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//   a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//  a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//   
//  }
// 
// 
// }
