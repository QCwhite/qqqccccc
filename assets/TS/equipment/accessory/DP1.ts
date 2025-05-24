import { _decorator, Component, Node } from 'cc';
import DXX from './DXX';
import Character from '../../BASE/Character';
import GeZiManager from '../../Manager/GeZiManager';
import MessageCenter from '../../Message/MessageCenter';
import { SHMessage } from '../../Message/SHMessage';
import GMessage from '../../Message/GMessage';
import SXX from '../../Scharacter/SXX';
const { ccclass, property } = _decorator;

@ccclass('DP1')
export class DP1 extends DXX {
   
    target:Character=null;
    TheNumber:string = 'DP1';
    Cname:string="项圈";

 
    start () {
       this.target=this.node.getComponent(Character);
      GeZiManager.P1.XD1.push(this)
      GeZiManager.P2.XD1.push(this)
      GeZiManager.P3.XD1.push(this)
      GeZiManager.P4.XD1.push(this)
      GeZiManager.P5.XD1.push(this)
      GeZiManager.P6.XD1.push(this)
      this.target.behurt3.push(this)
    this.changeEP()
    }
    xd1(message: SHMessage,n:number): void {
        if (this.target.node.getComponent(SXX).ZZ.includes("animal")&&message.from!=this.target.Pturn&&message.from==n&&this.target.color==GeZiManager.getc(message.from).color&&GeZiManager.getc(message.from).getdis(this.target.ZB)<=2) {
             
          
            
             if (message.SHtype=="walkL"||message.SHtype=="walk") {
                MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"walk")
             }
       
             if (message.SHtype=="attack") {
                MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"attack")
             }
       
             if (message.SHtype=="turn4") {
                MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"turn4")
             }
       
             if (message.SHtype=="turn6") {
                MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"turn6")
             }} 
       }
  

       Behurt3(n: number, killp: any, k: number, BK: number): void {
           if (!this.target.node.getComponent(SXX).ZZ.includes("animal")&&n>0) {
            MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"walk")
           }
       }

       remove(){
       GeZiManager.shanchu(this.target.behurt3,this)
       GeZiManager.shanchu(GeZiManager.P1.xd1,this)
       GeZiManager.shanchu(GeZiManager.P2.xd1,this)
       GeZiManager.shanchu(GeZiManager.P3.xd1,this)
       GeZiManager.shanchu(GeZiManager.P4.xd1,this)
       GeZiManager.shanchu(GeZiManager.P5.xd1,this)
       GeZiManager.shanchu(GeZiManager.P6.xd1,this)

      

}
}