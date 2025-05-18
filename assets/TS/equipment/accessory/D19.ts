// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import Cspine from "../../BASE/spineANDgif/Cspine";
import turn from "../../game/time/turn";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";

@ccclass('D19')
export default class D19 extends DXX {
      target: any;
      TheNumber:string = 'D19';
        Cname:string="阴阳脸"
        start () {
            this.target=this.node.getComponent(Character);
            this.target.behurt2.push(this)
        }
     
  
    Behurt2(m: SHMessage, BeHC: any, HC: any): void {
        if (m.SHtype=="wuli"&&turn.round%2==1) {
          GeZiManager.ms-=99
        }else  if (m.SHtype=="mofa"&&turn.round%2==0) {
  
          GeZiManager.ms-=99
        }
    }
    
    remove(): void {
      GeZiManager.shanchu(this.target.behurt2,this)
      let a=this.node.getComponent(Cspine)
    
      a.changeSlot(a.spine2,"KD1",null,13)
      a.changeSlot(a.spine4,"KD1",null,13)
     a.changeSlot(a.spine6,"KD1",null,13)
    }
  
  
    changeEP(){
    let a=this.node.getComponent(Cspine)
    
      a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
      a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber,2),2)
     a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber,4),4)
      
     }
  }
  