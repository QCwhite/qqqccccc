// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import equipment from "../../BASE/equipment";
import Cspine from "../../BASE/spineANDgif/Cspine";
import Shops from "../../UIS/shop/shops";

@ccclass('CXX')
export default class CXX extends equipment {
    TheNumber:string="CXX"
    remove(){}
       changeEP(){
        let a=this.node.getComponent(Cspine)

        a.changeSlot(a.spine2,"CL",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L",0),0)
        a.changeSlot(a.spine2,"CR",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R",1),1)
        a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(6,this.TheNumber+"-Q",2),2)
        a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(6,this.TheNumber,3),3)

        a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q",4),4)
        a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(4,this.TheNumber,5),5)
//            a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//            a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//             a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//             a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//             a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//             a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
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
// import equipment from "../../BASE/equipment";
// import Cspine from "../../BASE/spineANDgif/Cspine";
// import Shops from "../../UIS/shop/shops";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class CXX extends equipment {
//     TheNumber:string="CXX"
//     remove(){}
//        changeEP(){
//             let a=this.node.getComponent(Cspine)
//             
//               a.changeSlot(a.spine2,"CL",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//               a.changeSlot(a.spine2,"CR",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//            a.changeSlot(a.spine6,"C03-Q",this.node.parent.getComponent(Shops).find(6,this.TheNumber+"-Q"))
//               a.changeSlot(a.spine6,"C03-H",this.node.parent.getComponent(Shops).find(6,this.TheNumber))
//              
//              a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//               a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//             a.changeSlot(a.spine4,"KC-B",this.node.parent.getComponent(Shops).find(4,this.TheNumber+"-Q"))
//             a.changeSlot(a.spine4,"KC-F",this.node.parent.getComponent(Shops).find(4,this.TheNumber))
//              a.changeSlot(a.spine4,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//              a.changeSlot(a.spine4,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//              a.changeSlot(a.spine6,"CH",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-L"))
//              a.changeSlot(a.spine6,"CQ",this.node.parent.getComponent(Shops).find(2,this.TheNumber+"-R"))
//             }
// }
