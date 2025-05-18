// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import HP from "../../../UIS/heart";
import A210 from "./A210";
import state from '../../../game/time/state';
import { Message } from '../../../Message/Message';
import { AudioManager } from '../../../BASE/music';

@ccclass('A263')
export default class A263 extends A210 {
     BT: boolean = true;//是否耗费子弹
        BTS: number = 1;//子弹数
        SH = 2;//伤害
        TheNumber: string = "A263";//编号，用于识别武器
        level: number=6;
    start(): void {
       this.target.Fus(0.5)
    }
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



         remove(): void {
              this.target.BFUs(0.5) 
         }
         QD(an:number[]){
         
                console.log(this.node.getComponent(Character).Pturn)
                if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).magic2){a.Magic2();}}
                MessageCenter.MakeSHMessage("AM",an,2,this.node.getComponent(Character).Pturn, "wuli")
                MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(4)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
          AudioManager.instance.ZJP("magic",15)
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
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import HP from "../../../UIS/heart";
// import A210 from "./A210";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A263 extends A210 {
//      BT: boolean = true;//是否耗费子弹
//         BTS: number = 1;//子弹数
//         SH = 3;//伤害
//         TheNumber: string = "A263";//编号，用于识别武器
//         level: number=6;
//     
//         QD(an:number[]){
//       
//             console.log(this.node.getComponent(Character).Pturn)
//             if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//     
//           距离大于2才发信息
//             if( this.SH,this.node.getComponent(Character).getdis(an[0])>2){
//                 MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli");
//               对目标9宫格造成1点伤害 分两个部分最外圈不够九宫格部分和内部够九宫格部分
//                 if(an[0]>=1&&an[0]<=8){
//                     if(an[0]==1){
//                         MessageCenter.MakeSHMessage("AM", [an[0]+1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     }
//                     else if(an[0]==8){
//                         MessageCenter.MakeSHMessage("AM", [an[0]-1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     }
//                     else{
//                         MessageCenter.MakeSHMessage("AM", [an[0]+1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]+9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     }
//                   
//                 }
//                 else if(an[0]>=57){
//                     if(an[0]==57){
//                         MessageCenter.MakeSHMessage("AM", [an[0]+1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     }
//                     else if(an[0]==64){
//                         MessageCenter.MakeSHMessage("AM",[ an[0]-1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     }
//                     else{
//                         MessageCenter.MakeSHMessage("AM", [an[0]+1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                         MessageCenter.MakeSHMessage("AM", [an[0]-9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     }
//     
//                   
//                 }
//                 else if(an[0]%8==1){
//                     MessageCenter.MakeSHMessage("AM", [an[0]+1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-7], 1,this.node.getComponent(Character).Pturn, "wuli");
//     
//                 }
//                 else if(an[0]%8==0){
//                     MessageCenter.MakeSHMessage("AM", [an[0]-1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                 }
//                 else {
//                     MessageCenter.MakeSHMessage("AM", [an[0]+1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-1], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-7], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-8], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]+9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                     MessageCenter.MakeSHMessage("AM", [an[0]-9], 1,this.node.getComponent(Character).Pturn, "wuli");
//                 }
//             }
//              
//     
//               if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//             
//             MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//           GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//           GeZiManager.TNC[3]=4
//           GeZiManager.Bu.push(2);}
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
//   }
