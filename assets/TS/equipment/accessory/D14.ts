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
import DXX from "./DXX";

@ccclass('D14')
export default class D14 extends DXX {
    target:Character=null;
    TheNumber:string = 'D14';
    Cname:string="仙女吊坠"
k:number=0

    start () {
        this.target=this.node.getComponent(Character);
       // this.target.qi3.push(this)
        this.target.magic3.push(this)
    }
 
Qi3(): void {
    this.target.TNJJ[4]+=this.k

if (this.target.qi>=4) {
   this.k=2 
}else if(this.target.qi>=2){

    this.k=1

}else{ this.k=0}
this.target.TNJJ[4]-=this.k
}
remove(): void {
    GeZiManager.shanchu(this.target.magic3,this)
   
  }


  Magic3(ZB: number): void {



let k=GeZiManager.Rhun
    if (this.target.color=="Blue") {
        let k=GeZiManager.Bhun    
    }

    k+=this.target.Ehun
          MessageCenter.MakeSHMessage("AM",[this.target.ZB],k,this.target.Pturn,"TN+")
  }
}