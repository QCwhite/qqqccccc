// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Smess')
export default class NewClass extends Component {
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {

    }
    ope(){
        // this.node.parent.parent.parent.getComponent("sccon").qe=this.node.getComponent("picres").si
        // this.node.dispatchEvent(new cc.Event.EventCustom('op',true));

//        //通过picres中的st判断是否有该角色，从而控制label与跳转商店
        // if(this.node.getComponent("picres").st==true){
        // this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=false;
        // this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="已获得";
        // }
        // else{
        // this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=true;
        // this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="去获得";
        // }



//        /*
        // 原来
        // 测试让第一个角色获得其他未获得
        // if(this.node.getComponent("picres").si==0){
        // this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=false;
        // this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="已获得";
        // }
        // else{
        // this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=true;
        // this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="去获得";
        // }
//           */


//        //判断该button是否属于角色详情
        // if( this.node.parent.parent.parent.getComponent("sccon").te==true){
        // console.log(this.node.parent.parent.parent.getComponent("sccon").te);
        // this.node.parent.parent.parent.getChildByName("gotoshop").active=true;
        // }
    }
    clo(){
        // this.node.dispatchEvent(new cc.Event.EventCustom('cl',true));

    }
//    // update (dt) {}
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
// 
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
// 
//     }
// 
//     ope(){
//        this.node.parent.parent.parent.getComponent("sccon").qe=this.node.getComponent("picres").si
//         this.node.dispatchEvent(new cc.Event.EventCustom('op',true));
// 
//         //通过picres中的st判断是否有该角色，从而控制label与跳转商店
//         if(this.node.getComponent("picres").st==true){
//             this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=false;
//             this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="已获得";
//         }
//           else{
//             this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=true;
//             this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="去获得";
//           }
//            
// 
// 
//         /*
//         原来
//         测试让第一个角色获得其他未获得
//         if(this.node.getComponent("picres").si==0){
//             this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=false;
//             this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="已获得";
//         }
//           else{
//             this.node.parent.parent.parent.getChildByName("gotoshop").getComponent(cc.Button).enabled=true;
//             this.node.parent.parent.parent.getChildByName("gotoshop").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string="去获得";
//           }
//            */
//         
//        
//         //判断该button是否属于角色详情
//         if( this.node.parent.parent.parent.getComponent("sccon").te==true){
//             console.log(this.node.parent.parent.parent.getComponent("sccon").te);
//             this.node.parent.parent.parent.getChildByName("gotoshop").active=true;
//         }
//     }
//     clo(){
//         this.node.dispatchEvent(new cc.Event.EventCustom('cl',true));
//        
//     }
// 
//     // update (dt) {}
// }
