// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, ScrollView, Prefab } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Sload')
export default class NewClass extends Component {
    @property(ScrollView)
    Scro: ScrollView | null = null;
    @property(Prefab)
    Per: Prefab | null = null;//角色button的预设体
    temp:number;//用于显示那个角色的详情
   
//    // LIFE-CYCLE CALLBACKS:
    start () {
        // this.node.on('srode',this.Rode,this);

    }
    generatePe(){
        // return cc.instantiate(this.Per);
    }
    
//    //角色
    Rode(){
//     //生成子节点
        // this.temp=0;
        // for(let a =0;a<this.Scro.getComponent("sssccon").chadeimgs.length;a++){
        // this.Scro.content.addChild(this.generatePe());
        // console.log(a);
        // event.stopPropagation();
        // }

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
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property(cc.ScrollView)
//     Scro: cc.ScrollView = null;
// 
//     @property(cc.Prefab)
//     Per: cc.Prefab = null;//角色button的预设体
//     temp:number;//用于显示那个角色的详情
//    
// 
//     // LIFE-CYCLE CALLBACKS:
//     start () {
//        this.node.on('srode',this.Rode,this);
//        
//     }
// 
//     generatePe(){
//         return cc.instantiate(this.Per);
//     }
//     
//     //角色
//     Rode(){
//      //生成子节点
//      this.temp=0;
//      for(let a =0;a<this.Scro.getComponent("sssccon").chadeimgs.length;a++){
//          this.Scro.content.addChild(this.generatePe());
//          console.log(a);
//          event.stopPropagation();
//      }
// 
//     }
// 
// }
