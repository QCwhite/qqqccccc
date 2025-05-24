// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('DJT')
export default class DJT extends Component {
   
        @property(Label)
        private label: Label | null = null; // 与 Label 组件的引用
        @property(Label)
        private label2: Label | null = null; // 与 Label 组件的引用
        private remainingTime: number = 0; // 剩余时间
        private countingDown: boolean = false; // 是否正在倒计时
    fn:() => void = () => {};      /**
         * 开始倒计时
         * @param duration 倒计时时长，单位秒
         */
        startCountdown(duration: number,n): void {
            this.remainingTime = duration;
            this.countingDown = true;
            this.updateLabel(); // 更新标签显示
            this.schedule(this.updateCountdown, 1); // 每秒更新倒计时\
            this.fn=n
        }
    
        /**
         * 停止倒计时
         */
        stopCountdown(): void {
            this.countingDown = false;
            this.unschedule(this.updateCountdown);
            this.label!.string = "00"; // 重置标签显示
            this.label2!.string = "00"; // 重置标签显示
        }
    
        /**
         * 更新倒计时
         */
        private updateCountdown(): void {
            if (this.countingDown && this.remainingTime > 0) {
                this.remainingTime--;
                this.updateLabel();
            } else if (this.remainingTime <= 0) {
                this.stopCountdown();
                // 执行倒计时结束后的回调
                this.onCountdownFinished();
            }
        }
    
        /**
         * 更新标签显示
         */
        private updateLabel(): void {
            if (this.label) {
                // 格式化为两位数显示
                this.label.string = this.remainingTime.toString().padStart(2, '0');
                this.label2.string = this.remainingTime.toString().padStart(2, '0');
            }
        }
    
        /**
         * 倒计时结束时调用
         */
        private onCountdownFinished(): void {
            
          //  console.log( this.fn)
            this.fn()
        }
    }

