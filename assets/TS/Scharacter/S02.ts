// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Label, UIOpacity } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import ComponentBase from "../BASE/ComponentBase";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import state from "../game/time/state";
import turn from "../game/time/turn";
import SXX from "./SXX";
import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import gif1  from "../BASE/spineANDgif/gif";
import JNUM from "../UIS/else/JNUmanager";
import { SubtitleManager } from '../UIS/baom';

@ccclass('S02')
export default class S02 extends SXX {
     allplayer:number[]=[];//所有玩家位置
     Snumber:string="S02"
     JX:boolean=false;
     cType: string ="human"
     qz:number=0;
     langmu:number=1
JX1: string[]=["S02-劫掠","S02-劫掠P","S02-开箱","S02-海盗旗","S02-幽灵船长"];
BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
GZN:realThing=null
RtoRelive:number=99;
    Attack2(an:number[]) {
//       实现 Fattack2() 方法的逻辑


       GeZiManager.Tcharacter=null
       MessageCenter.MakeSHMessage("AM",an,1,null,"getOne")
       if(GeZiManager.Tcharacter!=null&&!GeZiManager.Tcharacter.gui){

       let c=this.node.getComponent(Character).qi
   //    console.log(c)

       let k=false

       if(GeZiManager.Tcharacter.qi<c){
       k=true

      
    GeZiManager.dm+=1


       }else{ MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],1,this.node.getComponent(Character).Pturn,"Qi-")

       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],1,this.node.getComponent(Character).Pturn,"Qi+")}



  

       this.node.parent.getComponent(JNUM).JNF("S劫掠",this.target.ZB,400)
       this.node.parent.getComponent(JNUM).JNF("S劫掠",GeZiManager.Tcharacter.ZB,400)
       }


       GeZiManager.Tcharacter=null



}
    
  /*  
   T1(turn: number): void {
       if (!this.JX1.includes("S游泳")&&this.target.DiXing=="water"&&!GeZiManager.boxs.includes(this.target.ZB)) {
       this.target.TN+=2
       this.node.parent.getComponent(JNUM).JNF("S游泳",this.target.ZB)
       }

       if (this.target.turnBan[0]==0&&this.GZN) {
       GeZiManager.shanchuALL(this.target.move2,this)

       GeZiManager.shanchuALL(this.GZN.move2,this)
       this.GZN=null
       }
   } */
    
    skill1(): void {
       MessageCenter.MakeMessage("AM",turn.turn,"getZB")
       GeZiManager.FTPN=8.5;
       GeZiManager.JL=2;
       state.ST=2;



       MessageCenter.MakeMessage("UIManager","change",-1);


       for(let manager of GeZiManager.YuanGong){

       manager.getFar(GeZiManager.JL);



       if(GeZiManager.BanMove.includes(manager.ZB)&&(this.getTeamZB(GeZiManager.PCP.Pturn,manager.ZB)==false)){
       manager.red()}

       if(GeZiManager.AllObstacles[0]!=null){
       for(let a of GeZiManager.AllObstacles){
       if(a.ZB==manager.ZB){manager.red()}

       }}

       }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

skill2(): void {
       state.ST=9;
       GeZiManager.DLLM="S02"

       let b=0
   
       b = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,2)
     
       find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;

       for(let c of GeZiManager.YuanGong){


       if(c.ZB==b){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

       }



}
QDS2(): void {


}
skill3(): void {
       state.ST=9;
       GeZiManager.DLLM="S02"
       let a  = GeZiManager.PCP.ZB
       find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;

       for(let c of GeZiManager.YuanGong){


       if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

       }
       GeZiManager.GeZi=-2


}
Move2(ZB: number,p:number,time:number): void {

       if (this.GZN) {
       let a=this.turn8([this.target.faceIs(ZB)])[0]
       let a1=this.target.getdis(ZB)
       let b= this.turn8([this.GZN.faceIs(ZB)])[0]
       let b1=this.GZN.getdis(ZB)
       if(p==this.target.Pturn) {
       GeZiManager.shanchuALL(this.GZN.move2,this)

    //   console.log( this.turn8([this.target.faceIs(ZB)])[0])
       setTimeout(()=>{  this.GZN.move(a,a1);this.GZN.moveto(time, this.GZN.ZB)

       this.GZN.move2.push(this)
       },50)


       }else{
       GeZiManager.shanchuALL(this.target.move2,this)

       console.log( this.turn8([this.target.faceIs(ZB)])[0])
       setTimeout(()=>{    this.target.move(b,b1);this.target.moveto(time, this.target.ZB)

       this.target.move2.push(this)
       },100)


       }

////this.node.parent.getComponent(JNUM).JNF("S勾爪",this.target.ZB)  

       }

}
    QDS(n: number): void {
     /*  if (n==-2) {

       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.langmu,this.target.Pturn,"Qi-")
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN+")
       this.node.parent.getComponent(JNUM).JNF("S灵魂朗姆",this.target.ZB)
       this.langmu*=2
       }else{

       GeZiManager.Tcharacter=null
       MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,1)],1,null,"getOne")
       if (GeZiManager.Tcharacter&&(GeZiManager.Tcharacter.tt=="box"||GeZiManager.Tcharacter.tt=="human")) {
       this.target.turnBan[0]+=1
       this.target.move2.push(this)
       GeZiManager.Tcharacter.turnBan[0]+=1
       GeZiManager.Tcharacter.move2.push(this)

       this.GZN=GeZiManager.Tcharacter
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-")
       this.node.parent.getComponent(JNUM).JNF("S勾爪",this.target.ZB)
       this.node.parent.getComponent(JNUM).JNF("S勾爪",this.target.findGe(this.target.faceTo,1))
       }///////////////

       else {*/
       GeZiManager.Tcharacter=null
       MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,2)],1,null,"getOne")
       if (GeZiManager.Tcharacter) {
      
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-")
       if (GeZiManager.Tcharacter.qi<this.target.qi) {
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(GeZiManager.Tcharacter.ZB)])[0],0.3],this.target.Pturn,"move")
       }else{  MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],[this.target.turn8([GeZiManager.Tcharacter.faceIs(this.target.ZB)])[0],0.3],this.target.Pturn,"move")}
       this.node.parent.getComponent(JNUM).JNF("S勾爪2",this.target.ZB)
       this.node.parent.getComponent(JNUM).JNF("S勾爪2",this.target.findGe(this.target.faceTo,2))
              MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-")

       }

      



       }



       
    
   Attack25(at: any, csh: number): void {


      
  }
    start () {

       this.node.getComponent(Character).attack2.push(this);
    
       this.node.getComponent(Character).Snumber=2;
       this.node.getChildByName("name").getComponent(Label).string="海盗"
       this.target=this.node.getComponent(Character);
       this.node.getComponent(Character).t1.push(this);
//      this.node.getComponent(Character).dead2.push(this);
//       更新状态
    }
    
       
         remove(): void {
       GeZiManager.shanchu(this.node.getComponent(Character).attack2,this)

      }  
     
        getTeamZB(n:number,ZB:number){
       for(let a of this.node.parent.getComponent(AnimalManager).YuanGong){

       if(a.ZB==ZB){


       if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
       }




       }
}
choseS(n:string): void {
       switch (n) {
       case "S游泳":this.target.t1.push(this);GeZiManager.shanchu(this.JX1,"S游泳");this.target.MAXWAT+=1

       break;
       case "S开箱":this.target.t1.push(this);GeZiManager.shanchu(this.JX1,"S开箱");this.target.MAXWAT+=1

       break;
       case "S劫掠2":  GeZiManager.shanchu(this.JX3,"S劫掠2");

       break;
       case "S海盗旗":  GeZiManager.shanchu(this.JX2,"S海盗旗");

       break;
       case "S钩爪":  GeZiManager.shanchu(this.JX2,"S钩爪");

       break;
       case "S幽灵船长":this.target.dead2.push(this);GeZiManager.shanchu(this.JX3,"S幽灵船长");
       break;
       case "S灵魂朗姆":  this.langmu+=1; MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")

       break;




       default:
       break;
       }
  //     console.log(n)
}
getJNF(n: number[]): void {
  
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
}else{   this.JX=false}






}
NWNA(e:string[],n:number){


       let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)
       let a
//  /*
       switch (this.target.NWS) {
       case 1: a=this.mArr1Arr2(["S游泳","S游泳","S游泳","S灵魂朗姆","S灵魂朗姆"],e,["TNS","TNS"]);return a
       break

       case 2:a=this.mArr1Arr2(this.JX1,this.JX2)

       break;
       case 3:a=this.mArr1Arr2(this.JX1,this.JX2,this.JX2)

       break;
       case 4:a=this.mArr1Arr2(this.JX3,this.JX2)

       break;

       case 5:a=this.mArr1Arr2(this.JX3,this.JX2)
       break;
       default:a=this.mArr1Arr2(this.JX3,this.JX3)
       break;
       }
//  */
      // console.log(e)
       return  e



  }
Dead2(){
       if (this.JX) {
       turn.Roo.push(this)
       this.RtoRelive=2
       this.node.parent.getComponent(JNUM).JNF("S幽灵船长",this.target.ZB)
       }




}
roundPass(): void {
       if (this.RtoRelive>0) {
       this.RtoRelive--



       } if(turn.DorN=="nigth"&&this.RtoRelive==0){
       this.RtoRelive=-1
       this.relive()

       }else if (turn.DorN=="day"&&this.RtoRelive==-1) {
       this.target.dead()
       }

}
relive(){
     //  console.log(this.target.ZB)

       for(let a of this.node.children){a.active=true;}
       this.node.getChildByName("to8").getComponent(UIOpacity).opacity=155
       this.node.getChildByName("to2").getComponent(UIOpacity).opacity=155
       this.node.getChildByName("to4").getComponent(UIOpacity).opacity=155
       this.node.getChildByName("to6").getComponent(UIOpacity).opacity=155
       this.node.getChildByName("to8").active=false
       this.node.getChildByName("to2").active=false
       this.node.getChildByName("to4").active=false
       this.node.getChildByName("to6").active=false
       this.node.getComponent(gif1).stop()
       this.target.changeE("A102")
       this.target.changeE("shose")
       this.target.changeE("body")
       this.target.changeE("accessory")
       this.node.getComponent(Cspine).changeDirection(this.target.faceTo)
////this.target.TP(this.target.ZB)
       this.target.LST=10
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.target.MaxHP,this.target.Pturn,"HP+")
       this.target.HP=this.target.MaxHP
       this.target.ghost=true
       this.node.parent.getComponent(JNUM).JNF("S幽灵船长",this.target.ZB)
       setTimeout(()=>{this.target.To(this.target.ZB,0.1);this.node.getComponent(gif1).changeF(-1,1)},1200)

}
getTO (n: number):string[] {
       switch(n){

       case 1:return this.JX1

       case 2:return  this.JX2

       case 3: return this.JX3


       default:
       let a=this.getRA(this.mArr1Arr2(this.JX1,this.JX2,this.JX3),3)

       return [a[0],a[1],a[2]]

       }


}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// 
// 
// import { start } from "repl";
// import Character from "../BASE/Character";
// import ComponentBase from "../BASE/ComponentBase";
// import AnimalManager from "../Manager/AnimalManager";
// import GeZiManager from "../Manager/GeZiManager";
// import MessageCenter from "../Message/MessageCenter";
// import state from "../game/time/state";
// 
// import turn from "../game/time/turn";
// import SXX from "./SXX";
// import realThing from "../BASE/realThing";
// import Cspine from "../BASE/spineANDgif/Cspine";
// import { gif } from "../BASE/spineANDgif/gif";
// import JNUM from "../UIS/else/JNUmanager";
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class S02 extends SXX {
//      allplayer:number[]=[];//所有玩家位置
//      Snumber:string="S02"
//      JX:boolean=false;
//      cType: string ="human"
//      qz:number=0;
//      langmu:number=1
// JX1: string[]=["S02-劫掠","S02-劫掠P","S02-开箱","S02-海盗旗","S02-幽灵船长"];
// 
// BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
// GZN:realThing=null
// RtoRelive:number=99;
//     Attack2(an:number[]) {
//        实现 Fattack2() 方法的逻辑
//        
//         
//         GeZiManager.Tcharacter=null
//     MessageCenter.MakeSHMessage("AM",an,1,null,"getOneC")
//     if(GeZiManager.Tcharacter!=null){
//     
//     let c=Math.floor(this.node.getComponent(Character).qi/2+this.node.getComponent(Character).FU[0]+this.node.getComponent(Character).FU[1]+this.node.getComponent(Character).FU[2]+this.node.getComponent(Character).FU[3])
//   console.log(c)
// 
//    let k=false
//     
//    if(GeZiManager.Tcharacter.qi<c){ 
//     k=true
//   
//     MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],GeZiManager.Tcharacter.qi,this.node.getComponent(Character).Pturn,"Qi+")
//    MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],0,this.node.getComponent(Character).Pturn,"Qi=")
//  
//    
// 
// }else{ MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],c,this.node.getComponent(Character).Pturn,"Qi-")
// 
//   MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],c,this.node.getComponent(Character).Pturn,"Qi+")}
// 
// 
// 
//   if (k||this.BL[0]>0) {
//     MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],1,this.node.getComponent(Character).Pturn,"HP-");
//   } 
// let a=""
// 
// if (this.BL[0]>0) {
//   a="S劫掠2"
// }else{a="S劫掠"}
// 
// 
//   this.node.parent.getComponent(JNUM).JNF(a,this.target.ZB,400)  
//   this.node.parent.getComponent(JNUM).JNF(a,GeZiManager.Tcharacter.ZB,400)  
//     }
// 
// 
//     GeZiManager.Tcharacter=null
// 
// 
// 
// }
//     
//     
//    T1(turn: number): void {
//     if (!this.JX1.includes("S游泳")&&this.target.DiXing=="water"&&!GeZiManager.boxs.includes(this.target.ZB)) {
//       this.target.TN+=2
//       this.node.parent.getComponent(JNUM).JNF("S游泳",this.target.ZB)  
//    }
// 
//    if (this.target.turnBan[0]==0&&this.GZN) {
//     GeZiManager.shanchuALL(this.target.move2,this)
// 
//     GeZiManager.shanchuALL(this.GZN.move2,this)
//     this.GZN=null
//    }
//    } 
// 
//     
//     skill2(): void {
//       MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//       GeZiManager.FTPN=8.5;
//   GeZiManager.JL=2;
//      state.ST=2;
//              
//               
//      
//      MessageCenter.MakeMessage("UIManager","change",-1);
//    
//      
//      for(let manager of GeZiManager.YuanGong){
//     
//     manager.getFar(GeZiManager.JL);
//   
//     
//      
//       if(GeZiManager.BanMove.includes(manager.ZB)&&(this.getTeamZB(GeZiManager.PCP.Pturn,manager.ZB)==false)){
//        manager.red()}
//        
//     if(GeZiManager.AllObstacles[0]!=null){
//        for(let a of GeZiManager.AllObstacles){
//         if(a.ZB==manager.ZB){manager.red()}
// 
//       }}
//   
//     }
//   }
// 
// skill1(): void {
//        state.ST=9;
//             GeZiManager.DLLM="S02"
// 
//             let b=0
//             if (this.BL[2]>0) {
//            b = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,2)  
//             }
//   let a  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,1)
//   find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
//    
//   for(let c of GeZiManager.YuanGong){
// 
// 
//       if(c.ZB==a||c.ZB==b){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
//     
//   }
// 
//  
// 
// }
// 
// 
// QDS2(): void {
// 
// 
// }
// skill3(): void {
//   state.ST=9;
//   GeZiManager.DLLM="S02"
// let a  = GeZiManager.PCP.ZB
// find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
// 
// for(let c of GeZiManager.YuanGong){
// 
// 
// if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
// 
// }
// GeZiManager.GeZi=-2
// 
// 
// }
// 
// Move2(ZB: number,p:number,time:number): void {
// 
// if (this.GZN) {
//   let a=this.turn8([this.target.faceIs(ZB)])[0]
// let a1=this.target.getdis(ZB)
// let b= this.turn8([this.GZN.faceIs(ZB)])[0]
// let b1=this.GZN.getdis(ZB)
//   if(p==this.target.Pturn) {
//     GeZiManager.shanchuALL(this.GZN.move2,this)
// 
//     console.log( this.turn8([this.target.faceIs(ZB)])[0])
// setTimeout(()=>{  this.GZN.move(a,a1);this.GZN.moveto(time, this.GZN.ZB)
// 
// this.GZN.move2.push(this)
// },50)
//  
//   
//   }else{ 
//     GeZiManager.shanchuALL(this.target.move2,this)
// 
//     console.log( this.turn8([this.target.faceIs(ZB)])[0])
//     setTimeout(()=>{    this.target.move(b,b1);this.target.moveto(time, this.target.ZB)
// 
//       this.target.move2.push(this)
//     },100)
// 
// 
// }
// 
// //this.node.parent.getComponent(JNUM).JNF("S勾爪",this.target.ZB)  
// 
// }
// 
// }
// 
//     QDS(n: number): void {
//     if (n==-2) {
//    
//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")
//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.langmu,this.target.Pturn,"Qi-")
//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN+")
//       this.node.parent.getComponent(JNUM).JNF("S灵魂朗姆",this.target.ZB)  
//       this.langmu*=2
//     }else{
//     
//       GeZiManager.Tcharacter=null
//       MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,1)],1,null,"getOne")      
//     if (GeZiManager.Tcharacter&&(GeZiManager.Tcharacter.tt=="box"||GeZiManager.Tcharacter.tt=="human")) {
//       this.target.turnBan[0]+=1
//       this.target.move2.push(this)
//       GeZiManager.Tcharacter.turnBan[0]+=1
//       GeZiManager.Tcharacter.move2.push(this)
//     
//       this.GZN=GeZiManager.Tcharacter
//       MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-")
//       this.node.parent.getComponent(JNUM).JNF("S勾爪",this.target.ZB)  
//       this.node.parent.getComponent(JNUM).JNF("S勾爪",this.target.findGe(this.target.faceTo,1))  
//     }///////////////
//     
//     else {
//       MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,2)],1,null,"getOne")  
//       if (this.BL[2]>0&&GeZiManager.Tcharacter) {
// if (GeZiManager.Tcharacter.tt=="box"||GeZiManager.Tcharacter.tt=="human") {
//   this.target.turnBan[0]+=1
//   this.target.move2.push(this)
//   GeZiManager.Tcharacter.turnBan[0]+=1
//   GeZiManager.Tcharacter.move2.push(this)
// 
//   this.GZN=GeZiManager.Tcharacter
//   MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-")
//   if (GeZiManager.Tcharacter.qi<this.target.qi) {
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(GeZiManager.Tcharacter.ZB)])[0],0.3],this.target.Pturn,"move")
//   }else{  MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],[this.target.turn8([GeZiManager.Tcharacter.faceIs(this.target.ZB)])[0],0.3],this.target.Pturn,"move")}
//   this.node.parent.getComponent(JNUM).JNF("S勾爪2",this.target.ZB)  
//   this.node.parent.getComponent(JNUM).JNF("S勾爪2",GeZiManager.Tcharacter.ZB)  
// }
// 
//     }
//       
//     }{
// 
// 
// 
// 
//     }
//   
//   
//   
//   }
//     }
//    Attack25(at: any, csh: number): void {
//     
//   
//     if (at.tt=="box") {
//       GeZiManager.dm+=1
//       this.node.parent.getComponent(JNUM).JNF("S开箱",this.target.ZB)  
//    } 
//   }
//     start () {
//      
//       this.node.getComponent(Character).attack2.push(this);
//       this.node.getComponent(Character).attack25.push(this);
//         this.node.getComponent(Character).Snumber=2;
//         this.node.getChildByName("name").getComponent(Label).string="海盗"   
//         this.target=this.node.getComponent(Character);
//         this.node.getComponent(Character).t1.push(this);
//       this.node.getComponent(Character).dead2.push(this);
//        更新状态
//     }
//     
//        
//          remove(): void {
//           GeZiManager.shanchu(this.node.getComponent(Character).attack2,this)
//          
//       }  
//      
//         getTeamZB(n:number,ZB:number){
//     for(let a of this.node.parent.getComponent(AnimalManager).YuanGong){
//     
//         if(a.ZB==ZB){
//         
//     
//         if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
// }
//     
//     
//    
//     
//     }
// }
// 
// 
// 
// 
// choseS(n:string): void {
//   switch (n) {
//       case "S游泳":this.target.t1.push(this);GeZiManager.shanchu(this.JX1,"S游泳");this.target.MAXWAT+=1
//           
//           break;
//           case "S开箱":this.target.t1.push(this);GeZiManager.shanchu(this.JX1,"S开箱");this.target.MAXWAT+=1
//           
//           break;
//           case "S劫掠2":  GeZiManager.shanchu(this.JX3,"S劫掠2");
//           
//           break;
//           case "S海盗旗":  GeZiManager.shanchu(this.JX2,"S海盗旗");
//           
//           break;
//           case "S钩爪":  GeZiManager.shanchu(this.JX2,"S钩爪");
//           
//           break;
//           case "S幽灵船长":this.target.dead2.push(this);GeZiManager.shanchu(this.JX3,"S幽灵船长");
//           break;
//           case "S灵魂朗姆":  this.langmu+=1; MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"MaxHP-")
//           
//           break;
//           
// 
//         
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
// getJNF(n: number[]): void {
//   function sumArray(numbers: number[]): number {
//     return numbers.reduce((sum, current) => sum + current, 0);
// }
//  
//  
// for (let index = 0; index < n[4]+n[5]; index++) {
//   for( let a of n){if (index<4) {
//      a++
//   }}
// }
//  
//  
//  
//   if (sumArray(n)>=2&&(n[0]>=1||n[2]>=1)) {
//     this.BL[0]+=1
//   }else{  this.BL[0]*=0}//掠夺2
// 
//   if (sumArray(n)>=1||turn.round>=7) {
//     this.BL[1]+=1
//   }else{  this.BL[1]*=0}//钩爪
//   
//   if (sumArray(n)>=2) {
//     this.BL[2]+=1
//   }else{  this.BL[2]*=0}//钩爪2
// 
//   
//   if (sumArray(n)>=2&&(n[1]>=1||n[2]>=1)) {
//     this.BL[3]+=1
//   }else{  this.BL[3]*=0}//海盗旗
//  
//   
//   
//   if (sumArray(n)>=3&&n[2]>=2){
//     this.BL[4]+=1
//   }else{  this.BL[4]*=0}//幽灵船长
//   
//   
//  
// }
// 
// 
// 
// NWNA(e:string[],n:number){
// 
// 
//   let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)    
//   let a
//   /*
//   switch (this.target.NWS) {
//     case 1: a=this.mArr1Arr2(["S游泳","S游泳","S游泳","S灵魂朗姆","S灵魂朗姆"],e,["TNS","TNS"]);return a
//     break
//     
//     case 2:a=this.mArr1Arr2(this.JX1,this.JX2)
//           
//           break;
//           case 3:a=this.mArr1Arr2(this.JX1,this.JX2,this.JX2)
//           
//           break;
//           case 4:a=this.mArr1Arr2(this.JX3,this.JX2)
//           
//           break;
//         
//   case 5:a=this.mArr1Arr2(this.JX3,this.JX2)
//   break;
//       default:a=this.mArr1Arr2(this.JX3,this.JX3)
//           break;
//   }
//   */
//  console.log(e)
//   return  e
//   
//   
//   
//   }
// 
// Dead2(){
// if (this.BL[4]>0) {
//   turn.Roo.push(this)
// this.RtoRelive=2
// this.node.parent.getComponent(JNUM).JNF("S幽灵船长",this.target.ZB)  
// }
// 
// 
// 
// 
// }
// roundPass(): void {
//   if (this.RtoRelive>0) {
//     this.RtoRelive--
//    
// 
// 
//     } if(turn.DorN=="nigth"&&this.RtoRelive==0){
//    this.RtoRelive=-1
//       this.relive()
//       
//   }else if (turn.DorN=="day"&&this.RtoRelive==-1) {
//     this.target.dead()
//   }
//   
// }
// 
// relive(){
// console.log(this.target.ZB)
// 
// for(let a of this.node.children){a.active=true;}
// this.node.getChildByName("to8").opacity=155
// this.node.getChildByName("to2").opacity=155
// this.node.getChildByName("to4").opacity=155
// this.node.getChildByName("to6").opacity=155
// this.node.getChildByName("to8").active=false
// this.node.getChildByName("to2").active=false
// this.node.getChildByName("to4").active=false
// this.node.getChildByName("to6").active=false
// this.node.getComponent(gif).stop()
// this.target.changeE("A102")
// this.target.changeE("shose")
// this.target.changeE("body")
// this.target.changeE("accessory")
// this.node.getComponent(Cspine).changeDirection(this.target.faceTo)
// //this.target.TP(this.target.ZB)
// this.target.LST=10
// MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.target.MaxHP,this.target.Pturn,"HP+")
// this.target.HP=this.target.MaxHP
// this.target.ghost=true
// this.node.parent.getComponent(JNUM).JNF("S幽灵船长",this.target.ZB)  
// setTimeout(()=>{this.target.To(this.target.ZB,0.1);this.node.getComponent(gif).changeF(-1,1)},1200)
// 
// }
// 
// getTO (n: number):string[] {
//   switch(n){
// 
// case 1:return this.JX1
// 
// case 2:return  this.JX2
// 
// case 3: return this.JX3
// 
// 
// default: 
// let a=this.getRA(this.mArr1Arr2(this.JX1,this.JX2,this.JX3),3)
// 
// return [a[0],a[1],a[2]]
// 
// }
// 
// 
// }
// 
// 
// 
// }
