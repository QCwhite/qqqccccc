import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import A322 from "./A322";
import Dun from "./Dun";

@ccclass('A343')
export default class A343 extends A322 {
    TheNumber:string= "A343";
    Wtype:number= 3;
    level:number= 2;
    Pnumber:number=0 ;
    Ptype: String[]=["mofa"];
    Aface: number[]=[1,2,3,4,6,7,8,9];
    Ytype: number=17;
    start () {
       this.node.getComponent(Character).wk+=1;
       this.node.getComponent(Character).mk+=1;
            this.changeEP()
    }
    remove(): void {
       this.node.getComponent(Character).wk-=1;
       this.node.getComponent(Character).mk-=1;

    }
    QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")

       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
      GeZiManager.Bu.push(2);}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import A322 from "./A322";
// import Dun from "./Dun";
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class A343 extends A322 {
//     TheNumber:string= "A343";
//     Wtype:number= 3;
//     level:number= 2;
//     Pnumber:number=0 ;
//     Ptype: String[]=["mofa"];
//     Aface: number[]=[1,2,3,4,6,7,8,9];
//     
//     start () {
//         this.node.getComponent(Character).wk+=1;
//         this.node.getComponent(Character).mk+=1;
//     }
//     remove(): void {
//         this.node.getComponent(Character).wk-=1;
//             this.node.getComponent(Character).mk-=1;
//         
//     }
// 
//     QD(an:number[]){
//   
//         console.log(this.node.getComponent(Character).Pturn)
//         if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//           MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
//           MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//       
//           if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//       
//       
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[3]=4
//       GeZiManager.Bu.push(2);}
// 
// 
// }
