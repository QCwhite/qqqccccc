import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

import Character from "../../../BASE/Character";
import GeZiManager from "../../../Manager/GeZiManager";
import MessageCenter from "../../../Message/MessageCenter";
import weapon from "../weapon";

@ccclass('A1421')
export default class A1421 extends weapon {
    TheNumber:string = 'A1421';
    QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
       MessageCenter.MakeSHMessage("AM", an, 1,this.node.getComponent(Character).Pturn, "Qi-")
       MessageCenter.MakeSHMessage("AM", [this.target.ZB], 1,this.node.getComponent(Character).Pturn, "Qi+")
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}

       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3),this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[2]=3
      GeZiManager.Bu.push(2);}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import Character from "../../../BASE/Character";
// import GeZiManager from "../../../Manager/GeZiManager";
// import MessageCenter from "../../../Message/MessageCenter";
// 
// import weapon from "../weapon";
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class A1421 extends weapon {
//     TheNumber:string = 'A1421';
// 
//     QD(an:number[]){
//   
//         console.log(this.node.getComponent(Character).Pturn)
//         if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//           MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "mofa")
//           MessageCenter.MakeSHMessage("AM", an, 1,this.node.getComponent(Character).Pturn, "Qi-")
//           MessageCenter.MakeSHMessage("AM", [this.target.ZB], 1,this.node.getComponent(Character).Pturn, "Qi+")
//           if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//         
//         MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3),this.node.getComponent(Character).Pturn,"TN-")
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[2]=3
//       GeZiManager.Bu.push(2);}
// }
