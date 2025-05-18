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
import Cspine from "../../BASE/spineANDgif/Cspine";
import Shops from "../../UIS/shop/shops";

@ccclass('B02')
export default class B02 extends BXX {
    target:Character=null;
    TheNumber:string = 'B02';
    Cname:string="魔法袍"


    start () {
        this.target=this.node.getComponent(Character);
       
        this.target.mk+=1;
    }
    Behurt2(m:SHMessage){
      //  if(m.SHtype=="mofa"&&m.from!=this.target.Pturn){MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")} 
     
    
    }
remove(){
  
    this.target.mk-=1;
}
 
}
