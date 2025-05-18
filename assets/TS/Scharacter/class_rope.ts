import { _decorator, tween, UIOpacity, UITransform } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";


@ccclass('ClassRope')
export default class class_rope extends ComponentBase {
    @property(Number)
    change_time:number=0
   QD:realThing=null;
   endD:realThing=null;
  
//  计算角度
    calculateAngle(xA: number, yA: number, xB: number, yB: number): number {
//       计算相对坐标
       let relativeX = xA - xB;
       let relativeY = yA - yB;

//       计算角度（弧度）
       let angleRad = Math.atan2(relativeY, relativeX);
//       将弧度转换为角度
       let angleDeg = angleRad * (180 / Math.PI);

//       修正角度范围为 0° 到 360°

       return angleDeg;
    }
    shan() {

        if (this.node) {
            
       
        tween(this.node.getComponent(UIOpacity))
            .to(0.8, { opacity: 0 }) // 渐隐效果
            .call(() => {
                this.destroy()
                this.node.destroy(); // 销毁节点
            })
            .start(); }
    }



    change_rope() {
        // 设置节点的 zIndex
       
        this.node.setSiblingIndex( (this.QD.node.getSiblingIndex() + this.endD.node.getSiblingIndex()) / 2)
        // 获取两个点的位置
        let p2 = this.getpos(this.QD.ZB);
        let p1 = this.getpos(this.endD.ZB);
        p2.y += 150;
        p1.y += 150;
    
        // 计算新的长度
        let new_rope_len: number = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    
        // 获取绳子的节点
        let rope = this.node.children[0].children[0].children[0];
    
        // 计算新的角度
        let new_rotation = this.calculateAngle(p1.x, p1.y, p2.x, p2.y);
    
        // 动画更新
        tween(rope.getComponent(UITransform))
            .to(this.change_time, { width: new_rope_len }) // 更新绳子长度
            .start();
    
        tween(this.node)
            .to(this.change_time, { angle: new_rotation }) // 更新节点角度
            .call(() => {
                // 动画完成后的回调
            })
            .start();
    }
TZ(){

    this.node.setSiblingIndex( (this.QD.node.getSiblingIndex() + this.endD.node.getSiblingIndex()) / 2)
       console.log(this.QD.node)
       let p2=this.getpos(this.QD.ZB)
       let p1=this.getpos(this.endD.ZB)
       p2.y+=150
       p1.y+=150
//  新的长度
       let new_rope_len:number=Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
       let rope=this.node.children[0].children[0].children[0]
//  新的角度
       let new_rotation=this.calculateAngle(p1.x,p1.y,p2.x,p2.y)
//  动画更新
      tween(rope.getComponent(UITransform)).to(this.change_time,{width:new_rope_len}).start()
       this.node.angle=new_rotation


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
