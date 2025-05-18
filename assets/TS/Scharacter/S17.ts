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
import DESManager from "../Ditu/des/DESManager";
import GeZiManager from "../Manager/GeZiManager";
import MessageCenter from "../Message/MessageCenter";
import weapon from "../equipment/weapon/weapon";

@ccclass('S17')
export default class S17 extends ComponentBase {
    isondl:boolean;//是否在地雷上
    previouszb:number;
    onwhere:number;//在哪个地雷上
  Attack2(an:number[]){


        // MessageCenter.MakeSHMessage("AM",an,1, this.node.getComponent(Character).Pturn, "getOne");
        // if(GeZiManager.Tcharacter!=null){
        // if(GeZiManager.Tcharacter[0].weapon.getComponent(weapon).TheNumber=='A000'){
        // if(GeZiManager.Tcharacter!=null) {MessageCenter.MakeSHMessage("AM",  [GeZiManager.Tcharacter[0].ZB],1, this.node.getComponent(Character).Pturn, "HP-");}}

            }
       
    Shop1(){
        // GeZiManager.free-=1;

    }
    Shop3(){
        // GeZiManager.free+=1;
    }
    
Move2(ZB: number){
        // let zb=this.node.getComponent(Character).ZB;
        // let dl:number[][]=GeZiManager.DL;//地雷坐标
        // let i=0;//记录踩的地雷
//    //从地雷走出去的话,有两种情况,走到地雷上和非地雷上

        // if(this.isondl||zb!=ZB){this.node.getComponent(Character).ZB=170;GeZiManager.DLBZ(170,170);  //DESManager.Des(zb);
        // this.node.getComponent(Character).ZB=zb}

        // for(let a of dl)
        // {
        // if(a[0]==ZB){
        // a[0]=170
        // this.isondl=true;
        // }

        // }
}
    ldbd(){
        // let zb=this.node.getComponent(Character).ZB;//自己的坐标
        // let dl:number[][]=GeZiManager.DL;//地雷坐标
        // let i=0;//记录踩的地雷
//        //从地雷走出去的话,有两种情况,走到地雷上和非地雷上
        // for(let a of dl)
        // {
        // if(a[0]==zb){
//            //如果走到地雷上,先炸再更新,下面的if是不会判断的,因为this.perviouszb=zb;
        // if(this.isondl==true) MessageCenter.MakeSHMessage("AM",[zb],dl[this.onwhere][1],null,"wuli");//地雷走到地雷上
        // this.previouszb=zb;//先更新先前位置,防止误判,刚走上去的情况
        // this.isondl=true;//在地雷上
        // this.onwhere=i;//给onwhere赋地雷数组的位置
        // }
        // i++;
        // }
//        //如果从地雷上面走出来到平路上,那么zb肯定和perviouszb不一样,再炸
        // if(this.isondl==true&&zb!=this.previouszb)
        // {
        // this.isondl=false;//走出来了
        // let tmp:number[]=[];
        // tmp.push(zb);
        // MessageCenter.MakeSHMessage("AM",tmp,dl[this.onwhere][1],null,"wuli")
        // }
    }
    start () {
        // this.node.getChildByName("name").getComponent(cc.Label).string="雇佣兵"
        // this.previouszb=this.node.getComponent(Character).ZB;
        // this.isondl=false;
        // this.onwhere=-1;
        // this.node.getComponent(Character).attack2.push(this);
        // this.node.getComponent(Character).shop1.push(this);
        // this.node.getComponent(Character).move2.push(this);
        // this.node.getComponent(Character).shop3.push(this);
    }
    remove(){

        // GeZiManager.shanchu(this.node.getComponent(Character).attack2,this)
        // GeZiManager.shanchu(this.node.getComponent(Character).shop1,this)
        // GeZiManager.shanchu(this.node.getComponent(Character).shop2,this)
        // GeZiManager.shanchu(this.node.getComponent(Character).move2,this)
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
// import ComponentBase from "../BASE/ComponentBase";
// import DESManager from "../Ditu/des/DESManager";
// import GeZiManager from "../Manager/GeZiManager";
// import MessageCenter from "../Message/MessageCenter";
// 
// import weapon from "../equipment/weapon/weapon";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class S17 extends ComponentBase {
// 
//     isondl:boolean;//是否在地雷上
//     previouszb:number;
//     onwhere:number;//在哪个地雷上
//   Attack2(an:number[]){
//   
//        
//         MessageCenter.MakeSHMessage("AM",an,1, this.node.getComponent(Character).Pturn, "getOne");
//      if(GeZiManager.Tcharacter!=null){
//         if(GeZiManager.Tcharacter[0].weapon.getComponent(weapon).TheNumber=='A000'){
//       if(GeZiManager.Tcharacter!=null) {MessageCenter.MakeSHMessage("AM",  [GeZiManager.Tcharacter[0].ZB],1, this.node.getComponent(Character).Pturn, "HP-");}}
//     
//             }}
//        
// 
// 
//     Shop1(){
//         GeZiManager.free-=1;
//         
//     }
//     Shop3(){
//         GeZiManager.free+=1; 
//     }
// 
// 
// 
// 
// 
// 
// 
//     
// Move2(ZB: number){
//     let zb=this.node.getComponent(Character).ZB;
//     let dl:number[][]=GeZiManager.DL;//地雷坐标
//     let i=0;//记录踩的地雷
//     //从地雷走出去的话,有两种情况,走到地雷上和非地雷上
//   
//   if(this.isondl||zb!=ZB){this.node.getComponent(Character).ZB=170;GeZiManager.DLBZ(170,170);  //DESManager.Des(zb);
//     this.node.getComponent(Character).ZB=zb}
//   
//     for(let a of dl)
//     {
//         if(a[0]==ZB){
//             a[0]=170
//             this.isondl=true;
//         }
//        
//     }
// }
// 
// 
// 
// 
// 
// 
// 
// 
//     ldbd(){
//         let zb=this.node.getComponent(Character).ZB;//自己的坐标
//         let dl:number[][]=GeZiManager.DL;//地雷坐标
//         let i=0;//记录踩的地雷
//         //从地雷走出去的话,有两种情况,走到地雷上和非地雷上
//         for(let a of dl)
//         {
//             if(a[0]==zb){
//             //如果走到地雷上,先炸再更新,下面的if是不会判断的,因为this.perviouszb=zb;
//                 if(this.isondl==true) MessageCenter.MakeSHMessage("AM",[zb],dl[this.onwhere][1],null,"wuli");//地雷走到地雷上
//                 this.previouszb=zb;//先更新先前位置,防止误判,刚走上去的情况
//                 this.isondl=true;//在地雷上
//                 this.onwhere=i;//给onwhere赋地雷数组的位置
//             }
//             i++;
//         }
//         //如果从地雷上面走出来到平路上,那么zb肯定和perviouszb不一样,再炸
//         if(this.isondl==true&&zb!=this.previouszb)
//         {
//             this.isondl=false;//走出来了
//             let tmp:number[]=[];
//             tmp.push(zb);
//             MessageCenter.MakeSHMessage("AM",tmp,dl[this.onwhere][1],null,"wuli")
//         }
//     }
// 
//     start () {
//         this.node.getChildByName("name").getComponent(cc.Label).string="雇佣兵"   
//         this.previouszb=this.node.getComponent(Character).ZB;
//        this.isondl=false;
//        this.onwhere=-1;
//        this.node.getComponent(Character).attack2.push(this);
//        this.node.getComponent(Character).shop1.push(this);
// this.node.getComponent(Character).move2.push(this);
// this.node.getComponent(Character).shop3.push(this);
//     }
// 
// 
// 
//     remove(){
//         
//         GeZiManager.shanchu(this.node.getComponent(Character).attack2,this)
//         GeZiManager.shanchu(this.node.getComponent(Character).shop1,this)
//         GeZiManager.shanchu(this.node.getComponent(Character).shop2,this)
//         GeZiManager.shanchu(this.node.getComponent(Character).move2,this)
//     }
// }
