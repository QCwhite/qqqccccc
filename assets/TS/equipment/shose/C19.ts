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
import CXX from "./CXX";

@ccclass('C19')
export default class C19 extends CXX {
        target:Character=null;
            TheNumber:string ='C19';
            Cname:string="狂战靴"
    
            start () {
       this.target=this.node.getComponent(Character);
       this.target.walk3.push(this)

            }
    Walk3(ZB: number): void {
       if(this.target.weapon.DT){this.target.weapon.QD([this.target.findGe(this.target.faceTo,1)])}else{

       if (this.target.weapon.BT&&this.target.weapon.BTS==0) {

       }else{ 
        this.target.TN+=this.target.weapon.getTNC(3)+ this.target.weapon.TNJ
      //  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.target.weapon.getTNC(3)+ this.target.weapon.TNJ,this.node.getComponent(Character).Pturn,"TN+")}
       this.target.weapon.attack()}



       }
    }
    
        
        
        remove(){
       GeZiManager.shanchu(this.target.walk3,this)

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
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// 
//     export default class C19 extends CXX {
// 
//         target:Character=null;
//             TheNumber:string ='C19';
//             Cname:string="狂战靴"
//     
//             start () {
//                 this.target=this.node.getComponent(Character);
//                 this.target.walk3.push(this)
//               
//             }
//     Walk3(ZB: number): void {
//         if(this.target.weapon.DT){this.target.weapon.QD([this.target.findGe(this.target.faceTo,1)])}else{
//            
//           if (this.target.weapon.BT&&this.target.weapon.BTS==0) {
//         
//           }else{  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.target.weapon.getTNC(3)+ this.target.weapon.TNJ,this.node.getComponent(Character).Pturn,"TN+")}
//             this.target.weapon.attack()
//         
//                
//                
//               } 
//     }
//     
//         
//         
//         remove(){
//             GeZiManager.shanchu(this.target.walk3,this)
//         
//         }
// 
//       
// 
//     }
