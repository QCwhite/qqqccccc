// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, find } from 'cc';
const { ccclass, property } = _decorator;


import Character from "../../BASE/Character";
import equipment from "../../BASE/equipment";
import realThing from "../../BASE/realThing";
import GeZiManager from "../../Manager/GeZiManager";

import MessageCenter from "../../Message/MessageCenter";
import { SHMessage } from "../../Message/SHMessage";
import { AudioManager } from '../../BASE/music';
import MTX from 'db://assets/pictures/TX/MTX/MTX';


@ccclass('Weapon')
export default class weapon extends equipment {
  ZD() {
      
  }
  RN:number=0
 RL:number=0//攻击形态
BT:boolean=false
BTS:number=-1
Atype = "wuli"
Aface: number[] = [2];//攻击面（只适用于近战角色）
Pface: number[] = [0];//防御面，默认朝下
Ptype: String[] = [];//防御类型
Pnumber: number = 0;
PJ: number = 0;//破甲
CJ:number=0//穿甲
SH = 1;//伤害
Wtype: number=0;
level: number;//武器等级 
TheNumber: string = 'AXX';//编号，用于识别武器
TNJ=0;
target:Character=null
DT:boolean=false//是否可以选择攻击位置
Ytype:number=0
constructor(){

super();

}

levelup(n:string){




}
turn8(arr: number[]): number[] {
  const transformationMap = {
    1: 9,
    2: 8,
    3: 7,
    4: 6,
    5: 5,
    6: 4,
    7: 3,
    8: 2,
    9: 1
  };
  for (let i = 0; i < arr.length; i++) {
    arr[i] = transformationMap[arr[i]] || arr[i];
  }
  return arr;
}//通用校对的基本方法，不用理会
turn6(arr: number[]): number[] {
  const transformationMap = {
    1: 3,
    2: 6,
    3: 9,
    4: 2,
    5: 5,
    6: 8,
    7: 1,
    8: 4,
    9: 7
  };
  for (let i = 0; i < arr.length; i++) {
    arr[i] = transformationMap[arr[i]] || arr[i];
  }
  return arr;
}//通用校对的基本方法，不用理会


QD(an:number[]){

//console.log(this.node.getComponent(Character).Pturn)
if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).attack2){a.Attack2(an);}}
  MessageCenter.MakeSHMessage("AM", an, this.SH,this.node.getComponent(Character).Pturn, "wuli")
  MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(3)+this.TNJ,this.node.getComponent(Character).Pturn,"TN-")


  AudioManager.instance.ZJP("attack",this.Ytype,{volume:0.8})
     this.target.node.getChildByName("MTX").getComponent(MTX).playFrameAnimation1("AT0_"+this.target.faceTo);
         



  if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).attack3){a.Attack3(an);}}


GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
GeZiManager.TNC[3]=4
GeZiManager.Bu.push(2);



GeZiManager.PCP.ST()

}

start() {

this.target=this.node.getComponent(Character)
console.log(this.target)
this.changeEP()
}

PD(PJ: number) {

}//盾类武器的被破盾机制


remove() {

//this.node.removeComponent(this)
//this.destroy()
}


ac(k:number) {



}//特殊的被动效果

FJ() { }//受到攻击后的反击效果

GF(k:number,from:number){


}

getTNC(n:number){


let k= GeZiManager.PCP.TNJJ
let l =GeZiManager.TNC
if(k[n]+l[n]>=0){return k[n]+l[n]}else {return 0}
}

attack() {
 // console.log(this.node.getComponent(Character))

 
  setTimeout(() => {
    if(this.node.getComponent(Character).attack1.length!=null){for(let a of this.node.getComponent(Character).attack1){a.Attack1()}}
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
 
 
}//攻击，每个武器不同，这个是空手的攻击的攻击方法，角色攻击调用武器的攻击方法

