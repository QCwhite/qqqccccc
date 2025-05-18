// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import CXX from "./CXX";

@ccclass('C14')
export default class C14 extends CXX {
    target:Character=null;
    TheNumber:string ='C14';
           Cname:string="鸡脚"
           j:boolean=false
start () {
       this.target=this.node.getComponent(Character);
       this.target.HPm3.push(this)
       this.target.Walk(false)

}
HPM3(){
       if (this.target.HP<=this.target.MaxHP/2&&this.j==false) {
       this.target.TNJJ[1]-=1
       this.j=true
       }
       if (this.target.HP>this.target.MaxHP/2&&this.j) {
       this.target.TNJJ[1]+=1
       this.j=false
       }


}
remove(): void {
      if (this.j) {
       this.target.TNJJ[1]+=1
      }
       GeZiManager.shanchu(this.node.getComponent(Character).HPm3,this)

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
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import CXX from "./CXX";
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class C14 extends CXX {
//     target:Character=null;
//     TheNumber:string ='C14';
//            Cname:string="鸡脚"
//            j:boolean=false
// start () {
//     this.target=this.node.getComponent(Character);
//     this.target.HPm3.push(this)
//     
// }
// HPM3(){
//     if (this.target.HP<=this.target.MaxHP/2&&this.j==false) {
//         this.target.TNJJ[1]-=1
//         this.j=true
//     }
//     if (this.target.HP>this.target.MaxHP/2&&this.j) {
//         this.target.TNJJ[1]+=1
//         this.j=false
//     }
// 
// 
// }
// remove(): void {
//   GeZiManager.shanchu(this.node.getComponent(Character).HPm3,this) 
// 
// }
// }
