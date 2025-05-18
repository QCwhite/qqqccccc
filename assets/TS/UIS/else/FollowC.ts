// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Camera, Component, Node } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('FollowC')
export default class FollowCamera extends Component {
   
    
        @property(Node)
        private followNode: Node = null; // 需要跟随相机移动的节点
    
        @property(Node)
        private followNode2: Node = null;
        
    
        update(deltaTime: number) {
            // 获取场景中的主相机
            const mainCamera =  this.node.getComponent(Camera);
            if (mainCamera && this.followNode&&this.followNode2) {
                // 每一帧更新跟随节点的位置为相机的位置
                this.followNode.setWorldPosition(mainCamera.node.position)
                
            
              
                this.followNode2.setWorldPosition(mainCamera.node.position);
            }
        }}