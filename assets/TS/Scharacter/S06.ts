// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Label } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";

import  gif1  from "../BASE/spineANDgif/gif";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import JNUM from "../UIS/else/JNUmanager";
import weapon from "../equipment/weapon/weapon";
import state from "../game/time/state";
import turn from "../game/time/turn";
import SXX from "./SXX";
import Cspine from '../BASE/spineANDgif/Cspine';
import DXX from '../equipment/accessory/DXX';
import BXX from '../equipment/body/BXX';
import CXX from '../equipment/shose/CXX';
import { AudioManager } from '../BASE/music';
import sideUI from '../UIS/sideUI';
import { SubtitleManager } from '../UIS/baom';
import Shops from '../UIS/shop/shops';


@ccclass('S06')
export default class S06 extends SXX {
    Snumber="S06"
    JX:boolean=false;
    cType: string ="human"
    MaxHP:number=6;
    JX1: string[]=["S迅猛","S敏捷","S强壮"];
JX2: string[]=["S左右勾拳","S升龙"];
xll:boolean=false
    start () {
        this.target=this.node.getComponent(Character)
       // this.target.t1.push(this)
//      this.node.getChildByName("name").getComponent(Label).string="拳击手"   

//       this.node.getComponent(Character).TNJJ[3]-=2;

//      /*/
this.target.turn3.push(this);
this.target.walk3.push(this);
        this.node.getComponent(Character).changeE=function(pre:string) {

                if (pre=="Hun") {
                        if (this.color=="Blue") {
                           GeZiManager.Bhun+=1
                        }else{GeZiManager.Rhun+=1}
                        GeZiManager.getHUN();
                     }else{
                     
                     for (let m of this.UI){
                        if(m instanceof sideUI) {
                       
                           
                          m.setEQ(pre)
                     
                          break;
                     
                        }}}

 SubtitleManager.show(
                                        {
                                            bgSprite: null,
                                            image1:this.node.getComponent(SXX).Toux,
                                            text1: "装备了",
                                            image2: this.node.parent.getComponent(Shops).find(10,pre) ,
                                            text2: GeZiManager.skillDataMap[pre].name,
                                            duration: 3
                                        })

       this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(5,8,0)
          setTimeout(() => {
             this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
          },900);
          //this.node.getChildByName("equ").getComponent(Label).string=pre;
          let k
          switch (pre[0]) {
                case 'A': 
              
         
 
                   break;
                   case 'B': 
              
                  if(this.body!=null){      this.body.remove();
                   this.node.removeComponent(""+this.body.TheNumber)
                }
                   this.node.addComponent(pre)
                   if (k instanceof BXX) {
                   this.body=k}
                 //  this.node.getChildByName("B").getComponent(Label).string=this.node.getComponent(pre).Cname
                   this.node.getComponent(Cspine).changE(pre,1);
                   break;
                   case 'C': 
                   if(this.shose!=null){    this.shose.remove();}
                   this.node.removeComponent(""+this.shose.TheNumber)
                   this.node.addComponent(pre);
                   k=this.node.getComponent(pre)
                     if (k instanceof CXX) {
                   this.shose=k}
                   this.node.getComponent(Cspine).changE(pre,1);
                  // this.node.getChildByName("C").getComponent(Label).string=this.node.getComponent(pre).Cname
            //this.node.getComponent(Cspine).changE(pre,1);
            break
                   case 'D': 
                   if(this.accessory!=null){ this.accessory.remove();  this.node.removeComponent(""+this.accessory.TheNumber)}
                   this.node.addComponent(pre)
              k=this.node.getComponent(pre)
                   if (k instanceof DXX) {
                      this.accessory=k
                   }
         
                   //this.node.getChildByName("D").getComponent(Label).string=this.node.getComponent(pre).Cname
                   this.node.getComponent(Cspine).changE(pre,1);
                   break;
       
                default:return
                   break;
             }
       
          }//换装备
        }
  
     
xl(){
        MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],2,GeZiManager.PCP.Pturn,"Qi-")
   

// this.xll=true
// this.target.TNJJ[0]+=1
// this.target.TNJJ[1]+=1
      //  this.node.parent.getComponent(JNUM).JNF("S升龙",this.target.ZB)

 if ( GeZiManager.GeZi==-6 ) {
        MessageCenter.MakeSHMessage("AM", GeZiManager.GeZis,1, this.node.getComponent(Character).Pturn, "turn6")    
        this.node.parent.getComponent(JNUM).JNF("S右勾拳",this.target.ZB) 
 } else{MessageCenter.MakeSHMessage("AM", GeZiManager.GeZis,1, this.node.getComponent(Character).Pturn, "turn4"),this.node.parent.getComponent(JNUM).JNF("S左勾拳",this.target.ZB) }




console.log(this.node.getComponent(Character).Pturn)
if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(GeZiManager.GeZis);}}
  MessageCenter.MakeSHMessage("AM", GeZiManager.GeZis, 1,this.node.getComponent(Character).Pturn, "wuli")
  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3),this.node.getComponent(Character).Pturn,"TN-")
AudioManager.instance.ZJP("attack",0)

  if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(GeZiManager.GeZis);}}


GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
GeZiManager.TNC[3]=4
GeZiManager.Bu.push(2);

}



oo(){}






Walk3(ZB: number): void {
       if (this.JX) {    this.target.TN+=this.target.weapon.getTNC(3)+ this.target.weapon.TNJ; this.target.weapon.attack()}
}

Turn3(N?: number): void {
 if (this.JX) {
         let an=[]
 
      if ( N==6 ) { let AF = [3,2,6]
        let i = 0;
        switch (this.node.getComponent(Character).faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        this.node.getComponent(Character).turn6(AF);

        }
        let an: number[] = [];
        for (let mannger of AF) {



        an.push(this.node.getComponent(Character).findGe(mannger, 1));

        }
        MessageCenter.MakeSHMessage("AM", GeZiManager.GeZis,1, this.node.getComponent(Character).Pturn, "turn6")    
        this.node.parent.getComponent(JNUM).JNF("S右勾拳",this.target.ZB) 
 } else{
        
      
      
        let AF = [1,2,4]
        let i = 0;
        switch (this.node.getComponent(Character).faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        this.node.getComponent(Character).turn6(AF);

        }
        let an: number[] = [];
        for (let mannger of AF) {



        an.push(this.node.getComponent(Character).findGe(mannger, 1));

        }

      
        
        
        
        
        MessageCenter.MakeSHMessage("AM",an,1, this.node.getComponent(Character).Pturn, "turn4"),this.node.parent.getComponent(JNUM).JNF("S左勾拳",this.target.ZB) }





if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
  MessageCenter.MakeSHMessage("AM", an, 1,this.node.getComponent(Character).Pturn, "wuli")


  if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
     }  

}




T1(turn: number): void {

}
        skill2(): void {
        state.ST=9;
        GeZiManager.DLLM="S06-R"
        find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
        GeZiManager.qing();
        MessageCenter.MakeMessage("UIManager", "change", -1);
      
        let AF = [1,2,4]
        let i = 0;
        switch (this.node.getComponent(Character).faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        this.node.getComponent(Character).turn6(AF);

        }
        let an: number[] = [];
        for (let mannger of AF) {



        an.push(this.node.getComponent(Character).findGe(mannger, 1));

        }

        GeZiManager.GeZis = [].concat(an);
        for(let c of GeZiManager.YuanGong){


        if(GeZiManager.GeZis.includes(c.ZB)){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();

        }
        GeZiManager.GeZi=-4


        }

        skill3(): void {
                state.ST=9;
                GeZiManager.DLLM="S06-L"
                find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
                GeZiManager.qing();
                MessageCenter.MakeMessage("UIManager", "change", -1);
              
                let AF = [3,2,6]
                let i = 0;
                switch (this.node.getComponent(Character).faceTo) {
                case 6: i = 1;
                break;
                case 8: i = 2;
                break;
                case 4: i = 3;
                break;
                }
        
        
                for (let n = 1; n <= i; n++) {
                this.node.getComponent(Character).turn6(AF);
        
                }
                let an: number[] = [];
                for (let mannger of AF) {
        
        
        
                an.push(this.node.getComponent(Character).findGe(mannger, 1));
        
                }
        
                GeZiManager.GeZis = [].concat(an);
                for(let c of GeZiManager.YuanGong){
        
        
                if(GeZiManager.GeZis.includes(c.ZB)){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
        
                }
                GeZiManager.GeZi=-6
        
        
                }



skill1(){
        GeZiManager.qing();
        MessageCenter.MakeMessage("UIManager", "change", -1);
        state.ST=9;
        GeZiManager.DLLM="S06"
        let AF = [1,3]
        let i = 0;
        switch (this.node.getComponent(Character).faceTo) {
        case 6: i = 1;
        break;
        case 8: i = 2;
        break;
        case 4: i = 3;
        break;
        }


        for (let n = 1; n <= i; n++) {
        this.node.getComponent(Character).turn6(AF);

        }
        let an: number[] = [];
        for (let mannger of AF) {



        an.push(this.node.getComponent(Character).findGe(mannger, 1));

        }

        GeZiManager.GeZis = [].concat(an);

        let c = new Message("", GeZiManager.GeZis, 1);
        for (let m of GeZiManager.YuanGong) {


        m.red();
        if(GeZiManager.BanMove.includes(m.ZB)==false){
        m.ReceiveMessage(c);}

        }


  }
  remove(){ 

    }
QDS(n: number): void {
        if (n<0) {
        this.xl()
        }else{
      
        MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],3,GeZiManager.PCP.Pturn,"Qi-")
        MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],3,GeZiManager.PCP.Pturn,"TN-")
        if(GeZiManager.PCP.walk2!=null){for(let w of GeZiManager.PCP.walk2){w.Walk2(GeZiManager.GeZi);}}
        GeZiManager.PCP.To(n,0.6);MessageCenter.MakeMessage("UIManager","change",1);
        if(GeZiManager.PCP.walk3!=null){for(let w of GeZiManager.PCP.walk3){w.Walk3(GeZiManager.PCP.ZB);}}}
        this.node.parent.getComponent(JNUM).JNF("S蝴蝶步",this.target.ZB)
}
choseS(n:string): void {
        switch (n) {
        case "S敏捷":GeZiManager.shanchu(this.JX1,"S敏捷");

        break;

        case "S强壮":GeZiManager.shanchu(this.JX1,"S强壮");
        MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"MaxHP+")
        MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"HP+")

        break;
        break;
        case "S迅猛":  GeZiManager.shanchu(this.JX1,"S迅猛");this.target.TNJJ[3]-=1

        break;
        case "S左右勾拳":if(this.target.weapon.TheNumber=="A506"){
        this.target.attack3.push(this.target.weapon)
        this.target.weapon.Attack3([]);
        }
        GeZiManager.shanchu(this.JX2,"S左右勾拳");
        break;

        case "S升龙":  GeZiManager.shanchu(this.JX2,"S升龙");this.target.TNJJ[3]-=1

        break;



        default:
        break;
        }
      //  console.log(n)
}
NWNA(e:string[],n:number){

        function A1(arr) {
//   return arr.filter(item =>(!item.startsWith('A')));
        }


        let j=A1(e)
        let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)
        let a

        return e



  }
  getTO (n: number):string[] {
        switch(n){

        case 1:return ["S迅猛","S敏捷","S强壮"]

        case 2:

        return ["S左右勾拳","S升龙",this.JX1[0]]

        case 3:
        let a=this.getRA(["FU0",'FU1','FU2','FU3'],1)
        return [this.JX1[0],this.JX2[0],a[0]]
        default:
        let k="qi"
        let k1=this.mArr1Arr2(this.JX1,this.JX2)
        if ( this.mArr1Arr2(this.JX1,this.JX2).length>0) {
        k= this.mArr1Arr2(this.JX1,this.JX2)[0]
        }
        let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
        if ( this.mArr1Arr2(this.JX1,this.JX2).length>1) {
        o= this.mArr1Arr2(this.JX1,this.JX2)[1]
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
                              image2: this.skiil4,
                              text2: "",
                              duration: 5
                          }
                         )
        }else{ this.JX=false}//幻灭
       
        
        
    
      }
getTNC(n:number){


let k= GeZiManager.PCP.TNJJ
let l =GeZiManager.TNC
if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
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
// 
// import Character from "../BASE/Character";
// import Cspine from "../BASE/spineANDgif/Cspine";
// import { gif } from "../BASE/spineANDgif/gif";
// import GeZiManager from "../Manager/GeZiManager";
// import { Message } from "../Message/Message";
// import MessageCenter from "../Message/MessageCenter";
// import JNUM from "../UIS/else/JNUmanager";
// import weapon from "../equipment/weapon/weapon";
// import state from "../game/time/state";
// import turn from "../game/time/turn";
// 
// import SXX from "./SXX";
// 
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class S06 extends SXX {
// 
//     Snumber="S06"
//     JX:boolean=false;
//     cType: string ="human"
//     MaxHP:number=6;
//     JX1: string[]=["S迅猛","S敏捷","S强壮"];
// JX2: string[]=["S左右勾拳","S升龙"];
// xll:boolean=false
//     start () {
//      this.target=this.node.getComponent(Character)
//      this.target.t1.push(this)
//       this.node.getChildByName("name").getComponent(Label).string="拳击手"   
//    
//        this.node.getComponent(Character).TNJJ[3]-=2;
// 
//       /*/
//        this.node.getComponent(Character).changeE=function(pre:string) {
// 
//         this.node.getChildByName("shadow").getComponent(gif).moveToNextFrame(5,8,0)
//   setTimeout(() => {
//      this.node.getChildByName("shadow").getComponent(gif).changeF(5,1)
//   }, 600);
//   this.node.getChildByName("equ").getComponent(Label).string=pre;
// 
//   switch (pre[0]) {
//     
//            case 'B': 
//       
//           if(this.body!=null){      this.body.remove();
//            this.node.removeComponent(""+this.body.TheNumber)
//         }
//            this.node.addComponent(pre)
//            this.body=this.node.getComponent(pre)
//            this.node.getChildByName("B").getComponent(Label).string=this.node.getComponent(pre).Cname
//            break;
//            case 'C': 
//            this.shose.remove();
//            this.node.removeComponent(""+this.shose.TheNumber)
//            this.node.addComponent(pre);
//            this.shose=this.node.getComponent(pre)
// 
//            this.node.getChildByName("C").getComponent(Label).string=this.node.getComponent(pre).Cname
//    this.node.getComponent(Cspine).changE(pre,1);
//            case 'D': 
//            if(this.accessory!=null){ this.accessory.remove();  this.node.removeComponent(""+this.accessory.TheNumber)}
//            this.node.addComponent(pre)
//            this.accessory=this.node.getComponent(pre)
//            this.node.getChildByName("D").getComponent(Label).string=this.node.getComponent(pre).Cname
//           
//            break;
//           
//            break;
// 
//         default:
//            break;
//      }
// 
//   }*/
//         }
//   
//      
// 
// xl(){
//   MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],2,GeZiManager.PCP.Pturn,"Qi-")
//   MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],3,GeZiManager.PCP.Pturn,"TN-")
//   this.target.weapon.SH++;
//  this.xll=true
//  this.target.TNJJ[0]+=1
//  this.target.TNJJ[1]+=1
//  this.node.parent.getComponent(JNUM).JNF("S升龙",this.target.ZB)  
// }
// 
// T1(turn: number): void {
//   
// }
// 
// 
// 
//         skill2(): void {
//           state.ST=9;
//           GeZiManager.DLLM="S06"
//         let a  = GeZiManager.PCP.ZB
//         find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
//         
//         for(let c of GeZiManager.YuanGong){
//         
//         
//         if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
//         
//         }
//         GeZiManager.GeZi=-2
//         
//         
//         }
// 
// 
// 
// 
// 
// 
// skill1(){
//     GeZiManager.qing();
//     MessageCenter.MakeMessage("UIManager", "change", -1);
//    state.ST=9;
//             GeZiManager.DLLM="S06"
//     let AF = [1,3]
//     let i = 0;
//     switch (this.node.getComponent(Character).faceTo) {
//       case 6: i = 1;
//         break;
//       case 8: i = 2;
//         break;
//       case 4: i = 3;
//         break;
//     }
// 
// 
//     for (let n = 1; n <= i; n++) {
//       this.node.getComponent(Character).turn6(AF);
// 
//     }
//     let an: number[] = [];
//     for (let mannger of AF) {
// 
// 
// 
//       an.push(this.node.getComponent(Character).findGe(mannger, 1));
// 
//     }
// 
//     GeZiManager.GeZis = [].concat(an);
// 
//     let c = new Message("", GeZiManager.GeZis, 1);
//     for (let m of GeZiManager.YuanGong) {
// 
// 
//       m.red();
// if(GeZiManager.BanMove.includes(m.ZB)==false){
//       m.ReceiveMessage(c);}
// 
//     }
// 
// 
//   }
// 
//   remove(){ 
//    
//     }
// 
// QDS(n: number): void {
// if (n==-2) {
//   this.xl()
// }else{
//   let k=0
//   if (this.BL[2]>0) {
//   k=-1
//   this.node.parent.getComponent(JNUM).JNF("S蝴蝶步",this.target.ZB)  
// }
// MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],3+k,GeZiManager.PCP.Pturn,"Qi-")
// MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],4+2*k,GeZiManager.PCP.Pturn,"TN-")
//   if(GeZiManager.PCP.walk2!=null){for(let w of GeZiManager.PCP.walk2){w.Walk2(GeZiManager.GeZi);}}  
//   GeZiManager.PCP.To(n,0.6);MessageCenter.MakeMessage("UIManager","change",1);
//   if(GeZiManager.PCP.walk3!=null){for(let w of GeZiManager.PCP.walk3){w.Walk3(GeZiManager.PCP.ZB);}}}
//   this.node.parent.getComponent(JNUM).JNF("S蝴蝶步",this.target.ZB)  
// }
// 
// choseS(n:string): void {
//   switch (n) {
//       case "S敏捷":GeZiManager.shanchu(this.JX1,"S敏捷");
//           
//           break;
//          
//           case "S强壮":GeZiManager.shanchu(this.JX1,"S强壮");    
//           MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"MaxHP+")
//           MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"HP+")
//           
//           break;    
//           break;
//           case "S迅猛":  GeZiManager.shanchu(this.JX1,"S迅猛");this.target.TNJJ[3]-=1
//           
//           break;
//           case "S左右勾拳":if(this.target.weapon.TheNumber=="A506"){
//       this.target.attack3.push(this.target.weapon)
//       this.target.weapon.Attack3([]);
//           }
//            GeZiManager.shanchu(this.JX2,"S左右勾拳");
//           break;
//          
//           case "S升龙":  GeZiManager.shanchu(this.JX2,"S升龙");this.target.TNJJ[3]-=1
//           
//           break;
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
// 
// 
// 
// 
// NWNA(e:string[],n:number){
// 
//   function A1(arr) {
//    return arr.filter(item =>(!item.startsWith('A')));
// }
// 
// 
// let j=A1(e)
//   let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],3)    
//   let a
// 
//   return e
//   
//   
//   
//   }
// 
// 
//   getTO (n: number):string[] {
//     switch(n){
// 
// case 1:return ["S迅猛","S敏捷","S强壮"]
// 
// case 2:
// 
// return ["S左右勾拳","S升龙",this.JX1[0]]
// 
// case 3:
//   let a=this.getRA(["FU0",'FU1','FU2','FU3'],1)
//   return [this.JX1[0],this.JX2[0],a[0]]
// default: 
// let k="qi"
// let k1=this.mArr1Arr2(this.JX1,this.JX2)
//     if ( this.mArr1Arr2(this.JX1,this.JX2).length>0) {
//         k= this.mArr1Arr2(this.JX1,this.JX2)[0] 
//     }
//     let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
//     if ( this.mArr1Arr2(this.JX1,this.JX2).length>1) {
//        o= this.mArr1Arr2(this.JX1,this.JX2)[1] 
//    }
//     
//    return[k,o,"TNS"]
// }
// }
// 
// 
// 
// 
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
//  
// if (n[0]>=1) {
//    
//   if (this.BL[0]==0) {
//    this.target.TNJJ[3]-=1
//    this.node.parent.getComponent(JNUM).JNF("S迅猛",this.target.ZB)  
//   }
//   this.BL[0]+=1 
// }else{ 
//   if (this.BL[0]>0) {
//     this.target.TNJJ[3]+=1
//         
//   }
//   
//   
//   this.BL[1]*=0
// 
//   
// }//迅猛
// 
//  
//  
//   if (n[1]>=1) {
//    
//     if (this.BL[1]==0) {
//       MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"MaxHP+")
//           MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"HP+")
// 
//           this.node.parent.getComponent(JNUM).JNF("S强壮",this.target.ZB)  
//     }
//     this.BL[1]+=1 
//   }else{ 
//     if (this.BL[1]>0) {
//       MessageCenter.MakeSHMessage('AM', [GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"MaxHP-")
//           
//     }
//     
//     
//     this.BL[1]*=0
// 
//     
//   }//强壮
//   
// 
// 
// 
// 
//   if (n[3]>=1) {
//     this.BL[2]+=1
//     this.node.parent.getComponent(JNUM).JNF("S敏捷",this.target.ZB) 
//   }else{  this.BL[2]*=0}//敏捷
// 
//   
//   if (n[2]>=1) {
//     this.BL[3]+=1
//   }else{  this.BL[3]*=0}//升龙拳
//  
//   
//   
//   if (turn.round>=7){
//     this.BL[4]+=1
//   }else{  this.BL[4]*=0}//左右勾拳
// 
// 
// 
// 
// }
// 
// }
