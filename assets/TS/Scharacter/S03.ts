// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import JNUM from "../UIS/else/JNUmanager";
import SXX from "./SXX";


@ccclass('S03')
export default class  S03 extends SXX  {
  Snumber="S03"
  JX:boolean=false;
  cType: string ="human"
 MZ:number=1;
 MT:number=1
JX1:string[]=["S魔力源流","S魔抗"];
JX2:string[]=["S魔导师","S换法"];
mkl:boolean=false
start(): void {
  //this.node.getChildByName("name").getComponent(cc.Label).string="法师"      
//this.node.getComponent(Character).qin=99;
this.target=this.node.getComponent(Character);

this.target.magic3.push(this)
///this.target.magic2.push(this)
this.target.mk+=1
//this.node.getComponent(Character).qi2.push(this);
//this.node.getComponent(Character).changeE("A503");
}
Magic2(): void {
 if (this.BL[4]>0) {
  GeZiManager.free-=1
 } 
if (this.BL[4]>0) {
if (GeZiManager.DLLM=='fireball') {
  GeZiManager.dm+=1
  this.node.parent.getComponent(JNUM).JNF("天罚",this.target.ZB)  
}
if (GeZiManager.DLLM=="thunder") {
GeZiManager.dm+=1
this.node.parent.getComponent(JNUM).JNF("天罚",this.target.ZB)  
}
}

 /* if (GeZiManager.DLLM=='ice') {
      GeZiManager.dm+=this.target.FU[2]+this.target.FU[4]+this.target.FU[5]
  }
  if ( GeZiManager.DLLM=="earthquake"  ) {
      GeZiManager.dm+=this.target.FU[1]+this.target.FU[4]+this.target.FU[5]
  }
  if (GeZiManager.DLLM=='wind') {
      GeZiManager.dm+=this.target.FU[3]+this.target.FU[4]+this.target.FU[5]
  }*/
}


Qi2(n: number, pn: number,m:SHMessage): void {
 if (this.BL[2]>0) {
  if (m.from==-2) {
    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+") 
   
  }
 }

}




  remove(): void {
      GeZiManager.shanchu(this.node.getComponent(Character).qi2,this)
     // GeZiManager.shanchu(this.node.getComponent(Character).magic2,this)
     // GeZiManager.shanchu(this.node.getComponent(Character).magic1,this)
    
  }
choseS(n:string): void {
  switch (n) {
      case "S魔力源流": GeZiManager.shanchu(this.JX1,"S魔力源流");
      this.target.qi2.push(this)
          
          break;
         
          case "S魔导师":  GeZiManager.shanchu(this.JX2,"S魔导师");
          this.target.magic2.push(this)
          break;
         
          case "S魔抗":  GeZiManager.shanchu(this.JX1,"S魔抗");
          this.target.mk+=1
          break;
          case "S换魔":  GeZiManager.shanchu(this.JX2,"S换魔");
       
          break;
        
  
      default:
          break;
  }
  console.log(n)
}



Magic3(ZB:number): void {


  let huo=0
  let tu=0
  let shui=0
  let feng=0
  
  for (let o of this.target.FU) {
     if (o==10||o==-10) {
        huo+=1
        tu+=1
        shui+=1
        feng+=1
  
     }
     if (o==0||o==0.5) {
        huo+=1
        
  
     }
     if (o==1||o==-1) {
       
        tu+=1
       
  
     }
     if (o==2||o==-2) {
        
        shui+=1
       
  
     }
     if (o==3||o==-3) {
        
        feng+=1
       
  
     }
  }




  let o=  GeZiManager.getF(ZB,tu+1)










MessageCenter.MakeSHMessage("AM",o,huo,this.target.Pturn,"mofa")
MessageCenter.MakeSHMessage("AM",o,feng,this.target.Pturn,"jitu")
MessageCenter.MakeSHMessage("AM",[this.target.ZB],shui,this.target.Pturn,"TN+")
}

QDS(n:number){


this.MT*=-1

  this.node.parent.getComponent(JNUM).JNF("S换魔",this.target.ZB)  
}

changM(){
  if (this.MT==1) {
      return [1,2,3,4,5,6]
  }else return[7,8,9,10,11,12]
}
skill1(){
  GeZiManager.DLLM="S03"


  
  MessageCenter.MakeGMessage("JN",[1],1,GeZiManager.PCP.Pturn,GeZiManager.DLLM)


//this.QDS(1)
}


NWNA(e:string[],n:number){


  let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","HP","HP","qi","qi"],1)    
  let a
    /*
  switch (this.target.NWS) {
    case 1: a=this.mArr1Arr2(e,this.JX1,this.JX1,["TNS","TNS","qi"]);return a
    break
    
    case 2:a=this.mArr1Arr2(this.JX1,this.JX1);
          
          break;
          case 3:a=this.mArr1Arr2(this.JX1,this.JX2,this.JX2)
          
          break;
          case 4:a=this.mArr1Arr2(this.JX2,this.JX2)
          
          break;
        
  case 5:a=this.mArr1Arr2(this.JX1,["FU0","FU1","FU2","FU3"])
  break;
      default:a=[]
          break;
  }   */
 // e[0]=c[0]
  return e
  
  
  
  }

  getTO (n: number):string[] {
      switch(n){
  
  case 1:return ["S魔力源流","S魔抗","qi"]
  
  case 2:return ["S魔导师","S换法",this.JX1[0]]
  
  default: 
      
      let a=this.getRA(["FU0",'FU1','FU2','FU3'],3)
      let k=a[0]
      if ( this.mArr1Arr2(this.JX1,this.JX2).length!=0) {
           k=this.getRA( this.mArr1Arr2(this.JX1,this.JX2),1) 
      }
return[k,a[1],a[2]]

 

 
  

  
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
     
     
     
     
   
   
      if (this.getFUn()>=3){
          this.JX=true
        }else{   this.JX=false}//大魔法师
      
    
    }
}
