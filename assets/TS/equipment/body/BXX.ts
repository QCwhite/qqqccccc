// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import equipment from "../../BASE/equipment";
import Cspine from "../../BASE/spineANDgif/Cspine";
import Shops from "../../UIS/shop/shops";

@ccclass('BXX')
export default class BXX extends equipment {
   

    TheNumber:string = 'BXX';
    target: Character=null;
    changeEP(){
     let a=this.node.getComponent(Cspine)
   
       let c=this.target.Pturn

     a.changeSlot(a.spine2,"KB-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KB-F",c),0)

     a.changeSlot(a.spine6,"KB-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KB-F",c),2)

     a.changeSlot(a.spine4,"KB-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KB-F",c),4)
         }
    remove(){}
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
// import equipment from "../../BASE/equipment";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import Shops from "../../UIS/shop/shops";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class BXX extends equipment {
//     TNN() {
//       
//     }
// 
//     target:Character=null;
// 
//     TheNumber:string = 'BXX';
//     changeEP(){
//         let a=this.node.getComponent(Cspine)
//         
//           a.changeSlot(a.spine2,"KB-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//          
//           a.changeSlot(a.spine6,"KB-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
// 
//           a.changeSlot(a.spine4,"KB-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//          }
// 
//     remove(){}
// }
