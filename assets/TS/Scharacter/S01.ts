import { _decorator, Color, Label, Sprite } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../Manager/GeZiManager";
import { SHMessage } from "../Message/SHMessage";
import weapon from "../equipment/weapon/weapon";
import SXX from "./SXX";
import Character from "../BASE/Character";
import shopM from "../UIS/shop/ShopM";
import MessageCenter from "../Message/MessageCenter";
import Cspine from "../BASE/spineANDgif/Cspine";
import Shops from "../UIS/shop/shops";
import state from "../game/time/state";
import CHF from "../BASE/CHF";
import player from "../game/player";
import JNUM from "../UIS/else/JNUmanager";
import turn from "../game/time/turn";
import { SubtitleManager } from '../UIS/baom';

@ccclass('S01')
export default class S01 extends SXX {
   JX1: string[]=["S01-冲锋","S01-冲锋P","S01-继承","S01-继承P","S01-圣骑","S01-陷阵之志"];
  
BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
    Snumber="S01"
    JX:boolean=false;
    cType: string ="human"
   Pturn:number=0;
  target:Character=null
   PZB:number=0;
   wn:number=1;
   weapon1:string = null;
   weapon2:string = null;
   XZZZ:boolean=false
   sq:boolean=false
 Move3(ZB: number){
        if (this.BL[4]!=0) {
//   S陷阵之志



        let c=0
        for (let index = 1; index < 10; index++) {
        GeZiManager.Tcharacter=null
        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).findGe(index,1)],1,this.node.getComponent(Character).Pturn,"getOne")
        if (  GeZiManager.Tcharacter instanceof Character&&GeZiManager.Tcharacter instanceof CHF==false) {
        c++
        }
        }
        if (c>3-Math.max(this.node.getComponent(Character).FU[0],this.node.getComponent(Character).FU[1],this.node.getComponent(Character).FU[2],this.node.getComponent(Character).FU[3])) {
        if (this.XZZZ) {

        }else{ this.node.getComponent(Character).TNJJ[2]-=1;
        this.node.getComponent(Character).TNJJ[3]-=1;
        this.XZZZ=true
        this.node.getChildByName("XZZZ").active=true
        this.node.parent.getComponent(JNUM).JNF("S陷阵之志",this.target.ZB)
        }


        }else{if (this.XZZZ) {
        this.node.getComponent(Character).TNJJ[2]+=1;
        this.node.getComponent(Character).TNJJ[3]+=1;

        this.XZZZ=false
        this.node.getChildByName("XZZZ").active=false
        }
        }
        }

}
  
 T1(turn: number): void {
        if (this.BL[4]!=0) {
//   S陷阵之志
        let c=0
        for (let index = 1; index < 10; index++) {
        GeZiManager.Tcharacter=null
        MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).findGe(index,1)],1,this.node.getComponent(Character).Pturn,"getOne")
        if (  GeZiManager.Tcharacter instanceof Character&&GeZiManager.Tcharacter instanceof CHF==false) {
        c++
        }
        }


        if (c>3) {
        if (this.XZZZ) {

        }else{ this.node.getComponent(Character).TNJJ[2]-=1;
        this.node.getComponent(Character).TNJJ[3]-=1;
        this.XZZZ=true
        this.node.getChildByName("XZZZ").active=true
        this.node.parent.getComponent(JNUM).JNF("S陷阵之志",this.target.ZB)
        }


        }else{if (this.XZZZ) {
        this.node.getComponent(Character).TNJJ[2]+=1;
        this.node.getComponent(Character).TNJJ[3]+=1;
        this.XZZZ=false
        this.node.getChildByName("XZZZ").active=false
        }




        }
        }




        if (this.JX) {
//圣骑

// let a 
// if (this.target.color=="Blue") {
//   a=GeZiManager.P1.LST+GeZiManager.P3.LST+GeZiManager.P5.LST
// }else {  a=GeZiManager.P2.LST+GeZiManager.P4.LST+GeZiManager.P6.LST}
// if (a==8) {
      
        this.node.parent.getComponent(JNUM).JNF("S圣骑",this.target.ZB)
// } 
 MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")

        }








 }
   
   
   
   
    start () {
        this.node.getChildByName("name").getComponent(Label).string="骑士"
        this.target=this.node.getComponent(Character)

        this.node.getComponent(Character).shop2.push(this);
        this.node.getComponent(Character).walk3.push(this);
        this.Pturn= this.node.getComponent(Character).Pturn;

        for(let c of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]){

      //  c.dead2.push(this)


        }
        this.node.getComponent(Character).t1.push(this);

}
QDS(n:number){if(this.weapon2!=null&&this.weapon1!=null){

        switch (this.wn) {

        case 2:this.wn=1;  this.node.getChildByName("WQ1").getComponent(Sprite).color=new Color(255,255,255);this.node.getChildByName("WQ2").getComponent(Sprite).color=new Color(155,155,155);
        this.node.getComponent(Character).changeE(this.weapon1)
        break;

        default:this.wn=2;  this.node.getChildByName("WQ2").getComponent(Sprite).color=new Color(255,255,255);this.node.getChildByName("WQ1").getComponent(Sprite).color=new Color(155,155,155);
        this.node.getComponent(Character).changeE(this.weapon2)
        
        break;
        }
        this.node.parent.getComponent(JNUM).JNF("S全能骑士",this.target.ZB)
        }

}
skill1(){
        GeZiManager.DLLM="S01"



        MessageCenter.MakeGMessage("JN",[1],1,GeZiManager.PCP.Pturn,GeZiManager.DLLM)


////this.QDS(1)
}
Shop2(A:string,b:boolean){

        console.log(A)

        if (A&&A[0]=="A") {
        if (b) {
        switch (this.wn) {
        case 1:this.weapon1=A;  this.node.getChildByName("WQ1").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).find(10,A,"",0)
        break;

        default:this.weapon2=A;  this.node.getChildByName("WQ2").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).find(10,A,"",0)
        break;
        }


        return
        }

        if(this.weapon1==null){this.weapon1=A;
        this.node.getChildByName("WQ1").active=true
        this.node.getChildByName("WQ1").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)

        }else if(this.weapon2==null){this.weapon2=A;
        this.wn=2
        this.node.getChildByName("WQ2").active=true;this.node.getChildByName("WQ1").getComponent(Sprite).color=new Color(155,155,155);
        this.node.getChildByName("WQ2").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)}else{

        switch (this.wn) {
        case 1:this.weapon1=A;
        this.node.getChildByName("WQ1").getComponent(Sprite).color=new Color(255,255,255);this.node.getChildByName("WQ2").getComponent(Sprite).color=new Color(155,155,155);
        this.node.getChildByName("WQ1").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
        break;

        default:this.weapon2=A;
        this.node.getChildByName("WQ2").getComponent(Sprite).color=new Color(255,255,255);this.node.getChildByName("WQ1").getComponent(Sprite).color=new Color(155,155,155);
        this.node.getChildByName("WQ2").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
        break;
        }


        }
        }






}
remove(){ 
        this.PZB=0;
        GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this)
        GeZiManager.shanchu(this.node.getComponent(Character).t1,this)
        GeZiManager.shanchu(this.node.getComponent(Character).shop2,this)
        GeZiManager.shanchu(this.node.getComponent(Character).move3,this)
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


if (this.getFUn()>=3) {
        this.JX=true
        SubtitleManager.show(
                        {
                            bgSprite:this.target.color,
                            image1:this.Toux,
                            text1: "这个家伙觉醒啦",
                            image2: this.skiil4,
                            text2: "",
                            duration: 5
                        }
                       )
        this.node.getComponent(Cspine).changeXT2("shengqishi")
}else{   this.JX=false

        this.node.getComponent(Cspine).changeXT2("default")
}
}
 
Dead2(dead:number): void {
      
        for (let index = 1; index <= 6; index++) {
        if (this.getc(index).color==this.target.color&&index!=this.target.Pturn&&this.getc(index).LST>0) {
        MessageCenter.MakeSHMessage("AM",[this.getc(index).ZB],this.target.qi,this.target.Pturn,"Qi+")
        MessageCenter.MakeSHMessage("AM",[this.getc(index).ZB],this.target.TNS,this.target.Pturn,"TNS+")
        this.node.parent.getComponent(JNUM).JNF("S继承2",this.target.ZB)
        return;
        }

        }
        


}
Walk3(ZB: number): void {
    
        let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
        for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
        this.node.parent.getComponent(JNUM).JNF("S冲锋2",this.target.ZB)

        }

}}
NWNA(e:string[],n:number){


        let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],2)
 /* let a
        switch (this.target.NWS) {
        case 1: a=this.mArr1Arr2(this.JX1,this.JX1,e,["TNS"]);return a
        break

        case 2:a=this.JX1

        break;
        case 3:a=this.mArr1Arr2(this.JX1,this.JX1)

        break;
        case 4:a=this.JX2

        break;


        default:a=this.JX2
        break;
        }
//   */
        return e



  }
  getTO (n: number):string[] {
        switch(n){

        case 1:return ["S冲锋","S继承","TNS"]

        case 2:return ["S陷阵之志",this.JX1[0],"HP"]

        case 3:
        let k=this.getRA(["FU0",'FU1','FU2','FU3'],1)
        let j="HP"
        if (this.mArr1Arr2(this.JX1,this.JX2).length!=0) {
        j=this.mArr1Arr2(this.JX1,this.JX2)[0]
        }
        return ["S圣骑",k[0],j]
        default:
        let a=this.getRA(["FU0",'FU1','FU2','FU3'],3)

        return [k[1],k[0],k[2]]

        }


}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import GeZiManager from "../Manager/GeZiManager";
// import { SHMessage } from "../Message/SHMessage";
// 
// import weapon from "../equipment/weapon/weapon";
// 
// import SXX from "./SXX";
// 
// import Character from "../BASE/Character";
// import shopM from "../UIS/shop/ShopM";
// import MessageCenter from "../Message/MessageCenter";
// import Cspine from "../BASE/spineANDgif/Cspine";
// import Shops from "../UIS/shop/shops";
// import state from "../game/time/state";
// import CHF from "../BASE/CHF";
// import player from "../game/player";
// import JNUM from "../UIS/else/JNUmanager";
// import turn from "../game/time/turn";
// 
// 
// 
// 
// 
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class S01 extends SXX {
// 
//    JX1: string[]=["S01-冲锋","S01-冲锋P","S01-继承","S01-继承P","S01-圣骑","S01-陷阵之志"];
//   
// BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
// 
// 
//     Snumber="S01"
//     JX:boolean=false;
//     cType: string ="human"
//    Pturn:number=0;
//   target:Character=null
//    PZB:number=0;
//    wn:number=1;
//    weapon1:string = null;
//    weapon2:string = null;
//    XZZZ:boolean=false
//    sq:boolean=false
//  Move3(ZB: number){
//   if (this.BL[4]!=0) {
//    S陷阵之志
//  
//   
//   
//   let c=0
//  for (let index = 1; index < 10; index++) {
//   GeZiManager.Tcharacter=null
//   MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).findGe(index,1)],1,this.node.getComponent(Character).Pturn,"getOne")
//   if (  GeZiManager.Tcharacter instanceof Character&&GeZiManager.Tcharacter instanceof CHF==false) {
//     c++
//   }
//  }
//  if (c>3-Math.max(this.node.getComponent(Character).FU[0],this.node.getComponent(Character).FU[1],this.node.getComponent(Character).FU[2],this.node.getComponent(Character).FU[3])) {
//   if (this.XZZZ) {
//    
//   }else{ this.node.getComponent(Character).TNJJ[2]-=1;
//     this.node.getComponent(Character).TNJJ[3]-=1;
//     this.XZZZ=true
//     this.node.getChildByName("XZZZ").active=true
//     this.node.parent.getComponent(JNUM).JNF("S陷阵之志",this.target.ZB)  
//   }
// 
// 
//  }else{if (this.XZZZ) {
//   this.node.getComponent(Character).TNJJ[2]+=1;
//   this.node.getComponent(Character).TNJJ[3]+=1;
//   
//   this.XZZZ=false
//   this.node.getChildByName("XZZZ").active=false
//  }
// }
// }
// 
// }
//   
//  T1(turn: number): void {
//   if (this.BL[4]!=0) {
//    S陷阵之志
//   let c=0
//   for (let index = 1; index < 10; index++) {
//     GeZiManager.Tcharacter=null
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).findGe(index,1)],1,this.node.getComponent(Character).Pturn,"getOne")
//     if (  GeZiManager.Tcharacter instanceof Character&&GeZiManager.Tcharacter instanceof CHF==false) {
//       c++
//     }
//    }
// 
// 
//    if (c>3) {
//     if (this.XZZZ) {
//      
//     }else{ this.node.getComponent(Character).TNJJ[2]-=1;
//       this.node.getComponent(Character).TNJJ[3]-=1;
//       this.XZZZ=true
//       this.node.getChildByName("XZZZ").active=true
//       this.node.parent.getComponent(JNUM).JNF("S陷阵之志",this.target.ZB)  
//     }
//   
//   
//    }else{if (this.XZZZ) {
//     this.node.getComponent(Character).TNJJ[2]+=1;
//     this.node.getComponent(Character).TNJJ[3]+=1;
//     this.XZZZ=false
//     this.node.getChildByName("XZZZ").active=false
//    }
// 
// 
// 
// 
//   }
//   }
// 
// 
// 
// 
// if (this.BL[5]!=0&&!this.sq) {
// 圣骑
//  
//  let a 
//  if (this.target.color=="Blue") {
//    a=GeZiManager.P1.LST+GeZiManager.P3.LST+GeZiManager.P5.LST
//  }else {  a=GeZiManager.P2.LST+GeZiManager.P4.LST+GeZiManager.P6.LST}
//  if (a==8) {
//     for (let index = 0; index < this.target.TNJJ.length; index++) {
//       this.target.TNJJ[index]-=1
//         
//      
//       }  console.log(this.target.TNJJ)
//       this.target.ST()
//    this.sq=true
//    this.node.parent.getComponent(JNUM).JNF("S圣骑",this.target.ZB)  
//  }
//   }
//   
//   
// 
// 
// 
// 
// 
// 
//  }
//    
//    
//    
//    
//     start () {
//   this.node.getChildByName("name").getComponent(Label).string="骑士"      
// this.target=this.node.getComponent(Character)
// 
// this.node.getComponent(Character).shop2.push(this);
// this.node.getComponent(Character).move3.push(this);
// this.Pturn= this.node.getComponent(Character).Pturn;
// 
// for(let c of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]){
// 
// c.dead2.push(this)
// 
// 
// }
// this.node.getComponent(Character).t1.push(this);
// 
// }
// 
// QDS(n:number){if(this.weapon2!=null&&this.weapon1!=null){
// 
//   switch (this.wn) {
// 
//   case 2:this.wn=1;  this.node.getChildByName("WQ1").color=new Color(255,255,255);this.node.getChildByName("WQ2").color=new Color(155,155,155);
//   this.node.getComponent(Character).changeE(this.weapon1)
//       break;
// 
//   default:this.wn=2;  this.node.getChildByName("WQ2").color=new Color(255,255,255);this.node.getChildByName("WQ1").color=new Color(155,155,155);
//   this.node.getComponent(Character).changeE(this.weapon2)
//   break;
// }
// this.node.parent.getComponent(JNUM).JNF("S全能骑士",this.target.ZB)  
// }
// 
// }
// skill1(){
//   GeZiManager.DLLM="S01"
// 
// 
//   
//   MessageCenter.MakeGMessage("JN",[1],1,GeZiManager.PCP.Pturn,GeZiManager.DLLM)
// 
// 
//this.QDS(1)
// }
// 
// 
// Shop2(A:string,b:boolean){
//  
//  console.log(A)
//  
//   if (A[0]=="A") {
//     if (b) {
//       switch (this.wn) {
//         case 1:this.weapon1=A;  this.node.getChildByName("WQ1").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
//           break;
//       
//         default:this.weapon2=A;  this.node.getChildByName("WQ2").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
//           break;
//       }
// 
// 
//       return
//     }
// 
// if(this.weapon1==null){this.weapon1=A;
//   this.node.getChildByName("WQ1").active=true
//   this.node.getChildByName("WQ1").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
// 
// }else if(this.weapon2==null){this.weapon2=A;
//   this.wn=2
//   this.node.getChildByName("WQ2").active=true;this.node.getChildByName("WQ1").color=new Color(155,155,155);
//   this.node.getChildByName("WQ2").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)}else{
// 
// switch (this.wn) {
//   case 1:this.weapon1=A;
//   this.node.getChildByName("WQ1").color=new Color(255,255,255);this.node.getChildByName("WQ2").color=new Color(155,155,155);
//   this.node.getChildByName("WQ1").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
//     break;
// 
//   default:this.weapon2=A;
//   this.node.getChildByName("WQ2").color=new Color(255,255,255);this.node.getChildByName("WQ1").color=new Color(155,155,155);
//   this.node.getChildByName("WQ2").children[0].getComponent(Sprite).spriteFrame= this.node.parent.getComponent(Shops).PM(A)
//     break;
// }
// 
// 
// }
//   }
//   
//   
//   
// 
// 
//     
// }
// 
// 
// 
// remove(){ 
// this.PZB=0;
//   GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this)
//   GeZiManager.shanchu(this.node.getComponent(Character).t1,this)
//   GeZiManager.shanchu(this.node.getComponent(Character).shop2,this)
//   GeZiManager.shanchu(this.node.getComponent(Character).move3,this)
//  }
// 
// getJNF(n: number[]): void {
//   function sumArray(numbers: number[]): number {
//     return numbers.reduce((sum, current) => sum + current, 0);
// }
//  
// for (let index = 0; index < n[4]+n[5]; index++) {
//   for( let a of n){if (index<4) {
//      a++
//   }}
// }
//  
//  
//  
//   if (sumArray(n)>=1) {
//     this.BL[0]+=1
//   }else{  this.BL[0]*=0}//继承1
// 
//   if (sumArray(n)>=2) {
//     this.BL[1]+=1
//   }else{  this.BL[1]*=0}//继承2
//   
//   if (turn.round>=0) {
//     this.BL[2]+=1
//   }else{  this.BL[2]*=0}//冲锋1
// 
//   
//   if (n[3]>=1) {
//     this.BL[3]+=1
//   }else{  this.BL[3]*=0}//冲锋2
//  
//   
//   
//   if (sumArray(n)>=2||(sumArray(n)==1&&turn.round>=10)) {
//     this.BL[4]+=1
//   }else{  this.BL[4]*=0}//陷阵之志
//   
//   
//   if (sumArray(n)==4) {
//     this.BL[5]+=1
//   }else{  this.BL[5]*=0}//圣骑
// }
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//  choseS(n:string): void {
//   switch (n) {
//       case "S冲锋":this.target.walk3.push(this);GeZiManager.shanchu(this.JX1,"S冲锋")
//           
//           break;
//           case "S继承":GeZiManager.shanchu(this.JX1,"S继承")
//           
//           break;
//           case "S陷阵之志":  this.target.move3.push(this);GeZiManager.shanchu(this.JX1,"S陷阵之志")
//           this.T1(this.target.Pturn)
//           break;
// 
//         
//           case "S圣骑":GeZiManager.shanchu(this.JX3,"S圣骑"); this.node.parent.getComponent(JNUM).JNF("S圣骑",this.target.ZB)  
//             this.T1(this.target.Pturn)
//           
// 
//           break;
//   
//       default:
//           break;
//   }
//   console.log(n)
// }
// 
// 
// 
// 
// Dead2(dead:number): void {
//  if(this.target.color==this.getc(dead).color&&this.BL[2]>0&&this.target.Pturn==dead){
// MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.getc(dead).qi,this.target.Pturn,"Qi+")
// MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.getc(dead).TNS,this.target.Pturn,"TNS+")
// this.node.parent.getComponent(JNUM).JNF("S继承",this.target.ZB)  
//  }
// 
// 
// if (this.target.Pturn==dead&&this.BL[3]>0) {
//   for (let index = 1; index <= 6; index++) {
//    if (this.getc(index).color==this.target.color&&index!=this.target.Pturn&&this.getc(index).LST>0) {
//     MessageCenter.MakeSHMessage("AM",[this.getc(index).ZB],this.target.qi,this.target.Pturn,"Qi+")
// MessageCenter.MakeSHMessage("AM",[this.getc(index).ZB],this.target.TNS,this.target.Pturn,"TNS+")
// this.node.parent.getComponent(JNUM).JNF("S继承2",this.target.ZB)  
//    return;
// }
//     
//   }
// }
// 
// 
// }
// 
// 
// 
// Walk3(ZB: number): void {
// if(this.BL[1]>0){
//   let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
// for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
//   MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
// 
//   this.node.parent.getComponent(JNUM).JNF("S冲锋",this.target.ZB)  
// }}
// }else if (this.BL[0]>0) {
//   let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
//   for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TN+")
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
//     this.node.parent.getComponent(JNUM).JNF("S冲锋2",this.target.ZB)  
// 
// }
// 
//   }}}
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// NWNA(e:string[],n:number){
// 
// 
//   let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],2)    
//  /* let a
//   switch (this.target.NWS) {
//     case 1: a=this.mArr1Arr2(this.JX1,this.JX1,e,["TNS"]);return a
// break
//     
//     case 2:a=this.JX1
//           
//           break;
//           case 3:a=this.mArr1Arr2(this.JX1,this.JX1)
//           
//           break;
//           case 4:a=this.JX2
//           
//           break;
//         
//   
//       default:a=this.JX2
//           break;
//   }
//    */
//   return e
//   
//   
//   
//   }
//   getTO (n: number):string[] {
//     switch(n){
// 
// case 1:return ["S冲锋","S继承","TNS"]
// 
// case 2:return ["S陷阵之志",this.JX1[0],"HP"]
// 
// case 3:
// let k=this.getRA(["FU0",'FU1','FU2','FU3'],1)
// let j="HP"
// if (this.mArr1Arr2(this.JX1,this.JX2).length!=0) {
//   j=this.mArr1Arr2(this.JX1,this.JX2)[0]
// }
// return ["S圣骑",k[0],j]
// default: 
// let a=this.getRA(["FU0",'FU1','FU2','FU3'],3)
// 
// return [k[1],k[0],k[2]]
// 
// }
// 
// 
// }
// }
