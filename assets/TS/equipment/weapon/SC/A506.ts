// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S06 from "../../../Scharacter/S06";
import JNUM from "../../../UIS/else/JNUmanager";
import weapon from "../weapon";

@ccclass('A506')
export default class A506 extends weapon {
   SH: number=2;
RL:number=4
TheNumber:string = 'A506';
Aface: number[]=[2];
Attack1(): void {
       if (this.node.getComponent(S06).xll&&!GeZiManager.BanMove.includes(this.target.findGe(this.target.faceTo,1))) {
       this.target.To(this.target.findGe(this.target.faceTo,1),0.4)  }

       if(this.node.getComponent(S06).xll){ this.SH--}
       this.node.getComponent(S06).xll=false

       this.target.ST();

}  
   Attack3(an: number[]): void {
       if (this.node.getComponent(S06).BL[4]>0  ) {

       this.node.parent.getComponent(JNUM).JNF("S左右勾拳",this.target.ZB)
       if(this.RL!=0){
       switch (this.RL) {
       case 4:MessageCenter.MakeSHMessage("AM", an, this.SH, this.node.getComponent(Character).Pturn, "turn4")

       this.RL=6;
       this.node.getChildByName("RL").getComponent(Label).string=this.RL.toString()
       break;

       default:MessageCenter.MakeSHMessage("AM", an, this.SH, this.node.getComponent(Character).Pturn, "turn6");    this.RL=4;      this.node.getChildByName("RL").getComponent(Label).string=this.RL.toString()
       break;
       }
       }
       if (this.RL==4) {
       this.Aface=[2,1,4]
       }else{this.Aface=[2,3,6]}}
    }
    
    
    start(): void {
       this.target=this.node.getComponent(Character)
       this.target.attack3.push(this)
       this.target.attack1.push(this)
    }
remove(): void {
       GeZiManager.shanchu(  this.target.attack3,this)
       GeZiManager.shanchu(  this.target.attack1,this)
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
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S06 from "../../../Scharacter/S06";
// import JNUM from "../../../UIS/else/JNUmanager";
// import weapon from "../weapon";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A506 extends weapon {
// 
//    SH: number=2;
// RL:number=4
// TheNumber:string = 'A506';
// Aface: number[]=[2];
// Attack1(): void {
//     if (this.node.getComponent(S06).xll&&!GeZiManager.BanMove.includes(this.target.findGe(this.target.faceTo,1))) {
//       this.target.To(this.target.findGe(this.target.faceTo,1),0.4)  }
//     
//      if(this.node.getComponent(S06).xll){ this.SH--}
//      this.node.getComponent(S06).xll=false
//  
//       this.target.ST();
//   
// }  
//    Attack3(an: number[]): void {
//    if (this.node.getComponent(S06).BL[4]>0  ) {
//     
//     this.node.parent.getComponent(JNUM).JNF("S左右勾拳",this.target.ZB) 
//     if(this.RL!=0){
//         switch (this.RL) {
//             case 4:MessageCenter.MakeSHMessage("AM", an, this.SH, this.node.getComponent(Character).Pturn, "turn4")
//            
//             this.RL=6;
//             this.node.getChildByName("RL").getComponent(cc.Label).string=this.RL.toString()
//                 break;
//            
//             default:MessageCenter.MakeSHMessage("AM", an, this.SH, this.node.getComponent(Character).Pturn, "turn6");    this.RL=4;      this.node.getChildByName("RL").getComponent(cc.Label).string=this.RL.toString()
//                 break;
//            }
//        }
// if (this.RL==4) {
//     this.Aface=[2,1,4]
// }else{this.Aface=[2,3,6]}}  
//     }
//     
//     
//     start(): void {
//         this.target=this.node.getComponent(Character)
//    this.target.attack3.push(this)
//         this.target.attack1.push(this)
//     }
// 
// remove(): void {
//     GeZiManager.shanchu(  this.target.attack3,this)
//     GeZiManager.shanchu(  this.target.attack1,this)
// }
// 
// }
