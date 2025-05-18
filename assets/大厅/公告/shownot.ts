// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Sprite } from 'cc';
import pical from './pical';
const {ccclass, property} = _decorator;

@ccclass('Shownot')
export default class NewClass extends Component {
//  LIFE-CYCLE CALLBACKS:
//  onLoad () {}
    start () {

    }
    showno1(){
      this.node.parent.parent.parent.parent.getChildByName("notde").getComponent(Sprite).spriteFrame=
      this.node.parent.parent.parent.parent.getChildByName("notde").getComponent(pical).Pical[0];
    }
//  update (dt) {}
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
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class NewClass extends Component {
// 
//   LIFE-CYCLE CALLBACKS:
// 
//   onLoad () {}
// 
//     start () {
// 
//     }
// 
// 
//     showno1(){
//         this.node.parent.parent.parent.parent.getChildByName("notde").getComponent(Sprite).spriteFrame= 
//         this.node.parent.parent.parent.parent.getChildByName("notde").getComponent("pical").Pical[0];
//     }
//   update (dt) {}
// }
