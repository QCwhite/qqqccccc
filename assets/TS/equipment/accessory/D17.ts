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
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";

@ccclass('D17')
export default class D17 extends DXX {
        target:Character=null;
        TheNumber:string = 'D17';
          Cname:string="血轮"
          start () {
              this.target=this.node.getComponent(Character);
              this.target.attack25.push(this)
             // this.target.Attack1.push(this)
          }
      Attack25(at: any, csh: number): void {
        if (at&&at instanceof Character&&csh!=0) {
          console.log(csh)
          MessageCenter.MakeSHMessage("AM",[at.ZB],1,this.target.Pturn,"HP+") 
          //MessageCenter.MakeSHMessage("AM",[at.ZB],1,this.target.Pturn,"MaxHP-") 
        }
      }
      Attack1(): void {
        //  MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-") 
       
      }
      
      remove(): void {
        GeZiManager.shanchu(this.target.attack25,this)
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
      