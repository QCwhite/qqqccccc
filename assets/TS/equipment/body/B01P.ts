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
import { SHMessage } from "../../Message/SHMessage";
import Shops from "../../UIS/shop/shops";
import BXX from "./BXX";

@ccclass('B01P')
export default class B01P extends BXX {
        target:Character=null;
        TheNumber:string = 'B01P';
        Cname:string="黄金甲"
    
    /*
        start () {
            this.target=this.node.getComponent(Character);
            this.target.wk+=1;
            
        }
      
    
    remove(){
        this.target.wk-=1;
        
    }
    TNN(): void {
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
    }
    */
    
    
    
    start () {
        this.target=this.node.getComponent(Character);
     this.target.behurt222.push(this)
        this.changeEP()
    }
    Behurt222(k:number, arg1: this, arg2: any): void {
   
    GeZiManager.ms-=99
    
    this.target.changeE("B01")
    
    }
    
    remove(){
    GeZiManager.shanchu( this.target.behurt222,this)
    }
    
    
    
    }