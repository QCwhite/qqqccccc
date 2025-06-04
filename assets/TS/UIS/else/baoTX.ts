// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../../BASE/ComponentBase";
import   gif1  from "../../BASE/spineANDgif/gif";
import GeZiManager from "../../Manager/GeZiManager";
import SXX from "../../Scharacter/SXX";

@ccclass('BaoTX')
export default class baoTX extends ComponentBase {
@property(gif1)
    gif:gif1=null
    @property(gif1)
    gif2:gif1=null
get(n:number){
        let j

        if (n==null) {
        j="0"
        }else{ j=n.toString()}
        let k
        this.gif.spriteFrame= this.gif.atlas1.getSpriteFrame(""+j[0]);
        switch (j[0]) {
        case "1":k=GeZiManager.P1.getComponent(SXX).Snumber

        break;
        case "2":k=GeZiManager.P2.getComponent(SXX).Snumber

        break;

        case "3":k=GeZiManager.P3.getComponent(SXX).Snumber

        break;

        case "4":k=GeZiManager.P4.getComponent(SXX).Snumber

        break;

        case "5":k=GeZiManager.P5.getComponent(SXX).Snumber

        break;

        case "6":k=GeZiManager.P6.getComponent(SXX).Snumber

        break;

        default:
        break;
        }
        this.gif2.spriteFrame=this.gif.atlas1.getSpriteFrame(k);
}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import ComponentBase from "../../BASE/ComponentBase";
// import { gif } from "../../BASE/spineANDgif/gif";
// import GeZiManager from "../../Manager/GeZiManager";
// import SXX from "../../Scharacter/SXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class baoTX extends ComponentBase {
// @property(gif)
//     gif:gif=null
//     @property(gif)
//     gif2:gif=null
// 
// 
// get(n:number){
//     let j
// 
//     if (n==null) {
//     j="0"
// }else{ j=n.toString()}
// let k
//    this.gif.spriteFrame= this.gif.atlas1.getSpriteFrame(""+j[0]);
// switch (j[0]) {
//     case "1":k=GeZiManager.P1.getComponent(SXX).Snumber
//         
//         break;
//         case "2":k=GeZiManager.P2.getComponent(SXX).Snumber
//         
//         break;
// 
//         case "3":k=GeZiManager.P3.getComponent(SXX).Snumber
//         
//         break;
// 
//         case "4":k=GeZiManager.P4.getComponent(SXX).Snumber
//         
//         break;
// 
//         case "5":k=GeZiManager.P5.getComponent(SXX).Snumber
//         
//         break;
// 
//         case "6":k=GeZiManager.P6.getComponent(SXX).Snumber
//         
//         break;
// 
//     default:
//         break;
// }
// this.gif2.spriteFrame=this.gif.atlas1.getSpriteFrame(k);
// }
// }
