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
    import { SHMessage } from "../../../Message/SHMessage";
    import weapon from "../weapon";
    import Dun from "./Dun";
//     //冠军盾

    @ccclass('A362')
export default class A362 extends Dun {
    Wtype=3;
    Aface: number[] = [2];//攻击面（只适用于近战角色）
    Pface: number[] = [2];//防御面，默认朝下
    Ptype: String[] = [];
    Pnumber: number = 7;// 格挡值
    BH: boolean = false;
    turn: number = 0;
    SH = 1;//伤害
    level: number=6;//武器等级
    TheNumber: string = 'A362';//
    Atype = "wuli";//伤害类型
 Ytype: number=14;
   

start () {
       // this.node.getComponent(Character).move2.push(this);
       super.start()
     this.node.getComponent(Character).walk3.push(this);
        this.node.getComponent(Character).attack1.push(this);
    }

Walk3(ZB:number): void {
    //每次移动获得一气
    MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+")
  }  

//   Turn3(): void {
//     //转身qi清0
 //   MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.node.getComponent(Character).qi,this.node.getComponent(Character).Pturn,"Qi-")
// }


// Move2(arg0: number, Pturn: number): void {
    //利用a存冠军盾角色正前方一格的坐标
//    let a=this.node.getComponent(Character).findGe(this.node.getComponent(Character).faceTo,1);
  //利用findGE的ZB与所有角色的ZB比较 比较成功则向正前方发一个移动的信息
 // MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"move");

//  }
 Attack1(): void {
 let o =this.target.qi
 
 


 for (let index = 0; index < o; index++) {
    MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,1)],[this.target.faceTo,0.3],this.node.getComponent(Character).Pturn,"move")
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.faceTo,0.3],this.node.getComponent(Character).Pturn,"move")
    
 }



 MessageCenter.MakeSHMessage("AM",[this.target.ZB],o,this.node.getComponent(Character).Pturn,"Qi-")

 }



 

remove(): void {
GeZiManager.shanchu(this.target.attack1,this)
GeZiManager.shanchu(this.target.walk3,this)
}

}
