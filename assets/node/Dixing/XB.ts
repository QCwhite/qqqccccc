import { _decorator, Component, Node } from 'cc';
import realThing from '../../TS/BASE/realThing';
import DL from '../../TS/Ditu/des/DL';
import { AudioManager } from '../../TS/BASE/music';
import GeZiManager from '../../TS/Manager/GeZiManager';
import MessageCenter from '../../TS/Message/MessageCenter';
import endGame from '../../TS/UIS/endgame';
import { Message } from '../../TS/Message/Message';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends DL{
@property(Number)
ZB: number=0;
color: string="Blue";
onLoad(): void {
     
     this.ghost=true
         this.setXY(0)
            GeZiManager.aos.push(this.ZB)
      GeZiManager.AllObstacles.push(this)
      GeZiManager.XB.push(this)
    if (this.x>4) {
           this.color="Red"


    }

}
start(): void {
    console.log(this.x)
 

}
      BZ(preZB:number)
      {//for(let a of GeZiManager.GR)
          // {if(a.ZB==this.ZB){a.dead()}}
           GeZiManager.Tcharacter=null
           MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
    
    //      console.log(GeZiManager.Tcharacter.shose.TheNumber)
          // if(GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.shose&&GeZiManager.Tcharacter.shose.TheNumber=="C01"){GeZiManager.dm-=2}
    


           if (GeZiManager.Tcharacter) {
            if (GeZiManager.Tcharacter.color!=this.color) {
                if (this.color=="Blue") {
                    this.color="Red"
this.node.children[1].active=true
                    endGame.endG(1)
                }else if (this.color=="Red") {
                    this.color="Blue"
                    this.node.children[1].active=false
                         endGame.endG(0)
                }
            }
           }
         //  this.playFrameAnimation1("BZ",0,0)
    
       //    this.ObstacleClear();
        //   AudioManager.instance.ZJP("hit",22,{volume:0.6})
           
    
      }



      ReceiveMessage(message: Message): void {
          
      }
}


