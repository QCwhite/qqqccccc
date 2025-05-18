import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import Character from "../../../BASE/Character";
import MessageCenter from "../../../Message/MessageCenter";
import Dun from "./Dun";
import { AudioManager } from '../../../BASE/music';

@ccclass('A321')
export default class A321 extends Dun {
    TheNumber:string= "A321";
    Wtype: number = 3;//
    level: number = 2;
    Pnumber: number = 0;//格挡值
    SH: number=1;
            Ytype: number=3;
FJ(){AudioManager.instance.ZJP("hit",26);
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,1)], this.SH,this.node.getComponent(Character).Pturn, "wuli")
}

}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Character from "../../../BASE/Character";
// import MessageCenter from "../../../Message/MessageCenter";
// import Dun from "./Dun";
// 
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class A321 extends Dun {
//     TheNumber:string= "A321";
//     Wtype: number = 3;//
//     level: number = 2;
//     Pnumber: number = 0;//格挡值
//     SH: number=1;
// FJ(){
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,1)], this.SH,this.node.getComponent(Character).Pturn, "wuli")
// }
//     
// }
