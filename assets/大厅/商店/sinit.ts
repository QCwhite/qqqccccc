// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Sinit')
export default class NewClass extends Component {
    start () {
        // this.node.parent.getChildByName("NewScrollView").active=false;
    }
    op(){
        // if(this.node.name=="角色购买"){
//            //发信息动态生成节点
        // this.node.dispatchEvent(new cc.Event.EventCustom('srode',true));

        // this.node.parent.getChildByName("NewScrollView").active=true;
        // this.node.parent.getChildByName("NewScrollView").getChildByName("intr").active=false;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=false;
        // }
        // else if(this.node.name=="代币获取"){
        // this.node.parent.getChildByName("NewScrollView").active=false;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=false;
        // for(let a of this.node.children){
        // a.active=true;
        // for(let b of a.children){
        // if(a.name!="Background"){
        // if(b.name!="Background"){
        // b.active=false;
        // }
        // }
        // }
        // }
        // this.node.parent.getChildByName("clo").active=true;
        // }
        // else if(this.node.name=="其他道具"){
        // this.node.parent.getChildByName("NewScrollView").active=false;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=true;
        // for(let a of this.node.children){
        // a.active=true;
        // for(let b of a.children){
        // if(a.name!="Background"){
        // if(b.name!="Background"){
        // b.active=false;
        // }
        // }
        // }
        // }
        // this.node.parent.getChildByName("clo").active=true;
        // }
        // this.node.parent.getChildByName("NewScrollView").getChildByName("close").active=true;
        // this.node.parent.getChildByName("NewScrollView").getChildByName("buyway1").active=false;
        // this.node.parent.getChildByName("NewScrollView").getChildByName("buyway2").active=false;
         }
//    //代币获取或其他道具返回操作
    Clo(){
//        //关闭代币获取或其他道具的子节点
        // for(let a of this.node.parent.getChildByName("代币获取").children){
        // if(a.name!="Background"){
        // a.active=false;
        // }
        // }
        // for(let a of this.node.parent.getChildByName("其他道具").children){
        // if(a.name!="Background"){
        // a.active=false;
        // }
        // }
//        //关闭返回键
        // this.node.parent.getChildByName("clo").active=false;
//        //交互开启
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=true;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=true;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=true;
        // this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=true;

    }
//    //开启代币获取或其他道具子节点的节点
    Coindop(){
        // for(let a of this.node.children){
        // a.active=true;
        // }
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
// 
//     start () {
//         this.node.parent.getChildByName("NewScrollView").active=false; 
//     }
// 
// 
//     op(){
//         if(this.node.name=="角色购买"){
//             //发信息动态生成节点
//             this.node.dispatchEvent(new cc.Event.EventCustom('srode',true));
//             
//            this.node.parent.getChildByName("NewScrollView").active=true;
//            this.node.parent.getChildByName("NewScrollView").getChildByName("intr").active=false;  
//            this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=false;
//            this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=false;
//            this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=false;
//            this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=true;
//            this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=false;
//            this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=false;
//         }
//         else if(this.node.name=="代币获取"){
//             this.node.parent.getChildByName("NewScrollView").active=false; 
//             this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=false;
//             this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=false;
//             this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=false;
//             this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=false;
//             this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=true;
//             this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=false;
//             for(let a of this.node.children){
//                 a.active=true;
//                 for(let b of a.children){
//                     if(a.name!="Background"){
//                         if(b.name!="Background"){
//                             b.active=false;
//                         }
//                     }
//                 }
//             }
//             this.node.parent.getChildByName("clo").active=true;
//         }
//         else if(this.node.name=="其他道具"){
//             this.node.parent.getChildByName("NewScrollView").active=false; 
//             this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=false;
//             this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=false;
//             this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=false;
//             this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=false;
//             this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=false;
//             this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=true;
//             for(let a of this.node.children){
//                 a.active=true;
//                 for(let b of a.children){
//                     if(a.name!="Background"){
//                         if(b.name!="Background"){
//                             b.active=false;
//                         }
//                     }
//                 }
//             }
//             this.node.parent.getChildByName("clo").active=true;
//         }
//         this.node.parent.getChildByName("NewScrollView").getChildByName("close").active=true;
//         this.node.parent.getChildByName("NewScrollView").getChildByName("buyway1").active=false;
//         this.node.parent.getChildByName("NewScrollView").getChildByName("buyway2").active=false;
//          }
// 
// 
//     //代币获取或其他道具返回操作
//     Clo(){
//         //关闭代币获取或其他道具的子节点
//         for(let a of this.node.parent.getChildByName("代币获取").children){
//             if(a.name!="Background"){
//                 a.active=false;
//             }
//         }
//         for(let a of this.node.parent.getChildByName("其他道具").children){
//             if(a.name!="Background"){
//                 a.active=false;
//             }
//         }
//         //关闭返回键
//         this.node.parent.getChildByName("clo").active=false;
//         //交互开启
//         this.node.parent.getChildByName("角色购买").getComponent(cc.Button).enabled=true;
//         this.node.parent.getChildByName("代币获取").getComponent(cc.Button).enabled=true;
//         this.node.parent.getChildByName("其他道具").getComponent(cc.Button).enabled=true;
//         this.node.parent.getChildByName("角色购买").getComponent(cc.Button).interactable=true;
//         this.node.parent.getChildByName("代币获取").getComponent(cc.Button).interactable=true;
//         this.node.parent.getChildByName("其他道具").getComponent(cc.Button).interactable=true;
//        
//     }
//     //开启代币获取或其他道具子节点的节点
//     Coindop(){
//         for(let a of this.node.children){
//             a.active=true;
//         }
//     }
// }
