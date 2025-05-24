import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import realThing from "../../../BASE/realThing";
import GeZiManager from "../../../Manager/GeZiManager";
import Dao from "./Dao";

@ccclass('A122')
export default class A122 extends Dao {
 
        TheNumber:string = 'A122';
        SH:number=2;
      start() {
        this.node.getComponent(Character).attack25.push(this)
           this.target=this.node.getComponent(Character)
             this.changeEP()
    }
    
    Attack25(at:realThing, csh: number): void {
    if(at&&at.weapon){
      if (at.weapon.Wtype==0) {
            GeZiManager.dm+=1;
        }
    }}
    remove(): void {
      GeZiManager.shanchu(this.node.getComponent(Character).attack25,this) 
    }
    }