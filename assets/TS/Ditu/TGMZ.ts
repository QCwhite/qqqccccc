import { _decorator, Vec3, RigidBody2D, Vec2, CircleCollider2D,Node } from "cc";
import ComponentBase from "../BASE/ComponentBase";
import { tween } from "cc";
import { ERigidBody2DType } from "cc";
import { UITransform } from "cc";
import { PhysicsSystem2D } from "cc";
import { EPhysics2DDrawFlags } from "cc";
import { Prefab } from "cc";
import { instantiate } from "cc";
import { v3 } from "cc";
import { Label } from "cc";

const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('BowlContainer')
@executeInEditMode
export class BowlContainer extends ComponentBase {
    // 可视区域参数
    @property({ tooltip: "可见区域半径" })
    radius: number = 100;
    
    @property({ tooltip: "石子间距角度" })
    angleStep: number = 30;

    // 物理参数
    @property({ tooltip: "挤压力度" })
    pushForce: number = 500;
    @property(Prefab)
    Stone: Prefab=null
    private activeStones: Node[] = [];
    private allStones: Node[] = [];
    private stonePositions: Vec3[] = [];
protected onLoad(): void {
PhysicsSystem2D.instance.enable=true

//PhysicsSystem2D.instance.debugDrawFlags=EPhysics2DDrawFlags.All
}

addStone(n:string){

let o=instantiate(this.Stone)
o.setParent(this.node)
o.setPosition(v3(180,-66,0))
o.getComponent(Label).string=n


}



}

