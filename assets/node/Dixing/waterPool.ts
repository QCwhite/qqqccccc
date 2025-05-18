// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, UIOpacity } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../TS/BASE/Character";
import DES from "../../TS/Ditu/des/DES";
import GeZiManager from "../../TS/Manager/GeZiManager";
import { Message } from "../../TS/Message/Message";
import MessageCenter from "../../TS/Message/MessageCenter";
import { SHMessage } from "../../TS/Message/SHMessage";
import turn from "../../TS/game/time/turn";

@ccclass('WaterPool')
export default class waterPool extends DES {
   IFice:boolean=false
ICET:number=0
FW: number[]=[];
start(): void {
       console.log("ice")

}
ToICE( time: number): void {
       this.IFice=true;
       this.ICET=time;

       GeZiManager.shanchu(GeZiManager.waterPool,this.ZB)

       turn.Roo.push(this)
       this.node.getComponent(UIOpacity).opacity=155
       console.log("ice")


}
ToN(){

       GeZiManager.shanchu(turn.Roo,this)
       this.IFice=false;
       GeZiManager.waterPool.push(this.ZB)
       this.node.getComponent(UIOpacity).opacity=255
       MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
       if(GeZiManager.Tcharacter&&GeZiManager.Tcharacter instanceof Character){GeZiManager.Tcharacter.waterP("water")}

}
roundPass(): void {
       if (this.ICET!=0) {
       this.ICET--
       if (this.ICET==0) {
       this.ToN()
       }
       }
}
JR(ZB: number): void {
       MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOneC")
       if (GeZiManager.Tcharacter) {
       GeZiManager.Tcharacter.sh-=1
       }
}
LK(ZB: number): void {
       MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOneC")
       if (GeZiManager.Tcharacter) {
       GeZiManager.Tcharacter.sh +=1}

}
BZ(preZB: number): void {
       if (this.IFice) {
       MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOne")
//      console.log(preZB)
//      console.log(GeZiManager.Tcharacter.turn8([GeZiManager.Tcharacter.faceIs(preZB)])[0])
//  console.log(this.ZB)
       this.playFrameAnimation1("BZ",0,GeZiManager.Tcharacter.turn8([GeZiManager.Tcharacter.faceIs(preZB)])[0])
       MessageCenter.MakeSHMessage("AM",[this.ZB],[GeZiManager.Tcharacter.turn8([GeZiManager.Tcharacter.faceIs(preZB)])[0],0.4],turn.turn,"move")
//      this.ObstacleClear()

       }
}
ReceiveMessage(message: Message): void {
       if (message instanceof SHMessage) {

       console.log("ice")
       if (message.Command.includes(this.ZB) || message.Command[0] == 65) {
       console.log("ice")
       switch (message.SHtype) {
       case "ice":this.ToICE(3)
       console.log("ice")
       break;
       case "mofa":if(this.IFice){this.ToN()}

       break;
       default:
       break;
       }


       }
       }


}


}