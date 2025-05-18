import { _decorator, find, Label } from 'cc';
const { ccclass, property } = _decorator;

import MTX from "../../pictures/TX/MTX/MTX";
import turn from "../game/time/turn";
import GeZiManager from "../Manager/GeZiManager";
import QinManager from "../Manager/QinManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import CHF from "./CHF";
import realThing from "./realThing";
import { gif1 } from "./spineANDgif/gif";
import { UIOpacity } from 'cc';
import { tween } from 'cc';
import label from '../UIS/label';
import Wpig from '../dNM/Wpig';
import { AudioManager } from './music';

@ccclass('Qin')
export default class Qin extends realThing {
    @property(Number)
    type:number = 0;
    ZB: number = 0;
CX:boolean=false
    tu:gif1=null
   nn:number=2
  
  start(): void {
         this.ghost == true;
         turn.Roo.push(this)

        AudioManager.instance.ZJP("hit",27);
         this.node.getChildByName("ll").getComponent(gif1).timeArray  = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
         this.node.getChildByName("ll").getComponent(gif1).moveToNextFrame(3,15,0)
        tween(this.node.getChildByName("LC").getComponent(UIOpacity)).to(1.4, { opacity:255 }).start(); // 缩放动
        }
 
 
//  获取类型名称
  getQinType(ZB:number,TZB:number) {
//    console.log(GeZiManager.Tcharacter.ZB)
////3指数量，0指默认对象为触发者








        GeZiManager.Tcharacter=null
         MessageCenter.MakeSHMessage("AM",[TZB],1,GeZiManager.PCP.Pturn,"getOneC");

if ( GeZiManager.Tcharacter==null) {
  MessageCenter.MakeSHMessage("AM",[TZB],1,GeZiManager.PCP.Pturn,"getOne");

  if ( GeZiManager.Tcharacter && GeZiManager.Tcharacter instanceof Wpig) {
    
  }else{   GeZiManager.Tcharacter=null}
}




         if (this.CX&&GeZiManager.Tcharacter) {


        

        console.log(GeZiManager.Tcharacter.ZB)
        console.log(this.node.getComponent(UIOpacity).opacity)

        MessageCenter.MakeSHMessage('AM',[this.ZB],this.type,0,"qin+")
        MessageCenter.MakeSHMessage('AM',[this.ZB],1,0,"TNS")
        this.tu=GeZiManager.Tcharacter.getComponentInChildren(MTX).FuG
        this.tu.timeArray=[56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56]
        find("Canvas/DituManager/New Node/AnimalManager").getComponent(QinManager).last=GeZiManager.PCP.ColortoN(GeZiManager.Tcharacter.color);
        console.log(GeZiManager.Tcharacter.color);
        console.log(GeZiManager.PCP.ColortoN(GeZiManager.Tcharacter.color))
        GeZiManager.shanchuALL(GeZiManager.qin,this);
        GeZiManager.shanchuALL(turn.Roo,this);
        GeZiManager.shanchuALL(GeZiManager.qins,this.ZB);//效果触发后将符删除
        GeZiManager.Tcharacter=null;
   
        setTimeout(()=>{     switch (this.type) {
        case 0:this.tu.moveToNextFrame(0,8,1);
            AudioManager.instance.ZJP("hit",12);



        break;
        case 1:this.tu.moveToNextFrame(9,17,1)
 AudioManager.instance.ZJP("hit",13);
        break;
        case 2:this.tu.moveToNextFrame(18,26,1)
 AudioManager.instance.ZJP("hit",14);
        break;
        case 3:this.tu.moveToNextFrame(27,35,1)
 AudioManager.instance.ZJP("hit",15);
        break;
        default:
        break;
        }

 tween(this.node.getComponent(UIOpacity)).
  to(0.3,{opacity:0}).
  call(()=>{
    
    this.destroy()
    this.node.destroy()}).

  start()},360)




  
      }}




      FgetQinType(ZB:number,TZB:number) {
        //    console.log(GeZiManager.Tcharacter.ZB)
        ////3指数量，0指默认对象为触发者
        
        
        
        
        
        
        console.log(  GeZiManager.TF)
        
                GeZiManager.TF=null
                 
                MessageCenter.MakeSHMessage("AM",[this.ZB],1,-1,"getF");
               
                 if (this.CX&&GeZiManager.TF) {
        
                  console.log(  GeZiManager.TF)
                
        
             
                console.log(this.node.getComponent(UIOpacity).opacity)
       
                this.tu=GeZiManager.TF.getComponentInChildren(MTX).FuG
                this.tu.timeArray=[56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56]
             
                if (this.type==0) {
                  this.type=0.5
                }else{this.type*=-1}
                GeZiManager.TF.getF(this.type)
                GeZiManager.shanchuALL(GeZiManager.qin,this);
                GeZiManager.shanchuALL(turn.Roo,this);
                GeZiManager.shanchuALL(GeZiManager.qins,this.ZB);//效果触发后将符删除
                GeZiManager.TF=null;
                setTimeout(()=>{     switch (this.type) {
                case 0.5:this.tu.moveToNextFrame(0,8,1)
        
                break;
                case -1:this.tu.moveToNextFrame(9,17,1)
        
                break;
                case -2:this.tu.moveToNextFrame(18,26,1)
        
                break;
                case -3:this.tu.moveToNextFrame(27,35,1)
        
                break;
                default:
                break;
                }
               
                       
                
        
         tween(this.node.getComponent(UIOpacity)).
          to(0.3,{opacity:0}).
          call(()=>{
            
            this.destroy()
            this.node.destroy()}).
        
          start()},360)
        
        
        
        
          
              }}












 
CXX(){


  switch (this.type) {
        case 0:
            AudioManager.instance.ZJP("hit",12);



        break;
        case 1:
 AudioManager.instance.ZJP("hit",13);
        break;
        case 2:
 AudioManager.instance.ZJP("hit",14);
        break;
        case 3:
 AudioManager.instance.ZJP("hit",15);
        break;
        default:
        break;
        }
  this.tu=this.node.getChildByName("Node").getComponent(gif1)
  this.tu.timeArray=[56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56,56,34,45,45,56,56,56,56]
        this.CX=true
        this.node.children[0].active=true
       // this.node.getChildByName("ll").active=false
        this.node.getChildByName("LC").active=false
       
        this.node.getChildByName("ll").getComponent(gif1).moveToNextFrame(12,21,1);
        console.log(this.ZB)
        this.zyx=2
        GeZiManager.FgetQin(this.ZB,this.ZB)
        GeZiManager.getQin(this.ZB,this.ZB)
   
        this.node.getChildByName("FU").getComponent(gif1).changeF(this.type,1);
        tween(this.node.getComponent(UIOpacity)).to(0.2,{opacity:255}, { easing: "sineInOut" })
        setTimeout(()=>{
        //this.node.getChildByName("FU").getComponent(gif1).setMaterialToSprite("falsh")
        console.log(this.node.getChildByName("FU").getComponent(UIOpacity).opacity)
     tween(this.node.getChildByName("FU").getComponent(UIOpacity)).to(0.6,{opacity:255})
    
     
     
     .start()
   
        switch (this.type) {
          case 0:this.tu.moveToNextFrame(0,8,1)
  
          break;
          case 1:this.tu.moveToNextFrame(9,17,1)
  
          break;
          case 2:this.tu.moveToNextFrame(18,26,1)
  
          break;
          case 3:this.tu.moveToNextFrame(27,35,1)
  
          break;
          default:
          break;
          }
  


       },600)
       

}
roundPass(): void {
        console.log(this.ZB)
        this.nn--
        tween(this.node.getChildByName("LC").getComponent(UIOpacity))
        .to(1, { opacity:0 })
        .call(()=>{      this.node.getChildByName("LC").getComponent(Label).string=this.nn+""})
        .to(1, { opacity:255 })
        .start(); // 缩放动
  
        if (this.nn==0) {
        this.CXX()

        }
}
  ReceiveMessage(message: Message) {
//    空方法，不做任何处理

  }
}



