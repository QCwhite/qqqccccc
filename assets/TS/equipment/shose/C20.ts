// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import Cspine from "../../BASE/spineANDgif/Cspine";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import CXX from "./CXX";

@ccclass('C20')
export default class C20 extends CXX {
    target:Character=null;
        TheNumber:string ='C20';
        Cname:string="法阵"
tt="C20"
        start () {
        this.target=this.node.getComponent(Character);
        this.target.move3.push(this)
        this.target.magic3.push(this)
        this.ZB=this.target.ZB
        GeZiManager.AllObstacles.push(this)
        this.color=this.target.color
        GeZiManager.getMB();
           this.changeEP()
        }
  
      Move3(arg0: number,pturn: number): void {
        this.ZB=arg0
        GeZiManager.getMB();


        let n=this.target.getNIG(arg0)

//    
//        for (let j of n) {



//            switch (this.target.color) {
//                case "Blue":GeZiManager.shanchu(GeZiManager.redM,this.target.ZB);GeZiManager.redM.push(j)

//                    break;
//              
//                default:GeZiManager.shanchu(GeZiManager.blueM,this.target.ZB);GeZiManager.blueM.push(j);
//                    break;
//              }
//            
//     }
      }
    
    remove(){
        GeZiManager.shanchu(this.target.move3,this)
        let a=this.node.getComponent(Cspine)
        a.changeSlot(a.spine2,"KC-B",null,13)
        a.changeSlot(a.spine4,"KC-B",null,13)
        a.changeSlot(a.spine6,"KC-B",null,13)
        a.changeSlot(a.spine8,"KC-B",null,13)
    }
Magic3(ZB: number): void {
        MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),1,this.target.Pturn,"mofa")
}
       changeEP(){
        let a=this.node.getComponent(Cspine)
    let c=this.target.Pturn
        a.changeSlot(a.spine2,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KC-B",c),0)
        a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KC-B",c),0)
        a.changeSlot(a.spine6,"KC-B",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KC-B",c),0)
        a.changeSlot(a.spine8,"KC-B",this.node.parent.getComponent(Shops).find(8,this.TheNumber,"KC-B",c),0)
//                a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//                a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//                 a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                 a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                 a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                 a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
                }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import Character from "../../BASE/Character";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import GeZiManager from "../../Manager/GeZiManager";
// import MessageCenter from "../../Message/MessageCenter";
// import Shops from "../../UIS/shop/shops";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C20 extends CXX {
// 
//     target:Character=null;
//         TheNumber:string ='C20';
//         Cname:string="法阵"
// tt="C20"
// 
//         start () {
//             this.target=this.node.getComponent(Character);
//            this.target.move3.push(this)
//             this.target.magic3.push(this)
//             this.ZB=this.target.ZB
//             GeZiManager.AllObstacles.push(this)
//             this.color=this.target.color
//             GeZiManager.getMB();
//         }
//   
//       Move3(arg0: number,pturn: number): void {
//         this.ZB=arg0
//         GeZiManager.getMB();
//       
//       
//      let n=this.target.getNIG(arg0)
//      
//     
//         for (let j of n) {
//         
//          
//        
//             switch (this.target.color) {
//                 case "Blue":GeZiManager.shanchu(GeZiManager.redM,this.target.ZB);GeZiManager.redM.push(j)
//                      
//                     break;
//               
//                 default:GeZiManager.shanchu(GeZiManager.blueM,this.target.ZB);GeZiManager.blueM.push(j);
//                     break;
//               }
//             
//      }
//       }
//     
//     remove(){
//         GeZiManager.shanchu(this.target.move3,this)
//     
//     }
// 
// Magic3(ZB: number): void {
//        MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),1,this.target.Pturn,"mofa") 
// }
//        changeEP(){
//                 let a=this.node.getComponent(Cspine)
//                 
//                   a.changeSlot(a.spine2,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine6,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                   a.changeSlot(a.spine8,"KC-B",this.node.parent.getComponent(Shops).find(2,this.TheNumber))
//                 a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//                 a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//                  a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                  a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                  a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//                  a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//                 }
// }
