

import { _decorator, find } from 'cc';
const {ccclass, property} = _decorator;


import GMessage from "../Message/GMessage";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import TUT from "../game/TUT";
import player from "../game/player";
import state from "../game/time/state";
import turn from "../game/time/turn";
import GeZiManager from "./GeZiManager";
import ManagerBase from "./ManagerBase";
import Countdown from "../UIS/else/time";
import KHD2 from '../Message/KHD2';
    


@ccclass('GGManager')
export default class GGManager extends ManagerBase {
   messageType:String="GM"
    start () {
        MessageCenter.addReceive(this);
    }
    ReceiveMessage(message: Message): void {


        if(message instanceof SHMessage){
      //上一个玩家的回合结束
        switch (message.SHtype) {
        case "PASS":
        if(turn.turn!=message.from){}else{

        console.log( GeZiManager.PCP.LST)
        GeZiManager.PCP.Tend();

        for(let i=0;i<=GeZiManager.PCP.turnBan.length-1;i++){
        if(GeZiManager.PCP.turnBan[i]!=0){GeZiManager.PCP.turnBan[i]-=1;}
        }

       /*   if( GeZiManager.PCP.LST==-1){GeZiManager.PCP.node.getComponent(Sprite).spriteFrame=GeZiManager.PCP.Atlas.getSpriteFrame("gost")
        GeZiManager.PCP.node.width=175; GeZiManager.PCP.node.height=200;
        GeZiManager.PCP.node.opacity=100;
        }*/

        turn.turnP();//时间运算
        let a= find("Canvas/TurnAndPlayer").getComponent(TUT)
        for(let b of a.DZ){if(a.dizhen(b[0],b[1],b[2],b[3])){GeZiManager.shanchu(a.DZ,b)}}

        MessageCenter.MakeMessage("AM",turn.turn,"getC");
        state.Pchange() ;
        console.log( GeZiManager.PCP.Pturn)
        GeZiManager.PCP.Tstart();

        console.log(turn.turn)
        state.ST=1;
        }
        break;



case "TOUX":
  
for (let j of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]) {
  if (message.Command.includes(j.Pturn)) {
    j.dead();
  }
  
}


break;










        case "SJT":switch (message.Content) {
        case 1:

        break;

        default:
        break;
        }
        break;


        default:
        break;
        }

            }
          
        
        
}


}