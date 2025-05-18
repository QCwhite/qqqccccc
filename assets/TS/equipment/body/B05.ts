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
import BXX from "./BXX";
import Cspine from '../../BASE/spineANDgif/Cspine';
import Shops from '../../UIS/shop/shops';

@ccclass('B05')
export default class B05 extends BXX {
        target:Character=null;
        TheNumber:string = 'B05';
        Cname:string="守护者"
        N:number=0
    
        start () {
          //  this.target=this.node.getComponent(Character);
          //  this.N=this.target.M
           // this.target.M=2
           // this.target.ghost=true;
           // this.target.mk-=1;
    
       this.target=this.node.getComponent(Character);
           GeZiManager.P1.behurt3.push(this)
           GeZiManager.P2.behurt3.push(this)
           GeZiManager.P3.behurt3.push(this)
           GeZiManager.P4.behurt3.push(this)
           GeZiManager.P5.behurt3.push(this)
           GeZiManager.P6.behurt3.push(this)
           
           GeZiManager.shanchu(this.target.behurt3,this)
        }
    
    Behurt3(n: number, killp: any, k: number,bD:number): void {
      if (this.target.getNIGno5(this.target.ZB).includes(this.target.getc(bD).ZB)&&this.target.HP>this.target.getc(bD).HP) {
        MessageCenter.MakeSHMessage("AM", [this.target.ZB], 1,this.node.getComponent(Character).Pturn, "HP-");
        MessageCenter.MakeSHMessage("AM", [this.target.getc(bD).ZB], 1,this.node.getComponent(Character).Pturn, "HP+");
    
      }
    }
    
    remove(){
       // this.target.M=this.N
    
         //   this.target.ghost=false;
          //  this.target.mk+=1;
    
          GeZiManager.shanchu(GeZiManager.P1.behurt3,this)
          GeZiManager.shanchu(GeZiManager.P2.behurt3,this)
          GeZiManager.shanchu(GeZiManager.P3.behurt3,this)
          GeZiManager.shanchu(GeZiManager.P4.behurt3,this)
          GeZiManager.shanchu(GeZiManager.P5.behurt3,this)
          GeZiManager.shanchu(GeZiManager.P6.behurt3,this)
    }



     changeEP(){
               let a=this.node.getComponent(Cspine)
      let K="-B"         
      if (this.node.getComponent(Character).color="Red") {
       K="-R" 
      }
                 a.changeSlot(a.spine2,"KB-F",this.node.parent.getComponent(Shops).find(2,this.TheNumber+K,0),0)
              
                 a.changeSlot(a.spine6,"KB-F",this.node.parent.getComponent(Shops).find(6,this.TheNumber+K,2),2)
            
                 a.changeSlot(a.spine4,"KB-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber+K,4),4)
             
                }
    }
    