

import { _decorator, Component, Node } from 'cc';
import Character from '../../BASE/Character';
import GeZiManager from '../../Manager/GeZiManager';
import state from '../../game/time/state';
import MessageCenter from '../../Message/MessageCenter';
const { ccclass, property } = _decorator;

@ccclass('DGZ2')
export class DGZ2 extends Component {
  ZT:number=0
  target:Character=null
  
  
    start() {
this.target=this.node.getComponent(Character)
    
 this.node.on(Node.EventType.MOUSE_DOWN,this.onMouseDown,this);


}
onMouseDown(event) {

    console.log(state.ST)
if (this.target.PPC()&&(state.ST==1||state.ST==99||state.ST==0)) {
    

      if (event.getButton() === 0) { 

this.ToZT1()

 
      } else if (event.getButton() === 2) {

this.ToZT2()
      

      }
}
    }

ToZT1(){
if (this.ZT==1) {
       GeZiManager.hf()
    MessageCenter.MakeMessage("UIManager","change",1);
    this.ZT=0
    return
}else{
       GeZiManager.hf()
this.ZT=1

}
for (let g of GeZiManager.YuanGong) {
    g.null()
}

state.ST=99
    MessageCenter.MakeMessage("UIManager","change",99);
switch (this.target.walkWay) {
    case 1:
        GeZiManager.Tomove([this.target.findGe(this.target.faceTo,1)],this.target.getTN(1),0,0,this.target.getNM(1))
          GeZiManager.Toturnn4([this.target.findGe(this.target.turn4([this.target.faceTo])[0],1)],this.target.getTN(0),0,0,this.target.getNM(0))     
        GeZiManager.Toturnn6([this.target.findGe(this.target.turn6([this.target.faceTo])[0],1)],this.target.getTN(0),0,0,this.target.getNM(0))
        break;
case 0.5:
        GeZiManager.Tomove([this.target.findGe(this.target.faceTo,1)],this.target.getTN(1)+1,0,0,this.target.getNM(1))
          GeZiManager.Toturnn4([this.target.findGe(this.target.turn4([this.target.faceTo])[0],1)],this.target.getTN(0),0,0,this.target.getNM(0))     
        GeZiManager.Toturnn6([this.target.findGe(this.target.turn6([this.target.faceTo])[0],1)],this.target.getTN(0),0,0,this.target.getNM(0))
        break;
    default: 
    this.target.shose.getWY()
  
          GeZiManager.Toturnn4([this.target.findGe(this.target.turn4([this.target.faceTo])[0],1)],this.target.getTN(0),0,0,this.target.getNM(0))     
        GeZiManager.Toturnn6([this.target.findGe(this.target.turn6([this.target.faceTo])[0],1)],this.target.getTN(0),0,0,this.target.getNM(0))
        break;
}





}

ToZT2(){
if (this.ZT==2) {
       GeZiManager.hf()
    MessageCenter.MakeMessage("UIManager","change",1);
    this.ZT=0
    return
}else{
       GeZiManager.hf()
this.ZT=2

}
for (let g of GeZiManager.YuanGong) {
    g.null()
}

state.ST=99
    MessageCenter.MakeMessage("UIManager","change",99);
this.target.weapon.getAttackF()





}


}


