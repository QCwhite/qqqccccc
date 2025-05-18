

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../BASE/realThing";
import Cspine from "../BASE/spineANDgif/Cspine";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import { SHMessage } from "../Message/SHMessage";
import NWshopM from "../UIS/shop/NWshopM";

@ccclass('Wpig')
export default class Wdog extends realThing {
   HP: number=3;
   T:number=0;
nn:string="wdog"
tt: string="animal";
   start(): void {
         super.start();
         turn.Roo.push(this);
         this.node.children[1].getComponent(Label).string=this.T+","+this.nn+","+this.faceTo
         this.h()
   
   
   
   
      }






xd1(message: SHMessage,n:number): void {
 if (message.from==n) {
      
   
     
      if (message.SHtype=="walkL"||message.SHtype=="walk") {
            this.Walk(true)
            console.log(message)
      }

      if (message.SHtype=="attack") {
            this.attack()
            console.log(message)
      }

      if (message.SHtype=="turn4") {
          this.faceTo=  this.turn4([this.faceTo])[0]
          console.log(message)
      }

      if (message.SHtype=="turn6") {
            this.faceTo=  this.turn6([this.faceTo])[0]
            console.log(message)
      }} 
}


attack(){


      MessageCenter.MakeSHMessage("AM",[this.findGe(this.faceTo,1)],1,-1,"wuli")


}


Walk(T: boolean): void {
      console.log(this.faceTo)
      MessageCenter.MakeSHMessage("AM",[this.ZB],[this.faceTo,0.6],-1,"move")
}



   roundPass(): void {
         if (this.HP>0) {



         let a= this.findGe(this.faceTo,1)
         GeZiManager.Tcharacter=null
         MessageCenter.MakeSHMessage("AM",[a],1,-1,"getOneC")

       

         MessageCenter.MakeSHMessage("AM",[a],1,-1,"wuli")
        

         MessageCenter.MakeSHMessage("AM",[this.ZB],[this.turn8([this.faceIs(a)])[0],0.6],-1,"move")

         }
}
ReceiveMessage(message: Message): void {
         if (this.HP>0) {


         super.ReceiveMessage(message);
        
         this.h() }
         
}
h(){

         this.node.children[2].getComponent(Label).string=this.HP.toString()
         this.node.children[1].getComponent(Label).string=this.T+","+this.nn+","+this.faceTo
//this.node.children[0].setScale(this.node.children[0].getScale[0],this.node.children[0].getScale[1]*=-1,this.node.children[0].getScale[2])
         let j=180;
         switch (this.faceTo) {
         case 2:j=180;

         break;
         case 6:j=-90;

         break;
         case 4:j=90

         break;
         default:j=0
         break;
         }
         this.node.children[0].angle=j
}
dead(k:realThing): void {


         super.dead(k)

  // this.deadgif();
   //GeZiManager.shanchu()


       
  }
}

