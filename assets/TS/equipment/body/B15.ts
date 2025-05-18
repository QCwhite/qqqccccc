// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../../Manager/GeZiManager";
import { SHMessage } from "../../Message/SHMessage";
import MessageCenter from "../../Message/MessageCenter";
import weapon from "../weapon/weapon";
import Character from "../../BASE/Character";
import BXX from "./BXX";

@ccclass('B15')
export default class B15 extends BXX {
    target:Character=null;
    TheNumber:string = 'B15';
    Cname:string="狂战甲"
jj:number=0

    start () {
        this.target=this.node.getComponent(Character);
        this.target.behurt3.push(this)
        this.target.HPm3.push(this)
       // this.target.t3.push(this)
    }
   Behurt3(n: number, killp: any, k: number): void {
    if (n>0) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+");  
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],n,this.target.Pturn,"Qi+");  
    }

 
   }
      //  this.target.TNJJ[3]-=1
        //this.jj++
       HPM3(): void {
          if (this.jj==1&&this.target.HP!=1) {
            this.target.wk-=1
            this.jj=0
          }
        
        if (this.target.HP==1&&this.jj==0) {
            this.target.wk+=1
            this.jj=1
           }
       }
    
    T3(): void {
        this.target.TNJJ[3]+=this.jj
        this.jj=0
    }
remove(){
    GeZiManager.shanchu(this.target.behurt3,this)
    GeZiManager.shanchu(this.target.HPm3,this)
    //GeZiManager.shanchu(this.target.t3,this)
}





}