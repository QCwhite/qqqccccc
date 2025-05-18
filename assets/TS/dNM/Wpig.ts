

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
export default class Wpig extends realThing {
   HP: number=3;
   T:number=0;
nn:string="wpig"
tt: string="animal";
FU:number[]=[]
   start(): void {
         super.start();
         turn.Roo.push(this);
         this.node.children[1].getComponent(Label).string=this.T+","+this.nn+","+this.faceTo
         this.h()
   }
   roundPass(): void {
         if (this.HP>0) {



         let a= this.findGe(this.faceTo,1)
         GeZiManager.Tcharacter=null
         MessageCenter.MakeSHMessage("AM",[a],1,-1,"getOneC")

         if((GeZiManager.BanMove.includes(a)&&GeZiManager.Tcharacter==null)||a==66){
    //MessageCenter.MakeSHMessage("AM",[ZB],1,this.Pturn,"HP-");
         if (this.T==4) {
         this.faceTo=this.turn4([this.faceTo])[0];
         }else{     this.faceTo= this.turn6([this.faceTo])[0];}
 // this.node.getComponent(Cspine).changeDirection(this.faceTo)
         this.h()
         }

         MessageCenter.MakeSHMessage("AM",[a],1,-1,"wuli")
       //  MessageCenter.MakeSHMessage("AM",[a],[this.turn8([this.faceIs(a)])[0],0.5],-1,"move")

         MessageCenter.MakeSHMessage("AM",[this.ZB],[this.turn8([this.faceIs(a)])[0],0.6],-1,"move")

         }
}
ReceiveMessage(message: Message): void {
         if (this.HP>0) {


         super.ReceiveMessage(message);
         if (message instanceof SHMessage&&message.SHtype=="qin+"&&message.Command.includes(this.ZB)) {

this.FU.push(message.Content)

         }


         if (message instanceof SHMessage&&message.SHtype=="water"&&message.Command.includes(this.ZB)) {
         if (this.T==4) {
         this.faceTo=this.turn4([this.faceTo])[0];
         }else{    this.faceTo= this.turn6([this.faceTo])[0];}
         }
         if (message instanceof SHMessage&&message.SHtype=="wuli"&&message.Command.includes(this.ZB)) {
         if (this.getc(message.from)) {
         let k= this.faceIs(this.getc(message.from))
         if ([7,1,9,3].includes(k)){

         switch (this.faceTo) {
         case 2:switch (k) {
         case 1:this.faceTo=4

         break;
         case 3:this.faceTo=6

         break;
         case 7:this.faceTo=4

         break;
         case 9:this.faceTo=6

         break;
         default:
         break;
         }

         break;
         case 4:switch (k) {
         case 1:this.faceTo=2

         break;
         case 3:this.faceTo=2

         break;
         case 7:this.faceTo=8

         break;
         case 9:this.faceTo=8

         break;
         default:
         break;
         }

         break;
         case 6:switch (k) {
         case 1:this.faceTo=2

         break;
         case 3:this.faceTo=2

         break;
         case 7:this.faceTo=8

         break;
         case 9:this.faceTo=8

         break;
         default:
         break;
         }

         break;
         case 8:switch (k) {
         case 1:this.faceTo=4

         break;
         case 3:this.faceTo=6

         break;
         case 7:this.faceTo=4

         break;
         case 9:this.faceTo=6

         break;
         default:
         break;
         }

         break;
         default:
         break;
         }
         }else{this.faceTo=this.turn8([k])[0]}
         }
      //  if (this.T==4) {
       //     this.faceTo=this.turn4([this.faceTo])[0];
       //   }else{    this.faceTo= this.turn6([this.faceTo])[0];}
         this.h() }
         }
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


         if (k) {
         if ( this.getdis(k.ZB)<=1) {
         
         for (let j of this.FU) {
          MessageCenter.MakeSHMessage("AM",[k.ZB],j,-1,"qin+")
          
         }
         
         
          //MessageCenter.MakeSHMessage("AM",[k.ZB],1,-1,"TNS+")
         }
         }
         this.ZB=0
         this.node.active=false


         if (k&&k.color=="Blue") {
         GeZiManager.Bhun+=2

         }
         if (k&&k.color=="Red") {
         GeZiManager.Rhun+=2

         }
         GeZiManager.getHUN()
  }






}

