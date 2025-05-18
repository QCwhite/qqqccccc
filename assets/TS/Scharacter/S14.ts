// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;


import Character from "../BASE/Character";
import ComponentBase from "../BASE/ComponentBase";
import Cspine from "../BASE/spineANDgif/Cspine";
import GeZiManager from "../Manager/GeZiManager";
import { Message } from "../Message/Message";
import MessageCenter from "../Message/MessageCenter";
import weapon from "../equipment/weapon/weapon";
import state from "../game/time/state";
import turn from "../game/time/turn";
import SXX from "./SXX";

@ccclass('S14')
export default class S14 extends SXX {
    Snumber:string="S14"
    JX:boolean=false;
    cType: string ="human"
    MaxHP:number=7;
    target: Character=null;
    BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
    start () {
//        //this.node.getChildByName("name").getComponent(cc.Label).string="相扑手"   
        // this.target= this.node.getComponent(Character)
        // this.node.getComponent(Character).walk2.push(this);
        // this.node.getComponent(Character).attack3.push(this);
        // this.node.getComponent(Character).M=0;//不会被推动
        // this.target.walk3.push(this)

        // this.node.getComponent(Character).turn3.push(this)
        // this.node.getComponent(Character).GX=function(face: number){

        // this.CMget();
        // MessageCenter.MakeSHMessage("AM",[this.findGe(this.faceTo,1)],1,null,"getOne")
        // if(GeZiManager.trees.includes(this.findGe(this.faceTo,1))||GeZiManager.rock.includes(this.findGe(this.faceTo,1))){return true}else if(GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.M<=0){return true}
        // else{return false}

        // }
//      /*    
        // this.node.getComponent(Character).changeE=function(i: number, pre: cc.Prefab) {

        // switch (i) {
        // case 1:
        // let w = cc.instantiate(pre);

        // if( w.getComponent(weapon).Wtype==0){ this.weapon.destroy(); w.setParent(this.node); this.weapon = w;}

        // break;
        // case 2:

        // break;
        // case 3:
        // let shose1 = cc.instantiate(pre);
        // shose1.setParent(this.node);
        // this.shose.destroy();
        // this.shose = shose1;
        // case 4:
        // let accessory1 = cc.instantiate(pre);
        // accessory1.setParent(this.node);
        // this.accessory.destroy();
        // this.accessory = accessory1;


        // break;
        // default:
        // break;
        // }

        // }
//    */

    }
  Attack3(a:number[]){

        // let an:number[]=[];
        // let ft=this.node.getComponent(Character).faceTo;//面向
        // let all:number[]=GeZiManager.BanMove;//场上所有
        // let flag:number;//判断是否退出
        // for(let i=1;i<=9;i++)//i是距离数
        // {
        // flag=1;//默认一开始是会退出的
        // let tep:number=this.node.getComponent(Character).findGe(ft,i);//获取第i个位置
        // for(let j of all)//遍历场上所有
        // {
        // if(j==tep&&GeZiManager.getxy(j)[1]==GeZiManager.getxy(tep)[1]) {

        // an.push(j);

        // flag=0;//找到了就改为不退出,同时保证连续性
        // }
        // }
        // if(flag==1) break;
        // }
        // if (this.BL[0]>1) {
        // for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.3], this.node.getComponent(Character).Pturn, "move");}
        // }
        // for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.3], this.node.getComponent(Character).Pturn, "move");}
        // GeZiManager.Tcharacters=[] ;
        // MessageCenter.MakeSHMessage("AM",[this.target.ZB],1, this.target.Pturn, "Qi-")
}
    Turn3(){


        // MessageCenter.MakeMessage("BUI",[2],"Ban")





    }
    
    Walk2(w:number){
        // let an:number[]=[];
        // let ft=this.node.getComponent(Character).faceTo;//面向
        // let all:number[]=GeZiManager.BanMove;//场上所有
        // let flag:number;//判断是否退出


        // for(let i=1;i<=9;i++)//i是距离数
        // {
        // flag=1;//默认一开始是会退出的
        // let tep:number=this.node.getComponent(Character).findGe(ft,i);//获取第i个位置
        // for(let j of all)//遍历场上所有
        // {
        // if(j==tep&&GeZiManager.getxy(j)[1]==GeZiManager.getxy(tep)[1]) {

        // an.push(j);

        // flag=0;//找到了就改为不退出,同时保证连续性
        // }
        // }
        // if(flag==1) break;
        // }
        // if (this.BL[0]>1) {
        // for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.8], this.node.getComponent(Character).Pturn, "move");}
        // }
        // for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.8], this.node.getComponent(Character).Pturn, "move");}
        // GeZiManager.Tcharacters=[] ;
        // MessageCenter.MakeSHMessage("AM",[this.target.ZB],1, this.target.Pturn, "Qi-")
       MessageCenter.MakeSHMessage("AM",[this.target.ZB],1, this.target.Pturn, "TN-");}
    
       Walk3(ZB: number): void {
        // if (this.BL[1]>0) {
        // let o=this.target.getNIGno5(ZB);



        // MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),1,this.target.Pturn,"mofa")
        // }





        }
        skill1(): void {
        // GeZiManager.DLLM="S14"



        // state.ST=9;
        // MessageCenter.MakeMessage("UIManager","change",-1);
        // for(let manager of GeZiManager.YuanGong){
        // let a=new Message("",[65],-1)
        // manager.ReceiveMessage(a)
        // }
        // MessageCenter.MakeMessage("AM",turn.turn,"getZB")


        // for(let manager of GeZiManager.YuanGong){
        // if (this.target.getNIGno5(manager.ZB).includes(this.target.ZB)&&[1,2,3].includes(this.target.faceIs(manager.ZB))) {
        // manager.green();
        // }

        // }
          }
        
          
          QDS(n: number): void {

        // MessageCenter.MakeSHMessage("AM",[n],1,this.target.Pturn,"jitu")
        // MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-")
        // MessageCenter.MakeSHMessage("AM",[this.target.ZB],5,this.target.Pturn,"TN-")

        }
    
    remove(){
        // GeZiManager.shanchu(this.node.getComponent(Character).attack3,this)
        // GeZiManager.shanchu(this.node.getComponent(Character).turn3,this)
        // GeZiManager.shanchu(this.node.getComponent(Character).walk2,this)
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



        // if (sumArray(n)>=2) {
        // this.BL[0]+=1
        // }else{  this.BL[0]*=0}//大力相扑2

        // if (n[1]>=2) {
        // this.BL[1]+=1
        // }else{  this.BL[1]*=0 }///地动山摇






        // if (sumArray(n)>=2&&n[1]>=1&&n[3]>=1){
        // this.BL[2]+=1
        // }else{  this.BL[2]*=0}//推板


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
// import { start } from "repl";
// import Character from "../BASE/Character";
// import ComponentBase from "../BASE/ComponentBase";
// import Cspine from "../BASE/spineANDgif/Cspine";
// 
// import GeZiManager from "../Manager/GeZiManager";
// import { Message } from "../Message/Message";
// import MessageCenter from "../Message/MessageCenter";
// import weapon from "../equipment/weapon/weapon";
// import state from "../game/time/state";
// import turn from "../game/time/turn";
// import SXX from "./SXX";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class S14 extends SXX {
//     Snumber:string="S14"
//     JX:boolean=false;
//     cType: string ="human"
//     MaxHP:number=7;
//     target: Character=null;
//     BL:number[]=[0,0,0,0,0,0,0,0,0,0,0]
// 
// 
// 
// 
// 
// 
// 
// 
//     start () {
//         //this.node.getChildByName("name").getComponent(cc.Label).string="相扑手"   
//         this.target= this.node.getComponent(Character)
//         this.node.getComponent(Character).walk2.push(this);
//         this.node.getComponent(Character).attack3.push(this);
//         this.node.getComponent(Character).M=0;//不会被推动
//         this.target.walk3.push(this)
//      
//         this.node.getComponent(Character).turn3.push(this)
//         this.node.getComponent(Character).GX=function(face: number){
//         
//                 this.CMget();
//           MessageCenter.MakeSHMessage("AM",[this.findGe(this.faceTo,1)],1,null,"getOne")
//                if(GeZiManager.trees.includes(this.findGe(this.faceTo,1))||GeZiManager.rock.includes(this.findGe(this.faceTo,1))){return true}else if(GeZiManager.Tcharacter!=null&&GeZiManager.Tcharacter.M<=0){return true}
//                else{return false}
//           
//              }
//       /*    
//            this.node.getComponent(Character).changeE=function(i: number, pre: cc.Prefab) {
// 
//             switch (i) {
//                case 1: 
//                   let w = cc.instantiate(pre);
//                 
//                   if( w.getComponent(weapon).Wtype==0){ this.weapon.destroy(); w.setParent(this.node); this.weapon = w;}
//                  
//                   break;
//                   case 2: 
//                  
//                   break;
//                   case 3: 
//                   let shose1 = cc.instantiate(pre);
//                   shose1.setParent(this.node);
//                   this.shose.destroy();
//                   this.shose = shose1;
//                   case 4: 
//                   let accessory1 = cc.instantiate(pre);
//                  accessory1.setParent(this.node);
//                   this.accessory.destroy();
//                   this.accessory = accessory1;
//                  
//                  
//                   break;
//                default:
//                   break;
//             }
//       
//          }
//     */
//    
//     }
// 
//   Attack3(a:number[]){
// 
//     let an:number[]=[];
//     let ft=this.node.getComponent(Character).faceTo;//面向
//     let all:number[]=GeZiManager.BanMove;//场上所有
//     let flag:number;//判断是否退出
//     for(let i=1;i<=9;i++)//i是距离数
//     {
//         flag=1;//默认一开始是会退出的
//         let tep:number=this.node.getComponent(Character).findGe(ft,i);//获取第i个位置
//         for(let j of all)//遍历场上所有
//         {
//             if(j==tep&&GeZiManager.getxy(j)[1]==GeZiManager.getxy(tep)[1]) {
//              
//                 an.push(j);
//               
//                 flag=0;//找到了就改为不退出,同时保证连续性
//             }
//         }
//         if(flag==1) break;
//     }
//     if (this.BL[0]>1) {
//         for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.3], this.node.getComponent(Character).Pturn, "move");}
//     }
//    for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.3], this.node.getComponent(Character).Pturn, "move");}
//    GeZiManager.Tcharacters=[] ;
//    MessageCenter.MakeSHMessage("AM",[this.target.ZB],1, this.target.Pturn, "Qi-")
// }
// 
//     Turn3(){
// 
// 
// MessageCenter.MakeMessage("BUI",[2],"Ban")
// 
// 
// 
// 
// 
//     }
//     
//     Walk2(w:number){
//         let an:number[]=[];
//         let ft=this.node.getComponent(Character).faceTo;//面向
//         let all:number[]=GeZiManager.BanMove;//场上所有
//         let flag:number;//判断是否退出
// 
//      
//         for(let i=1;i<=9;i++)//i是距离数
//         {
//             flag=1;//默认一开始是会退出的
//             let tep:number=this.node.getComponent(Character).findGe(ft,i);//获取第i个位置
//             for(let j of all)//遍历场上所有
//             {
//                 if(j==tep&&GeZiManager.getxy(j)[1]==GeZiManager.getxy(tep)[1]) {
//                  
//                     an.push(j);
//                   
//                     flag=0;//找到了就改为不退出,同时保证连续性
//                 }
//             }
//             if(flag==1) break;
//         }
//         if (this.BL[0]>1) {
//             for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.8], this.node.getComponent(Character).Pturn, "move");}
//         }
//        for(let i=an.length-1;i>=0;i--){ MessageCenter.MakeSHMessage("AM",[an[i]],[this.node.getComponent(Character).faceTo,0.8], this.node.getComponent(Character).Pturn, "move");}
//        GeZiManager.Tcharacters=[] ;
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1, this.target.Pturn, "Qi-")
//        MessageCenter.MakeSHMessage("AM",[this.target.ZB],1, this.target.Pturn, "TN-");}
//     
// 
// 
// 
//        Walk3(ZB: number): void {
// if (this.BL[1]>0) {
//     let o=this.target.getNIGno5(ZB);
//     
//         
//         
//     MessageCenter.MakeSHMessage("AM",this.target.getNIGno5(this.target.ZB),1,this.target.Pturn,"mofa") 
// }
//      
//          
//           
//            
//          
//         }
// 
// 
// 
// 
//         skill1(): void {
//             GeZiManager.DLLM="S14"
//           
//           
//           
//             state.ST=9;
//             MessageCenter.MakeMessage("UIManager","change",-1);
//             for(let manager of GeZiManager.YuanGong){
//           let a=new Message("",[65],-1)
//                 manager.ReceiveMessage(a)    
//           }
//           MessageCenter.MakeMessage("AM",turn.turn,"getZB")
//           
//           
//           for(let manager of GeZiManager.YuanGong){
//       if (this.target.getNIGno5(manager.ZB).includes(this.target.ZB)&&[1,2,3].includes(this.target.faceIs(manager.ZB))) {
//         manager.green();
//       }
//           
//           }
//           }
//         
//           
//           QDS(n: number): void {
//             
//             MessageCenter.MakeSHMessage("AM",[n],1,this.target.Pturn,"jitu")
//             MessageCenter.MakeSHMessage("AM",[this.target.ZB],2,this.target.Pturn,"Qi-")
//             MessageCenter.MakeSHMessage("AM",[this.target.ZB],5,this.target.Pturn,"TN-")
// 
//         }
// 
// 
// 
// 
//     
// 
// 
//     remove(){
//         GeZiManager.shanchu(this.node.getComponent(Character).attack3,this)  
//         GeZiManager.shanchu(this.node.getComponent(Character).turn3,this)
//         GeZiManager.shanchu(this.node.getComponent(Character).walk2,this)
//     }
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
//         if (sumArray(n)>=2) {
//           this.BL[0]+=1
//         }else{  this.BL[0]*=0}//大力相扑2
//       
//         if (n[1]>=2) {
//           this.BL[1]+=1
//         }else{  this.BL[1]*=0 }///地动山摇
//         
//        
//         
//        
//      
//      
//         if (sumArray(n)>=2&&n[1]>=1&&n[3]>=1){
//             this.BL[2]+=1
//           }else{  this.BL[2]*=0}//推板
//         
//       
//       }
//      
// }
