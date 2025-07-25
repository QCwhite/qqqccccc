import { _decorator, Component, Node, UITransform, UIOpacity, tween, Vec3 } from 'cc';
import ComponentBase from '../BASE/ComponentBase';
import realThing from '../BASE/realThing';

const { ccclass, property } = _decorator;

@ccclass('ClassRope')
export default class class_rope extends ComponentBase {
    @property(Number)
    change_time: number = 0;
    
    QD: realThing = null;
    endD: realThing = null;
    
    // 修复方向：计算角度（优化版本）
    calculateAngle(xA: number, yA: number, xB: number, yB: number): number {
        // 计算相对坐标（注意方向修正）
        let relativeX = xB - xA;
        let relativeY = yB - yA;
        
        // 计算角度（弧度） - 使用正确的坐标系
        let angleRad = Math.atan2(relativeY, relativeX);
        
        // 将弧度转换为角度（0-360范围）
        let angleDeg = angleRad * (180 / Math.PI);
        
        // Cocos Creator 使用顺时针为正方向，需要调整
        // 返回角度（修正方向）




        return angleDeg;
    }
    
    // 修复方向：确保绳子方向正确
    private correctRopeDirection(rope: Node) {
        // 确保绳子的锚点在左端
        const uiTransform = rope.getComponent(UITransform);
        if (uiTransform) {
            uiTransform.anchorX = 0;
            uiTransform.anchorY = 0.5;
        }
        
        // 确保缩放正确（没有镜像）
        rope.scale = new Vec3(1, 1, 1);
    }
    
    // 平滑消失效果
    shan() {
        if (!this.node) return;
        
        tween(this.node.getComponent(UIOpacity))
            .to(0.8, { opacity: 0 })
            .call(() => {
                this.destroy();
                this.node.destroy();
            })
            .start();
    }
    
    // 优化后的绳子变换方法（修复方向）
    change_rope() {
        if (!this.QD || !this.endD) return;
        
        // 设置节点的 zIndex
        this.setSiblingIndex();
        
        // 获取两个点的位置
        let p2 = this.getpos(this.QD.ZB);
        let p1 = this.getpos(this.endD.ZB);
        p2.y += 150;
        p1.y += 150;
        
        // 计算新的长度
        let new_rope_len: number = (Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)))/this.gets();
        
        // 获取绳子的节点
        let rope = this.node.children[0].children[0].children[0];
        
        // 修复方向：确保绳子方向正确
        this.correctRopeDirection(rope);
        
        // 计算新的角度（使用优化方法）
        let new_rotation = this.calculateAngle(p1.x, p1.y, p2.x, p2.y);
        
        // 获取当前角度
        const currentRotation = this.node.angle;
        
        // 计算旋转的最短路径
        const targetRotation = this.getShortestRotation(currentRotation, new_rotation);
      
        // 动画更新
        tween(rope.getComponent(UITransform))
            .to(this.change_time, { width: new_rope_len })
            .start();
        console.log("targetRotation"+targetRotation)
        tween(this.node)
            .to(this.change_time, { angle: targetRotation })
              .call(()=>{  
      this.node.angle=this.normalizeAngle180(targetRotation);
},0)
            .start()
          
    }
    
    // 优化后的TZ方法（修复方向）
    TZ() {
        if (!this.QD || !this.endD) return;
        
        this.setSiblingIndex();
        
        let p2 = this.getpos(this.QD.ZB);
        let p1 = this.getpos(this.endD.ZB);
        p2.y += 150;
        p1.y += 150;
        
        // 新的长度
        let new_rope_len: number = (Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)))/this.gets();;
        let rope = this.node.children[0].children[0].children[0];
        
        // 修复方向：确保绳子方向正确
        this.correctRopeDirection(rope);
        
        // 新的角度
        let new_rotation = this.calculateAngle(p1.x, p1.y, p2.x, p2.y);
        
        // 获取当前角度
        const currentRotation = this.normalizeAngle180(this.node.angle)
        
        // 计算旋转的最短路径
        this.node.angle = this.getShortestRotation(currentRotation, new_rotation);
        
        // 动画更新
        tween(rope.getComponent(UITransform))
            .to(this.change_time, { width: new_rope_len })
            .start();
    }
    
    // ==================== 辅助方法 ====================
    
    // 设置兄弟索引（优化）
    private setSiblingIndex() {
        if (!this.QD?.node || !this.endD?.node) return;
        
        const qdIndex = this.QD.node.getSiblingIndex();
        const endIndex = this.endD.node.getSiblingIndex();
        const midIndex = Math.floor((qdIndex + endIndex) / 2);
        this.node.setSiblingIndex(midIndex);
    }
    
    // 计算最短旋转路径（关键优化）
   private getShortestRotation(current: number, target: number): number {
        // 标准化角度到 -180° 到 180° 范围
        current = this.normalizeAngle180(current);
        target = this.normalizeAngle180(target);
        
        // 计算差值
        let diff = target - current;
        
        // 处理角度跨越 ±180° 边界的情况
        if (diff > 180) {
            diff -= 360;
        } else if (diff < -180) {
            diff += 360;
        }
        
if (current<-90&&target>90) {
    target-=360
}

if (target<-90&&current>90) {
    target+=360
}

        
        // 返回目标角度
        
        return target
    }
    
    // 角度标准化到 -180° 到 180° 范围
    private normalizeAngle180(angle: number): number {
        // 1. 将角度转换到 0-360° 范围
        angle = angle % 360;
        if (angle < 0) {
            angle += 360;
        }
        
        // 2. 转换到 -180° 到 180° 范围
        if (angle > 180) {
            angle -= 360;
        }
      

        return angle;
    }
  
  
    
    // 获取位置（假设已实现）
  gets(){
    let targetScale=1
      switch (this.node.parent.getComponent(realThing).y) {
          case 1: targetScale = 1; break;
          case 2: targetScale = 0.95; break;
          case 3: targetScale = 0.9; break;
          case 4: targetScale = 0.85; break;
          case 5: targetScale = 0.8; break;
          case 6: targetScale = 0.75; break;
          case 7: targetScale = 0.7; break;
          case 8: targetScale = 0.65; break;
          default: targetScale = 1; break;
      }
  return targetScale
  }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import ComponentBase from "../BASE/ComponentBase";
// import realThing from "../BASE/realThing";
// import Cspine from "../BASE/spineANDgif/Cspine";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class class_rope extends ComponentBase {
//     @property(Number)
//     change_time:number=0
//    QD:realThing=null;
//    endD:realThing=null;
//   
//   计算角度
//     calculateAngle(xA: number, yA: number, xB: number, yB: number): number {
//        计算相对坐标
//         let relativeX = xA - xB;
//         let relativeY = yA - yB;
//     
//        计算角度（弧度）
//         let angleRad = Math.atan2(relativeY, relativeX);
//        将弧度转换为角度
//         let angleDeg = angleRad * (180 / Math.PI);
//     
//        修正角度范围为 0° 到 360°
// 
//         return angleDeg;
//     }
//     shan(){cc.tween(this.node).to(0.8,{opacity:0}).call(()=>{this.node.destroy()}).start()}
//     change_rope()
//     {
// 
//         this.node.zIndex=(this.QD.node.zIndex+this.endD.node.zIndex)/2
//         console.log(this.QD.node)
//         let p2=this.getpos(this.QD.ZB)
//         let p1=this.getpos(this.endD.ZB)
//         p2.y+=150
//         p1.y+=150
//       新的长度
//         let new_rope_len:number=Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
//         let rope=this.node.children[0].children[0].children[0]
//       新的角度
//         let new_rotation=this.calculateAngle(p1.x,p1.y,p2.x,p2.y)
//       动画更新
//         cc.tween(rope).to(this.change_time,{width:new_rope_len}).start()
//         cc.tween(this.node).to(this.change_time,{angle:new_rotation}).call(()=>{}).start()
//     }
// TZ(){
// 
//     this.node.zIndex=(this.QD.node.zIndex+this.endD.node.zIndex)/2
//     console.log(this.QD.node)
//     let p2=this.getpos(this.QD.ZB)
//     let p1=this.getpos(this.endD.ZB)
//     p2.y+=150
//     p1.y+=150
//   新的长度
//     let new_rope_len:number=Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
//     let rope=this.node.children[0].children[0].children[0]
//   新的角度
//     let new_rotation=this.calculateAngle(p1.x,p1.y,p2.x,p2.y)
//   动画更新
//     cc.tween(rope).to(this.change_time,{width:new_rope_len}).start()
//     this.node.angle=new_rotation
// 
// 
// }
// 
// 
// 
// }
