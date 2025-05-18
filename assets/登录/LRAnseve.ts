// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('LRAnseve')
export default class NewClass extends Component {
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {
        // this.node.on('rs',this.RS,this);
        // this.node.on('rsb',this.RSback,this);

        // for(let a of this.node.children){
        // if(a.name=="New Label"){
        // a.active=true;
        // a.getComponent(cc.Label).string="登录";
        // }
        // else if(a.name=="email"){
        // a.active=false;
        // }
        // else if(a.name=="register1"){
        // a.active=false;
        // }
        // else if(a.name=="RSback"){
        // a.active=false;
        // }
        // else{
        // a.active=true;
        // }
        // }

    }
RS(){
////打开或关闭相应的节点
        // this.node.getChildByName("New Label").getComponent(cc.Label).string="注册";
        // this.node.getChildByName("register1").active=true;
        // this.node.getChildByName("register").active=false;
        // this.node.getChildByName("load").active=false;
        // this.node.getChildByName("email").active=true;
        // this.node.getChildByName("RSback").active=true;
}
  
RSback(){
        // for(let a of this.node.children){
        // if(a.name=="account"){
        // a.active=true;
        // }
        // else if(a.name=="passcount"){
        // a.active=true;
        // }
        // else if(a.name=="New Label"){
        // a.getComponent(cc.Label).string="登录";
        // }
        // else if(a.name=="load"){
        // a.active=true;
        // }
        // else if(a.name=="register"){
        // a.active=true;
        // }
        // else{
        // a.active=false;
        // }

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
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         this.node.on('rs',this.RS,this);
//         this.node.on('rsb',this.RSback,this);
// 
//         for(let a of this.node.children){
//             if(a.name=="New Label"){
//                 a.active=true;
//                 a.getComponent(cc.Label).string="登录";
//             }
//             else if(a.name=="email"){
//                 a.active=false;
//             }
//             else if(a.name=="register1"){
//                 a.active=false;
//             }
//             else if(a.name=="RSback"){
//                 a.active=false;
//             }
//             else{
//                 a.active=true;
//             }
//         }
//        
//     }
// RS(){
// //打开或关闭相应的节点
// this.node.getChildByName("New Label").getComponent(cc.Label).string="注册";
// this.node.getChildByName("register1").active=true;
// this.node.getChildByName("register").active=false;
// this.node.getChildByName("load").active=false;
// this.node.getChildByName("email").active=true;
// this.node.getChildByName("RSback").active=true;
// }
//   
// RSback(){
//     for(let a of this.node.children){
//         if(a.name=="account"){
//             a.active=true;
//         }
//         else if(a.name=="passcount"){
//             a.active=true;
//         }
//         else if(a.name=="New Label"){
//             a.getComponent(cc.Label).string="登录";
//         }
//         else if(a.name=="load"){
//             a.active=true;
//         }
//         else if(a.name=="register"){
//             a.active=true;
//         }
//         else{
//             a.active=false;
//         }
// 
//     }
// }
// 
// 
// }
