// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Prefab, instantiate, find } from 'cc';
    const {ccclass, property} = _decorator;

    import CHF from "../BASE/CHF";
import Character from "../BASE/Character";
import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import { gif1 } from "../BASE/spineANDgif/gif";
    import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
    import MessageCenter from "../Message/MessageCenter";
import JNUM from "../UIS/else/JNUmanager";
import NWshopM from "../UIS/shop/NWshopM";
import weapon from "../equipment/weapon/weapon";
import state from "../game/time/state";
import turn from "../game/time/turn";
    import SXX from "./SXX";
import { SubtitleManager } from '../UIS/baom';


    @ccclass
    export default class S08 extends SXX {

    Snumber: string="S08";
    fenShen1:any=null;
    fenShen2:any=null;
    target:Character=null
    YXJ:number=0;
    FCn:number=-1;
  
JX1: string[]=["S隐匿","S移形换影"];
JX2: string[]=["S移形换影2","S分身术2"];
JX3: string[]=["S幻灭"];
    @property(Boolean)
    king:boolean=true
k:number=0;
    FSM:S08[]=[]
    @property(Prefab)
    fsc:Prefab=null
   
   start(): void {
   this.node.getComponent(Character).walk25.push(this)
    this.node.getComponent(Character).turn3.push(this)
    this.node.getComponent(Character).dead2.push(this)
   
   if (this.king) {
    this.node.getComponent(Character).attack2.push(this)
    this.node.getComponent(Character).shop2.push(this)
}
 

 this.target=this.node.getComponent(Character)
    this.node.getComponent(Character).GX=function(face){
if (this.CHF.length!=0) {
return false;
}else{ this.CMget();

if (this.CanTmove.includes(face)) {

   return true;
} else return false;

}

       }
   
     
       
       this.YXJ=this.node.getComponent(Character).getYXJ(this.node.getComponent(Character).faceTo)

   }
   
   
   
  Turn3(): void {
 
} 
  
    

Walk25(ZB: number): void {
this.target.ST()
GeZiManager.Tcharacter=null

MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"getOneC")
let a=GeZiManager.Tcharacter
//console.log(a.node.getComponent(S08))
GeZiManager.Tcharacter=null

if (a!=null&&a.node.getComponent(S08)!=null) {
    setTimeout(() => {
     let c=this.node.getComponent(Character)
     if (c) {
        c.move(c.faceTo, 1); c.moveto(0.8, c.ZB)    
     }
      
      },130)  
    }

}


Dead2(): void {
console.log(this.king)

if(this.king){for(let a of this.node.getComponent(Character).CHF){if(a.node!=null){a.node.getComponent(Character).dead();}}
if(this.king){for(let a of this.node.getComponent(Character).CHF){if(a.node!=null){a.node.getComponent(Character).dead();}}}
console.log(this.node.getComponent(Character).CHF)
}

else{
    let k=this.FCn 
/*      for(let a of this.FSM){if(a.king){
        
for (let index = 0; index < a.FSM.length; index++) {
if( a.FSM[index].FCn==index){a.FSM[index]=null;}

}
    }}*/

GeZiManager.shanchu(this.node.getComponent(CHF).FC.getComponent(S08).FSM,this)
MessageCenter.MakeSHMessage("AM", [this.node.getComponent(CHF).FC.ZB], 1, this.node.getComponent(Character).Pturn, "Qi+")
//GeZiManager.shanchu(this,this.node.getComponent(CHF).FC.getComponent(S08).FSM)
setTimeout(() => {

this.destroy();
}, 200);

}
}
Attack2(an: number[]): void {
console.log()

for(let a of this.FSM){
 
    if (a!=null&&a.node.getComponent(Character).HP>0) {
       
   // if (a.node.getComponent(CHF).weapon.node) {
        a.node.getComponent(Cspine).attackAIN(  a.node.getComponent(CHF).weapon.Wtype)
        console.log( a.node.getComponent(Character).weapon)
        a.node.getComponent(CHF).weapon.attack()
    
   // }
   
 }
    
}
}
Shop2(A: string, s: boolean): void {
for(let a of this.FSM){
    if (a!=null&&a.node.getComponent(Character).LST!=-1) {
        a.node.getComponent(Character).changeE(A)
        console.log(A)
    }
    }
}



HPM3(): void {

if (this.BL[3]>0) {
if(this.king){  for(let a of this.FSM){
    a.target.MaxHP=this.target.MaxHP
a.target.HP=this.target.HP
this.node.parent.getComponent(JNUM).JNF("S幻灭",a.target.ZB)  
MessageCenter.MakeSHMessage("AM",[a.target.ZB], 0, this.node.getComponent(Character).Pturn, "MaxHP+")

}}
} 


}

    skill2(): void {
        state.ST=9;
        GeZiManager.DLLM="S08"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
    let a=new Message("",[65],-1)
            manager.ReceiveMessage(a)    
    }
    MessageCenter.MakeMessage("AM",turn.turn,"getZB")
    
    for(let manager of GeZiManager.YuanGong){
    manager.getFar(this.node.getComponent(Character).qi+1);
    
    }
    }

skill1(): void {

    GeZiManager.DLLM="S08"
  
  GeZiManager.GeZi=-1;
    
    MessageCenter.MakeGMessage("JN",[1],-1,GeZiManager.PCP.Pturn,GeZiManager.DLLM)
  console.log( GeZiManager.GeZi)
  
  //this.QDS(1)
  }



   FSS()
    {
      
        let k=0

this.node.parent.getComponent(JNUM).JNF("S分身术",this.target.ZB,600) 


       setTimeout(() => {
        this.node.getComponent(Cspine).currentSpine.animation="Skill1"
       }, 210); 
    
        //消耗
        let an:number[]=[];
        an.push(this.node.getComponent(Character).ZB);


     MessageCenter.MakeSHMessage("AM", an, 2, this.node.getComponent(Character).Pturn, "Qi-")
     MessageCenter.MakeSHMessage("AM", an, 1, this.node.getComponent(Character).Pturn, "HP-")
     this.node.getComponent(Cspine).currentSpine.animation="Skill1"
    
        MessageCenter.MakeSHMessage("AM", an, 2, this.node.getComponent(Character).Pturn, "TN-")
        //获取地图上所有事物位置
  setTimeout(() => {
    let sw:any=GeZiManager.BanMove
    let k:number[]=[]
    for(let a of this.node.getComponent(Character).CHF){k.push(a.ZB)}
    //记录分身坐标
    let x:number;
    //记录朝向情况
    let flag=0;//2,8上下
    //4,6左右
    if(this.node.getComponent(Character).faceTo==4||this.node.getComponent(Character).faceTo==6) flag=1;

    //一号分身
    this.fenShen1=instantiate(this.fsc)
    this.fenShen1.setParent(find("Canvas/DituManager/New Node/AnimalManager"))
    this.fenShen1.active=false
    this.FCn++;
    this.fenShen1.getComponent(CHF).Pturn=parseInt(this.node.getComponent(Character).Pturn+""+this.FCn,10)
    this.fenShen1.getComponent(CHF).FC=this.node.getComponent(Character)
   
    this.node.getComponent(Character).CHF.push(this.fenShen1.getComponent(CHF))
    console.log(this.node.getComponent(Character).CHF)
    this.fenShen1.getComponent(CHF).MaxHP=2
    this.fenShen1.getComponent(CHF).HP=2
    this.fenShen1.getComponent(CHF).color=this.fenShen1.getComponent(CHF).FC.color

    console.log(parseInt(this.node.getComponent(Character).Pturn+""+this.FCn,10))
    // this.fenShen1.getComponent(CHF).SHC=["turn4","turn6","att
console.log(this.fenShen1.getComponent(CHF).Pturn)
   // this.fenShen1.getComponent(CHF).SHC=["turn4","turn6","attack"]
    this.node.getComponent(S08).FSM.push(this.fenShen1.getComponent(S08)) 
    if(flag) 
    {
        x=this.node.getComponent(Character).ZB+8
        let f:boolean=true
        for(let y of sw) if(y==x){if (k.includes(x)) {
            x+=8
            if (sw.includes(x)) {
                f=false
            }
        }else f=false}//判断是否有物品在分身的位置
        //非越界和物品占位生成分身
        this.fenShen1.getComponent(Character).changeE(this.node.getComponent(Character).weapon.TheNumber)
        if(x<=64&&f) this.fenShen1.getComponent(CHF).TP(x)
    }
    else 
    {
        x=this.node.getComponent(Character).ZB+1
        let f:boolean=true
        for(let y of sw) if(y==x){if (k.includes(x)) {
            x+=1
            if (sw.includes(x)) {
                f=false
            }
        }else f=false}
        if((x<=8||x<=16||x<=24||x<=32||x<=40||x<=48||x<=56||x<=64)&&f){
        this.fenShen1.getComponent(CHF).TP(x);
      this.fenShen1.getComponent(Character).changeE(this.node.getComponent(Character).weapon.TheNumber)
       // this.fenShen1.getComponent(CHF).changeE("A580"); 
        }else{ this.fenShen1.getComponent(CHF).dead()}
  
    }


    //二号分身
    this.fenShen2=instantiate(this.fsc)
    this.fenShen2.setParent(find("Canvas/DituManager/New Node/AnimalManager"))
    this.fenShen2.active=false
    this.FCn++;
    this.fenShen2.getComponent(CHF).Pturn=parseInt(this.node.getComponent(Character).Pturn+""+this.FCn,10)
    this.fenShen2.getComponent(CHF).FC=this.node.getComponent(Character)
 
    this.node.getComponent(Character).CHF.push(this.fenShen2.getComponent(CHF))
    console.log(this.node.getComponent(Character).CHF)
    this.fenShen2.getComponent(CHF).MaxHP=2
    this.fenShen2.getComponent(CHF).HP=2
    this.fenShen2.getComponent(CHF).color=this.fenShen2.getComponent(CHF).FC.color

console.log(this.fenShen2.getComponent(CHF).weapon.TheNumber)
   // this.fenShen1.getComponent(CHF).SHC=["turn4","turn6","attack"]
    this.node.getComponent(S08).FSM.push(this.fenShen2.getComponent(S08)) 
    if(flag) 
    {
        x=this.node.getComponent(Character).ZB-8
        let f:boolean=true
        for(let y of sw) if(y==x){if (k.includes(x)) {
            x-=8
            if (sw.includes(x)) {
                f=false
            }
        }else f=false}
        if(x>=0&&f) {this.fenShen2.getComponent(CHF).TP(x); this.fenShen2.getComponent(Character).changeE(this.node.getComponent(Character).weapon.TheNumber)}
    }
    else 
    {
        x=this.node.getComponent(Character).ZB-1
        let f:boolean=true
        for(let y of sw) if(y==x){if (k.includes(x)) {
            x-=1
            if (sw.includes(x)) {
                f=false
            }
        }else f=false}
        if((x>=1||x>=9||x>=17||x>=25||x>=33||x>=41||x>=49||x>=57)&&f){
          this.fenShen2.getComponent(CHF).TP(x);
        this.fenShen2.getComponent(Character).changeE(this.node.getComponent(Character).weapon.TheNumber)
        console.log( this.fenShen2.getComponent(CHF).weapon)
        }else{ this.fenShen2.getComponent(CHF).dead()}
    }
    //this.fenShen1.getComponent(CHF).changeE(this.node.getComponent(Character).weapon.TheNumber)

/* 
setTimeout(() => {
// this.node.getComponent(Character).changeE("A580")
console.log(this.node.getComponent(Character).weapon.TheNumber)
this.Shop2(this.node.getComponent(Character).weapon.TheNumber,true)
}, 200);*/
setTimeout(()=>{  for(let m of GeZiManager.PCP.shop2){m.Shop2(GeZiManager.PCP.weapon.TheNumber,true);}},200)  
console.log(GeZiManager.PCP.weapon.TheNumber)
}, 700);
  console.log(this.node.getComponent(Character).CHF)

  if (this.BL[3]>0) {
    this.HPM3()
  }
  
}






    QDS(wz:number){

  console.log(wz)
  
        if (wz==-1&&this.king) {
    this.FSS();
   GeZiManager.PCP=this.node.getComponent(Character)
   }
   
   
   
 else  
   {let an:any[]=[];

    this.node.getComponent(Cspine).currentSpine.animation="Skill2-1"

    setTimeout(() => {
        for(let a of this.node.getComponent(Character).CHF){if (a.ZB==wz) {
          a.node.getComponent(Cspine).currentSpine.animation="Skill2"
        let k=0
let o=this.target.getdis(wz)
      
          setTimeout(() => {
      if (!this.JX) {
        GeZiManager.shanchu(this.FSM,a)
this.node.parent.getComponent(JNUM).JNF("S移形换影",a.ZB,600)
        a.weapon.remove();
          a.dead();
      } else{a.ZB=a.FC.ZB;setTimeout(()=>{a.To(a.ZB,0)},500)
      this.node.parent.getComponent(JNUM).JNF("S移形换影",this.target.ZB,600)  
      this.node.parent.getComponent(JNUM).JNF("S移形换影",a.ZB,600)  
    }   
         
            setTimeout(() => {
                this.node.getComponent(Character).To(wz,0);
               MessageCenter.MakeSHMessage("AM", [wz],o, this.node.getComponent(Character).Pturn, "Qi-")
                MessageCenter.MakeSHMessage("AM", [wz], 1, this.node.getComponent(Character).Pturn, "TN-")
              //  MessageCenter.MakeSHMessage("AM", [wz], 1, this.node.getComponent(Character).Pturn, "HP+")
            },450);
         
        
          
          },1300);  
           }}
            
    },200);
        //an.push(this.node.getComponent(Character).ZB);
      

    }
}




choseS(n:string): void {
    switch (n) {
        case "S分身术2":GeZiManager.shanchuALL(this.JX2,"S分身术2");
            
            break;
           
            case "S移形换影2":  GeZiManager.shanchuALL(this.JX2,"S移形换影2");
            
            break;
            case "S移形换影":  GeZiManager.shanchuALL(this.JX1,"S移形换影");
            
            break;
            case "S隐匿":  GeZiManager.shanchuALL(this.JX1,"S隐匿");
            
            break;
            case "S幻灭":this.target.HPm3.push(this);GeZiManager.shanchu(this.JX3,"S幻灭");         MessageCenter.MakeSHMessage("AM",[this.target.ZB], 0, this.node.getComponent(Character).Pturn, "HP-")
              
            
  
            break;
    
        default:
            break;
    }
    console.log(n)
  }
  
  
  
  
  
  
  
  
  NWNA(e:any[],n:number){
  

let k,k1
let c =e.concat()
    let a


if(this.target.color=="Blue"){a=NWshopM.getBNWN()}else{a=NWshopM.getRNWN()}
console.log(a)
    switch (a) {
        
        case 1:k=this.getRA(["A582","A581"],1) ;c[0]=k;  
        console.log(c)

        return c
        break
        
        case 2:c[0]=["A581"];  c[1]=["A582"];  
        console.log(c)
        return c
            
            break;


            case 3:  k=this.getRA(["A582P1","A581P2","A581P1","A582P2"],1) ;c[0]=k;   return c
            
            break;
            case 4:k=this.getRA(["A581P1","A581P2","A582P2","A582P1"],2) ;c[0]=[k[0]]; c[1]=[k[1]]; 
            console.log(c)
            return c
            
            break;
           
          
    
        default:  k=this.getRA(["A582P1","A581P2","A581P1","A582P2"],2);  c[0]=[k[0]]; c[1]=[k[1]]; return c
            break;
    }
    
    console.log(e)
    
    
    
    }
  
    getTO (n: number):string[] {
        switch(n){
    
    case 1:return ["S隐匿","S移形换影","TNS"]
    
    case 2:
        let j="S移形换影2"
      if(this.JX1.includes("S移形换影")){j="S移形换影"}
    return [j,"S分身术2","qi"]
    
    case 3:
       let y= this.mArr1Arr2(this.JX1,this.JX2)
      return [y[0],y[1],"S幻灭"]
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
      
       
       
       
    
        
        if (this.getFUn()>=3) {
          this.JX=true
           SubtitleManager.show(
                          {
                              bgSprite:this.target.color,
                              image1:this.Toux,
                              text1: "这个家伙觉醒啦",
                              image2: this.skiil3,
                              text2: "",
                              duration: 5
                          }
                         )
        }else{ this.JX=false}//幻灭
       
        
        
    
      }
      

}