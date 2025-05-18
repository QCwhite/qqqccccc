// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Label} from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import Qiang from "../equipment/weapon/Qiang/Qiang";
import state from "../game/time/state";
import turn from "../game/time/turn";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import GMessage from "../Message/GMessage";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import JNUM from "../UIS/else/JNUmanager";
import SXX from "./SXX";
import { message } from '../../../@cocos/creator-types/editor/packages/asset-db/@types/message';
import { walk } from '../../../@cocos/creator-types/editor/packages/engine/@types/editor-extends/missing-reporter/object-walker';

@ccclass('S07')
export default class S07 extends SXX {
  Snumber:string="S07"
  JX:boolean=false;
  cType: string ="human"
 Sge:number[]=[];
target:Character=null;
pt:number=0;
mmba:number=0;
gh:number=0;
mmbk:GMessage[]=[]
blue:Character[]=[]
red:Character[]=[]
JX1: string[]=["S不共代天","S并肩作战"];
JX2: string[]=["S秘密办案","S精确办案"];
JX3: string[]=["S蓝毒兽"];
colo:number=0;



friend:number[]=[]
enmi:number[]=[]



  start(): void {
      this.node.getChildByName("name").getComponent(Label).string="特工"   
      this.target=this.node.getComponent(Character)
     // this.node.getComponent(Character).behurt2.push(this);

      //this.node.getComponent(Character).walk2.push(this);
      //this.node.getComponent(Character).t0.push(this);
     // this.node.getComponent(Character).XD1.push(this);
      //this.node.getComponent(Character).shop3.push(this);

      GeZiManager.P1.XD1.push(this);
      GeZiManager.P2.XD1.push(this);
      GeZiManager.P3.XD1.push(this);
      GeZiManager.P4.XD1.push(this);
      GeZiManager.P5.XD1.push(this);
      GeZiManager.P6.XD1.push(this);

GeZiManager.P1.HPm2.push(this);
GeZiManager.P2.HPm2.push(this);
GeZiManager.P3.HPm2.push(this);
GeZiManager.P4.HPm2.push(this);
GeZiManager.P5.HPm2.push(this);
GeZiManager.P6.HPm2.push(this);

GeZiManager.P1.qi2.push(this);
GeZiManager.P2.qi2.push(this);
GeZiManager.P3.qi2.push(this);
GeZiManager.P4.qi2.push(this);
GeZiManager.P5.qi2.push(this);
GeZiManager.P6.qi2.push(this);
//this.target.kill3.push(this)


      this.pt=this.target.Pturn
      
  this.blue=[GeZiManager.P1,GeZiManager.P3,GeZiManager.P5]
  this.red=[GeZiManager.P2,GeZiManager.P4,GeZiManager.P6]
GeZiManager.shanchuALL(this.blue,this.target)
GeZiManager.shanchuALL(this.red,this.target)
  }

T0(): void {
 /* if(this.colo>0){this.colo-=1;
  if([1,3,5].includes(this.pt)){this.target.teammates=this.red;GeZiManager.shanchu(this.target.teammates,this.target);this.node.color=cc.color(128,0,0)}else{this.target.teammates=this.blue;this.node.color=cc.color(0,0,128);GeZiManager.shanchu(this.target.teammates,this.target)}  
  } else{ if([1,3,5].includes(this.pt)){this.target.teammates=this.blue;GeZiManager.shanchu(this.target.teammates,this.target);this.node.color=cc.color(0,0,128)}else{this.target.teammates=this.red;this.node.color=cc.color(128,0,0);GeZiManager.shanchu(this.target.teammates,this.target)}}


  this.Sge=[];*/


if (this.mmba) {
  //this.mmba=false
  this.target.xdm=true
  for(let a of this.mmbk){

      this.target.ReceiveMessage(a);
     
  }
  this.mmbk=[]
}


}
Behurt2(m: SHMessage, BeHC: Character,HC: realThing): void {

/*
if (k.includes(at)||!this.JX2.includes("S蓝毒兽")) {
if (at.getdis(this.target.ZB)<=3&&!this.JX1.includes("S不共代天")) {
MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
} 

}else{ GeZiManager.ms-=999; }
*/


// }else{GeZiManager.free-=999;}}else{   MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi+")}





if(HC instanceof Character&&this.target.HP>0) {
  
  if(["Blue","Red"].includes(BeHC.color)&&(BeHC.color==HC.color||this.BL[3]>0)&&BeHC.qi>0){
 
// if (HC==this.target||BeHC==this.target) {
  //GeZiManager.dm-=1;

 //}
  
 this.node.parent.getComponent(JNUM).JNF("S并肩作战",this.target.ZB)  

  this.node.parent.getComponent(JNUM).JNF("S并肩作战",HC.ZB)  
  this.node.parent.getComponent(JNUM).JNF("S并肩作战",BeHC.ZB)  




MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")





 }







 if (["Blue","Red"].includes(BeHC.color)&&(BeHC.color!=this.target.color||this.BL[3]>0)) {
MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
//if (HC==this.target) {
//MessageCenter.MakeSHMessage("AM",[BeHC.ZB],1,this.target.Pturn,"walk")
//}   
 
    this.node.parent.getComponent(JNUM).JNF("S不共代天",this.target.ZB)  
  this.node.parent.getComponent(JNUM).JNF("S不共代天",BeHC.ZB)  
  }

  if (["Blue","Red"].includes(BeHC.color)&&BeHC==this.target&&HC.color!=this.target.color) {   this.node.parent.getComponent(JNUM).JNF("S不共代天",this.target.ZB)  
    this.node.parent.getComponent(JNUM).JNF("S不共代天",BeHC.ZB)  ;  //MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"walk")
  }
  
   
 
 
 
 //是队友伤害减一

}
 
}







getDRM(at:realThing){
let k
if (this.target.color=="Red") {
  k=this.blue   
 }else {k=this.red}

 return k.includes(at)
}


/*
Shop3(): void {

if (this.target.weapon instanceof Qiang) {
  this.target.weapon.ptr=8
 
}  
} */

Attack25(at:Character,csh:number): void {

console.log(at.faceIs(this.target.ZB))
console.log()

if(["Blue","Red"].includes(at.color)){


if (at.color==this.target.color&&
[7,8,9].includes(at.PfaceFinal(at.faceTo,[at.faceIs(this.target.ZB)])[0])
) {

GeZiManager.dm+=1


}


if (at.color!=this.target.color&&
[7,4,9,6,1,3].includes(at.PfaceFinal(at.faceTo,[at.faceIs(this.target.ZB)])[0])
) {
  
GeZiManager.dm+=1


}
}



}

Attack3(an: number[]): void {

}





Move2(arg0:number,Pturn:number,time:number): void {
  console.log(this.Sge)
  if(this.pt!=Pturn&&this.Sge.includes(arg0)){
    switch (Pturn) {
      case 1:GeZiManager.P1.kcd=false;
          
          break;
          case 2:GeZiManager.P2.kcd=false;
          
          break;
          case 3:GeZiManager.P3.kcd=false;
          
          break;

          case 4:GeZiManager.P4.kcd=false;
          
          break;
          case 5:GeZiManager.P5.kcd=false;
          
          break;
          case 6:GeZiManager.P6.kcd=false;
          
          break;

    
      default:
          break;
    }
    }
  
}

Walk2(ZB: number): void {
  this.Sge.push(ZB);
  console.log(this.Sge)
 find("Canvas/thingsManager/AnimalManager").getComponent(AnimalManager).makeGE(ZB,0); 


}

skill1(): void {
  //this.colo=3;


  //if([1,3,5].includes(this.pt)){this.target.teammates=this.red;GeZiManager.shanchu(this.target.teammates,this.target);this.node.color=cc.color(128,0,0);this.target.color="red"
  //}else{this.target.teammates=this.blue;this.node.color=cc.color(0,0,128);this.target.color="blue";GeZiManager.shanchu(this.target.teammates,this.target)}  
  GeZiManager.DLLM="S07"



  MessageCenter.MakeGMessage("JN",[1],-111,GeZiManager.PCP.Pturn,GeZiManager.DLLM)
}



skill2(): void {
  GeZiManager.DLLM="S07"



  state.ST=9;
  MessageCenter.MakeMessage("UIManager","change",-1);
  for(let manager of GeZiManager.YuanGong){
let a=new Message("",[65],-1)
      manager.ReceiveMessage(a)    
}
MessageCenter.MakeMessage("AM",turn.turn,"getZB")


for(let manager of GeZiManager.YuanGong){
manager.getFar(4);

}
}


xd1(m:GMessage,n:number): void {
  

  if (m.from!=this.target.Pturn&&m.from==n) {
  



     
    

    
    if(this.friend.includes(n)&&["attack","turn4","turn6","walk","walkL"].includes(m.SHtype)&&this.getc(n).color!=this.target.color){
      console.log(m)  
console.log(this.friend)
console.log(n)
      MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,m.SHtype)

    GeZiManager.shanchu(this.friend,n)
    }
    
    
    
    }
}





remove(): void {
  GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this)
GeZiManager.shanchu(this.node.getComponent(Character).t0,this)
GeZiManager.shanchu(this.node.getComponent(Character).walk2,this)
GeZiManager.shanchu(this.node.getComponent(Character).move2,this)
GeZiManager.shanchu(this.node.getComponent(Character).attack25,this)
}



Kill3(n:number): void {
if(this.BL[3]>0) {
if ([1,2,3,4,5,6].includes(n)) {
  if (this.getDRM(this.getc(n))) {
      this.target.sh++
  }
  
} }
}
Dead2(dead: number): void {
if(this.BL[3]>0) {
if ([1,2,3,4,5,6].includes(dead)) {
  MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP+")
  MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
}
}}

QDS(n: number): void {
 if (n==-111) {
  for(let j of this.target.teammates){
      GeZiManager.shanchu(j.teammates,this.target)
  }



  if (this.target.accessory&&this.target.accessory.TheNumber=="D21") {
    this.D21(this.target)
  }
  
if (this.target.color=="Blue") {
  this.target.color="Red";
  this.node.getComponent(Cspine).tored()
  this.target.teammates=this.red;


}else{this.target.color="Blue";
  this.node.getComponent(Cspine).toBlue()

  this.target.teammates=this.blue;}

for(let j of this.target.teammates){
j.teammates.push(this.target)
}




this.target.move(5,0);
this.target.ST()


this.node.parent.getComponent(JNUM).JNF("S墙头草",this.target.ZB)  
MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN-")
MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")
 } else if(n>0){
//this.target
//    this.mmba=true

//MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-")

GeZiManager.Tcharacter=null
MessageCenter.MakeSHMessage("AM",[n],1,this.target.Pturn,"getOneC")



this.node.parent.getComponent(JNUM).JNF("S并肩做战",this.target.ZB)  
this.node.parent.getComponent(JNUM).JNF("S并肩做战",GeZiManager.Tcharacter.ZB)  
MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-")
MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-")
if (GeZiManager.Tcharacter&&[1,2,3,4,5,6].includes(GeZiManager.Tcharacter.Pturn)) {
this.friend.push(GeZiManager.Tcharacter.Pturn)
this.friend.push(GeZiManager.Tcharacter.Pturn)
console.log(GeZiManager.Tcharacter.Pturn)
}
 
}
 }



choseS(n:string): void {
  switch (n) {
      case "S蓝毒兽":GeZiManager.shanchu(this.JX2,"S蓝毒兽");
   
          
          break;
         
          case "S不共戴天":  GeZiManager.shanchu(this.JX1,"S不共戴天");
          
          break;
          case "S并肩作战":  GeZiManager.shanchu(this.JX1,"S并肩作战");
          
          break;
         

        
  
      default:
          break;
  }
  console.log(n)
}








NWNA(e:string[],n:number){


  let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)    
  let a
  switch (this.target.NWS) {
    case 1: a=this.mArr1Arr2(e,["TNS","TNS"]);return a
    break
    
    case 2:a=this.mArr1Arr2(this.JX1,this.JX2)
          
          break;
          case 3:a=this.mArr1Arr2(this.JX2)
          
          break;
          case 4:a=this.mArr1Arr2(this.JX1)
          
          break;
        
  case 5:a=this.mArr1Arr2(this.JX1)
  break;
      default:a=[]
          break;
  }
  
  return e
  
  
  
  }

  getTO (n: number):string[] {
      switch(n){
  
  case 1:return ["S不共代天","S并肩作战","TNS"]
  
  case 2:
      let a=this.getRA(["FU0",'FU1','FU2','FU3'],1)
  return ["S秘密办案","S精确办案",a[0]]
  
  case 3:
   
    return [this.JX1[0],this.JX2[0],"S蓝毒兽"]
  default: 
  let k="qi"
  let k1=this.mArr1Arr2(this.JX1,this.JX2,this.JX3)
      if ( this.mArr1Arr2(this.JX1,this.JX2,this.JX3).length>0) {
          k= this.mArr1Arr2(this.JX1,this.JX2,this.JX3)[0] 
      }
      let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
      if ( this.mArr1Arr2(this.JX1,this.JX2,this.JX3).length>1) {
         o= this.mArr1Arr2(this.JX1,this.JX2,this.JX3)[1] 
     }
      
  return[k,o,"TNS"]
  
  
  
  
  }
  
  
  }

  getJNF(n: number[]): void {
      function sumArray(numbers: number[]): number {
        return numbers.reduce((sum, current) => sum + current, 0);
    }
     
     
    for (let index = 0; index < n[4]+n[5]; index++) {
      for( let a of n){if (index<4) {
         a++
      }}
    }
     
     
     
    
   
   
      if (sumArray(n)>=4){
          this.JX=true
        }else{        this.JX=false}//蓝毒兽
      
    
    }
   

    D21(n:realThing){

if (n.color=="Blue") {
GeZiManager.blueD21-=1;
GeZiManager.redD21+=1;
}else{ GeZiManager.blueD21+=1;
GeZiManager.redD21-=1;}
      
    }



HPM2(n: number,fo:number,wo:number): void {
 let K
  if (n>0) {
   K="HP+"
  }else{  K="HP-"}


console.log(fo)
console.log(wo)



if (wo==this.target.Pturn&&fo!=-1&&this.getc(wo).color==this.target.color) {
  for(let j of this.friend){

    MessageCenter.MakeSHMessage("AM",[this.getc(j).ZB],1,-1,K)

GeZiManager.shanchu(this.friend,j)
  }
}else{



if(this.friend.includes(wo)&&fo!=-1&&this.getc(wo).color==this.target.color){
  MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,-1,K)
  GeZiManager.shanchu(this.friend,wo)
}


}






}


Qi2(n: number,pn:number,m:SHMessage): void {
 
  let K
  if (n>0) {
  K="Qi+"
  }else{ K= "Qi-"}
  if (pn==this.target.Pturn&&m.from!=-1) {
    for(let j of this.friend){
  if (this.getc(pn)&&this.getc(pn).color==this.target.color) {
    

      MessageCenter.MakeSHMessage("AM",[this.getc(j).ZB],1,-1,K)
      GeZiManager.shanchu(this.friend,j)
    }
    }
  }else{
  
  
  
  if(this.friend.includes(pn)&&m.from!=-1&&this.getc(pn).color==this.target.color){
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,-1,K)
    GeZiManager.shanchu(this.friend,m.from)
  }
  
  
  }


}





}
