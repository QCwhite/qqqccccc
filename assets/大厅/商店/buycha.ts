// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;



@ccclass('Buycha')
export default class NewClass extends Component {
    free1:number=100;
    free2:number=200;
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {
        // if(this.node.name=="buyway1"){
        // this.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string=String(this.free1);
        // }

        // if(this.node.name=="buyway2"){
        // this.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string=String(this.free2);
        // }

    }
    Buyway1(){
//        //金币足够
        // if(KHD.HB[0]>=this.free1){
        // KHD.updateJuese(this.node.parent.getComponent("sssccon").qe);
        // KHD.HB[0]-=this.free1;
        // KHD.updateHB();
        // KHD.Upmon();
        // }
    }
//    // update (dt) {}
    Buyway2(){
//           //钻石足够
        // if(KHD.HB[2]>=this.free2){
//    //该服务器的角色
        // KHD.updateJuese(this.node.parent.getComponent("sssccon").qe);
        // KHD.HB[0]-=this.free2;
        // KHD.updateHB();
//    //更新货币节点的string值
        // KHD.Upmon();
        // }
    }
    Buytrue(){


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
// import KHD from "../../TS/Message/KHD";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
//     free1:number=100;
//     free2:number=200;
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
//     start () {
//         if(this.node.name=="buyway1"){
//             this.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string=String(this.free1);
//         }
//         
//         if(this.node.name=="buyway2"){
//             this.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string=String(this.free2);
//         }
//         
//     }
// 
//     Buyway1(){
//         //金币足够
// if(KHD.HB[0]>=this.free1){
// KHD.updateJuese(this.node.parent.getComponent("sssccon").qe);
// KHD.HB[0]-=this.free1;
// KHD.updateHB();
// KHD.Upmon();
// }
//     }
//     // update (dt) {}
//     Buyway2(){
//            //钻石足够
// if(KHD.HB[2]>=this.free2){
//     //该服务器的角色
//     KHD.updateJuese(this.node.parent.getComponent("sssccon").qe);
//     KHD.HB[0]-=this.free2;
//     KHD.updateHB();
//     //更新货币节点的string值
//     KHD.Upmon();
//     }
//     }
// 
//     Buytrue(){
// 
// 
//     }
// }
