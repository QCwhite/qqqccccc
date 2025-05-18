// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Prefab, Label, instantiate, tween, Vec3 } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import GeZiManager from "../../Manager/GeZiManager";
import BAOmMAN from "./BAOmMAN";
import baoTX from "./baoTX";

@ccclass('BAOMU')
export default class BAOMU extends ComponentBase {
        @property(Prefab)
        baoTX:Prefab
        @property(Label)
    D11:Label
    @property(Label)
    end1:Label
       Baomu(P1:number,D1:string,P2:number,end:string){
    
    let p1=instantiate(this.baoTX);
    p1.setParent(this.node)
    p1.getComponent(baoTX).get(P1)
    
    this.D11.string=D1
    
    let p2=instantiate(this.baoTX);
    p2.setParent(this.node)
    p2.getComponent(baoTX).get(P2)
    
    this.end1.string=end
    
    
       }
       playAnimation() {
        const duration = 2; // 动画持续时间
        const delay = 1; // 停留时间

        // 创建一个上升和放大的 Tween
        this.node.active = true;

        const riseAndScale = tween(this.node)
            .to(duration, { position: new Vec3(this.node.position.x, this.node.position.y + 100, this.node.position.z), scale: new Vec3(2, 2, 2) }) // 上升并放大
            .delay(delay) // 停留一会
            .to(duration, { scale: new Vec3(0, 0, 0) }) // 渐变消失并缩小
            .call(() => {
                // 假设 GeZiManager 是一个全局管理器，shanchu 是一个方法
                GeZiManager.shanchu(this.node.parent.getComponent(BAOmMAN).BAOML, this.node);
                this.node.destroy(); // 动画结束后销毁节点
            });
          //  tween(this.node).
        riseAndScale.start();
    }
}