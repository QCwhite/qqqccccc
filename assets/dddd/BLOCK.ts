//Learn TypeScript:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
//Learn Attribute:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
//Learn life-cycle callbacks:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// BlockInputEvents.ts
import { _decorator, Component, Node, EventTouch } from 'cc';
const { ccclass } = _decorator;

@ccclass('BlockInputEvents')
export class BlockInputEvents extends Component {

    // 需要显式声明方法（重要！）
    private stopPropagation!: (event: EventTouch) => void;

    onLoad() {
        // 使用箭头函数绑定this
        this.stopPropagation = (event: EventTouch) => {
            event.propagationStopped = true;
        };

        // 绑定事件
        this.node.on(Node.EventType.TOUCH_START, this.stopPropagation, this);
        this.node.on(Node.EventType.TOUCH_END, this.stopPropagation, this);
    }

    onDestroy() {
        this.node.off(Node.EventType.TOUCH_START, this.stopPropagation, this);
        this.node.off(Node.EventType.TOUCH_END, this.stopPropagation, this);
    }
}
/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
//Learn TypeScript:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
//Learn Attribute:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
//Learn life-cycle callbacks:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import ComponentBase from "../TS/BASE/ComponentBase";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class Block extends cc.Component {
//     
//         start() {
//            注册触摸开始事件
//             this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
//         }
//     
//         onTouchStart(event) {
//            阻止事件继续传播
//             event.stopPropagation();
//     
//            可以在这里处理节点被点击的逻辑
//             console.log('Click event is blocked by this node.');
//         }
//     
//        可选：如果需要，也可以监听触摸结束事件
//         onTouchEnd(event) {
//            阻止事件继续传播
//             event.stopPropagation();
//     
//            可以在这里处理节点释放的逻辑
//             console.log('Release event is blocked by this node.');
//         }
//     
//         onDestroy() {
//            移除事件监听
//             this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
//             this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
//         }
//     }
