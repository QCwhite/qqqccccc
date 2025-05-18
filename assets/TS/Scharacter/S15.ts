// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../BASE/Character";
import SXX from "./SXX";

@ccclass('S15')
export default class S15 extends SXX {
    Snumber:string="S15"
    JX:boolean=false;
    cType: string ="human"
    Sex: string="women";
   Sge:number[]=[];
target:Character=null;
    start () {
        // this.node.getChildByName("name").getComponent(cc.Label).string="医生"
        // this.target=this.node.getComponent(Character)
    }
   
   
   
   
   
    getJNF(n: number[]): void {
        // function sumArray(numbers: number[]): number {
        // return numbers.reduce((sum, current) => sum + current, 0);
        // }


        // for (let index = 0; index < n[4]+n[5]; index++) {
        // for( let a of n){if (index<4) {
        // a++
        // }}
        // }



        // if (n[2]>=1||n[1]>=1) {
        // this.BL[0]+=1
        // }else{  this.BL[0]*=0}//治疗

        // if (n[0]>=1||n[3]>=1) {
        // this.BL[1]+=1
        // }else{  this.BL[1]*=0 }///狂暴



        // if (sumArray(n)>=3&&n[2]>=2){
        // this.BL[2]+=1
        // }else{  this.BL[2]*=0}//麻醉


        // if (sumArray(n)>=3&&n[2]>=2){
        // this.BL[3]+=1
        // }else{  this.BL[3]*=0}//医道济世


      }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
// 
// import Character from "../BASE/Character";
// import SXX from "./SXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class S15 extends SXX {
// 
//     Snumber:string="S15"
//     JX:boolean=false;
//     cType: string ="human"
//     Sex: string="women";
//    Sge:number[]=[];
// target:Character=null;
//     start () {
//         this.node.getChildByName("name").getComponent(cc.Label).string="医生"   
//         this.target=this.node.getComponent(Character)
//     }
// 
//    
//    
//    
//    
// 
// 
// 
// 
// 
//    
//     getJNF(n: number[]): void {
//         function sumArray(numbers: number[]): number {
//           return numbers.reduce((sum, current) => sum + current, 0);
//       }
//        
//        
//       for (let index = 0; index < n[4]+n[5]; index++) {
//         for( let a of n){if (index<4) {
//            a++
//         }}
//       }
//        
//        
//        
//         if (n[2]>=1||n[1]>=1) {
//           this.BL[0]+=1
//         }else{  this.BL[0]*=0}//治疗
//       
//         if (n[0]>=1||n[3]>=1) {
//           this.BL[1]+=1
//         }else{  this.BL[1]*=0 }///狂暴
//         
//        
//         
//         if (sumArray(n)>=3&&n[2]>=2){
//             this.BL[2]+=1
//           }else{  this.BL[2]*=0}//麻醉
//      
//      
//         if (sumArray(n)>=3&&n[2]>=2){
//             this.BL[3]+=1
//           }else{  this.BL[3]*=0}//医道济世
//         
//       
//       }
// }
