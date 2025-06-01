import { _decorator, Component, Node } from 'cc';
import { gif1 } from './spineANDgif/gif';
import { Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Buttelt')
export class Buttelt extends Component {
  gif:gif1
  @property(Number)
  n:number=0
    start() {
this.gif=this.node.getComponent(gif1)
    }

    update(deltaTime: number) {
        
    }

  @property({ tooltip: "目标位置坐标" })
    targetPosition: Vec3 = new Vec3(0, 0, 0);

    // 运动速度（单位/秒）
    @property({ tooltip: "运动速度（单位/秒）" })
    speed: number = 5;

    // 加速度（单位/秒²）
    @property({ tooltip: "加速度（0表示匀速运动）" })
    acceleration: number = 0;

    // 到达目标后调用的方法名
    @property({ tooltip: "到达目标后调用的方法名" })
    callbackMethod: string = "ZDMZ";

    // 开始移动
    startMovement() {
        // 计算起始位置
        const startPos = this.node.worldPosition.clone();
        
        // 计算方向向量
        const direction = new Vec3();
        Vec3.subtract(direction, this.targetPosition, startPos);
        const distance = direction.length();
        
        // 归一化方向向量
        direction.normalize();
        
        // 计算运动时间（秒）
        let duration = distance / this.speed;
        
        // 创建缓动对象
        const motionTween = tween(this.node)
            .to(duration, { 
                worldPosition: this.targetPosition 
            }, {
                // 根据加速度选择缓动函数
                easing: this.acceleration > 0 ? 
                    'quadOut' :  // 加速运动
                    this.acceleration < 0 ? 
                    'quadIn' :   // 减速运动
                    'linear'     // 匀速运动
            })
            .call(() => {
                // 到达目标位置后调用回调方法
                if (this.callbackMethod && this.node[this.callbackMethod]) {
                    this.node[this.callbackMethod]();
                }
            })
            .start();
    }

ZDBZ(){

this.gif.moveToNextFrame(0,this.n,1)





}





}


