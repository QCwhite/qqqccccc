// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Camera, Vec3,Node, EventTouch, Vec2, UITransform, Input } from 'cc';
const {ccclass, property} = _decorator;

import mouse from "./mouse";

@ccclass('Touch')
export class CameraController extends Component {
  
    
   
  
        @property
    dragSpeed: number = 1.0; // 拖动速度

    @property
    minZoom: number = 0.5; // 最小缩放比例

    @property
    maxZoom: number = 2.0; // 最大缩放比例

    private lastTouchPos: Vec3 | null = null;

    start() {
        // 注册触摸事件
      this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
       
    }

    private onTouchMove(event: EventTouch) {
        const touches = event.getTouches();

        if (touches.length === 1) {
            // 移动摄像机
            const currentTouchPos = new Vec3(event.getLocation().x,event.getLocation().y,0)
            if (this.lastTouchPos) {
                const delta = currentTouchPos.subtract(this.lastTouchPos);
                const newPosition = this.node.position.add(new Vec3(delta.x * this.dragSpeed, delta.y * this.dragSpeed, 1000));
                this.node.setPosition(newPosition);
            }
            this.lastTouchPos = currentTouchPos; // 更新最后触摸位置
        } else if (touches.length === 2) {
            // 缩放功能
            const touch1 = touches[0];
            const touch2 = touches[1];
            const uiTransform = this.node.parent.getComponent(UITransform);
            const touchPoint1 = uiTransform.convertToNodeSpaceAR(new Vec3(touch1.getLocation().x, touch1.getLocation().y, 0));
            const touchPoint2 = uiTransform.convertToNodeSpaceAR(new Vec3(touch2.getLocation().x, touch2.getLocation().y, 0));
            const distance = touchPoint1.subtract(touchPoint2);

            // 计算缩放
            let scale = this.node.scale.x; // 假设缩放在 X 和 Y 方向上是相同的
            scale += distance.length() * 0.01; // 调整缩放敏感度
            // 确保缩放在最大和最小范围内
            scale = Math.min(Math.max(scale, this.minZoom), this.maxZoom);
            this.node.setScale(scale, scale, this.node.scale.z);
        }
    }

    onDestroy() {
        // 注销触摸事件
        this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }
}