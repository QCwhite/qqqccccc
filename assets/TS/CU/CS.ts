import { _decorator, Component, Node, Button, tween, Vec3, Tween } from 'cc';
import CustomButton from '../BASE/CButton';
import { director } from 'cc';
import KHD2 from '../Message/KHD2';
import { AudioManager } from '../BASE/music';
import MessageCenter from '../Message/MessageCenter';
import { find } from 'cc';
import { Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TogglePosition')
export class TogglePosition extends Component {

    @property({ type: Node })
    targetNode: Node | null = null;  // 需要移动的节点

    @property({ type: CustomButton })
    controlButton: CustomButton | null = null;  // 控制按钮

    @property(Vec3)
    targetPosition: Vec3 = new Vec3(0, 0, 0);  // 目标位置

    @property({ tooltip: "移动持续时间（秒）" })
    duration: number = 0.5;  // 默认0.5秒完成移动

    private originalPosition: Vec3 = new Vec3();  // 原始位置存储
    private isMoving: boolean = false;  // 防止重复点击
    private currentTween: Tween<Node> | null = null;  // 当前动画引用
    private isAtOriginalPosition: boolean = true;  // 位置状态标记

    onLoad() {
        // 保存初始位置
        if (this.targetNode) {
            Vec3.copy(this.originalPosition, this.targetNode.position);
        }

        // 绑定按钮点击事件
       
    }

    onButtonClick() {
        if (!this.targetNode || this.isMoving) return;

        this.isMoving = true;
        
        // 停止当前正在进行的动画
        if (this.currentTween) {
           // Tween.stop(this.currentTween);
        }

        // 确定目标位置
        const destination = this.isAtOriginalPosition ? 
            this.targetPosition : 
            this.originalPosition;

        // 创建补间动画
        this.currentTween = tween(this.targetNode)
            .to(this.duration, 
                { position: destination }, 
                { easing: 'sineOut' }  // 使用缓动函数让移动更自然
            )
            .call(() => {
                this.isMoving = false;
                this.isAtOriginalPosition = !this.isAtOriginalPosition;
            })
            .start();
    }

    // 重置位置（可选）
    resetPosition() {
        if (this.targetNode) {
            this.targetNode.position = this.originalPosition.clone();
            this.isAtOriginalPosition = true;
        }
    }
  D(){
    MessageCenter.Text=true
    
    director.loadScene("text", function() {AudioManager.instance.stopAll(1);});}

  JC(){
      find("Canvas/Label").getComponent(Label).string="B站搜索“KGT工作室”哦"
find("Canvas/Label").active=true



setTimeout(()=>{
find("Canvas/Label").active=false

},)

    
  }


PP(){director.loadScene("PP", function() {AudioManager.instance.stopAll(0.5); })}


thi(){director.loadScene("thi", function() {AudioManager.instance.stopAll(0.5); },)}



protected start(): void {
       if (KHD2.Cname) {
       find("Canvas/Node").active=false
       } 
    AudioManager.instance.stopAll(0);

     AudioManager.instance.ZJP("bgm",0,{
                        loop: true,
                        volume: 0.7,
                        fadeIn: 2})



                        KHD2.c=0;
                        KHD2.FZ=false
                        KHD2.FJN=false
}

DL(){


KHD2.Cname=find("Canvas/Node/loudin/EditBox/TEXT_LABEL").getComponent(Label).string
if (!KHD2.Cname) {
        KHD2.Cname=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000+""
       } 

    KHD2.start1()
}

}


