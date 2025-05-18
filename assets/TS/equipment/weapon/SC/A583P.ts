// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import CHF from "../../../BASE/CHF";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import S08 from "../../../Scharacter/S08";
import A583 from "./A563";

@ccclass('A583P')
export default class A583P extends A583 {
SH: number=1;
TNJ:number=-1
Aface: number[]=[1,2,3,4,6];
TheNumber: string="A583P"
CJ=1
    QD(an: number[]): void {


       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}


       setTimeout(()=>{ MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "HP-")
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
       if(this.node.getComponent(S08).king){this.yy()}
       },600)


      }
      yy(){ 
  if (this.target.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.target.Pturn,"Qi-");
        }
       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
        GeZiManager.Bu.push(3);}
  
        attack() {
       this.node.getComponent(Character).Walk(false);
       for(let a of  this.node.getComponent(Character).CHF){a.Walk(false)}

       console.log(this.node.getComponent(Character))

       if(this.node.getComponent(Character).attack1.length!=null){for(let a of this.node.getComponent(Character).attack1){a.Attack1()}}
       setTimeout(() => {
       let AF = [].concat(this.Aface);
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
       this.turn6(AF);
       }
       let an: number[] = [];
       for (let mannger of AF) {



       an.push(this.node.getComponent(Character).findGe(mannger, 1));

       }

       this.QD(an);
       }, this.node.getComponent(Character).delay);
       this.node.getComponent(Character).delay=0
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
// import CHF from "../../../BASE/CHF";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import S08 from "../../../Scharacter/S08";
// import A583 from "./A563";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A583P extends A583 {
// SH: number=1;
// TNJ:number=-1
// Aface: number[]=[1,2,3,4,6];
// TheNumber: string="A583P"
// CJ=1
//     QD(an: number[]): void {
//       
// 
//         if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
// 
// 
//         setTimeout(()=>{ MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "HP-")
//             if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//               if(this.node.getComponent(S08).king){this.yy()} 
//         },600)
//        
//     
//       }
// 
//       yy(){ 
// 
//         MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//         GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//         GeZiManager.TNC[3]=4
//         GeZiManager.Bu.push(3);}
//   
//         attack() {
//             this.node.getComponent(Character).Walk(false);
//             for(let a of  this.node.getComponent(Character).CHF){a.Walk(false)}
//           
//             console.log(this.node.getComponent(Character))
//           
//             if(this.node.getComponent(Character).attack1.length!=null){for(let a of this.node.getComponent(Character).attack1){a.Attack1()}}
//             setTimeout(() => {
//              let AF = [].concat(this.Aface);
//              let i = 0;
//              switch (this.node.getComponent(Character).faceTo) {
//                case 6: i = 1;
//                  break;
//                case 8: i = 2;
//                  break;
//                case 4: i = 3;
//                  break;
//              }
//          
//          
//              for (let n = 1; n <= i; n++) {
//                this.turn6(AF);
//              }
//              let an: number[] = [];
//              for (let mannger of AF) {
//          
//          
//          
//                an.push(this.node.getComponent(Character).findGe(mannger, 1));
//          
//              }
//             
//              this.QD(an);
//             }, this.node.getComponent(Character).delay); 
//             this.node.getComponent(Character).delay=0
//            }
//            
//            
//           }
