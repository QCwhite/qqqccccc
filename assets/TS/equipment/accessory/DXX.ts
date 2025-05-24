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
import Character from '../../BASE/Character';

@ccclass('DXX')
export default class DXX extends equiment {
        TheNumber:string="DXX"
        target:Character
        remove() {
           
        }
        changeEP(){
     let a=this.node.getComponent(Cspine)
   
       let c=this.target.Pturn
       
       a.changeSlot(a.spine2,"KD2-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KD2-F",c),0)
     
      a.changeSlot(a.spine6,"KD2-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KD2-F",c),2)
      a.changeSlot(a.spine4,"KD2-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KD2-F",c),4)
      }
       
     }
     