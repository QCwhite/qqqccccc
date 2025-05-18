// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('TSUI')
export default class NewClass extends Component {
        @property(Node)
        PT:Node=null;
       zk:boolean=false;
       @property(Number)
       c:number=1
       zzk() {
        this.moveX(this.PT,500 * this.c, 80);
        this.zk = true;

        // 缩放父节点
        const parentScale = this.node.parent.scale.clone();
        tween(this.node.parent)
            .to(0.2, { scale: new Vec3(parentScale.x * 1.4, parentScale.y * 1.4, parentScale.z) })
            .start();
    }

    zzb() {
        this.moveX(this.PT, -500 * this.c, 80);
        this.zk = false;

        // 缩放父节点
        const parentScale = this.node.parent.scale.clone();
        tween(this.node.parent)
            .to(0.2, { scale: new Vec3(parentScale.x / 1.4, parentScale.y / 1.4, parentScale.z) })
            .start();
    }
       DZ(){
       if(this.zk){this.zzb()}else{this.zzk()}
       
       
       
       }
     
       moveX(targetNode: Node, distance: number, duration: number) {
        tween(targetNode)
            .to(duration/1000, { position: new Vec3(targetNode.position.x + distance, targetNode.position.y, targetNode.position.z) })
            .start();
    }
}
       
       
       