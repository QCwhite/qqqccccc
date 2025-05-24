// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;


import KHD2 from "../Message/KHD2";
import MessageCenter from "../Message/MessageCenter";
import turn from "../game/time/turn";
import GeZiManager from "./GeZiManager";
import ManagerBase from "./ManagerBase";

@ccclass('QinManager')
export default class QinManager extends ManagerBase {
        QINlun:number=0;
        last:number=-1;
        
        start(): void {
            turn.Roo.push(this);
        }
        
        roundPass(): void {
         if (KHD2.PT.includes(6)||MessageCenter.Text) {
          if(turn.round%12==2||turn.round%12==5||turn.round%12==9){
            if (turn.round<=2) {
                this.generateRandomPosition(1) 
                this.generateRandomPosition(2) 
                this.generateRandomPosition(3) 
                this.generateRandomPosition(4) 
            }
            else {
        
        if (this.last==-1) {
            this.generateRandomPosition(1) ;
            this.generateRandomPosition(4) ;
           
        }else{ this.generateRandomPosition(2) ;
            this.generateRandomPosition(3) ;}
        
        
        
        
        this.last*=-1
            }
           }
        /*if(turn.round>6&&turn.round%3==0){
        
         if(this.last==1){this.generateRandomPosition([2,4][Math.floor(Math.random()*2)]) }else{this.generateRandomPosition([1,3][Math.floor(Math.random()*2)]) }
        }
        */
            
           
        }
        }
        
        generateRandomPosition(n:number) {
            let a
            let j
          
        switch(n){
        
        case 1:a=[19,20,27,28];j=19
        break;
        case 2:a=[21,22,29,30];j=22
        break;
        case 3:a=[35,36,44,43];j=43
        break;
        case 4:a=[37,38,45,46];j=46
        break;
        
        default:
          break;
        }
        let c=[]
        
        for(let k of a){if(GeZiManager.BanMove.includes(k)||GeZiManager.AllObstacles.includes(k)||GeZiManager.qins.includes(k)){c.push(k)}}
         if (c.length!=0) {
            for(let l of c){GeZiManager.shanchu(a,l)}
         }
        
        if(a.length==0){if(GeZiManager.BanMove.includes(j)||GeZiManager.AllObstacles.includes(j)||GeZiManager.qins.includes(j)){}else{this.makeQin(j)}}else{this.makeQin(a[Math.floor(Math.random()*a.length)])}
       // console.log(a)
        }
        
        
        makeQin(n:number){
            MessageCenter.MakeGMessage("AM", [n,Math.floor(Math.random()*4)],10,1,"FTP");
          
      //  console.log([n,Math.floor(Math.random()*4)])
        
        
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }
        