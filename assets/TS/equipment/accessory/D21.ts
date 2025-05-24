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

@ccclass('D21')
export default class D21 extends DXX {
    target:Character=null;
    TheNumber:string = 'D21';
    Cname:string="胜利之钥"
  

start(): void {
    this.target=this.node.getComponent(Character);
 
    if (this.target.color=="Blue") {
    GeZiManager.blueD21+=1
   } else{  GeZiManager.redD21+=1}
       this.changeEP()
}



remove(): void {
    if (this.target.color=="Blue") {
        GeZiManager.blueD21-=1
       } else{  GeZiManager.redD21-=1}
    }

}
