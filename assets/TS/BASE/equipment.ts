// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Label } from 'cc';
const {ccclass, property} = _decorator;

import ComponentBase from "./ComponentBase";
import Character from './Character';

@ccclass('Equipment')
export default class equipment extends ComponentBase {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
//   LIFE-CYCLE CALLBACKS:
//   onLoad () {}
target:Character=null
    start () {
this.target=this.node.getComponent(Character)
    }
//   update (dt) {}
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
        TNN(n:number){}
        changeEP(){


//          this.node.parent.getComponent(Shops).find(2,what.toLowerCase())
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
// import ComponentBase from "./ComponentBase";
// 
// 
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class equipment extends ComponentBase {
// 
//     @property(cc.Label)
//     label: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//    LIFE-CYCLE CALLBACKS:
// 
//    onLoad () {}
// 
//     start () {
// 
//     }
// 
//    update (dt) {}
//     getFar(dis:number,ZB){
//         let x;
//         let y;
//          let b=[]  
//                 if(ZB%8==0){x=8}else {x=ZB%8;}
//             y=Math.ceil(ZB/8);
//     for (let index = 1; index < 65; index++) {
//       
//        let x1;
//        let y2;
//            
//                if( index%8==0){x1=8}else {x1=index%8;}
//            y2=Math.ceil(index/8);
//            if(Math.abs(x-x1)+Math.abs(y-y2)<=dis){b.push(index)}
//          
//     }
//         console.log(b)
//         return b
//         }
// 
// 
//         TNN(n:number){}
// 
//         changeEP(){
// 
// 
//           this.node.parent.getComponent(Shops).find(2,what.toLowerCase())
//         }
// }
