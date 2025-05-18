import { _decorator, Button } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";

import MessageCenter from "../Message/MessageCenter";
import Choose from "./choose";

@ccclass('Butcontrol')
export default class btc extends ComponentBase {
    
    start(): void {
        this.node.parent.parent.getComponent(Choose).stb.push(this.node)
    
    }
    
        choose(){
    if (!this.node.parent.parent.getComponent(Choose).YJR) {
        console.log(this.node.parent.parent.getComponent(Choose).KYD)
        if(this.node.parent.parent.getComponent(Choose).KYD){ if(this.node.parent.parent.getComponent(Choose).tj!=null) { this.node.parent.parent.getComponent(Choose).tj2=this.node
           this.node.parent.parent.getComponent(Choose).LCC(this.node.parent.parent.getComponent(Choose).tj.name,this.node.parent.parent.getComponent(Choose).tj2.name);
       }else{
           this.node.parent.parent.getComponent(Choose).tj=this.node;
           this.node.parent.parent.getComponent(Choose).LCC(this.node.name,this.node.name);
       }
    }
    
    }
    
    
    
     
    
     
        
      
        }
    
    
    
    td(){this.node.getComponent(Button).interactable=false;}
        tl(){this.node.getComponent(Button).interactable=true;};
    }
    