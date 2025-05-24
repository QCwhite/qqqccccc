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
import Character from "../../BASE/Character";
import BXX from "./BXX";

@ccclass('B02P')
export default class B02P extends BXX {
    target:Character=null;
    TheNumber:string = 'B02P';
    Cname:string="恶魔魔法袍"


    start () {
        this.target=this.node.getComponent(Character);
      //  this.target.behurt2.push(this)
        this.target.t3.push(this)
        this.target.mk+=1;
            this.changeEP()
    }
    Behurt2(m:SHMessage){
        if(m.SHtype=="mofa"&&m.from!=this.target.Pturn){MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")} 
     
    
    }

T3(): void {
    MessageCenter.MakeSHMessage("AM",this.target.getNIG(this.target.ZB),1,this.target.Pturn,"mofa")
}

remove(){
    GeZiManager.shanchu(this.target.t3,this);
    this.target.mk-=1;
}
}