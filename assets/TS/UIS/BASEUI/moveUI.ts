// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Node } from 'cc';
const {ccclass, property} = _decorator;

import CustomButton from "../../BASE/CButton";
import ComponentBase from "../../BASE/ComponentBase";
import { gif1 } from "../../BASE/spineANDgif/gif";
import GeZiManager from "../../Manager/GeZiManager";
import TorW from "./TorW";
import { v3 } from 'cc';

@ccclass('MoveUI')
export default class moveUI extends ComponentBase {
        n:number=0
        @property(Node)
        d2:Node=null
        @property(Node)
        d4:Node=null
        @property(Node)
        d6:Node=null
        @property(Node)
        d8:Node=null
        @property(Node)
        d5:Node=null
        
        //初始
            Pri(){
              for(let a of this.node.children){
                a.active=false;
            }
        this.node.getChildByName("Background").active=true;
            }
          
            //
            bi(){
          if(this.n=1){
          
        
          this.node.scale=v3(1,1,1)
        this.node.children[0].getComponent(gif1).changeF(7,1)
        this.d2.active=false
        this.d4.active=false
        this.d6.active=false
        this.d8.active=false
        this.d5.active=false;
        this.node.getComponent(CustomButton).enableButton();
        
             this.node.position=v3( this.node.position.x,0,0)
        
        
          }
        }
          
          
          
          kai(){
           
          
            for(let a of this.node.parent.children){a.getComponent(CustomButton).toN()}
         
            this.node.children[0].getComponent(gif1).changeF(8,1) 
           
            this.d2.active=true
            this.d4.active=true
            this.d6.active=true
            this.d8.active=true
            this.d5.active=true;
                   
        
        GeZiManager.PCP.UIC();
        this.node.getComponent(CustomButton).disableButton()
        this.node.position=v3( this.node.position.x,160,0)
         this.node.scale=v3(1.4,1.4,1)
        }
                  
        
            
        
        
        torock(nk:number){
         this.TX(nk,"推石头")
            
          
                
                          
        }
        
        
        
        TX(n:number, a:string) {
          let node: Node;
          switch (n) {
            case 2:
              node = this.d2.children[0];
              break;
            case 4:
              node = this.d4.children[0];
              break;
            case 6:
              node = this.d6.children[0];
              break;
            case 8:
              node = this.d8.children[0];
              break;
            default:
              return;
          }
          
        
          node.parent.getComponent(TorW).n=a; 
          node.children[1].setScale(node.children[1].getComponent(gif1).scX* node.children[1].getScale().x,node.children[1].getScale().y,1)
          node.children[1].getComponent(gif1).scX=Math.abs(node.children[1].getComponent(gif1).scX)
          switch (a) {
            case "推石头":
              node.parent.getComponent(CustomButton).enableButton();node.children[1].getComponent(gif1).changeF(1,1)
              node.parent.children[1].getComponent(gif1).changeF(this.getTNC(1),1);console.log(this.getTNC(0)-1)
              break;
            case "turn6":
              node.parent.getComponent(CustomButton).enableButton();node.children[1].getComponent(gif1).changeF(2,1);
              node.parent.children[1].getComponent(gif1).changeF(this.getTNC(0)-1,1);console.log(this.getTNC(0)-1)
              break;
            case "turn4":
              node.parent.getComponent(CustomButton).enableButton();node.children[1].getComponent(gif1).changeF(2,1); node.children[1].getComponent(gif1).scX=-1;
              node.parent.children[1].getComponent(gif1).changeF(this.getTNC(0)-1,1);console.log(this.getTNC(0)-1)
              break;
            case "walk":
              node.parent.getComponent(CustomButton).enableButton();node.children[1].getComponent(gif1).changeF(0,1)
              node.parent.children[1].getComponent(gif1).changeF(this.getTNC(1)-1,1);console.log(this.getTNC(0)-1)
              break;
              break;
            case "BAN":
              node.parent.getComponent(CustomButton).disableButton();node.children[1].getComponent(gif1).changeF(4,1)
              node.parent.children[1].getComponent(gif1).changeF(-1,1);console.log(this.getTNC(0)-1)
              break;
            
              case "walk8":
                node.parent.getComponent(CustomButton).enableButton();node.children[1].getComponent(gif1).changeF(0,1)
                node.parent.children[1].getComponent(gif1).changeF(this.getTNC(1)-1,1);console.log(this.getTNC(0)-1)
            break;
            
              default:
              return;
         
         
            }
        
        
            node.children[1].setScale(node.children[1].getComponent(gif1).scX* node.children[1].getScale().x,node.children[1].getScale().y,1)
        console.log(node.children[1].getComponent(gif1).spriteFrame)
        }
        
        
        BAN(a:string){
        console.log(a)
          if(this.d2.getComponent(TorW).n==a){this.d2.getComponent(CustomButton).disableButton();}
          if(this.d4.getComponent(TorW).n==a){this.d4.getComponent(CustomButton).disableButton();}
          if(this.d6.getComponent(TorW).n==a){this.d6.getComponent(CustomButton).disableButton();}
          if(this.d8.getComponent(TorW).n==a){this.d8.getComponent(CustomButton).disableButton();}
        }
        
        
        USE(a:string){
        
          //console.log(a)
            if(this.d2.getComponent(TorW).n==a){this.d2.getComponent(CustomButton).enableButton();}
            if(this.d4.getComponent(TorW).n==a){this.d4.getComponent(CustomButton).enableButton();}
            if(this.d6.getComponent(TorW).n==a){this.d6.getComponent(CustomButton).enableButton();}
            if(this.d8.getComponent(TorW).n==a){this.d8.getComponent(CustomButton).enableButton();}
        
        
            
        }
        getTNC(n:number){
        
        
          let k=  GeZiManager.PCP.TNJJ
          let l =GeZiManager.TNC
         if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
         }
         
        }
        