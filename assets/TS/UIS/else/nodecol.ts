import { v3 } from 'cc';
import { _decorator, Component, Vec3, tween, Node, UIOpacity } from 'cc';
import ComponentBase from '../../BASE/ComponentBase';
import xgcol from './xgmove';
import { sp } from 'cc';
import turn from '../../game/time/turn';

const { ccclass, property } = _decorator;

@ccclass('Nodecol')
export default class nodecol extends Component {
    // 轮播配置
    @property([Node])
    images: Node[] = []; // 按0-5顺序对应图片1-6

    @property(Vec3)
    lastPos: Vec3 = new Vec3();  // 左侧位置
    @property(Vec3)
    nowPos: Vec3 = new Vec3();   // 中间位置
    @property(Vec3)
    nextPos: Vec3 = new Vec3();  // 右侧位置
    @property(Vec3)
    YC: Vec3 = new Vec3();       // 隐藏位置

    @property
    moveDuration: number = 0.7;  // 移动动画时长

    // 当前索引（初始化last=5=图片6，now=0=图片1，next=1=图片2）
    private currentIndices = { 
        last: 5, 
        now: 0,
        next: 1 
    };
    private animNames: string[] = [
        "lun1",
        "lun2", 
        "lun3",
        "lun4",
        "lun5",
        "lun6",
        "lun7",
        "lun8",  // 注意这里缺少 lun7，根据你的实际情况调整
    ];

    private currentIndex: number = 0;

    start() {
        this.resetPositions();
        setTimeout(()=>{ tween(this.node.children[0].getComponent(UIOpacity))
            .to(0.6, {
               opacity:255
            })
            .start();
 tween(this.node.children[1].getComponent(UIOpacity))
            .to(0.6, {
               opacity:255
            })
            .start();
 tween(this.node.children[5].getComponent(UIOpacity))
            .to(0.6, {
               opacity:255
            })
            .start();},7000)
   

    }

    resetPositions() {
        // 隐藏所有图片
        this.images.forEach(img => img.active = false);
        
        // 设置初始可见项
        this.setNodeState(this.currentIndices.last, this.lastPos);
        this.setNodeState(this.currentIndices.now, this.nowPos);
        this.setNodeState(this.currentIndices.next, this.nextPos);
    }

    moveNext() {







        const { last, now, next } = this.currentIndices;

        // 第一阶段：处理last位置
        this.moveToHidden(last);
        
        // 第二阶段：移动now到last位置
        this.moveNode(now, this.lastPos);
        
        // 第三阶段：移动next到now位置
        this.moveNode(next, this.nowPos);
        
        // 第四阶段：激活新next
        const newNext = this.getNextIndex(next);
        this.setNodeState(newNext, this.nextPos);

        // 更新索引
        this.updateIndices(newNext);

        // 检查6号图是否回到last位置
        if(this.currentIndices.last === 5) {
            this.hhh();
        }


 for(let i of this.node.children){

tween(i.getComponent(UIOpacity)).to(0.1, {
               opacity:0
            })
            .start();
    
}
        this.node.getComponent(sp.Skeleton).animation=this.animNames[turn.turn]
  setTimeout(()=>{for(let i of this.node.children){

tween(i.getComponent(UIOpacity))  .to(0.1, {
               opacity:255
            })
            .start();
    
}},500)
    }

    private moveToHidden(index: number) {
        tween(this.images[index])
            .to(this.moveDuration, {
                position: this.YC,
                scale: v3(0.8, 0.8) // 可选的缩放效果
            })
            .call(() => this.images[index].active = false)
            .start();
    }

    private moveNode(index: number, targetPos: Vec3) {
        this.images[index].active = true;
        tween(this.images[index])
            .to(this.moveDuration, {
                position: targetPos,
                scale: v3(1, 1) // 恢复默认缩放
            })
            .start();
    }

    private setNodeState(index: number, position: Vec3) {
        const img = this.images[index];
        img.active = true;
        img.setPosition(position);
        img.scale = v3(1, 1); // 确保缩放重置
    }

    private getNextIndex(currentNext: number): number {
        return (currentNext + 1) % 6; // 循环索引
    }

    private updateIndices(newNext: number) {
        this.currentIndices = {
            last: this.currentIndices.now,
            now: this.currentIndices.next,
            next: newNext
        };
    }

    private hhh() {
        console.log("6号图片回到左侧位置！");
        // 触发关联效果

    }
}