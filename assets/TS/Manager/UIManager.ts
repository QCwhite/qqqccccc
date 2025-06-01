import { _decorator, director, find, Node } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import BUI from "../UIS/BUI";
import MUI from "../UIS/MMUI/MUI";
import BUIManager from "./BUIManager";
import ManagerBase from "./ManagerBase";
import shopM from '../UIS/shop/ShopM';
import state from '../game/time/state';
import KHD2 from '../Message/KHD2';
import { Vec3 } from 'cc';
import { v3 } from 'cc';
import { start } from 'repl';
import GeZiManager from './GeZiManager';

@ccclass('UIManager')
export default class UIManager extends ManagerBase{
   
   
        UIState:number=0;
        YuanGong: ComponentBase[] = [];
            messageType="UIManager"
        
         
            GUI: Node=null;
            
            
         

        
        
        public changeUI(state1:number){
        let BUIM=this.node.getChildByName("BUIManager")
        let CUI=this.node.getChildByName("CUIManager")
        let SUI1=this.node.getChildByName("shopUI")
        let SUI2=this.node.getChildByName("NWshop");
        let MMUI=this.node.getChildByName("magicUI").getComponent(MUI)
        let a=[["UIManager","GUIManager"]];
        let WF=this.node.getChildByName("WFace")
        this.UIState=state1;
        
        switch (this. UIState) {
            
            
           
            case -1:BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=false;
          if (state.ST==0) {
            CUI.getChildByName("yesno").children[1].active=false; 
          }  else{  CUI.getChildByName("yesno").children[1].active=true; }
            
            this.GUI.active=true;SUI1.position=v3(0,-5000,0);SUI2.active=false;WF.active=false;
            find("Canvas/thingsManager/Day").active=false;
                break;
            
            
            case 0:BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=false;CUI.getChildByName("yesno").children[1].active=false;;this.GUI.active=false;SUI1.position=v3(0,-5000,0);SUI2.active=false;WF.active=false;
            find("Canvas/thingsManager/Day").active=false;
                break;
          
            
                    case 1:BUIM.getChildByName("BUI").active=true; CUI.getChildByName("yesno").children[0].active=false;CUI.getChildByName("yesno").children[1].active=false;this.GUI.active=false;SUI1.position=v3(0,-5000,0);SUI2.active=false;WF.active=false;
                    BUIM.getChildByName("BUI").getComponent(BUI).TNST();
                    find("Canvas/thingsManager/Day").active=false;
                    break;
                    
                    case 2:
                      
                    CUI.getChildByName("yesno").children[0].active=true;
                    BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=true;
                    if (state.ST==0) {
            CUI.getChildByName("yesno").children[1].active=false; 
          }  else{  CUI.getChildByName("yesno").children[1].active=true; }
          this.GUI.active=true;SUI1.position=v3(0,-5000,0);SUI2.active=false;WF.active=false;
                    find("Canvas/thingsManager/Day").active=false;


                      console.log(  CUI.getChildByName("yesno").children[0].active)
                           console.log(  CUI.getChildByName("yesno").children[0].position)
                    break;
                    case 2.5:BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=true;CUI.getChildByName("yesno").children[1].active=true;this.GUI.active=false;SUI1.position=v3(0,-5000,0);SUI2.active=false;WF.active=true;
                    find("Canvas/thingsManager/Day").active=false;
                    break;
                    case 3:BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=false;CUI.getChildByName("yesno").children[1].active=false;this.GUI.active=false;SUI1.position=v3(0,78,0);SUI2.active=false;WF.active=false;
                    find("Canvas/thingsManager/Day").active=true; 
                    break;
                    case 3.5: BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=false;CUI.getChildByName("yesno").children[1].active=false;this.GUI.active=false;SUI1.position=v3(0,-5000,0);SUI2.active=true;WF.active=false;
                    find("Canvas/thingsManager/Day").active=true; 
                    break;
                    case 4: BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=false;CUI.getChildByName("yesno").children[1].active=false;this.GUI.active=false;SUI1.position=v3(0,-5000,0);WF.active=false;
                    BUIM.getChildByName("BUI").getComponent(BUI).TNST();MMUI.open();
                    break;
                    
                    
                    
                    case 5:BUIM.getChildByName("BUI").active=false; CUI.getChildByName("yesno").children[0].active=false;CUI.getChildByName("yesno").children[1].active=false;;this.GUI.active=false;SUI1.position=v3(0,-5000,0);WF.active=true;
                    
                    
                    break;
                    
                    default:BUIM.getChildByName("BUI").active=false;
                    break;
            }


        }
        
        
        
        
        
        
        
        
        
        
        start(){
           MessageCenter.addReceive(this);
          // this.node.setSiblingIndex(1)

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
         
         const targetNode = findNodeInScene(rootNode, "GUIManager"); // 假设要查找的节点名为"TargetNodeName"
         if (targetNode) {
             // 找到了目标节点
          //   console.log("找到了目标节点");
         } else {
             // 没有找到目标节点
          //   console.log("没有找到目标节点");
         }
            
           this.GUI=targetNode; 
        
        
        
        
                     this.addReceive(this.node.getChildByName("BUIManager").getComponent(BUIManager))
              
           if (!MessageCenter.Text&&KHD2.PT.includes(1)) {
          //  console.log("HHH")
           shopM.BTshop()
                  }  

     
                 this.changeUI(-1);
              
        
        
        
        
         }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ReceiveMessage(message: Message){
           
         if(message.Type=="UIManager")
           
           this.DO(message)
        }
        
        
        DO(message: Message){
            let BUI=this.node.getChildByName("BUIManager")
        let CUI=this.node.getChildByName("CUIManager")
            if(message.Command=="change"){
                this.changeUI(message.Content)
            
            
            
            
            }}
           
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        