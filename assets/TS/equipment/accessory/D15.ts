// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import Cspine from "../../BASE/spineANDgif/Cspine";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import Shops from "../../UIS/shop/shops";
import DXX from "./DXX";
import sideUI from '../../UIS/sideUI';

@ccclass('D15')
export default class D15 extends DXX {
  
        target:Character=null;
        TheNumber:string = 'D15';
        Cname:string="冒险者"
    k:number=0
    
    start () {
        this.target=this.node.getComponent(Character)
        this.node.getComponent(Character).t3.push(this);
            this.changeEP()
    }
    T3(){
    
    
        if(this.target.LST==10){
    let a:any[]=GeZiManager.BanMove;
    //利用line返回装备角色的背后第一个对象
    if( this.node.getComponent(Character).faceTo==2){
       let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,2,a);
       this.BJ(as[0]);//console.log(as[0])
    }
    else if(this.node.getComponent(Character).faceTo==8){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,8,a);
        this.BJ(as[0]);//console.log(as[0])
    }
    else if(this.node.getComponent(Character).faceTo==4){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,4,a);
        this.BJ(as[0]);//console.log(as[0])
    }
    
    else if(this.node.getComponent(Character).faceTo==6){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,6,a);
        this.BJ(as[0]);//console.log(as[0])
    }
    
    else if(this.node.getComponent(Character).faceTo==1){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,1,a);
        this.BJ(as[0]);
    }
    
    else if(this.node.getComponent(Character).faceTo==9){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,9,a);
        this.BJ(as[0]);
    }
    else if(this.node.getComponent(Character).faceTo==3){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,3,a);
        this.BJ(as[0]);
    }
    
    else if(this.node.getComponent(Character).faceTo==7){
        let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,7,a);
        this.BJ(as[0]);
    }
    }
    
    
    }
    
    
    BJ(a:number){
    //line找到的坐标与所有角色的坐标与匹配 同时判断性别 faceTo相同说明找到的角色在装备角色后面 
    
    GeZiManager.Tcharacter=null
    MessageCenter.MakeSHMessage("AM", [a], 1,this.node.getComponent(Character).Pturn, "getOneC");
    if (GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.faceTo==this.target.turn8([this.target.faceTo])[0]) {
    MessageCenter.MakeSHMessage("AM", [a], 1,this.node.getComponent(Character).Pturn, "HP-");
    }
    
    
    }
    
    remove(): void {
    GeZiManager.shanchu(this.target.t3,this);
      let a=this.node.getComponent(Cspine)
            a.changeSlot(a.spine2,"KD1",null,13)
            a.changeSlot(a.spine4,"KD1",null,13)
           a.changeSlot(a.spine6,"KD1",null,13)
    
    
        
    }
    
    
    changeEP(){
    let a=this.node.getComponent(Cspine)
    let c=this.target.Pturn
      a.changeSlot(a.spine2,"KD1",this.node.parent.getComponent(Shops).find(2,this.TheNumber,"KD1",c),0)
      a.changeSlot(a.spine4,"KD1",this.node.parent.getComponent(Shops).find(4,this.TheNumber,"KD1",c),2)
     a.changeSlot(a.spine6,"KD1",this.node.parent.getComponent(Shops).find(6,this.TheNumber,"KD1",c),4)
      
     }
    }