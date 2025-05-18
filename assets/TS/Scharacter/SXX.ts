// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import ComponentBase from "../BASE/ComponentBase";
import AnimalManager from "../Manager/AnimalManager";
import GeZiManager from "../Manager/GeZiManager";
import NWshopM from "../UIS/shop/NWshopM";
import { SpriteFrame } from 'cc';

@ccclass('SXX')
export default class SXX extends ComponentBase {
 
    @property(SpriteFrame )
       Toux:SpriteFrame=null
         @property(SpriteFrame )
            skiil1:SpriteFrame=null
            @property(SpriteFrame )
            skiil2:SpriteFrame=null
            @property(SpriteFrame )
            skiil3:SpriteFrame=null
            @property(SpriteFrame )
            skiil4:SpriteFrame=null
            @property(SpriteFrame )
            skiil5:SpriteFrame=null
            @property(SpriteFrame )
            skiil6:SpriteFrame=null
               @property(Number)
               JNs:number=0
    MaxHP: number=5;
    Sex:string='man'
    ZZ:string[]=["human"]
JX1:string[]=[]
JX2:string[]=[]
JX3:string[]=[]
BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
yc:number[]=[200,200,1600,200]
SJNC:string[][]=[["FU0","+","FU1","FU1","FU1"],["FU1","+","FU2","/","FU1","FU1"],["FU0","+","FU2"]]
   Fsn:number=0;
   target:Character=null
    skill1() {

    }
    skill2() {

    }
    skill3() {

    }
    skill4() {

    }
Snumber="SXX"
    JX:boolean=false;
    cType: string ="human"
    remove(){



}
start(): void {
        this.target=this.node.getComponent(Character)
}
/////////////////////////////////////
QDS(n:number){}
getc(nu:number){


        switch (nu) {
        case -1:

        case 1:return GeZiManager.P1

        break;
        case 2:return GeZiManager.P2

        break;
        case 3:return GeZiManager.P3

        break;
        case 4:return GeZiManager.P4

        break;
        case 5:return GeZiManager.P5

        break;
        case 6:return GeZiManager.P6

        break;

        default:
        break;
        }
    } 
    getTO(n:number){}
choseS(n:string){



}
NWNA(e:any[],n:number):string[]{


        let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi","qi","qi","qi","qi"],3)
console.log(e)

        return e



}
getFar(dis:number,ZB){
        let x;
        let y;
        let b=[]
        if(ZB%8==0){x=8}else {x=ZB%8;}
        y=Math.ceil(ZB/8);
        for (let index = 1; index < 65; index++) {

        let x1;
        let y2;

        if( index%8==0){x1=8}else {x1=index%8;}
        y2=Math.ceil(index/8);
        if(Math.abs(x-x1)+Math.abs(y-y2)<=dis){b.push(index)}

        }
        console.log(b)
        return b
    }
    getTeamZB(n:number,ZB:number){
        for(let a of this.node.parent.getComponent(AnimalManager).YuanGong){

        if(a.ZB==ZB){


        if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
        }




        }
    }
        
    getJNF(n:number[]){




    }



    getFUn(){
let c=0
for (let fu of this.target.FU) {

    c++

    if (fu==10||fu==-10) {
      c+=3  
    }
}

return c


    }


    getSkill(n:number){
switch (n) {
    case 0:return this.Toux
        
        break;
 case 1:return this.skiil1
        
        break;
         case 2:return this.skiil2
        
        break;
         case 3:return this.skiil3
        
        break;
         case 4:return this.skiil4
        
        break;
         case 5:return this.skiil5
        
        break;
         case 6:return this.skiil6
        
        break;
    default:
        break;
}

    }
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
// import Character from "../BASE/Character";
// import ComponentBase from "../BASE/ComponentBase";
// import AnimalManager from "../Manager/AnimalManager";
// import GeZiManager from "../Manager/GeZiManager";
// import NWshopM from "../UIS/shop/NWshopM";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class SXX extends ComponentBase {
//   
//     MaxHP: number=5;
//     Sex:string='man'
//     ZZ:string[]=["human"]
// JX1:string[]=[]
// JX2:string[]=[]
// JX3:string[]=[]
// BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
// yc:number[]=[200,200,1600,200]
// SJNC:string[][]=[["FU0","+","FU1","FU1","FU1"],["FU1","+","FU2","/","FU1","FU1"],["FU0","+","FU2"]]
//    Fsn:number=0;
//    target:Character=null
//     skill1() {
//      
//     }
//     skill2() {
//      
//     }
//     skill3() {
//      
//     }
//     skill4() {
//      
//     }
// Snumber="SXX"
//     JX:boolean=false;
//     cType: string ="human"
// 
//     remove(){
//        
// 
// 
// }
// start(): void {
//     this.target=this.node.getComponent(Character)
// }
// 
// ///////////////////////////////////
// 
// QDS(n:number){}
// 
// 
// getc(nu:number){
// 
// 
//     switch (nu) {
//       case -1:
//       
//        case 1:return GeZiManager.P1
//           
//           break;
//           case 2:return GeZiManager.P2
//           
//           break;
//           case 3:return GeZiManager.P3
//           
//           break;
//           case 4:return GeZiManager.P4
//           
//           break;
//           case 5:return GeZiManager.P5
//           
//           break;
//           case 6:return GeZiManager.P6
//           
//           break;
//     
//        default:
//           break;
//     }
//     } 
// 
// 
//     getTO(n:number){}
// 
// 
// choseS(n:string){
// 
// 
// 
// }
// NWNA(e:any[],n:number):string[]{
// 
// 
// let c =this.getRAA(["FU0","FU1","FU2","FU3","TNS","TNS","TNS","HP","HP","qi","qi","qi","qi","qi","qi"],3)    
// 
// 
// return e
// 
// 
// 
// }
// 
// 
// 
// 
// 
// getFar(dis:number,ZB){
//     let x;
//     let y;
//      let b=[]  
//             if(ZB%8==0){x=8}else {x=ZB%8;}
//         y=Math.ceil(ZB/8);
// for (let index = 1; index < 65; index++) {
//   
//    let x1;
//    let y2;
//        
//            if( index%8==0){x1=8}else {x1=index%8;}
//        y2=Math.ceil(index/8);
//        if(Math.abs(x-x1)+Math.abs(y-y2)<=dis){b.push(index)}
//      
// }
//     console.log(b)
//     return b
//     }
// 
//     getTeamZB(n:number,ZB:number){
//         for(let a of this.node.parent.getComponent(AnimalManager).YuanGong){
//         
//             if(a.ZB==ZB){
//             
//         
//             if(a.Pturn!=0&&(a.Pturn%2==n%2)){return true}else{return false}
//     }
//         
//         
//        
//         
//         }
//     }
//         
// 
// 
// 
//     getJNF(n:number[]){
// 
// 
// 
// 
//     }
//         }
