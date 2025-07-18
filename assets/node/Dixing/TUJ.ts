import { _decorator, Component, Node } from 'cc';
import qizi from './qizi';
import GeZiManager from '../../TS/Manager/GeZiManager';
import realThing from '../../TS/BASE/realThing';
import { Label } from 'cc';
import { AudioManager } from '../../TS/BASE/music';
import turn from '../../TS/game/time/turn';
import MessageCenter from '../../TS/Message/MessageCenter';
import { SHMessage } from '../../TS/Message/SHMessage';
import { log } from 'console';
const { ccclass, property } = _decorator;

@ccclass('TUJ')
export class TUJ extends qizi {
    rond:number=0
    turn:number=0
    node1: Node=null;
    color: string="Blue";
    start() {
        turn.Too.push(this);
        this.rond = turn.round;
     //   if (turn.round%12==2||turn.round%12==7) { turn.round+=1  }
        this.turn = turn.turn;
       // this.node.children[0].getComponent(Label).string=this.turn.toString()
      
    }



  BZ(preZB: number): void {
      
  }
  
LK(ZB: number): void {
    
}

JR(ZB: number): void {
    
}
turnPass() {
 //   if (!(turn.round%12==2||turn.round%12==7)) {    
if(turn.round==this.rond+2&&turn.turn==this.turn){
//console.log("fd")
this.dead()
//}
    }
    }


FZ(): void {
this.color=GeZiManager.PCP.color
    switch (GeZiManager.PCP.color) {
        case "Blue": GeZiManager.RQ.push(this.getNIG(this.ZB));for(let a of this.getNIG(this.ZB)){  GeZiManager.redM.push(a)}
            
            break;
    
        default:GeZiManager.BQ.push(this.getNIG(this.ZB));for(let a of this.getNIG(this.ZB)){  GeZiManager.blueM.push(a)}
            break;
    }

    console.log(GeZiManager.BQ)
     console.log(GeZiManager.RQ)
    
}



dead(): void {
    switch (this.color) {
        case "Blue":
            console.log(GeZiManager.RQ.indexOf(this.getNIG(this.ZB)))
        
        
        GeZiManager.deleteSubArray(GeZiManager.RQ,this.getNIG(this.ZB));for(let a of this.getNIG(this.ZB)){GeZiManager.shanchu( GeZiManager.redM,a) }
            
            break;
    
        default:GeZiManager.deleteSubArray(GeZiManager.BQ,this.getNIG(this.ZB));for(let a of this.getNIG(this.ZB)){GeZiManager.shanchu( GeZiManager.blueM,a) }
            break;
    }


console.log(this.color)
    console.log(GeZiManager.BQ)
     console.log(GeZiManager.RQ)
this.node.active=false
this.node1.active=false
}
ReceiveMessage(message: SHMessage): void {
    
}
}


