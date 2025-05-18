// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import state from "../game/time/state";
import turn from "../game/time/turn";
import player from "../game/player";
import weapon from "../equipment/weapon/weapon";
import SXX from "../Scharacter/SXX";
import Character from "../BASE/Character";

import MUI from "./MMUI/MUI";
import { Message } from "../Message/Message";
import { SHMessage } from "../Message/SHMessage";
import { AudioManager } from '../BASE/music';



@ccclass('Yesno')
export default class yesno extends ComponentBase {
   
   
   
        yes(){
                switch (state.ST) {
                    case 0: 
                    console.log()
                    
                    MessageCenter.MakeGMessage("AM",[GeZiManager.GeZi],turn.turn,turn.turn,"TP")
                    MessageCenter.MakeMessage("UIManager","change",0)
                
                    AudioManager.instance.ZJP("ui",1)
         
                
                    
                   
                  
                   
                
                
                
                
                
                        break;
                        case 0.5: 
                        console.log(GeZiManager.Tcharacter.Pturn)
                        console.log(GeZiManager.Tcharacter)
                        MessageCenter.MakeGMessage("AM",[GeZiManager.GeZi,GeZiManager.Tcharacter.Pturn],66,GeZiManager.PCP.Pturn,"FTP");
                      //GeZiManager.Tcharacter.FH(GeZiManager.GeZi)
                        MessageCenter.MakeMessage("UIManager","change",1)
                   
                        state.ST=1
                    
                    
                        
                       
                        console.log(GeZiManager.Tcharacter)
                       
                    
                    
                    
                    
                    
                            break;
                ///////////////////武器攻击
                case 3:
                   
                MessageCenter.MakeMessage("UIManager","change",1);
                MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],[GeZiManager.GeZi],GeZiManager.PCP.Pturn,"attack");
                break;
                case 3.5:
                   
                MessageCenter.MakeMessage("UIManager","change",1);
                MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],[GeZiManager.GeZi],GeZiManager.PCP.Pturn,"attack");
                break;
                ///////////
                
                
                ////////////////////物体放置
                case 2:MessageCenter.MakeGMessage("AM",[GeZiManager.GeZi],GeZiManager.FTPN,GeZiManager.PCP.Pturn,"FTP");
                MessageCenter.MakeMessage("UIManager","change",1);
                GeZiManager.FTPN=0
                break;
                //////////////////////
                
                //////////////移动
                case 1:  
                if(GeZiManager.PCP.walk2!=null){for(let w of GeZiManager.PCP.walk2){w.Walk2(GeZiManager.GeZi);}}  
                GeZiManager.PCP.To(GeZiManager.GeZi,0.6);MessageCenter.MakeMessage("UIManager","change",1);
                GeZiManager.TNC[1]=3;GeZiManager.PCP.Bu.push(1);GeZiManager.PCP.ST()
                MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],GeZiManager.TNC[1]+GeZiManager.PCP.TNJJ[1],GeZiManager.PCP.Pturn,"TN-");  
                if(GeZiManager.PCP.walk3!=null){for(let w of GeZiManager.PCP.walk3){w.Walk3(GeZiManager.PCP.ZB);}}
                    break;
                /////////////////////////
                
                
                
                
                /////施法
                case 4:
                 
                
                MessageCenter.MakeGMessage("MUI",[GeZiManager.GeZi],GeZiManager.GeZi,GeZiManager.PCP.Pturn,""+GeZiManager.DLLM)
                MessageCenter.MakeMessage("UIManager","change",1)
                   
                    
                break;
                /////////////////技能
                case 9:
                    MessageCenter.MakeGMessage("JN",[GeZiManager.GeZi],GeZiManager.GeZi,GeZiManager.PCP.Pturn,""+GeZiManager.DLLM)
                
                  console.log(GeZiManager.GeZi)
                MessageCenter.MakeMessage("UIManager","change",1)
                 break;
                
                
                
                
                
                
                
                
                
                
                    break;
                    default:
                        break;
                }
                   
                
                GeZiManager.clean();
                }
                
                 
                   no(){
                     AudioManager.instance.ZJP("ui",1)
                
          
                    MessageCenter.MakeMessage("UIManager","change",1)
                GeZiManager.qing();
                
                   }
                
                delei(){
                   GeZiManager.DL.push([GeZiManager.GeZi,3])
                console.log(GeZiManager.DL);
                }
                
                start(): void {
                   MessageCenter.addReceive(this)
                }
                
                
                
                
                   
                }
                