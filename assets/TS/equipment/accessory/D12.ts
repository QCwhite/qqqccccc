// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import DXX from "./DXX";
import SXX from '../../Scharacter/SXX';

@ccclass('D12')
export default class D12 extends DXX {
    target:Character=null;
    TheNumber:string = 'D12';
    Cname:string="猎牙"
    start () {
       this.target=this.node.getComponent(Character);
       this.target.shop2.push(this)
//      this.target.kill3.push(this)

this.target.walk3.push(this)

}
Walk3(ZB: number): void {

       if (this.target.node.getComponent(SXX).ZZ.includes("animal")) {
              
     
if(this.target.weapon.DT){this.target.weapon.QD([this.target.findGe(this.target.faceTo,1)])}else{

if (this.target.weapon.BT&&this.target.weapon.BTS==0) {

}else{  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.target.weapon.getTNC(3)+ this.target.weapon.TNJ,this.node.getComponent(Character).Pturn,"TN+")}
this.target.weapon.attack()

}

}}
 
Shop2(A: string, s: boolean): void {
       this.target.weapon.CJ+=99
       console.log(this.target.weapon.CJ)
}
Kill3(n: number): void {
       if (this.target.getc(n).tt=="human") {
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi+")
       }
}
remove(): void {
      
       GeZiManager.shanchu(this.target.walk3,this)
       GeZiManager.shanchu(this.target.shop2,this)
       GeZiManager.shanchu(this.target.kill3,this)
       this.target.weapon.CJ-=99
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
// 
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import DXX from "./DXX";
// 
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D12 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D12';
//     Cname:string="猎牙"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.shop2.push(this)
//       this.target.kill3.push(this)
//     }
//  
// Shop2(A: string, s: boolean): void {
//     this.target.weapon.CJ+=99
//     console.log(this.target.weapon.CJ)
// }
// 
// Kill3(n: number): void {
//    if (this.target.getc(n).tt=="human") {
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi+")
//    } 
// }
// remove(): void {
//   GeZiManager.shanchu(this.target.shop2,this)
//   GeZiManager.shanchu(this.target.kill3,this)
//     this.target.weapon.CJ-=99
// }
// }
