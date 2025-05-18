// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import turn from "../../game/time/turn";
import fireball from "../des/fireball";

@ccclass('SGeZi')
export default class SGeZi extends fireball {
ooo:number=0;
    start() {
        turn.YuanGong.push(this)  ;
        this.rond=turn.round;

        this.turn=turn.turn;
        this.ot();

    }
ot(){

        switch (this.ooo) {
        case 0:
        break;

        default:
        break;
        }



}
    BZ(): void {
        switch (this.ooo) {
        case 0:this.node.destroy();
        this.turn=7;


        break;

        default:
        break;
        }
}
}


