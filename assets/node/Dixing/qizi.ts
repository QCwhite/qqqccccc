// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, sp } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../TS/BASE/Character";
import DES from "../../TS/Ditu/des/DES";
import GeZiManager from "../../TS/Manager/GeZiManager";
import { Message } from "../../TS/Message/Message";
import MessageCenter from "../../TS/Message/MessageCenter";
import { SHMessage } from "../../TS/Message/SHMessage";
import SXX from "../../TS/Scharacter/SXX";
import { FDUI } from "../../TS/UIS/else/FDUI";
import { gif1 } from '../../TS/BASE/spineANDgif/gif';
import { AudioManager } from '../../TS/BASE/music';

@ccclass('Qizi')
export default class qizi extends DES {
    color:string="Blue"
    FW: number[]=[];
    tt:string="flag"
    FU:number=null
    FZ(){
       AudioManager.instance.ZJP("hit",24);
    setTimeout(()=>{
    this.node.children[0].getComponent(sp.Skeleton).animation="Idle"
    this.node.children[1].getComponent(sp.Skeleton).animation="Idle"
    this.node.children[2].getComponent(sp.Skeleton).animation="Idle"
    },700)
    
    this.node.children[0].getComponent(sp.Skeleton).loop=true
    this.node.children[1].getComponent(sp.Skeleton).loop=true
    this.node.children[2].getComponent(sp.Skeleton).loop=true
    
   if (this.color!="S02") {
    MessageCenter.MakeSHMessage("AM",[this.ZB],1,-1,"getF");
    GeZiManager.FgetQin(this.ZB,this.ZB)
              
    console.log(this.ZB)
   } 
   
    
    
    
    switch (this.color) {
        case "Blue":this.node.children[1].active=true;//for(let a of this.getNIG(this.ZB)){  GeZiManager.redM.push(a)}
      
            
            break;
            case "Red":this.node.children[0].active=true;//for(let a of this.getNIG(this.ZB)){  GeZiManager.blueM.push(a)}
            
            break;
            case "S02":this.node.children[2].active=true
            
            break;
        default:
            break;
    }
    for (let index = 1; index <= 9; index++) {
        this.FW.push(this.findGe(index,1))
        
    }
    GeZiManager.Tcharacters=[];
    MessageCenter.MakeSHMessage("AM",this.FW,1,0,"getOnes")
    
    for(let a of  GeZiManager.Tcharacters){
        if(a!=null&&a instanceof Character)  {
   
    if (this.color=="S02"&&a.node.getComponent(SXX).Snumber!="S02") {
      //if (a.S02==0) {
        
        //for (let index = 0; index <= a.TNJJ.length-1; index++) {
         //   a.TNJJ[index]++
              
         // }
     // }
      
     
       // a.S02+=1
    
    
       MessageCenter.MakeSHMessage("AM",[a.ZB],2,0,"Qi-")
    
      // a.turnBan[2]=100
    
      a.ST();
    }
    
    
    
    }
    
    }
    
    }
    ObstacleClear()//清除当前坐标障碍物
    {
        for (let i = GeZiManager.AllObstacles.length - 1; i >= 0; i--) {
            if (GeZiManager.AllObstacles[i].ZB === this.ZB) {
                GeZiManager.AllObstacles.splice(i, 1);
            }
        }
    }
    
    
    
    
    
    
    
    
    BZ(preZB:number)
    {
    
    
        
    
 
                AudioManager.instance.ZJP("hit",8);
    
    
    
    
    
    
    
    
    
    
    
    
        MessageCenter.MakeSHMessage("AM",[this.ZB],1,0,"getOneC")
    if (!GeZiManager.Tcharacter) {
        GeZiManager.Tcharacter=this
    }
    if (this.color=="null") {
        this.ObstacleClear()
       // MessageCenter.MakeGMessage("AM",[this.ZB,99],8,1,"FTP");
    }
        if((GeZiManager.Tcharacter&&GeZiManager.Tcharacter.color!=this.color&&this.color!="S02")||(this.color=="S02"&&GeZiManager.Tcharacter.node.getComponent(SXX).Snumber!="S02")||GeZiManager.Tcharacter==this)
        {
            this.node.children[0].getComponent(sp.Skeleton).animation="break"
        this.node.children[1].getComponent(sp.Skeleton).animation="break"
        this.node.children[2].getComponent(sp.Skeleton).animation="break"
    this.node.children[3].active=false
    this.node.children[0].getComponent(sp.Skeleton).loop=false
    this.node.children[1].getComponent(sp.Skeleton).loop=false
    this.node.children[2].getComponent(sp.Skeleton).loop=false
            
            
    switch (this.color) {
        case "Blue":this.node.children[1].active=true;for(let a of this.getNIG(this.ZB)){ GeZiManager.shanchu(GeZiManager.redM,a) }
      
            
            break;
            case "Red":this.node.children[0].active=true;for(let a of this.getNIG(this.ZB)){ GeZiManager.shanchu(GeZiManager.blueM,a)}
            
            break;
            case "S02":this.node.children[2].active=true
            
            break;
        default:
            break;
    }     
            
            
            
            
            
            
            
            
            
            
            
            if (this.color=="S02") {
           // MessageCenter.MakeSHMessage("AM",[this.ZB],1,GeZiManager.Tcharacter.Pturn,"TN+")
           
        }else{       MessageCenter.MakeSHMessage("AM",[this.ZB],1,GeZiManager.Tcharacter.Pturn,"Qi+")
    
        }
    
           this.ObstacleClear()
          setTimeout(()=>{this.fadeOutAndDisappear(this.node,900)}) 
        
        GeZiManager.Tcharacters=[];
        MessageCenter.MakeSHMessage("AM",this.FW,1,0,"getOnes")
     
        for(let a of  GeZiManager.Tcharacters){
            if(a!=null&&a instanceof Character)  {
        if(this.FU!=null&&a.color==this.color&&this.color!="S02"){
        
          //  a.turnBan[2]=0
 
            a.BFUs(this.FU)
        
           
        
        
    
        }
        
        if( GeZiManager.Tcharacter instanceof Character&&this.color=="S02"&&a.node.getComponent(SXX).Snumber!="S02"&&a.S02!=0&&GeZiManager.Tcharacter.qi!=0){
            MessageCenter.MakeSHMessage("AM",[a.ZB],2,0,"Qi+")
    
             
             
            }
    a.ST();
        }
    }
    this.color="dead"
    
    }
    
    
 
    GeZiManager.Tcharacter=null
    }
    
    
    
    
    
    
    
    
    LK(ZB:number){
    /*
        MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOneC")
        if(GeZiManager.Tcharacter&&GeZiManager.Tcharacter instanceof Character){
     if(GeZiManager.Tcharacter.color!=this.color&&this.color!="S02"){
    
            GeZiManager.Tcharacter.turnBan[2]=0
            GeZiManager.Tcharacter.ST();
    
        }
    
    if (this.color=="S02"&&GeZiManager.Tcharacter.node.getComponent(SXX).Snumber!="S02"&&GeZiManager.Tcharacter.S02!=0&&GeZiManager.Tcharacter.qi!=0) {
        GeZiManager.Tcharacter.S02-=1
            if (GeZiManager.Tcharacter.S02==0) {
        for (let index = 0; index <= GeZiManager.Tcharacter.TNJJ.length-1; index++) {
            GeZiManager.Tcharacter.TNJJ[index]--
               
           } 
        console.log(GeZiManager.Tcharacter.TNJJ)
        GeZiManager.Tcharacter.ST();
    }
    
    }
    }}*/
    
    
    MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOne")
    if(GeZiManager.Tcharacter&&GeZiManager.Tcharacter instanceof Character){
    if(GeZiManager.Tcharacter.color!=this.color&&this.color=="S02"){
      
    
        GeZiManager.Tcharacter.ST();
    
    }

    if(GeZiManager.Tcharacter.color==this.color&&this.FU!=null){
        GeZiManager.Tcharacter.BFUs(this.FU)
    
       
    
    }


}
    
    
    
    
    }
    JR(ZB:number){
      /*  MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOne")
     
    
    if(GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter instanceof Character){
    
        if(GeZiManager.Tcharacter.color!=this.color&&this.color!="S02"){
    
           GeZiManager.Tcharacter.turnBan[2]=100
           
           GeZiManager.Tcharacter.ST();
           
       }
    
       if (this.color=="S02"&&GeZiManager.Tcharacter.node.getComponent(SXX).Snumber!="S02"&&GeZiManager.Tcharacter.qi!=0) {
       
       if (GeZiManager.Tcharacter.S02==0) {
        for (let index = 0; index <=GeZiManager.Tcharacter.TNJJ.length-1; index++) {
            GeZiManager.Tcharacter.TNJJ[index]++;
            
        }
       }
        
        GeZiManager.Tcharacter.S02+=1
        console.log(GeZiManager.Tcharacter.TNJJ)
        GeZiManager.Tcharacter.ST();
    }
    
    }*/
    
    MessageCenter.MakeSHMessage("AM",[ZB],1,0,"getOne")
    console.log(GeZiManager.Tcharacter)
    if(GeZiManager.Tcharacter&&GeZiManager.Tcharacter instanceof Character){
    if(GeZiManager.Tcharacter.color!=this.color&&this.color=="S02"){
              MessageCenter.MakeSHMessage("AM",[GeZiManager.Tcharacter.ZB],2,0,"Qi-")
           
        GeZiManager.Tcharacter.ST();
    
    }

    if(GeZiManager.Tcharacter.color==this.color&&this.FU!=null){
        GeZiManager.Tcharacter.Fus(this.FU)
    
       
    
    }


}
    
    
    
    }
    
    ReceiveMessage(message: SHMessage): void {
        console.log(this.ZB)
        console.log(message)
      if(this.color!="dead") {
        switch (message.SHtype) {
            case "wind":this.node.children[0].getComponent(sp.Skeleton).animation="Wind";this.node.children[1].getComponent(sp.Skeleton).animation="Wind"
                setTimeout(() => {
                    this.node.children[0].getComponent(sp.Skeleton).animation="Idle";this.node.children[1].getComponent(sp.Skeleton).animation="Idle"
                }, 2000);
                break;
        case "mofa": if(this.ZB==message.Command[0]){this.BZ(this.ZB)
            
        }
        break;


case "getF":if(this.ZB==message.Command[0]){GeZiManager.TF=this}

console.log(this.ZB)
break;
            default:
                break;
        }}
    }
    
    
    
    
    
    getF(n:number){
        GeZiManager.Tcharacters=[]
  MessageCenter.MakeSHMessage("AM",this.getNIG(this.ZB),1,GeZiManager.PCP.Pturn,"getOnes");
      this.FU=n
let D
switch (n) {
    case 0.5:D=0
        
        break;
        case -1:D=1
        
        break;
        case -2:D=2
        
        break;
        case -3:D=3
        
        break;
    default:
        break;
}


  this.node.getChildByName("FU").getComponent(gif1).changeF(D,1)
  
  for(let o of GeZiManager.Tcharacters){
if (o instanceof Character) {
    o.Fus(n) 
}
GeZiManager.Tcharacters=[]

       }



    }
    
    
    
      
    }
    