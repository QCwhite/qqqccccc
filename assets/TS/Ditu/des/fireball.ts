// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Animation, find, Label } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../../BASE/realThing";
import GeZiManager from "../../Manager/GeZiManager";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import turn from "../../game/time/turn";
import player from "../../game/player";
import { gif1 } from "../../BASE/spineANDgif/gif";
import DL from "./DL";
import { AudioManager } from '../../BASE/music';


  

@ccclass('Fireball')
export default class Fireball extends realThing {
    rond: number = 0;
    turn: number = 0;
    a: number = 0;
    SH: number = 2;
    
   
    
    @property(Number)
    BZF:number=0
   /* onLoad(): void {
        let animation = this.node.getComponent(cc.Animation);
        if (animation) {
            animation.on('finished', this.onAnimationFinished, this);
        }
    }*/
    start() {
        turn.Too.push(this);
        this.rond = turn.round;
     //   if (turn.round%12==2||turn.round%12==7) { turn.round+=1  }
        this.turn = turn.turn;
        this.node.children[0].getComponent(Label).string=this.turn.toString()
        console.log(this.SH);
    }



  
    BZ() {
        this.node.getComponent(Animation).play("fireball");
        
       setTimeout(()=>{ if (GeZiManager.AllObstacles !=null) {
        for (let a of GeZiManager.AllObstacles) {
            if (a.ZB==this.ZB) {
                a.BZ(this.ZB,false);
                this.ZHA(this.ZB,-1);
            }
        }
        AudioManager.instance.ZJP("magic",9)
  
    } 
   this.node.children[0].active=false;
    MessageCenter.MakeSHMessage("AM",[this.ZB],this.SH,this.turn,"mofa")
  this.fadeOutAndDisappear(this.node,1200)
  },this.BZF)

 setTimeout(()=>{ GeZiManager.shanchu(turn.Too,this)},3000)
    }


turnPass() {
 //   if (!(turn.round%12==2||turn.round%12==7)) {    
if(turn.round==this.rond+1&&turn.turn==this.turn){
console.log("fd")
this.BZ();
//}
    }
    }



ZHA(k,v:number){
let b=[this.NfindGe(k,2,1),this.NfindGe(k,4,1),this.NfindGe(k,6,1),this.NfindGe(k,8,1)]


switch (v) {
    case 0:v=3
        
        break;
        case 1:v=2
        
        break;
        case 2:v=1        
        break;
        case 3:v=0
        
        break;

    default:v=-1;
        break;
}

if(v!=-1){b[v]=0}


let g=[]
for (let a of GeZiManager.AllObstacles) {
    if (a instanceof DL&&b.includes(a.ZB)) {
        console.log(a.ZB)   
        a.DBZ();
      console.log(b);console.log(a.ZB)
      for(let c of b){if(c!=0){this.ZHA(c,b.indexOf(c))};}
   g.push(a.ZB);
    }
    }

    for (let a of GeZiManager.AllObstacles) {
        if (a instanceof DL&&g.includes(a.ZB)) {
        a.ObstacleClear();
        }
        }



}


  ReceiveMessage(message: Message): void {
    
  }

}












