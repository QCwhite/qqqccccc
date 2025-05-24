// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator } from 'cc';
const {ccclass, property} = _decorator;

import Character from "../../BASE/Character";
import GeZiManager from "../../Manager/GeZiManager";
import { SHMessage } from "../../Message/SHMessage";
import BXX from "./BXX";
import SXX from '../../Scharacter/SXX';

@ccclass('B03')
export default class B03 extends BXX {
    target:Character=null;
    TheNumber:string = 'B03';
    Cname:string="石甲"
    SD=2;
    start () {
        this.target=this.node.getComponent(Character);
        this.target.behurt2.push(this)
        this.target.wk+=1;
  
      //  this.target

      
        this.target.Fus(-1)
       


        this.node.getComponent(SXX).getJNF(this.target.FU);
            this.changeEP()
    }
    Behurt2(m:SHMessage){


        this.SD-=1;
        if(this.SD==0){this.remove();}
    }
remove(){
        this.target.changeE("BXX")
        GeZiManager.shanchu(this.target.behurt2,this);
        this.target.wk-=1


        
        this.target.BFUs(-1)
       


        this.node.getComponent(SXX).getJNF(this.target.FU);



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
// 
// import Character from "../../BASE/Character";
// import GeZiManager from "../../Manager/GeZiManager";
// import { SHMessage } from "../../Message/SHMessage";
// 
// 
// import BXX from "./BXX";
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class B03 extends BXX {
// 
//     target:Character=null;
//     TheNumber:string = 'B03';
//     Cname:string="石甲"
//     SD=2;
// 
//     start () {
//         this.target=this.node.getComponent(Character);
//         this.target.behurt2.push(this)
//         this.target.wk+=1;
//        this.target.Mjia(+1)
//         
//     }
// 
//     Behurt2(m:SHMessage){
//       
//        
//         this.SD-=1;
//         if(this.SD==0){this.remove();}
//     }
// 
// remove(){
//     this.target.changeE("BXX")
//     GeZiManager.shanchu(this.target.behurt2,this);
//     this.target.wk-=1
//     this.target.Mjia(-1)
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
// }
