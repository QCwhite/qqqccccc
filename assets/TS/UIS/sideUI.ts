// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, instantiate, Label, Prefab, SpriteAtlas } from 'cc';
const {ccclass, property} = _decorator;

import CustomButton from "../BASE/CButton";
import Character from "../BASE/Character";
import ComponentBase from "../BASE/ComponentBase";
import { gif1 } from "../BASE/spineANDgif/gif";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import heart from "./heart";
import HP from "./heart";
import Shops from './shop/shops';
import { find } from 'cc';
import { resources, JsonAsset } from 'cc';
import SXX from '../Scharacter/SXX';
import { Widget, UITransform, view } from 'cc';
import { Sprite } from 'cc';
import { log } from 'console';
interface SkillData {
    id: string; // 技能ID
    name: string; // 技能名称
    description: string; // 技能介绍
    jieS: string; // 解锁条件
    effect:string
}
@ccclass('SideUI')
export default class sideUI extends ComponentBase {
  

        PC:Character=null;
        MaxHP: number=2;
        HP:number=0;
     qi:number=0;
        
     SC:number=-1  
        
        @property(Number)
         pturn:number=0;
         @property(Prefab)
         heart:Prefab=null;
         
         @property(Prefab)
        
         hearts:HP[]=[];
         @property(SpriteAtlas)
         Atlas:SpriteAtlas=null;
        
         start () {
     
     
     GeZiManager.sideUI.push(this);
     this.PC=GeZiManager.getc(this.pturn)
     this.node.getChildByName("TN").getComponent(CustomButton).disableButton()
    console.log(  this.PC)
    this.PC.sideUI=this
    
     }
     

setJN(){
for (let index = 0; index < GeZiManager.getc(this.pturn).getComponent(SXX).JNs; index++) {
  this.node.getChildByName("JN").children[index].active=true
  this.node.getChildByName("JN").children[index].children[0].getComponent(gif1).spriteFrame=GeZiManager.getc(this.pturn).getComponent(SXX).getSkill(index+1)
  
}

 this.node.getChildByName("Toux").getChildByName("gif").getComponent(Sprite).spriteFrame=GeZiManager.getc(this.pturn).getComponent(SXX).Toux

}

setEQ(n:string){
    let o=find("Canvas/DituManager/New Node/AnimalManager")
   
this.node.getChildByName("equipment").getChildByName(n[0]).getComponent(gif1).spriteFrame=o.getComponent(Shops).find(10,n,"",0)


}

SEEEQA(){
    if (GeZiManager.skillDataMap[this.PC.weapon.TheNumber]?.name) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
    
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.weapon.TheNumber]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.weapon.TheNumber]?.effect;

}
SEEEQB(){
    if (GeZiManager.skillDataMap[this.PC.body.TheNumber]?.name) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
    
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.body.TheNumber]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.body.TheNumber]?.effect;

}
SEEEQC(){
    if (GeZiManager.skillDataMap[this.PC.shose.TheNumber]?.name) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
    
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.shose.TheNumber]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.shose.TheNumber]?.effect;

}
SEEEQD(){
    if (GeZiManager.skillDataMap[this.PC.accessory.TheNumber]?.name) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
    
    this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.accessory.TheNumber]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.accessory.TheNumber]?.effect;

}

     
     setM(){
         
        this.hearts=[];
     for(let a of this.node.getChildByName("HPx").children){
         a.destroy();}
        
         this.MaxHP=this.PC.MaxHP;
         this.HP=this.PC.HP;
         this.qi=this.PC.qi;
        
         for(let i=1;i<=this.MaxHP;i++){
           let HP1=instantiate(this.heart)
           HP1.setParent(this.node.getChildByName("HPx"))
        HP1.getComponent(heart).DB=i;
         
        HP1.active=true;
       
        }
      
         for(let h of this.hearts){h.node.setScale(h.node.getScale()[1],h.node.getScale()[1])}
         this.PC.UI.push(this)
         
        this.setHP();
         }
     
     
     setS(n:number){
         if(this.pturn==n){       
         switch (this.pturn) {
         case 1:this.PC=GeZiManager.P1;
             
             break;
             case 2:this.PC=GeZiManager.P2;
             
             break;
             case 3:this.PC=GeZiManager.P3;
             
             break;
             case 4:this.PC=GeZiManager.P4;
             
             break;
             case 5:this.PC=GeZiManager.P5;
             
             break;
             case 6:this.PC=GeZiManager.P6;
             
             break;
         default:
             break;
     }
     this.MaxHP=this.PC.MaxHP;
     this.HP=this.PC.HP;
     this.qi=this.PC.qi;
   //  console.log(this.PC.MaxHP)
    // console.log(this.PC.Pturn)
     for(let i=1;i<=this.MaxHP;i++){
       let HP=instantiate(this.heart)
       HP.setParent(this.node.getChildByName("HPx"))
     HP.getComponent(heart).DB=i;
       
  //   console.log(  HP.getComponent(heart).DB)
     }
     
     for(let h of this.hearts){h.node.setScale(h.node.getScale()[1],h.node.getScale()[1])}
     this.PC.UI.push(this)
     
     this.setQi();
     
     
         }
      this.PC.sideUI=this  
        
        }
     
     
         setHP(){
             this.MaxHP=this.PC.MaxHP;
             this.HP=this.PC.HP;
         if(this.HP<=0){ this.HP=0}
         
           //  console.log(this.PC.MaxHP)
         
           //  console.log(this.PC.HP)
           //  console.log(this.PC.Pturn)
         
         
             let n=this.MaxHP-this.HP;
         for(let mannger of this.hearts){
             mannger.to1();
             
         }
         
          for(let i=this.MaxHP;i>this.HP;i--){
         for(let mannger of this.hearts){
           if(mannger.DB==i){mannger.to0();}
         
         }
         
         
         
         }
         
         }
     
     
     
         setQi(){
     
             let a=""+ this.PC.qi;
             this.node.getChildByName("qin").getComponent(Label).string=a
     
         }
         
         setMaxHP(){this.MaxHP=this.PC.MaxHP;}
     
     
     
     
         ReceiveMessage(message: Message) {
   //  console.log(this.PC.Pturn!=turn.turn)
        
          this.TN()
          this.TNS()
          
     if (message) {
         this.setHP();
         this.setQi();
         this.FU()
     }
        for (let a of GeZiManager.sideUI) {
         if (a.PC&&a.PC.Pturn!=turn.turn) {
             a.node.getChildByName("TN").getComponent(CustomButton).disableButton()
         }else{a.node.getChildByName("TN").getComponent(CustomButton).enableButton()}
         
        }  
     
     
          }
     
     
     useTN(){
     
         MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.TNS,GeZiManager.PCP.Pturn,"UTNS");
     
     }
     
     MB(){
     
     
     
     }
     
     
     
     TN(){
     
     this.node.getChildByName("TN").children[2].getComponent(gif1).changeF(GeZiManager.PCP.TN,1)
     
     
     }
     TNS(){
     
     
        let a= this.node.getChildByName("TN").children[1]
     a.children[0].active=false
     a.children[1].active=false
     a.children[2].active=false
     a.children[3].active=false
     a.children[4].active=false
     for (let index = 0; index <GeZiManager.PCP.TNS ; index++) {
     a.children[index].active=true
         
     }
     
     }
     
     FU(){
     let d
     let p=filterArray(this.PC.FU)
   //  console.log(p)
     for (let index = 0; index <p.length;index++) {
        
        this.node.getChildByName("FU").children[index].getComponent(gif1).spriteFrame=null
        
        
    }


for (let index = 0; index <p.length;index++) {
   
        switch(this.PC.FU[index]){
     
     
            case 0:d="Huo"
               
               break;
               case 1:d="Tu"
               
               break;
               case 2:d="Shui"
               
               break;
               case 3:d="Feng"
               
               break;
               case 10:d="Wan"
               
               break;
            default:continue; 
               break;
    
    
    }
    this.node.getChildByName("FU").children[index].getComponent(gif1).spriteFrame=this.node.getChildByName("FU").children[index].getComponent(gif1).atlas1.getSpriteFrame(d)
    
    
}







    
    
function filterArray(arr) {
    return arr.filter(item => typeof item === 'number' && item >= 0 && item !== 0.5);
}
     
     }
     
     
     SE(){}
     SJ(){}


 setJN1(){
  //  console.log(GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-1"])
     if (GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-1"]) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
  this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-1"]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-1"]?.description;


 }


setJN2(){
   // console.log(GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-2"])
     if (GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-2"]) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
  this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-2"]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-2"]?.description;


 }
 setJN3(){
 //   console.log(GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-3"])
     if (GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-3"]) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
  this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-3"]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-3"]?.description;


 }
 setJN4(){
   // console.log(GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-4"])
     if (GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-4"]) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
  this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-4"]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-4"]?.description;


 }
 setJN5(){
  //  console.log(GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-1"])
     if (GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-1"]) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
  this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-5"]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-5"]?.description;


 }
 setJN6(){
  //  console.log(GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-6"])
     if (GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-6"]) {
        this.node.getChildByName("EQM").getChildByName("Sprite").active=true
    }else{this.node.getChildByName("EQM").getChildByName("Sprite").active=false}
  this.node.getChildByName("EQM").getChildByName("Label").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-6"]?.name;
    this.node.getChildByName("EQM").getChildByName("description").getComponent(Label).string=GeZiManager.skillDataMap[this.PC.node.getComponent(SXX).Snumber+"-6"]?.description;


 }


setZT(){
console.log(this.PC.ZT)
for (let c of this.node.getChildByName("ZT").children) {

c.active=false


}

for (let c of this.PC.ZT) {
this.node.getChildByName("ZT").getChildByName(c).active=true
  if (c=="KB") {
    this.node.getChildByName("ZT").getChildByName(c).children[0].getComponent(Label).string=this.PC.KB+""
  } 
  
  if (c=="ICE") {
    this.node.getChildByName("ZT").getChildByName(c).children[0].getComponent(Label).string=this.PC.ice+""
  } 

if (c=="DY") {
    this.node.getChildByName("ZT").getChildByName(c).children[0].getComponent(Label).string=this.PC.KB+""
  } 

  
}


}






}