// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import turn from "../../game/time/turn";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import DXX from "./DXX";

@ccclass('D18')
export default class D18 extends DXX {
        target:Character=null;
        TheNumber:string = 'D18';
        Cname:string="星"
    
    
        start () {
            this.target=this.node.getComponent(Character);
            this.target.t1.push(this)
            this.target.move3.push(this)
                  MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
                this.changeEP()
        }
     
    T1(turn1: number): void {
       if (turn.DorN=="nigth") {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
       }
           
    
        
    
    }
    Move3(ZB: number, pturn: number): void {
        if (turn.DorN=="nigth") { GeZiManager.Liget(this.target.getNIG(ZB))}
    }
    remove(): void {
      GeZiManager.shanchu(this.target.t1,this)
      GeZiManager.shanchu(this.target.move3,this)
    }
    }
    
    