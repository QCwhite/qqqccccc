// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Ssmess')
export default class NewClass extends Component {
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {

    }
    ope(){
//       //qe被赋值在sssccon打开相应的角色介绍
        // this.node.parent.parent.parent.getComponent("sssccon").qe=this.node.getComponent("shpicres").si

//  //判断是否拥有该角色进行相应的操作
        // if(this.node.getComponent("shpicres").st==false){
        // this.node.parent.parent.parent.getChildByName("buyway1").active=true
        // this.node.parent.parent.parent.getChildByName("buyway2").active=true
        // this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=false;
        // }
        // else{
        // this.node.parent.parent.parent.getChildByName("buyway1").active=false;
        // this.node.parent.parent.parent.getChildByName("buyway2").active=false;
        // this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=true
        // }

///*
//        //原来代码
//        //判断是否拥有该角色进行相应的操作
        // if(this.node.getComponent("shpicres").si==0){
        // this.node.parent.parent.parent.getChildByName("buyway1").active=true
        // this.node.parent.parent.parent.getChildByName("buyway2").active=true
        // this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=false;
        // }
        // else{
        // this.node.parent.parent.parent.getChildByName("buyway1").active=false;
        // this.node.parent.parent.parent.getChildByName("buyway2").active=false;
        // this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=true
        // }

//*/

        // this.node.dispatchEvent(new cc.Event.EventCustom('op',true));

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
//        //qe被赋值在sssccon打开相应的角色介绍
//         this.node.parent.parent.parent.getComponent("sssccon").qe=this.node.getComponent("shpicres").si
//         
//   //判断是否拥有该角色进行相应的操作
//         if(this.node.getComponent("shpicres").st==false){
//             this.node.parent.parent.parent.getChildByName("buyway1").active=true
//         this.node.parent.parent.parent.getChildByName("buyway2").active=true
//         this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=false;
//         }
//         else{
//             this.node.parent.parent.parent.getChildByName("buyway1").active=false;
//             this.node.parent.parent.parent.getChildByName("buyway2").active=false;
//             this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=true
//         }
// 
// /*
//         //原来代码
//         //判断是否拥有该角色进行相应的操作
//         if(this.node.getComponent("shpicres").si==0){
//             this.node.parent.parent.parent.getChildByName("buyway1").active=true
//         this.node.parent.parent.parent.getChildByName("buyway2").active=true
//         this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=false;
//         }
//         else{
//             this.node.parent.parent.parent.getChildByName("buyway1").active=false;
//             this.node.parent.parent.parent.getChildByName("buyway2").active=false;
//             this.node.parent.parent.parent.getChildByName("intr").getChildByName("NewLabel").active=true
//         }
//        
// */
// 
//         this.node.dispatchEvent(new cc.Event.EventCustom('op',true));
// 
//     }
//     clo(){
//         this.node.dispatchEvent(new cc.Event.EventCustom('cl',true));
//      
//     }
//     
//     // update (dt) {}
// }
