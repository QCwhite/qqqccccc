import { _decorator, Component, find } from 'cc';
const {ccclass, property} = _decorator;


import Character from "../../BASE/Character";
import ComponentBase from "../../BASE/ComponentBase";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import TUT from "../TUT";
import nodecol from '../../UIS/else/nodecol';


@ccclass('Turn')
export default class turn extends Component {
        static  DorN:string="day"
   
 static  day: number = 1;//天，每12轮天加一
 
  static round: number = 1;//轮
  
  static  turn: number = 1;//回合，（1到6）到7变1
   
  static Y:Character[]=[];
  
  static Too:ComponentBase[]=[]//每回合过后都会触发的触发集
  static Roo:ComponentBase[]=[]//每轮过后都会触发的触发集
  static Doo:ComponentBase[]=[]//每天过后都会触发的触发集




    
static YuanGong: ComponentBase[]=[];

 

static DAM(){
 /* let c=cc.find("Canvas/thingsManager/Day").getComponent(cc.Animation); let d=c.getClips();
 

  //时间动画      
      
   if(turn.round- (turn.day-1)*12==6){c.play(""+d[1].name);
 }else if(turn.round- (turn.day-1)*12==7){c.play(""+d[2].name);
 }else if(turn.round- (turn.day-1)*12==8){c.play(""+d[3].name);
 }else if(turn.round- (turn.day)*12==1){c.play(""+d[0].name);}
 ///////////////
 
 */
  }


static DON(){
  //判断白天或者黑夜
 if(turn.round- (turn.day-1)*12<7)
 {turn.DorN="day";
 }else if(turn.round- (turn.day-1)*12>=7)
 {turn.DorN="nigth";}
 /////////////////
}





static turnP(){

turn.turn++;
if(turn.turn==7){
  turn.turn=1;
  turn.roundP()


}  



if(turn.Too[0]!=null){
for(let manager of turn.Too){
  manager.turnPass();
}}


/*
for(let m of turn.Y){
if(m.LST<7&&m.LST>0){m.LST-=1;}
if(m.LST==0){m.dead();}
}*/
find("Canvas/DituManager/New Node/nodecol").getComponent(nodecol).moveNext()

}
static roundP(){

    turn.round++;
     if(turn.round%12==1&&turn.round!=1){
      turn.dayP();




          }
    turn.DAM();
    turn.DON();//白天还是晚上
    for(let a of turn.Roo){a.roundPass();}
console.log(turn.Roo)
    //find("Canvas/DituManager/New Node/nodecol/xgcol").getComponent(xgcol).c()
}


//过了一天后触发的方法
static dayP(){

    turn.day++;
  if(turn.Doo!=null) { for(let manager of turn.Doo){
      manager.dayPass();
        }  
 
 
}
GeZiManager.Rhun++
GeZiManager.Bhun++
GeZiManager.getHUN()
MessageCenter.MakeSHMessage("AM",[65],2,-1,"Qi+") 

}
  

}
    

   
