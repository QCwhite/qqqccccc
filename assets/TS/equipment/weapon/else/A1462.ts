// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import state from "../../../game/time/state";
import GeZiManager from "../../../Manager/GeZiManager";
import { Message } from "../../../Message/Message";
import MessageCenter from "../../../Message/MessageCenter";
import A131 from "../Dao/A131";
import weapon from "../weapon";
import { AudioManager } from '../../../BASE/music';

@ccclass('A1462')
export default class A1462 extends A131 {
   dead:number=0
   Wtype: number=4;
   
   
   
   attack() {if(this.PPC()){state.ST = 3.5


       GeZiManager.DLLM="A14X"
       GeZiManager.qing();
       if(this.node.getComponent(Character).magic1!=null){for(let a of this.node.getComponent(Character).magic1){a.Magic1();}}

       let    an=this.getFar(3+GeZiManager.JL,this.target.ZB)

       GeZiManager.GeZis = [].concat(an);

       let g = new Message("", GeZiManager.GeZis, 1);
       for (let m of GeZiManager.YuanGong) {


       m.red()
       m.ReceiveMessage(g)

       }
       MessageCenter.MakeMessage("UIManager", "change", -1);
       }






}
QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).magic2){a.Magic2();}}
       MessageCenter.MakeSHMessage("AM",an,this.dead,this.node.getComponent(Character).Pturn, "mofa")
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(4)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
AudioManager.instance.ZJP("hit",16)
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).magic3){a.Magic3(an[0]);}}


       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[4]=4
  GeZiManager.Bu.push(4);}
getFar(dis:number,ZB){
       let x;
       let y;
       let b=[]
       if(ZB%8==0){x=8}else {x=ZB%8;}
       y=Math.ceil(ZB/8);
       for (let index = 1; index < 65; index++) {

       let x1;
       let y2;

       if( index%8==0){x1=8}else {x1=index%8;}
       y2=Math.ceil(index/8);
       if(Math.abs(x-x1)+Math.abs(y-y2)<=dis){b.push(index)}

       }
       console.log(b)
       return b
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
// import state from "../../../game/time/state";
// import GeZiManager from "../../../Manager/GeZiManager";
// import { Message } from "../../../Message/Message";
// import MessageCenter from "../../../Message/MessageCenter";
// import A131 from "../Dao/A131";
// import weapon from "../weapon";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A1462 extends A131 {
//    dead:number=0
//    Wtype: number=4;
//    
//    
//    
//    attack() {if(this.PPC()){state.ST = 3.5
// 
// 
//     GeZiManager.DLLM="A14X"
//     GeZiManager.qing();
//     if(this.node.getComponent(Character).magic1!=null){for(let a of this.node.getComponent(Character).magic1){a.Magic1();}}
//    
// let    an=this.getFar(3+GeZiManager.JL,this.target.ZB)
// 
//     GeZiManager.GeZis = [].concat(an);
// 
//     let g = new Message("", GeZiManager.GeZis, 1);
//     for (let m of GeZiManager.YuanGong) {
// 
// 
//       m.red()
//       m.ReceiveMessage(g)
// 
//     }
//     MessageCenter.MakeMessage("UIManager", "change", -1); 
//     }
// 
// 
// 
// 
// 
// 
// }
// 
// 
// 
// QD(an:number[]){
// 
//     console.log(this.node.getComponent(Character).Pturn)
//     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).magic2){a.Magic2();}}
//       MessageCenter.MakeSHMessage("AM",an,this.dead,this.node.getComponent(Character).Pturn, "mofa")
//       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(4)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//   
//       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).magic3){a.Magic3(an[0]);}}
//   
//   
//   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//   GeZiManager.TNC[4]=4
//   GeZiManager.Bu.push(4);}
// 
// 
// 
// 
// 
// 
// 
// getFar(dis:number,ZB){
// let x;
// let y;
//  let b=[]  
//         if(ZB%8==0){x=8}else {x=ZB%8;}
//     y=Math.ceil(ZB/8);
// for (let index = 1; index < 65; index++) {
// 
// let x1;
// let y2;
//    
//        if( index%8==0){x1=8}else {x1=index%8;}
//    y2=Math.ceil(index/8);
//    if(Math.abs(x-x1)+Math.abs(y-y2)<=dis){b.push(index)}
//  
// }
// console.log(b)
// return b
// }
// }
