import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import Dun from "./Dun";
import { AudioManager } from '../../../BASE/music';
import Cspine from '../../../BASE/spineANDgif/Cspine';
import Shops from '../../../UIS/shop/shops';

@ccclass('A322')
export default class A322 extends Dun {
    TheNumber:string= "A322";
    Wtype:number= 3;
    level:number= 2;
    Pnumber:number=0 ;
    Ptype: String[]=["mofa"];
    Aface: number[]=[2];
    start () {
       super.start()
        this.node.getComponent(Character).mk+=1;
        this.target.attack2.push(this)
    } 
    remove(): void {
       GeZiManager.shanchu(this.target.attack2,this)
        this.node.getComponent(Character).mk-=1;
 
    }
Attack2(an: number[]): void {
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+")
} 
  QD(an:number[]){
AudioManager.instance.ZJP("attack",0)
       console.log(this.node.getComponent(Character).Pturn)
        if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
        MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
 
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
 

       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
        GeZiManager.TNC[3]=4
       GeZiManager.Bu.push(2);}




       changeEP(){
              let a=this.node.getComponent(Cspine)
       
              a.changeSlot(a.spine2,"A3",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
              a.changeSlot(a.spine4,"A3",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
              a.changeSlot(a.spine6,"A3",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
            }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// import Dun from "./Dun";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A322 extends Dun {
// 
//     TheNumber:string= "A322";
//     Wtype:number= 3;
//     level:number= 2;
//     Pnumber:number=0 ;
//     Ptype: String[]=["mofa"];
//     Aface: number[]=[1,2,3,4,5,6,7,8,9];
//     start () {
//         super.start()
//         this.node.getComponent(Character).mk+=1;
//         this.target.attack2.push(this)
//     }
//     remove(): void {
//        GeZiManager.shanchu(this.target.attack2,this)
//             this.node.getComponent(Character).mk-=1;
//         
//     }
// Attack2(an: number[]): void {
//       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+")
// }
//   QD(an:number[]){
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
// }
