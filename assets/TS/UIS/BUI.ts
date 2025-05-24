// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, director, find, Label, Layout, Node, Sprite, SpriteAtlas, UIOpacity, Vec3 } from 'cc';
const {ccclass, property} = _decorator;


import CustomButton from "../BASE/CButton";
import ComponentBase from "../BASE/ComponentBase";
import { gif1 } from "../BASE/spineANDgif/gif";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";

import MessageCenter from "../Message/MessageCenter";
import S02 from "../Scharacter/S02";
import S03 from "../Scharacter/S03";
import S06 from "../Scharacter/S06";
import S09 from "../Scharacter/S09";
import S10 from "../Scharacter/S10";
import SXX from "../Scharacter/SXX";
import A509 from "../equipment/weapon/SC/A509";
import weapon from "../equipment/weapon/weapon";
import state from "../game/time/state";
import turn from "../game/time/turn";
import TorW from "./BASEUI/TorW";
import moveUI from "./BASEUI/moveUI";
import MUI from "./MMUI/MUI";
import mouse from "./mouse";
import shopM from "./shop/ShopM";
import shops from "./shop/shops";
import S07 from '../Scharacter/S07';
import S00 from '../Scharacter/S00';
import S01 from '../Scharacter/S01';
import S08 from '../Scharacter/S08';
import S04 from '../Scharacter/S04';
import S05 from '../Scharacter/S05';

@ccclass('BUI')
export default class BUI extends ComponentBase {
        Sk:number=0;
        SUI:Node=null;
        A1:Node=null;
        A2:Node=null;
        A3:Node=null;
        A4:Node=null;
        A5:Node=null;
        MU:Node=null;
        leveUP:Node=null;
        changL:Node=null;
        AM:Node=null
       
    yes:Node;
    DW:number=0;
    
    
    NK:number=0;
    
    @property(SpriteAtlas)
       Atlas: SpriteAtlas = null;
       @property(SpriteAtlas)
       Atlas2: SpriteAtlas = null;
       getTNC(n:number){
    
    
        let k=  GeZiManager.PCP.TNJJ
        let l =GeZiManager.TNC
       if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
       }
    
    
        start(): void {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            
        function findNodeInScene(node: Node, targetName: string): Node | null {
            if (node.name === targetName) {
                return node;
            }
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                const result = findNodeInScene(child, targetName);
                if (result) {
                    return result;
                }
            }
            
            return null;
         }
         let rootNode = director.getScene().getChildByName("Canvas");
         this.MU=find("Canvas/Main Camera/UIManager/magicUI");
        this.yes = findNodeInScene(rootNode, "yes");
        this.SUI= find("Canvas/Main Camera/UIManager/shopUI/1L/A1")
     this.A1= find("Canvas/Main Camera/UIManager/shopUI/1L/A1")
     this.A2= find("Canvas/Main Camera/UIManager/shopUI/1L/A2")
     this.A3= find("Canvas/Main Camera/UIManager/shopUI/1L/A3")
     this.A4= find("Canvas/Main Camera/UIManager/shopUI/2L/XianJing")
     this.A5= find("Canvas/Main Camera/UIManager/shopUI/2L/BCD")
     this.leveUP= find("Canvas/Main Camera/UIManager/shopUI/3L/Leve")
     this.changL= find("Canvas/Main Camera/UIManager/shopUI/3L/changL")
    
     this.AM=find("Canvas/DituManager/New Node/AnimalManager")
    
    
    
    
    
     
    if(find("Canvas").getComponent(mouse).sj){
    let k=find("Canvas/Main Camera/UIManager/BUIManager/BUI")
    
    
        this.node.setScale(1.3,1.3,1)
        this.node.position=new Vec3(-550,70,0)
       k.children[0].getComponent(Layout).spacingX=90
       k.children[0].getComponent(Layout).paddingLeft=300
    
    
       k.children[1].position=new Vec3(1600,350,0)
      k.children[1].setScale(0.9,0.9,1)
     
    }
    }
    
    
    
    
    //
    TNST(){
    
    this.node.children[0].children[1].children[0].children[1].getComponent(gif1).changeF(this.getTNC(2)-1,1);
    
    if (GeZiManager.PCP.weapon.BT&&GeZiManager.PCP.weapon.BTS==0) {this.node.children[0].children[2].children[0].children[1].getComponent(gif1).changeF(1,1);}
    else{this.node.children[0].children[2].children[0].children[1].getComponent(gif1).changeF(this.getTNC(3)-1+GeZiManager.PCP.weapon.TNJ,1);}
    
    
    
    
    if ( GeZiManager.PCP.LST==10) {
       
        let Skill =this.node.children[1]
        let Skill1=Skill.children[0].children[0]
        let Skill2=Skill.children[1].children[0]
        let Skill3=Skill.children[2].children[0]
        let Skill4=Skill.children[3].children[0]
    
    
    
        Skill1.active=true
        Skill2.active=true
        Skill3.active=true
        Skill4.active=true
        Skill1.children[0].getComponent(UIOpacity).opacity=255
        Skill2.children[0].getComponent(UIOpacity).opacity=255
        Skill3.children[0].getComponent(UIOpacity).opacity=255
        Skill4.children[0].getComponent(UIOpacity).opacity=255
        Skill1.parent.getComponent(CustomButton).enableButton()
        Skill2.parent.getComponent(CustomButton).enableButton()
        Skill3.parent.getComponent(CustomButton).enableButton()
        Skill4.parent.getComponent(CustomButton).enableButton()
    switch (
     
      
        GeZiManager.PCP.getComponent(SXX).Snumber) {
        case "S08":
            //this.node.children[1].children[1].children[3].active=true
        
        if (GeZiManager.PCP.TN<2||GeZiManager.PCP.qi<2) {
          Skill1.parent.getComponent(CustomButton).disableButton()
          Skill1.children[0].getComponent(UIOpacity).opacity=155
        }
        if (GeZiManager.PCP.TN<1) {
            Skill2.parent.getComponent(CustomButton).disableButton() 
            Skill2.children[0].getComponent(UIOpacity).opacity=155
        }
        Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S08).skiil1
        Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S08).skiil2
        //this.node.children[1].children[1].children[1].active=true
        Skill1.children[3].active=false
        Skill2.children[3].active=true
        Skill2.children[3].children[0].getComponent(Label).string="X"
       
      
    
       
       
        Skill1.children[2].getComponent(gif1).changeF(1,1)
        Skill2.children[2].getComponent(gif1).changeF(0,1)
        Skill3.active=false
        Skill4.active=false
        break;
        case "S01":   
         Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S01).skiil1
    
        Skill1.children[3].children[0].getComponent(Label).string=""
        Skill1.children[3].active=false
    
        Skill1.children[2].active=false
      
        Skill2.active=false
        Skill3.active=false
        Skill4.active=false
        break;
        case "S02":  if (GeZiManager.PCP.TN<GeZiManager.TNC[5]||GeZiManager.PCP.qi<2+GeZiManager.PCP.node.getComponent(S02).qz) {
           Skill1.parent.getComponent(CustomButton).disableButton()
           Skill1.children[0].getComponent(UIOpacity).opacity=155
        }
        if (GeZiManager.PCP.TN<2||GeZiManager.PCP.qi<2) {
            Skill2.parent.getComponent(CustomButton).disableButton()
            Skill2.children[0].getComponent(UIOpacity).opacity=155
         }
        //if (GeZiManager.PCP.getComponent(SXX).BL[1]==0) {
          //  Skill1.active=false
       // }  
        //if (GeZiManager.PCP.getComponent(SXX).BL[3]==0) {
          //  Skill2.active=false
       // }    
        /*  
        if (GeZiManager.PCP.TN<3) {
            Skill1.parent.getComponent(CustomButton).disableButton()
            Skill1.children[0].getComponent(UIOpacity).opacity=155
        }
        if (GeZiManager.PCP.qi<1) {
            Skill2.parent.getComponent(CustomButton).disableButton()
            Skill2.children[0].getComponent(UIOpacity).opacity=155
        }
    
    
       // this.node.children[1].children[0].children[1].getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("S04-T2")
     Skill1.children[2].active=true
       Skill1.children[2].getComponent(gif1).changeF(2,1)//体能
       Skill1.children[3].children[0].getComponent(Label).string=""
       Skill1.children[3].active=false
        
       Skill2.children[2].active=false
       Skill2.children[2].getComponent(gif1).changeF(GeZiManager.TNC[5]-1,1)//体能
       Skill2.children[3].children[0].getComponent(Label).string=1+""
       Skill2.children[3].active=true*/
       Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S02).skiil3
       Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S02).skiil2
    
       Skill1.children[2].active=true
       Skill1.children[2].getComponent(gif1).changeF(GeZiManager.TNC[5]-1,1)//体能
       Skill1.children[3].children[0].getComponent(Label).string=2+GeZiManager.PCP.node.getComponent(S02).qz+""
       Skill1.children[3].active=true
      
       Skill2.children[2].active=true
       Skill2.children[2].getComponent(gif1).changeF(1,1)//体能
       Skill2.children[3].children[0].getComponent(Label).string=2+""
       Skill2.children[3].active=true
      
       Skill3.active=false
       Skill4.active=false
        break;
        case "S03":   
     
        if (!GeZiManager.PCP.getComponent(SXX).JX) {
            Skill1.active=false
         }
    
         Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S03).skiil1
    
        Skill1.children[3].children[0].getComponent(Label).string=""
        Skill1.children[3].active=false
    
        Skill1.children[2].active=false
      
        Skill2.active=false
        Skill3.active=false
        Skill4.active=false
        break;
        case "S04":  if (GeZiManager.PCP.TN<GeZiManager.PCP.weapon.getTNC(3)+GeZiManager.PCP.weapon.TNJ) {
            Skill1.parent.getComponent(CustomButton).disableButton()
            Skill1.children[0].getComponent(UIOpacity).opacity=155
            
        }
            
    
        Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S04).skiil1
    
        Skill1.children[2].active=true
        Skill1.children[2].getComponent(gif1).changeF(GeZiManager.PCP.weapon.getTNC(3)+GeZiManager.PCP.weapon.TNJ-1,1)//体能
        Skill1.children[3].children[0].getComponent(Label).string="2X"
        Skill1.children[3].active=true
         
        
    
       
    
       
    
    
    
     
         Skill2.active=false
        Skill3.active=false
        Skill4.active=false
    
    
    
    
    
        break;
    
    
    
        case "S05":
            
       
        /*
        this.node.children[1].children[0].children[1].getComponent(Sprite).spriteFrame=this.Atlas.getSpriteFrame("S05-T2")
        this.node.children[1].children[0].children[2].getComponent(gif1).changeF(1,1)
        this.node.children[1].children[0].children[3].active=true
        this.node.children[1].children[0].children[3].children[0].getComponent(Label).string="2"
        this.node.children[1].children[1].children[3].active=false
        this.node.children[1].children[1].active=false
        this.node.children[1].children[2].active=false
        this.node.children[1].children[3].active=false
       */
    
        if (GeZiManager.PCP.TN<2||GeZiManager.PCP.qi<2) {
            Skill1.parent.getComponent(CustomButton).disableButton()}
            
    
        Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S05).skiil1
    
        Skill1.children[2].active=true
        Skill1.children[2].getComponent(gif1).changeF(1,1)//体能
        Skill1.children[3].children[0].getComponent(Label).string="2"
        Skill1.children[3].active=true
         
        
     
        Skill2.active=false
        Skill3.active=false
        Skill4.active=false
    
    
    
    
    
    
    
        break;
        case "S06": 
        
        if (GeZiManager.PCP.TN<3||(GeZiManager.PCP.node.getComponent(S06).xll&&!GeZiManager.PCP.node.getComponent(S06).JX1.includes("S敏捷"))) {
            Skill1.parent.getComponent(CustomButton).disableButton()
            Skill1.children[0].getComponent(UIOpacity).opacity=155
            
        }
            
    
        Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S06).skiil2
    
        Skill1.children[2].active=true
        Skill1.children[2].getComponent(gif1).changeF(2,1)//体能
        Skill1.children[3].children[0].getComponent(Label).string="3"
        Skill1.children[3].active=true
        
        if (GeZiManager.PCP.TN<this.getTNC(3)||GeZiManager.PCP.qi<2) {
            Skill2.parent.getComponent(CustomButton).disableButton()
            Skill2.children[0].getComponent(UIOpacity).opacity=155
            
        }
      
        Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S06).skiil6
    
        Skill2.children[2].active=true
        Skill2.children[2].getComponent(gif1).changeF(this.getTNC(3)-1,1)//体能
        Skill2.children[3].children[0].getComponent(Label).string="2"
        Skill2.children[3].active=true
        
        if (GeZiManager.PCP.TN<this.getTNC(3)||GeZiManager.PCP.qi<2) {
            Skill3.parent.getComponent(CustomButton).disableButton()
            Skill3.children[0].getComponent(UIOpacity).opacity=155
            
        }
      
        Skill3.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S06).skiil5
    
        Skill3.children[2].active=true
        Skill3.children[2].getComponent(gif1).changeF(this.getTNC(3)-1,1)//体能
        Skill3.children[3].children[0].getComponent(Label).string="2"
        Skill3.children[3].active=true
     

        Skill4.active=false
    
    
    
    
    
        break;
        case "S00":
            let o=0
if (GeZiManager.PCP.getComponent(SXX).JX) {
    o=1
}

            if (GeZiManager.PCP.TN<3-o) {
                Skill1.parent.getComponent(CustomButton).disableButton()}
                
        
            Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S00).skiil1
        
            Skill1.children[2].active=true
            Skill1.children[2].getComponent(gif1).changeF(2-o,1)//体能
            Skill1.children[3].children[0].getComponent(Label).string=""
            Skill1.children[3].active=true
        
        
        if (GeZiManager.PCP.TN<3-o||GeZiManager.PCP.qi<1) {
            Skill2.parent.getComponent(CustomButton).disableButton()}
            
    
        Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S00).skiil2
    
        Skill2.children[2].active=true
        Skill2.children[2].getComponent(gif1).changeF(2-o,1)//体能
        Skill2.children[3].children[0].getComponent(Label).string="1"
        Skill2.children[3].active=true
         
        
     
     //if (GeZiManager.PCP.getComponent(SXX).BL[4]==0) {
        //Skill2.active=false
     //}
        Skill3.active=false
        Skill4.active=false
    
        
        
        
        break;
       
        case "S09":
          
              
        
        
        if (GeZiManager.PCP.TN<2||GeZiManager.PCP.t==0) {
            Skill1.parent.getComponent(CustomButton).disableButton()}
            
    
        Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S09).skiil6
    
        Skill1.children[2].active=true
        Skill1.children[2].getComponent(gif1).changeF(1,1)//体能
        Skill1.children[3].children[0].getComponent(Label).string=""
        Skill1.children[3].active=false
        if (GeZiManager.PCP.TN<2||GeZiManager.PCP.t==0) {
            Skill4.parent.getComponent(CustomButton).disableButton()}
            
    
        Skill4.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S09).skiil5
    
        Skill4.children[2].active=true
        Skill4.children[2].getComponent(gif1).changeF(1,1)//体能
        Skill4.children[3].children[0].getComponent(Label).string=""
        Skill4.children[3].active=false
         
        if (GeZiManager.PCP.TN<2||GeZiManager.PCP.qi<1) {
            Skill2.parent.getComponent(CustomButton).disableButton()}
            
    
        Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S09).skiil3
    
        Skill2.children[2].active=true
        Skill2.children[2].getComponent(gif1).changeF(1,1)//体能
        Skill2.children[3].children[0].getComponent(Label).string="1"
        Skill2.children[3].active=true
     
     
       
     
    
        Skill3.active=false
        
        
        break;
        case "S07":
            //this.node.children[1].children[1].children[3].active=true
        let   j=0
            if (GeZiManager.PCP.getComponent(SXX).JX) {
                j=1
            }
      
        if (GeZiManager.PCP.qi<1||GeZiManager.PCP.TN<1) {
            Skill1.parent.getComponent(CustomButton).disableButton() 
            Skill1.children[0].getComponent(UIOpacity).opacity=155
        }
        if (GeZiManager.PCP.qi<2||GeZiManager.PCP.TN<2) {
            Skill2.parent.getComponent(CustomButton).disableButton() 
            Skill2.children[0].getComponent(UIOpacity).opacity=155
        }

    

        Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S07).skiil1
        Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S07).skiil2

        //this.node.children[1].children[1].children[1].active=true
        Skill1.children[3].children[0].getComponent(Label).string="1"
        Skill2.children[3].children[0].getComponent(Label).string="2"

       
    
       
        Skill1.children[2].getComponent(gif1).changeF(0,1)
        Skill2.children[2].getComponent(gif1).changeF(1,1)
        Skill3.active=false
        Skill4.active=false
        break; case "S10":
        //this.node.children[1].children[1].children[3].active=true
    
    if (GeZiManager.PCP.TN<2||GeZiManager.PCP.qi<GeZiManager.PCP.node.getComponent(S10).qz) {
      Skill1.parent.getComponent(CustomButton).disableButton()
      Skill1.children[0].getComponent(UIOpacity).opacity=155
    }
    if (GeZiManager.PCP.TN<GeZiManager.PCP.node.getComponent(S10).SH) {
        Skill2.parent.getComponent(CustomButton).disableButton() 
        Skill2.children[0].getComponent(UIOpacity).opacity=155
    }
    Skill1.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S10).skiil1
    Skill2.children[0].getComponent(Sprite).spriteFrame=GeZiManager.PCP.node.getComponent(S10).skiil2
    //this.node.children[1].children[1].children[1].active=true
    Skill1.children[3].active=false
    Skill2.children[3].active=true
    Skill2.children[3].children[0].getComponent(Label).string="X"
    
    
    
    
    Skill1.children[2].getComponent(gif1).changeF(2,1)
    Skill2.children[2].getComponent(gif1).changeF(0,1)
    Skill3.active=false
    Skill4.active=false
    break;
       
        default:   
        Skill1.active=false
        Skill2.active=false
        Skill3.active=false
        Skill4.active=false
            break;
    }
    }
    }
    
        qi(){
          
    
    
    //   console.log("nit")
    
         // if(MessageCenter.Text){  MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],turn.day+GeZiManager.free,GeZiManager.PCP.Pturn,"Qi+");}
          
         MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],1+GeZiManager.free,GeZiManager.PCP.Pturn,"qi");
    
    
    }
    
    
    
    attack(){
    
      
    
    
      if(GeZiManager.PCP.weapon.DT){if(this.PPC()){GeZiManager.PCP.weapon.attack()}}else{
        MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],null,GeZiManager.PCP.Pturn,"attack");}
        this.DW=0
     
        
    
    }
    magic(){  
     
        MessageCenter.MakeMessage("UIManager","change",4);
    
    for(let a of GeZiManager.PCP.magic1){a.Magic1()}
    
    
    }
    
    
    
    
    PASS(){
      
    find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk").getComponent(moveUI).bi()
        MessageCenter.MakeGMessage("GM",[0], turn.turn+1, turn.turn,"PASS"); 
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //以下是商店部分
    
    
    
    shopX(){
        MessageCenter.MakeMessage("AM",turn.turn,"getC")
        MessageCenter.MakeMessage("UIManager","change",1);
    
        for(let m of GeZiManager.PCP.shop3){m.Shop3();}
    GeZiManager.PCP.ST();
    }
    
    
    
    
    
    
    
    
    getTeamZB(n:number,ZB:number){
        for(let a of this.AM.getComponent(AnimalManager).YuanGong){
        
            if(a.ZB==ZB){
            
        
            if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
    }
        
        
       
        
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
    
    
    
    
    dA5(){
    
      
    MessageCenter.MakeGMessage("SU",[],1,GeZiManager.PCP.Pturn,"buy")       
    
       
    }
    
    
       
    
    
    
    
    
     
    
    
      /////////////////////
    
    
    JX(){
    
        if(GeZiManager.PCP.getComponent(SXX).JX==true){}else{}
    
    }
    
    
    
    skill1(){
    
           GeZiManager.PCP.node.getComponent(SXX).skill1()
                
            
        }
    
    
    
    
    
    
    
    skill2(){
    GeZiManager.PCP.node.getComponent(SXX).skill2()}
    skill3(){
    
        GeZiManager.PCP.node.getComponent(SXX).skill3()
    
    }
    
    skill4(){
    
        GeZiManager.PCP.node.getComponent(SXX).skill4()
    
    }
    
    
    
    
    }