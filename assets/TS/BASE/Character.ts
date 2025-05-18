
import GeZiManager from "../Manager/GeZiManager";
import { SHMessage } from "../Message/SHMessage";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import SXX from "../Scharacter/SXX";
import HUI from "../UIS/HUI";
import ghostUI from "../UIS/ghostUI";
import sideUI from "../UIS/sideUI";
const { property, ccclass } = _decorator;

import weapon from "../equipment/weapon/weapon";

import state from "../game/time/state";
import turn from "../game/time/turn";
import player from "../game/player";


import AnimalManager from "../Manager/AnimalManager";
import GMessage from "../Message/GMessage";

import ComponentBase from "../BASE/ComponentBase";
import equipment from "../BASE/equipment";
import realThing from "../BASE/realThing";
import Obstacles from "./ Obstacles";
//import CHF from "../CHF";
import moveUI from "../UIS/BASEUI/moveUI";
import { gif1 } from "./spineANDgif/gif";
import MUI from "../UIS/MMUI/MUI";
import Cspine from "./spineANDgif/Cspine";
import MTX from "../../pictures/TX/MTX/MTX";
import shops from "../UIS/shop/shops";
import shopM from "../UIS/shop/ShopM";
import waterPp from "../../node/UI/HUI/waterPP";
import NewClass from "../UIS/ghostUI";
import Shops from "../UIS/shop/shops";
import TNManager from "../Manager/TNanager";
import BUI from "../UIS/BUI";
import endGame from "../UIS/endgame";
//import KHD2 from "../Message/KHD2";
import CHF from "./CHF";
import label from "../UIS/label";
import CustomButton from "./CButton";
import DXX from "../equipment/accessory/DXX";
import CXX from "../equipment/shose/CXX";
import BXX from "../equipment/body/BXX";
import Countdown from "../UIS/else/time";
import A509 from "../equipment/weapon/SC/A509";
import ZManager from "../Manager/ZManager";
import BAOmMAN from "../UIS/else/BAOmMAN";
import NWshopUI from "../UIS/shop/NWshopUI";
import YSgod from "./YSgod";
import JJ from "../UIS/else/JJ";
import KHD2 from "../Message/KHD2";

import { _decorator, Camera, find, instantiate, Label, Prefab, SpriteAtlas, tween, UIOpacity, Vec3 } from "cc";
import S00 from "../Scharacter/S00";
import { SubtitleManager } from "../UIS/baom";
import { AudioManager } from "./music";
import Time from "../UIS/else/time";











@ccclass
export default class Character extends realThing {
 
FHCS:number=1
   t:number =1  ;//转身次数
   MaxT:number=1;
   LST: number = 10;//生命状态，存活，濒死，死亡等等
Snumber:number=0;
MaxTN:number=10;
TN:number=0;
addTN:number=5
TNS:number=0;
TNJJ:number[]=[0,0,0,0,0,0];
tt: string="human"
sex:string="man"

FJTN=0;
color:string='Blue'
FMXG:any[][]=[]
newFU:number=-1
NWS:number=3
TNF:number=1
bs:boolean=true
XDs:number=0;//行动数
   @property(SpriteAtlas)
   Atlas: SpriteAtlas = null;//通用图集
   @property(weapon)
   weapon:weapon = null;//武器
   @property(BXX)
   body:BXX =null//身体（盔甲） B
   @property(CXX)
   shose:CXX = null//鞋子 C
   @property(DXX)
   accessory:DXX = null//饰品 D
QIN:number[]=[0,0,0,0,0]
   @property(Prefab)
   HUI: Prefab = null;//头顶上的血条
FUI:boolean=false;
   @property(Prefab)
   ghostUI: Prefab = null;//死亡后的UI
sh:number=0;
   UI: ComponentBase[] = [];//自己的所有相关UI
   eqiupment: equipment[] = [];//自己的所有装备数组
  KTT:number=3;
   pre: Prefab = null;
killp:realThing=null;
 YCSH:number=0;
walkWay: number = 1;//移动方式，默认1，推石头0.5，斜走等后续确定。
MwalkWay: number = 1;
PwalkWay: number = 1;
@property(Number)
Pturn: number = 1;//玩家序号，轮次
   @property(Number)
   MaxHP: number = 5;//最大生命值/生命值上限
   HP: number = 5;//当前生命值
   qi: number = 1;//气数
   //qin:number=5;
   faceTo = 2;//面向，与数字键相同
   CJ: number = 0;//穿甲
   mk: number = 0;//魔抗
   wk: number = 0;//物抗
   GD:number=0//格挡
Bu:number[]=[]//本回合操作了什么

   ice:number=0;
teammates:Character[]=[];//队友
//CHF:character[]=[];
   //下面是各种时间的触发集
   t0: ComponentBase[] = [];
   t1: ComponentBase[] = [];
   shop1: ComponentBase[] = [];
   shop2: ComponentBase[] = [];
   shop3: ComponentBase[] = [];
   attack1: ComponentBase[] = [];
   attack2: ComponentBase[] = [];
   attack25: ComponentBase[] = [];
   attack3: ComponentBase[] = [];
   attack35:ComponentBase[] = [];
   magic1: ComponentBase[] = [];
   magic2: ComponentBase[] = [];
   magic3: ComponentBase[] = [];
   magic4: ComponentBase[] = [];
   mmc: ComponentBase[] = [];
   walk1:ComponentBase[] = [];
   walk2:ComponentBase[] = [];
   walk25:ComponentBase[] = [];
   walk3:ComponentBase[] = [];
   move1: ComponentBase[] = [];
   move2: ComponentBase[] = [];
   move3: ComponentBase[] = [];
   turn1: ComponentBase[] = [];
   turn2: ComponentBase[] = [];
   turn3: ComponentBase[] = [];
   behurt1: ComponentBase[] = [];
   behurt2: ComponentBase[] = [];
   behurt222: ComponentBase[] = [];
   behurt3: ComponentBase[] = [];
   hurt1: ComponentBase[] = [];
   hurt2: ComponentBase[] = [];
   hurt3: ComponentBase[] = [];
   cure1: ComponentBase[] = [];
   dead1: ComponentBase[] = [];
   dead2: ComponentBase[] = [];
   fh1:ComponentBase[]=[]
   t3: ComponentBase[] = [];
   kill3 :ComponentBase[] = [];
   qi1:ComponentBase[] = []; 
   qi2:ComponentBase[] = [];
   qi3:ComponentBase[] = [];
   XD1:ComponentBase[] = [];
   XD2:ComponentBase[] = [];
   xdm:boolean=true
turnBan:number[]=[0,0,0,0,0,0];//转身/移动/蓄气/攻击/法术/商店
turnD:number[]=[1,1,1,1,1,1];
MCD:number[]=[0,3,1,3,3,5]
    kcd: boolean=true;
   WAT: number=3;
   MAXWAT: number=3;
th:number=0;//水流变向
S02:number=0
HPm2:ComponentBase[] = [];
HPm3:ComponentBase[] = [];
wd1:ComponentBase[] = [];
//目录
//回合和基础方法137
//受伤死亡与生成235
//装备相关376
//移动与面向421
//蓄气和体能532
//
CHF:CHF[]=[]
FU:number[]=[]//火土水风万专
DLN:number=1;
delay:number=0
TheShy:boolean=false;
Fs:number=0
Ehun:number=0

//////////回合和基础方法///////////////////////////////////////////////////////////////////////////////////////////////////////////////

jk(){}
onLoad(): void {
   this.tname=this.node.getComponent(SXX).Snumber
   
}
   start() {
      this.node.setParent(find("Canvas/DituManager/New Node/AnimalManager"))
 //  this.weapon=this.node.getComponent(weapon) 
  // this.shose=this.node.getComponent(shose) 
   console.log(this.shose)
this.HP=this.MaxHP;

this.node.getComponent(Cspine).changeDirection(this.faceTo)  
    //  let HUI = instantiate(this.HUI)
      //HUI.setParent(this.node)
   this.node.addComponent(YSgod)  ;
   this.kill3.push(this) 

turn.Roo.push(this)

    

      switch (this.Pturn) {
         case 1: GeZiManager.P1 = this;//this.changeE("A162");

            break;
         case 2: GeZiManager.P2 = this;//this.changeE("B08");

            break;
         case 3: GeZiManager.P3 = this;//this.changeE("B06");

            break;
         case 4: GeZiManager.P4 = this;//this.changeE("B08");

            break;
         case 5: GeZiManager.P5 = this;//this.changeE("A242");

            break;
         case 6: GeZiManager.P6 = this;

            break;

         default:
            break;
      }
      switch (this.Pturn) {
         case 1:this.teammates=[GeZiManager.P3,GeZiManager.P5];

            break;
         case 2: this.teammates=[GeZiManager.P4,GeZiManager.P6];this.color="Red"

            break;
         case 3: this.teammates=[GeZiManager.P1,GeZiManager.P5]

            break;
         case 4: this.teammates=[GeZiManager.P2,GeZiManager.P6];this.color="Red"

            break;
         case 5: this.teammates=[GeZiManager.P1,GeZiManager.P3]

            break;
         case 6: this.teammates=[GeZiManager.P2,GeZiManager.P4];this.color="Red"

            break;

         default:
            break;
      }
console.log(GeZiManager.sideUI)
      for (let m of GeZiManager.sideUI) { m.setS(this.Pturn) }
      this.node.getChildByName("shadow").getComponent(gif1).setOpacity(53)
    
      console.log(this.node.getChildByName("shadow").getComponent(UIOpacity).opacity)
   }
/////////////////受伤死亡与生成//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   Bdead(killp:realThing) {
    if (this.bs) {
      this.LST=6;
    //  this.bs=false
      console.log(this.LST)
this.killp=killp;
      turn.Too.push(this);
      this.node.getComponent(Cspine).Bdie();
   if(this.dead1!=null) {for(let a of this.dead1){a.Dead1();}  }
      if(this.killp!=null){for(let k of this.killp.kill2){k.Kill2()}}
     setTimeout(() => {
      this.node.getChildByName("shadow").getComponent(gif1).changeF(15,1)
     }, 900);
      if (turn.turn==this.Pturn&&(KHD2.PT.includes(turn.turn)||MessageCenter.Text)){
      MessageCenter.MakeGMessage("AM",[0], turn.turn+1, turn.turn,"PASS");
   }

  SubtitleManager.show(
                {
                    bgSprite:this.color,
                    image1:this.node.getComponent(SXX).Toux,
                    text1: "进入了濒死状态",
                    image2:null ,
                    text2: "",
                    duration: 5
                }
               )


    }  else{this.dead()}
      
   }//濒死状态


   dead() {
if (this.LST!=-1) {
   this.LST=-1;

  
      MessageCenter.MakeSHMessage("AM",[this.ZB],0,this.Pturn,"Qi=")

    if (this.DiXing!="water") {
          MessageCenter.MakeSHMessage("AM",[this.ZB,this.Pturn],29,GeZiManager.PCP.Pturn,"FTP");
    }  

console.log(this.LST)
      GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
    //  GeZiManager.shanchu(this.node.parent.getComponent(AnimalManager).YuanGong,this)
      GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
      console.log(GeZiManager.BanMove.includes(this.ZB))
      endGame.endGame(this.Pturn%2);
    
      ///变鬼了
      for(let a of this.node.children){a.active=false;}
      this.ghost=true;
      this.node.getComponent(Cspine).Dead();
   
      //////
      
     // this.node.opacity = 100;
     // this.node.getChildByName("HUI").active = false;
      //this.node.getChildByName("qi").active = false;
      //this.node.width = 175; this.node.height = 200;
      //let ghost = instantiate(this.ghostUI)
     // ghost.setParent(this.node);
  // this.M=2;
  if(  this.node.getComponent(SXX).Snumber!="S02"){
  // this.node.getComponent(SXX).remove();
}
    //  this.UI.push(ghost.getComponent(ghostUI))

      if (turn.turn==this.Pturn&&(KHD2.PT.includes(turn.turn)||MessageCenter.Text)) {
         MessageCenter.MakeGMessage("AM",[0], turn.turn+1, turn.turn,"PASS");
      }

 
      if (KHD2.PT.includes(6)||MessageCenter.Text) {
        // this.node.parent.getComponent(ZManager).YYY();
        // this.node.parent.getComponent(ZManager).YYY();
      
      }
         
   
      if(this.dead2!=null) { for(let a of this.dead2){a.Dead2(this.Pturn);}}
  
   if(this.killp!=null){for(let k of this.killp.kill3){k.Kill3(this.Pturn)}}
   console.log(this.LST)
}

for(let c of this.teammates){
 

   MessageCenter.MakeSHMessage("AM",[c.ZB],2-this.teammates.length,this.Pturn,"Qi+")
}

if (this.killp) {
   MessageCenter.MakeSHMessage("AM",[this.killp.ZB],2-this.teammates.length,this.Pturn,"Qi+")
}

if(this.color=="Red"){
   GeZiManager.Rhun+=1
   
}else{  GeZiManager.Bhun+=1; }
GeZiManager.getHUN();
  SubtitleManager.show(
                {
                    bgSprite:this.color,
                    image1:this.node.getComponent(SXX).Toux,
                    text1: "寄了",
                    image2:null ,
                    text2: "",
                    duration: 5
                }
               )

    
}
   



   //死亡状态



   Bd() {

      switch (this.LST) {

         case 10: this.LST = 10;
            break;

         case -1: this.LST = -1;
            break;
         case 0: this.LST = -1;

            break;

         default: this.LST -= 1;
            break;
      }

   }//濒死时每回合进行

   DunDefenceSH(Dun1: weapon, MB: realThing, AT: weapon) {

      if (MB != null) {
         let Pface: number[] = [].concat(Dun1.Pface);
console.log(MB.faceIs(this.ZB))
console.log(this.PfaceFinal(this.faceTo, Pface))
         if (this.PfaceFinal(this.faceTo, Pface).includes(MB.faceIs(this.ZB))) {
let a= Dun1.Pnumber;
console.log( Dun1)
AudioManager.instance.ZJP("hit",4);
            Dun1.PD(AT.PJ);GeZiManager.BOL=true;
            Dun1.FJ();
            if(a-AT.CJ<0){return 0;}
         else    this.node.getComponentInChildren(MTX).playFrameAnimation1("Dun");  return  a-AT.CJ;
         } else return 0;


      } else return 0;
   }//受到伤害前，伤害结算时进行的盾牌格挡



   getHurt(sh: number,killp:realThing,k:number) {
    let c=-1
      if (killp) {
c=killp.Pturn
     }
     
      if(this.HPm2!=null){for(let w of this.HPm2){w.HPM2(-sh,c,this.Pturn);}}
    setTimeout(() => {
      
  
    
    
      this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(13,15,0)
      setTimeout(() => {
         this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
      }, 800);
      
      
      this.node.getComponent(Cspine).Bhit();
     console.log(sh)
    
      let remainingDamage = Math.max(0,sh);
     let iceReduction = Math.min(remainingDamage,this.ice);
let ic=this.ice
      remainingDamage -= iceReduction;
     this.ice -= iceReduction;if(this.ice<=0&&ic>0){this.ice=0;this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("iceN");this.ST();}else{}
      let gdReduction = Math.min(remainingDamage, this.GD);
      console.log(gdReduction)
      remainingDamage -= gdReduction;
      this.GD-= gdReduction;if(this.GD<0){this.GD=0}
      console.log(this.HP)


      if (Math.max(0,remainingDamage)>0) {
         AudioManager.instance.ZJP("hit",6);
      }
   this.HP-=Math.max(0,remainingDamage);

//console.log(killp.ZB)

      for (let mannger of this.UI) {
         if (mannger instanceof HUI) {
            mannger.setHP()
            mannger.setGD(this.GD,this.ice)
         }
         if (mannger instanceof sideUI) {
            mannger.setHP()
         }

      }
      GeZiManager.dm=0;
      for(let a of this.behurt3){a.Behurt3(sh,killp,k,this.Pturn)}
      if(this.HPm3!=null){for(let w of this.HPm3){w.HPM3();}}
      if(this.LST>0&&this.LST!=10){this.killp=killp;this.dead()}
      if (this.HP<= 0&&this.LST==10) { this.HP = 0; this.Bdead(killp); }
  
    
   
      this.PFUI("HP-",Math.max(0,remainingDamage));
   }, 200);
   }//受到伤害


   UIchange(message: Message) {

      for (let mannger of this.UI) {

         mannger.ReceiveMessage(message);


      }
   }//UI同步信息



    TP(ZB:number) {
       AudioManager.instance.ZJP("hit",27)

    
      this.ZB=ZB;

      if (this.Pturn % 2 == 0) { this.faceTo = 4 } else { this.faceTo = 6 }

      this.moveto(0,this.ZB);
      this.move(5,1);
   
      this.faceChange();
    
      this.node.active=true;
      if(this.Pturn==6){MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi+")}
  
  if(turn.turn%2==0){GeZiManager.redC(this.ZB,this.x);}else{ GeZiManager.blueC(this.ZB,this.x);}
      
     
      turn.turn++;
      if (state.ST==0.5) {
         state.ST=1 
      }
      this.setXY(0.8);
      state.Pchange() 
     
     
console.log(turn.turn)
console.log( state.ST)


if(this.Pturn==6&&turn.round<=1){
  state.statechange();

  MessageCenter.MakeMessage("AM",turn.turn,"getC"); 
  state.Pchange() ;  
  GeZiManager.PCP.Tstart();
  console.log(turn.turn)
  console.log( state.ST)
 }
this.node.getComponent(Cspine).currentSpine.animation="SHOW"
   }//开局放置生成的方法
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

//////装备相关//////////////////////////////////////////////////////////
attack(an:number[]){
   this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(9,12,0)
   setTimeout(() => {
      this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
      this.ST();
   }, 600);
     this.node.getComponent(Cspine).attackAIN(this.weapon.Wtype)
   setTimeout(() => {
      if(this.weapon.DT){
         if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
         }
         this.weapon.QD(an); }else{  this.weapon.attack(); }
}, 200);
   
  
 


//console.log(this.weapon.getComponent(weapon).Wtype)

}
changeE(pre:string) {
console.log(pre)

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

   }}


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
        if ( pre[1]=="5"&& pre[2]=="0")  {
         this.weapon.levelup(pre)
        }else{
       //   var a =require(""+this.weapon.TheNumber)
         // var b=require(""+pre)
       //// this.node.removeComponent(this.weapon.TheNumber)
        this.weapon.remove();
        console.log(pre)
          this.node.addComponent(pre);
          k=this.node.getComponent(pre)
          if (k instanceof weapon) {
            this.weapon=k}
       
          this.weapon.node=this.node

          
          this.node.getComponent(Cspine).changE(pre,1);}
  
 
            break;
            case 'B': 
       
           if(this.body!=null){      this.body.remove();
           this.body.destroy()
         }
            this.node.addComponent(pre)
            k=this.node.getComponent(pre)
            if (k instanceof BXX) {
            this.body=k}
          //  this.node.getChildByName("B").getComponent(Label).string=this.node.getComponent(pre).Cname
            this.node.getComponent(Cspine).changE(pre,1);
            break;
            case 'C': 
            if(this.shose!=null){    this.shose.remove();        this.shose.destroy()}
    
          

            this.node.addComponent(pre)
            k=this.node.getComponent(pre)
              if (k instanceof CXX) {
            this.shose=k}
            this.node.getComponent(Cspine).changE(pre,1);
           // this.node.getChildByName("C").getComponent(Label).string=this.node.getComponent(pre).Cname
     //this.node.getComponent(Cspine).changE(pre,1);
     break
            case 'D': 
            if(this.accessory!=null){ this.accessory.remove(); this.accessory.destroy() }
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
   }
   }//换装备


//findE太长了写在ComponentBase里面
/////////////////////////////////////////////////////////////

////移动与面向///////////////////////////////////////////////////////////////////////////
ZBW(T:boolean,n:number){
  
  if (!this.YS) {
   
    //   find("Canvas").getComponent(YP).PlayAudioclip("bhyp",false,2)
  }
  
  
  
  
  
   console.log(n)
   if (n==0) {
      if(this.walkWay!=0&&this.walkWay!=2){AudioManager.instance.ZJP("hit",0)}
this.Walk(T)
   }
else{
if (n!=0) {
    this.node.getComponent(Cspine).changeDirection(this.faceTo)
     this.node.getComponent(Cspine).currentSpine.animation="Walk"
        this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(5,8,0)
    setTimeout(() => {
     this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
  },600);
    setTimeout(() => {
     this.node.getComponent(Cspine).idle()
    }, 800);
    AudioManager.instance.ZJP("hit",0)
}
  
 
    
   if(this.walk1!=null){for(let w of this.walk1){w.Walk1();}}
     
   
  
        switch (n) {
       
           case 2:let a= this.findGe(this.faceTo,2);
     
        
           if(GeZiManager.BanMove.includes(a)||a==66){}else{
              if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
           if(this.kcd){this.To(a,0.5);}}
          if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
          if (this.PPC()&&T) {
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
      }
      
           break;
           case 1: 
           if(this.ghost){}else{
              if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
              if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
              if (this.PPC()&&T) {
                    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
              }
         
             // if (this.kcd) {
          
           this.move(this.faceTo, 1,true);   this.moveto(0.8, this.ZB)
  
           if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
         //}     
      
         
           
             
          
             
           } 
              break;
           case 0.5:
            MessageCenter.MakeSHMessage("AM", [this.findGe(this.faceTo, 1)], [this.faceTo,0.8],0.6, "move"); 
            if (this.PPC()&&T) {
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1]+1,0,"TN-");  }
           this.ST();
           if (!GeZiManager.BanMove.includes(this.findGe(this.faceTo, 1))) {
              MessageCenter.MakeSHMessage("AM", [this.ZB], [this.faceTo,0.8],this.Pturn, "move"); 
           }
       // MessageCenter.MakeSHMessage("AM", [this.ZB], this.faceTo, this.Pturn, "walk")
              break;
              case 8:
                 console.log(this.findGe(this.turn8([this.faceTo])[0],1))
              if(this.ghost){}else{
                 if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
                 if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
                 if(this.kcd){ this.move(this.turn8([this.faceTo])[0],1,true);}
                 console.log(this.kcd)
              if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
                 this.moveto(0.8, this.ZB)}
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
          break;
                 default: if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
           if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
           MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
           this.ST();//点击移动按钮的后续，取决于移动方式
           this.kcd=true;
        if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
              break;
        }
       
   
   
     
        }}








Walk(T:boolean){

 this.node.getComponent(Cspine).changeDirection(this.faceTo)
   this.node.getComponent(Cspine).currentSpine.animation="Walk"
  this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(5,8,0)
  setTimeout(() => {
   this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
},600);
  setTimeout(() => {
   this.node.getComponent(Cspine).idle()
  }, 800);
  
 if(this.walk1!=null){for(let w of this.walk1){w.Walk1();}}
   
 

      switch (this.walkWay) {
     
         case 2:let a= this.findGe(this.faceTo,2);
   
     
         if(GeZiManager.BanMove.includes(a)||a==66){}else{
            if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
         if(this.kcd){this.To(a,0.6);}}
        if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
        if (this.PPC()&&T) {
         MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
   }
    
         break;
         case 1: 
         if(this.ghost){
            if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
            if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
            if (this.PPC()&&T) {
               MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
         }
            this.move(this.faceTo, 1,true); this.moveto(0.8, this.ZB)
         if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
         }else{
            if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
            if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
            if (this.PPC()&&T) {
                  MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],0,"TN-");  
            }
       
           // if (this.kcd) {
        
         this.move(this.faceTo, 1,true);   this.moveto(0.8, this.ZB)

         if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
       //}     
    
       
         
           
        
           
         } 
            break;
         case 0.5:MessageCenter.MakeSHMessage("AM", [this.findGe(this.faceTo, 1)], [this.faceTo,0.8],0.6, "move");     if (this.PPC()&&T) {
         MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1]+1,0,"TN-");  }
         this.ST();
         if (!GeZiManager.BanMove.includes(this.findGe(this.faceTo, 1))) {
            MessageCenter.MakeSHMessage("AM", [this.ZB], [this.faceTo,0.8],this.Pturn, "move"); 
         }
     // MessageCenter.MakeSHMessage("AM", [this.ZB], this.faceTo, this.Pturn, "walk")
            break;
            case 8:
               console.log(this.findGe(this.turn8([this.faceTo])[0],1))
            if(this.ghost){}else{
               if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
               if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
               if(this.kcd){ this.move(this.turn8([this.faceTo])[0],1,true);}
            if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
               this.moveto(0.8, this.ZB)}
        case 0:

        break;
               default: if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
         if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
      
      if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
            break;
      }
    
         this.ST();//点击移动按钮的后续，取决于移动方式
         this.kcd=true;
 
 
   GeZiManager.TNC[1]=3;this.Bu.push(1);this.ST()
      }

move(face: number, dis: number,zi?:boolean): void {
  let a=this.DiXing
   super.move(face,dis,zi)
          
   console.log(this.DiXing)
   if (!GeZiManager.boxs.includes(this.ZB)) {
      this.waterP(a)  
   }


  
}

waterP(a:string){ if(this.DiXing=="water"){  
   console.log(this.DiXing)
      if (this.DiXing!=a) {
         this.node.getComponentInChildren(MTX).playFrameAnimation1("water")
         
        
      }
   }else{      this.node.getComponentInChildren(MTX).playFrameAnimation1("waterE")
     
   }
   this.TNT();
   this.TNC(this.TN)}


/*setXY(time:n): void {
   super.setXY()
   //this.node.getComponent(Cspine).a8.zIndex=this.node.zIndex-1
}*/
    
GX(face: number) {
   this.CMget();
 
   if (this.CanTmove.includes(face)) {

      return true;
   } else return false;




}//更新附近位置关系
   faceChange() {
console.log(this.xdm)
/*
      switch (this.faceTo) {
         case 2: this.node.getChildByName("face").angle = 180;
            break;
         case 4: this.node.getChildByName("face").angle = 90
            ;

            break;
         case 6: this.node.getChildByName("face").angle = 270;

            break;
         case 8: this.node.getChildByName("face").angle = 0;

            break;

         default: this.node.getChildByName("face").angle = 180;
            break;
      }*/
this.node.getComponent(Cspine).changeDirection(this.faceTo)

GeZiManager.KCLR()

   }//转身后的显示同步，非数字箭头角色会删除







   

   PfaceFinal(faceTo: number, Pface: number[]) {
      let i = 0;
      switch (faceTo) {
         case 6: i = 1;
            break;
         case 8: i = 2;
            break;
         case 4: i = 3;
            break;
            default:i=0
               break;
      }
      let PfaceFinal: number[] = [].concat(Pface)
      for (let n = 1; n <= i; n++) {
         this.turn6(PfaceFinal);
      }


      return PfaceFinal;

   }//最终盾牌/武器的防护面（原始保护面需要与自身面向进行匹配）
UIC(){

   let A =find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(moveUI)
switch (this.faceTo) {
   case 2:  
      A.TX(8, "BAN");
      A.TX(2, "walk");
     A.TX(4, "turn4");
     A.TX(6, "turn6");
      break;
    case 4:
     A.TX(6, "BAN");
     A.TX(2, "turn6");
    A.TX(4, "walk");
    A.TX(8, "turn4");
      break;
    case 6:
      A.TX(4, "BAN");
      A.TX(2, "turn4");
      A.TX(6, "walk");
      A.TX(8, "turn6");
      break;
    case 8:
      A.TX(2, "BAN");
     A.TX(4, "turn6");
     A.TX(6, "turn4");
      A.TX(8, "walk");
      break;
  }
      
if(this.walkWay==0.5||this.node.getComponent(SXX).Snumber=="S14"){A.TX(this.PfaceFinal(this.faceTo,[2])[0], "推石头");}

  this.ST();








}
/////////////////////////////////////////////////////////////////////////



///////////蓄气与体能
useTNS(){
   let k=GeZiManager.PCP.TNS   

MessageCenter.MakeGMessage("AM",[this.ZB],k,this.node.getComponent(Character).Pturn,"TN+")
MessageCenter.MakeGMessage("AM",[this.ZB],-k,this.node.getComponent(Character).Pturn,"TNS")
}




TNT(){
  
   MessageCenter.MakeMessage("BUI", [1, 2, 3, 4, 5, 0], "Use");
   if (GeZiManager.PCP.weapon.BT&&GeZiManager.PCP.weapon.BTS==0) {
      if(this.TN<2){MessageCenter.MakeMessage("BUI", [3], "Ban");}
   }else{   if(this.TN<this.TNJJ[3]+GeZiManager.TNC[3]+GeZiManager.PCP.weapon.TNJ){MessageCenter.MakeMessage("BUI", [3], "Ban");}}
   

  console.log(this.TN<this.TNJJ[2]+GeZiManager.TNC[2])
   if(this.TN<this.TNJJ[2]+GeZiManager.TNC[2]){MessageCenter.MakeMessage("BUI", [2], "Ban");}
   if(this.TN<this.TNJJ[1]+GeZiManager.TNC[1]){MessageCenter.MakeMessage("BUI", [1], "Ban");}
   if(this.TN<this.TNJJ[0]+GeZiManager.TNC[0]){MessageCenter.MakeMessage("BUI", [0], "Ban");}
   find("Canvas/Main Camera/UIManager/BUIManager/BUI").getComponent(BUI).TNST();
   }
   
   TNC(n:number){
     if (n>10) {
      this.node.children[2].getComponent(gif1).changeF(10,1)
     }
      this.node.children[2].getComponent(gif1).changeF(n,1)
         this.node.children[2].children[0].getComponent(Label).string=""
      
     
   
   }
   TNJ(){    this.node.children[2].getComponent(gif1).changeF(this.TN,1)}
   



Cqi(n:number,m:SHMessage){
          AudioManager.instance.ZJP("hit",18,{
                        loop: false,
                        volume: 0.1,
                       })

   this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(9,12,0)
   setTimeout(() => {
      this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
   }, 900);
 if(this.qi1!=null){for(let w of this.qi1){w.Qi1(n);}}

this.qi+=n;
this.UIchange(m);
if(this.PPC()){this.ST();}
//this.TNT();

if(this.qi2!=null){for(let w of this.qi2){w.Qi2(n,this.Pturn,m);}}
}



getTG(N:string){

   switch (N) {
     case "sWater":  MessageCenter.MakeSHMessage("AM",[this.ZB],1,-1,"HP+")
       
       break;
       case "Hun": if(this.color=="Red"){
         GeZiManager.Rhun+=1
      }else{  GeZiManager.Bhun+=1}
      GeZiManager.getHUN();
       
       break;
case "EQ":shopM.getEQ(this.ZB);
break;


case "TP":
  
break;


     default:


     let v=GeZiManager.Bhun
     if (this.color=="Red") {
       v=GeZiManager.Rhun
     }
     console.log(N)
    let a=Number(extractNumbersFromString(N))
    console.log(GeZiManager.Bhun)
    console.log(this.qi+v)
    if(this.qi+v>=3&&!GeZiManager.BanMove.includes(a)&&a!=this.lastZB){
    
    
this.lastZB=this.ZB
    this.To(a,0)
      MessageCenter.MakeSHMessage("AM",[a],3-v,null,"Qi-")    
       
    }

    if (this.lastZB==a) {
      this.lastZB=0
    }
       break;
   }
   
   
   
   function extractNumbersFromString(str) {
      // 使用正则表达式匹配所有数字
      const matches = str.match(/\d+/g);
      // 如果没有匹配到，返回空数组
      if (!matches) {
          return [];
      }
      // 将匹配到的字符串数组转换为数字数组
      return matches.map(Number);
  }
   
   }



Fus(ch:number){
   console.log(this.FU)
   
if (this.FU.length<6) {
   

this.FU.push(ch)



for (let j of this.node.getChildByName("FU").children) {
   j.getComponent(gif1).spriteFrame=null
   
}


this.FU=this.rearrangeArray(this.FU)


console.log(this.FU)
let huo=0
let tu=0
let shui=0
let feng=0

for (let o of this.FU) {
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







 for (let index = 0; index < this.FU.length; index++) {



   let d
switch ( this.FU[index]) {
   case 0:d="Huo"
      
      break;
      case 0.5:d="Huo"
      
      break;
      case 1:d="Tu"
      
      break;
      case -1:d="Tu"
      
      break;
      case 2:d="Shui"
      
      break;
      case -2:d="Shui"
      
      break;
     case 3:d="Feng"
      break;   
      
      case -3:d="Feng"
      break;
   default:d="Wan"
      break;

  

}

this.node.getChildByName("FU").children[index].getComponent(gif1).spriteFrame= this.node.getChildByName("FU").children[index].getComponent(gif1).atlas1.getSpriteFrame(d)
  

}


   switch(ch){
   
      
    
    
    
        case 0:if (huo>1) {
      this.sh+=1
      if (huo==4) {
         this.node.getComponent(YSgod).FW[0]=1
      }
     }
     break;
     
     case 0.5:if (huo>1) {
      this.sh+=1

      if (huo==4) {
         this.node.getComponent(YSgod).FW[0]=1
      }
     }
     break;
     
     //火






 
     
 


     case 1:  if(tu==2){
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP+")
MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP+")
this.Mjia(+1);//质量+1
}
else if(tu==3){
//格挡+1
this.mk+=1;
this.wk+=1;
}
else if(tu==4){
this.node.getComponent(YSgod).FW[1]=1;//TN+1
}
     break;
     
     case -1:if(tu==2){
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP+")
MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP+")
this.Mjia(+1);//质量+1
}
else if(tu==3){
//格挡+1
this.mk+=1;
this.wk+=1;
}
else if(tu==4){
this.node.getComponent(YSgod).FW[1]=1;//TN+1
}
     break;


    //土 
   
    

     
     case 3:
     
     if (feng>1) {
      
     
      this.TNJJ[1]-=1
      
      if (feng==4) {
       this.node.getComponent(YSgod).FW[3]=1
      }}
      break;
     
     case -3:
     
     if (feng>1) {
      
     
      this.TNJJ[1]-=1
      
      if (feng==4) {
       this.node.getComponent(YSgod).FW[3]=1
      }}
      break;
     
     //风
     
    
     

     
    
     case 2:
     
     if (shui>1) {
      this.addTN+=1
      
      if (shui==4) {
       this.node.getComponent(YSgod).FW[2]=1
      }}
     break;
     case -2:
     
     if (shui>1) {
      this.addTN+=1
      
      if (shui==4) {
       this.node.getComponent(YSgod).FW[2]=1
      }}  
      break
     //水 
     
     
     case 10:if (huo>1) {
      this.sh+=1
      if (huo==4) {
         this.node.getComponent(YSgod).FW[0]=1
      }
     }

     if(tu==2){
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP+")
MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP+")
this.Mjia(+1);//质量+1
}
else if(tu==3){
//格挡+1
this.mk+=1;
this.wk+=1;
}
else if(tu==4){
this.node.getComponent(YSgod).FW[1]=1;//TN+1
}


if (feng>1) {
   
  
   this.TNJJ[1]-=1
   
   if (feng==4) {
    this.node.getComponent(YSgod).FW[3]=1
   }}

   if (shui>1) {
      this.addTN+=1
      
      if (shui==4) {
       this.node.getComponent(YSgod).FW[2]=1
      }}



break;


    
     
     case -10:if (huo>1) {
      this.sh+=1

      if (huo==4) {
         this.node.getComponent(YSgod).FW[0]=1
      }
     }

     if(tu==2){
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP+")
MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP+")
this.Mjia(+1);//质量+1
}
else if(tu==3){
//格挡+1

this.mk+=1;
this.wk+=1;
}
else if(tu==4){

this.node.getComponent(YSgod).FW[1]=1;//TN+1
}


if (feng>1) {
   
  
   this.TNJJ[1]-=1
   
   if (feng==4) {
    this.node.getComponent(YSgod).FW[3]=1
   }}


   if (shui>1) {
      this.addTN+=1
      
      if (shui==4) {
       this.node.getComponent(YSgod).FW[2]=1
      }}


     break;
 
 
     
     
     
     
}



this.node.getComponent(SXX).getJNF(this.FU)
this.UIchange(null)












}

   }



BFUs(ch:number){


   

  GeZiManager.shanchu(this.FU,ch)
      
      console. log(this.FU)

      for (let j of this.node.getChildByName("FU").children) {
         j.getComponent(gif1).spriteFrame=null
         
      }
      
      
      this.FU=this.rearrangeArray(this.FU)
      let huo=0
      let tu=0
      let shui=0
      let feng=0
      
      for (let o of this.FU) {
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
      
      
      
      
      
      
      
       for (let index = 0; index < this.FU.length; index++) {
      
         
      
         let d
      switch ( this.FU[index]) {
         case 0:d="Huo"
            
            break;
            case 0.5:d="Huo"
            
            break;
            case 1:d="Tu"
            
            break;
            case -1:d="Tu"
            
            break;
            case 2:d="Shui"
            
            break;
            case -2:d="Shui"
            
            break;
           case 3:d="Feng"
            break;   
            
            case -3:d="Feng"
            break;
         default:d="Wan"
            break;
      
        
      
      }
     
    this.node.getChildByName("FU").children[index].getComponent(gif1).spriteFrame= this.node.getChildByName("FU").children[index].getComponent(gif1).atlas1.getSpriteFrame(d)
      
         }
      
      
        
         switch(ch){
         
           
              
              case -10:if (huo>0) {
               this.sh-=1
         
               if (huo<4) {
                  this.node.getComponent(YSgod).FW[0]=0
               }
              }



              if(tu==1){
               MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP-")
         MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP-")
         this.Mjia(-1);//质量+1
         }
         else if(tu==2){
         //格挡+1
         MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP-")
         MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP-")
         this.mk-=1;
         this.wk-=1;
         }
         else if(tu==3){
            MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP-")
            MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP-")
         this.node.getComponent(YSgod).FW[1]=0;//TN+1
         }


         if (feng>0) {
            
           
            this.TNJJ[1]+=1
            
            if (feng==3) {
             this.node.getComponent(YSgod).FW[3]=0
            }}


            if (shui>0) {
               this.addTN-=1
               
               if (shui==4) {
                this.node.getComponent(YSgod).FW[2]=1
               }}
           
            break;
        
             
         
           
           case 0.5:if (huo>0) {
            this.sh-=1
      
            if (huo<4) {
               this.node.getComponent(YSgod).FW[0]=0
            }
           }
           break;
           
           //火
      
      
      
      
      
      
           
          
        
           
           case -1: if(tu==1){
            MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP-")
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP-")
      this.Mjia(-1);//质量+1
      }
      else if(tu==2){
      //格挡+1
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP-")
      MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP-")
      this.mk-=1;
      this.wk-=1;
      }
      else if(tu==3){
         MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP-")
         MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP-")
      this.node.getComponent(YSgod).FW[1]=0;//TN+1
      }
           break;
      
      
          //土 
         
          
         
           
           case -3:
           
           if (feng>0) {
            
           
            this.TNJJ[1]+=1
            
            if (feng==3) {
             this.node.getComponent(YSgod).FW[3]=0
            }}
            break;
           
           //风
           
       
           
          
           
         
           
           case -2:
           
           if (shui>1) {
            this.addTN-=1
            
            if (shui==4) {
             this.node.getComponent(YSgod).FW[2]=1
            }}  
           //水 
           break;
           
           
           
           
           
           
      }
      
    
   
      this.node.getComponent(SXX).getJNF(this.FU)
      this.UIchange(null)
      


}


















   





















 //////////////////////////////////////////////////////////  
 


   ReceiveMessage(message: Message) {

      if(this.LST!=-1){  

         
      if(message instanceof GMessage){
         for(let a of this. XD1){a.xd1(message,this.Pturn)}       


if(this.CHF!=null&&message.Command.includes(this.ZB)){for(let a of this.CHF){
if (a.SHC.includes(message.SHtype)==true) {
   MessageCenter.MakeSHMessage(message.Type,[a.ZB],message.Content,message.from,message.SHtype)
}


 
}}
if ((message.Command.includes(this.ZB) || message.Command[0] == 65)&&(this.PPC()||!this.ghost)&&this.xdm) {
switch (message.SHtype) {
    
  case "turn6": 

  if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"Qi-");
  }
  for(let m of this.turn1){m.Turn1(5)}
  this.faceTo = this.turn6([this.faceTo])[0]; this.faceChange(); 
  this.node.getComponentInChildren(MTX).playFrameAnimation1("turn6")
  for(let m of this.turn3){m.Turn3()}                        //逆时针转身
  MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.TNC[0]+this.TNJJ[0],0,"TN-");
  GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
 this.Bu.push(0);
 GeZiManager.TNC[0]=1;
 this.t--;this.UIC();
 console.log(this.CHF)
  break;

case "turn4": 
if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
}
for(let m of this.turn1){m.Turn1(4)}
this.faceTo = this.turn4([this.faceTo])[0]; this.faceChange();       
this.node.getComponentInChildren(MTX).playFrameAnimation1("turn4")
for(let m of this.turn3){m.Turn3()}    //顺时针转身
MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.TNC[0]+this.TNJJ[0],0,"TN-");
this.Bu.push(0);
GeZiManager.TNC[0]=1;
this.t--;this.UIC();
console.log(this.CHF)
break;
case "qi":
  




this.node.getComponent(Cspine).xuqiAIN(200);
setTimeout(() => {
this.Cqi(message.Content,message);
if(this.qi3!=null){for(let w of this.qi3){w.Qi3();}}
this.PFUI("Qi+",message.Content)

GeZiManager.TNC[2]=3;
this.ST()
this.Bu.push(2);
}, 350);
MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[2]+this.TNJJ[2],0,"TN-");


break;


case "walk": 

if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
}
this.ZBW(true,0);
 
   

  break;
  case "walkL": 
  if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
}
this.ZBW(true,message.Content);
 


  break;

case "attack": this.attack(message.Content);   
  break;

  
   case "skill1":// this.weapon.getComponent(weapon).attack(); this.ST();
  break;
   
   case "skill2": //this.weapon.getComponent(weapon).attack(); this.ST();
  break;
   
   case "skill3": //this.weapon.getComponent(weapon).attack(); this.ST();
  break;
  case "UTNS":
   this.TNS=0
   MessageCenter.MakeSHMessage("AM",[this.ZB],message.Content,this.Pturn,"TN+");
     MessageCenter.MakeSHMessage("AM",[this.ZB],this.TNS,this.node.getComponent(Character).Pturn,"TNS")
   break

  case "FTP": MessageCenter.MakeSHMessage("AM",message.Command,message.Content,message.from,message.SHtype);
  switch (message.Content) {
   case 3:MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[5]+this.TNJJ[5],this.Pturn,"TN-");
   GeZiManager.TNC[5]=2;
   if(this.PPC()){ this.ST()}
   GeZiManager.PCP.Bu.push(5);
      
      break;
      case 4:MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[4]+this.TNJJ[4],this.Pturn,"TN-");
      GeZiManager.TNC[4]=4;
      if(this.PPC()){ this.ST()}
      GeZiManager.PCP.Bu.push(4);
         
         break;


     
   default:
      break;
  }
  break;
   }
   this.XDs++;
   if (this.XDs==6) {
      this.turnBan=[1,1,1,1,1,1,1,1,1]
   }


   
}
for(let a of this. XD2){a.xd2(message)}    
}
    else  if (message instanceof SHMessage) {


      for(let a of this. XD1){a.xd1(message,this.Pturn)}   
        // if(this.CHF!=null){for(let a of this.CHF){if(this.jk){a.ReceiveMessage(message)}}}
        if(this.CHF!=null&&message.Command.includes(this.ZB)&&MessageCenter.Text){for(let a of this.CHF){
         if (a.SHC.includes(message.SHtype)==true) {
            MessageCenter.MakeSHMessage(message.Type,[a.ZB],message.Content,message.from,message.SHtype)
         }
         
         
          
         }}
        if (((message.Command.includes(this.ZB) || message.Command[0] == 65))&&this.xdm) {
            switch (message.SHtype) {
                case"TN+":this.TN+=message.Content; this.node.getComponentInChildren(MTX).playFrameAnimation1("TN");this.UIC(); 
                 if (this.accessory) {
                  this.accessory.TNN(message.Content)
                }          
                this.ST();    
                this.UIchange(message);
             break; 
             case"TN-":if(this.PPC()){this.TN-=message.Content;this.ST();             this.UIchange(message);}
             break; 
             case"TN=":if (this.TN<message.Content) {
               this.node.getComponentInChildren(MTX).playFrameAnimation1("TN")
               this.UIchange(message);
            };this.TN=message.Content;this.ST(); this.t=1;this.UIC(); 

             break; 
             case "TNS":
               this.TNS+=message.Content;
               let c=0
               if (this.TNS>=5) {
                c=this.TNS-5
                this.TNS=5
               }
             let a =new SHMessage("AM",[this.ZB],this.TNS,this.node.getComponent(Character).Pturn,"TNS")
             MessageCenter.MakeSHMessage("AM",[this.ZB],c,this.node.getComponent(Character).Pturn,"TN+")
             this.UIchange(a);
             break;
             case "UTNS":
   this.TNS=0
   MessageCenter.MakeSHMessage("AM",[this.ZB],message.Content,this.Pturn,"TN+");
     MessageCenter.MakeSHMessage("AM",[this.ZB],this.TNS,this.node.getComponent(Character).Pturn,"TNS")
   
   break;
            case "turn6":  if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
            } for(let m of this.turn1){m.Turn1(6)} this.faceTo = this.turn6([this.faceTo])[0];  this.t--;this.faceChange();    MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.TNC[0]+this.TNJJ[0],0,"TN-");  this.node.getComponentInChildren(MTX).playFrameAnimation1("turn6");  for(let m of this.turn3){m.Turn3()}this.faceChange();//逆时针转身
            break;
           
         case "turn4":   if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
         }for(let m of this.turn1){m.Turn1(4)} this.faceTo = this.turn4([this.faceTo])[0]; this.t--; this.faceChange(); MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.TNC[0]+this.TNJJ[0],0,"TN-");this.node.getComponentInChildren(MTX).playFrameAnimation1("turn4");    for(let m of this.turn3){m.Turn3()}this.faceChange(); //顺时针转身
            break;
            case "turn8":   if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
            }for(let m of this.turn1){m.Turn1(8)} this.faceTo = this.turn8([this.faceTo])[0];  this.faceChange(); MessageCenter.MakeSHMessage("AM",[this.ZB],GeZiManager.TNC[0]+this.TNJJ[0],0,"TN-");this.node.getComponentInChildren(MTX).playFrameAnimation1("turn4");    for(let m of this.turn3){m.Turn3()}this.faceChange(); //顺时针转身
            break;
         case "walk":   if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
         }
         
         this.ZBW(true,0); 
   
            break;
            case "walkL": 
            if (this.MZ!=0) { MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"Qi-");
            }
            this.ZBW(true,message.Content); 
            GeZiManager.TNC[1]=3;this.Bu.push(1);this.ST()
               break;
            case"qi":
            this.node.getComponent(Cspine).xuqiAIN(200);
            setTimeout(() => {
            this.Cqi(message.Content,message);
            if(this.qi3!=null){for(let w of this.qi3){w.Qi3();}}
            this.PFUI("Qi+",message.Content)
          
            GeZiManager.TNC[2]=3;
         this.ST();
            this.Bu.push(2);
            }, 350);
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[2]+this.TNJJ[2],GeZiManager.PCP.Pturn,"TN-");
         break;

         case "attack": this.attack(message.Content);
            break;
        
                           
               case "move": 
              if (message.from!=this.Pturn) {
               for(let a of this.wd1){a.WD1()}
              }
               if (!this.WD) {this.move(message.Content[0],1);this.moveto(message.Content[1],this.ZB); if (this.ZB == 8) { this.dead(); }} 
                  
               this.WD=false
               break;
                 
               case "Qi+": if (message.Content < 0) { message.Content = 0 } this.Cqi(message.Content,message);this.PFUI("Qi+",message.Content)
                  break;
               case "Qi-": if (message.Content < 0) { message.Content = 0 } this.Cqi(-message.Content,message);this.PFUI("Qi-",message.Content)
                  break;
               case "Qi=":  if (message.Content < 0) { message.Content = 0 };let n=message.Content-this.qi;this.Cqi(n,message)
                  break;
                  case "qin+": 
                  console.log(this.CHF)
                  this.Fus(message.Content); 
                  this.UIchange(message)
                  break;





                  case"jitu":for (let index = 0; index < message.Content; index++) {
                     MessageCenter.MakeSHMessage("AM",[this.ZB],[this.turn8([this.getc(message.from).faceIs(this.ZB)])[0],0.3],message.from,"move")
                     
                  }
                  break;
               case "wuli":console.log(message.Content+GeZiManager.dm-this.wk); if (this.LST == -1||this.gui) { } 
               else { GeZiManager.dlU=message.Content;
                  if(this.getc(message.from)!=null)
{
   
   for(let m of this.behurt2){m.Behurt2(message,this,this.getc(message.from));}//被打
for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}//打人
   let k=message.Content+GeZiManager.dm+this.getc(message.from).sh;
   k-=this.wk;
  console.log(this.getc(message.from).sh)
   k-=this.DunDefenceSH(this.weapon,this.getc(message.from),this.getc(message.from).getComponent(weapon))
   
   

                  GeZiManager.un=k; 
                  this.getc(message.from).weapon.getComponent(weapon).GF(k,message.from);
                  for(let m of this.behurt222){m.Behurt222(k,this,this.getc(message.from));}
                  let n=k+GeZiManager.ms;
   if (n < 0) { n = 0; } this.getHurt(n,this.getc(message.from),k);}else{let n = message.Content-this.wk;;if (n < 0) { n = 0; } this.getHurt(n,this.getc(message.from),GeZiManager.un);}
                     GeZiManager.BOL=false;
                   if(this.getc(message.from)!=null&&this.getc(message.from).attack35!=null){ for(let m of this.getc(message.from).attack35){m.Attack35(this,GeZiManager.un);}}
               } 
               
               
               GeZiManager.free=0;GeZiManager.dlU=0;GeZiManager.ms=0;GeZiManager.un=0;//清零
               console.log( GeZiManager.PCP.LST)
               
               this.node.getComponentInChildren(MTX).playFrameAnimation1("BA")
               break;
               
                  case "mofa": if (this.LST == -1) { } else { let bn = message.Content - this.mk; if (bn < 0) { bn = 0; } this.getHurt(bn,this.getc(message.from),0); }this.ST();
if (this.mk>0) {
            AudioManager.instance.ZJP("hit",7);
}


                  break;
                  case "mofaT": if (this.LST == -1) { } else {
                     if (this.mmc!=null) {
                        for(let a of this.mmc){a.mg(message.Content[1])}
                     }
                     
                     let bn = message.Content[0] - this.mk+GeZiManager.dm; if (bn < 0) { bn = 0; } this.getHurt(bn,this.getc(message.from),0); }this.ST();
if (this.mk>0) {
            AudioManager.instance.ZJP("hit",7);
}

                  break;
               case "HP=": if (this.LST == -1) { } else {
                  this.HP = message.Content; for (let mannger of this.UI) {
                     if (mannger instanceof HUI) {
                        mannger.setHP();
                     }
                     if (mannger instanceof sideUI) {
                        mannger.setHP()
                     }
                  }
               }
                  break;
               case "HP+": 
               
               if (this.LST == -1) { } else {
                  if(this.HPm2!=null){for(let w of this.HPm2){w.HPM2(message.Content,message.from,this.Pturn);}}
//if(this.FU[2]+this.FU[4]+this.FU[5]>1){message.Content++}

                  this.HP += message.Content; if (this.HP > this.MaxHP) {let j= this.HP-this.MaxHP;this.HP = this.MaxHP;    MessageCenter.MakeSHMessage("AM",[this.ZB],j,null,"MaxHP+")}
                  if (this.HP<0) { this.HP = 1; this.node.getComponent(Cspine).FH();}
                  for (let mannger of this.UI) {
                     if (mannger instanceof HUI) {
                        mannger.setHP()
                     }
                     if (mannger instanceof sideUI) {
                        mannger.setHP()
                     }
                  }

                  if (this.LST < 7 && this.LST > 0) {
                   
                     if(this.HP<1){this.HP=1;}
                     turn.Y.splice(turn.Y.indexOf(this));
                     this.LST=10;
            this.node.getComponent(Cspine).FH();
                  }
               }
               if(this.HPm3!=null){for(let w of this.HPm3){w.HPM3();}}

this.PFUI("HP+",message.Content);

                  break;
               case "HP-":
                  if(this.getc(message.from)!=null)
                     {
                        
                        for(let m of this.behurt2){m.Behurt2(message,this,this.getc(message.from));}//被打
                     for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}}//打人
               
               if (this.LST == -1) { } else {
                
                  console.log( this.LST)
                  this.getHurt(message.Content,this.getc(message.from),message.Content)}
                  console.log( this.LST)
                  for (let mannger of this.UI) {
                     if (mannger instanceof HUI) {
                        mannger.setHP()
                     }
                     if (mannger instanceof sideUI) {
                        mannger.setHP()
                     }
                  }
                  if(this.HPm3!=null){for(let w of this.HPm3){w.HPM3();}}
                  break;

                  case "MaxHP+": if (this.LST == -1) { } else {
                     this.MaxHP+=message.Content;
                     //this.HP+=message.Content;
                  GeZiManager.shanchu(this.UI,this.node.getChildByName("HUI").getComponent(HUI))
                 let c=this.node.getChildByName("HUI").position
                  this.node.getChildByName("HUI").destroy();
                     let HUI1 = instantiate(this.HUI)
                     HUI1.setParent(this.node)
                     HUI1.position=c
                     for (let m of this.UI){
if(m instanceof sideUI) {
 // GeZiManager.shanchu(this.UI,m)
   
  m.setM();
  GeZiManager.sideUI.push(m);
m.setHP()
  break;
}
                     }
                        
                    setTimeout(() => {
                     for (let mannger of this.UI) {
                        if (mannger instanceof HUI) {
                           mannger.setHP()
                        }
                     }
                    }, 100);
                     
                    
                      
                  }
                     break;

                     case "MaxHP-": if (this.LST == -1) { } else {
                        this.MaxHP-=message.Content;
                       if(this.MaxHP<this.HP) {this.HP-=message.Content;}
                       if (this.MaxHP==0) {
                        this.Bdead(this.getc(message.from))
                       }
                     GeZiManager.shanchu(this.UI,this.node.getChildByName("HUI").getComponent(HUI))
                       this.node.getChildByName("HUI").destroy();
                        let HUI1 = instantiate(this.HUI)
                        HUI1.setParent(this.node)
                        
                        for (let m of this.UI){
   if(m instanceof sideUI) {
     GeZiManager.shanchu(this.UI,m)
      
     m.setM();
     GeZiManager.sideUI.push(m);
     break;
   }
                        }
                           
                       
                        setTimeout(() => {
                           for (let mannger of this.UI) {
                              if (mannger instanceof HUI) {
                                 mannger.setHP()
                              }
                           }
                          }, 100);
                         if (this.HP <= 0) { this.Bdead(this.getc(message.from)); }
                     }

                     
                        break;


case "turnBan":this.turnBan[message.Content]+=1;
break;
case "turn+":this.turnD[message.Content]+=1;
break;





               case "getC": GeZiManager.PCP=this
                  break;

                  case "changeE": console.log( message.Content);this.changeE( message.Content);
                  break;
                  case "TG": this.getTG(message.Content)
                  break;
                 
                  case "getOne":GeZiManager.Tcharacter=this;
                  break;
                  case "getOneC":GeZiManager.Tcharacter=this;
                  break;
                  case "getOnes":GeZiManager.Tcharacters.push(this)
                  break;
                  case "getOneCs":GeZiManager.Tcharacters.push(this)
                  break;
      case"ice":
    this.ICEL()
      
      break; 

      case"DUN":this.GD+=message.Content
      
      for (let mannger of this.UI) {
         if (mannger instanceof HUI) {
            mannger.setGD(this.GD,this.ice)
         }
       
      }
               case "water":
               
                  break;
               case "wind":
                  if (this.WD==true) { } else {
                     if (GeZiManager.Ban.includes(this.ZB)) { } else {
                        switch (this.M) {
                       
                           case "正常": this.move(message.Content,1); this.CMget(); this.moveto(1.5, this.ZB);

                              break;
                           case "轻飘飘": this.move(message.Content,2); this.CMget(); this.moveto(1.5, this.ZB);

                              break;
                      
                           default:
                              break;
                        }
                     }
                     if (this.y == 1 && message.Content== 6) {
                        while (this.ZB != 8) {
                           this.move(message.Content, 1);
                           this.CMget(); this.moveto(1.5, this.ZB); if (GeZiManager.BanMove.includes(this.findGe(message.Content, 1))) { break; }
                        }
                     }
                     if (this.y == 8 && message.Content == 4) {
                        while (this.ZB != 56) {
                           this.move(message.Content, 1);
                           this.CMget(); this.moveto(1.5, this.ZB); if (GeZiManager.BanMove.includes(this.findGe(message.Content, 1))) { break; }
                        }
                     }
                     if (this.x == 8 && message.Content == 2) {
                        while (this.ZB != 8) {
                           this.move(message.Content, 1);
                           this.CMget(); this.moveto(1.5, this.ZB); if (GeZiManager.BanMove.includes(this.findGe(message.Content, 1))) { break; }
                        }
                     }
                     if (this.x == 1 && message.Content == 2) {
                        while (this.ZB != 1) {
                           this.move(message.Content, 1);
                           this.CMget(); this.moveto(1.5, this.ZB); if (GeZiManager.BanMove.includes(this.findGe(message.Content, 1))) { break; }
                        }
                     }


                     if (this.ZB == 8) { this.dead(); }
                 
                     this.WD=false;
                  }this.ST(); for(let m of GeZiManager.BanMove){GeZiManager.getQin(m,m)}
                  break;
               default:
                  break;




            }
         }
         for(let a of this. XD1){a.xd2(message)} 
             GeZiManager.free=0;GeZiManager.dlU=0;GeZiManager.ms=0;GeZiManager.un=0;//清零
             this.baoMA(message)
      } else {
         this.DO(message);
      }}
   else{if(this.Pturn == message.Command&&message.Content=="getC"){ GeZiManager.PCP = this;console.log(this.Pturn)}}
   



   }
   /*受到信息后的各种行动（SHMessage与Message的区别主要在于对象，前者通过坐标指定角色或物品，改变场上的物体关系，后者基本上只对自己和自己的UI生效
（包括一些静态类中的事件））



*/




   DO(message: Message) {

      if (this.Pturn == message.Command) {


         switch (message.Content) {

            case "ST":
            
            
         this.ST();//更新UI与状态

               break;

          
       
        
           


           
            case "getZB": GeZiManager.GeZi = this.ZB;//获得当前行动角色的坐标
               break;

            case "getQi": GeZiManager.Qi = this.qi;
               break;

            case "getHP": GeZiManager.HP = this.HP;
               break;

            case "getC": GeZiManager.PCP = this;console.log(this.Pturn)
               break;

            default: console.log(GeZiManager.BanMove);

         }


      }













   }
baoMA(message:SHMessage){

find("Canvas/BAOm").getComponent(BAOmMAN).jj(message,this.Pturn)



}

   ST() {
      find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/PASS").getComponent(CustomButton).enableButton();
      find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/qi").getComponent(CustomButton).enableButton();
      find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/magic").getComponent(CustomButton).enableButton();
      find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/shop").getComponent(CustomButton).enableButton();
    find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(CustomButton).enableButton();
      this.TNT();
      this.TNC(this.TN)
   //   this.node.parent.getComponent(TNManager).lun.string=GeZiManager.TNC+""
     
   
    //  MessageCenter.MakeMessage("BUI", [0,1,2,3,4,5], "use");
   if(this.Pturn==turn.turn) {
     
      this.walkWay=this.MwalkWay

      if (this.CZ>0||(GeZiManager.boxs.includes(this.findGe(this.faceTo, 1))&&this.walkWay==1&&!GeZiManager.waterPool.includes(this.findGe(this.faceTo, 1)))) { this.walkWay = 0.5;}
      
switch (this.walkWay) {
  
case 0.5 : if (GeZiManager.BanMove.includes(this.findGe(this.faceTo,2))||this.TN<GeZiManager.TNC[1]+this.TNJJ[1]+1){
    MessageCenter.MakeMessage("BUI", [1], "Ban")
   MessageCenter.MakeMessage("BUI", [0.5], "Ban");
   }
break;//MessageCenter.MakeMessage("BUI", [1], "change0.5");if(this.qi<=10){ MessageCenter.MakeMessage("BUI", [1], "Ban")} 


case 2 : if (GeZiManager.BanMove.includes(this.findGe(this.faceTo, 2))||GeZiManager.BanMove.includes(this.findGe(this.faceTo, 1))){ MessageCenter.MakeMessage("BUI", [1], "Ban");}
break;

case -1 : if (GeZiManager.BanMove.includes(this.findGe(this.turn8([this.faceTo])[0],1))){ MessageCenter.MakeMessage("BUI", [1], "Ban")}
break;

case 0:   //MessageCenter.MakeMessage("BUI", [1], "Use");
   break;
default:  if (this.GX(this.faceTo)&&!(GeZiManager.waterPool.includes(this.findGe(this.faceTo, 1))&&GeZiManager.boxs.includes(this.findGe(this.faceTo, 1)))&&!this.ghost) {
            
   MessageCenter.MakeMessage("BUI", [1.2], "Ban");
}if (this.GX(this.turn8([this.faceTo])[0])&&!(GeZiManager.waterPool.includes(this.findGe(this.faceTo, 1))&&GeZiManager.boxs.includes(this.findGe(this.faceTo, 1)))&&!this.ghost) {
            
   MessageCenter.MakeMessage("BUI", [1.8], "Ban");
}
if (this.GX(this.tt4(this.faceTo))&&!(GeZiManager.waterPool.includes(this.findGe(this.faceTo, 1))&&GeZiManager.boxs.includes(this.findGe(this.faceTo, 1)))&&!this.ghost) {
            
   MessageCenter.MakeMessage("BUI", [1.4], "Ban");
}
if (this.GX(this.tt6(this.faceTo))&&!(GeZiManager.waterPool.includes(this.findGe(this.faceTo, 1))&&GeZiManager.boxs.includes(this.findGe(this.faceTo, 1)))&&!this.ghost) {
            
   MessageCenter.MakeMessage("BUI", [1.6], "Ban");
}
      break;
}

      

   

      for(let i=0;i<=this.turnBan.length-1;i++){
         if(this.turnBan[i]!=0){MessageCenter.MakeMessage("BUI", [i], "Ban");console.log(i)}
         
         
         }



if(this.t==0){  MessageCenter.MakeMessage("BUI", [0], "Ban")}


find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).ST();

////体能够不够
   }//更新状态
  
   console.log( this.LST)



     

}

   PFUI(t: string, n: number) {
     if( this.FUI==false){
      this.node.children[4].active = true;
      this.node.children[4].getComponent(UIOpacity).opacity = 0;
      this.FUI=true;
      // 设置起始位置
      this.node.children[4].setPosition(this.node.children[4].getPosition().x,this.node.children[9].getPosition().y+40,0)
      const targetNode = this.node.children[4];
      tween(targetNode.getComponent(UIOpacity)).to(0.6,{opacity:255}).start()
      // 创建缓动动画
      tween(targetNode)
          .to(0.6, { 
              position: new Vec3(targetNode.position.x, targetNode.position.y + 70, targetNode.position.z),
            
          })
          
          .start();

      
      console.log(this.node.children[4].getComponent(gif1).atlas1);
      setTimeout(() => {
         this.fadeOutAndDisappear(targetNode,600)
          this.FUI=false;
      }, 1200);
     
      switch (t) {
          case "HP+":
              this.node.children[4].getComponent(gif1).moveToNextFrame(0, 5, 0);this.node.children[4].children[0].getComponent(Label).string = "" + n;
              break;
          case "HP-":
              this.node.children[4].getComponent(gif1).moveToNextFrame(6, 10, 0);this.node.children[4].children[0].getComponent(Label).string = "-" + n;
              break;
          case "Qi+":
              this.node.children[4].getComponent(gif1).moveToNextFrame(11, 16, 0);this.node.children[4].children[0].getComponent(Label).string = "" + n;
              break;
          case "Qi-":
              this.node.children[4].getComponent(gif1).moveToNextFrame(17, 21, 0);this.node.children[4].children[0].getComponent(Label).string = "-" + n;
              break;
          default:
              break;
      }}else{setTimeout(() => {
         this.PFUI(t,n)
      }, 400);}
  }






turnPass(): void {
   if(this.LST<7&&this.LST>0){this.LST-=1;}
if(this.LST==0){this.dead();}
}

Tstart(){  


   this.node.getChildByName("shadow")

   if(this.LST!=10&&this.TheShy==false&&endGame.jsl==false){ MessageCenter.MakeMessage("UIManager", "change", 0);   if (turn.turn==this.Pturn&&(KHD2.PT.includes(turn.turn)||MessageCenter.Text)) {
      MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS");   
   }  }else{
       find("Canvas/DituManager/New Node/time").getComponent(Time).reset()
      find("Canvas/DituManager/New Node/time").getComponent(Time).startCountdown()

 if (KHD2.PT.includes(this.Pturn)) {
   this.shakeCameraAndNode(find("Canvas/Main Camera").getComponent(Camera),find("Canvas/DituManager/New Node/AnimalManager/QP"),10,100)
 }    
    if (!this.YS) {
      find("Canvas/Main Camera").getComponent(JJ).JJ(this.node,1)
    }  
      for(let m of GeZiManager.PCP.t0){m.T0(turn.turn)}
      if (turn.round%12==2||turn.round%12==7) {
        // find("Canvas/UIManager/NWshop").getComponent(NWshopUI).TOUI(this.TNF)
        // this.TNF++
       }
   this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(5,8,0)
   //setTimeout(() => {
    this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
 //},1600);
this.node.parent.getComponent(TNManager).TN();

 




   if(this.WAT==0){this.dead();}
   this.KTT=3;
   this.t=this.MaxT;
   this.TN+=this.addTN
   for(let m of GeZiManager.PCP.t1){m.T1(turn.turn)}
   GeZiManager.Bu = []; 
   this.node.children[2].active=true;//体能显示

   if (this.DiXing=="water"&&!GeZiManager.boxs.includes(this.ZB)) {
     // this.TN-=2
   }
   this.node.getComponentInChildren(MTX).playFrameAnimation1("TN")
   this.TNC(this.TN);this.ST();
   this.UIchange(null);
   if(this.DLN==0){this.DLN+=1}

}
}
Tend(){

   GeZiManager.PCP.TNJ();     
   this.TN=0;
this.XDs=0;
this.lastZB=0
GeZiManager.PCP.KBJS()
GeZiManager.PCP.DYJS()
GeZiManager.PCP.MZJS()
GeZiManager.PCP.CZJS()
GeZiManager.PCP.ICEJS()
   this.UIchange(null); if (!(turn.round%12==2||turn.round%12==7)) {   
   if(this.DiXing=="water"&&!GeZiManager.boxs.includes(this.ZB)){GeZiManager.PCP.WAT-=1;this.node.getChildByName("water").getComponent(waterPp).PO(1)}}
   this.node.children[2].active=false;//体能显示

   let c=find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).MCD
   for(let a  of c){if (a>0) {
      a--;
   }}


   find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).ST();
  // find("Canvas/TimeC").getComponent(Countdown).timeend();
   for(let m of GeZiManager.PCP.t3){m.T3()}


}







roundPass(): void {
  this.QXJS()
}












   BUI() {


      switch (this.LST) {
         case 10: MessageCenter.MakeMessage("BUI", [ 2, 3, 4, 5], "Use"); this.Tstart();
            break;




         default: MessageCenter.MakeMessage("UIManager", "change", 0); if (turn.turn == this.Pturn) { MessageCenter.MakeMessage("AM",turn.turn,"getC");  
         MessageCenter.MakeSHMessage("AM",[0], turn.turn+1, turn.turn,"PASS"); }
            state.ST = 1;
            break;
      }


    

   }//回合开始时判断UI






   setB(n:number){

 // this.node.getComponent(Cspine).setBrightness(n)
    




  
}


PPC(){
if (this.Pturn==turn.turn) {
   return true
}
else  return false
  
}
dead11() {
   if (this.LST!=-1) {
      
      this.LST=-1;
         if(this.dead2!=null) { for(let a of this.dead2){a.Dead2(this.Pturn);}}
         MessageCenter.MakeSHMessage("AM",[this.ZB],0,this.Pturn,"Qi=")
       
   console.log(this.LST)
         GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
       //  GeZiManager.shanchu(this.node.parent.getComponent(AnimalManager).YuanGong,this)
         GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
         console.log(GeZiManager.BanMove.includes(this.ZB))
         endGame.endGame(this.Pturn%2);
       
         ///变鬼了
         for(let a of this.node.children){a.active=false;}
         this.ghost=true;
         this.node.getComponent(Cspine).Dead();
      
         //////
         
        // this.node.opacity = 100;
        // this.node.getChildByName("HUI").active = false;
         //this.node.getChildByName("qi").active = false;
         //this.node.width = 175; this.node.height = 200;
         //let ghost = instantiate(this.ghostUI)
        // ghost.setParent(this.node);
     // this.M=2;
     if(  this.node.getComponent(SXX).Snumber!="S02"){
      this.node.getComponent(SXX).remove();}
       //  this.UI.push(ghost.getComponent(ghostUI))
   
         if (turn.turn==this.Pturn&&(KHD2.PT.includes(turn.turn)||MessageCenter.Text)) {
            MessageCenter.MakeGMessage("AM",[0], turn.turn+1, turn.turn,"PASS");
         }
   
    
         if (KHD2.PT.includes(6)||MessageCenter.Text) {
            this.node.parent.getComponent(ZManager).YYY();
            this.node.parent.getComponent(ZManager).YYY();
         
         }
            
      
   
     
      if(this.killp!=null){for(let k of this.killp.kill3){k.Kill3(this.Pturn)}}
      console.log(this.LST)
   }
   
   for(let c of this.teammates){
   
   
      MessageCenter.MakeSHMessage("AM",[c.ZB],3-this.teammates.length,this.Pturn,"Qi+")
   }
   
   if (this.killp) {
      MessageCenter.MakeSHMessage("AM",[this.killp.ZB],3-this.teammates.length,this.Pturn,"Qi+")
   }
   
   if(GeZiManager.PCP.color=="Red"){
      GeZiManager.Rhun+=1
     
   }else{  GeZiManager.Bhun+=1;}
   GeZiManager.getHUN();
   
   
   }
FH(i:number,FT:number,HP:number){
   if(this.fh1!=null) { for(let a of this.fh1){a.FH1(this.Pturn)}}
let j=0

   this.LST=10;
   this.HP=HP
   console.log(this.HP)
   this.ZB=i;
   this.ghost=false;
  this.faceTo=this.getc(FT).faceTo

   this.moveto(0,this.ZB);
   this.move(5,1);

   this.faceChange();
 
   this.node.active=true;
   this.qi=0
   MessageCenter.MakeSHMessage("AM",[this.ZB],2,this.Pturn,"Qi+")
   for(let a of this.node.children){a.active=true;}
   this.node.getComponent(Cspine).FH();
   this.node.getComponent(Cspine).changeDirection(this.faceTo)
   this.node.getComponent(gif1).stop()
   MessageCenter.MakeSHMessage("AM",[this.ZB],0,this.Pturn,"HP+")
 
   if (state.ST==0.5) {
      state.ST=1 
   }
   this.setXY(0.8);

  GeZiManager.getQin(this.ZB,this.ZB)




endGame.endGame(9)

}

FH2(i:number,FT:number,HP:number){
   if(this.fh1!=null) { for(let a of this.fh1){a.FH1(this.Pturn)}}
let j=0
 
   this.LST=10;
   this.HP=HP
   console.log(this.HP)
   this.ZB=i;
   this.ghost=false;
  this.faceTo=this.getc(FT).faceTo

   this.moveto(0,this.ZB);
   this.move(5,1);

   this.faceChange();
 
   this.node.active=true;
   this.qi=0
   MessageCenter.MakeSHMessage("AM",[this.ZB],2,this.Pturn,"Qi+")
   for(let a of this.node.children){a.active=true;}
   this.node.getComponent(Cspine).FH();
   this.node.getComponent(Cspine).changeDirection(this.faceTo)
   this.node.getComponent(gif1).stop()
   MessageCenter.MakeSHMessage("AM",[this.ZB],0,this.Pturn,"HP+")
 
   if (state.ST==0.5) {
      state.ST=1 
   }
   this.setXY(0.8);

  GeZiManager.getQin(this.ZB,this.ZB)




endGame.endGame(9)

}
getZDSX(n:string){

switch (n) {
   case "sh":return ":"+this.weapon.SH+"+"+this.sh
      
      break;
      case "M":return ":"+this.M+""
      
      break;
      case "HP":return ":"+this.HP+"/"+this.MaxHP
      
      break;
      case "TN":return ":"+this.TN+"/"+this.MaxTN
      
      break;
      case "color":return ":"+this.color
      
      break;

      case "CJ":return ":"+this.weapon.CJ+"+"+this.CJ
      
      break;
      case "qi":return ":"+this.qi+""
      
      break;

      case "wk":return ":"+this.wk+""
      
      break;
      case "mk":return ":"+this.mk+""
      
      break;

      case "tt":return ":"+this.tt+""
      
      break;

      case "sex":return ":"+this.sex+""
      
      break;
      case "MaxT":return ":"+this.t+"/"+this.MaxT
      
      break;
   default:
      break;
}




}
Attack3(an:number[]) {
   //   console.log(an[0])
   //   console.log(this.target.faceIs(an[0]))
   
   
   
   
           if (this.CZ>0) {
           GeZiManager.Tcharacter=null
           MessageCenter.MakeSHMessage("AM",an,1,this.Pturn,"getOneC")
   
      
           MessageCenter.MakeSHMessage("AM",an,[this.turn8([this.faceIs(an[0])])[0],0.3],this.Pturn,"move")
           }

}






KBL(n:number){
   if(this.body.TheNumber!="B05"){
   if (this.KB==0) {
     this.sh+=1
   }
   
   this.KB+=n
}
   }
   
   DYL(n:number){
      if(this.body.TheNumber!="B05"){
   this.DY+=1
   if (this.DY>3) {
      this.DY=3
   }
   
}
   
   }
   
   
   MZL(n:number){
      if(this.body.TheNumber!="B05"){
   if(this.MZ==0){
   
  
   this.wk+=1
   }
   
   this.MZ+=1
   
   }
}
   
   ICEL(){
   
      if(this.shose.TheNumber!="C04"&&this.body.TheNumber!="B05"){
         this.ice+=1;this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("ice");  for (let mannger of this.UI) {
            if (mannger instanceof HUI) {
               mannger.setGD(this.GD,this.ice)}
            }
        this.TNJJ[0]+=1
        this.TNJJ[1]+=1
        this.TNJJ[3]+=1
         }
   
         if (this.DiXing=="water") {
            this.WAT==this.MAXWAT
            this.node.getComponentInChildren(MTX).playFrameAnimation1("waterE")
         }
         //this.GD+=1
      
   }
   
   
   CZJS(){
     if ( this.CZ>0) {
      this.CZ-=1
     }
 
     
   
   }
   
   
   CZL(){
     
      if(this.body.TheNumber!="B05"){
    this.CZ+=1
      }
   }
   
   
   
   
   
   
   
   
     KBJS(){
     
     
        if (this.KB>0) {
           this.KB-=1
           this.ZBW(false,1)
           if (this.KB==0) {
              this.sh-=1
           }
        }
     }
  
     
     DYJS(){
     
     
        if (this.DY>0) {
           this.DY-=1
           if (this.qi>0) {
              MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.Pturn,"Qi-");  
           }else{     MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,this.Pturn,"HP-");  }
           
        }
     
     }
     
     
     MZJS(){
     
     
        if (this.MZ>0) {
           this.MZ-=1
           if (this.MZ==0) {
           
            this.wk-=1
           }
           
        }
     
     }
     
     ICEJS(){
     
        if(this.ice>0){
         let oo=this.ice
         this.ice=0;
           for (let mannger of this.UI) {
              if (mannger instanceof HUI) {
             
                 mannger.setGD(this.GD,this.ice)
        
              }
           }
        
        
        
           if(this.ice==0){
            
            
            this.TNJJ[0]-=oo
        this.TNJJ[1]-=oo
        this.TNJJ[3]-=oo
            
            this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("iceN");this.ST();}
        }
        
     
     }
    
    
   


}