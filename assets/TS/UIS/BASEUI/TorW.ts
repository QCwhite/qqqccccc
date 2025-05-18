// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import moveUI from "./moveUI";

@ccclass('TorW')
export default class TorW extends Component {
    n:string=null;



    WWAlk(){
     
    
        switch (this.node.getComponent(TorW).n) {
            case "walk":this.walk();
                
                break;
                case "turn6":this.turn6();
                
                break;
                case "turn4":this.turn4();
                
                break;
                case "推石头":this.walk();
                
                break;
                case "walk8":this.walkL(8);
                
                break;
                case "walk4":this.walkL(4);
                
                break;
                case "walk6":this.walkL(6);
                
                break;
            default:
                break;
        }
     this.node.parent.parent.getComponent(moveUI).bi();
        
        }
        
        
        walk(){
        
        MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],null,GeZiManager.PCP.Pturn,"walk");
        
        }
    
        walkL(n:number){
    
        
            MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],n,GeZiManager.PCP.Pturn,"walkL");
    
        }
    
    
    
    
    
        turn4(){
            MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"turn4");  
        
        
        }
        
        
        
        turn6(){
            
         
            MessageCenter.MakeGMessage("AM",[GeZiManager.PCP.ZB],1,GeZiManager.PCP.Pturn,"turn6");
         
        
            }
    
    
    
    
    
    }
    