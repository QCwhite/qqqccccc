// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import AnimalManager from "../../Manager/AnimalManager";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import BXX from "./BXX";

@ccclass('B19')
export default class B19 extends BXX {
    target:Character=null;
    TheNumber:string = 'B19';
    Cname:string="史莱姆甲"
a:AnimalManager=null
    start () {
        this.target=this.node.getComponent(Character)
        this.node.getComponent(Character).behurt3.push(this);
//        this.node.getComponent(Character).dead2.push(this);
     }
   Behurt3(n: number, killp: any, k: number): void {
        if (n>=this.target.HP/2) {
        let o=[2,4,6,8]
        for (let index = 1; index <= 9; index++) {
        if (o.includes(index)) {
        MessageCenter.MakeSHMessage("AM",[this.target.findGe(index,1)],[index,0.3],this.target.Pturn,"move")
        }



        }
        }


   }      
 
     
    remove(): void {
        GeZiManager.shanchu(this.node.getComponent(Character).behurt3 ,this);

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
// import Character from "../../BASE/Character";
// import AnimalManager from "../../Manager/AnimalManager";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import BXX from "./BXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B19 extends BXX {
// 
//     target:Character=null;
//     TheNumber:string = 'B19';
//     Cname:string="史莱姆甲"
// a:AnimalManager=null
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character)
//          this.node.getComponent(Character).behurt3.push(this);
//         this.node.getComponent(Character).dead2.push(this);
//      }
// 
//    Behurt3(n: number, killp: any, k: number): void {
//   if (n>=this.target.HP/2) {
//     let o=[2,4,6,8]
//     for (let index = 1; index <= 9; index++) {
//       if (o.includes(index)) {
//         MessageCenter.MakeSHMessage("AM",[this.target.findGe(index,1)],[index,0.3],this.target.Pturn,"move")
//       }
//       
//      
//         
//     }
//   } 
//    
//  
//    }      
//  
//      
//     remove(): void {
//      GeZiManager.shanchu(this.node.getComponent(Character).behurt3 ,this);
//     
//  }
//    
// }
