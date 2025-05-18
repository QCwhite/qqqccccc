// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, SpriteFrame } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Sccon')
export default class NewClass extends Component {
       @property([SpriteFrame])
    public chadeimgs: SpriteFrame[] = [];//角色详情的图片
    @property([SpriteFrame])
    public madeimgs: SpriteFrame[] = [];//法术详情
    @property([SpriteFrame])
    public tedeimgs: SpriteFrame[] = [];//天赋详情
    qe:number;//用于显示对应的角色详情
    te:boolean=false;//用于确定是不是点击角色详情
 
    start () {

        // this.node.getChildByName("intr").active=false;
        // this.node.on('op',this.OP,this);
        // this.node.on('cl',this.CL,this);
    }
//    // update (dt) {}
OP(){

        // this.node.getChildByName("close").active=true;
        // this.node.getChildByName("intr").active=true;
//    //qe在sccon会被赋值从而确定点击了那个按钮显示对应的详情
        // this.node.getChildByName("intr").getComponent(cc.Sprite).spriteFrame=this.chadeimgs[this.qe];
}
CL(){
        // console.log("cl")
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=true;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=true;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=true;
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=true;
        // this.node.getChildByName("view").getChildByName("content").destroyAllChildren();
        // this.node.getChildByName("close").active=false;
        // this.node.getChildByName("intr").active=false;
        // this.node.active=false;
}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
//        @property([cc.SpriteFrame])
//     public chadeimgs: cc.SpriteFrame[] = [];//角色详情的图片
//     @property([cc.SpriteFrame])
//     public madeimgs: cc.SpriteFrame[] = [];//法术详情
//     @property([cc.SpriteFrame])
//     public tedeimgs: cc.SpriteFrame[] = [];//天赋详情
// 
//     qe:number;//用于显示对应的角色详情
//     te:boolean=false;//用于确定是不是点击角色详情
//  
//     start () {
//         
//         this.node.getChildByName("intr").active=false;
//         this.node.on('op',this.OP,this);
//         this.node.on('cl',this.CL,this);
//     }
// 
//     // update (dt) {}
// OP(){
//     
//     this.node.getChildByName("close").active=true;
//     this.node.getChildByName("intr").active=true;
//     //qe在sccon会被赋值从而确定点击了那个按钮显示对应的详情
//     this.node.getChildByName("intr").getComponent(cc.Sprite).spriteFrame=this.chadeimgs[this.qe];
// }
// CL(){
//     console.log("cl")
//     this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=true;
//     this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=true;
//     this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=true;
//     this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=true;
//     this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=true;
//     this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=true;
//     this.node.getChildByName("view").getChildByName("content").destroyAllChildren();
//     this.node.getChildByName("close").active=false;
//     this.node.getChildByName("intr").active=false;
//     this.node.active=false;
// }
// 
// }
