// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Obstacles from "../../BASE/ Obstacles";
import ComponentBase from "../../BASE/ComponentBase";
import realThing from "../../BASE/realThing";
import  gif1  from "../../BASE/spineANDgif/gif";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";

@ccclass('DES')
export default class DES extends realThing{
  
  
  
           
 
  ObstaclesName:string=""//障碍物名
FW:number[]=[]//作用范围
gif:gif1=null
ObstacleClear()//清除当前坐标障碍物
{
    GeZiManager.AllObstacles.filter((obs)=>obs.ZB!==this.ZB)
    GeZiManager.shanchu(GeZiManager.AllObstacles,this.ZB)
}

LK(ZB:number){}
JR(ZB:number){}
  
  playFrameAnimation1(n:string,loop:number,p:number) {
     
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
// import Obstacles from "../../BASE/ Obstacles";
// import ComponentBase from "../../BASE/ComponentBase";
// import realThing from "../../BASE/realThing";
// import { gif } from "../../BASE/spineANDgif/gif";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class DES extends realThing{
// 
// 
//   
//   
//   
//                   
// 
//  
//   ObstaclesName:string=""//障碍物名
// FW:number[]=[]//作用范围
// gif:gif=null
// ObstacleClear()//清除当前坐标障碍物
// {
//     GeZiManager.AllObstacles.filter((obs)=>obs.ZB!==this.ZB)
//     GeZiManager.shanchu(GeZiManager.AllObstacles,this.ZB)
// }
// 
// BZ(preZB:number)
// {}
// 
// 
// 
// 
// 
// 
// LK(ZB:number){}
// 
// JR(ZB:number){}
// 
// 
// 
// 
// 
// 
// 
// 
//   
//   playFrameAnimation1(n:string,loop:number,p:number) {
// 
//    }
//   
//   
//   }
