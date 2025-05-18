// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import CXX from "./CXX";

@ccclass('C04')
export default class C04 extends CXX {
    target:Character=null;
    TheNumber:string = 'C04';
        Cname:string="广东拖鞋"
    start () {

        this.target=this.node.getComponent(Character);
       // this.target.move3.push(this);
         GeZiManager.WindSon.push(this)  
        }
        
      Move3(ZB: number): void {
          if ( this.target.DiXing=="water") {
            this.target.DiXing="C04"
          }
        
      }
    
    
    remove(){
       GeZiManager.shanchu(this.target.move3,this)
       GeZiManager.shanchu(GeZiManager.WindSon,this)
    }
    WDT(): void {
      this.node.getComponent(Character).WD=true;
    }
    
    }
