// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, ScrollView, Prefab } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('TLoad')
export default class NewClass extends Component {
    @property(ScrollView)
    t_Scro: ScrollView | null = null;
    @property(Prefab)
    t_Per: Prefab | null = null;
   
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {
        // for(let a=0;a<20;a++){
        // this.t_Scro.content.addChild(this.generatePe());
        // }
    }
    generatePe(){
        // return cc.instantiate(this.t_Per);
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
//     @property(cc.ScrollView)
//     t_Scro: cc.ScrollView = null;
// 
//     @property(cc.Prefab)
//     t_Per: cc.Prefab = null;
//    
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         for(let a=0;a<20;a++){
//             this.t_Scro.content.addChild(this.generatePe());
//         }
//     }
// 
//     generatePe(){
//         return cc.instantiate(this.t_Per);
//     }
//     // update (dt) {}
// }
