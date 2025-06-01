// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Sprite, SpriteFrame } from 'cc';
const {ccclass, property} = _decorator;

import realThing from "../../TS/BASE/realThing";
import { gif1 } from "../../TS/BASE/spineANDgif/gif";
import DL from "../../TS/Ditu/des/DL";
import turn from "../../TS/game/time/turn";
import GeZiManager from "../../TS/Manager/GeZiManager";
import MessageCenter from "../../TS/Message/MessageCenter";
import endGame from '../../TS/UIS/endgame';
import { AudioManager } from '../../TS/BASE/music';

@ccclass('FHT2')
export default class FHT2 extends realThing {
turn:number=0
round:number=0
FT:number=0
HP:number=0
@property(SpriteFrame)
B:SpriteFrame | null=null
@property(SpriteFrame)
R:SpriteFrame | null=null
DZD:boolean=false
ghost: Boolean=true;
start() {
           AudioManager.instance.ZJP("ui",10)
        turn.Too.push(this);
        this.round = turn.round+1;
//   if (turn.round%12==2||turn.round%12==7) { turn.round+=1  }
//   this.turn = turn.turn;
        if (   this.turn%2==0) {
        this.node.getComponent(Sprite).spriteFrame=this.R
        }else {  this.node.getComponent(Sprite).spriteFrame=this.B}

        
        this.node.children[1].getComponent(gif1).changeF(this.turn-1,1)
}
BZ() {

this.HP=3
        GeZiManager.Tcharacter=this.getc(this.turn)
           AudioManager.instance.ZJP("hit",23);
      
           if (this.turn%2==1) {
          // endGame.blue-=1
              }else {     //endGame.red-=1

              }
        this.node.children[0].getComponent(gif1).moveToNextFrame(0,11,0);
       this.getc(this.turn).FH(this.ZB,this.turn,this.HP)

        GeZiManager.shanchu(GeZiManager.BDZD,this.ZB)


        this.fadeOutAndDisappear(this.node,1200)

        GeZiManager.shanchu(turn.Too,this)
} 
turnPass() {
////if (!(turn.round%12==2||turn.round%12==7)) {    
        if(turn.round>=this.round&&turn.turn==this.turn&&!GeZiManager.BanMove.includes(this.ZB)){
     //   console.log("fd")
        this.BZ();
        }
}
////}
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import realThing from "../../TS/BASE/realThing";
// import { gif } from "../../TS/BASE/spineANDgif/gif";
// import DL from "../../TS/Ditu/des/DL";
// import turn from "../../TS/game/time/turn";
// import GeZiManager from "../../TS/Manager/GeZiManager";
// import MessageCenter from "../../TS/Message/MessageCenter";
// 
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class FHT extends realThing {
// turn:number=0
// round:number=0
// FT:number=0
// @property(SpriteFrame)
// B:SpriteFrame=null
// @property(SpriteFrame)
// R:SpriteFrame=null
// 
// 
// DZD:boolean=false
// start() {
//     turn.Too.push(this);
//     this.round = turn.round;
//    if (turn.round%12==2||turn.round%12==7) { turn.round+=1  }
//    this.turn = turn.turn;
//     if (   this.turn%2==0) {
//         this.node.getComponent(Sprite).spriteFrame=this.R
//     }else {  this.node.getComponent(Sprite).spriteFrame=this.B}
//   
//   GeZiManager.BDZD.push(this.ZB)
//   this.node.children[1].getComponent(gif).changeF(this.turn-1,1)
// }
// 
// 
// 
// 
// BZ() {
//    
//    
//     GeZiManager.Tcharacter=this.getc(this.turn)  
// 
// this.node.children[0].getComponent(gif).moveToNextFrame(0,11,0);
// GeZiManager.Tcharacter.FH(this.ZB,this.FT)
// 
// GeZiManager.shanchu(GeZiManager.BDZD,this.ZB)
// 
// 
// this.fadeOutAndDisappear(this.node,1200)
// } 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// turnPass() {
//if (!(turn.round%12==2||turn.round%12==7)) {    
// if(turn.round==this.round+1&&turn.turn==this.FT){
// console.log("fd")
// this.BZ();
// }
// }
//}
// }
