// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Sprite } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import HUI from "./HUI";
import sideUI from "./sideUI";

@ccclass('Heart')
export default class HP extends ComponentBase {
 
        DB:number=0;


        c:number=1;
        
         start() {
          if(this.node.parent.getComponent(HUI)==null){
            this.node.parent.parent.getComponent(sideUI).hearts.push(this);
        this.c=2;
          }else{
          
          
          
          this.node.parent.getComponent(HUI).hearts.push(this);
          }
        }
        
        
        showDB(){console.log(this.DB)}
        
        
        
        to0(){
        switch (this.c) {
          case 1: this.node.getComponent(Sprite).spriteFrame=this.node.parent.getComponent(HUI).Atlas.getSpriteFrame("Bheart");
            
            break;
        
          default: this.node.getComponent(Sprite).spriteFrame=this.node.parent.parent.getComponent(sideUI).Atlas.getSpriteFrame("Bheart");
            break;
        }
         
        };
        
        
        to1(){
        
          switch (this.c) {
            case 1: this.node.getComponent(Sprite).spriteFrame=this.node.parent.getComponent(HUI).Atlas.getSpriteFrame("heart");
              
              break;
          
            default: this.node.getComponent(Sprite).spriteFrame=this.node.parent.parent.getComponent(sideUI).Atlas.getSpriteFrame("heart");
              break;
          }
        };
        
        
        }
        