// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, instantiate, Node, Prefab } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../../TS/BASE/Character";
import ComponentBase from "../../../TS/BASE/ComponentBase";

import GeZiManager from "../../../TS/Manager/GeZiManager";
import  gif1  from 'db://assets/TS/BASE/spineANDgif/gif';

@ccclass('WaterPP')
export default class waterPp extends ComponentBase {
   
c:Character=null
   waters:Node[]=[]
    
    @property(Prefab)
   waterPO:Prefab | null=null;
start(): void {

      this.c=this.node.parent.getComponent(Character)
      this.c.move3.push(this)


}
makewaterPO(){

      this.node.active=true;
      for(let a of this.waters){a.active=false;}
      //console.log(this.node.parent.getComponent(Character).WAT)

      for(let i=1;i<=this.node.parent.getComponent(Character).WAT;i++){
      let GD=instantiate(this.waterPO)
      GD.setParent(this.node)
      GD.getComponent(gif1).setBrightness(0.5)
      this.waters.push(GD)
      }

}
Move3(){
      this.node.active=true;
// this.makewaterPO();
      setTimeout(() => {
      if(this.c.DiXing=="water"){

      this.makewaterPO();


      }else{this.node.active=false;

   //   console.log("ice")
      }

      },100);


}
PO(n){


      let j=0
      for (let i = this.waters.length - 1; i >= 0; i--) {
      this.waters[i].getComponent(gif1).moveToNextFrame(21,25,1);

      j++
      if(j==n){return}
      }

      this.waters.length-=n;
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
// import Character from "../../../TS/BASE/Character";
// import ComponentBase from "../../../TS/BASE/ComponentBase";
// import { gif } from "../../../TS/BASE/spineANDgif/gif";
// import GeZiManager from "../../../TS/Manager/GeZiManager";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class waterPp extends ComponentBase {
// 
//    
// c:Character=null
//    waters:cc.Node[]=[]
//     
//     @property(cc.Prefab)
//    waterPO:cc.Prefab=null;
// 
// start(): void {
//    
//    this.c=this.node.parent.getComponent(Character)
//    this.c.move3.push(this)
//  
// 
// }
// 
// 
// makewaterPO(){
//    
//     this.node.active=true;
//      for(let a of this.waters){a.active=false;}
//        console.log(this.node.parent.getComponent(Character).WAT)
//         
//         for(let i=1;i<=this.node.parent.getComponent(Character).WAT;i++){
//             let GD=cc.instantiate(this.waterPO)
//            GD.setParent(this.node)
//            GD.getComponent(gif).setBrightness(0.5)
//          this.waters.push(GD)
//          }
// 
// }
// 
// Move3(){
//     this.node.active=true;
//  this.makewaterPO();
// setTimeout(() => {
//    if(this.c.DiXing=="water"){
// 
//       this.makewaterPO();
//       
//       
//          }else{this.node.active=false;
// 
//             console.log("ice")
//       }
//       
// },100);   
// 
// 
// }
// 
// 
// 
// 
// PO(n){
// 
// 
// let j=0
//     for (let i = this.waters.length - 1; i >= 0; i--) {
//         this.waters[i].getComponent(gif).moveToNextFrame(21,25,1);
// 
// j++
// if(j==n){return}
// }
// 
// this.waters.length-=n;
// }
// 
// 
// 
// 
// 
// }
