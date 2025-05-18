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
import { SHMessage } from "../../Message/SHMessage";
import weapon from "../weapon/weapon";
import BXX from "./BXX";

@ccclass('B12')
export default class B12 extends BXX {
   
    target:Character=null;
    TheNumber:string = 'B12';
    Cname:string="防弹衣"


    start () {
        this.target=this.node.getComponent(Character);
        this.target.behurt2.push(this)
    }
    Behurt2(m:SHMessage){
        if(m.from!=null){if(this.node.getComponent(Character).getc(m.from).weapon.getComponent(weapon).Wtype==2){GeZiManager.dm-=1;}  
        }
    }
remove(){
    GeZiManager.shanchu(this.target.behurt2,this)
}

}

