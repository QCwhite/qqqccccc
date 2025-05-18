// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find ,Animation} from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import AnimalManager from "../Manager/AnimalManager";

@ccclass('CCS')
export default class CCS extends ComponentBase {
    protected onLoad(): void {
        this.node.getComponent(Animation).play();

    }
    sharedData:string[]=[];
    toAM(){find("Canvas/thingsManager/AnimalManager").getComponent(AnimalManager).juese= this.sharedData}
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
// import ComponentBase from "../BASE/ComponentBase";
// import AnimalManager from "../Manager/AnimalManager";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class CCS extends ComponentBase {
// 
// 
//     protected onLoad(): void {
//         this.node.getComponent(cc.Animation).play();
//     
//     }
//     sharedData:string[]=[];
// 
// 
//     toAM(){cc.find("Canvas/thingsManager/AnimalManager").getComponent(AnimalManager).juese= this.sharedData}
// }
