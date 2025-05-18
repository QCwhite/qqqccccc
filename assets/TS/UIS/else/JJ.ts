// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Camera, error, EventTouch, Node, tween, v2, v3, Vec3 } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";

@ccclass('JJ')
export default class JJ extends ComponentBase {
  
    @property(Camera)
    mainCamera: Camera = null; // 绑定主相机

  
    maxDistance: number = 1000; // 最大距离
    
    maxOffset: number = 100; // 最大偏移量

    JJ(targetNode: Node, k: number) {
        if (!targetNode) {
            console.error('Target node is not set!');
            return;
        }
    
        // 获取目标节点的世界坐标
        const targetWorldPos = targetNode.worldPosition;
    
        // 创建一个 Vec3 对象用于存储转换后的本地坐标
        const targetLocalPos = new Vec3();
    
        // 将世界坐标转换为相机节点的本地坐标
        this.mainCamera.node.parent.inverseTransformPoint(targetLocalPos, targetWorldPos);
    
        // 打印目标本地坐标
        console.log("Target Local Position:", targetLocalPos);
    
        // 计算当前相机与目标节点的距离（仅计算 X 和 Y）
        const distance = Vec3.distance(
            new Vec3(this.mainCamera.node.position.x, this.mainCamera.node.position.y, 0),
            new Vec3(targetLocalPos.x, targetLocalPos.y, 0)
        );
    
        // 打印距离
        console.log("Distance:", distance);
    
        // 计算偏移量（仅计算 X 和 Y）
        const offset = this.calculateOffset(distance, this.maxDistance, this.maxOffset, targetLocalPos);
    
        // 使用 tween 平滑移动相机（仅移动 X 和 Y）
        tween(this.mainCamera.node)
            .to(k, {
                position: new Vec3(offset.x, offset.y, this.mainCamera.node.position.z) // 保持 Z 值不变
            })
            .call(() => {
                console.log("Final Camera Position:", this.mainCamera.node.position);
            })
            .start();
    }
    
    private calculateOffset(distance: number, maxDistance: number, maxOffset: number, targetPos: Vec3): Vec3 {
        // 如果距离大于最大距离，则直接取最大偏移量
        if (distance >= maxDistance) {
            console.log("Distance exceeds maxDistance, using maxOffset.");
            const direction = new Vec3(targetPos.x - this.mainCamera.node.position.x, targetPos.y - this.mainCamera.node.position.y, 0).normalize();
            return direction.multiplyScalar(maxOffset);
        }
    
        // 如果距离小于最大距离，按比例计算偏移量
        const offsetRatio = Math.max(0, 1 - distance / maxDistance);
        const direction = new Vec3(targetPos.x - this.mainCamera.node.position.x, targetPos.y - this.mainCamera.node.position.y, 0).normalize();
        const offset = direction.multiplyScalar(maxOffset * offsetRatio);
    
        return offset;
    }

    HG(targetNode:Node){

        if (!targetNode) {
          error('Target node is not set!');
            return;
        }
    
        // 获取Main Camera
        const mainCamera: Camera = this.node.getComponent(Camera)
    
        // 聚焦到目标节点
      tween(mainCamera.node)
            .to(0.85, { position:v3(20,-40,1000)})
            .start()
           
     
    
    }
   protected start(): void {
       console.log(this.node)
   }
}

