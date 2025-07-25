// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import Character from "./Character";
import ComponentBase from "./ComponentBase";
import { find } from 'cc';
import weatherM from '../../pictures/map/weather/weatherM';
import S03 from '../Scharacter/S03';
import { AudioManager } from './music';
import { Camera } from 'cc';
import AnimalManager from '../Manager/AnimalManager';
import { SHMessage } from '../Message/SHMessage';
import MUI from '../UIS/MMUI/MUI';



@ccclass('YSgod')
export default class YSgod extends ComponentBase {
    target:Character=null;
    TheNumber:string = 'D10';
//   // Cname:string="樊圈"
FW3:number[]=[0,0,0,0]
FW4:number[]=[0,0,0,0]
    MCD: any;
KILL:boolean=false
start () {
    this.target=this.node.getComponent(Character);
  //  this.target.move3.push(this)
  //  this.target.behurt222.push(this)
this.target.attack3.push(this)
this.target.qi3.push(this)
this.target.behurt3.push(this)
}
Behurt3(n: number, killp: any, k: number, BK: number): void {
    if (this.FW3[2]>0) {

    if (this.target.HP==1) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,-1,"HP+")   
    }
}
}

remove(){
GeZiManager.shanchu( this.target.behurt222,this) 
}
/*  Move3(ZB: number, pturn: number): void {
if (this.target.PPC()) {
console.log(this.target.getNIGno5(this.target.ZB))
MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),1,this.target.Pturn,"mofa") 
if (this.target.qi>0) {
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
   } else{    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP-")}
}

}*/
T1(turn1: number): void {
if (this.FW3[2]>0&&turn.round%2==0) { 

    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"HP+")
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"move")
}

if (this.FW3[0]>0) { 

    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS+")
  
}


}

Kill(): void {
  if (!this.KILL) { 

let c=[]
if (this.target.Pturn%2==1) {
   c=[GeZiManager.P2,GeZiManager.P4,GeZiManager.P6] 
}else{
    c=[GeZiManager.P1,GeZiManager.P3,GeZiManager.P5]    
}

for (let g of c) {
if (g.LST!=-1) {
   g.dead()
   this.KILL=true
   return
}
    
}

  }
  
  



}




Attack3(an:number[]) {
//   console.log(an[0])
  // console.log(this.target.faceIs(an[0]))


 

if (this.FW3[3]>0) { 
   GeZiManager.Tcharacter=null
      MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOneC")
   
  
      // MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
       MessageCenter.MakeSHMessage("AM",an,[this.target.turn8([this.target.faceIs(an[0])])[0],0.3],this.target.Pturn,"move")
    
      // MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
      }

if (this.FW4[3]>0) { 
this.Dwind(this.target.faceTo)
    
      // MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
      }


if (this.FW4[1]>0) { 
this.Dearthquake()
    
      // MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
      }

}
Qi3(): void {
   if (this.FW4[2]>0) { 
if (this.target.HP!=this.target.MaxHP) {
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,-1,"HP+")
}

      // MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
      }    
}

 
    Dwind(n:number){
        console.log(n);
       GeZiManager.DLLM='wind'
        find("Canvas/weatherManager").getComponent(weatherM).Wwind(n)
       
    setTimeout(() => {
        
        AudioManager.instance.ZJP("magic",4)
    
    

      //  if(GeZiManager.PCP.FU[3]>0){GeZiManager.free-=1}

     for (let index = 0; index < 1+GeZiManager.dm; index++) {
       
        
       for(let m of GeZiManager.WindSon){m.WDT();}  
       switch (n) {
           
           case 2:for(let i=1;i<=8;i++){
               GeZiManager.getWD(2);
               MessageCenter.MakeSHMessage("AM",GeZiManager.onY(i),2,GeZiManager.PCP.Pturn,"wind");
       console.log(GeZiManager.rock+","+GeZiManager.WD)
       
       
           }
               
               break;
             
       case 4:for(let i=1;i<=8;i++){
       GeZiManager.getWD(4);
                       MessageCenter.MakeSHMessage("AM",GeZiManager.onX(i),4,GeZiManager.PCP.Pturn,"wind");
               
              
          
                   }
                       
                       break;
       case 6:for(let i=8;i>=1;i--){
           GeZiManager.getWD(6);
                           MessageCenter.MakeSHMessage("AM",GeZiManager.onX(i),6,GeZiManager.PCP.Pturn,"wind");
                   
                   
        
                       }
                           
                           break;
        case 8:for(let i=8;i>=1;i--){
           GeZiManager.getWD(8);
                               MessageCenter.MakeSHMessage("AM",GeZiManager.onY(i),8,GeZiManager.PCP.Pturn,"wind");
                       
                           }
                               
                               break;
           default:
               break;
       }
       
       
    
       
       
       GeZiManager.Ban=[];
    
      for (let a of GeZiManager.GR) {
      a.wind()
        
      }
       
    } 
       
    
    }, 600);
   AudioManager.instance.ZJP("magic",6)
 
       }
 Dearthquake(){ 
            GeZiManager.DLLM='earthquake'
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
        let g=find("Canvas/Main Camera").getComponent(Camera)
        let l=find("Canvas/DituManager/New Node/AnimalManager/QP")
          find("Canvas/weatherManager").getComponent(weatherM).shakeCameraAndNode(g,l,13,3000)
          let a=find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).YuanGong;
        
          setTimeout(() => {
           
            for(let manager of a) {
            
            if(manager.DiXing=="grass"){manager.ReceiveMessage(b)}
            
               }
          }, 1500);
 let o=[]
          for (let g of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]) {
            if(g.color!=this.target.color){
                    o.push(  g.ZB)
            }
            
          }
          let b=new SHMessage("AM",o,[1+GeZiManager.dm,"DZ"],turn.turn,"mofaT")
        
          find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).DZLM=false    
        
  
 
       AudioManager.instance.ZJP("magic",5)
      
    }

}
