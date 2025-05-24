// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";

  @ccclass('C11')
export default class C11 extends CXX {
    target:Character=null;
    TheNumber:string = 'C11';
        Cname:string="水晶鞋"
    start () {

      this.target=this.node.getComponent(Character);
      this.target.walk3.push(this);
   this.changeEP()
   let g=0
   if (this.target.accessory.TheNumber=="D02") {
       g++
   }
   if (this.target.weapon.TheNumber=="A143") {
       g++
   }
   if (this.target.body.TheNumber=="B13") {
       g++
   }
   
   MessageCenter.MakeSHMessage("AM",[this.target.ZB],g,this.target.Pturn,"Qi+")
        }
        
     Walk3(ZB: number): void {
      MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
      }
    
    
    remove(){
      GeZiManager.shanchu(this.target.walk3,this)
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
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
//   @ccclass
// export default class C11 extends CXX {
// 
//     target:Character=null;
//     TheNumber:string = 'C11';
//         Cname:string="水晶鞋"
//     start () {
// 
//         this.target=this.node.getComponent(Character);
//         this.target.walk3.push(this);
//            
//         }
//         
//      Walk3(ZB: number): void {
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
//       }
//     
//     
//     remove(){
//        GeZiManager.shanchu(this.target.walk3,this)
//     }
//     
//     
//     }
