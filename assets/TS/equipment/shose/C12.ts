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
import Cspine from '../../BASE/spineANDgif/Cspine';
import Shops from '../../UIS/shop/shops';

  @ccclass('C12')
export default class C12 extends CXX {
    target:Character=null;
    TheNumber:string = 'C12';
        Cname:string="云丸"
      fWwalkWay: number=1;
    start () {
       this.target=this.node.getComponent(Character);
       this.fWwalkWay=this.target.walkWay;
       this.target.walkWay=0;
       this.target.MwalkWay=0
       this.target.Mjia(-1)
       this.target.walk2.push(this);
       this.target.walk1.push(this);
       this.target.TNJJ[1]-=2
          this.changeEP()
        }
    
    Walk1(): void {
       if (this.target.PPC()) {
       GeZiManager.qing();
       MessageCenter.MakeMessage("UIManager", "change", -1);
       state.ST=1;
       let q=this.target.qi
       GeZiManager.GeZi=this.target.ZB
       for(let manager of GeZiManager.YuanGong){

       manager.getFarIN(q+1);
       if(this.faceSide(this.target.faceTo).includes(this.target.faceIs(this.target.ZB))){
       manager.out()}

       }
       let c=new Message("",GeZiManager.GeZis,1);
       for(let manager of GeZiManager.YuanGong){


       manager.getFar(this.target.qi+1)
       }
       }

    }    
    Walk2(ZB: number): void {
       if (this.target.PPC()) {
       let k=this.target.getdis(ZB)
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],k,this.target.Pturn,"Qi-");
//      MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.target.Pturn,"TN-");  
       }

    }
    
    
    remove(){
       GeZiManager.shanchu(this.target.walk1,this)
       GeZiManager.shanchu(this.target.walk2,this)
       this.target.TNJJ[1]+=2
       this.target.MwalkWay=this.fWwalkWay;
       this.target.walkWay=this.fWwalkWay;
       let a=this.node.getComponent(Cspine)
       a.changeSlot(a.spine2,"KC-B",null,13)
       a.changeSlot(a.spine4,"KC-B",null,13)
       a.changeSlot(a.spine6,"KC-B",null,13)
       a.changeSlot(a.spine8,"KC-B",null,13)
       a.changeSlot(a.spine2,"KC-F",null,13)
       a.changeSlot(a.spine4,"KC-F",null,13)
       a.changeSlot(a.spine6,"KC-F",null,13)
       a.changeSlot(a.spine8,"KC-F",null,13)

    }
    
changeEP(){
       let a=this.node.getComponent(Cspine)
       let c=this.target.Pturn
       a.changeSlot(a.spine2,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KC-B",c),0)
       a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KC-B",c),0)
       a.changeSlot(a.spine6,"KC-B",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KC-B",c),0)
       a.changeSlot(a.spine8,"KC-B",this.node.parent.getComponent(Shops).find(8,this.TheNumber,"KC-B",c),0)
       a.changeSlot(a.spine2,"KC-F",this.node.parent.getComponent(Shops).find(2,"C12-B","KC-F",c),0)
       a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,"C12-B","KC-F",c),0)
       a.changeSlot(a.spine6,"KC-F",this.node.parent.getComponent(Shops).find(6,"C12-B","KC-F",c),0)
       a.changeSlot(a.spine8,"KC-F",this.node.parent.getComponent(Shops).find(8,"C12-B","KC-F",c),0)
//               a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//               a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//                a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
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
// export default class C12 extends CXX {
// 
//     target:Character=null;
//     TheNumber:string = 'C12';
//         Cname:string="云丸"
//       fWwalkWay: number=1;
//     start () {
//       this.target=this.node.getComponent(Character);
//         this.fWwalkWay=this.target.walkWay;
//         this.target.walkWay=0;
//         this.target.MwalkWay=0
//        this.target.Mjia(-1)
//         this.target.walk2.push(this);
//         this.target.walk1.push(this);
//         this.target.TNJJ[1]-=2
//         }
//     
//     Walk1(): void {
//         if (this.target.PPC()) {
//         GeZiManager.qing();
//         MessageCenter.MakeMessage("UIManager", "change", -1);
//        state.ST=1;
//         let q=this.target.qi
//         GeZiManager.GeZi=this.target.ZB
//         for(let manager of GeZiManager.YuanGong){
//   
//             manager.getFarIN(q+1);
//           if(this.faceSide(this.target.faceTo).includes(this.target.faceIs(this.target.ZB))){
//                manager.out()}
//               
//           }
//           let c=new Message("",GeZiManager.GeZis,1);
//           for(let manager of GeZiManager.YuanGong){
//           
//           
//            manager.getFar(this.target.qi+1)
//           }
//         }
//     
//     }    
// 
// 
// 
// 
//     Walk2(ZB: number): void {
//      if (this.target.PPC()) {
//         let k=this.target.getdis(ZB)
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],k,this.target.Pturn,"Qi-");
//       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.target.Pturn,"TN-");  
//      }
//        
//     }
//     
//     
//     remove(){
//         GeZiManager.shanchu(this.target.walk1,this)
//         GeZiManager.shanchu(this.target.walk2,this)
//         this.target.TNJJ[1]+=2
//         this.target.MwalkWay=this.fWwalkWay;
//         this.target.walkWay=this.fWwalkWay;
//     }
// 
//     
//     }
