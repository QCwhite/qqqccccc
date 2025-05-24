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
import CXX from "./CXX";
import MessageCenter from '../../Message/MessageCenter';

@ccclass('C02')
export default class C02 extends CXX {
    target:Character=null;
    TheNumber:string = 'C02';
        Cname:string="木屐"
t:number=3;
    start () {

       this.target=this.node.getComponent(Character);
       this.target.mmc.push(this);
        if (this.target.weapon.Wtype==1) {
              MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
                 MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
       }
       this.changeEP()

}
mg(m: string): void {
       if(m=="DZ") {GeZiManager.dm-=1;this.t--;}
}
remove(){
       GeZiManager.shanchuALL(this.target.mmc,this)
  
       GeZiManager.dm=0
     

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
// 
// 
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import CXX from "./CXX";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C02 extends CXX {
// 
//     target:Character=null;
//     TheNumber:string = 'C02';
//         Cname:string="木屐"
// t:number=3;
//     start () {
// 
// this.target=this.node.getComponent(Character);
// this.target.mmc.push(this);
// 
// }
// 
// mg(m: string): void {
//   if(m=="DZ") {GeZiManager.dm-=1;this.t--;if(this.t==0){this.remove()}}
// }
// 
// 
// remove(){
//    GeZiManager.shanchu(this.target.mmc,this)
//    GeZiManager.shanchu(this.target.mmc,this)
//    GeZiManager.dm=0
//    console.log(this.target.mmc)
//    this.target.changeE('shose')
//    
// }
// 
// 
// 
// }
