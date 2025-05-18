// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Vec2, v2, Node, find, EventTouch, UITransform, Vec3, Input } from 'cc';
const { ccclass, property } = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import JJ from "./JJ";

@ccclass('DoubleJ')
export default class DoubleClickListener extends ComponentBase {
    private lastClickTime: number = 0; // 上次点击时间
    private lastClickPosition: Vec3 = new Vec3(); // 上次点击位置
    @property
    doubleClickInterval: number = 300; // 双击时间间隔（毫秒）
    @property
    doubleClickThreshold: number = 50; // 双击位置容忍度（像素）
    start() {
        // 绑定触摸开始事件
     this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onDestroy() {
        // 解绑触摸开始事件
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(event: EventTouch) {
        const now = Date.now();
        const touchPosition = event.getUILocation(); // 获取触摸点的 UI 坐标
        const localPosition = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(touchPosition.x, touchPosition.y,0)); // 转换为节点本地坐标

        // 计算两点之间的距离平方
        const distanceSquared = Vec2.squaredDistance(localPosition, this.lastClickPosition);

        // 检查是否满足双击条件：时间间隔和位置容忍度
        if (now - this.lastClickTime < this.doubleClickInterval &&
            distanceSquared < this.doubleClickThreshold * this.doubleClickThreshold) {
            // 执行双击事件的回调
            this.onDoubleClick();
        }

        // 更新上次点击时间和位置
        this.lastClickTime = now;
        this.lastClickPosition.set(localPosition);
    }



    onDoubleClick() {
       find("Canvas/Main Camera").getComponent(JJ).HG(this.node)
         }}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import ComponentBase from "../../BASE/ComponentBase";
// import JJ from "./JJ";
// const { ccclass, property } = _decorator;
// 
// @ccclass
// export default class DoubleClickListener extends ComponentBase {
//     @property
//     private doubleClickInterval: number = 300; // 双击间隔时间，单位为毫秒
//     @property
//     private doubleClickThreshold: number = 10; // 双击位置的容忍度，单位为像素
// 
//     private lastClickTime: number = 0; // 上次点击时间
//     private lastClickPosition: Vec2 = v2(0, 0); // 上次点击位置
// 
//     start() {
//         this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
//     }
// 
//     onDestroy() {
//         this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
//     }
// 
//     onTouchStart(event: Touch) {
//         const now = Date.now();
//         const touchPosition = this.node.convertToNodeSpaceAR(event.getLocation());
// 
//       检查是否满足双击条件：时间间隔和位置容忍度
//         if (now - this.lastClickTime < this.doubleClickInterval &&
//             (touchPosition.x - this.lastClickPosition.x) * (touchPosition.x - this.lastClickPosition.x) +
//             (touchPosition.y - this.lastClickPosition.y) * (touchPosition.y - this.lastClickPosition.y) <
//             this.doubleClickThreshold * this.doubleClickThreshold) {
//           执行双击事件的回调
//             this.onDoubleClick();
//         }
// 
//       更新上次点击时间和位置
//         this.lastClickTime = now;
//         this.lastClickPosition = touchPosition;
//     }
// 
//     onDoubleClick() {
//    find("Canvas/Main Camera").getComponent(JJ).HG(this.node)
//     }}
