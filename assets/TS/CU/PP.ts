

import { find } from 'cc';
import { director } from 'cc';
import { _decorator, Component, Node, Tween, tween, Vec3 } from 'cc';
import label from '../UIS/label';
import { Label } from 'cc';
import KHD2 from '../Message/KHD2';
import { AudioManager } from '../BASE/music';
const { ccclass, property } = _decorator;

@ccclass('PP')
export class PP extends Component {

    @property({ type: Node })
    targetNode: Node | null = null;

    @property
    rotationSpeed: number = 180;

    private currentTween: Tween<Node> | null = null; // 明确声明 Tween 类型

    start1() {
        if (!this.targetNode) return;
        this.stop();

        // 使用 by 实现相对旋转
        this.currentTween = tween(this.targetNode)
            .repeatForever(
                tween()
                .by(1, { 
                    eulerAngles: new Vec3(0, 0, this.rotationSpeed) 
                })
            )
            .start();
            find("Canvas/SpriteSplash/an/Label").getComponent(Label).string="匹配中..."

              AudioManager.instance.ZJP("bgm",1,{
                        loop: true,
                        volume: 0.8,
                        fadeIn: 2})
                   
    }

    stop() {
        find("Canvas/SpriteSplash/SpriteSplash").active=false
find("Canvas/SpriteSplash/qingwa").active=false
        if (this.currentTween) {
            // 正确调用实例的 stop 方法 ✅
            this.currentTween.stop();
            this.currentTween = null;
        }
          find("Canvas/SpriteSplash/an/Label").getComponent(Label).string="开始匹配"
    }

    onDestroy() {
       // this.stop();
       if (this.currentTween) {
        // 正确调用实例的 stop 方法 ✅
        this.currentTween.stop();
        this.currentTween = null;
    }
    }





StPP(){if(this.currentTween){this.stop()}else{this.start1();KHD2.startPP()}




}
yes(){

KHD2.yesPP()

}
NO(){

    KHD2.NoPP()
    
    }
    CS(){
        
        if(this.currentTween){this.stop()}
        
        
        director.loadScene("CS", function(){})}












}


