//Learn TypeScript:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
//Learn Attribute:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
//Learn life-cycle callbacks:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find } from 'cc';
const {ccclass, property} = _decorator;

import { gif1 } from "../../BASE/spineANDgif/gif";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import DES from "./DES";

import { TGManager } from '../../Manager/TGManager';
import turn from '../../game/time/turn';
import { AudioManager } from '../../BASE/music';


@ccclass('DL')
export default class DL extends DES {
    ZB:number//坐标
    ObstaclesName:string="DL"//障碍物名
  FW:number[]=[]//作用范围
  gif:gif1=null
  timeArray: number[]=[40,40,40,40,40,40,100,100,100,100,40,40,40,40,40,40,40,40,40,40,40,40,60,60,60,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40];
  
  onLoad(): void {
       this.gif=this.node.getComponent(gif1)
       if(this.gif!=null){this.gif.timeArray=this.timeArray}
  AudioManager.instance.ZJP("hit",24);
  }
  
  
  
  
  
  
  
  
  
  
  ObstacleClear()//清除当前坐标障碍物
  {
    for (let i = GeZiManager.AllObstacles.length - 1; i >= 0; i--) {
       if (GeZiManager.AllObstacles[i].ZB === this.ZB) {
       GeZiManager.shanchu(GeZiManager.AllObstacles,this)
       GeZiManager.shanchu(GeZiManager.aos,this.ZB)
       }
  }
  }
  
  BZ(preZB:number)
  {for(let a of GeZiManager.GR)
       {if(a.ZB==this.ZB){a.dead()}}
       GeZiManager.Tcharacter=null
       MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")

//      console.log(GeZiManager.Tcharacter.shose.TheNumber)
       if(GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.shose&&GeZiManager.Tcharacter.shose.TheNumber=="C01"){GeZiManager.dm-=2}

       this.playFrameAnimation1("BZ",0,0)

       this.ObstacleClear();
       AudioManager.instance.ZJP("hit",22,{volume:0.6})
       

  }
  
  
  
  
  playFrameAnimation1(n: string, loop: number, p: number): void {
       switch (n) {
       case "BZ":
       this.node.active=true

       this.node.children[0].getComponent(gif1).moveToNextFrame(7,31,0);

       setTimeout(()=>{this.node.children[1].getComponent(gif1).moveToNextFrame(0,6,0);
       for(let c of GeZiManager.GR){if (c.ZB==this.ZB) {
       c.JJ();
       }}
       if(TGManager.TG.includes("兔")&&GeZiManager.TNJM[turn.round-1]==4){}else{MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli")} ; ;this.fadeOutAndDisappear(this.node,2500)},800)
       setTimeout(()=>{   this.node.children[2].active=false;},500)


       break;

       default: this.node.children[0].getComponent(gif1).moveToNextFrame(16,31,0);   MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli") ; ;this.fadeOutAndDisappear(this.node,2500)
       setTimeout(()=>{   this.node.children[2].active=false;},200)
       break;
       }
  }
  DBZ(){
//  this.playFrameAnimation1("DBZ",0,0)
//    //let b=[this.findGe(2,1),this.findGe(4,1),this.findGe(6,1),this.findGe(8,1)]

//  MessageCenter.MakeSHMessage("AM",b,2,null,"wuli");
       this.BZ(this.ZB)
}
  LK(){}
  
  JR(){}
  
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
//Learn TypeScript:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
//Learn Attribute:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
//Learn life-cycle callbacks:
// - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import YP from "../../../sound/music";
// import { gif } from "../../BASE/spineANDgif/gif";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import DES from "./DES";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class DL extends DES {
// 
//     ZB:number//坐标
//     ObstaclesName:string="DL"//障碍物名
//   FW:number[]=[]//作用范围
//   gif:gif=null
//   timeArray: number[]=[40,40,40,40,40,40,100,100,100,100,40,40,40,40,40,40,40,40,40,40,40,40,60,60,60,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40];
//   
//   onLoad(): void {
//     this.gif=this.node.getComponent(gif)
//   if(this.gif!=null){this.gif.timeArray=this.timeArray}
//  
//   }
//   
//   
//   
//   
//   
//   
//   
//   
//   
//   
//   ObstacleClear()//清除当前坐标障碍物
//   {
//     for (let i = GeZiManager.AllObstacles.length - 1; i >= 0; i--) {
//       if (GeZiManager.AllObstacles[i].ZB === this.ZB) {
//         GeZiManager.shanchu(GeZiManager.AllObstacles,this)
//           GeZiManager.shanchu(GeZiManager.aos,this.ZB)
//       }
//   }
//   }
//   
//   BZ(preZB:number)
//   {for(let a of GeZiManager.GR)
//     {if(a.ZB==this.ZB){a.dead()}}
//   GeZiManager.Tcharacter=null
//   MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
// 
//       console.log(GeZiManager.Tcharacter.shose.TheNumber)
//         if(GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.shose&&GeZiManager.Tcharacter.shose.TheNumber=="C01"){GeZiManager.dm-=2}
//       
// this.playFrameAnimation1("BZ",0,0)
// 
// this.ObstacleClear();
//     cc.find("Canvas").getComponent(YP).PlayAudioclip("bhyp",false,0)
//   }
//   
//   
//   
//   
//   playFrameAnimation1(n: string, loop: number, p: number): void {
//       switch (n) {
//         case "BZ":
//           this.node.active=true
//          
//         this.node.children[0].getComponent(gif).moveToNextFrame(7,31,0);
//   
//         setTimeout(()=>{this.node.children[1].getComponent(gif).moveToNextFrame(0,6,0);  
//          for(let c of GeZiManager.GR){if (c.ZB==this.ZB) {
//           c.JJ();
//          }}
//           MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli") ; ;this.fadeOutAndDisappear(this.node,2500)},800)
//       setTimeout(()=>{   this.node.children[2].active=false;},500) 
//   
//  
//             break;
//    
//         default: this.node.children[0].getComponent(gif).moveToNextFrame(16,31,0);   MessageCenter.MakeSHMessage("AM",[this.ZB],3+GeZiManager.dm,null,"wuli") ; ;this.fadeOutAndDisappear(this.node,2500)
//         setTimeout(()=>{   this.node.children[2].active=false;},200) 
//             break;
//       }
//   }
//   DBZ(){
//   this.playFrameAnimation1("DBZ",0,0)
//     //let b=[this.findGe(2,1),this.findGe(4,1),this.findGe(6,1),this.findGe(8,1)]
//       
//   MessageCenter.MakeSHMessage("AM",b,2,null,"wuli");
//     this.BZ(this.ZB)
// }
// 
// 
// 
// 
// 
// 
//   LK(){}
//   
//   JR(){}
//   
// }
