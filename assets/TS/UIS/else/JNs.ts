// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import FDUIs from "./FDUIs";
import { JNFU } from "./JNFU";

@ccclass('JNs')
export default class JNDJ extends ComponentBase {
@property(Number)
    n:number=0
    start () {

    }
    BD(){

        this.node.parent.parent.getComponent(FDUIs).JND(this.n)


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
// import ComponentBase from "../../BASE/ComponentBase";
// import FDUIs from "./FDUIs";
// import { JNFU } from "./JNFU";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class JNDJ extends ComponentBase {
// @property(Number)
//     n:number=0
// 
// 
//     start () {
// 
//     }
// 
// 
//     BD(){
// 
//         this.node.parent.parent.getComponent(FDUIs).JND(this.n)
// 
// 
//     }
//     // update (dt) {}
// }
