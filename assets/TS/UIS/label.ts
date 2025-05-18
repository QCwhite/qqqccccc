// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import GeZiManager from "../Manager/GeZiManager";
import turn from "../game/time/turn";

@ccclass('Label')
export default class label extends ComponentBase {
        label :string =null;
        @property(Number)
        stt:number=0;
       
      start(){
        GeZiManager.label.push(this);   
       //this.off();
      if(this.stt===1){turn.Too.push(this);}
      }
       change(){
          this.node.getComponent(Label).string=this.label;
      }
      
      
      off(){this.label="";this.change();};
      Fqic(){
      
      
      this.label="没钱买个J8"
      this.change();
      
      setTimeout(() => {
         this.off();
        }, 800);
      }
      
      blueWin(){
      
      console.log("af")
          this.label="蓝队获胜"
          this.change();
          
      }
      
         redWin(){
      
      
              this.label="红队获胜"
              this.change();
              
             
              }
      
      turnPass(){
        this.label=turn.round+""
        this.change();
      }
      
      
      
      }
      