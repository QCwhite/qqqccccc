// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Camera, find, Node, tween, v2, v3, Vec3 } from 'cc';
const {ccclass, property} = _decorator;

import MTX from "../../../pictures/TX/MTX/MTX";
import weatherM from "../../../pictures/map/weather/weatherM";

import ComponentBase from "../../BASE/ComponentBase";
import GeZi from "../../Ditu/Gezi/GeZi";
import fireball from "../../Ditu/des/fireball";
import AnimalManager from "../../Manager/AnimalManager";
import GeZiManager from "../../Manager/GeZiManager";
import GMessage from "../../Message/GMessage";

import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import S03 from "../../Scharacter/S03";
import TUT from "../../game/TUT";
import state from "../../game/time/state";
import turn from "../../game/time/turn";
import MAG from "./MAG";

import Character from '../../BASE/Character';
import { AudioManager } from '../../BASE/music';
import SXX from '../../Scharacter/SXX';
import { SubtitleManager } from '../baom';
import Shops from '../shop/shops';
import { Sprite } from 'cc';
// /*
 //1  火球(fireball)【2】{2}：施法者指定以自身为中心的4格范围内的任意一格引导火球，在下一次轮到施法者的回合时，该指定格火球降下，对该格单位造成2点魔法伤害，若命中地雷会直接将其引爆
 //5  闪现(flash)【3】{3}：施法者立即位移至面朝方向的的第二格上，可以越过任意单位（若面朝方向第二格上已有单位则无法使用）
 //6  治疗术(crue)【3】{3}：施法者指定以自身为中心的3格范围内的一个非敌方且可回复生命值的单位，使其回复1点生命值
 //3  地震(earthquake)【4】{5}：施法者进行蓄力，在下一次轮到施法者的回合时立即使地面上的所有实体单位受到1点伤害（水中不受影响）
 //4  飓风(wind)【5】{4}：施法者指定一个方向，使场上所有单位向指定方向进行正常力度的位移判定
 //8  传送(TP)【7】{5}：施法者指定场上没有实体单位的任意一格，立即位移至该格（朝向不变）
 //2  冰冻(frozen)【3】{4}：施法者指定以自身为中心的3格范围内的任意一格（不包括自己），使该格单位无法移动和转身且获得1点假血（抵消1点伤害），持续到下一次轮到施法者的回合为止
 //7  香蕉皮(banana)【2】{3}：施法者指定以自身为中心的3格范围内没有单位的一格，使该格地面变滑，任意单位在经过变滑地面时会继续位移至下一格（除非有其他单位阻挡在下一格）
// 9  雷电(thunder)【6】{5}：施法者指定场上的任意单位，立即对其造成2点魔法伤害
// 10  狂暴(crazy)【4】{4}：（该法术的释放不消耗体能）施法者立即获得2点体能，直到下回合结束
//  */

@ccclass('MUI')
export default class MUI extends ComponentBase {
        DZLM:boolean=false; 
        DLLM: string = "n";
        QD: boolean = false;
        @property(Number)  
        CC: number = 0;
        MCD:number[]=[0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0]
        DMAG:number=0;
        fashu: number[] = [1,2,3,6];
        BLfas:number[]=[11,13,4];
        RLfas:number[]=[9,8,5];
       son:MAG[]=[];
       @property(Node)  
       di:Node=null
       roundPass(): void {
          for (let index = 0; index < this.MCD.length; index++) {
            if (this.MCD[index]>0) {
                this.MCD[index]-=1
            }
            
          }
       
       console.log(this.MCD)
       
        }
    
       
        ST(){
    
    
    for(let c of this.son){
    c.ST()
    
    
    
    }
       }
    
    chushi(){
    let k
    let o=GeZiManager.PCP.color;
    
        if(o=="Blue"){k=this.mArr1Arr2(this.fashu,this.BLfas)}else{k=this.mArr1Arr2(this.fashu,this.RLfas)}
        if(GeZiManager.PCP.getComponent(S03)&&GeZiManager.PCP.getComponent(S03).BL[5]>0){ k=GeZiManager.PCP.getComponent(S03).changM();}
    for (let index = 0; index < k.length; index++) {
       let a=""
       let qi=0
       let t=0
        switch (k[index]) {
            case 1:a="fireball" ;qi=2;//this.MCD[1]=1;
            break;
            case 2:a="falsh" ;qi=3;//this.MCD[2]=3;
            break;
            case 3:a="cure" ;qi=3;//this.MCD[3]=5;
            break;
            case 4:a="KB" ;qi=3;//this.MCD[10]=4;
            break;
            case 5:a="earthquake" ;qi=4;//this.MCD[4]=5;
            break;
            case 6:a="wind" ;qi=5;//this.MCD[5]=4;
            break;
            case 7:a="TP" ;qi=5;//this.MCD[6]=2;
            break;
           
          
            case 8:a="ice" ;qi=3;//this.MCD[7]=4;
            break;
            case 9:a="banana" ;qi=3;//this.MCD[8]=2;
            break;
            case 10:a="thunder" ;qi=6;//this.MCD[9]=7;
            break;
           
            case 11:a="tree" ;qi=3;//this.MCD[10]=4;
            break;
          
            case 12:a="BZ";qi=4;//this.MCD[10]=4;
            break;
            case 13:a="pig" ;qi=6;//this.MCD[10]=4;
            break;
            case 14:a="tui" ;qi=3;//this.MCD[10]=4;
            break;
        default:a="BZ";qi=3
            break;
       }
        this.son[index].js(qi,k[index],t,a)
    }
    console.log()
    }
    
    open() {
        // 设置初始位置
        this.node.position = v3(-1200, -1000, 0);
        this.di.position = v3(-738, 0, 0);
        const c=this.node.position
const b=this.di.position
        // 移动节点 this.node 的 y 坐标
        tween(this.node)
        .to(0.25, { position: new Vec3(c.x+ 60, c.y + 530, c.z) })
 
        .to(0.05, { position: new Vec3(c.x+ 25, c.y+ 420, c.z) })
      
        .to(0.05, { position: new Vec3(c.x+40, c.y + 450, c.z) })
       
        .start();
      tween(this.di).to(0.2, { position: new Vec3(b.x+ 810, b.y, b.z) })
   
      .to(0.05, { position: new Vec3(b.x+ 730, b.y, b.z) })
      .start();


        console.log("open");
        console.log( this.node.position);
        this.chushi();
        this.ST();
        AudioManager.instance.ZJP("magic",0);
    }

    close() {
        // 移动节点 this.di 的 x 坐标
        const c=this.node.position
        const b=this.di.position
  

       tween(this.node)
       .to(0.15, { position: new Vec3(c.x- 40, c.y-740, c.z) }).start()
       tween(this.di)
       .to(0.15, { position: new Vec3(b.x-730, b.y, b.z) }).start()
        console.log("close");

        GeZiManager.PCP.ST();
        GeZiManager.JL = 0;
        GeZiManager.free=0;
              AudioManager.instance.ZJP("magic",0);
    }

    
    
    
    
    
    
    
    
    
    
    
    
    XZ(n:number,Ba:boolean,Br:boolean){
    
    
    
       
    
        let k=GeZiManager.redM;
        let o=GeZiManager.blueM
    if(GeZiManager.PCP.color=="Blue"){o=GeZiManager.redM;k=GeZiManager.blueM}
    state.ST=4;
        MessageCenter.MakeMessage("UIManager","change",-1);
        for(let manager of GeZiManager.YuanGong){
    let a=new Message("",[65],-1)
            manager.ReceiveMessage(a)    
    }
    MessageCenter.MakeMessage("AM",turn.turn,"getZB")
    
    for(let manager of GeZiManager.YuanGong){
    manager.getFar(n+GeZiManager.JL);

if (Ba&&manager.getFarH(n+GeZiManager.JL)) {
   manager.cto(GeZiManager.Baos(manager.ZB)) 
  
}
if (Br&&manager.getFarH(n+GeZiManager.JL)) {
    manager.cto(GeZiManager.Bret(manager.ZB)) 

  
 }

    if (k.includes(manager.ZB)&&!o.includes(manager.ZB)) {
        manager.red();
    }
    }
    console.log(k)
    console.log(o)
    }
    
    
    
    
    
    
     onLoad(): void {
        turn.Roo.push(this)
    }
    
       start () {
        MessageCenter.addReceive(this);
    
    this.chushi();
    }
       
    
     qic(qic:number){
       
    if(GeZiManager.PCP.qi>=qic){    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],qic,null,"Qi-");
    
    return true}else{
        
        
        
        return false}
    
    
     } 
    
    
    back(){
        this.close()
        MessageCenter.MakeMessage("UIManager","change",1);
        AudioManager.instance.ZJP("magic",1)
    GeZiManager.clean();
        
    }
    
    
    //火球术
    fireball(){
    
    
    this.XZ(4,false,false)
          
    GeZiManager.DLLM='fireball'
    this.close();
    
    
  
    }
    
    
    Dfireball(n:number){
      
     //  if(GeZiManager.PCP.FU[0]>0){GeZiManager.dm+=1}
    
    
    
    for(let a of GeZiManager.PCP.magic2){a.Magic2();}
    
    MessageCenter.MakeSHMessage("AM",[n,2+GeZiManager.dm],4,GeZiManager.PCP.Pturn,"FTP");

    let o=2+GeZiManager.free
    if (o<1) {
        o=1
    }
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
    for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
    

  
              AudioManager.instance.ZJP("magic",1);
    
    }
    
    /////////////////闪现
    falsh(){ 
      
        let k=GeZiManager.redM;
        let o=GeZiManager.blueM
    if(GeZiManager.PCP.color=="Blue"){o=GeZiManager.redM;k=GeZiManager.blueM} 
    
    
    
        
            let a  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,2)
            find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
             
            for(let c of GeZiManager.YuanGong){
              
    
                if(c.ZB==a){if(GeZiManager.BanMove.includes(c.ZB)){c.red(); MessageCenter.MakeMessage("UIManager","change",-1)}else{c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}}else c.null();
                if (GeZiManager.grass.includes(c.ZB)&&c.ZB==a&&turn.DorN=="nigth") {
                    c.Kpuper();  MessageCenter.MakeMessage("UIManager","change",2)
                }
                if (k.includes(c.ZB)&&!o.includes(c.ZB)) {
                    c.red();
                }
    
    
    
            }
           
            this.close();
            GeZiManager.DLLM='falsh'
            state.ST=4;
    
    }
    Dfalsh(){
        console.log("dg")
     for(let a of GeZiManager.PCP.magic2){a.Magic2();}
        
        let k  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,2)
        if(GeZiManager.BanMove.includes(k)){}else{
         
            GeZiManager.PCP.To(k,0.1);
        
    }
    let o=3+GeZiManager.free
    if (o<1) {
        o=1
    }
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
    
        for(let a of GeZiManager.PCP.magic3){a.Magic3(k);}
    
    
    
    
        AudioManager.instance.ZJP("magic",2)
                  
    
    
    }
    KB(){
    
        this.XZ(3,false,false)
          
 
        GeZiManager.DLLM='KB'
        
        this.close();
    
    
        
    
        
        
        
    
    
    
      
      }
    
    
    DKB(n:number){
        MessageCenter.MakeSHMessage("AM",[n],1,GeZiManager.PCP.Pturn,"getOne")
    
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
    GeZiManager.Tcharacter.KBL(2)
    
    let o=3+GeZiManager.free
    if (o<1) {
        o=1
    }
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
    for(let a of GeZiManager.PCP.magic3){a.Magic3(GeZiManager.PCP.ZB);}
        AudioManager.instance.ZJP("magic",4)
    }
    pig(){ 
       
    
        state.ST=4;
        GeZiManager.DLLM='earthquake'
        MessageCenter.MakeMessage("UIManager","change",2);
        
        for(let c of GeZiManager.YuanGong){c.blue()}
        

        GeZiManager.DLLM='pig'
        state.ST=4;
        this.close();
    
    }
    Dpig(){
    console.log("dg")
    for(let a of GeZiManager.PCP.magic2){a.Magic2();}

    
    let o=6+GeZiManager.free
    if (o<1) {
        o=1
    }
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
    
let k=0
    for (let j of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]) {
      if (j.LST!=-1) {
        k++
      }
        

}

      for (let index = 0; index < o; index++) {
            MessageCenter.MakeSHMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
            console.log(index)
      }
  


    for(let a of GeZiManager.PCP.magic3){a.Magic3(0);}
   
       AudioManager.instance.ZJP("magic",13)
    
    }
    
    cure(){
      this.XZ(4,false,false)
            GeZiManager.DLLM='cure'
            this.close();
    }
    Dcure(n:number){
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
       
    
       
       MessageCenter.MakeSHMessage("AM",[n],1,GeZiManager.PCP.Pturn,"getOne")
       if(GeZiManager.Tcharacter!=null){GeZiManager.Tcharacter.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("cure")}
       setTimeout(() => {
        MessageCenter.MakeSHMessage("AM",[n],1,GeZiManager.PCP.Pturn,"MaxHP+");
        MessageCenter.MakeSHMessage("AM",[n],1,GeZiManager.PCP.Pturn,"HP+");
        let o=3+GeZiManager.free
        if (o<1) {
            o=1
        }
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
        for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
       }, 500); 
    
       AudioManager.instance.ZJP("magic",3)
    
    }
    
    
    
    
    
    
    
    
    ////////////////地震
    earthquake(){
    if(this.DZLM){}else{
        state.ST=4;
        GeZiManager.DLLM='earthquake'
        MessageCenter.MakeMessage("UIManager","change",2);
        for(let c of GeZiManager.YuanGong){
    
    
            if([1,8].includes(c.X)||[1,8].includes(c.Y)){c.null()}else {c.blue();}
               }
        
        this.close();
            
            }
    }
    
    Dearthquake(){ 
            GeZiManager.DLLM='earthquake'
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
        let g=find("Canvas/Main Camera").getComponent(Camera)
        let l=find("Canvas/DituManager/New Node/AnimalManager/QP")
          find("Canvas/weatherManager").getComponent(weatherM).shakeCameraAndNode(g,l,13,3000)
          let a=find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).YuanGong;
          
          setTimeout(() => {
           
            for(let manager of a) {
            
            if(manager.DiXing=="grass"){manager.ReceiveMessage(b);manager.ReceiveMessage(c);}
            
               }
          }, 1500);
     let k=[GeZiManager.PCP.teammates[0].ZB,GeZiManager.PCP.teammates[1].ZB]
          let c=new SHMessage("AM",[k],GeZiManager.dm,turn.turn,"Dun")
          let b=new SHMessage("AM",[65],[1+GeZiManager.dm,"DZ"],turn.turn,"mofaT")
        
          find("Canvas/Main Camera/UIManager/magicUI").getComponent(MUI).DZLM=false    
          let o=4+GeZiManager.free
          if (o<1) {
              o=1
          }
          MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
    
       for(let a of GeZiManager.PCP.magic3){a.Magic3(GeZiManager.PCP.ZB);}
       AudioManager.instance.ZJP("magic",5)
    }
    
    
    ////////////////////////
    
    
    
    ice(){
      
            
            this.XZ(4,false,false)
           GeZiManager.DLLM='ice'
            this.close();
    }
    
    Dice(n:number){
           GeZiManager.DLLM='ice'
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
     
        MessageCenter.MakeSHMessage("AM",[n],1,GeZiManager.PCP.Pturn,"ice");
        MessageCenter.MakeSHMessage("AM",[n],GeZiManager.dm,GeZiManager.PCP.Pturn,"Qi-");
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],3+GeZiManager.free,null,"Qi-")
        for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
    
    
        AudioManager.instance.ZJP("magic",8)
    }
    
    
    
    wind(){
    
     
    
            GeZiManager.DLLM='wind'
            state.ST=4;  
     MessageCenter.MakeMessage("UIManager","change",5);
     this.close();
    
    
    }
    
    Dwind(n:number){
        console.log(n);
       GeZiManager.DLLM='wind'
        find("Canvas/weatherManager").getComponent(weatherM).Wwind(n)
       
    setTimeout(() => {
        
        AudioManager.instance.ZJP("magic",4)
    
    
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
      //  if(GeZiManager.PCP.FU[3]>0){GeZiManager.free-=1}
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],5+GeZiManager.free,null,"Qi-")
     for (let index = 0; index < 1+GeZiManager.dm; index++) {
       
        
       for(let m of GeZiManager.WindSon){m.WDT();}  
       switch (n) {
           
           case 2:for(let i=1;i<=8;i++){
               GeZiManager.getWD(2);
               MessageCenter.MakeSHMessage("AM",GeZiManager.onY(i),2,GeZiManager.PCP.Pturn,"wind");
       console.log(GeZiManager.rock+","+GeZiManager.WD)
       
       
           }
               
               break;
             
       case 4:for(let i=1;i<=8;i++){
       GeZiManager.getWD(4);
                       MessageCenter.MakeSHMessage("AM",GeZiManager.onX(i),4,GeZiManager.PCP.Pturn,"wind");
               
              
          
                   }
                       
                       break;
       case 6:for(let i=8;i>=1;i--){
           GeZiManager.getWD(6);
                           MessageCenter.MakeSHMessage("AM",GeZiManager.onX(i),6,GeZiManager.PCP.Pturn,"wind");
                   
                   
        
                       }
                           
                           break;
        case 8:for(let i=8;i>=1;i--){
           GeZiManager.getWD(8);
                               MessageCenter.MakeSHMessage("AM",GeZiManager.onY(i),8,GeZiManager.PCP.Pturn,"wind");
                       
                           }
                               
                               break;
           default:
               break;
       }
       
       
    
       
       
       GeZiManager.Ban=[];
    
      for (let a of GeZiManager.GR) {
      a.wind()
        
      }
       
    } 
       
       for(let a of GeZiManager.PCP.magic3){a.Magic3(GeZiManager.PCP.ZB);}
    }, 600);
   AudioManager.instance.ZJP("magic",6)

       }
    
    
    
    
    W2(){GeZiManager.GeZi=2;MessageCenter.MakeMessage("UIManager","change",2.5);}
    W4(){GeZiManager.GeZi=4;MessageCenter.MakeMessage("UIManager","change",2.5);}
    W6(){GeZiManager.GeZi=6;MessageCenter.MakeMessage("UIManager","change",2.5);}
    W8(){GeZiManager.GeZi=8;MessageCenter.MakeMessage("UIManager","change",2.5);}
    
    
    
    
    
    thunder(){
       

    
        this.XZ(5,false,false)
        GeZiManager.DLLM='thunder'
        this.close();
    
        
    }
    
    Dthunder(n:number){
       GeZiManager.JL=0;
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
    MessageCenter.MakeSHMessage("AM",[n],1,0,"getOneC")
    
    this.fadeINAndA(find("Canvas/weatherManager/th"),300);
    setTimeout(() => {if (GeZiManager.Tcharacter) {
        GeZiManager.Tcharacter.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("thunder");
    }
    
        this.fadeOutAndDisappear(find("Canvas/weatherManager/th"),300);
    }, 300);
    
        MessageCenter.MakeSHMessage("AM",[n],2,GeZiManager.PCP.Pturn,"mofa");
       if (GeZiManager.Tcharacter.qi==0) {
        GeZiManager.Tcharacter.MZL(1)
       }
       let o=6+GeZiManager.free
       if (o<1) {
           o=1
       }
       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
        for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
    
        AudioManager.instance.ZJP("magic",10)
    }
    
    
    
    TP(){ 
     

    
        this.XZ(5,false,true)
    GeZiManager.DLLM='TP'
        this.close();
      }
    
    
    
        DTP(n:number){
            for(let a of GeZiManager.PCP.magic2){a.Magic2();}
            
         if (GeZiManager.BanMove.includes(n)) {
            
         }else{     GeZiManager.PCP.To(n,0);}
       
         let o=5+GeZiManager.free
         if (o<1) {
             o=1
         }
         MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
            for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
   AudioManager.instance.ZJP("magic",7)

        }
    
        banana(){
       
            this.XZ(4,true,true)
            GeZiManager.DLLM='banana'
                this.close();
            
        }
        
        Dbanana(n:number){
            for(let a of GeZiManager.PCP.magic2){a.Magic2();}
      
                       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"TNS")
            
            if (GeZiManager.BanMove.includes(n)||GeZiManager.aos.includes(n)) {
                
            }else{   MessageCenter.MakeSHMessage("AM",[n],7,GeZiManager.PCP.Pturn,"FTP");}
            let o=3+GeZiManager.free
            if (o<1) {
                o=1
            }
            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
            for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
        }
    
    
    
    BZ(){
    
    
        state.ST=4;
         
        GeZiManager.DLLM='BZ'
        this.XZ(2,false,false);  
        this.close();
    
    }
    
    DBZ(n:number){
    
    
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
       
        MessageCenter.MakeSHMessage("AM",[n,GeZiManager.PCP.color],14,GeZiManager.PCP.Pturn,"FTP");
        let o=4+GeZiManager.free
        if (o<1) {
            o=1
        }
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
        for(let a of GeZiManager.PCP.magic3){a.Magic3(GeZiManager.PCP.ZB);}
   
    
      AudioManager.instance.ZJP("magic",11)
    
    }
    
    
    
    tree(){
       
        state.ST=4;
         
        GeZiManager.DLLM='tree'
        this.XZ(3,true,true);  
        this.close();
    
    }
    
    Dtree(n:number){
    for(let a of GeZiManager.PCP.magic2){a.Magic2();}
    let j=GeZiManager.Rhun
    if (GeZiManager.PCP.color=="Blue") {
        j=GeZiManager.Bhun
    }
    let Y=1
  let C=GeZiManager.PCP.faceTo
    switch (j) {
        case 0:Y=1
     
        if (GeZiManager.PCP.color=="Blue") {
           GeZiManager.Bhun+=1
        }else{GeZiManager.Rhun+=1}
            GeZiManager.getHUN()
            break;
            case 1:Y=24
            
            break;
            case 2:Y=21
            
            break;
            case 3:Y=26
            
            break;
        default:Y=28;
        C=7
for (let o of GeZiManager.PCP.teammates) {
if(o.Pturn<=C){C=o.Pturn}
    
}
       
            break;
    }
    MessageCenter.MakeSHMessage("AM",[n,C],1,GeZiManager.PCP.Pturn,"FTP");
    let o=3+GeZiManager.free
    if (o<1) {
        o=1
    }
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],o,null,"Qi-")
    for(let a of GeZiManager.PCP.magic3){a.Magic3(GeZiManager.PCP.ZB);}
    
  AudioManager.instance.ZJP("magic",11)
}
    
    tui(){
    
    
        let a  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,1)
        find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
         
        for(let c of GeZiManager.YuanGong){
    
    
            if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
          
        }
    
        this.close();
        GeZiManager.DLLM='tui'
        state.ST=4;
    
    
    
    
    
    }
    
    
    
    Dtui(n:number){
        n = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,1)
        for(let a of GeZiManager.PCP.magic2){a.Magic2();}
    
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],3+GeZiManager.free,GeZiManager.PCP.Pturn,"Qi-")
        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"Qi+")
        MessageCenter.MakeSHMessage("AM",[n],[GeZiManager.PCP.turn8([GeZiManager.PCP.faceIs(n)])[0],0.3],GeZiManager.PCP.Pturn,"move")
        console.log(GeZiManager.PCP.faceIs(n))
        for(let a of GeZiManager.PCP.magic3){a.Magic3(n);}
    
      AudioManager.instance.ZJP("magic",14)
    }
    
    
    
    
    
    
    ReceiveMessage(message: Message): void {
        if(message instanceof SHMessage&& message.Type=="MUI"){
    console.log(message)   
    for(let a of GeZiManager.PCP. XD1){a.xd1(message,GeZiManager.PCP.Pturn)}      
    let n,l
    MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNJJ[5]+GeZiManager.TNC[4],GeZiManager.PCP.Pturn,"TN-");
    switch (message.SHtype) {
        case 'fireball':this.Dfireball(message.Content);n="火球术";l="FASHU2-3"//if(this.PPC()){this.MCD[1]+=2}
            
            break;
            case 'falsh':this.Dfalsh();n="闪现";l="FASHU2-4"//if(this.PPC()){this.MCD[2]+=3}
            
            break;
            case 'cure':this.Dcure(message.Content);n="治疗术";l="FASHU2-5"//if(this.PPC()){this.MCD[3]+=3}
            
            break;
            case 'wind':this.Dwind(message.Content);n="大风吹";l="FASHU2-8"//if(this.PPC()){this.MCD[4]+=4};
            
            break;
            case 'ice':this.Dice(message.Content);n="冰冻";l="FASHU2-10"//if(this.PPC()){this.MCD[5]+=4}
            
            break;
            case 'earthquake':this.Dearthquake();n="地震";l="FASHU2-7"//if(this.PPC()){this.MCD[6]+=5}
            
            break;
            case 'TP':this.DTP(message.Content);n="传送";l="FASHU2-9"//if(this.PPC()){this.MCD[7]+=5}
            
            break;
            case 'thunder':this.Dthunder(message.Content);n="雷霆万钧";l="FASHU2-12"//if(this.PPC()){this.MCD[8]+=5}
            
            break;
            case 'banana':this.Dbanana(message.Content);n="香蕉";l="FASHU2-11"//if(this.PPC()){this.MCD[9]+=3}
            
            break;
            case 'KB':this.DKB(message.Content);n="激怒";l="FASHU2-6"//if(this.PPC()){this.MCD[1]+=4}
            
            break;
            case 'BZ':this.DBZ(message.Content);n="魔法矩阵";l="FASHU2-14"//if(this.PPC()){this.MCD[1]+=4}
            
            break;
            case 'tree':this.Dtree(message.Content);n="通灵召唤";l="FASHU2-13"//if(this.PPC()){this.MCD[1]+=4}
            
            break;
            case 'pig':this.Dpig();n="光阴似箭";l="FASHU2-15"//if(this.PPC()){this.MCD[1]+=4}
            
            break;
            case 'tui':this.Dtui(message.Content);n="推";l="FASHU2-16"//if(this.PPC()){this.MCD[1]+=4}
            
            break;
        default:
            break;
    }
    
    
     SubtitleManager.show(
                    {
                        bgSprite: GeZiManager.PCP.color,
                        image1:GeZiManager.PCP.getComponent(SXX).Toux,
                        text1: "使用了法术"+n,
                        image2: this.node.children[0].children[0].getChildByName(l).getComponent(Sprite).spriteFrame,
                        text2: "",
                        duration: 3
                    })
    
    
    GeZiManager.clean();   
    
        }
    }
    
    
    
    
    
    moveRight(node: Node, duration: number, distance: number) {
        const startPos = node.position;
        const endPos = new Vec3(startPos.x + distance, startPos.y, startPos.z);

        tween(node)
            .to(duration, { position: endPos })
            .start();
    }

    
    DK(){this.moveRight(this.node,0.5,500);}
    GB(){this.moveRight(this.node,0.5,-500)}
    
    
    
    
    
    
    
    
    
    
    
    
    getc(nu:number){
    
    
        switch (nu) {
          case -1:
          
           case 1:return GeZiManager.P1
              
              break;
              case 2:return GeZiManager.P2
              
              break;
              case 3:return GeZiManager.P3
              
              break;
              case 4:return GeZiManager.P4
              
              break;
              case 5:return GeZiManager.P5
              
              break;
              case 6:return GeZiManager.P6
              
              break;
        
           default:
              break;
        }
        } 
    }
    /*
     1  火球(fireball)【2】{2}：施法者指定以自身为中心的4格范围内的任意一格引导火球，在下一次轮到施法者的回合时，该指定格火球降下，对该格单位造成2点魔法伤害，若命中地雷会直接将其引爆
    
     5  闪现(flash)【3】{3}：施法者立即位移至面朝方向的的第二格上，可以越过任意单位（若面朝方向第二格上已有单位则无法使用）
    
     6  治疗术(crue)【3】{3}：施法者指定以自身为中心的3格范围内的一个非敌方且可回复生命值的单位，使其回复1点生命值
    
     3  地震(earthquake)【4】{5}：施法者进行蓄力，在下一次轮到施法者的回合时立即使地面上的所有实体单位受到1点伤害（水中不受影响）
    
     4  飓风(wind)【5】{4}：施法者指定一个方向，使场上所有单位向指定方向进行正常力度的位移判定
    
     8  传送(TP)【7】{5}：施法者指定场上没有实体单位的任意一格，立即位移至该格（朝向不变）
    
     2  冰冻(frozen)【3】{4}：施法者指定以自身为中心的3格范围内的任意一格（不包括自己），使该格单位无法移动和转身且获得1点假血（抵消1点伤害），持续到下一次轮到施法者的回合为止
    
     7  香蕉皮(banana)【2】{3}：施法者指定以自身为中心的3格范围内没有单位的一格，使该格地面变滑，任意单位在经过变滑地面时会继续位移至下一格（除非有其他单位阻挡在下一格）
    
     9  雷电(thunder)【6】{5}：施法者指定场上的任意单位，立即对其造成2点魔法伤害
    
     10  狂暴(crazy)【4】{4}：（该法术的释放不消耗体能）施法者立即获得2点体能，直到下回合结束
    
     */