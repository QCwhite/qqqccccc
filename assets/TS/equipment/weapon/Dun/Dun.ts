// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import Character from "../../../BASE/Character";
import Cspine from "../../../BASE/spineANDgif/Cspine";
import { Message } from "../../../Message/Message";
import Shops from "../../../UIS/shop/shops";
import turn from "../../../game/time/turn";
import weapon from "../weapon";

@ccclass('Dun')
export default class Dun extends weapon {
    Wtype: number = 3;
    Pface: number[] = [2];
    Ptype: String[] = [];
    Pnumber: number = 1;//格挡值
    BH: boolean = false;
    turn: number = 0;
    Ytype: number=2;
    PD(n: number) {
       this.Pnumber -= n;console.log(n);console.log(this.Pnumber);if(this.Pnumber<0){this.Pnumber=0}
       this.BH = true;

    }
FJ(){}//,每次格挡触发
    start() {
//      turn.Too.push(this);
       super.start()
       this.node.getComponent(Character).eqiupment.push(this);
         this.changeEP()
    }
    turnPass() {


       if (this.BH == true) {
       this.turn++;

       if (this.turn ==7) { this.BH = false; this.turn = 0; this.Pnumber = 1;}
       }








    }

remove(): void {
    let a=this.node.getComponent(Cspine)
    a.changeSlot(a.spine2,"A3",null,13)
       a.changeSlot(a.spine4,"A3",null,13)
       a.changeSlot(a.spine6,"A3",null,13)
}


changeEP(){
       let a=this.node.getComponent(Cspine)
      
       let c=this.target.Pturn
              a.changeSlot(a.spine2,"A3",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"A3",c),0)
              a.changeSlot(a.spine4,"A3",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"A3",c),0)
              a.changeSlot(a.spine6,"A3",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"A3",c),0)

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
// import Cspine from "../../../BASE/spineANDgif/Cspine";
// import { Message } from "../../../Message/Message";
// import Shops from "../../../UIS/shop/shops";
// import turn from "../../../game/time/turn";
// 
// import weapon from "../weapon";
// 
// 
// 
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class Dun extends weapon {
//     Wtype: number = 3;
//     Pface: number[] = [2];
//     Ptype: String[] = [];
//     Pnumber: number = 1;//格挡值
//     BH: boolean = false;
//     turn: number = 0;
// 
//     PD(n: number) {
//         this.Pnumber -= n;console.log(n);console.log(this.Pnumber);if(this.Pnumber<0){this.Pnumber=0}
//         this.BH = true;
// 
//     }
// 
// 
// 
// 
// FJ(){}//,每次格挡触发
// 
// 
// 
// 
//     start() {
//       turn.Too.push(this);
//       super.start()
//         this.node.getComponent(Character).eqiupment.push(this);
//     }
// 
// 
// 
//     turnPass() {
// 
// 
//         if (this.BH == true) {
//             this.turn++;
// 
//             if (this.turn ==7) { this.BH = false; this.turn = 0; this.Pnumber = 1;}
//         }
// 
// 
// 
// 
// 
// 
// 
// 
//     }
// 
// 
// 
// changeEP(){
//     let a=this.node.getComponent(Cspine)
//     
//       a.changeSlot(a.spine2,"A3",this.node.parent.getComponent(Shops).find(2,this.TheNumber.toLowerCase()))
//       a.changeSlot(a.spine4,"A3",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//       a.changeSlot(a.spine6,"A3",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//      }
// }
