// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import Pchange from "../Message/Pchange";

@ccclass('TimeC')
export default class  timeC extends ComponentBase {

    @property(Label)
    timerLabel: Label = null;

    @property
    totalTime: number = 30;

    private currentTime: number = 0;
/*
    onLoad () {
        this.timerLabel.string = this.totalTime.toString();
        this.schedule(this.updateTimer, 1);
    }
*/
    updateTimer () {
      
        this.currentTime++;
        let remainingTime = this.totalTime - this.currentTime;
        if (remainingTime > 0) {
            this.timerLabel.string = remainingTime.toString();
        } else {
            this.currentTime = 0;
           this.timeup();
        }
    }

timeup(){//this.timerLabel.string = "Time's up!";
setTimeout(this.resetTimer,1)}

    resetTimer () {
        this.currentTime = 0;
        
    }
}



