// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find } from 'cc';
const {ccclass, property} = _decorator;

import qizi from "../../node/Dixing/qizi";
import state from "../game/time/state";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import JNUM from "../UIS/else/JNUmanager";
import SXX from "./SXX";
import GMessage from '../Message/GMessage';
import Character from '../BASE/Character';

@ccclass('S10')
export default class S10 extends SXX {
        allplayer:number[]=[];//所有玩家位置
        Snumber:string="S10"
        JX:boolean=false;
        cType: string ="human"
        qz:number=1;
        langmu:number=1
        SH:number=1;
        MWw:number=0
   JX1: string[]=["DS10","BS10"];
   JX2: string[]=["S拓土2","S收税2"];
   JX3: string[]=["S棋王"];
  jingTU:number[]=[]
HSH:boolean=false
p:number[]=[]
T1(turn: number): void {
  this.HSH=false
}
start(): void {
  this.target=this.node.getComponent(Character)
  this.target.XD1.push(this)
}

   skill1(): void {
    state.ST=9;
    GeZiManager.DLLM="S10-1"
    MessageCenter.MakeMessage("UIManager","change",-1);
           
            this.getJT()
   
   
   
   for(let manager of GeZiManager.YuanGong){
  


  
   if (this.jingTU.includes(manager.ZB)) {
    manager.green()
   }
    
  }


  console.log(this.jingTU)
}
getJT(){


  this.jingTU=[]


  for (let c of this.getFar(this.target.qi,this.target.ZB)) {
    this.jingTU.push(c)
    
  }
  for(let j of GeZiManager.AllObstacles){
    if (j instanceof qizi&&j.color==this.target.color) {
      for(let k of this.getNIG(j.ZB)){this.jingTU.push(k)}
    }
  }
  this.jingTU=this.cleanArray(this.jingTU)
    
}


skill2(): void {
    state.ST=9;
    GeZiManager.DLLM="S10-2"
    MessageCenter.MakeMessage("UIManager","change",-1);
    
  this.getJT()
    let a  = this.jingTU
  console.log(a)
  find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
  
  for(let c of GeZiManager.YuanGong){
  
  
  if(a.includes(c.ZB)&&c.ZB!=this.target.ZB){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
  
  }

  
  GeZiManager.GeZi=-2
  
  
  }
QDS(n: number): void {
    
 if (n==-2) {
  

 
 
  this.getJT();
  MessageCenter.MakeSHMessage("AM",this.jingTU,1,null,"getOnes")
  let k=1

for (let j of GeZiManager.Tcharacters) {
  if ([1,2,3,4,5,6].includes(j.Pturn)) {
  
  if (j.qi<k&&j.ZB!=this.target.ZB) {
    MessageCenter.MakeSHMessage("AM",[j.ZB],k,null,"HP-")
   }else { MessageCenter.MakeSHMessage("AM",[j.ZB],k,null,"Qi-");MessageCenter.MakeSHMessage("AM",[this.target.ZB],k,null,"Qi+")}
    
}}
this.SH++;
MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.SH,null,"TN-")
this.HSH=true
GeZiManager.Tcharacters=[] }else{




MessageCenter.MakeSHMessage("AM",[n],1,null,"getOneC");
MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,null,"Qi-");
MessageCenter.MakeSHMessage("AM",[n],2,null,"Qi+");
MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,null,"TN-")
this.p.push(GeZiManager.Tcharacter.Pturn);
this.p.push(GeZiManager.Tcharacter.Pturn);
this.MWw=this.target.walkWay

this.target.walkWay=0;
this.target.MwalkWay=0
this.target.UIC();
this.target.xdm=false


}





}


choseS(n:string): void {
    switch (n) {
            case "S棋王": this.target.walkWay=0;GeZiManager.shanchu(this.JX1,"S棋王");
                         this.target.MwalkWay=0;
                         this.target.walk1.push(this);
            
            break;
           
            case "S拓土2":  GeZiManager.shanchu(this.JX1,"S拓土2");
            
            break;
            case "S收税2":  GeZiManager.shanchu(this.JX1,"S收税2");
            
            break;
           
  
          
    
        default:
            break;
    }
    console.log(n)
  }
  
  
  
  xd1(m:GMessage,n:number): void {
  


 
  
  
     if ([1,2,3,4,5,6].includes(m.from)) {

      if (this.p.length!=0) {
        this.target.xdm=false
       }
      if(this.p.length!=0&&["attack","turn4","turn6","walk","walkL"].includes(m.SHtype)){
        this.target.xdm=false
        

      
    
          switch (m.SHtype) {
            case "attack":   this.target.TN-=GeZiManager.TNC[3]+this.target.TNJJ[3];this.target.ST();  
              
              break;
              case "turn4":      this.target.t--;  this.target.TN-=GeZiManager.TNC[0]+this.target.TNJJ[0];this.target.ST();  
           
              break;
              case "turn6":    this.target.t--;  this.target.TN-=GeZiManager.TNC[0]+this.target.TNJJ[0];this.target.ST();  
              break;
             
              case "walk":   
              console.log(m)
         this.target.TN-=GeZiManager.TNC[1]+this.target.TNJJ[1];this.target.ST();  
              
              break;
              case "walkL":   
              
              console.log(m)
           this.target.TN-=GeZiManager.TNC[1]+this.target.TNJJ[1];this.target.ST();  
              
              break;
            default:
              break;
          
        
        }

        console.log(this.getc(this.p[0]))

          MessageCenter.MakeSHMessage("AM",[this.getc(this.p[0]).ZB],1,-10,m.SHtype)
        GeZiManager.shanchu(this.p,this.p[0])
      if (this.p.length==0) {
        this.target.MwalkWay=this.MWw
       this.target.walkWay=this.MWw
        
      }
      }else{
        console.log(m)

  this.target.xdm=true

          
        
   


      }
      
      
    }
     
      
  }
  
  
  
  
  NWNA(e:string[]){
  
  
    let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)    
    let a
    switch (this.target.NWS) {
      case 1: a=this.mArr1Arr2(e,["TNS","TNS","TNS"]);return a
      break
      
      case 2:a=this.mArr1Arr2(this.JX1)
            
            break;
            case 3:a=this.mArr1Arr2(this.JX1,this.JX1,["DS10"])
            
            break;
            case 4:a=this.mArr1Arr2(this.JX1)
            
            break;
          
    case 5:a=this.mArr1Arr2(this.JX1)
    break;
        default:a=[]
            break;
    }
    
    return this.mArr1Arr2(e,c,a)
    
    
    
    }
Behurt222(k: number, arg1: this, arg2: any): void {
  if (this.BL[2]>0&&k>0&&k%2==0) {
    GeZiManager.ms-=1
    this.node.parent.getComponent(JNUM).JNF("棋王",this.target.ZB);

  }
}
Walk1(): void {

 
 
  function intersection(arr1: number[], arr2: number[]): number[] {
    const map: { [key: number]: boolean } = {};
    const result: number[] = [];
    for (const value of arr1) {
      map[value] = true; // 存储 arr1 的元素
    }
    
    for (const value of arr2) {
      if (map[value]) {
        result.push(value); // 如果 arr2 的元素在 map 中存在，添加到结果
        delete map[value]; // 为了防止重复添加
      }
    }
    return result;
  }
  
  
  
  
  
  if (this.target.PPC()) {
        GeZiManager.qing();
        MessageCenter.MakeMessage("UIManager", "change", -1);
       state.ST=1;
     
      
    }


   let an=this.getNIGno5(this.target.ZB)

    GeZiManager.GeZis = intersection([].concat(an),this.jingTU);


    for (let m of GeZiManager.YuanGong) {


   
if(GeZiManager.BanMove.includes(m.ZB)){
    m.out();}

    }


  
  let c=new Message("",GeZiManager.GeZis,1);
  for(let manager of GeZiManager.YuanGong){
  
  
      manager.red();
  
     manager.ReceiveMessage(c);
  }
    } 
    
    getTO (n: number):string[] {
      switch(n){
  
  case 1:return ["DS10","BS10","qi"]
  
  case 2:
      let a=this.getRA(["FU0",'FU1','FU2','FU3'],1)
  return ["S拓土2","S收税2",a[0]]
  
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
   
   
   
   
    if (sumArray(n)>=2&&(n[0]>=1||turn.round>=12) ){
      this.BL[0]+=1
    }else{  this.BL[0]*=0}//拓土2
  
    if (sumArray(n)>=2&&(n[2]>=1||turn.round>=12)) {
      this.BL[1]+=1
    }else{  this.BL[1]*=0}//收税2
    

  
    
    if (n[1]>=2||(n[1]>=1&&turn.round>=15)) {
      this.BL[2]+=1
    }else{  this.BL[2]*=0}//皇冠
   
    
    if (n[3]>=2) {
      this.BL[3]+=1
      this.target.walkWay=0;
      this.target.MwalkWay=0;
      this.target.walk1.push(this);
    }else{  this.BL[3]*=0




    }//棋王
   

  }

  cleanArray<T extends number>(arr: T[]): T[] {
    const seen = new Set<T>(); // 记录已出现的元素
    const result: T[] = [];    // 存储结果
  
    for (const item of arr) {
      // 跳过值为 65 的元素
      if (item === 65) continue;
  
      // 保留第一次出现的非重复元素
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  
    return result;
  }

}


