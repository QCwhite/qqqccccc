// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label, Sprite, tween, UIOpacity, Vec3 } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import { gif1 } from "../../BASE/spineANDgif/gif";

@ccclass('JNU')
export default class JNU extends ComponentBase {
        @property(gif1)
        g:gif1= null;
    
        @property(Label)
        text:Label =null;
        @property
        public scaleTo: number = 1.5; // 目标缩放值
        @property
        public duration: number = 0.45; // 缩放持续时间
        @property
        public shakeDuration: number = 0.05; // 抖动的持续时间
        @property
        public shakeAmplitude: number =40; // 抖动幅度
        @property
        public fadeDuration: number = 1.8; // 渐入渐出持续时间
        start() {
           
    
    
        }
        fadeInAndScaleAndShake() {
            const originalScale = this.node.scale
            const sprite = this.node.children[0].getComponent(Sprite);
            
            // 先判断是否有Sprite组件，没有则直接进行缩放和抖动
            if (sprite) {
                sprite.node.getComponent(UIOpacity).opacity = 0; // 开始时设置为透明
                tween(sprite.node.getComponent(UIOpacity))
                    .to(this.fadeDuration, { opacity: 255 }) // 渐入
                   
                    .start();
      
                // 直接进行缩放和抖动
                this.scaleAndShake();
            }
        }
        scaleAndShake() {
            const originalScale = this.node.scale
            // 先缩放到目标值
            tween(this.node)
                .to(this.duration, { scale: new Vec3(1.5,1.5) })
                .call(() => {
                    // 动画结束后进行抖动
                    this.shake();
                })
                .start();
        }
        shake() {
            const originalPosition = this.node.position.clone();
            const originalScale = this.node.scale
            // 进行抖动
            tween(this.node)
                .by(this.shakeDuration, { position: new Vec3(0, this.shakeAmplitude, 0) })
                .by(this.shakeDuration, { position: new Vec3(0, -this.shakeAmplitude, 0) })
                .by(this.shakeDuration, { position: new Vec3(0, this.shakeAmplitude, 0) })
                .by(this.shakeDuration, { position: new Vec3(0, -this.shakeAmplitude, 0) })
                .call(() => {
                    // 完成抖动后，恢复原来的位置和缩放
                    this.node.setPosition(originalPosition);
                    this.node.scale=originalScale;
                    
                    if (  this.node.children[0].getComponent(Sprite)) {
                        // 渐出
                        const sprite = this.node.children[0].getComponent(UIOpacity);
                        tween(sprite)
                            .to(this.fadeDuration, { opacity: 0 }) // 渐出
                            .start();
                    }
                })
                .start();
        }
    }
    
    