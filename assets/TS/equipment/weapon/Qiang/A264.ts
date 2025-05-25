// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import state from "../../../game/time/state";
import GeZiManager from "../../../Manager/GeZiManager";
import { Message } from "../../../Message/Message";
import MessageCenter from "../../../Message/MessageCenter";
import Qiang from "./Qiang";
import { AudioManager } from '../../../BASE/music';
// //加特林

@ccclass('A264')
export default class A264 extends Qiang {
        BT: boolean = false;//是否耗费子弹
        BTS: number = 1;//子弹数
        SH =3;//伤害
        PJ: number=1;
        TheNumber: string = "A264";//编号，用于识别武器
        level: number=6;
    Tag:boolean=false;//触发标志
    T_tn:number=1;//装弹的消耗的tn
    
    Aface: number[]=[1,2,3];
    /*
    start(){
        this.node.getComponent(Character).t1.push(this);
        this.node.getComponent(Character).attack3.push(this);
    
    }
    T1(): void {
        this.Tag=false;
        this.T_tn=1;
    }
    
    //装弹
    ZD(){
        if(this.node.getComponent(Character).TN>=this.T_tn){
            MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.T_tn,this.node.getComponent(Character).Pturn,"TN-");
            this.T_tn++;//消耗的TN增加
            this.BTS++;
        }
    }
    
    Attack3(): void {
        //子弹不为0重复调用attack2；
        while(this.BTS>0){
            this.attack2();
        }
    
    }
        QD(an:number[]){
      
            console.log(this.node.getComponent(Character).Pturn)
            if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
                MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli");
              if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
            //利用Tag只触发一次  Tag在T1重置为1
               if(this.Tag==false){
                MessageCenter.MakeSHMessage("AM",[GeZiManager.PCP.ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
                GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
                GeZiManager.TNC[3]=4
                GeZiManager.Bu.push(2);
                this.Tag=true;
            }
        }
          */
    
    
        attack() {
            console.log(this.node.getComponent(Character))
          
            if(this.node.getComponent(Character).attack1.length!=null){for(let a of this.node.getComponent(Character).attack1){a.Attack1()}}
            setTimeout(() => {
             let AF = [].concat(this.Aface);
             let i = 0;
             switch (this.node.getComponent(Character).faceTo) {
               case 6: i = 1;
                 break;
               case 8: i = 2;
                 break;
               case 4: i = 3;
                 break;
             }
         
         
             for (let n = 1; n <= i; n++) {
               this.turn6(AF);
             }
             let an: number[] = [];
             for (let mannger of AF) {
         
         
         
               an.push(this.node.getComponent(Character).findGe(mannger, 1));
         
             }
            
             this.QD(an);
            }, this.node.getComponent(Character).delay); 
            this.node.getComponent(Character).delay=0
    
            
           }
     
           
    QD(an: number[]): void {
      
      
        let g=[]
              for(let c of [GeZiManager.P1,GeZiManager.P2,GeZiManager.P3,GeZiManager.P4,GeZiManager.P5,GeZiManager.P6]){
                      if (c.color==this.target.color) {
                            g.push (c.ZB) 
                      }
              }
              let j =GeZiManager.BanMove.filter(item => ( !GeZiManager.BDZD.includes(item)))
                 
      j =j.filter(item => ( !g.includes(item)))
      
      let A1=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[0])])[0],j);
        let A2=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[1])])[0],j);
        let A3=GeZiManager.line(this.node.getComponent(Character).ZB,1,this.turn8([this.node.getComponent(Character).faceIs(an[2])])[0],j);
    
    console.log(this.mArr1Arr2(A1,A2,A3))
        if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
        MessageCenter.MakeSHMessage("AM", this.mArr1Arr2(A1,A2,A3), this.SH,this.node.getComponent(Character).Pturn, "wuli")
        AudioManager.instance.ZJP("magic",15)
          MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")
        if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}
       
      
          
        
    }
        }
      