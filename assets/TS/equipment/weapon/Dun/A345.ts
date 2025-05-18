import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import { SHMessage } from "../../../Message/SHMessage";
import weapon from "../weapon";
import Dun from "./Dun";
// //冲锋盾

@ccclass('A345')
export default class A345 extends Dun {
    Wtype=3;
    Aface: number[] = [2];//攻击面（只适用于近战角色）
    Pface: number[] = [2];//防御面
    Ptype: String[] = [];
    Pnumber: number = 2;// 格挡值
    BH: boolean = false;
    turn: number = 0;
    SH = 1;//伤害
    level: number=4;//武器等级
    TheNumber: string = 'A345';//
    Atype = "wuli";//伤害类型
 
   
    start () {


      this.node.getComponent(Character).behurt2.push(this);
    }
Behurt2(m: SHMessage, BeHC: any, HC: any): void {
      this.node.getComponent(Character).Walk(false)
// 朝正前方移动一个格
// MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"walk")
}
    remove(): void {
      GeZiManager.shanchu(  this.node.getComponent(Character).behurt2,this)
    }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import { SHMessage } from "../../../Message/SHMessage";
// import weapon from "../weapon";
// import Dun from "./Dun";
// 
// const {ccclass, property} = cc._decorator;
// 
// 
// //冲锋盾
// @ccclass
// export default class A345 extends Dun {
//     Wtype=3;
//     Aface: number[] = [2];//攻击面（只适用于近战角色）
//     Pface: number[] = [2];//防御面
//     Ptype: String[] = [];
//     Pnumber: number = 2;// 格挡值
//     BH: boolean = false;
//     turn: number = 0;
//     SH = 1;//伤害
//     level: number=4;//武器等级
//     TheNumber: string = 'A345';//
//     Atype = "wuli";//伤害类型
//  
//    
// 
//     start () {
// 
//         
//         this.node.getComponent(Character).behurt2.push(this);
//     }
// 
// Behurt2(m: SHMessage, BeHC: any, HC: any): void {
//     this.node.getComponent(Character).Walk(false)
//  朝正前方移动一个格
//  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"walk")
// }
//     remove(): void {
//         GeZiManager.shanchu(  this.node.getComponent(Character).behurt2,this)
//     }
// }
