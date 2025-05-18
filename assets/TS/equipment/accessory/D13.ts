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
import MessageCenter from "../../Message/MessageCenter";
import DXX from "./DXX";
import Cspine from '../../BASE/spineANDgif/Cspine';
import Shops from '../../UIS/shop/shops';
import sideUI from '../../UIS/sideUI';

@ccclass('D13')
export default class D13 extends DXX {
        target:Character=null;
        TheNumber:string ='D13';
        Cname:string="鸡冠"
        J:number=0
    
        start () {
            this.target=this.node.getComponent(Character);
            this.target.HPm2.push(this)
            this.HPM2(0,0,0);
        }
     
    T3(): void {
       // let A2 = [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]
        //for(let a of A2){if (GeZiManager.line(this.target.ZB,8,this.target.faceTo,GeZiManager.BanMove).includes(a.ZB)&&a.color!=this.target.color ){
    
           // MessageCenter.MakeSHMessage("AM",[this.target.ZB],1,this.target.Pturn,"TNS")
    
       // }
    
    
    //}
    
    this.target.sh-=this.J
    if (this.J!=0) {
        this.J=0
    }
    }
    
   
    
    HPM2(n: number,fo:number,wo:number): void {
    if (this.J==0) {
        this.target.sh-=1  
    }else{this.target.TNJJ[3]+=1}
    
    
        if (this.target.HP>this.target.MaxHP/2) {
        this.target.sh+=1;
        this.J=0
     }   else{this.target.TNJJ[3]-=1;    this.J=1}
    }
    
    
    
    
    
    


changeEP(){
         let a=this.node.getComponent(Cspine)

         a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber,0),0)
        a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber,2),2)
       a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber,4),4)

 }

remove(){

    GeZiManager.shanchu(this.target.HPm2,this)
        let a=this.node.getComponent(Cspine)
        a.changeSlot(a.spine2,"KD1",null,13)
        a.changeSlot(a.spine4,"KD1",null,13)
       a.changeSlot(a.spine6,"KD1",null,13)
       this.TheNumber="DXX"

       for (let m of this.target.UI){
          if(m instanceof sideUI) {
         
             
            m.setEQ("DXX")
       
            break;
       
          }}
}

    }