// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find, instantiate } from 'cc';
const {ccclass, property} = _decorator;

import MTX from "./MTX";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import GMessage from "../Message/GMessage";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import SXX from "../Scharacter/SXX";
import HUI from "../UIS/HUI";
import sideUI from "../UIS/sideUI";
import A580 from "../equipment/weapon/SC/A580";
import weapon from "../equipment/weapon/weapon";
import turn from "../game/time/turn";
import Character from "./Character";
import realThing from "./realThing";
import Cspine from "./spineANDgif/Cspine";

import  gif1  from './spineANDgif/gif';
    
@ccclass('CHF')
export default class CHF extends Character {
        FC:Character=null
        SHC=["turn4","turn6","walk"]
        onLoad(): void {
           find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).addReceive(this)
        }
        
        start() {
        
        
        
           this.weapon=this.node.getComponent(weapon) 
        
           this.node.setParent(find("Canvas/DituManager/New Node/AnimalManager"))
           this.node.getComponent(Cspine).changeDirection(this.faceTo) 
           console.log(this.Pturn)
        this.HP=this.MaxHP;
        }
            TP(ZB: number): void {
            this.ZB=ZB;
          
            this.faceTo=this.FC.faceTo
        
            this.moveto(0,this.ZB);
          
            this.faceChange();
          
            this.node.active=true;
          
        this.FC.node.getComponent(SXX).Fsn++
            if(turn.turn%2==0){GeZiManager.red.push(this.ZB);}else{GeZiManager.blue.push(this.ZB)}
            this.node.getComponent(SXX).Fsn=this.FC.node.getComponent(SXX).Fsn++
        
           if (!this.fly) {
            GeZiManager.DLBZ(this.ZB,this.ZB,false);
           } 
            this.CMget();
        GeZiManager.getQin(this.ZB,this.ZB);
          //this.FU=this.FC.FU
        //this.Fus(-1)
            if (this.WD) { GeZiManager.shanchu(GeZiManager.WD, this.ZB); }
        
            
           
            this.setXY(0.8);
        
        //GeZiManager.PCP.Tstart();
        
        
        }
        Bdead(killp: realThing): void {
            this.dead()
        }
        changeE(pre:string): void {
           console.log(pre)
          if (pre[0]=='A') {
        
          
        
         //  this.weapon=this.node.getComponent(weapon) 
              // this.node.removeComponent(""+this.weapon.TheNumber)
              this.weapon.remove();
              console.log(pre)
                this.node.addComponent(pre);
                this.weapon.remove();
                console.log(pre)
                  this.node.addComponent(pre);
                let  k=this.node.getComponent(pre)
                  if (k instanceof weapon) {
                    this.weapon=k}
               
           
        
            this.node.getComponent(Cspine).changE(pre,1);
           }
        
        
          }
          
                 
        
        
        
        
        
        
        getHurt(sh: number, killp: realThing, k: number): void {
           setTimeout(() => {
              
          
            
            
              
            if ( this.node) {
                    this.node.getComponent(Cspine).Bhit();
            }  
         
             console.log(sh)
            
              let remainingDamage = Math.max(0,sh);
             let iceReduction = Math.min(remainingDamage,this.ice);
        let ic=this.ice
              remainingDamage -= iceReduction;
             this.ice -= iceReduction;if(this.ice<=0&&ic>0){this.ice=0,this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("iceN");this.ST();}else{}
              let gdReduction = Math.min(remainingDamage, this.GD);
              console.log(gdReduction)
              remainingDamage -= gdReduction;
              this.GD-= gdReduction;if(this.GD<0){this.GD=0}
              console.log(this.HP)
           this.HP-=Math.max(0,remainingDamage);
        
        //console.log(killp.ZB)
        
              for (let mannger of this.UI) {
                 if (mannger instanceof HUI) {
                    mannger.setHP()
                    mannger.setGD(this.GD,this.ice)
                 }
               
              }
              GeZiManager.dm=0;
              for(let a of this.behurt3){a.Behurt3(sh,killp,k,this.Pturn)}
              if(this.LST>0&&this.LST!=10){this.killp=killp;this.dead()}
              if (this.HP<= 0&&this.LST==10) { this.HP = 0; this.Bdead(killp); }
          
            
           
              this.PFUI("HP-",Math.max(0,remainingDamage));
           }, 200);
        }
        dead(): void {
        console.log(this.FC.CHF)
            GeZiManager.shanchu(GeZiManager.BanMove,this.ZB)
            GeZiManager.shanchu(this.FC.CHF,this)
        this.HP=0
        MessageCenter.MakeSHMessage("AM",[this.ZB],0,this.Pturn,"Qi=")
                GeZiManager.shanchu( find("Canvas/DituManager/New Node/AnimalManager").getComponent(AnimalManager).YuanGong,this)
        
            ///变鬼了
        
            this.node.getComponent(weapon).remove()
            //this.node.getComponent(SXX).destroy()
            this.LST=-1;
            for(let a of this.node.children){a.active=false;}
            this.ghost=true;
            this.node.getComponent(Cspine).Dead();
            this.node.getComponent(SXX).Dead2(this.Pturn);
        //this.destroy()
        
        }
        GX(face){
           let k:number[]=[]
           for(let a of this.CHF){k.push(a.ZB)}
                      
           console.log(this.ZB)
           if (this.CanTmove.includes(this.faceTo)) {
                    if (k.includes(this.findGe(this.faceTo,1))) {
                       for(let a of this.FC.CHF){
                           if(a.ZB==this.findGe(this.faceTo,1)){console.log(a.ZB);return a.GX(face)}
                          
                       }  
                    }else return true;
                          
                       } else return false;
          
        }
        
        
        
        
        
        Tstart(): void {
           
        }
        
        
        
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
             
                 let b=this.ZB
                   if(GeZiManager.BanMove.includes(a)||a==66){}else{
                      if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
                   if(this.kcd){this.To(a,0.8);}}
                  if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
                    if (!this.fly) {
            GeZiManager.DLBZ(this.ZB,b,false);
           } 
              
                   break;
                   case 1: 
                   if(this.ghost){
                      if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
                      if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
                      if (this.PPC()&&T) {
                         MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],this.Pturn,"TN-");  
                   }
                      this.move(this.faceTo, 1); this.moveto(0.8, this.ZB)
                   if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
                   }else{
                      if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
                      if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
                      if (this.PPC()&&T) {
                            MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1],this.Pturn,"TN-");  
                      }
                 
                     // if (this.kcd) {
                  
                   this.move(this.faceTo, 1);   this.moveto(0.8, this.ZB)
          
                   if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
                 //}     
              
                 
                   
                     
                  
                     
                   } 
                      break;
                   case 0.5:MessageCenter.MakeSHMessage("AM", [this.findGe(this.faceTo, 1)], [this.faceTo,0.8],0.6, "move");     if (this.PPC()&&T) {
                   MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+this.TNJJ[1]+1,this.Pturn,"TN-");  }
                   this.ST();
                   if (!GeZiManager.BanMove.includes(this.findGe(this.faceTo, 1))) {
                      MessageCenter.MakeSHMessage("AM", [this.ZB], [this.faceTo,0.8],0.6, "move"); 
                   }
               // MessageCenter.MakeSHMessage("AM", [this.ZB], this.faceTo, this.Pturn, "walk")
                      break;
                      case -1:
                         console.log(this.findGe(this.turn8([this.faceTo])[0],1))
                      if(this.ghost){}else{
                         if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
                         if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
                         if(this.kcd){ this.move(this.turn8([this.faceTo])[0],1);}
                      if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
                         this.moveto(0.8, this.ZB)}
                  
                  
                         default: if(this.walk2!=null){for(let w of this.walk2){w.Walk2(this.ZB);}}
                   if(this.walk25!=null){for(let w of this.walk25){w.Walk25(this.findGe(this.faceTo,1));}}
                
                if(this.walk3!=null){for(let w of this.walk3){w.Walk3(this.ZB);}}
                      break;
                }
              
                   this.ST();//点击移动按钮的后续，取决于移动方式
                   this.kcd=true;
           
           
             
                }
        
            ReceiveMessage(message: Message): void {
        
             
         if (message instanceof SHMessage&&this.HP!=0) {
                 
                    if (message.Command.includes(this.ZB)||message.Command[0] == 65) {
                       console.log(message.Command.includes(this.ZB) || message.Command[0] == 65)
                       console.log((this.ZB))
                       console.log(message)
                       switch (message.SHtype) {
                         
                        case "turn6":this.faceTo = this.turn6([this.faceTo])[0];     for(let m of this.turn3){m.Turn3()}         this.faceChange();//逆时针转身
                        break;
                       
                     case "turn4": this.faceTo = this.turn4([this.faceTo])[0];     for(let m of this.turn3){m.Turn3()}         this.faceChange(); //顺时针转身
                        break;
            
                     case "walk":this.Walk(false);
                        break;
                        case"qi":
                        this.node.getComponent(Cspine).xuqiAIN(200);
                        setTimeout(() => {
                        this.Cqi(message.Content,message);
                      
                      
           
                      
                        }, 350);
                  
                     break;
            
                     case "attack":if (this.LST!=-1) {
                       this.attack(message.Content); 
                    } 
                    console.log(this.weapon)
                        break;
                    
                                       
                           case "move": this.move(message.Content[0], 1); console.log(message.from);this.moveto(message.Content[1],this.ZB); if (this.ZB == 8) { this.dead(); }
                              break;
                    
                           case "wuli":console.log(message.Content+GeZiManager.dm-this.wk); if (this.LST == -1) { } 
                           else { GeZiManager.dlU=message.Content;
                              if(message.from!=null)
            {
               
               for(let m of this.behurt2){m.Behurt2(message,this,this.getc(message.from));}//被打
            for(let m of this.getc(message.from).attack25){m.Attack25(this,message.Content);}//打人
               let k=message.Content+GeZiManager.dm;
               k-=this.wk;
              
               k-=this.DunDefenceSH(this.weapon,this.getc(message.from),this.getc(message.from).getComponent(weapon))
               
               
            
                              GeZiManager.un=k; 
                              this.getc(message.from).weapon.getComponent(weapon).GF(k,message.from);
                              let n=k+GeZiManager.ms;
               if (n < 0) { n = 0; } this.getHurt(n,this.getc(message.from),k);}else{let n = message.Content;if (n < 0) { n = 0; } this.getHurt(n,this.getc(message.from),GeZiManager.un);}
                                 GeZiManager.BOL=false;
                               if(this.getc(message.from)!=null&&this.getc(message.from).attack35!=null){ for(let m of this.getc(message.from).attack35){m.Attack35(this,GeZiManager.un);}}
                           } 
                           
                           
                           GeZiManager.free=0;GeZiManager.dlU=0;GeZiManager.ms=0;GeZiManager.un=0;//清零
                           console.log( GeZiManager.PCP.LST)
                           break;
                           
                              case "mofa": if (this.LST == -1) { } else { let bn = message.Content - this.mk; if (bn < 0) { bn = 0; } this.getHurt(bn,this.getc(message.from),0); }this.ST();
            
            
                              break;
                              case "mofaT": if (this.LST == -1) { } else {
                                 if (this.mmc!=null) {
                                    for(let a of this.mmc){a.mg(message.Content[1])}
                                 }
                                 
                                 let bn = message.Content[0] - this.mk+GeZiManager.dm; if (bn < 0) { bn = 0; } this.getHurt(bn,this.getc(message.from),0); }this.ST();
            
            
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
                              if(this.HPm2!=null){for(let w of this.HPm2){w.HPM2(message.Content,message.from,this.Pturn)}}
                              this.HP += message.Content; if (this.HP > this.MaxHP) { this.HP = this.MaxHP; }
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
                           case "HP-": if (this.LST == -1) { } else {
                           
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
                              break;
            
                              case "MaxHP+": if (this.LST == -1) { } else {
                                 this.MaxHP+=message.Content;
                                 //this.HP+=message.Content;
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
            
            
         
            
            
            
            case "Qi+":MessageCenter.MakeSHMessage("AM",[this.FC.ZB],message.Content,null,"Qi+")
              break
                          
                                    case "qin+":MessageCenter.MakeSHMessage("AM",[this.FC.ZB],message.Content,null,"qin+")
                             
                                    break;
                             
                             
                              case "getOne":GeZiManager.Tcharacter=this;
                              break;
                              case "getOneC":GeZiManager.Tcharacter=this;
                              break;
                              case "getOnes":GeZiManager.Tcharacters.push(this)
                              break;
                  case"ice":if(this.ice>0){this.ice+=1}else{this.ice+=2};this.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("ice");  for (let mannger of this.UI) {
                     if (mannger instanceof HUI) {
                        mannger.setGD(this.GD,this.ice)
                     }
                   
                  }
                  //this.GD+=1
                  
                  break; 
                           case "water": if (this.LST == -1) { } else {
                                             if (GeZiManager.Ban.includes(this.ZB)) { } else {
                                        /*   let at= this.PfaceFinal(this.th,[message.Content])[0]
                           
                                                switch (this.M) {
                                                   case -1:
                           
                                                      break;
                                                   case 0: this.move(at, 1 ); this.CMget(); this.moveto(1.5, this.ZB);
                           
                                                      break;
                                                   case 1: this.move(at, 1); this.CMget(); this.moveto(1.5, this.ZB);
                           
                                                      break;
                                                   case 2: this.move(at, 1 ); this.CMget(); this.moveto(1.5, this.ZB);
                           
                                                      break;
                                                   case 8: this.move(at, 1 ); this.CMget(); this.moveto(1.5, this.ZB);
                           
                                                      break;
                                                   default:
                                                      break;
                                                }
                                             }*/ 
                             
                             
                                                // this.ZB=8;
                             setTimeout(()=>{if (this.y==8) {
                              this.moveto(0.6,57)
                              this.ZB=57;
                           }},800)                   
                           
                           setTimeout(()=>{if (this.y==8) {
                              this.moveto(0.6,1)
                              this.ZB=1;
                           }},1600)  
                           setTimeout(()=>{
                              this.moveto(0.6,8)
                              this.ZB=8;
                              this.moveto(0.6,8)
                              if (this.ZB == 8) { this.dead(); }
                           },2400)              }}
                              break;
                           case "wind":
        
                           console.log(this.M)
                              if (this.WD==true||this.HP<0) { } else {
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
                              }this.ST(); for(let m of GeZiManager.BanMove){GeZiManager.getQin(m,this.ZB)}
                              break;
                           default:
                              break;
            
            
            
            
                        }
                     }
                         GeZiManager.free=0;GeZiManager.dlU=0;GeZiManager.ms=0;GeZiManager.un=0;//清零
                  }
            }
        
        
        
        
           
                 Fus(ch:number){
              this.FU=this.FC.FU    
             console.log(ch) 
             console.log(this.FU)   
             
           let a=this.FU[0]+this.FU[1]+this.FU[2]+this.FU[3]
                 if (a<4) {
                    switch(ch){
                     
                       case 0:
                        
                         if(this.FU[0]==2){
                             this.sh+=1;//攻击力+1
                          }
                         break;
                       //水
                       case 2:
                     
                          if(this.FU[2]==1){
                          
                            this.MAXWAT+=1;//气泡+1
                          }
                          else if(this.FU[2]==2){
                              //Hp+里面判断
                          }
                    
                          break;
                       //土
                       case 1:
                     
                          if(this.FU[1]==1){
                             MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP+")
                             MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP+")
                          }
                          else if(this.FU[1]==2){
                              this.Mjia(1);//质量+1
                          }
                          else if(this.FU[1]>=3){
                             //格挡+1
                          this.mk+=1;
                          this.wk+=1;
                          }
                          break;
                         
                         
                          default:  if(this.FU[0]==2){
                             this.sh+=1;//攻击力+1
                          }
                          if(this.FU[1]==1){
                             MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"MaxHP+")
                             MessageCenter.MakeSHMessage("AM",[this.ZB],1,this.Pturn,"HP+")
                          }
                          else if(this.FU[1]==2){
                              this.Mjia(-1);//质量+1
                          }
                          else if(this.FU[1]>=3){
                             //格挡+1
                          this.mk+=1;
                          this.wk+=1;
                          }
                          if(this.FU[2]==1){
                          
                             this.MAXWAT+=1;//气泡+1
                           }
                           else if(this.FU[2]==2){
                               //Hp+里面判断
                           }
                     
                             break;
                    }
                 }   
                 
                    }
        
        
        
                    move(face: number, dis: number): void {
                       let a=this.DiXing
                        super.move(face,dis)
                        if(this.DiXing=="water"){  
                     
                          
                        }else{      this.node.getComponentInChildren(MTX).playFrameAnimation1("waterE")}
                        this.TNT();
                        this.TNC(this.TN)
                     }
        }
        