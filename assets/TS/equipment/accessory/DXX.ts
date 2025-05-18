// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import equiment from "../../BASE/equipment";
import Cspine from "../../BASE/spineANDgif/Cspine";
import Shops from "../../UIS/shop/shops";

@ccclass('DXX')
export default class DXX extends equiment {
        TheNumber:string="DXX"
        remove() {
           
        }
        changeEP(){
     let a=this.node.getComponent(Cspine)
     
       a.changeSlot(a.spine2,"KD2-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
     
      a.changeSlot(a.spine6,"KD2-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,2),2)
      a.changeSlot(a.spine4,"KD2-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,4),4)
      }
       
     }
     