// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// //刺猬壳
// //效果改为：对装备者身后一格的攻击方造成1点反伤

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
import Shops from '../../UIS/shop/shops';

@ccclass('B08')
export default class B08 extends BXX {
TheNumber: string="B08";
    
    Cname:string="刺猬壳"
    start () {
        
       this.node.getComponent(Character).behurt2.push(this);
//this.node.getComponent(Character).behurt3.push(this);
   this.changeEP()
    }
Behurt2(m: SHMessage, BeHC: any, HC: any): void {
//  被攻击者的面向与攻击者在被攻击者的方位相对 例如：1对9 9对1
// console.log(this.node.getComponent(Character).getdis(this.node.getComponent(Character).getc(m.from).ZB))
       let a=this.node.getComponent(Character)
       let c=a.PfaceFinal(a.faceTo,[7,8,9])





       if(a.getc(m.from)!=null&&c.includes(a.getc(m.from).faceIs(a.ZB))){
       GeZiManager.dm-=1;
       let d=[a.findGe(c[0],1),a.findGe(c[1],1),a.findGe(c[2],1)]
       MessageCenter.MakeSHMessage("AM",d,1,this.node.getComponent(Character).Pturn,"wuli")
       }
 }
        
   Behurt3(n: number, killp: any, k: number): void {
       let a=this.node.getComponent(Character)
       let c=a.PfaceFinal(a.faceTo,[7,8,9])
      

   }
    
   remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).behurt2 ,this);
       //GeZiManager.shanchu(this.node.getComponent(Character).behurt3 ,this);


       let a=this.node.getComponent(Cspine)
             
       a.changeSlot(a.spine2,"KB-F",null,13)
       a.changeSlot(a.spine2,"KB-B",null,13)
       a.changeSlot(a.spine6,"KB-F",null,13)
       a.changeSlot(a.spine6,"KB-B",null,13)
       a.changeSlot(a.spine4,"KB-F",null,13)
       a.changeSlot(a.spine4,"KB-B",null,13)

}
   changeEP(){
             let a=this.node.getComponent(Cspine)
             let c=this.target.Pturn
               a.changeSlot(a.spine2,"KB-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KB-F",c),0)
               a.changeSlot(a.spine2,"KB-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-B","KB-B",c),1)
               a.changeSlot(a.spine6,"KB-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KB-F",c),2)
               a.changeSlot(a.spine6,"KB-B",this.node.parent.getComponent(Shops).find(6,this.TheNumber+"-B","KB-B",c),3)
               a.changeSlot(a.spine4,"KB-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KB-F",c),4)
               a.changeSlot(a.spine4,"KB-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-B","KB-B",c),5)
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
// //刺猬壳
// //效果改为：对装备者身后一格的攻击方造成1点反伤
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B08 extends BXX {
// 
// TheNumber: string="B08";
//     
//     Cname:string="刺猬壳"
// 
// 
//     start () {
//         this.node.getComponent(Character).behurt2.push(this);
//         this.node.getComponent(Character).behurt3.push(this);
//     }
// Behurt2(m: SHMessage, BeHC: any, HC: any): void {
//   被攻击者的面向与攻击者在被攻击者的方位相对 例如：1对9 9对1
//  console.log(this.node.getComponent(Character).getdis(this.node.getComponent(Character).getc(m.from).ZB))
//    let a=this.node.getComponent(Character)
//    let c=a.PfaceFinal(a.faceTo,[7,8,9])
//   
// 
// 
// 
//  
//  if(a.getc(m.from)!=null&&c.includes(a.getc(m.from).faceIs(a.ZB))){
//     GeZiManager.dm-=1;
//   
//     }
//  }
//         
//    Behurt3(n: number, killp: any, k: number): void {
//     let a=this.node.getComponent(Character)
//     let c=a.PfaceFinal(a.faceTo,[7,8,9])
//     let d=[a.findGe(c[0],1),a.findGe(c[1],1),a.findGe(c[2],1)]
//     MessageCenter.MakeSHMessage("AM",d,1,this.node.getComponent(Character).Pturn,"wuli")
// 
//    }
//     
//    remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).behurt2 ,this);
//     GeZiManager.shanchu(this.node.getComponent(Character).behurt3 ,this);
// }
//   
// }
