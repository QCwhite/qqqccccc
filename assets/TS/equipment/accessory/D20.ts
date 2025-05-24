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

@ccclass('D20')
export default class D20 extends DXX {
    target:Character=null;
    TheNumber:string = 'D20';
    Cname:string="元素之心"


    start () {
        this.target=this.node.getComponent(Character);
      
        this.target.Fus(-10)
            this.changeEP()
    }
 
remove(){

    this.target.BFUs(-10)
}
}
