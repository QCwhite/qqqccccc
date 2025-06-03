// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Label } from 'cc';
const {ccclass, property} = _decorator;

import MTX from "../BASE/MTX";
import Character from "../BASE/Character";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import JNUM from "../UIS/else/JNUmanager";
import A509 from "../equipment/weapon/SC/A509";
import state from "../game/time/state";
import turn from "../game/time/turn";
import SXX from "./SXX";
import { SubtitleManager } from '../UIS/baom';

@ccclass('S09')
export default class S09 extends SXX {
    Snumber="S09"
    JX:boolean=false;
    cType: string ="human"
 moven:number=0;
 face1:number=0;
 face2:number=0;
    XB:number=2;
    tu:number=4; 
   ww:number=1; 
   BPN:number=0
   sex: string="women";
   JX1: string[]=["S舞步轻盈"];
   JX2: string[]=["S光彩夺目","S共舞"];
   JX3: string[]=["S炫舞"];
   k=0
    start () {
//       this.node.getChildByName("name").getComponent(Label).string="舞者"+this.tu;   
//       this.node.getComponent(Character).changeE("A509");
        this.target=this.node.getComponent(Character)
        this.target.sex="women";
        this.ww= this.node.getComponent(Character).walkWay;
        this.node.getComponent(Character).turn1.push(this.node.getComponent(Character).weapon.getComponent(A509))
        this.node.getComponent(Character).turn3.push(this.node.getComponent(Character).weapon.getComponent(A509))
        this.node.getComponent(Character).turn1.push(this)
        this.node.getComponent(Character).turn3.push(this)
        this.node.getComponent(Character).walk1.push(this);
        this.node.getComponent(Character).walk3.push(this);
        this.node.getComponent(Character).t1.push(this);
        this.node.getComponent(Character).GX=function(face){
        if (this.BPN!=0) {
        return false;
        }else{ this.CMget();

        if (this.CanTmove.includes(face)) {

        return true;
        } else return false;

        }

        }
}
T1(turn: number): void {
        if (this.BPN!=0) {
        if(this.k>0){this.k--}else{this.BPN=0}
        }
}
Turn1(N:number): void {
        if (this.BPN!=0) {
        let j=  this.getc(this.BPN)
        if (N==4) {
        MessageCenter.MakeSHMessage("AM",[j.ZB],1,this.target.Pturn,"turn6");
        }
        if (N==6) {
        MessageCenter.MakeSHMessage("AM",[j.ZB],1,this.target.Pturn,"turn4");
        }
        if (N==8) {
        MessageCenter.MakeSHMessage("AM",[j.ZB],1,this.target.Pturn,"turn8");
        }


        }
}
Walk1(){
      
        this.moven+=1;

        if(this.moven==4){this.node.getComponent(Character).walkWay=2}


        console.log(this.moven)


        if (this.BPN!=0) {
        let j=  this.getc(this.BPN)
        j.move(this.target.faceTo,1);j.moveto(0.8,j.ZB)

        }
        

}
Walk3(){

        if(this.moven==4){this.node.getComponent(Character).walkWay=this.ww;
        this.node.parent.getComponent(JNUM).JNF("S舞步轻盈",this.target.ZB) ;
        this.moven=0;
        }
        this.node.getChildByName("moven").getComponent(Label).string=this.moven.toString()

    }
skill3(): void {
        state.ST=9;
        GeZiManager.DLLM="S09"
        let a  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,1)
        find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;

        for(let c of GeZiManager.YuanGong){


        if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

        }
        GeZiManager.GeZi=-3
}
    skill2(){
        state.ST=9;
        GeZiManager.DLLM="S09"
        let a =this.getFar(3,this.target.ZB)
        MessageCenter.MakeSHMessage("AM",a,2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"getOnes");




        let o=[]

        for (let c of GeZiManager.Tcharacters) {
        if (c.node.getComponent(SXX).Sex=="man") {
        o.push(c.ZB)
        }

        }



        find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;

        for(let c of GeZiManager.YuanGong){


        if(a.includes(c.ZB)&&o.includes(c.ZB)){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

        }
        GeZiManager.GeZi=-2

}
skill1(): void {
        state.ST=9;
        let a =[2,3,6,9,8,7,4,1,2,3,6,9,8,7,4,1]
        this.tu=6
        let k=this.target.faceTo
        let j=a.indexOf(k,1)
        let a1=a[j+5]+0
        let a2=a[j+6]+0
        let a3=a[j+7]+0

        let o=[]
        for(let h of a){
        if (![a1,a2,a3].includes(h)) {
        o.push(this.target.findGe(h,1))
        }

        }
        find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;

        for(let c of GeZiManager.YuanGong){


        if(o.includes(c.ZB )){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

        }
        GeZiManager.GeZi=-1


  }
  skill4(): void {
        state.ST=9;
        GeZiManager.DLLM="S09"
        let a =[2,1,4,7,8,9,6,3,2,1,4,7,8,9,6,3]
        this.tu=4

        let k=this.target.faceTo
        let j=a.indexOf(k,1)
        let a1=a[j+5]+0
        let a2=a[j+6]+0
        let a3=a[j+7]+0

        let o=[]
        for(let h of a){
        if (![a1,a2,a3].includes(h)) {
        o.push(this.target.findGe(h,1))
        }

        }
        find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;

        for(let c of GeZiManager.YuanGong){


        if(o.includes(c.ZB )){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

        }
        GeZiManager.GeZi=-1


  }
  QDS(n: number): void {
        if (n==-1) {
        switch (this.tu) {
        case 4:this.turn4();

        break;
        case 6:this.turn6();

        break;


        default:
        break;
        }

        this.node.parent.getComponent(JNUM).JNF("S华丽转身",this.target.ZB) ;
        }else{
        if (n==-2) {

        GeZiManager.Tcharacters=[]
        let a =this.getFar(3,this.target.ZB)
        MessageCenter.MakeSHMessage("AM",a,2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"getOnes");


        this.node.parent.getComponent(JNUM).JNF("S光彩夺目",this.target.ZB) ;

        let o=[]

        for (let c of GeZiManager.Tcharacters) {
        if (c.node.getComponent(SXX).Sex=="man") {
        let k= c.PfaceFinal(c.faceTo,[2])[0]
        let j=this.target.faceIs(c.ZB)
        let Y
        switch (k) {
        case 6:if ([7,8,9].includes(j)) {
        Y="turn6"
        }else if ([1,2,3].includes(j)) {
        Y="turn4"
        }else if (j==4) {
        Y="turn8"
        }

        break;
        case 8:if ([7,4,1].includes(j)) {
        Y="turn6"
        }else if ([3,6,9].includes(j)) {
        Y="turn4"
        }else if (j==2) {
        Y="turn8"
        }

        break;

        case 4:if ([1,2,3].includes(j)) {
        Y="turn6"
        }else if ([7,8,9].includes(j)) {
        Y="turn4"
        }else if (j==6) {
        Y="turn8"
        }

        break;



        case 2:if ([3,6,9].includes(j)) {
        Y="turn6"
        }else if ([1,4,7].includes(j)) {
        Y="turn4"
        }else if (j==8) {
        Y="turn8"
        }

        break;
        default:
        break;
        }
        if (j!=k) {
        MessageCenter.MakeSHMessage("AM",[c.ZB],1,this.target.Pturn,Y);

        }
        }

        }
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-");
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-");
        }
        else  {
        MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,1)],1,null,"getOneC")
        if (GeZiManager.Tcharacter) {
        this.k=2
        this.BPN=GeZiManager.Tcharacter.Pturn

        }
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-");
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-");
        }

        }
  }
turn4(){


        for(let m of GeZiManager.PCP.turn1){m.Turn1(4)}
        this.target.faceTo = this.target.turn8([this.target.faceTo])[0];
        this.target.faceChange()
        this.target.UIC();
        this.target.t-=1;

        this.target.node.getComponentInChildren(MTX).playFrameAnimation1("turn4");
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"TN-");
        GeZiManager.Bu.push(0.4);
        for(let m of GeZiManager.PCP.turn3){m.Turn3()}
}
turn6(){

        for(let m of GeZiManager.PCP.turn1){m.Turn1(6)}
        this.target.faceTo = this.target.turn8([this.target.faceTo])[0];
        this.target.faceChange()
        this.target.UIC();
        this.target.t-=1;
        this.target.node.getComponentInChildren(MTX).playFrameAnimation1("turn6");
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"TN-");
        GeZiManager.Bu.push(0.4);
        for(let m of GeZiManager.PCP.turn3){m.Turn3()}
    }
    remove(){ 

        GeZiManager.shanchu(this.node.getComponent(Character).walk1,this)
        GeZiManager.shanchu(this.node.getComponent(Character).walk3,this)
        GeZiManager.shanchu(this.node.getComponent(Character).turn3,this.node.getComponent(Character).weapon.getComponent(A509))
        GeZiManager.shanchu(this.node.getComponent(Character).turn1,this.node.getComponent(Character).weapon.getComponent(A509))
         }
         choseS(n:string): void {
        switch (n) {
        case "S光彩夺目":GeZiManager.shanchu(this.JX1,"S光彩夺目");

        break;

        case "S共舞":  GeZiManager.shanchu(this.JX1,"S共舞");

        break;
        case "S炫舞":  GeZiManager.shanchu(this.JX2,"S炫舞");this.target.TNJJ[0]-=1

        break;




        default:
        break;
        }
        console.log(n)
          }
          
          
          
          
          
          
          
          
          NWNA(e:string[]){


        let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)
        let a
        switch (this.target.NWS) {
        case 1: a=this.mArr1Arr2(e,["TNS","TNS"]);return a
        break

        case 2:a=this.mArr1Arr2(this.JX1,this.JX1)

        break;
        case 3:a=this.mArr1Arr2(this.JX1,this.JX1,this.JX2)

        break;
        case 4:a=this.mArr1Arr2(this.JX2,this.JX2)

        break;

        case 5:a=this.mArr1Arr2(this.JX2,this.JX2)
        break;
        default:a=this.mArr1Arr2(this.JX2)
        break;
        }

        return e



            }
            getTO (n: number):string[] {
        switch(n){

        case 1:return ["S舞步轻盈","魂","TNS"]

        case 2:
        let j="qi"
        if(this.JX1.includes("S舞步轻盈")){j="S舞步轻盈"}
        return [j,"S光彩夺目","S共舞"]

        case 3:
        let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
        let y= this.mArr1Arr2(this.JX1,this.JX2)
        return [y[0],o,"S炫舞"]
        default:
        let k="qi"
        let k1=this.mArr1Arr2(this.JX1,this.JX2,this.JX3)
        if ( this.mArr1Arr2(this.JX1,this.JX2,this.JX3).length>0) {
        k= this.mArr1Arr2(this.JX1,this.JX2,this.JX3)[0]
        }
        o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
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
        }else{  this.JX=false}//炫舞




              }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// 
// import MTX from "../../pictures/TX/MTX/MTX";
// import Character from "../BASE/Character";
// import GeZiManager from "../Manager/GeZiManager";
// import MessageCenter from "../Message/MessageCenter";
// import JNUM from "../UIS/else/JNUmanager";
// import A509 from "../equipment/weapon/SC/A509";
// import state from "../game/time/state";
// 
// import turn from "../game/time/turn";
// import SXX from "./SXX";
// 
// 
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class S09 extends SXX {
//     Snumber="S09"
//     JX:boolean=false;
//     cType: string ="human"
//  moven:number=0;
//  face1:number=0;
//  face2:number=0;
//     XB:number=2;
//     tu:number=4; 
//    ww:number=1; 
//    BPN:number=0
//    sex: string="women";
//    JX1: string[]=["S舞步轻盈"];
//    JX2: string[]=["S光彩夺目","S共舞"];
//    JX3: string[]=["S炫舞"];
//    k=0
//     start () {
//        this.node.getChildByName("name").getComponent(Label).string="舞者"+this.tu;   
//        this.node.getComponent(Character).changeE("A509");
//         this.target=this.node.getComponent(Character)
//         this.target.sex="women";
//      this.ww= this.node.getComponent(Character).walkWay;
//     this.node.getComponent(Character).turn1.push(this.node.getComponent(Character).weapon.getComponent(A509))
//     this.node.getComponent(Character).turn3.push(this.node.getComponent(Character).weapon.getComponent(A509))
//     this.node.getComponent(Character).turn1.push(this)
//     this.node.getComponent(Character).turn3.push(this)
//     this.node.getComponent(Character).walk1.push(this);
//     this.node.getComponent(Character).walk3.push(this);
//     this.node.getComponent(Character).t1.push(this);
//     this.node.getComponent(Character).GX=function(face){
//         if (this.BPN!=0) {
//             return false;
//         }else{ this.CMget();
//         
//             if (this.CanTmove.includes(face)) {
//          
//                return true;
//             } else return false;
//          
//          }
//         
//                    }
// }
// 
// T1(turn: number): void {
//     if (this.BPN!=0) {
//         if(this.k>0){this.k--}else{this.BPN=0}
//     }
// }
// 
// Turn1(N:number): void {
//     if (this.BPN!=0) {
//         let j=  this.getc(this.BPN)
// if (N==4) {
//     MessageCenter.MakeSHMessage("AM",[j.ZB],1,this.target.Pturn,"turn6");
// }
// if (N==6) {
//     MessageCenter.MakeSHMessage("AM",[j.ZB],1,this.target.Pturn,"turn4");
// }    
// if (N==8) {
//     MessageCenter.MakeSHMessage("AM",[j.ZB],1,this.target.Pturn,"turn8");
// }    
// 
// 
//     }  
// }
// 
// 
// Walk1(){
//  if (this.BL[0]>0) {
//     this.moven+=1;
//   
//     if(this.moven==4){this.node.getComponent(Character).walkWay=2}
//     
// 
// console.log(this.moven)
// 
// 
// if (this.BPN!=0) {
//     let j=  this.getc(this.BPN)
//   j.move(this.target.faceTo,1);j.moveto(0.8,j.ZB)
// 
// }  
//  }
//     
// }
// 
// 
// Walk3(){
// 
//     if(this.moven==4){this.node.getComponent(Character).walkWay=this.ww;
//         this.node.parent.getComponent(JNUM).JNF("S舞步轻盈",this.target.ZB) ;
//         this.moven=0;
//     }
//       this.node.getChildByName("moven").getComponent(Label).string=this.moven.toString()
//     
//     }
// 
// skill3(): void {
//     state.ST=9;
//             GeZiManager.DLLM="S09"
//   let a  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,1)
//   find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
//    
//   for(let c of GeZiManager.YuanGong){
// 
// 
//       if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
//     
//   } 
//   GeZiManager.GeZi=-3
// }
//     skill2(){
//         state.ST=9;
//         GeZiManager.DLLM="S09"
//         let a =this.getFar(2,this.target.ZB)
//         MessageCenter.MakeSHMessage("AM",a,2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"getOnes"); 
//         
//       
//    
//     
//     let o=[]
// 
//     for (let c of GeZiManager.Tcharacters) {
//        if (c.node.getComponent(SXX).Sex=="man") {
//         o.push(c.ZB)
//        }
//         
//     }
//    
//      
//     
//       find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
//       
//       for(let c of GeZiManager.YuanGong){
//       
//       
//       if(a.includes(c.ZB)&&o.includes(c.ZB)){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
//       
//       }
//       GeZiManager.GeZi=-2
//       
// }
// skill1(): void {
//     state.ST=9;
//   let a =[2,3,6,9,8,7,4,1,2,3,6,9,8,7,4,1]
//   this.tu=6
// let k=this.target.faceTo
// let j=a.indexOf(k,1)
// let a1=a[j+5]+0
// let a2=a[j+6]+0
// let a3=a[j+7]+0
// 
// let o=[]
// for(let h of a){
//     if (![a1,a2,a3].includes(h)) {
//         o.push(this.target.findGe(h,1))
//     }
//  
// }
//   find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
//   
//   for(let c of GeZiManager.YuanGong){
//   
//   
//   if(o.includes(c.ZB )){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
//   
//   }
//   GeZiManager.GeZi=-1
//   
//   
//   }
// 
// 
//   skill4(): void {
//     state.ST=9;
//     GeZiManager.DLLM="S09"
//     let a =[2,1,4,7,8,9,6,3,2,1,4,7,8,9,6,3]
// this.tu=4
// 
// let k=this.target.faceTo
// let j=a.indexOf(k,1)
// let a1=a[j+5]+0
// let a2=a[j+6]+0
// let a3=a[j+7]+0
// 
// let o=[]
// for(let h of a){
//     if (![a1,a2,a3].includes(h)) {
//         o.push(this.target.findGe(h,1))
//     }
//  
// }
//   find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
//   
//   for(let c of GeZiManager.YuanGong){
//   
//   
//   if(o.includes(c.ZB )){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
//   
//   }
//   GeZiManager.GeZi=-1
//   
//   
//   }
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
//   QDS(n: number): void {
//       if (n==-1) {
//         switch (this.tu) {
//             case 4:this.turn4();
//                 
//                 break;
//                 case 6:this.turn6();
//                 
//                 break;
//         
//         
//             default:
//                 break;
//         }     
//         
//         this.node.parent.getComponent(JNUM).JNF("S华丽转身",this.target.ZB) ;
//       }else{
//         if (n==-2) {
//           
//             GeZiManager.Tcharacters=[]
//             let a =this.getFar(2,this.target.ZB)
//             MessageCenter.MakeSHMessage("AM",a,2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"getOnes"); 
//             
//           
//             this.node.parent.getComponent(JNUM).JNF("S光彩夺目",this.target.ZB) ;
//         
//         let o=[]
//     
//         for (let c of GeZiManager.Tcharacters) {
//            if (c.node.getComponent(SXX).Sex=="man") {
//           let k= c.PfaceFinal(c.faceTo,[2])[0]
//          let j=this.target.faceIs(c.ZB)
//          let Y
// switch (k) {
//     case 6:if ([7,8,9].includes(j)) {
//         Y="turn6"
//     }else if ([1,2,3].includes(j)) {
//         Y="turn4"
//     }else if (j==4) {
//         Y="turn8"
//     }
//         
//         break;
//  case 8:if ([7,4,1].includes(j)) {
//             Y="turn6"
//         }else if ([3,6,9].includes(j)) {
//             Y="turn4"
//         }else if (j==2) {
//             Y="turn8"
//         }
//             
//             break;
// 
// case 4:if ([1,2,3].includes(j)) {
//                 Y="turn6"
//             }else if ([7,8,9].includes(j)) {
//                 Y="turn4"
//             }else if (j==6) {
//                 Y="turn8"
//             }
//                 
//                 break;
// 
// 
// 
// case 2:if ([3,6,9].includes(j)) {
//                     Y="turn6"
//                 }else if ([1,4,7].includes(j)) {
//                     Y="turn4"
//                 }else if (j==8) {
//                     Y="turn8"
//                 }
//                     
//                     break;
//     default:
//         break;
// }
//  if (j!=k) {
//     MessageCenter.MakeSHMessage("AM",[c.ZB],1,this.target.Pturn,Y);
// 
//  }         
//            }
//             
//         }
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-");
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi-");
//         }
// else  {
//     MessageCenter.MakeSHMessage("AM",[this.target.findGe(this.target.faceTo,1)],1,null,"getOneC")
//     if (GeZiManager.Tcharacter) {
//         this.k=2
//         this.BPN=GeZiManager.Tcharacter.Pturn
// 
//     }  
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"TN-");
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-");
// }
// 
//       }
//   }
// 
// 
// 
// 
// 
// turn4(){
// 
//   
//     for(let m of GeZiManager.PCP.turn1){m.Turn1(4)}
//     this.target.faceTo = this.target.turn8([this.target.faceTo])[0];
//     this.target.faceChange()
//     this.target.UIC();
//     this.target.t-=1;
//     
//      this.target.node.getComponentInChildren(MTX).playFrameAnimation1("turn4"); 
//       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"TN-"); 
// GeZiManager.Bu.push(0.4);
// for(let m of GeZiManager.PCP.turn3){m.Turn3()}
// }
// 
// 
// 
// turn6(){
//    
//     for(let m of GeZiManager.PCP.turn1){m.Turn1(6)}
//     this.target.faceTo = this.target.turn8([this.target.faceTo])[0];
//     this.target.faceChange()
//     this.target.UIC();
//     this.target.t-=1;
//      this.target.node.getComponentInChildren(MTX).playFrameAnimation1("turn6"); 
//       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2*(GeZiManager.TNC[0]+this.target.TNJJ[0]),this.target.Pturn,"TN-"); 
// GeZiManager.Bu.push(0.4);
// for(let m of GeZiManager.PCP.turn3){m.Turn3()}
//     }
// 
// 
// 
//     remove(){ 
//         
//           GeZiManager.shanchu(this.node.getComponent(Character).walk1,this)
//           GeZiManager.shanchu(this.node.getComponent(Character).walk3,this)
//           GeZiManager.shanchu(this.node.getComponent(Character).turn3,this.node.getComponent(Character).weapon.getComponent(A509))
//           GeZiManager.shanchu(this.node.getComponent(Character).turn1,this.node.getComponent(Character).weapon.getComponent(A509))
//          }
// 
// 
// 
// 
// 
//          choseS(n:string): void {
//             switch (n) {
//                 case "S光彩夺目":GeZiManager.shanchu(this.JX1,"S光彩夺目");
//                     
//                     break;
//                    
//                     case "S共舞":  GeZiManager.shanchu(this.JX1,"S共舞");
//                     
//                     break;
//                     case "S炫舞":  GeZiManager.shanchu(this.JX2,"S炫舞");this.target.TNJJ[0]-=1
//                     
//                     break;
//                     
//           
//                   
//             
//                 default:
//                     break;
//             }
//             console.log(n)
//           }
//           
//           
//           
//           
//           
//           
//           
//           
//           NWNA(e:string[]){
//           
//           
//             let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)    
//             let a
//             switch (this.target.NWS) {
//               case 1: a=this.mArr1Arr2(e,["TNS","TNS"]);return a
//               break
//               
//               case 2:a=this.mArr1Arr2(this.JX1,this.JX1)
//                     
//                     break;
//                     case 3:a=this.mArr1Arr2(this.JX1,this.JX1,this.JX2)
//                     
//                     break;
//                     case 4:a=this.mArr1Arr2(this.JX2,this.JX2)
//                     
//                     break;
//                   
//             case 5:a=this.mArr1Arr2(this.JX2,this.JX2)
//             break;
//                 default:a=this.mArr1Arr2(this.JX2)
//                     break;
//             }
//             
//             return e
//             
//             
//             
//             }
// 
// 
// 
// 
// 
//             getTO (n: number):string[] {
//                 switch(n){
//             
//             case 1:return ["S舞步轻盈","魂","TNS"]
//             
//             case 2:
//                 let j="qi"
//               if(this.JX1.includes("S舞步轻盈")){j="S舞步轻盈"}
//             return [j,"S光彩夺目","S共舞"]
//             
//             case 3:
//                 let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
//                let y= this.mArr1Arr2(this.JX1,this.JX2)
//               return [y[0],o,"S炫舞"]
//             default: 
//             let k="qi"
//             let k1=this.mArr1Arr2(this.JX1,this.JX2,this.JX3)
//                 if ( this.mArr1Arr2(this.JX1,this.JX2,this.JX3).length>0) {
//                     k= this.mArr1Arr2(this.JX1,this.JX2,this.JX3)[0] 
//                 }
//                o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
//                 if ( this.mArr1Arr2(this.JX1,this.JX2,this.JX3).length>1) {
//                    o= this.mArr1Arr2(this.JX1,this.JX2,this.JX3)[1] 
//                }
//                 
//             return[k,o,"TNS"]
//             
//             
//             
//             
//             
//             
//             
//             }
//             
//             
//             }
//             getJNF(n: number[]): void {
//                 function sumArray(numbers: number[]): number {
//                   return numbers.reduce((sum, current) => sum + current, 0);
//               }
//                
//               for (let index = 0; index < n[4]+n[5]; index++) {
//                 for( let a of n){if (index<4) {
//                    a++
//                 }}
//               }
//                
//                
//                
//                
//                 if (n[3]>=1) {
//                   this.BL[0]+=1
//                 }else{  this.BL[0]*=0}//舞步轻盈
//               
//                 if (n[2]>=1||n[0]>=1) {
//                   this.BL[1]+=1
//                 }else{  this.BL[1]*=0}//光彩夺目
//                 
//             
//               
//                 
//                 if (n[0]>=1&&n[3]>=1) {
//                   this.BL[2]+=1
//                 }else{  this.BL[2]*=0}//炫舞
//                
//                 
//                 
//             
//               }
//     }
