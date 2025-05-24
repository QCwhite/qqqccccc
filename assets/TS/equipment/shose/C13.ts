// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import state from "../../game/time/state";
import GeZiManager from "../../Manager/GeZiManager";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import CXX from "./CXX";
import { AudioManager } from '../../BASE/music';

  @ccclass('C13')
export default class C13 extends CXX {
    target:Character=null;
    TheNumber:string = 'C13';
        Cname:string="X战靴"
      fWwalkWay: number=1;
    start () {

       this.target=this.node.getComponent(Character);
     this.target.walk2.push(this);
       this.target.walk1.push(this);
       this.fWwalkWay=this.target.walkWay;
       this.target.walkWay=0;
       this.target.MwalkWay=0
          this.changeEP()
    }
    
    Walk1(): void {
       if (this.target.PPC()) {
       GeZiManager.qing();
       MessageCenter.MakeMessage("UIManager", "change", -1);
       state.ST=1;
       let AF = [1,2,3]
       let i = 0;
       switch (this.node.getComponent(Character).faceTo) {
       case 6: i = 1;
       break;
       case 8: i = 2;
       break;
       case 4: i = 3;
       break;
       }


       for (let n = 1; n <= i; n++) {
       this.node.getComponent(Character).turn6(AF);

       }
       let an: number[] = [];
       for (let mannger of AF) {
       an.push(this.node.getComponent(Character).findGe(mannger, 1));

       }

       GeZiManager.GeZis = [].concat(an);


       for (let m of GeZiManager.YuanGong) {



       if(GeZiManager.BanMove.includes(m.ZB)){
       m.out();}

       }


       }
       let c=new Message("",GeZiManager.GeZis,1);
       for(let manager of GeZiManager.YuanGong){


       manager.red();

       manager.ReceiveMessage(c);
       }
    }    
    
    remove(){
       GeZiManager.shanchu(this.target.walk1,this)
    GeZiManager.shanchu(this.target.walk2,this)
       this.target.MwalkWay=this.fWwalkWay;
       this.target.walkWay=this.fWwalkWay;
}
Walk2(ZB: number): void {
   AudioManager.instance.ZJP("attack",19)
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
// import state from "../../game/time/state";
// import GeZiManager from "../../Manager/GeZiManager";
// import { Message } from "../../Message/Message";
// import MessageCenter from "../../Message/MessageCenter";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
//   @ccclass
// export default class C13 extends CXX {
// 
//     target:Character=null;
//     TheNumber:string = 'C13';
//         Cname:string="X战靴"
//       fWwalkWay: number=1;
//     start () {
// 
//         this.target=this.node.getComponent(Character);
//       this.target.walk2.push(this);
//         this.target.walk1.push(this);
//         this.fWwalkWay=this.target.walkWay;
//         this.target.walkWay=0;
//         this.target.MwalkWay=0
//     }
//     
//     Walk1(): void {
//         if (this.target.PPC()) {
//         GeZiManager.qing();
//         MessageCenter.MakeMessage("UIManager", "change", -1);
//        state.ST=1;
//        let AF = [1,2,3]
//     let i = 0;
//     switch (this.node.getComponent(Character).faceTo) {
//       case 6: i = 1;
//         break;
//       case 8: i = 2;
//         break;
//       case 4: i = 3;
//         break;
//     }
// 
// 
//     for (let n = 1; n <= i; n++) {
//       this.node.getComponent(Character).turn6(AF);
// 
//     }
//     let an: number[] = [];
//     for (let mannger of AF) {
//       an.push(this.node.getComponent(Character).findGe(mannger, 1));
// 
//     }
// 
//     GeZiManager.GeZis = [].concat(an);
// 
// 
//     for (let m of GeZiManager.YuanGong) {
// 
// 
//    
// if(GeZiManager.BanMove.includes(m.ZB)){
//     m.out();}
// 
//     }
// 
// 
//   }
//   let c=new Message("",GeZiManager.GeZis,1);
//   for(let manager of GeZiManager.YuanGong){
//   
//   
//       manager.red();
//   
//      manager.ReceiveMessage(c);
//   }
//     }    
// 
// 
// 
// 
//     
//     remove(){
//         GeZiManager.shanchu(this.target.walk1,this)
//      GeZiManager.shanchu(this.target.walk2,this)
//       this.target.MwalkWay=this.fWwalkWay;
//       this.target.walkWay=this.fWwalkWay;
//     }}
