import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import { Component, macro } from 'cc';
import { find } from 'cc';
import turn from '../../game/time/turn';
import MessageCenter from '../../Message/MessageCenter';
import moveUI from '../BASEUI/moveUI';
import KHD2 from '../../Message/KHD2';

@ccclass('Time')
export default class Time extends ComponentBase
{
    @property(Label)  // 绑定显示倒计时的Label组件
    countdownLabel: Label | null = null;

    @property({
        tooltip: "初始倒计时时间（秒）",
        min: 1
    })
    initialTime: number = 45;

   

    private _currentTime: number = 0;
    private _isRunning: boolean = false;
    private _isPaused: boolean = false;

    onLoad() {
        this.reset();
        this. countdownLabel=this.node.getComponent(Label)
    }

    startCountdown() {
        if (this._isRunning) return;
        
        this._isRunning = true;
        this._isPaused = false;
        this.schedule(this.updateTimer, 1, macro.REPEAT_FOREVER, 0);
    }

    pauseCountdown() {
        if (!this._isRunning || this._isPaused) return;
        
        this.unschedule(this.updateTimer);
        this._isPaused = true;
    }

    resumeCountdown() {
        if (!this._isRunning || !this._isPaused) return;
        
        this.schedule(this.updateTimer, 1, macro.REPEAT_FOREVER, 0);
        this._isPaused = false;
    }

    reset() {
        this.unschedule(this.updateTimer);
        this._currentTime = this.initialTime;
        this._isRunning = false;
        this._isPaused = false;
        this.updateDisplay();
    }

    private updateTimer() {
        if (this._currentTime > 0) {
            this._currentTime--;
            this.updateDisplay();
        } else {
            this.stopCountdown();
            this.triggerFinishEvent();
        }
    }

    private updateDisplay() {
        if (!this.countdownLabel) return;
        
        const minutes = Math.floor(this._currentTime / 60).toString().padStart(2, '0');
        const seconds = (this._currentTime % 60).toString().padStart(2, '0');
        this.countdownLabel.string = `${seconds}`;
    }

    private stopCountdown() {
        this.unschedule(this.updateTimer);
        this._isRunning = false;
    }

    private triggerFinishEvent() {

       if (KHD2.PT.includes(turn.turn)) {
         find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(moveUI).bi()
        MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
       }
     
    }

    // 获取当前状态
    get isRunning(): boolean {
        return this._isRunning;
    }

    get isPaused(): boolean {
        return this._isPaused;
    }

    get remainingTime(): number {
        return this._currentTime;
    }
  
 
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import ComponentBase from "../../BASE/ComponentBase";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class Countdown extends ComponentBase
// {
//     thetime:number=30//设定倒计时时间
//     isstop:boolean=false//计时是否停止
//     nowtime:number//倒计时时间显示
// 
//     start(){
//         this.settime(30)
//         // this.starttimer()测试30秒倒计时
// 
//         this.node.active=true
//     }
// 
//     starttimer()
//     {
//         let startime=Date.now()//获取开始倒计时的时间戳
//         //倒计时回调
//         let schedulecallback= () =>
//         {
//             let tnowtime=Date.now()//当前回调的时间戳
//             let nowtime=this.thetime-(Math.floor((tnowtime-startime)/1000+0.1))//计算当前剩余的时间并处理精度,设备的1秒精度在-0.1-0.1左右
//             this.nowtime=nowtime//当前倒计时时间
//             this.node.children[0].getComponent(cc.Label).string=this.nowtime+""
//             console.log(nowtime)
//             // console.log(this.thetime,nowtime,(tnowtime-startime)/1000)测试
//             if(nowtime<=0)
//             {
//                 this.timeend()
//                 this.stoptimer()//时间到点停止
//             }
//             if(this.isstop)//是否结束
//             {
//                 this.isstop=false//停止后置为false,便于下次倒计时的开启
//                 if(nowtime>0) this.timeend()//如果是中途停止的调用这个把数据清除掉
//                 this.unschedule(schedulecallback)//停止
//             }
//         }
//         if(this.thetime>0) this.schedule(schedulecallback,1)//开始倒计时
//     }
// 
// 
//     settime(time:number)//设定倒计时时间
//     {
//         this.thetime=time
//     }
// 
//     timeend()//倒计时结束
//     {
//         console.log("结束")
//         this.thetime=0
//         this.nowtime=0
//     }
// 
//     stoptimer()//停止,可以在倒计时还在运行的时候调用,调用后倒计时停止
//     {
//         this.isstop=true
//     }
// 
// 
//  
// 
// }
