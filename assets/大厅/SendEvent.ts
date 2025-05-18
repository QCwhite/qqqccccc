// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('SendEvent')
export default class NewClass extends Component {
    
//   LIFE-CYCLE CALLBACKS:
     onLoad () {
//      关闭大厅的子节点的子字点的子节点
       for(let a of this.node.children){
       if(a.name!="Background"){
       a.active=false;
       }
       }
     }
    start () {

    }
////人物头像
Cha(){
      // this.node.dispatchEvent(new Event.EventCustom('cha',true));//向父节点大厅发信息
}
////排行榜
List(){
    //   this.node.dispatchEvent(new Event.EventCustom('list',true));
}
////商店
Shop(){
       //this.node.dispatchEvent(new Event.EventCustom('shop',true));
}
////局内配置
Oncon(){
     //  this.node.dispatchEvent(new Event.EventCustom('oncon',true));
}
////设置
Confi(){
     //  this.node.dispatchEvent(new Event.EventCustom('confi',true));
}
////邮箱
Mailb(){
      // this.node.dispatchEvent(new Event.EventCustom('mailb',true));

}
////公告栏
Not(){
      // this.node.dispatchEvent(new Event.EventCustom('not',true));

}
////抽奖
CJ(){
     //  this.node.dispatchEvent(new Event.EventCustom('cj',true));
//
}
////开始游戏
Start(){
      // this.node.dispatchEvent(new Event.EventCustom('start',true));
       this.node.getChildByName("Roomna").active=false;
       this.node.getChildByName("Roompa").active=false;

}
////返回
Back(){
      // this.node.dispatchEvent(new Event.EventCustom('back',true));
}
//   update (dt) {}
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
// const {ccclass, property} = _decorator;
// 
// @ccclass
// export default class NewClass extends Component {
//     
// 
//    LIFE-CYCLE CALLBACKS:
// 
//      onLoad () {
//       关闭大厅的子节点的子字点的子节点
//         for(let a of this.node.children){
//             if(a.name!="Background"){
//                 a.active=false;
//             }
//         }
//      }
// 
//     start () {
//         
//     }
// 
// //人物头像
// Cha(){
// this.node.dispatchEvent(new Event.EventCustom('cha',true));//向父节点大厅发信息
// }
// 
// //排行榜
// List(){
// this.node.dispatchEvent(new Event.EventCustom('list',true));
// }
// 
// //商店
// Shop(){
//     this.node.dispatchEvent(new Event.EventCustom('shop',true));
// }
// 
// //局内配置
// Oncon(){
//     this.node.dispatchEvent(new Event.EventCustom('oncon',true));
// }
// 
// //设置
// Confi(){
//     this.node.dispatchEvent(new Event.EventCustom('confi',true));
// }
// 
// //邮箱
// Mailb(){
//     this.node.dispatchEvent(new Event.EventCustom('mailb',true));
//  
// }
// 
// //公告栏
// Not(){
//     this.node.dispatchEvent(new Event.EventCustom('not',true));
//    
// }
// 
// //抽奖
// CJ(){
//     this.node.dispatchEvent(new Event.EventCustom('cj',true));
//   
// }
// 
// //开始游戏
// Start(){
//     this.node.dispatchEvent(new Event.EventCustom('start',true));
//     this.node.getChildByName("Roomna").active=false;
//     this.node.getChildByName("Roompa").active=false;
//    
// }
// 
// //返回
// Back(){
//     this.node.dispatchEvent(new Event.EventCustom('back',true));
// }
//    update (dt) {}
// 
// 
// }
