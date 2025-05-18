// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Button, find, Node } from 'cc';
const {ccclass, property} = _decorator;

import CustomButton from "../BASE/CButton";
import turn from "../game/time/turn";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import moveUI from "../UIS/BASEUI/moveUI";
import AnimalManager from "./AnimalManager";
import GeZiManager from "./GeZiManager";
import ManagerBase from "./ManagerBase";
import TNanager from "./TNanager";
import ZManager from "./ZManager";

@ccclass('BUIManager')
export default class BUIManager extends ManagerBase {
  
      moveUI:Node=null
      SUI:Node=null;
       A1:Node=null;
       A2:Node=null;
       A3:Node=null;
       A4:Node=null;
       A5:Node=null;
       leveUP:Node=null;
       changL:Node=null;
       SK1:Node=null;
       SK2:Node=null;
       SK3:Node=null;
       JSK:Node=null;
    start(){
      
        
    MessageCenter.addReceive(this)
   this.SUI= find("Canvas/Main Camera/UIManager/shopUI/1L/A1")
   this.A1= find("Canvas/Main Camera/UIManager/shopUI/1L/A1")
   this.A2= find("Canvas/Main Camera/UIManager/shopUI/1L/A2")
   this.A3= find("Canvas/Main Camera/UIManager/shopUI/1L/A3")
   this.A4= find("Canvas/Main Camera/UIManager/shopUI/2L/XianJing")
   this.A5= find("Canvas/Main Camera/UIManager/shopUI/2L/BCD")
   this.leveUP= find("Canvas/Main Camera/UIManager/shopUI/3L/Leve")
   this.changL= find("Canvas/Main Camera/UIManager/shopUI/3L/changL")
  this. SK1=find("Canvas/Main Camera/UIManager/BUI/CSkill/skill1")
  this. SK2=find("Canvas/Main Camera/UIManager/BUI/CSkill/skill2")
  this. SK3=find("Canvas/Main Camera/UIManager/BUI/CSkill/skill3")
  this.JSK=find("Canvas/Main Camera/UIManager/BUI/CSkill/JXskill")
  this.moveUI=find("Canvas/Main Camera/UIManager/BUIManager/BUI/BaseChoose/walk")
  
  }
    
    
    
    
    
    
    
    ReceiveMessage(message: Message){
  
    if(message.Type=="BUI"){
    switch(message.Content){
    case"Ban":this.banUI(message.Command);
    break;
    case"Use":this.useUI(message.Command);
    break;
    case"change0.5":this.changeUI(message.Command,0.5);
    break;
    case"change1":this.changeUI(message.Command,1);
    break;
    }
    
    
    }    
    
    
    
    
    
    }
    
    
  changeUI(number:number[],st:number){
      let  BUI=this.node.getChildByName("BUI")      
      let  BaseChoose=BUI.getChildByName("BaseChoose") 
      let  turnB=BUI.getChildByName("turnB")
     
  let move=this.moveUI.getComponent(moveUI)
  
  for(let n of number){
      switch (n) {
          
              case 1:switch (st) {
                  case 0.5:move.torock(GeZiManager.PCP.faceTo);
                      
                      break;
              
                  default:move.USE("walk")
                      break;
              }
             break
                 
                 
                 
                 
                 
               
          }
          
          
              }
  
  
  
  } 
  
    
  useUI(number:number[]){
        
  let move=this.moveUI.getComponent(moveUI)
  
      let  BUI=this.node.getChildByName("BUI")      
     let  BaseChoose=BUI.getChildByName("BaseChoose") 
    
     for(let n of number){
      switch (n) {
   
             case 0:move.USE("turn4");move.USE("turn6");
             break;
             case 1:move.USE("walk");
             break;
              case 2:BaseChoose.getChildByName("qi").getComponent(CustomButton).enableButton()
              break;
              case 3:BaseChoose.getChildByName("attack").getComponent(CustomButton).enableButton()
              break;
              case 4:BaseChoose.getChildByName("magic").getComponent(CustomButton).enableButton()
              break;
              case 5:BaseChoose.getChildByName("shop").getComponent(CustomButton).enableButton();BaseChoose.getChildByName("NWshop").getComponent(CustomButton).enableButton();
              break;
              case 51:this.A1.getComponent(CustomButton).enableButton()
              break;
              case 52:this.A2.getComponent(CustomButton).enableButton()
              break;
              case 53:this.A3.getComponent(CustomButton).enableButton()
              break;
              case 54:this.A4.getComponent(CustomButton).enableButton()
              break;
              case 55:this.A5.getComponent(CustomButton).enableButton()
              break;
              case 56:this.leveUP.getComponent(CustomButton).enableButton()
              break;
              case 57:this.changL.getComponent(CustomButton).enableButton()
              break;
             
          default:
              break;
      }
      
      
          }}
    
    
    
    
    ChangSkill(S:number){
  switch (S) {
      case 1:this.SK1
          
          break;
  
      default:
          break;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
    
    
    
    banUI(number:number[]){
      let move=this.moveUI.getComponent(moveUI)
    let  BUI=this.node.getChildByName("BUI")      
   let  BaseChoose=BUI.getChildByName("BaseChoose")
  
  
    
   for(let n of number){
    switch (n) {
  
           case 0:move.BAN("turn4");move.BAN("turn6");
           break;
           case 0.5:move.BAN("推石头");
           break;
           case 1:move.BAN("walk");move.BAN("walk8");move.BAN("walk4");move.BAN("walk6");
           break;
           case 1.2:move.BAN("walk")
           break;
           case 1.4:move.BAN("walk4")
           break;
           case 1.6:move.BAN("walk6");
           break;
           case 1.8:move.BAN("walk8")
           break;
            case 2:BaseChoose.getChildByName("qi").getComponent(CustomButton).disableButton()
            break;
            case 3:BaseChoose.getChildByName("attack").getComponent(CustomButton).disableButton()
          
            break;
            case 4:BaseChoose.getChildByName("magic").getComponent(CustomButton).disableButton()
            break;
            case 5:BaseChoose.getChildByName("shop").getComponent(CustomButton).disableButton();BaseChoose.getChildByName("NWshop").getComponent(CustomButton).disableButton()
            break;
          
         
            case 51:this.A1.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
            case 52:this.A2.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
            case 53:this.A3.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
            case 54:this.A4.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
            case 55:this.A5.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
            case 56:this.leveUP.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
            case 57:this.changL.getComponent(Button).getComponent(CustomButton).disableButton()
            break;
        default:
            break;
    }
  }
    
        }
  }
  