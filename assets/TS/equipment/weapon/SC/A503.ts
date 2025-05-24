// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../BASE/Character";
import state from "../../../game/time/state";
import GeZiManager from "../../../Manager/GeZiManager";
import { Message } from "../../../Message/Message";
import MessageCenter from "../../../Message/MessageCenter";
import SXX from "../../../Scharacter/SXX";
import weapon from "../weapon";

@ccclass('A503')
export default class A503 extends weapon {
    TheNumber:string = 'A503';
Wtype: number=4;
  AL:number=0;
  BL:number=0;
  DT:boolean=true
  TNJ: number=0;
  SC:SXX=null
levelup(n: string): void {
        switch (n[4]) {
        case "A":this.levelupA()

        break;

        default:this.levelupB()
        break;
        }
}
  levelupA(){ 
        if (this.AL<3) {
        this.AL++
        }

}





start(): void {
        this.target=this.node.getComponent(Character)
        this.target.magic1.push(this)
                this.target.magic2.push(this)
        this.SC=this.target.node.getComponent(SXX)
}
      levelupB(){ 
        if(this.BL<3){this.BL+=1;
      
     }}



     
          Magic1(){
        GeZiManager.JL+=this.AL

        GeZiManager.free-=this.BL

            }


                 Magic2(){
    

        GeZiManager.free-=this.BL
console.log(GeZiManager.free)
            }
          
          remove(){
        GeZiManager.shanchu(this.target.magic1,this);
//           GeZiManager.shanchu(this.node.getComponent(Character).turn3,this);
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
// import Character from "../../../BASE/Character";
// import state from "../../../game/time/state";
// import GeZiManager from "../../../Manager/GeZiManager";
// import { Message } from "../../../Message/Message";
// import MessageCenter from "../../../Message/MessageCenter";
// import SXX from "../../../Scharacter/SXX";
// import weapon from "../weapon";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class A503 extends weapon {
// 
//     TheNumber:string = 'A503';
// Wtype: number=4;
//   AL:number=0;
//   BL:number=0;
//   DT:boolean=true
//   TNJ: number=0;
//   SC:SXX=null
// levelup(n: string): void {
//     switch (n[4]) {
//         case "A":this.levelupA()
//             
//             break;
//     
//         default:this.levelupB()
//             break;
//     }
// }
//   levelupA(){ 
//   if (this.AL<3) {
//     this.AL++
//   }
// 
// }
// start(): void {
//     this.target=this.node.getComponent(Character)
//     this.target.magic1.push(this)
//     this.SC=this.target.node.getComponent(SXX)
// }
// 
// 
// 
//       levelupB(){ 
//         if(this.BL<3){this.BL+=1;
//            this.target.TNJJ[4]-=1
//    this.TNJ--
//      }}
//           Magic1(){
//            GeZiManager.JL+=this.AL
//       
//           GeZiManager.free-=this.target.FU[1]
//         
//             }
//           
//           remove(){
//             GeZiManager.shanchu(this.target.magic1,this);
//            GeZiManager.shanchu(this.node.getComponent(Character).turn3,this);
//                 }
// 
// 
//                 attack() {if(this.PPC()){state.ST = 3.5
// 
//                   
//                     GeZiManager.DLLM="A14X"
//                     GeZiManager.qing();
//                     if(this.node.getComponent(Character).magic1!=null){for(let a of this.node.getComponent(Character).magic1){a.Magic1();}}
//                let    an=this.getFar(GeZiManager.JL,this.target.ZB)
//                 
//                     GeZiManager.GeZis = [].concat(an);
//                 
//                     let g = new Message("", GeZiManager.GeZis, 1);
//                     for (let m of GeZiManager.YuanGong) {
//                 
//                 
//                       m.red()
//                       m.ReceiveMessage(g)
//                 
//                     }
//                     MessageCenter.MakeMessage("UIManager", "change", -1); 
//                     }
//                
//             
//             
//             
//             
//             
//             }
//             
//             
//             
//                 QD(an:number[]){
//               
//                     console.log(this.node.getComponent(Character).Pturn)
//                     if(this.node.getComponent(Character).attack2!=null){for(let a of this.node.getComponent(Character).magic2){a.Magic2();}}
//                       MessageCenter.MakeSHMessage("AM",an,1,this.node.getComponent(Character).Pturn, "mofa")
//                       MessageCenter.MakeSHMessage("AM",[this.node.getComponent(Character).ZB],this.getTNC(4),this.node.getComponent(Character).Pturn,"TN-")
//                   
//                       if(this.node.getComponent(Character).attack3!=null){for(let a of this.node.getComponent(Character).magic3){a.Magic3(an[0]);}}
//                   
//                   
//                   GeZiManager.PCP.TNC(GeZiManager.PCP.TN);
//                   GeZiManager.TNC[4]=4
//                   GeZiManager.Bu.push(4);
//                 GeZiManager.qing()
//                 }
//             
//             
//             
//             
//             
//             
//             
//             getFar(dis:number,ZB){
//                 let x;
//                 let y;
//                  let b=[]  
//                         if(ZB%8==0){x=8}else {x=ZB%8;}
//                     y=Math.ceil(ZB/8);
//             for (let index = 1; index < 65; index++) {
//               
//                let x1;
//                let y2;
//                    
//                        if( index%8==0){x1=8}else {x1=index%8;}
//                    y2=Math.ceil(index/8);
//                    if(Math.abs(x-x1)+Math.abs(y-y2)<=dis){b.push(index)}
//                  
//             }
//                 console.log(b)
//                 return b
//                 }
//             }
