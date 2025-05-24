// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Cspine from "../../../BASE/spineANDgif/Cspine";
import Shops from "../../../UIS/shop/shops";
import weapon from "../weapon";

@ccclass('Dao')
export default class Dao extends weapon {
Wtype: number=1;
Ytype: number=1;
    remove(): void {
        let a=this.node.getComponent(Cspine)
           a.changeSlot(a.spine2,"A1",null,13)
           a.changeSlot(a.spine4,"A1",null,13)
           a.changeSlot(a.spine6,"A1",null,13)
    }
changeEP(){
         let a=this.node.getComponent(Cspine)
console.log(this.target)
        a.changeSlot(a.spine2,"A1",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"A1",this.target.Pturn),2)
        a.changeSlot(a.spine4,"A1",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"A1",this.target.Pturn),2)
        a.changeSlot(a.spine6,"A1",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"A1",this.target.Pturn),2)
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
// import Cspine from "../../../BASE/spineANDgif/Cspine";
// import Shops from "../../../UIS/shop/shops";
// import weapon from "../weapon";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class Dao extends weapon {
// 
// Wtype: number=1;
//     
// 
// changeEP(){
//     let a=this.node.getComponent(Cspine)
//     
//       a.changeSlot(a.spine2,"A1",this.node.parent.getComponent(Shops).find(2,this.TheNumber.toLowerCase()))
//       a.changeSlot(a.spine4,"A1",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//     a.changeSlot(a.spine6,"A1",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//      }
// 
// }
