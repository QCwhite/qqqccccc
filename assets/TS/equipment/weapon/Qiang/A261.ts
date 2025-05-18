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
import Qiang from "./Qiang";
import { AudioManager } from '../../../BASE/music';
// //火箭筒
//    update (dt) {}

@ccclass('A261')
export default class A261 extends Qiang {
   
      TheNumber:string = 'A261';
      SH: number=1;
      BT: boolean = false;//是否耗费子弹
      BTS: number=99;
  TNJ: number=-3;
     Ytype: number=10;
    
    remove(): void {
//     获取当前组件在 attack2 数组中的索引
       const index = this.node.getComponent(Character).attack2.indexOf(this);

//     判断索引是否有效，然后从数组中移除当前组件
       if (index !== -1) {
       this.node.getComponent(Character).attack2.splice(index, 1);
       }
    }
    
    
    
      QD(an:number[]){

       console.log(this.node.getComponent(Character).Pturn)
       if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}

       MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn,"HP-");
       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
AudioManager.instance.ZJP("attack",this.Ytype)
       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
       GeZiManager.TNC[3]=4
       GeZiManager.Bu.push(2);}
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
// import Qiang from "./Qiang";
// 
// const {ccclass, property} = cc._decorator;
// 
// 
// //火箭筒
// @ccclass
// export default class A261 extends Qiang {
//    
// 
//       TheNumber:string = 'A261';
//       SH: number=1;
//       BT: boolean = false;//是否耗费子弹
//       BTS: number=99;
//   TNJ: number=-3;
//   
//     
//     remove(): void {
//      获取当前组件在 attack2 数组中的索引
//       const index = this.node.getComponent(Character).attack2.indexOf(this);
//     
//      判断索引是否有效，然后从数组中移除当前组件
//       if (index !== -1) {
//           this.node.getComponent(Character).attack2.splice(index, 1);
//       }
//     }
//     
//     
//     
//       QD(an:number[]){
//       
//         console.log(this.node.getComponent(Character).Pturn)
//         if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
//        
//         MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn,"HP-");
//           if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
//           
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
//       GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//       GeZiManager.TNC[3]=4
//       GeZiManager.Bu.push(2);}
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
// 
// 
// 
//     }
//   
//     
//    update (dt) {}
