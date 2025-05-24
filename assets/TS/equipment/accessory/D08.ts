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
import DXX from "./DXX";

@ccclass('D08')
export default class D08 extends DXX {
    target:Character=null;
    TheNumber:string = 'D08';
    Cname:string="恶霸金链"
    start () {
       this.target=this.node.getComponent(Character);
       this.target.attack2.push(this)
           this.changeEP()
    }
    Attack2(an: number[]): void {
       let ak=[GeZiManager.P1.qi,GeZiManager.P2.qi,GeZiManager.P3.qi,GeZiManager.P4.qi,GeZiManager.P5.qi,GeZiManager.P6.qi]
       let HPP=[GeZiManager.P1.HP,GeZiManager.P2.HP,GeZiManager.P3.HP,GeZiManager.P4.HP,GeZiManager.P5.HP,GeZiManager.P6.HP]
       let c=this.target.qi;
       let d=this.target.HP;
       for(let a of ak){if(a>c){c=a}}
       for(let a of HPP){if(a>d){d=a}}

       if(this.target.qi==c){GeZiManager.dm+=1}
       if(this.target.HP==d){GeZiManager.dm+=1}
    }
remove(){
       GeZiManager.shanchu(this.target.attack2,this)
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
// 
// 
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import DXX from "./DXX";
// 
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class D08 extends DXX {
// 
//     target:Character=null;
//     TheNumber:string = 'D08';
//     Cname:string="恶霸金链"
// 
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.attack2.push(this)
//     }
//     Attack2(an: number[]): void {
//        let ak=[GeZiManager.P1.qi,GeZiManager.P2.qi,GeZiManager.P3.qi,GeZiManager.P4.qi,GeZiManager.P5.qi,GeZiManager.P6.qi]
//        let HPP=[GeZiManager.P1.HP,GeZiManager.P2.HP,GeZiManager.P3.HP,GeZiManager.P4.HP,GeZiManager.P5.HP,GeZiManager.P6.HP]
//        let c=this.target.qi;
//        let d=this.target.HP;
//        for(let a of ak){if(a>c){c=a}}
//        for(let a of HPP){if(a>d){d=a}}
//      
//        if(this.target.qi==c){GeZiManager.dm+=1}
//        if(this.target.HP==d){GeZiManager.dm+=1}
//     }
// 
// remove(){
//     GeZiManager.shanchu(this.target.attack2,this)
// }
// }
