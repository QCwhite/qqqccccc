// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import turn from "../../../game/time/turn";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import A110 from "../Dao/A110";

@ccclass('A1461')
export default class    A1461 extends A110 {
  sh:number=3
   Ytype: number=14;
    start () {
       this.target=this.node.getComponent(Character)
       this.target.attack3.push(this)
            this.changeEP()
    }
Attack3(an: number[]): void {
       MessageCenter.MakeSHMessage  ("AM",[65],[1,"DZ"],this.target.Pturn,"mofaT")

}
remove(): void {
       GeZiManager.shanchu(this.target.attack3,this)
}
//   update (dt) {}
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
// import Character from "../../../BASE/Character";
// import turn from "../../../game/time/turn";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import A110 from "../Dao/A110";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class    A1461 extends A110 {
// 
//   sh:number=3
//    
// 
//     start () {
//         this.target=this.node.getComponent(Character)
//        this.target.attack3.push(this)
//     }
// Attack3(an: number[]): void {
//   MessageCenter.MakeSHMessage  ("AM",[65],[1,"DZ"],this.target.Pturn,"mofaT")
//     
// }
// 
// 
// 
// 
// remove(): void {
//     GeZiManager.shanchu(this.target.attack3,this)
// }
//    update (dt) {}
// }
