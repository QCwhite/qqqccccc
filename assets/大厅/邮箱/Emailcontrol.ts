// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
//  // 这个名字一定要写，而且还注意不能取下面的类名不然cocosCreator会一直报警告

import { _decorator, Component } from 'cc';
const {ccclass, property} = _decorator;

type Ea={
 T1:string;
 T2:string;
 re:boolean;
}

@ccclass('Emailcontrol')
export default class NewClass extends Component {
    EAN:Ea[];
    mark:number;//标记哪封信
    
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {
        // this.mark=0;
        // let a:Ea={
        // T1:null,
        // T2:null,
        // re:true
        // }
        // this.EAN=new Array<Ea>(100).fill(a);
        // this.EAN[0].T1="1";
        // this.EAN[0].T2="2";
        // console.log(this.EAN[0].re);

        // this.node.getChildByName("Title").getComponent(cc.Label).string=this.EAN[0].T1;
        // this.node.getChildByName("Title").getChildByName("Text").getComponent(cc.Label).string=this.EAN[0].T2;

    }
//    // update (dt) {}
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
//  // 这个名字一定要写，而且还注意不能取下面的类名不然cocosCreator会一直报警告
// type Ea={
//  T1:string;
//  T2:string;
//  re:boolean;
// }
// const {ccclass, property} = cc._decorator;
// @ccclass
// export default class NewClass extends cc.Component {
//     EAN:Ea[];
//     mark:number;//标记哪封信
//     
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         this.mark=0;
//         let a:Ea={
//             T1:null,
//             T2:null,
//             re:true
//         }
//        this.EAN=new Array<Ea>(100).fill(a);
//         this.EAN[0].T1="1";
//        this.EAN[0].T2="2";
//        console.log(this.EAN[0].re);
// 
// this.node.getChildByName("Title").getComponent(cc.Label).string=this.EAN[0].T1;
// this.node.getChildByName("Title").getChildByName("Text").getComponent(cc.Label).string=this.EAN[0].T2;
// 
//     }
// 
//     // update (dt) {}
// }
