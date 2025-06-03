// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Label } from 'cc';
const {ccclass, property} = _decorator;


import tree from "../../node/Dixing/tree";
import Character from "../BASE/Character";
import Cspine from "../BASE/spineANDgif/Cspine";
import state from "../game/time/state";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import JNUM from "../UIS/else/JNUmanager";
import SXX from "./SXX";
import BUI from "../UIS/BUI";
import { SpriteFrame } from 'cc';
import sideUI from '../UIS/sideUI';
import  gif1  from '../BASE/spineANDgif/gif';
import DXX from '../equipment/accessory/DXX';
import { SubtitleManager } from '../UIS/baom';
import Shops from '../UIS/shop/shops';

@ccclass('S00')
export default class S00 extends SXX{
   
    JX1: string[]=["S拱白菜2","S风险投资2","S存钱罐2","S劳猪2"];
   JX2: string[]=["S拱白菜2","S风险投资2","S存钱罐2","S劳猪2"];
   JX3: string[]=[];//"S金猪靶罢2"
   
   
    Snumber="S00"
    JX:boolean=false;
    cType: string ="animal"
    ZZ:string[]=["animal"]
mkl:boolean=false
wkl:boolean=false
   @property(SpriteFrame) 
wan:SpriteFrame=null
    JZ:boolean=false;
    target:Character=null;
    qq:number=null;
    start(): void {
        this.node.getChildByName("name").getComponent(Label).string="小猪"
        this.node.getComponent(Character).behurt2.push(this);
        this.target=this.node.getComponent(Character);
      //  this.target.tt="animal"
        this.node.getComponent(Character).attack3.push(this);
        this.node.getComponent(Character).t3.push(this);
        this.node.getComponent(Character).attack1.push(this);
        this.node.getComponent(Character).dead2.push(this);
//       this.node.getComponent(Character).t1.push(this);
//       this.node.getComponent(Character).t3.push(this);
//       GeZiManager.P1.qi3.push(this);
//       GeZiManager.P2.qi3.push(this);
//       GeZiManager.P3.qi3.push(this);
//       GeZiManager.P4.qi3.push(this);
//       GeZiManager.P5.qi3.push(this);
//       GeZiManager.P6.qi3.push(this);
        GeZiManager.P1.qi2.push(this);
        GeZiManager.P2.qi2.push(this);
        GeZiManager.P3.qi2.push(this);
        GeZiManager.P4.qi2.push(this);
        GeZiManager.P5.qi2.push(this);
        GeZiManager.P6.qi2.push(this);
        this.node.getComponent(Character).changeE=function (pre:string) {
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
                               }, 600);
                               this.node.getChildByName("equ").getComponent(Label).string=pre;
                               let k
                            
        switch (pre[0]) {
                case 'D': 
                if(this.accessory!=null){ this.accessory.remove(); this.accessory.destroy() }
                this.node.addComponent(pre)
           k=this.node.getComponent(pre)
                if (k instanceof DXX) {
                   this.accessory=k
                }
      
                //this.node.getChildByName("D").getComponent(Label).string=this.node.getComponent(pre).Cname
              //  this.node.getComponent(Cspine).changE(pre,1);
                break;
        }}
    }
       Attack1(): void {
        if (this.BL[7]>0) {


        GeZiManager.Tcharacter=null
//           MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOneC")

        MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.faceTo,0.4],this.target.Pturn,"move")
        this.node.parent.getComponent(JNUM).JNF("S拱白菜2",this.target.ZB)
//            MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
        }
       }
Attack3(an:number[]) {
//   console.log(an[0])
//   console.log(this.target.faceIs(an[0]))




        if (this.BL[6]>0) {
        GeZiManager.Tcharacter=null
        MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOneC")

        if(GeZiManager.Tcharacter==null||this.target.qi>=GeZiManager.Tcharacter.HP){
//       MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
        MessageCenter.MakeSHMessage("AM",an,[this.target.turn8([this.target.faceIs(an[0])])[0],0.3],this.target.Pturn,"move")

        MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
        if(this.BL[7]==0){this.node.parent.getComponent(JNUM).JNF("S拱白菜",this.target.ZB)}

        }
        }

}
T3(): void {
        
  
        if (this.target.HP>0) {
                this.target.ST()
                this.target.ZBW(false,this.target.walkWay)    
        }
 
}
    
Qi2(n:number,Pturn:number){


        if (this.BL[0]>0&&Pturn==this.target.Pturn&&this.target.PPC()) {
        if(n<0) {

        let c= this.target.MaxTN-this.target.TN
        if(c<-n){    MessageCenter.MakeSHMessage("AM",[this.target.ZB],c,this.target.Pturn,"TN+")
        if (this.BL[1]>0){  MessageCenter.MakeSHMessage("AM",[this.target.ZB],-n-c,this.target.Pturn,"Qi+")
        this.node.parent.getComponent(JNUM).JNF("S劳猪2",this.target.ZB)
        }

        }else{
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],-n,this.target.Pturn,"TN+")

        this.node.parent.getComponent(JNUM).JNF("S劳猪",this.target.ZB)
        }



        }
        }




        let qa=this.target.qi

        let asd=[GeZiManager.P1.qi,GeZiManager.P2.qi,GeZiManager.P3.qi,GeZiManager.P4.qi,GeZiManager.P5.qi,GeZiManager.P6.qi];
        let s=[] ;
        for(let y of asd){if(y>=qa){s.push(y)}}
        if(this.JZ){if(s.length>1||qa<5){
   //     console.log(qa)
   //     console.log(s)
        this.buJin()}}else{
        if(s.length<=1&&qa>=5){
        this.toJin();}

        }






}
Qi3(){


        if(this.target.qi<GeZiManager.PCP.qi&&this.target.getdis(GeZiManager.PCP.ZB)<=2&&this.target.Pturn!=GeZiManager.PCP.Pturn){
        this.node.parent.getComponent(JNUM).JNF("S存钱罐",this.target.ZB)
        this.node.parent.getComponent(JNUM).JNF("S存钱罐",GeZiManager.PCP.ZB)
        setTimeout(() => {
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.target.Pturn,"Qi-")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
        },900);
//         console.log(""+this.target.Pturn)

//         console.log(""+this.target.qi)
        }

}
skill2(){
        state.ST=9;
        GeZiManager.DLLM="S00-2"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a)
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
        let a=0
        if(this.JX){a=1}
        for(let manager of GeZiManager.YuanGong){
        manager.getFar(3+a);

        }



}
skill1(){
        state.ST=9;
        GeZiManager.DLLM="S00-1"
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
        let a=new Message("",[65],-1)
        manager.ReceiveMessage(a)
        }
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")


        let a=0
        if(this.JX){a=1}
        for(let manager of GeZiManager.YuanGong){
        manager.getFar(3+a);

        }



}
QDS(n: number): void {
        let a=0
        if(this.JX){a=1}
        
        if (n>0) {
      
        let k=""
        let l=1
      
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],3-a,this.target.Pturn,"TN-")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],l,this.target.Pturn,"Qi-")
        MessageCenter.MakeSHMessage("AM",[n],1,this.target.Pturn,"TN+")
          MessageCenter.MakeSHMessage("AM",[n],1,this.target.Pturn,"Qi+")
        this.node.parent.getComponent(JNUM).JNF("S风险投资"+"",this.target.ZB)
        this.node.parent.getComponent(JNUM).JNF("S风险投资"+"",n)
        }else{
   
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],3-a,this.target.Pturn,"TN-")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
        MessageCenter.MakeSHMessage("AM",[-n],1,this.target.Pturn,"Qi-")
        this.node.parent.getComponent(JNUM).JNF("S存钱罐",this.target.ZB)
        this.node.parent.getComponent(JNUM).JNF("S存钱罐2",-n)




        }


}
toJin(){
        this.JZ=true;
////this.target.mk+=1;
////this.target.wk+=1;
        this.node.getComponent(Cspine).changeXT(1);



        this.target.Fus(-10)
       
       // console.log(   this.target.FU)
        this.node.parent.getComponent(JNUM).JNF("S金猪靶罢",this.target.ZB)


     //   console.log(this.target.TNJJ[0])


        //this.getJNF(this.target.FU);
}
buJin(){
        this.JZ=false;
//   this.target.mk-=1;
//   this.target.wk-=1;

        this.node.getComponent(Cspine).changeXT(0);


     
        console.log("kkk")
        this.target.BFUs(-10)

        this.getJNF(this.target.FU);
}
Dead2(): void {
        this.qq=this.target.qi;
        if (this.target.killp) {
        MessageCenter.MakeSHMessage("AM",[this.target.killp.ZB],this.qq,this.target.Pturn,"Qi+")
        this.node.parent.getComponent(JNUM).JNF("S存钱罐",this.target.killp.ZB)
        }

}
remove(): void {
        GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this)
        GeZiManager.shanchu(this.node.getComponent(Character).walk25,this)
        GeZiManager.shanchu(this.node.getComponent(Character).dead2,this)
        GeZiManager.shanchu(GeZiManager.P1.qi2,this)
        GeZiManager.shanchu(GeZiManager.P2.qi2,this)
        GeZiManager.shanchu(GeZiManager.P3.qi2,this)
        GeZiManager.shanchu(GeZiManager.P4.qi2,this)
        GeZiManager.shanchu(GeZiManager.P5.qi2,this)
        GeZiManager.shanchu(GeZiManager.P6.qi2,this)



        GeZiManager.shanchu(GeZiManager.P1.qi3,this)
        GeZiManager.shanchu(GeZiManager.P2.qi3,this)
        GeZiManager.shanchu(GeZiManager.P3.qi3,this)
        GeZiManager.shanchu(GeZiManager.P4.qi3,this)
        GeZiManager.shanchu(GeZiManager.P5.qi3,this)
        GeZiManager.shanchu(GeZiManager.P6.qi3,this)
        this.destroy()
}
choseS(n:string): void {
        switch (n) {
        case "S拱白菜2":this.Attack3=function(an:number[]) {
        console.log(an[0])
        console.log(this.target.faceIs(an[0]))
        GeZiManager.Tcharacter=null
        MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOne")


//           MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
        MessageCenter.MakeSHMessage("AM",an,[this.target.turn8([this.target.faceIs(an[0])])[0],0.3],this.target.Pturn,"move")

        MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.target.FU[3]+this.target.FU[4]+this.target.FU[5],this.target.Pturn,"TN+")


        }
        GeZiManager.shanchu(this.JX1,"S拱白菜2")
        break;
        case "S存钱罐2":this.Qi3=function(){
        if(this.target.qi<GeZiManager.PCP.qi&&this.target.getdis(GeZiManager.PCP.ZB)<=2+this.target.FU[1]+this.target.FU[4]+this.target.FU[5]&&this.target.Pturn!=GeZiManager.PCP.Pturn){
        setTimeout(() => {
        if(!this.target.teammates.includes(GeZiManager.PCP)){MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.target.Pturn,"Qi-")}
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
        },900);
//                     console.log(""+this.target.Pturn)

//                     console.log(""+this.target.qi)
        }

        }
        GeZiManager.shanchu(this.JX2,"S存钱罐2")
        break

        case "S劳猪2":this.Qi2=function(n:number,Pturn:number){


        let qa=this.target.qi+this.target.FU[0]+this.target.FU[1];+this.target.FU[2];+this.target.FU[3];;

        let asd=[GeZiManager.P1.qi,GeZiManager.P2.qi,GeZiManager.P3.qi,GeZiManager.P4.qi,GeZiManager.P5.qi,GeZiManager.P6.qi];
        let s=[] ;
        for(let y of asd){if(y>=qa){s.push(y)}}
        if(this.JZ){if(s.length>1||qa<5){  this.buJin()}}else{
        if(s.length<=1&&qa>=5){
        this.toJin();}

        }


        if (Pturn==this.target.Pturn&&this.target.PPC()) {
        if(n<0) {
        let c= this.target.MaxTN- this.target.TN
        let a=-n+this.target.FU[0]+this.target.FU[4]+this.target.FU[5]
        if(c<a){    MessageCenter.MakeSHMessage("AM",[this.target.ZB],c,this.target.Pturn,"TN+")
        MessageCenter.MakeSHMessage("AM",[this.target.ZB],a-c,this.target.Pturn,"Qi+")
        }else{    MessageCenter.MakeSHMessage("AM",[this.target.ZB],a,this.target.Pturn,"TN+")}

        }     this.node.parent.getComponent(JNUM).JNF("S劳猪2",this.target.ZB)
        }}
        GeZiManager.shanchu(this.JX2,"S劳猪2")
        break;



        case "S风险投资2":               GeZiManager.shanchu(this.JX1,"S风险投资2")
        break;
        case "S金猪靶罢2": this.JX3=[];this.Qi2(0,this.target.Pturn)
        break;


        default:
        break;
        }
}
NWNA(e:string[],n:number){


        function A1(arr) {
//       return arr.filter(item => (item.startsWith('D')));
        }
        let c1 =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],4)
        let a

////let j=A1(e)
////j=this.mArr1Arr2(j,c1)
//    /*
        switch (this.target.NWS) {
        case 1:  a=this.mArr1Arr2(["TNS","TNS","TNS","TNS"],["A125", "A127","C03", "D11","C04", "C02", "B08", "D04", "D07"]);return a
        break
        case 2:a=this.mArr1Arr2(this.JX1,this.JX1);

        break;
        case 3:a=this.mArr1Arr2(this.JX1,this.JX1);

        break;
        case 4:a=this.mArr1Arr2(this.JX1,this.JX2);

        break;


        default:a=this.mArr1Arr2(this.JX2,this.JX2);
        break;
        }

//     */


        return e



    }
getTO (n: number):string[] {
        switch(n){

        case 1:return ["S拱白菜2","S风险投资2","S存钱罐2"]

        case 2:return ["S拱白菜2","S风险投资2","S存钱罐2"]

        case 3:return ["S拱白菜2","S风险投资2","S存钱罐2"]
        }
}
getJNF(n1: number[]): void {
      
     
if (this.getFUn()>=3) {
      this.JX=true  ;
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
}else{ this.JX=false}
find("Canvas/Main Camera/UIManager/BUIManager/BUI").getComponent(BUI).TNST()
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
// import { log } from "console";
// import tree from "../../node/Dixing/tree";
// import Character from "../BASE/Character";
// import Cspine from "../BASE/spineANDgif/Cspine";
// import state from "../game/time/state";
// import turn from "../game/time/turn";
// import GeZiManager from "../Manager/GeZiManager";
// import { Message } from "../Message/Message";
// import MessageCenter from "../Message/MessageCenter";
// import { SHMessage } from "../Message/SHMessage";
// import JNUM from "../UIS/else/JNUmanager";
// 
// import SXX from "./SXX";
// import BUI from "../UIS/BUI";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class S00 extends SXX{
//    
//     JX1: string[]=["S拱白菜2","S风险投资2","S存钱罐2","S劳猪2"];
//    JX2: string[]=["S拱白菜2","S风险投资2","S存钱罐2","S劳猪2"];
//    JX3: string[]=[];//"S金猪靶罢2"
//    
//    
//     Snumber="S00"
//     JX:boolean=false;
//     cType: string ="animal"
//     ZZ:string[]=["animal"]
// 
// 
// mkl:boolean=false
// wkl:boolean=false
// 
//     
//     JZ:boolean=false;
//     target:Character=null;
//     qq:number=null;
//     start(): void {
//         this.node.getChildByName("name").getComponent(cc.Label).string="小猪"      
//         this.node.getComponent(Character).behurt2.push(this);
//         this.target=this.node.getComponent(Character);
//         this.node.getComponent(Character).attack3.push(this);
//         this.node.getComponent(Character).attack1.push(this);
//         this.node.getComponent(Character).dead2.push(this);
//        this.node.getComponent(Character).t1.push(this);
//        this.node.getComponent(Character).t3.push(this);
//        GeZiManager.P1.qi3.push(this);
//        GeZiManager.P2.qi3.push(this);
//        GeZiManager.P3.qi3.push(this);
//        GeZiManager.P4.qi3.push(this);
//        GeZiManager.P5.qi3.push(this);
//        GeZiManager.P6.qi3.push(this);
//         GeZiManager.P1.qi2.push(this);
//         GeZiManager.P2.qi2.push(this);
//         GeZiManager.P3.qi2.push(this);
//         GeZiManager.P4.qi2.push(this);
//         GeZiManager.P5.qi2.push(this);
//         GeZiManager.P6.qi2.push(this);
//         this.node.getComponent(Character).changeE=function (pre:string) {
//             switch (pre[0]) { 
//             case 'D': 
//             if(this.accessory!=null){ this.accessory.remove();  this.node.removeComponent(""+this.accessory.TheNumber)}
//             this.node.addComponent(pre)
//             this.accessory=this.node.getComponent(pre)
//             this.node.getChildByName("D").getComponent(cc.Label).string=this.node.getComponent(pre).Cname
//            
//             break;
//         }}
//     }
//        Attack1(): void {
//         if (this.BL[7]>0) {
//     
// 
//             GeZiManager.Tcharacter=null
//            MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOneC")
//            
//             MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.faceTo,0.4],this.target.Pturn,"move")
//             this.node.parent.getComponent(JNUM).JNF("S拱白菜2",this.target.ZB)  
//             MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
//             }
//        }
// Attack3(an:number[]) {
//    console.log(an[0])
//    console.log(this.target.faceIs(an[0]))
// 
// 
//   
// 
//  if (this.BL[6]>0) { 
//     GeZiManager.Tcharacter=null
//        MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOneC")
//     
//     if(GeZiManager.Tcharacter==null||this.target.qi>=GeZiManager.Tcharacter.HP){
//        MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
//         MessageCenter.MakeSHMessage("AM",an,[this.target.turn8([this.target.faceIs(an[0])])[0],0.3],this.target.Pturn,"move")
//      
//         MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
//         if(this.BL[7]==0){this.node.parent.getComponent(JNUM).JNF("S拱白菜",this.target.ZB)}
//     
//      }
//        }
// 
// }
// 
// 
// 
// 
// T1(): void {
//   
// 
// 
// }
//     
// Qi2(n:number,Pturn:number){
//  
// 
//   if (this.BL[0]>0&&Pturn==this.target.Pturn&&this.target.PPC()) {
//     if(n<0) {
//    
//        let c= this.target.MaxTN-this.target.TN
//        if(c<-n){    MessageCenter.MakeSHMessage("AM",[this.target.ZB],c,this.target.Pturn,"TN+")
//            if (this.BL[1]>0){  MessageCenter.MakeSHMessage("AM",[this.target.ZB],-n-c,this.target.Pturn,"Qi+")
//                this.node.parent.getComponent(JNUM).JNF("S劳猪2",this.target.ZB)  
//            }
//    
//        }else{   
//             MessageCenter.MakeSHMessage("AM",[this.target.ZB],-n,this.target.Pturn,"TN+")
//       
//             this.node.parent.getComponent(JNUM).JNF("S劳猪",this.target.ZB)  
//            }
//        
//    
//     
//     }   
//    }
// 
// 
// 
// 
// let qa=this.target.qi
// 
// let asd=[GeZiManager.P1.qi,GeZiManager.P2.qi,GeZiManager.P3.qi,GeZiManager.P4.qi,GeZiManager.P5.qi,GeZiManager.P6.qi];
// let s=[] ;   
// for(let y of asd){if(y>=qa){s.push(y)}}
// if(this.JZ){if(s.length>1||qa<5){  
//     console.log(qa)
//     console.log(s)
//     this.buJin()}}else{
// if(s.length<=1&&qa>=5){   
//     this.toJin();}
// 
// }
// 
// 
// 
// 
// 
// 
// }
// 
// 
// Qi3(){
// 
// 
//     if(this.target.qi<GeZiManager.PCP.qi&&this.target.getdis(GeZiManager.PCP.ZB)<=2&&this.target.Pturn!=GeZiManager.PCP.Pturn){
//         this.node.parent.getComponent(JNUM).JNF("S存钱罐",this.target.ZB)  
//         this.node.parent.getComponent(JNUM).JNF("S存钱罐",GeZiManager.PCP.ZB)  
//         setTimeout(() => {
//     MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.target.Pturn,"Qi-")
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
//    },900);   
//          console.log(""+this.target.Pturn)
//       
//          console.log(""+this.target.qi)
//       }
// 
// }
// 
// skill2(){
//     state.ST=9;
//     GeZiManager.DLLM="S00-2"
//     MessageCenter.MakeMessage("UIManager","change",-1);
//     for(let manager of GeZiManager.YuanGong){
// let a=new Message("",[65],-1)
//         manager.ReceiveMessage(a)    
// }
// MessageCenter.MakeMessage("AM",turn.turn,"getZB")
// let a=0
// if(this.BL[5]>0){a=1}
// for(let manager of GeZiManager.YuanGong){
// manager.getFar(3+a);
// 
// }
// 
// 
// 
// }
// 
// 
// skill1(){
//     state.ST=9;
//     GeZiManager.DLLM="S00-1"
//     MessageCenter.MakeMessage("UIManager","change",-1);
//     for(let manager of GeZiManager.YuanGong){
// let a=new Message("",[65],-1)
//         manager.ReceiveMessage(a)    
// }
// MessageCenter.MakeMessage("AM",turn.turn,"getZB")
// 
// 
// let a=0
// if(this.BL[8]>0){a=1}
// for(let manager of GeZiManager.YuanGong){
// manager.getFar(3+a);
// 
// }
// 
// 
// 
// }
// 
// 
// QDS(n: number): void {
//   if (n>0) {
//     let a=0
//     let k="" 
//     let l=1
//     if(this.BL[4]>0){a=1,k="2",l=0}
//     if(this.BL[5]>0){a=1,k="3"}
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],4-a,this.target.Pturn,"TN-")  
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],l,this.target.Pturn,"Qi-")   
//     MessageCenter.MakeSHMessage("AM",[n],1,this.target.Pturn,"Qi+")   
//     this.node.parent.getComponent(JNUM).JNF("S风险投资"+"",this.target.ZB)  
//     this.node.parent.getComponent(JNUM).JNF("S风险投资"+"",n)   
//   }else{
//     let a=0
//     let k="" 
//  
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],3,this.target.Pturn,"TN-")  
//     MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")   
//     MessageCenter.MakeSHMessage("AM",[-n],1,this.target.Pturn,"Qi-")   
//     this.node.parent.getComponent(JNUM).JNF("S存钱罐"+"",this.target.ZB)  
//     this.node.parent.getComponent(JNUM).JNF("S存钱罐2"+"",n)   
// 
// 
// 
// 
//   }
//   
//     
// }
// 
// 
// 
// toJin(){
// this.JZ=true;
//this.target.mk+=1;
//this.target.wk+=1;
// this.node.getComponent(Cspine).changeXT(1);
// 
// 
// 
//     this.target.FU[5]+=1
//     this.target.FUST(0)
//     console.log(   this.target.FU)
//     this.node.parent.getComponent(JNUM).JNF("S金猪靶罢",this.target.ZB)  
// 
// 
// console.log(this.target.TNJJ[0])
// 
// 
// this.getJNF(this.target.FU);
// }
// buJin(){
//     this.JZ=false;
//    this.target.mk-=1;
//    this.target.wk-=1;
// 
//     this.node.getComponent(Cspine).changeXT(0);
// 
//  
//         this.target.FU[5]-=1
//         console.log("kkk")
//         this.target.FUST( this.target.FU[5]+1)
// 
//     this.getJNF(this.target.FU);
// }
// 
// 
// 
// Dead2(): void {
//     this.qq=this.target.qi;
//     if (this.target.killp) {
//         MessageCenter.MakeSHMessage("AM",[this.target.killp.ZB],this.qq,this.target.Pturn,"Qi+")   
//         this.node.parent.getComponent(JNUM).JNF("S存钱罐",this.target.killp.ZB)  
//     }
// 
// }
// 
// remove(): void {
//     GeZiManager.shanchu(this.node.getComponent(Character).behurt2,this)
//     GeZiManager.shanchu(this.node.getComponent(Character).walk25,this)
//     GeZiManager.shanchu(this.node.getComponent(Character).dead2,this)
//     GeZiManager.shanchu(GeZiManager.P1.qi2,this)
//     GeZiManager.shanchu(GeZiManager.P2.qi2,this)
//     GeZiManager.shanchu(GeZiManager.P3.qi2,this)
//     GeZiManager.shanchu(GeZiManager.P4.qi2,this)
//     GeZiManager.shanchu(GeZiManager.P5.qi2,this)
//     GeZiManager.shanchu(GeZiManager.P6.qi2,this)
// 
// 
// 
//     GeZiManager.shanchu(GeZiManager.P1.qi3,this)
//     GeZiManager.shanchu(GeZiManager.P2.qi3,this)
//     GeZiManager.shanchu(GeZiManager.P3.qi3,this)
//     GeZiManager.shanchu(GeZiManager.P4.qi3,this)
//     GeZiManager.shanchu(GeZiManager.P5.qi3,this)
//     GeZiManager.shanchu(GeZiManager.P6.qi3,this)
//     this.destroy()
// }
// 
// 
// choseS(n:string): void {
//     switch (n) {
//         case "S拱白菜2":this.Attack3=function(an:number[]) {
//             console.log(an[0])
//             console.log(this.target.faceIs(an[0]))
//            GeZiManager.Tcharacter=null
//            MessageCenter.MakeSHMessage("AM",an,1,this.target.Pturn,"getOne")
//         
// 
//            MessageCenter.MakeSHMessage("AM",[ZB],1,this.target.Pturn,"HP-");
//            MessageCenter.MakeSHMessage("AM",an,[this.target.turn8([this.target.faceIs(an[0])])[0],0.3],this.target.Pturn,"move")
// 
//            MessageCenter.MakeSHMessage("AM",[this.target.ZB],[this.target.turn8([this.target.faceIs(an[0])])[0],0.4],this.target.Pturn,"move")
//            MessageCenter.MakeSHMessage("AM",[this.target.ZB],this.target.FU[3]+this.target.FU[4]+this.target.FU[5],this.target.Pturn,"TN+")
//        
//         
//         }
//         GeZiManager.shanchu(this.JX1,"S拱白菜2") 
//             break;
//             case "S存钱罐2":this.Qi3=function(){
//                 if(this.target.qi<GeZiManager.PCP.qi&&this.target.getdis(GeZiManager.PCP.ZB)<=2+this.target.FU[1]+this.target.FU[4]+this.target.FU[5]&&this.target.Pturn!=GeZiManager.PCP.Pturn){
//                setTimeout(() => {
//                if(!this.target.teammates.includes(GeZiManager.PCP)){MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.target.Pturn,"Qi-")}
//                 MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"Qi+")
//                },900);   
//                      console.log(""+this.target.Pturn)
//                   
//                      console.log(""+this.target.qi)
//                   }
//             
//             }
//             GeZiManager.shanchu(this.JX2,"S存钱罐2") 
// break
// 
//             case "S劳猪2":this.Qi2=function(n:number,Pturn:number){
//  
// 
//                 let qa=this.target.qi+this.target.FU[0]+this.target.FU[1];+this.target.FU[2];+this.target.FU[3];;
//                 
//                 let asd=[GeZiManager.P1.qi,GeZiManager.P2.qi,GeZiManager.P3.qi,GeZiManager.P4.qi,GeZiManager.P5.qi,GeZiManager.P6.qi];
//                 let s=[] ;   
//                 for(let y of asd){if(y>=qa){s.push(y)}}
//                 if(this.JZ){if(s.length>1||qa<5){  this.buJin()}}else{
//                 if(s.length<=1&&qa>=5){   
//                     this.toJin();}
//                 
//                 }
//                 
//                 
//                 if (Pturn==this.target.Pturn&&this.target.PPC()) {
//                  if(n<0) {
//                   let c= this.target.MaxTN- this.target.TN
//                   let a=-n+this.target.FU[0]+this.target.FU[4]+this.target.FU[5]
//                   if(c<a){    MessageCenter.MakeSHMessage("AM",[this.target.ZB],c,this.target.Pturn,"TN+")
//                     MessageCenter.MakeSHMessage("AM",[this.target.ZB],a-c,this.target.Pturn,"Qi+")
//                   }else{    MessageCenter.MakeSHMessage("AM",[this.target.ZB],a,this.target.Pturn,"TN+")}
//                 
//                  }     this.node.parent.getComponent(JNUM).JNF("S劳猪2",this.target.ZB)  
//                 }}
//                GeZiManager.shanchu(this.JX2,"S劳猪2") 
//                 break;
// 
// 
// 
//                 case "S风险投资2":               GeZiManager.shanchu(this.JX1,"S风险投资2") 
//        break;
//        case "S金猪靶罢2": this.JX3=[];this.Qi2(0,this.target.Pturn)
//        break;
//        
//        
//                 default:
//             break;
//     }
// }
// 
// 
// 
// 
// 
// 
// NWNA(e:string[],n:number){
// 
// 
//     function A1(arr) {
//        return arr.filter(item => (item.startsWith('D')));
//     }
//     let c1 =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],4)
//      let a
// 
//let j=A1(e)
//j=this.mArr1Arr2(j,c1)
//     /*
//      switch (this.target.NWS) {
//         case 1:  a=this.mArr1Arr2(["TNS","TNS","TNS","TNS"],["A125", "A127","C03", "D11","C04", "C02", "B08", "D04", "D07"]);return a
//         break
//         case 2:a=this.mArr1Arr2(this.JX1,this.JX1);
//              
//              break;
//              case 3:a=this.mArr1Arr2(this.JX1,this.JX1);
//              
//              break;
//              case 4:a=this.mArr1Arr2(this.JX1,this.JX2);
//              
//              break;
//            
//      
//          default:a=this.mArr1Arr2(this.JX2,this.JX2);
//              break;
//      }
//      
//      */
//  
// 
//      return e
//      
//     
//     
//     }
// 
// getTO (n: number):string[] {
//     switch(n){
// 
// case 1:return ["S拱白菜2","S风险投资2","S存钱罐2"]
// 
// case 2:return ["S拱白菜2","S风险投资2","S存钱罐2"]
// 
// case 3:return ["S拱白菜2","S风险投资2","S存钱罐2"]
//     }
// }
// 
// getJNF(n1: number[]): void {
//     function sumArray(numbers: number[]): number {
//       return numbers.reduce((sum, current) => sum + current, 0);
//   }
//    let n=n1.concat()
//    
//    
//    for (let index = 0; index < n[4]+n[5]; index++) {
// for (let i = 0; i < 4; i++) {
// n[i]++;
//     
// }
//    }
//    console.log(n)
//    
//     if (n[0]>=1) {
//       this.BL[0]+=1
//     }else{  this.BL[0]*=0}//劳猪1
//   
//     if (n[0]>=2) {
//       this.BL[1]+=1
//     }else{  this.BL[1]*=0}//劳猪2
//     
//     if (n[1]>=1) {
//         this.BL[2]+=1
//         if (!this.wkl) {
//           this.target.wk+=1
//           this.wkl=true
//         }
//       }else{  this.BL[2]*=0
// 
//           if (this.wkl) {
//               this.target.wk-=1
//               this.wkl=false
//             }  
//       }//猪皮
//    
//       if (n[1]>=2) {
//         this.BL[3]+=1
//         if (!this.mkl) {
//           this.target.mk+=1
//           this.mkl=true
//           this.target.M+=1
//         }
//       }else{  this.BL[3]*=0
// 
//           if (this.mkl) {
//               this.target.mk-=1
//               this.mkl=false
//              this.target.Mjia(-1)
//             }  
//       }//猪皮2
//     
//     if (n[2]>=1) {
//       this.BL[4]+=1
//     }else{  this.BL[4]*=0}//风险投资
//     
//     
//     if (n[2]>=2) {
//       this.BL[5]+=1
//     }else{  this.BL[5]*=0}//风险投资2
// 
//     if (n[3]>=1) {
//         this.BL[6]+=1
//       }else{  this.BL[6]*=0}//拱白菜
//       
//       
//       if (n[3]>=2) {
//         this.BL[7]+=1
//       }else{  this.BL[7]*=0}//拱白菜2
// 
//       if (sumArray(n)>=3) {
//         this.BL[8]+=1
//       }else{  this.BL[8]*=0}//存钱罐2
//   
//   
//   
//   
//     cc.find("Canvas/UIManager/BUIManager/BUI").getComponent(BUI).TNST() 
//   
//   
//     }
//   
//   
//   
//   
// }
