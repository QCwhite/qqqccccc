// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, color, find, Label, Node, Sprite, SpriteAtlas, tween } from 'cc';
const {ccclass, property} = _decorator;


import CustomButton from "../../BASE/CButton";
import ComponentBase from "../../BASE/ComponentBase";
import { gif1 } from "../../BASE/spineANDgif/gif";
import AnimalManager from "../../Manager/AnimalManager";
import GeZiManager from "../../Manager/GeZiManager";
import { Message } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import S03 from "../../Scharacter/S03";
import S05 from "../../Scharacter/S05";
import SXX from "../../Scharacter/SXX";
import A509 from "../../equipment/weapon/SC/A509";
import weapon from "../../equipment/weapon/weapon";
import state from "../../game/time/state";
import turn from "../../game/time/turn";
import KOG from "../KOG";
import shopM from "./ShopM";
import Shops from "./shops";
import label from '../label';

import { resources } from 'cc';
import { JsonAsset } from 'cc';
import { Button } from 'cc';
import { AudioManager } from '../../BASE/music';
import { set } from '../../../../@cocos/creator-types/editor/packages/scene/@types/cce/utils/lodash';

@ccclass('ShopUI')
export default class shopUI extends ComponentBase {
        Sk:number=0;
        SUI:Node=null;
        A1:Node=null;
        A2:Node=null;
        A3:Node=null;
        A4:Node=null;
        A5:Node=null;
        A6:Node=null;
        A7:Node=null;
        Dqizi:Node=null;
        DL:Node=null;
        MU:Node=null;
        leveUP:Node=null;
        changL:Node=null;
        AM:Node=null
        @property({ type: SpriteAtlas })
        Atlas: SpriteAtlas = null;
        @property({ type: SpriteAtlas })
        Atlas2: SpriteAtlas = null;
        @property({ type: SpriteAtlas })
        Atlas3: SpriteAtlas = null;
    yes:Node;
    DW:number=0;
    i:number=1
    JJ:boolean=false
    first=true
    onLoad(): void {
        this.MU=find("Canvas/Main Camera/UIManager/magicUI");
    
       // this.SUI= find("Canvas/UIManager/shopUI/1L/A1")
     this.A1= find("Canvas/Main Camera/UIManager/shopUI/1L/A1")
     this.A2= find("Canvas/Main Camera/UIManager/shopUI/1L/A2")
     this.A3= find("Canvas/Main Camera/UIManager/shopUI/1L/A3")
     this.A4= find("Canvas/Main Camera/UIManager/shopUI/1L/A4")
     this.A5= find("Canvas/Main Camera/UIManager/shopUI/1L/A5")
     this.A6= find("Canvas/Main Camera/UIManager/shopUI/2L/A6")
     this.A7= find("Canvas/Main Camera/UIManager/shopUI/2L/A7")
    
     this.leveUP= find("Canvas/Main Camera/UIManager/shopUI/3L/Leve")
     this.changL= find("Canvas/Main Camera/UIManager/shopUI/3L/changL")
     this.AM=find("Canvas/DituManager/New Node/AnimalManager")
     this.MU=find("Canvas/Main Camera/UIManager/shopUI/New Button")

      
    }



 start(): void {
  


}

    shop(){   
             for(let m of GeZiManager.PCP.shop1){m.Shop1();}  
      






             
        console.log(shopM.n)
       AudioManager.instance.ZJP("ui",3,{volume:0.9})
        console.log(shopM.A1n)
    this.ST()


        MessageCenter.MakeMessage("UIManager","change",3);
      
        
        
        



  
       }
    shopX(){
        MessageCenter.MakeMessage("UIManager","change",1);
      AudioManager.instance.ZJP("ui",3,{volume:0.7})
        for(let m of GeZiManager.PCP.shop3){m.Shop3();}
    GeZiManager.PCP.ST();
    }
    
    
    dA1(){
    
        MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"buy")
    //MessageCenter.MakeMessage("BUI",[3],"Ban");
    MessageCenter.MakeMessage("UIManager","change",1);
    }
    
    
    dA2(){
     
        MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],2,GeZiManager.PCP.Pturn,"buy")
        MessageCenter.MakeMessage("UIManager","change",1);
    
    }
        dA3(){
     
            MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],3,GeZiManager.PCP.Pturn,"buy")
            MessageCenter.MakeMessage("UIManager","change",1);
    
    
        }
    
        dA4(){
          
            MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],4,GeZiManager.PCP.Pturn,"buy")
            MessageCenter.MakeMessage("UIManager","change",1);
               }
        
           
        
        
        
        
        
            dA5(){
               
                MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],5,GeZiManager.PCP.Pturn,"buy")
                MessageCenter.MakeMessage("UIManager","change",1);}
        
    dilei(){
        AudioManager.instance.ZJP("ui",1)
    GeZiManager.qing()
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
        GeZiManager.FTPN=3;
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
                if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color==GeZiManager.PCP.color&&a.color!="S02"){manager.green()}
        }}
    }
    
    }
    
    
    
    qizi(){ 
        AudioManager.instance.ZJP("ui",2)
    
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
        GeZiManager.FTPN=8;
    GeZiManager.JL=2;
       state.ST=2;
               
                
       
       MessageCenter.MakeMessage("UIManager","change",-1);
     
       console.log(this.AM.getComponent(AnimalManager).YuanGong)
       for(let manager of GeZiManager.YuanGong){
      
       manager.getFar(GeZiManager.JL);
     


       
        if(GeZiManager.BanMove.includes(manager.ZB)&&(this.getTeamZB(GeZiManager.PCP.Pturn,manager.ZB)==false)){
        manager.red()} else
        if(GeZiManager.BanMove.includes(manager.ZB)){
        manager.red()}



  

        if(GeZiManager.AllObstacles[0]!=null){ for(let a of GeZiManager.AllObstacles){
        if(a.ZB==manager.ZB&&!(GeZiManager.grass.includes(a.ZB)&&a.ObstaclesName!="qizi")){manager.red()}
        if((GeZiManager.FTPN==3||GeZiManager.FTPN==3.5)){
        if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color!=GeZiManager.PCP.color&&a.color!="S02"){manager.red()}
        if(a.tt=="flag"&&a.FW.includes(manager.ZB)&&a.color==GeZiManager.PCP.color&&a.color!="S02"){manager.green()}
        }
        }}
        
        }
    }
    
    
    qic(qic:number){
      
        MessageCenter.MakeMessage("AM",turn.turn,"getQi")
        MessageCenter.MakeMessage("AM",turn.turn,"getZB")
    if(GeZiManager.Qi>=qic){    MessageCenter.MakeSHMessage("AM",[GeZiManager.GeZi],qic,null,"Qi-");
    
    GeZiManager.free=0;
    return true}else{
        
       for(let ma of GeZiManager.label){
        ma.Fqic();
       }
        
        
        return false}
    
    
     } 
    
    
    dleveUP(){
       
     //find("Canvas").getComponent(YP).ZJP("uyp",false,5)
         AudioManager.instance.ZJP("ui",4,{volume:0.8})
        MessageCenter.MakeGMessage("SU",[GeZiManager.PCP.ZB],5+this.i,GeZiManager.PCP.Pturn,"buy")
    
    MessageCenter.MakeMessage("UIManager","change",1);
    
    }
    
    
    
    
    
    
    changI(){
     tween(find("Canvas/Main Camera/UIManager/shopUI/3L/changL")).to(0.3,{angle:find("Canvas/Main Camera/UIManager/shopUI/3L/changL").angle-180}).start()
       setTimeout(() => {
        switch (this.i) {
            case 1:this.i=2;
                
                break;
        case 2:this.i=1;
            default:
                break;
        }
        this.ST();
       },90);
     
       AudioManager.instance.ZJP("ui",12)
    
    
    }
    
      STT(){
       
        
        
        
        
        
        let t
        if(GeZiManager.free!=0){t=GeZiManager.free+""}else if(GeZiManager.free>0){t="+"+GeZiManager.free}else{t=""}
        
        this.A1.getChildByName("xLabel").getComponent(Label).string="售价为"+shopM.A1n[0]+t+"  剩"+shopM.A1n[1]+"个"
        this.A2.getChildByName("xLabel").getComponent(Label).string="售价为"+shopM.A2n[0]+t+"  剩"+shopM.A2n[1]+"个"
        this.A3.getChildByName("xLabel").getComponent(Label).string="售价为"+shopM.A3n[0]+t+"  剩"+shopM.A3n[1]+"个"
        this.A4.getChildByName("xLabel").getComponent(Label).string="售价为"
        this.A5.getChildByName("xLabel").getComponent(Label).string="售价为"
            //this.A5.getChildByName("a5p").getComponent(Sprite).spriteFrame=a5p;
           // this.A5.getChildByName("a5p").getComponent(Sprite).spriteFrame=a5p;
      
        let dll;let PS;
        switch (GeZiManager.PCP.weapon.getComponent(weapon).TheNumber) {
            case "A000":dll="";PS=null;
                  
            break;
            case "A110": switch(shopM.i){
        
        
                case 1:dll=2+GeZiManager.free+"气,A131";PS=this.AM.getComponent(Shops).find(6,"A131","",0);
              
                 break;
            
                case 2:dll=2+GeZiManager.free+"气,A132";PS=this.AM.getComponent(Shops).find(6,"A132","",0);
                break;
             }
          
             break;
            case "A132":dll=4+GeZiManager.free+"气,A152";PS=this.AM.getComponent(Shops).find(6,"A152","",0);
                break;
            case "A131":dll=4+GeZiManager.free+"气,A151";PS=this.AM.getComponent(Shops).find(6,"A153","",0);
            break;  
            case "A210": switch(shopM.i){
        
        
                case 1:dll=3+GeZiManager.free+"气,A231";PS=this.AM.getComponent(Shops).find(6,"A231","",0);
                break;  
                 break;
            
                case 2:dll=3+GeZiManager.free+"气,A232";PS=this.AM.getComponent(Shops).find(6,"A232","",0);
                break;
             }
          
             break;
            case "A232":dll=3+GeZiManager.free+"气,A252";PS=this.AM.getComponent(Shops).find(6,"A252","",0);
                  
                break;
            case "A231":dll=3+GeZiManager.free+"气,A251";PS=this.AM.getComponent(Shops).find(6,"A251","",0);
            break;
            case "A310": switch(shopM.i){
        
        
                case 1:dll=2+GeZiManager.free+"气,A331";PS=this.AM.getComponent(Shops).find(2,"A331","",0);
                 break;
            
                case 2:dll=2+GeZiManager.free+"气,A332";PS=this.AM.getComponent(Shops).find(2,"A332","",0);
                break;
             }
          
             break;
            case "A332":dll=3+GeZiManager.free+"气,A352";PS=this.AM.getComponent(Shops).find(2,"A352","",0);
                  
                break;
            case "A331":dll=3+GeZiManager.free+"气,A351";PS=this.AM.getComponent(Shops).find(2,"A351","",0);
            break;
            case "A503":dll=4+GeZiManager.free+"气,"+(GeZiManager.PCP.getComponent(S03).MZ+1)+"级法杖"
            break;
            case "A509":dll=4+GeZiManager.free+"气,"+(GeZiManager.PCP.weapon.getComponent(A509).MZ+1)+"级攻击环"
            break;
        }      
        
        this.leveUP.getChildByName("xLabel").getComponent(Label).string=dll;this.leveUP.getChildByName("PS").getComponent(Sprite).spriteFrame=PS;
     let a;
        switch (GeZiManager.PCP.weapon.getComponent(weapon).TheNumber){
            case "A000":a.push(56);  break;
            case "A110": if(GeZiManager.PCP.qi<2+GeZiManager.free){a.push(56)}
                break;
            
            
            
            case "A131": if(GeZiManager.PCP.qi<4+GeZiManager.free){a.push(56)}       
                    break;
             case "A132": if(GeZiManager.PCP.qi<4+GeZiManager.free){a.push(56)}
                break;
                
             case "A210": if(GeZiManager.PCP.qi<3+GeZiManager.free){a.push(56)}
           
             break;
            
            case "A232":  if(GeZiManager.PCP.qi<3+GeZiManager.free){a.push(56)}
                break;
            case "A231":  if(GeZiManager.PCP.qi<3+GeZiManager.free){a.push(56)}
            break;
            case "A332":  if(GeZiManager.PCP.qi<3+GeZiManager.free){a.push(56)}
            break;
        case "A331":  if(GeZiManager.PCP.qi<3+GeZiManager.free){a.push(56)}
        break;
            
                
                
            case "A310":  if(GeZiManager.PCP.qi<2+GeZiManager.free){a.push(56)}
            break;
            ;   
                
                
            case "A503":if(GeZiManager.PCP.qi<4+GeZiManager.free&&GeZiManager.PCP.getComponent(S03).MZ==3){a.push(56)}
            break; 
                 
            case "A509":if(GeZiManager.PCP.qi<4+GeZiManager.free||GeZiManager.PCP.weapon.getComponent(A509).MZ==3){a.push(56)}
            break;     
                
                    default:a.push(56);a.push(57);break;
                    
    
    
    
    
    
    
        }
        
        if((GeZiManager.PCP.qi<shopM.A1n[0]+GeZiManager.free)||shopM.A1n[1]<=0){a.push(51)
       }
       if((GeZiManager.PCP.qi<shopM.A2n[0]+GeZiManager.free)||shopM.A2n[1]<=0){a.push(52)
       }
       if((GeZiManager.PCP.qi<shopM.A3n[0]+GeZiManager.free)||shopM.A3n[1]<=0){a.push(53)
       }
       if((GeZiManager.PCP.qi<3+GeZiManager.free+turn.day)){a.push(54)
       }
    if((GeZiManager.PCP.qi<3+GeZiManager.free+turn.day)){a.push(55)
       }
       
       
       MessageCenter.MakeMessage("BUI",[51,52,53,54,55,56,57],"Use")
       //if
       MessageCenter.MakeMessage("BUI",a,"Ban")
    }
    
    
    
    getTeamZB(n:number,ZB:number){
        for(let a of this.AM.getComponent(AnimalManager).YuanGong){
        
            if(a.ZB==ZB){
            
        
            if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
    }
        
        
       
        
        }
    }
    
    ST(){
      //1L

                //  this.A1.getComponent(CustomButton).disableButton()

      console.log(shopM.A1n[1])
        let t
        if(GeZiManager.free!=0){t=GeZiManager.free+""}else if(GeZiManager.free>0){t="+"+GeZiManager.free}else{t="";}
        this.A1.getChildByName("Background").children[0].getComponent(Label).string=""+shopM.A1n[0]+t;
    
        this.A2.getChildByName("Background").children[0].getComponent(Label).string=""+shopM.A2n[0]+t;
    
        this.A3.getChildByName("Background").children[0].getComponent(Label).string=""+shopM.A3n[0]+t;
        if (!shopM.A1n[2]) {
            this.A1.getChildByName("Y").active=false;
        }else{this.A1.getChildByName("Y").active=true;this.A1.getChildByName("Y").children[0].getComponent(Label).string=""+this.findNameById(shopM.A1n[2]) }
        if (!shopM.A2n[2]) {
           this.A2.getChildByName("Y").active=false;
        }else{this.A2.getChildByName("Y").active=true;this.A2.getChildByName("Y").children[0].getComponent(Label).string=""+this.findNameById(shopM.A2n[2]) }
        if (!shopM.A3n[2]) {
           this.A3.getChildByName("Y").active=false;
        }else{this.A3.getChildByName("Y").active=true;this.A3.getChildByName("Y").children[0].getComponent(Label).string=""+this.findNameById(shopM.A3n[2]); }
        
        
    
    
    console.log(GeZiManager.PCP.qi<shopM.A1n[0]+GeZiManager.free||shopM.A1n[1]==0)
    
     console.log(GeZiManager.PCP.qi<shopM.A1n[0]+GeZiManager.free||shopM.A1n[1]==0)
        if(GeZiManager.PCP.qi<shopM.A1n[0]+GeZiManager.free){this.A1.getComponent(CustomButton).disableButton()}else{this.A1.getComponent(CustomButton).enableButton();}
        if(GeZiManager.PCP.qi<shopM.A2n[0]+GeZiManager.free){this.A2.getComponent(CustomButton).disableButton()}else{this.A2.getComponent(CustomButton).enableButton();}
        if(GeZiManager.PCP.qi<shopM.A3n[0]+GeZiManager.free){this.A3.getComponent(CustomButton).disableButton()}else{this.A3.getComponent(CustomButton).enableButton();}
    
        let k=1
       
    //if(turn.round>=2){
    
        if (shopM.A1n[1]!=0) {
            this.A1.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).find(10,shopM.A1n[2],"",0) 
    
              KOG.DSP( this.A1.getChildByName("Y").getChildByName("New Sprite"),shopM.A1n[2])
        }
        if (shopM.A2n[1]!=0) {
            this.A2.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).find(10,shopM.A2n[2],"",0) 
            KOG.DSP( this.A2.getChildByName("Y").getChildByName("New Sprite"),shopM.A2n[2])
        }
    
        if (shopM.A3n[1]!=0) {
            this.A3.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).find(10,shopM.A3n[2],"",0) 
            KOG.DSP( this.A3.getChildByName("Y").getChildByName("New Sprite"),shopM.A3n[2])
        }
    
    
    
        if(shopM.A4n){
        this.A4.getChildByName("Background").getChildByName("xLabel").getComponent(Label).string=k+GeZiManager.free+turn.day+""
        this.A4.getChildByName("Label").getComponent(Label).string=""+this.findNameById(shopM.A4n)
        this.A4.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).find(10,shopM.A4n,"",0)
        KOG.DSP( this.A4.getChildByName("Y").getChildByName("New Sprite"),shopM.A4n)
        this.A4.children[0].active=true;
        if(GeZiManager.PCP.qi<k+GeZiManager.free+turn.day){this.A4.getComponent(CustomButton).disableButton();}else{this.A4.getComponent(CustomButton).enableButton();}
    }else{ this.A4.getChildByName("Background").getChildByName("xLabel").getComponent(Label).string=""
    this.A4.getChildByName("Label").getComponent(Label).string=""
    this.A4.getComponent(CustomButton).disableButton();
    this.A4.children[0].active=false;
    this.A4.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=null}
    if(shopM.A5n){
        this.A5.getChildByName("Background").getChildByName("xLabel").getComponent(Label).string=k+GeZiManager.free+turn.day+""
        this.A5.getChildByName("Label").getComponent(Label).string=""+this.findNameById(shopM.A5n)
        this.A5.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=this.AM.getComponent(Shops).find(10,shopM.A5n,"",0)
        KOG.DSP( this.A5.getChildByName("Y").getChildByName("New Sprite"),shopM.A5n)
        this.A5.children[0].active=true;
        if(GeZiManager.PCP.qi<k+GeZiManager.free+turn.day){this.A5.getComponent(CustomButton).disableButton();}else{this.A5.getComponent(CustomButton).enableButton();}
    }else{ this.A5.getChildByName("Background").getChildByName("xLabel").getComponent(Label).string=""
    this.A5.getChildByName("Label").getComponent(Label).string=""
    this.A5.getComponent(CustomButton).disableButton();
    this.A5.children[0].active=false;
    this.A5.getChildByName("Y").getChildByName("New Sprite").getComponent(Sprite).spriteFrame=null
    }
    
    
    
    
    //}else{this.A4.getComponent(CustomButton).disableButton();this.A5.getComponent(CustomButton).disableButton();}
    ////////////////
    
    
    /////////////////////////dilei
    if(GeZiManager.PCP.DLN==0){this.A6.getChildByName("DLban").active=true;}else{this.A6.getChildByName("DLban").active=false}
    this.A6.getChildByName("Background").active=true;
    if(shopM.A6n[1]==0||GeZiManager.PCP.qi<shopM.A6n[0]+GeZiManager.free||GeZiManager.PCP.DLN==0){this.A6.getComponent(CustomButton).disableButton();
        if(shopM.A6n[1]==0){this.A6.getChildByName("Background").active=false}}
    else{this.A6.getComponent(CustomButton).enableButton();}
    this.A6.getChildByName("DLn").getComponent(gif1).changeF(shopM.A6n[1]+2,1);
    this.A6.getChildByName("xLabel").getComponent(Label).string=""+shopM.A6n[0]
    ////////
    //////qizi
    if(GeZiManager.PCP.qi>=shopM.A7n[0]+GeZiManager.free){
    this.A7.getChildByName("Blue").getComponent(CustomButton).enableButton();
        this.A7.getChildByName("Red").getComponent(CustomButton).enableButton();}else{this.A7.getChildByName("Blue").getComponent(CustomButton).disableButton();
        this.A7.getChildByName("Red").getComponent(CustomButton).disableButton();}
    if(shopM.A7n[2]==0){this.A7.getChildByName("Blue").active=false}else{this.A7.getChildByName("Blue").active=true}
    if(shopM.A7n[1]==0){this.A7.getChildByName("Red").active=false}else{this.A7.getChildByName("Red").active=true}
           
            
         switch (GeZiManager.PCP.color) {
            case "Blue":    this.A7.getChildByName("Red").getComponent(CustomButton).disableButton();
                
                break;
         
            default:  this.A7.getChildByName("Blue").getComponent(CustomButton).disableButton()
                break;
         }  
     ////////////////////////////    
         let L=100
  
    
    switch (this.i) {
        case 2:this.fadeOutAndDisappear(find("Canvas/Main Camera/UIManager/shopUI/3L/Leve/PS"),L);this.fadeINAndA(find("Canvas/Main Camera/UIManager/shopUI/3L/Leve/PS2"),L)
            
            break;
    
        default:this.fadeOutAndDisappear(find("Canvas/Main Camera/UIManager/shopUI/3L/Leve/PS2"),L);this.fadeINAndA(find("Canvas/Main Camera/UIManager/shopUI/3L/Leve/PS"),L)
            break;
    }
    //////////////////
    
    this.SJPD();
    this.node.getChildByName("TN").getComponent(gif1).changeF(this.getTNC(5)-1,1)
    if(GeZiManager.PCP.TN<this.getTNC(5)){
        
        this.A1.getComponent(CustomButton).disableButton();
        this.A2.getComponent(CustomButton).disableButton();
        this.A3.getComponent(CustomButton).disableButton();
        this.A4.getComponent(CustomButton).disableButton();
        this.A5.getComponent(CustomButton).disableButton();
        this.A6.getComponent(CustomButton).disableButton();
        this.A7.getChildByName("Blue").getComponent(CustomButton).disableButton()
        this.A7.getChildByName("Red").getComponent(CustomButton).disableButton()
        this.leveUP.getComponent(CustomButton).disableButton()
    }
    
    
    
    if (!GeZiManager.PCP.getComponent(SXX).ZZ.includes("human")&&!GeZiManager.PCP.getComponent(SXX).ZZ.includes("EM")) {
        this.A1.getComponent(CustomButton).disableButton();
        this.A2.getComponent(CustomButton).disableButton();
        this.A3.getComponent(CustomButton).disableButton();
    
        if (shopM.A4n&&shopM.A4n[0]!="D") {
            this.A4.getComponent(CustomButton).disableButton();
        }
    
        if (shopM.A5n&&shopM.A5n[0]!="D") {
            this.A5.getComponent(CustomButton).disableButton();
        }
    
    }else{
  /*  switch (GeZiManager.PCP.getComponent(SXX).Snumber) {
        case "S04":  
        
        if (shopM.A2n[2]&&shopM.A2n[2][1]!="1"&&shopM.A2n[2][0]=="A") {
            this.A2.getComponent(CustomButton).disableButton();
        }
        if (shopM.A3n[2]&&shopM.A3n[2][1]!="1"&&shopM.A3n[2][0]=="A") {
            this.A3.getComponent(CustomButton).disableButton();
        }  
        if (shopM.A1n[2]&&shopM.A1n[2][1]!="1"&&shopM.A1n[2][0]=="A") {
            this.A1.getComponent(CustomButton).disableButton();
        }
    
        if (shopM.A4n&&shopM.A4n[1]!="1"&&shopM.A4n[0]=="A") {
            this.A4.getComponent(CustomButton).disableButton();
        }
    
        if (shopM.A5n&&shopM.A5n[1]!="1"&&shopM.A5n[0]=="A") {
            this.A5.getComponent(CustomButton).disableButton();
        }
            break;
    /*        
    case"S05":if (GeZiManager.PCP.getComponent(S05).xjj>0) {
        this.A1.getComponent(CustomButton).disableButton();
        this.A2.getComponent(CustomButton).disableButton();
        this.A3.getComponent(CustomButton).disableButton();
        if (shopM.A4n&&shopM.A4n[0]=="A") {
            this.A4.getComponent(CustomButton).disableButton();
        }
    
        if (shopM.A5n&&shopM.A5n[0]=="A") {
            this.A5.getComponent(CustomButton).disableButton();
        }
        this.leveUP.getComponent(CustomButton).disableButton()
    }
    break;
    case"S08":
        this.A1.getComponent(CustomButton).disableButton();
        this.A2.getComponent(CustomButton).disableButton();
        this.A3.getComponent(CustomButton).disableButton();
        if (shopM.A4n&&shopM.A4n[0]=="A") {
            this.A4.getComponent(CustomButton).disableButton();
        }
    
        if (shopM.A5n&&shopM.A5n[0]=="A") {
            this.A5.getComponent(CustomButton).disableButton();
        }
      
    
        default:
            break;
    }
    */
    }
    if (GeZiManager.PCP.color=="Red") {
        if (GeZiManager.Rhun<3) {
          //  this.MU.getComponent(CustomButton).disableButton();
        }else{this.MU.getComponent(CustomButton).enableButton();}
    }
    
    else {
        if (GeZiManager.Bhun<3) {
          //  this.MU.getComponent(CustomButton).disableButton();
        }else{this.MU.getComponent(CustomButton).enableButton();}
    }
    
    
          }
    
    ////////////////////
    
    SJPD(){
    console.log(GeZiManager.PCP.weapon.TheNumber)
    let dll,PS,n=null
    switch (GeZiManager.PCP.weapon.TheNumber) {
        case "A000":dll="";PS=null;n=null
                  
        break;
        case "A110": switch(this.i){
    
    
            case 1:dll=2+GeZiManager.free+"气,A131";PS=this.AM.getComponent(Shops).find(10,"A131","",0);
          
             break;
        
            case 2:dll=2+GeZiManager.free+"气,A132";PS=this.AM.getComponent(Shops).find(10,"A132","",0);
            break;
         }
      n=2
         break;
        case "A132":dll=4+GeZiManager.free+"气,A152";PS=this.AM.getComponent(Shops).find(10,"A152","",0);n=4
            break;
        case "A131":dll=4+GeZiManager.free+"气,A151";PS=this.AM.getComponent(Shops).find(10,"A151","",0);n=4
        break;  
        case "A210": switch(this.i){
    
    
            case 1:dll=3+GeZiManager.free+"气,A231";PS=this.AM.getComponent(Shops).find(10,"A231","",0);
            break;  
             break;
        
            case 2:dll=3+GeZiManager.free+"气,A232";PS=this.AM.getComponent(Shops).find(10,"A232","",0);
            break;
         }
      n=3
         break;
        case "A232":dll=2+GeZiManager.free+"气,A252";PS=this.AM.getComponent(Shops).find(10,"A252","",0);
              n=3
            break;
        case "A231":dll=2+GeZiManager.free+"气,A251";PS=this.AM.getComponent(Shops).find(10,"A251","",0);n=3
        break;
        case "A310": switch(this.i){
    
    
            case 1:dll=2+GeZiManager.free+"气,A331";PS=this.AM.getComponent(Shops).find(10,"A331","",0);n=2
             break;
        
            case 2:dll=2+GeZiManager.free+"气,A332";PS=this.AM.getComponent(Shops).find(10,"A332","",0);n=2
            break;
         }
      
         break;
        case "A332":dll=3+GeZiManager.free+"气,A352";PS=this.AM.getComponent(Shops).find(10,"A352","",0);n=3
              
            break;
        case "A331":dll=3+GeZiManager.free+"气,A351";PS=this.AM.getComponent(Shops).find(10,"A351","",0);n=3
        break;
    
        case "A121": PS=this.AM.getComponent(Shops).find(10,"A146","",0) ; n=5;
        break
        case "A122":PS=this.AM.getComponent(Shops).find(10,"A144","",0) ; n=4;
        break
        case "A125": PS=this.AM.getComponent(Shops).find(10,"A145","",0) ; n=4;
        break
       
        case "A127": PS=this.AM.getComponent(Shops).find(10,"A142","",0) ; n=3;
        break
        case "A128": PS=this.AM.getComponent(Shops).find(10,"A147","",0) ; n=3;
        break
        case "A141": PS=this.AM.getComponent(Shops).find(10,"A161","",0) ; n=5;
        break
        case "A142": PS=this.AM.getComponent(Shops).find(10,"A162","",0) ; n=6;
        break;
        case "A145": PS=this.AM.getComponent(Shops).find(10,"A164","",0) ; n=5;
        break
        case "A227": PS=this.AM.getComponent(Shops).find(10,"A223","",0) ; n=3;
        break
        case "A223": PS=this.AM.getComponent(Shops).find(10,"A262","",0) ; n=6;
        break
        case "A228": PS=this.AM.getComponent(Shops).find(10,"A242","",0) ; n=3;
        break
        case "A242": PS=this.AM.getComponent(Shops).find(10,"A263","",0) ; n=5;
        break
        case "A321": PS=this.AM.getComponent(Shops).find(10,"A321P","",0) ; n=2;
        break
        case "A321P": PS=this.AM.getComponent(Shops).find(10,"A352","",0) ; n=4;
        break
        case "A323P1": PS=this.AM.getComponent(Shops).find(10,"A323P2","",0) ; n=1;
        break
        case "A323P2": PS=this.AM.getComponent(Shops).find(10,"A323P3","",0) ; n=2;
        break
        case "A323P3": PS=this.AM.getComponent(Shops).find(10,"A323P4","",0) ; n=3;
        break
        case "A323P4": PS=this.AM.getComponent(Shops).find(10,"A362","",0) ; n=4;
        break
        case "A345": PS=this.AM.getComponent(Shops).find(10,"A361","",0) ; n=5;
        break
    
        case "A1422": PS=this.AM.getComponent(Shops).find(10,"A1462","",0) ; n=10;
        break
    
        case "A580": switch(this.i){
    
    
            case 1:dll=2+GeZiManager.free+"气,A581";PS=this.AM.getComponent(Shops).find(10,"A581","",0);n=2
             break;
        
            case 2:dll=2+GeZiManager.free+"气,A582";PS=this.AM.getComponent(Shops).find(10,"A582","",0);n=2
            break;
         }
       
         break;
         case "A581":switch(this.i){
    
    
            case 1:dll=4+GeZiManager.free+"气,A581P1";PS=this.AM.getComponent(Shops).find(10,"A581P1","",0);n=4
             break;
        
            case 2:dll=4+GeZiManager.free+"气,A581P2";PS=this.AM.getComponent(Shops).find(10,"A581P2","",0);n=4
            break;
         }
             break;
        
             case "A582":switch(this.i){
    
    
                case 1:dll=4+GeZiManager.free+"气,A581";PS=this.AM.getComponent(Shops).find(10,"A582P1","",0);n=4
                 break;
            
                case 2:dll=3+GeZiManager.free+"气,A583";PS=this.AM.getComponent(Shops).find(10,"A582P2","",0);n=3
                break;
             }
    
             case "A583":dll=2+GeZiManager.free+"气,A583P";PS=this.AM.getComponent(Shops).find(10,"A583P","",0);n=3
             break;
    
    
    case "A583P":dll=2+GeZiManager.free+"气,A583P";PS=this.AM.getComponent(Shops).find(10,"A583P","",0);n=3
             break;
      
       
        case "A503":switch(this.i){
            case 1:          dll=2+GeZiManager.free+"气,"+(GeZiManager.PCP.getComponent(S03).MZ+1)+"级法杖";PS=this.AM.getComponent(Shops).find(10,"A503-A","",0);n=2
            break;
            case 2:          dll=2+GeZiManager.free+"气,"+(GeZiManager.PCP.getComponent(S03).MZ+1)+"级法杖";PS=this.AM.getComponent(Shops).find(10,"A503-B","",0);n=3
            break;}
        break;
        case "A509":dll=4+GeZiManager.free+"气,"+(GeZiManager.PCP.weapon.getComponent(A509).MZ+1)+"级攻击环";n=4
PS=PS=this.AM.getComponent(Shops).find(10,"A509","",0);
        
        break;

                case "A509-1":dll=4+GeZiManager.free+"气,"+(GeZiManager.PCP.weapon.getComponent(A509).MZ+1)+"级攻击环";n=4
PS=PS=this.AM.getComponent(Shops).find(10,"A509-2","",0);

        
        break;
                        case "A509-2":dll=4+GeZiManager.free+"气,"+(GeZiManager.PCP.weapon.getComponent(A509).MZ+1)+"级攻击环";n=4
PS=PS=this.AM.getComponent(Shops).find(10,"A509-3","",0);

        
        break;
        case "A504":dll=2+GeZiManager.free+"气";PS=this.AM.getComponent(Shops).find(10,"A110","",0);n=2
        break;
    }      
    
    this.leveUP.getChildByName("xLabel").getComponent(Label).string=n+"";this.leveUP.children[5].getChildByName("P").getComponent(Sprite).spriteFrame=PS;
    
    if(n!=null&&GeZiManager.PCP.qi>=n+GeZiManager.free){this.leveUP.getComponent(CustomButton).enableButton();    this.leveUP.children[2].getComponent(Label).color=color(206,255,244)}else{this.leveUP.getComponent(CustomButton).disableButton();color(235,68,68)}
    
    if (n==null) {
        this.leveUP.children[5].active=false;
        this.leveUP.children[1].active=false;
        this.leveUP.children[2].active=false;
    
    }else{
    this.fadeINAndA(this.leveUP.children[5],400)
       
        this.leveUP.children[1].active=true;
        this.leveUP.children[2].active=true;
    }
    
    
    if (PS) {

console.log(PS.name)

        KOG.DSP(this.leveUP.children[5].getChildByName("P"),PS.name)
    }
    
    
    }
    getTNC(n:number){
    
    
        let k=  GeZiManager.PCP.TNJJ
        let l =GeZiManager.TNC
       if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
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
       this.node.children[5].children[j[index]].active=true
           
       this.node.children[5].children[j[index]].children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.getc(j[index]).node.getComponent(SXX).Toux
     console.log(this.node.children[5].children[j[index]].children[0].getComponent(Sprite).spriteFrame)
    
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
        m.out();}
        console.log(GeZiManager.Tcharacter)
        }
        
          
        
        
        
        }







            jsonFilePath: string = 'EQW'; // JSON 文件路径（相对于 resources 文件夹）
        
      findNameById(n:string){






return GeZiManager.skillDataMap[n]?.name



      }














    }
    
    
    
    