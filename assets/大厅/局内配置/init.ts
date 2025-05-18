// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator,  Component } from 'cc';
const {ccclass, property} = _decorator;



@ccclass('Init')
export default class NewClass extends Component {
    start () {
        // this.node.parent.getChildByName("NewScrollView").active=false;
    }
    op(){
        // if(this.node.name=="角色详情"){
        // this.node.dispatchEvent(new cc.Event.EventCustom('rode',true))
//        //te用于确定是否点击了角色详情
        // this.node.parent.getChildByName("NewScrollView").getComponent("sccon").te=true;
        // this.node.parent.getChildByName("NewScrollView").getChildByName("gotoshop").active=false;
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=false;

        // }
        // else{
        // if(this.node.name=="法术详情"){
        // this.node.dispatchEvent(new cc.Event.EventCustom('made',true))
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=true;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=false;


        // }
        // else if(this.node.name=="天赋详情"){
        // this.node.dispatchEvent(new cc.Event.EventCustom('tede',true))
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=false;
        // this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=false;
        // this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=true;

        // }
        // this.node.parent.getChildByName("NewScrollView").getComponent("sccon").te=false;
        // this.node.parent.getChildByName("NewScrollView").getChildByName("gotoshop").active=false;
        // }
        // this.node.parent.getChildByName("NewScrollView").active=true;
        // this.node.parent.getChildByName("NewScrollView").getChildByName("close").active=true;
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
// import sccon from "./sccon";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     start () {
//         this.node.parent.getChildByName("NewScrollView").active=false; 
//     }
//     op(){
//       if(this.node.name=="角色详情"){
//         this.node.dispatchEvent(new cc.Event.EventCustom('rode',true))
//         //te用于确定是否点击了角色详情
//         this.node.parent.getChildByName("NewScrollView").getComponent("sccon").te=true;
//         this.node.parent.getChildByName("NewScrollView").getChildByName("gotoshop").active=false;
//         this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=false;
//         this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=false;
//         this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=false;
//         this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=true;
//         this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=false;
//         this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=false;
// 
//       }
//       else{
//         if(this.node.name=="法术详情"){
//           this.node.dispatchEvent(new cc.Event.EventCustom('made',true))
//           this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=false;
//           this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=false;
//           this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=false;
//           this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=false;
//           this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=true;
//           this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=false;
//   
//           
//         }
//         else if(this.node.name=="天赋详情"){
//           this.node.dispatchEvent(new cc.Event.EventCustom('tede',true))
//           this.node.parent.getChildByName("角色详情").getComponent(cc.Button).enabled=false;
//           this.node.parent.getChildByName("法术详情").getComponent(cc.Button).enabled=false;
//           this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).enabled=false;
//           this.node.parent.getChildByName("角色详情").getComponent(cc.Button).interactable=false;
//           this.node.parent.getChildByName("法术详情").getComponent(cc.Button).interactable=false;
//           this.node.parent.getChildByName("天赋详情").getComponent(cc.Button).interactable=true;
//   
//         }
//         this.node.parent.getChildByName("NewScrollView").getComponent("sccon").te=false;
//         this.node.parent.getChildByName("NewScrollView").getChildByName("gotoshop").active=false;
//       }
//         this.node.parent.getChildByName("NewScrollView").active=true; 
//         this.node.parent.getChildByName("NewScrollView").getChildByName("close").active=true;
//          }
//     // update (dt) {}
// }
