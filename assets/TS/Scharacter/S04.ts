// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, Label } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../Manager/GeZiManager";
import { SHMessage } from "../Message/SHMessage";
import MessageCenter from "../Message/MessageCenter";
import weapon from "../equipment/weapon/weapon";
import SXX from "./SXX";
import turn from "../game/time/turn";
import Character from "../BASE/Character";
import Cspine from "../BASE/spineANDgif/Cspine";
import { gif1 } from "../BASE/spineANDgif/gif";
import state from "../game/time/state";
import { Message } from "../Message/Message";
import JNUM from "../UIS/else/JNUmanager";
import DXX from '../equipment/accessory/DXX';
import BXX from '../equipment/body/BXX';
import CXX from '../equipment/shose/CXX';
import sideUI from '../UIS/sideUI';
import { SubtitleManager } from '../UIS/baom';
import Shops from '../UIS/shop/shops';

@ccclass('S04')
export default class S04 extends SXX {
        Snumber="S04"
        JX:boolean=false;
        cType: string ="human"
      JN:boolean=false
    SZ:boolean=false
      JX1: string[]=["S剑来"];
      JX2: string[]=["S剑魂2","S瞬斩"];
      JX3: string[]=["S剑圣"];
    
    
    
        QDS(n: number): void {
     if (n==-2) {
       this.SZ==true
     }else{
     
     
     
     
          this.node.getComponent(Cspine).currentSpine.animation="Skill"
          MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB], this.node.getComponent(Character).getdis(n)*2+1,GeZiManager.PCP.Pturn,"Qi-"); 
          setTimeout(() => {
             this.node.getComponent(Character).To(n,0.1);
          },800);
          setTimeout(() => {
   // GeZiManager.PCP.TN+=GeZiManager.PCP.FU[3]
      
             if(GeZiManager.PCP.weapon.DT){GeZiManager.PCP.weapon.QD([GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,1)])}else{
               
          //   this.target.TN+= this.target.weapon.getTNC(3)+this.target.weapon.TNJ
           GeZiManager.PCP.weapon.attack()
       
               this.JN=true
              
             }
    
             //  MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.PCP.weapon.getTNC(3)-GeZiManager.PCP.FU[3],GeZiManager.PCP.Pturn,"TN-");
                
            
          },1000);}
      
        }
    Attack3(an: number[]): void {
     
       
     
     
       if (this.BL[3]>0) {
       MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"Qi+"); 
       this.node.parent.getComponent(JNUM).JNF("S剑圣",this.target.ZB)  
      }
    
    }
    
    Walk3(ZB: number): void {
       if (this.BL[3]>0) {
          MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"Qi+"); 
          this.node.parent.getComponent(JNUM).JNF("S剑圣",this.target.ZB)  
         }
    }
    
    Attack25(at: any, csh: number): void {
       if (this.target.qi>3) {
    
      if (at instanceof Character&&at.weapon.Wtype==1) {
            GeZiManager.dm+=1;
        }
        this.node.parent.getComponent(JNUM).JNF("S剑魂2",this.target.ZB)  
    }
    if (this.JX&&at!=null) {
       let a  = GeZiManager.PCP.findGe(GeZiManager.PCP.faceTo,2)
       if(GeZiManager.BanMove.includes(a)){}else{
           GeZiManager.PCP.To(a,0.1);
    }
    this.node.parent.getComponent(JNUM).JNF("S瞬斩",this.target.ZB)  
      }
    }
    
    
    
    
    skill1(){
    
       state.ST=9;
       GeZiManager.DLLM="S04"
       MessageCenter.MakeMessage("UIManager","change",-1);
       for(let manager of GeZiManager.YuanGong){
    let a=new Message("",[65],-1)
           manager.ReceiveMessage(a)    
    }
    MessageCenter.MakeMessage("AM",turn.turn,"getZB")
    
    for(let manager of GeZiManager.YuanGong){
       manager.getFar(Math.floor((GeZiManager.PCP.qi+1)/2))
    if(GeZiManager.BanMove.includes(manager.ZB)){manager.red()}
    }
    }
    
    
    
    skill2(): void {
       state.ST=9;
       GeZiManager.DLLM="S04"
      
     let a  = GeZiManager.PCP.ZB
    find("Canvas/DituManager/New Node/AnimalManager/GUIManager").active=true;
     
     for(let c of GeZiManager.YuanGong){
     
     
     if(c.ZB==a){c.blue();  MessageCenter.MakeMessage("UIManager","change",2)}else c.null();
     
     }
     GeZiManager.GeZi=-2
    }
    
    
  Kill2(): void {
      if (this.JX) {
             MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.target.weapon.getTNC(3)+this.target.weapon.TNJ,GeZiManager.PCP.Pturn,"TN+"); 
      }
  }
    
   Kill3(Pturn: number): void {
      if (this.JX) {
             MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.target.weapon.getTNC(3)+this.target.weapon.TNJ,GeZiManager.PCP.Pturn,"TN+"); 
      }
   } 
    
    
    
    Behurt2(m:SHMessage,BeHC:any,HC:any){
      
       if (this.target.qi<3) { 
      
       if(HC instanceof Character&&HC.weapon.Wtype==1){GeZiManager.dm-=1;}
        console.log(HC.weapon.Wtype)
        console.log(m.from)
        this.node.parent.getComponent(JNUM).JNF("S剑魂",this.target.ZB)  
       
        } 
       }
    
    start(){
        this.node.getChildByName("name").getComponent(Label).string="剑客"   
        this.node.getComponent(Character).behurt2.push(this)
        this.node.getComponent(Character).attack3.push(this)
        this.node.getComponent(Character).attack25.push(this)
        this.node.getComponent(Character).walk3.push(this)
              this.node.getComponent(Character).kill3.push(this)
                     this.node.getComponent(Character).kill2.push(this)
         this.target=this.node.getComponent(Character)
        
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
         //this.node.getChildByName("equ").getComponent(Label).string=pre;
         let k
             this.node.getChildByName("shadow").getComponent(gif1).moveToNextFrame(5,8,0)
       setTimeout(() => {
          this.node.getChildByName("shadow").getComponent(gif1).changeF(5,1)
       }, 600);
       this.node.getChildByName("equ").getComponent(Label).string=pre;
    
       switch (pre[0]) {
             case 'A': 
             if(pre[1]=="1"){ this.weapon.remove();
                this.node.removeComponent(""+this.weapon.TheNumber)
                this.node.addComponent(pre);
                this.weapon=this.node.getComponent(pre)
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
        }  
     
    
    
    
        NWNA(e:string[],n:number){
    console.log(e)
          function A1(arr:string[]) {
    //
            // return arr.filter(item => (item.startsWith('A') && item[1] == '1'));
         }
         let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi"],4)[0]   
          let a
    
    //let pp=A1(e).push(c)
    
         /*
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
          
          */
      
     // if (pp.length==4) {
      // pp.pop("Hun")
      //}


          return e
          
          
          
          }
      
      
      
      
          choseS(n:string): void {
             switch (n) {
    
    case "S剑魂2":  GeZiManager.shanchu(this.JX2,"S剑魂2") 
    break;
    
    case "S瞬斩":     GeZiManager.shanchu(this.JX2,"S瞬斩") 
       break;
       case "S剑来":        MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"Qi-");   MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],"A110",GeZiManager.PCP.Pturn,"changeE")
       break;
    case "S剑圣":     GeZiManager.shanchu(this.JX3,"S剑圣") 
       break;
    
        
        }
          }
       
       
       
       
          getTO (n: number):string[] {
             switch(n){
         
         case 1:return ["S剑来","S忍","TNS"]
         
         case 2:
          let a=this.getRA(["FU0",'FU1','FU2','FU3'],1)
         return ["S剑魂2","S瞬斩",a[0]]
         
         default: 
         let k="qi"
             if ( this.mArr1Arr2(this.JX3,this.JX2).length!=0) {
                  k=this.getRA( this.mArr1Arr2(this.JX3,this.JX2),1)[0] 
             }
             let o=this.getRA(["FU0",'FU1','FU2','FU3'],1)[0]
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
         
         
         
          if (n[2]>=1||n[1]>=1||turn.round>=15) {
            this.BL[0]+=1
          }else{  this.BL[0]*=0}//剑魂
        
          if (n[0]>=1||n[3]>=1||turn.round>=15) {
            this.BL[1]+=1
          }else{  this.BL[1]*=0 }//振剑
          
         
          
if (this.getFUn()>=3) {
   this.JX=true

  SubtitleManager.show(
                {
                    bgSprite:this.target.color,
                    image1:this.Toux,
                    text1: "这个家伙觉醒啦",
                    image2: this.skiil3,
                    text2: "",
                    duration: 5
                }
               )



}else{   this.JX=false}
          
        
        }
       
       
       
       }
    
    
    
    
    
    