// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Button, find, Label, Node, Sprite, SpriteAtlas } from 'cc';
const {ccclass, property} = _decorator;

import CustomButton from "../../BASE/CButton";
import ComponentBase from "../../BASE/ComponentBase";

import GeZi from "../../Ditu/Gezi/GeZi";
import AnimalManager from "../../Manager/AnimalManager";
import GeZiManager from "../../Manager/GeZiManager";

import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import SXX from "../../Scharacter/SXX";
import player from "../../game/player";
import state from "../../game/time/state";
import turn from "../../game/time/turn";
import KOG from "../KOG";
import NWshopM from "./NWshopM";
import shopM from "./ShopM";
import Shops from "./shops";
import { gif1 } from '../../BASE/spineANDgif/gif';
import { resources, JsonAsset } from 'cc';
import { AudioManager } from '../../BASE/music';

@ccclass('NWshopUI')
export default class NWshopUI extends ComponentBase {

    Sk:number=0;
        SUI:Node=null;
        A1:Node=null;
        A2:Node=null;
        A3:Node=null;
        A4:Node=null;
       A5:Node=null;
        XJ:Node=null;
        A7:Node=null;
        Dqizi:Node=null;
        DL:Node=null;
        MU:Node=null;
        NWj:Node=null;
        leveUP:Node=null;
        changL:Node=null;
        AM:Node=null
        TOU:Node=null;
        @property({ type: SpriteAtlas })
        Atlas: SpriteAtlas = null;
        @property({ type: SpriteAtlas })
        Atlas2: SpriteAtlas = null;
        @property({ type: SpriteAtlas })
        Atlas3: SpriteAtlas = null;
    yes:Node;
    DW:number=0;
    i:number=1
    KTT:number=3;
    onLoad(): void {
        this.MU=find("Canvas/UIManager/magicUI");
    
       // this.SUI= find("Canvas/UIManager/shopUI/1L/A1")
     this.A1= find("Canvas/Main Camera/UIManager/NWshop/1L/pu1")
     this.A2= find("Canvas/Main Camera/UIManager/NWshop/1L/pu2")
     this.A3= find("Canvas/Main Camera/UIManager/NWshop/1L/pu3")
     this.A4= find("Canvas/Main Camera/UIManager/NWshop/1L/pu4")
     this.XJ= find("Canvas/Main Camera/UIManager/NWshop/NG")
     this.A5= find("Canvas/Main Camera/UIManager/NWshop/1L/pu5")
    this.NWj=find("Canvas/Main Camera/UIManager/NWshop/2L/NW/NW")
     this.AM=find("Canvas/DituManager/New Node/AnimalManager")
     this.TOU=find("Canvas/Main Camera/UIManager/TOUI")
     this.A7=find("Canvas/Main Camera/UIManager/NWshop/New Button-001")
     this.MU=find("Canvas/Main Camera/UIManager/NWshop/New Button")
    
    // this.TOU.active=false
    }
    shop(){    
     
    AudioManager.instance.ZJP("ui",5)
        MessageCenter.MakeMessage("UIManager","change",3.5);
       
       

         this.ST();
   
        
       }
    
    
    
    
    shopX(){
        MessageCenter.MakeMessage("UIManager","change",1);
    
    
    //GeZiManager.PCP.ST();
    }
    
    TOUI(n:number){
    let k=GeZiManager.PCP.getComponent(SXX).getTO(n)
        this.TOU.active=true;
        this.TOU.children[0].children[0].getComponent(Label).string=k[0]
       
        this.TOU.children[1].children[0].getComponent(Label).string=k[1]
        this.TOU.children[2].children[0].getComponent(Label).string=k[2]
        NWshopM.NWN[0]=k[0]
        NWshopM.NWN[1]=k[1]
        NWshopM.NWN[2]=k[2]
    }
    NG(){
    
        GeZiManager.qing()
            MessageCenter.MakeMessage("AM",turn.turn,"getZB")
            GeZiManager.FTPN=3.5;
        GeZiManager.JL=4;
           state.ST=2;
                   
                    
           
           MessageCenter.MakeMessage("UIManager","change",-1);
         
        
           for(let manager of GeZiManager.YuanGong){
          
          manager.getFar(GeZiManager.JL);
        if(GeZiManager.BanMove.includes(manager.ZB)||GeZiManager.qins.includes(manager.ZB)){
             manager.red()}
             if(GeZiManager.AllObstacles[0]!=null){
             for(let a of GeZiManager.AllObstacles){
              if(a.ZB==manager.ZB&&!(GeZiManager.grass.includes(a.ZB)&&a.ObstaclesName!="qizi")){manager.red()}
          if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color!=GeZiManager.PCP.color&&a.color!="S02"){manager.red()}
            
            }}
        }
        
        }



DXJ(){


    MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],0,GeZiManager.PCP.Pturn,"XJ")
    this.shopX()


}






    
    
    NW(){
        console.log(NWshopM.NWN)
    
     
    
    NWshopM.NWN=NWshopM.get5(5)
    console.log(NWshopM.NWN[0])
    console.log( this.AM.getComponent(Shops))
        this.A1.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(10,NWshopM.NWN[0].toString())
        KOG.DSP( this.A1.children[0],NWshopM.NWN[0].toString())
        this.A2.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(10,NWshopM.NWN[1].toString())
        KOG.DSP( this.A2.children[0],NWshopM.NWN[1].toString())
        this.A3.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(10,NWshopM.NWN[2].toString())
        KOG.DSP( this.A3.children[0],NWshopM.NWN[2].toString())
        this.A4.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(10,NWshopM.NWN[3].toString())
        KOG.DSP( this.A4.children[0],NWshopM.NWN[3].toString())
        this.A5.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(10,NWshopM.NWN[4].toString())
        KOG.DSP( this.A5.children[0],NWshopM.NWN[4].toString())
        this.A1.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[0])
        this.A2.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[1])
        this.A3.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[2])
        this.A4.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[3])
        this.A5.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[4])
    
        MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[4],GeZiManager.PCP.Pturn,"NW")
   NWshopM.NWDJ=true;
        this.ST();

    }
    
    NWF(n:number){
        console.log(NWshopM.NWN)
    
     
      this.TOU.active=true;
    
    let k
    switch (n) {
        case 1:k=GeZiManager.PCP.getComponent(SXX).JX1
            
            break;
            case 2:k=GeZiManager.PCP.getComponent(SXX).JX2
            
            break;
            case 3:k=GeZiManager.PCP.getComponent(SXX).JX3
            
            break;
    
        default:k=GeZiManager.PCP.getComponent(SXX).JX1
            break;
    }
    k=this.mArr1Arr2(k,k,k,k,k,k,k)
        NWshopM.NWN=this.getRAA(k,5)
        console.log(NWshopM.NWN)
            this.A1.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(2,NWshopM.NWN[0])
            this.A2.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(2,NWshopM.NWN[1])
            this.A3.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(2,NWshopM.NWN[2])
            this.A4.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(2,NWshopM.NWN[3])
            this.A5.children[0].getComponent(Sprite).spriteFrame= this.AM.getComponent(Shops).find(2,NWshopM.NWN[4])
           
            this.A1.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[0])
            this.A2.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[1])
            this.A3.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[2])
            this.A4.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[3])
            this.A5.getChildByName("Xlabel").getComponent(Label).string=""+this.findNameById(NWshopM.NWN[4])
        
            //MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[4],GeZiManager.PCP.Pturn,"NW")
        
            this.ST();
    
    
    
    
    
    }
    YFH(){let o ,j ;
        j=[]
    if (GeZiManager.PCP.color=="Blue") {
      o=[GeZiManager.P1,GeZiManager.P3,GeZiManager.P5]
    }else {o=[GeZiManager.P2,GeZiManager.P4,GeZiManager.P6]
    }
    for(let a of o){
    
    if (a.LST<0) {
        j.push(a.Pturn)
    }
    
    }
    console.log(j)
    
    for (let index = 1; index <= 6; index++) {
        this.node.children[5].children[index].active=false
         
     }
    for (let index = 0; index < j.length; index++) {
          this.node.children[5].children[j[index]].children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.getc(j[index]).node.getComponent(SXX).Toux
       this.node.children[5].children[j[index]].active=true
        
    }
    
    }
    
    fh1(){
    
     this.NWFH(1)   
    }
    
    
    fh2(){
    
        this.NWFH(2)   
       }
    
       fh3(){
    
        this.NWFH(3)   
       }
    
       fh4(){
    
        this.NWFH(4)   
       }
    
       fh5(){
    
        this.NWFH(5)   
       }
    
       fh6(){
    
        this.NWFH(6)   
       }
                   
    
    
    
    
    NWFH(n:number){
    state.ST=0.5
    switch (n) {
        case 1:GeZiManager.Tcharacter=GeZiManager.P1
            
            break;
            case 2:GeZiManager.Tcharacter=GeZiManager.P2
            
            break;
            case 3:GeZiManager.Tcharacter=GeZiManager.P3
            
            break;
            case 4:GeZiManager.Tcharacter=GeZiManager.P4
            
            break;
            case 5:GeZiManager.Tcharacter=GeZiManager.P5
            
            break;
            case 6:GeZiManager.Tcharacter=GeZiManager.P6
            
            break;
        default:
            break;
    }
        MessageCenter.MakeMessage("UIManager","change",-1);
    
        for(let manager of GeZiManager.YuanGong){
    let a=new Message("",[65],-1)
            manager.ReceiveMessage(a) ;   
    }
    MessageCenter.MakeMessage("AM",turn.turn,"getZB")
    
    GeZiManager.GeZis =GeZiManager.getF(GeZiManager.PCP.ZB,3)
    
    let c=new Message("",GeZiManager.GeZis,1);
    for (let m of GeZiManager.YuanGong) {
    
    
     
       // manager.getFar(n+GeZiManager.JL);
            
                m.red();
            
               m.ReceiveMessage(c);
          
    if(GeZiManager.BanMove.includes(m.ZB)){
    m.red();
    m.out();

}
    console.log(GeZiManager.Tcharacter)
    }
    
      
    
    
    
    }
    
    
    dd1(){
    
        MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[0],GeZiManager.PCP.Pturn,"buy")
    //MessageCenter.MakeMessage("BUI",[3],"Ban");
    
    //GeZiManager.PCP.KTT-=1;
    this.TOU.active=false
    MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
    
    }
    dd2(){
    
        MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[1],GeZiManager.PCP.Pturn,"buy")
    //MessageCenter.MakeMessage("BUI",[3],"Ban");
    
    //GeZiManager.PCP.KTT-=1;
    this.TOU.active=false
    MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
    
    }
    dd3(){
    
        MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[2],GeZiManager.PCP.Pturn,"buy")
    //MessageCenter.MakeMessage("BUI",[3],"Ban");
    
    //GeZiManager.PCP.KTT-=1;
    this.TOU.active=false
    MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
    
    }
    
    
    dA1(){
    console.log(NWshopM.NWN[0])
        MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[0],GeZiManager.PCP.Pturn,"buy")
    //MessageCenter.MakeMessage("BUI",[3],"Ban");
    
    //GeZiManager.PCP.KTT-=1;
    this.ST();
    this.QK();
    MessageCenter.MakeMessage("UIManager","change",1);
    }
    
    
    dA2(){
        MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[1],GeZiManager.PCP.Pturn,"buy")
       // GeZiManager.PCP.KTT-=1
        this.ST();
        this.QK();
        MessageCenter.MakeMessage("UIManager","change",1);
    
    }
        dA3(){
    
            MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[2],GeZiManager.PCP.Pturn,"buy")
          //  GeZiManager.PCP.KTT-=1
            this.ST();
            this.QK();
            MessageCenter.MakeMessage("UIManager","change",1);
    
    
        }
    
        dA4(){
    
            MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[3],GeZiManager.PCP.Pturn,"buy")
           // GeZiManager.PCP.KTT-=1
            this.ST();
            this.QK();
            MessageCenter.MakeMessage("UIManager","change",1);
               }
        
           
        
        
        
        
        
            dTS(){
        
                MessageCenter.MakeGMessage("NWSU",[GeZiManager.PCP.ZB],NWshopM.NWN[4],GeZiManager.PCP.Pturn,"buy")
            //    GeZiManager.PCP.KTT-=1
            this.ST();
            this.QK();
            MessageCenter.MakeMessage("UIManager","change",1);
            }
    
    
    
    
    
                ST(){

if (!NWshopM.NWDJ) {
   find("Canvas/Main Camera/UIManager/NWshop/1L/pu1/New Button").active=false
        find("Canvas/Main Camera/UIManager/NWshop/1L/pu2/New Button").active=false
            find("Canvas/Main Camera/UIManager/NWshop/1L/pu3/New Button").active=false
                find("Canvas/Main Camera/UIManager/NWshop/1L/pu4/New Button").active=false
                    find("Canvas/Main Camera/UIManager/NWshop/1L/pu5/New Button").active=false
                     
}else{    find("Canvas/Main Camera/UIManager/NWshop/1L/pu1/New Button").active=true
 find("Canvas/Main Camera/UIManager/NWshop/1L/pu2/New Button").active=true
 find("Canvas/Main Camera/UIManager/NWshop/1L/pu3/New Button").active=true
 find("Canvas/Main Camera/UIManager/NWshop/1L/pu4/New Button").active=true
 find("Canvas/Main Camera/UIManager/NWshop/1L/pu5/New Button").active=true
}








                   // this.A1.getChildByName("Xlabel").getComponent(Label).string=NWshopM.TS[0]+","+NWshopM.nss[0]
                   // this.A2.getChildByName("Xlabel").getComponent(Label).string=NWshopM.TS[1]+","+NWshopM.nss[1];
                  //  this.A3.getChildByName("Xlabel").getComponent(Label).string=NWshopM.TS[2]+","+NWshopM.nss[2];
                  //  this.A4.getChildByName("Xlabel").getComponent(Label).string=NWshopM.TS[3]+","+NWshopM.nss[3];
                   // this.A5.getChildByName("Xlabel").getComponent(Label).string=NWshopM.TS[4]+","+NWshopM.nss[4];
                   
                   // this.A1.getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).PM(NWshopM.TS[0]);
                   // this.A2.getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).PM(NWshopM.TS[1]);
                   // this.A3.getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).PM(NWshopM.TS[2]);
                  //  this.A4.getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).PM(NWshopM.TS[3]);
            
                  //  this.A5.getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).PM(NWshopM.TS[4]);
                  NWshopM.getBNWN();
                  NWshopM.getRNWN();     
    
                // let o=GeZiManager
                  this.NWj.getComponent(Button).interactable=true
                  this.XJ.children[1].getComponent(CustomButton).enableButton()
                  
                  let a=NWshopM.BNWN
    if (GeZiManager.PCP.color=="Red") {
        a=NWshopM.RNWN
    }
                    this.NWj.parent.getChildByName("Xlabel").getComponent(Label).string=a.toString()
                  if (GeZiManager.PCP.qi<a+GeZiManager.free) {
        this.NWj.getComponent(Button).interactable=false
    }
    

if (GeZiManager.PCP.color=="Red") {
    if (GeZiManager.Rhun<3) {
      //  this.MU.getComponent(CustomButton).disableButton()
    }else{
        this.MU.getComponent(CustomButton).enableButton()
    }
}

else {
    if (GeZiManager.Bhun<3) {
       // this.MU.getComponent(CustomButton).disableButton()
    }else{this.MU.getComponent(CustomButton).enableButton()}
}


    if (GeZiManager.PCP.TN<this.getTNC(5)) {
        this.NWj.getComponent(Button).interactable=false
        this.XJ.children[1].getComponent(CustomButton).disableButton()
    }else
    
    
    if (NWshopM.NGS>3) {
      //  this.XJ.children[1].getComponent(Button).interactable=false
    }
    this.XJ.getChildByName("Xlabel").getComponent(Label).string=NWshopM.NGS.toString()
    
       /*            let a
                switch (turn.turn) {
                    case 1:a=NWshopM.k1
                        break;
                        case 2:a=NWshopM.k2
                        break;
                        case 3:a=NWshopM.k3
                        break;
                        case 4:a=NWshopM.k4
                        break;
                        case 5:a=NWshopM.k5
                        break;
                        case 6:a=NWshopM.k6
                        break;
                    default:a=NWshopM.k6
                        break;
                }   
                    this.A1.getChildByName("DeA").getComponent(Label).string=a[0]
                    this.A2.getChildByName("DeA").getComponent(Label).string=a[1]
                    this.A3.getChildByName("DeA").getComponent(Label).string=a[2]
                    this.A4.getChildByName("DeA").getComponent(Label).string=a[3]
                    this.A5.getChildByName("DeA").getComponent(Label).string=a[4]
    
    
                  console.log(NWshopM.k1)
                  console.log(NWshopM.k2)
                  console.log(NWshopM.k3)
                  console.log(NWshopM.k4)
                  console.log(NWshopM.k5)
                  console.log(NWshopM.k6)
    
    
    
    //this.node.getChildByName("New Label").getComponent(Label).string=GeZiManager.PCP.KTT+""
    if(GeZiManager.PCP.KTT<=0){for(let a of [this.A1,this.A2,this.A3,this.A4,this.A5]){a.getChildByName("New Button").getComponent(CustomButton).disableButton()}}
        else  {for(let a of [this.A1,this.A2,this.A3,this.A4,this.A5]){a.getChildByName("New Button").getComponent(CustomButton).enableButton()}}   
        
        
        this.show()*/
        for (let index = 1; index <= 6; index++) {
            this.node.children[5].children[index].active=false
             
         }
    }
    
                
    show(){
        for (let a of [this.A1,this.A3,this.A2,this.A4,this.A5]) {
            a.getChildByName("who").active=true
           
          }
          
    
        if (NWshopM.nss[0]%2==1) {
        this.A1.getChildByName("who").getComponent(gif1).changeF(0,1);  
    }else{ if(NWshopM.nss[0]==0){this.A1.getChildByName("who").active=false}this.A1.getChildByName("who").getComponent(gif1).changeF(3,1); }
    if (NWshopM.nss[1]%2==1) {
        this.A2.getChildByName("who").getComponent(gif1).changeF(0,1);  
    }else{ if(NWshopM.nss[1]==0){this.A2.getChildByName("who").active=false}this.A2.getChildByName("who").getComponent(gif1).changeF(3,1); }
    if (NWshopM.nss[2]%2==1) {
        this.A3.getChildByName("who").getComponent(gif1).changeF(0,1);  
    }else{if(NWshopM.nss[2]==0){this.A3.getChildByName("who").active=false} this.A3.getChildByName("who").getComponent(gif1).changeF(3,1); }
    if (NWshopM.nss[3]%2==1) {
        this.A4.getChildByName("who").getComponent(gif1).changeF(0,1);  
    }else{ if(NWshopM.nss[3]==0){this.A4.getChildByName("who").active=false}this.A4.getChildByName("who").getComponent(gif1).changeF(3,1); }
    if (NWshopM.nss[4]%2==1) {
        this.A5.getChildByName("who").getComponent(gif1).changeF(0,1);  
    }else{ if(NWshopM.nss[4]==0){this.A5.getChildByName("who").active=false}this.A5.getChildByName("who").getComponent(gif1).changeF(3,1); }
    
    let i=0
    for (let a of [this.A1,this.A2,this.A3,this.A4,this.A5]) {
        a.getChildByName("who").children[0].getComponent(gif1).changeF(NWshopM.nss[i]-1,1);
        i++;
      }
    
    }
    
    getTNC(n:number){
    
     let k=  GeZiManager.PCP.TNJJ
        let l =GeZiManager.TNC
       if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
       }
    
    
    
    
    
    
    
    QK(){
        NWshopM.NWN=[]
        this.A1.children[0].getComponent(Sprite).spriteFrame= null
           this.A2.children[0].getComponent(Sprite).spriteFrame= null
           this.A3.children[0].getComponent(Sprite).spriteFrame= null
           this.A4.children[0].getComponent(Sprite).spriteFrame= null
           this.A5.children[0].getComponent(Sprite).spriteFrame= null
           this.A1.getChildByName("Xlabel").getComponent(Label).string=null
           this.A2.getChildByName("Xlabel").getComponent(Label).string=null
           this.A3.getChildByName("Xlabel").getComponent(Label).string=null
           this.A4.getChildByName("Xlabel").getComponent(Label).string=null
           this.A5.getChildByName("Xlabel").getComponent(Label).string=null
        }
    
    
        
            jsonFilePath: string = 'EQW'; // JSON 文件路径（相对于 resources 文件夹）
        
            start() {
                this.loadJsonData();
            }
        
            /**
             * 加载 JSON 文件并查找对应的 name 属性
             * @param id 要查找的 id
             * @returns 对应的 name 属性或 null
             */
            findNameById(id: string): string | null {
                if (!this._jsonData) {
                    console.error("JSON data is not loaded.");
                    return null;
                }
        
                // 确保 _jsonData 是数组类型
                if (!Array.isArray(this._jsonData)) {
                    console.error("JSON data is not an array.");
                    return null;
                }
        
                const item = this._jsonData.find((item: any) => item.id == id);
                return item ? item.name : null;
            }
        
            private _jsonData: any[] = []; // 用于存储加载的 JSON 数据
        
            /**
             * 加载 JSON 文件
             */
            private loadJsonData() {
                resources.load(this.jsonFilePath, JsonAsset, (err, jsonAsset) => {
                    if (err) {
                        console.error("Failed to load JSON file:", err);
                        return;
                    }
        
                    // 确保加载的数据是数组类型
                    if (!Array.isArray(jsonAsset.json)) {
                        console.error("Loaded JSON data is not an array.");
                        return;
                    }
        
                    this._jsonData = jsonAsset.json;
                    console.log("JSON data loaded successfully:", this._jsonData);
                });
            }
        }
    
    
    
    
    
    
    
    
    