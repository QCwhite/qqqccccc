// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "../BASE/ComponentBase";
import GeZiManager from "../Manager/GeZiManager";
import { SHMessage } from "../Message/SHMessage";
import MessageCenter from "../Message/MessageCenter";
import turn from "./time/turn";

import { Message } from "../Message/Message";
import waterM from "./nature/waterM";
import Efish from "./nature/eatPfish";
import AnimalManager from "../Manager/AnimalManager";
import weatherM from "../../pictures/map/weather/weatherM";
import MUI from "../UIS/MMUI/MUI";
import KHD2 from "../Message/KHD2";




@ccclass('TUT')
export default class TUT extends ComponentBase {
  KN:string[]=["T1","n","walk","qi/n",'magic','shop','T2','walk','qi/n','shop','ZZ','magic','n','T3','qi','walk']//奖励轮
  NN:string[]=["TUW","WATER","FISH"]//自然行为
  DN:string[]=["wind","water","soil","fire"]  //灾难
  TN:string[]=["n","n","n",'n','qi+2']
  DZ:number[][]=[]
  RO:ComponentBase[]=[]
  TO:ComponentBase[]=[]
  jj:number=1
  ZZ:string=null//随机奖励
  Eatfish:Efish=null//食人鱼

  n:number=-1
      onLoad(): void {
        MessageCenter.addReceive(this);
      }
  
  start () {
  turn.Too.push(this)
  turn.Roo.push(this)
  if (KHD2.PT.includes(1)||MessageCenter.Text) {
  this.n=  Math.floor(Math.random() * 2);
  }
  //shopM.dayShop5();
  //this.Eatfish=cc.find('Canvas/thingsManager/epf').getComponent(Efish);
  if(KHD2.PT.includes(1)){
  let random = Math.random();  // 生成一个0到1之间的随机数
    let  ra = Math.floor(random * 4) + 1;
    this.ZZ=this.KN[ra]
    MessageCenter.MakeGMessage("TU",[1],this.ZZ,1,"KN");
  }
  }
  
  
  roundPass(): void {
  for(let a of this.RO){a.roundPass()}
 // this.DKN(this.KN[turn.round-1]);
  this.FaQi();
  //this.TuW()
//this.makeAn()




  }
  
  
  turnPass(): void {
    for(let a of this.TO){a.turnPass()}
  
  }
  
  
  
  dizhen(pt:number,lun:number,n:number,k:number){
   if(turn.turn==pt&&turn.round==lun){
  switch (n) {
    case 1:  
  
      break;
      case 2:
      GeZiManager.PCP.To(k,0);
      GeZiManager.PCP.ST();
        break;
  
  
  
        case 3:
          MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],2,GeZiManager.PCP.Pturn,"TN+");
            break;
    default:
      break;
  }
  return true
  
      }
      return false
  }
  
  
  
  
  DKN(Tn:string){
  GeZiManager.TNC=[1,3,3,4,4,2]
  switch (Tn) {
    case 'T1':
      
      break;
      case 'walk':GeZiManager.TNC[2]-=2;
      
      break;
      case 'qi':GeZiManager.TNC[1]-=2;
      
      break;
      case 'qi/n':if(GeZiManager.P1.ZB+GeZiManager.P3.ZB+GeZiManager.P6.ZB+GeZiManager.P2.ZB+GeZiManager.P4.ZB>=150){GeZiManager.TNC[1]-=2;}
      
      break;
      case 'magic':GeZiManager.TNC[4]-=2;
      
      break;
      case 'shop':GeZiManager.TNC[5]-=2;
      
      break;
      case 'ZZ':  this.DKN(this.ZZ);
      if(KHD2.PT.includes(1)){
        let random = Math.random();  // 生成一个0到1之间的随机数
        
          let  ra = Math.floor(random * 4) + 1;
          
          
          this.ZZ=this.KN[ra]
          MessageCenter.MakeGMessage("TU",[1],this.ZZ,1,"KN")}
      
      
      
      
      break;
      case 'T1':
      
      break;
      case 'T1':
      
      break;
      case 'T1':
      
      break;
  
    default:
      break;
  }
  
  
  
  }
  
  FaQi(){
  
   if(turn.round%2==0){
  let j=[GeZiManager.P1.ZB,GeZiManager.P2.ZB,GeZiManager.P3.ZB,GeZiManager.P4.ZB,GeZiManager.P5.ZB,GeZiManager.P6.ZB]
  
  MessageCenter.MakeSHMessage("AM",j,this.jj,-2,"Qi+");
  /*if (this.jj<2&&turn.round>7) {
    this.jj++;
  }*/
  
  }
  
  
  if(turn.round%6==1){
    let j=[GeZiManager.P1.ZB,GeZiManager.P2.ZB,GeZiManager.P3.ZB,GeZiManager.P4.ZB,GeZiManager.P5.ZB,GeZiManager.P6.ZB]
    for(let o of j){
     
     // MessageCenter.MakeSHMessage("AM",[o],1,1,"HP+");
  
    }
  
    /*if (this.jj<2&&turn.round>7) {
      this.jj++;
    }*/
    
    }
  }
  getRA(arr:any[], n:number) {
    const len = arr.length;
    const result = [];
    
    if (n >= len) {
        return arr.slice(); // 如果要选取的元素数量大于等于数组长度，直接返回整个数组的副本
    }
    
    const pickedIndexes = new Set();
    while (pickedIndexes.size < n) {
        let randomIndex = Math.floor(Math.random() * len);
        pickedIndexes.add(randomIndex);
    }
    
    pickedIndexes.forEach((index: number) => {
        result.push(arr[index]);
    });
    
    return result;
  }
  
  makeAn(){

if (this.n==1&&turn.round%12==4) {
  this.n=0


    let k=this.getRA([1,2,3,4],1)[0]
      let j=this.addZ([0],[1,2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
    MessageCenter.MakeGMessage("AM",[j,k*2],24,1,"FTP");
    
}

if (this.n==0&&turn.round%12==8) {
  this.n=1
  let k=this.getRA([1,2,3,4],1)[0]
  let j=this.addZ([0],[1,2],this.mArr1Arr2(GeZiManager.BanMove,GeZiManager.getAllOZB(),GeZiManager.grass,GeZiManager.waterPool,GeZiManager.boxs))
MessageCenter.MakeGMessage("AM",[j,k*2],25,1,"FTP");
}



  }
  
  
  
  
  DNN(Tn:string){
  
    switch (Tn) {
      case 'WATER'://waterM.roundPass();
        
        break;
        case 'FISH':
        
        break;
        case 'qi':GeZiManager.TNC[1]-=2;
        
      
    
      default:
        break;
    }
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*turnPass(){
   
    switch (turn.day) {
    case 1: this.F110();this.F111();this.TuW();
        switch (turn.round) {
         
          
          case 2:
            
            break;
            case 6:
            break;
            case 7:if(turn.turn==1)GeZiManager.setQin() ;shopM.TNWshop();
            
            break;
            
  
  
            
            
        
          default:
            break;
        }
      
      break;
      case 2: this.F110();this.F111();this.TuW();
      switch (turn.round) {
       
        case 13:;if(turn.turn==1)GeZiManager.XQin();shopM.Tshop();
        case 14:
          
          break;
         
        
          case 18:if(turn.turn==1)GeZiManager.setQin(); shopM.TNWshop();
          
          break;
          
  
  
          
          
      
        default:
          break;
      }
    
    break;
    default:
      break;
   }
    
  
  
  }
  
  
  
  
  
  
  F110(){
  
  if((turn.turn==1&&[5,9,17.21].includes(turn.round))){
  
  
      MessageCenter.MakeSHMessage("AM",[65],2,null,"Qi+");
  }
  
  
  
  }
  
  */
  
  
  //图腾喷人
  TuW(){
  
  
  let a=[2,3,4,5,6,7]
   let b=[]  
  for(let i=0;i<=5;i++){
  
  if(GeZiManager.BanMove.includes(a[i])==false){b.push(a[i])}}
    
  
    let randomIndex = Math.floor(Math.random()*b.length);
    let c = b[randomIndex];
  if(GeZiManager.BanMove.includes(1)&&KHD2.PT.includes(1)){
  
  MessageCenter.MakeGMessage("TUT",[1],c,null,"TUW");
  
  }
  }
  
  
  
  
  
  
  
  ReceiveMessage(message: Message): void {
    if(message instanceof SHMessage&& message.Type=="TUT"){
  
  switch (message.SHtype) {
    case 'KN':this.ZZ=message.Content
      
      break;
      case 'fish':this.Eatfish.rxturn=message.Content;
      
      break;
      case 'TUW':  GeZiManager.Tcharacter=null;MessageCenter.MakeSHMessage("AM",[1],1,null,"getOne");GeZiManager.Tcharacter.To(message.Content,0.5);
  
      
      break;
  
    default:
      break;
  }
  
    } 
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  