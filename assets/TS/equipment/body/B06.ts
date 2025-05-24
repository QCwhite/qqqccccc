// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZi from "../../Ditu/Gezi/GeZi";
import GeZiManager from "../../Manager/GeZiManager";
import MessageCenter from "../../Message/MessageCenter";
import SXX from "../../Scharacter/SXX";
import BXX from "./BXX";

@ccclass('B06')
export default class B06 extends BXX {
        TheNumber: string="B06";
        Cname:string="石榴裙"
    AA=0;
        target: Character=null;
    
    
        start () {
            this.node.getComponent(Character).turn1.push(this);
            this.node.getComponent(Character).walk3.push(this);
            this.target=this.node.getComponent(Character);
            this.target.MaxT+=1
            this.changeEP()
        }
    T1(){
        let a:any[]=GeZiManager.BanMove;
        //利用line返回装备角色的背后第一个对象
        if( this.node.getComponent(Character).faceTo==2){
           let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,8,a);
           this.BJ(as[0]);console.log(as[0])
        }
        else if(this.node.getComponent(Character).faceTo==8){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,2,a);
            this.BJ(as[0]);console.log(as[0])
        }
        else if(this.node.getComponent(Character).faceTo==4){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,6,a);
            this.BJ(as[0]);console.log(as[0])
        }
    
        else if(this.node.getComponent(Character).faceTo==6){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,4,a);
            this.BJ(as[0]);console.log(as[0])
        }
    
        else if(this.node.getComponent(Character).faceTo==1){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,9,a);
            this.BJ(as[0]);
        }
    
        else if(this.node.getComponent(Character).faceTo==9){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,1,a);
            this.BJ(as[0]);
        }
        else if(this.node.getComponent(Character).faceTo==3){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,7,a);
            this.BJ(as[0]);
        }
    
        else if(this.node.getComponent(Character).faceTo==7){
            let as= GeZiManager.line(this.node.getComponent(Character).ZB,1,3,a);
            this.BJ(as[0]);
        }
    
    
    
    }
    
    
    BJ(a:number){
        //line找到的坐标与所有角色的坐标与匹配 同时判断性别 faceTo相同说明找到的角色在装备角色后面 
       
       GeZiManager.Tcharacter=null
        MessageCenter.MakeSHMessage("AM", [a], 1,this.node.getComponent(Character).Pturn, "getOne");
       if (GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.node.getComponent(SXX).Sex=="man") {
        MessageCenter.MakeSHMessage("AM", [a], 1,this.node.getComponent(Character).Pturn, "HP-");
       }
       
      
    }
    Turn1(N?: number): void {
       this.AA++;
       this.OO()
    }
    Walk3(ZB: number): void {
        this.AA++ ;
    this.OO()
    }
    
    OO(){
    
        if (this.AA==6) {
          this.AA=0
          MessageCenter.MakeSHMessage("AM", [this.target.ZB], 1,this.node.getComponent(Character).Pturn, "HP+");
          MessageCenter.MakeSHMessage("AM", [this.target.ZB], 1,this.node.getComponent(Character).Pturn, "Qi+");
    
        }
    }
    remove(): void {
        GeZiManager.shanchu(this.node.getComponent(Character).turn1,this);
        GeZiManager.shanchu(this.node.getComponent(Character).walk3,this);
        this.target.MaxT-=1
    }
    }