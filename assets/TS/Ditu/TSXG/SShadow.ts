// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Node } from 'cc';
const { ccclass, property } = _decorator;

import ComponentBase from "../../BASE/ComponentBase";

@ccclass('SShadow')
export class SShadow extends ComponentBase {
    private shadowNode: Node | null = null;
    
    start() {
     this.createSShadow();
    }
    createSShadow() {

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
// import ComponentBase from "../../BASE/ComponentBase";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export class SShadow extends ComponentBase {
//     private shadowNode: cc.Node = null;
//     
//     start() {
//         this.createSShadow();
//     }
//     createSShadow() {
//     
//     }
// }
